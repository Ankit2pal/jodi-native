import React, { useState, useRef, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    AsyncStorage,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import TextInputController from 'app/components/TextInputComponent';
import RadioController from 'app/components/RadioCoponent';
import PhoneInput from 'react-native-phone-number-input';
import Styles from './style';
import NavigationService from 'app/navigation/NavigationService';
import DatePickController from 'app/components/DatePickerComponent';
import moment from 'moment';
import { COLORS, SIZES } from '../../utils/constants';
import { onGetRegisterDataRequest } from 'app/store/slice/getRegisterDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { onMobileNumberValidRequest } from 'app/store/slice/mobileNumberValidSlice';
import { onValidateEmailRequest } from 'app/store/slice/validateEmailSlice';
import DropdownController from 'app/components/DropDownComponent';
import { registerationStep1 } from 'app/store/slice/registerPostSlice';

interface Props {}

const Createscreen: React.FC<Props> = (props) => {
    const [createforOpen, setCreateforOpen] = useState(false);
    const [createTypeValue, setCreateTypeValue] = useState([]);
    const [createTypeItems, setCreateTypeItems] = useState([
        { label: 'Self', value: 1 },
        { label: 'Son', value: 2 },
        { label: 'Daughter', value: 'Daughter' },
        { label: 'Sister', value: 'Sister' },
        { label: 'Brother', value: 'Brother' },
        { label: 'Relative', value: 'Relative' },
        { label: 'Friend', value: 'Friend' },
    ]);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [checked, setChecked] = useState('first');
    const [checkedgender, setCheckedGender] = useState('first');

    const [date, setDate] = useState(false);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const phoneInput = useRef<PhoneInput>(null);
    const getRegisterData = useSelector((state) => state.getRegisterData);
    const mobileNumberValid = useSelector((state) => state.mobileNumberValid);
    console.log('qwertyuioiuytdsdfghjkjhgfx', mobileNumberValid.data);

    const data = useSelector((state) => state.registerPost);
    const [mobilenumber, setMobilenumber] = useState();

    const fetchUserData = async () => {
        const list = await AsyncStorage.getItem('pay');
        const requiredList = JSON.parse(list);
        console.log('Full Name: ', requiredList?.FullName);
        setFirstName(requiredList?.FullName);
        setCheckedGender(requiredList?.GenderId);
        setMobilenumber(requiredList?.MobileNumber);
        console.log('mobile number data', requiredList?.MobileNumber);
    };

    useEffect(() => {
        fetchUserData();
        return () => {};
    }, []);

    // useEffect(() => {
    //     setFirstName(data?.FullName);
    //     setCheckedGender(data?.GenderId);
    //     setMobileno(data?.MobileNumber);
    // }, []);
    // console.log('datatatatatatattatataatat', data?.FullName);

    // console.log('mobileno', mobileno);
    console.log('phoneInput', phoneInput.current?.state.code);
    console.log('phoneInput ##', phoneInput.current?.state.number);
    // console.log('combain', phoneInput.current?.state.code + mobileno);

    const onMobileSubmit = () => {
        console.log('onMobileSubmit');
        const payload = {
            MobileNumber: phoneInput.current.state.code + mobileno,
        };
        console.log('payload &&&', payload.MobileNumber);
        dispatch(onMobileNumberValidRequest(payload));
    };
    const onEmailSubmit = () => {
        const payload = {
            EmailId: email,
        };
        dispatch(onValidateEmailRequest(payload));
    };

    // To store the data in redux
    const handleSubmit = async () => {
        const payload = {
            FullName: `${firstName} ${lastName}`,
            MobileNumber: mobilenumber,
            GenderId: checkedgender,
            ProfileFor: createTypeValue,
            DOB: date,
            email: email,
        };
        try {
            // const payload = {
            //     FullName: name,
            //     MobileNumber: phonenumber,
            //     GenderId: genderValue,
            // };
            await AsyncStorage.setItem(
                'Profile',
                JSON.stringify({
                    FullName: `${firstName} ${lastName}`,
                    MobileNumber: mobilenumber,
                    GenderId: checkedgender,
                    ProfileFor: createTypeValue,
                    DOB: date,
                    email: email,
                }),
            );
        } catch (error) {
            console.log('Err', error);
        }
        const ProfileScreen = await AsyncStorage.getItem('Profile');
        console.log('createProfile sCREEN ', ProfileScreen);

        // dispatch(registerationStep1(payload));
        console.log('payload data', payload);
        NavigationService.navigate('CreateProfile');
    };

    return (
        <View style={Styles.safeviewstyle}>
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>
                <View style={Styles.createProfileText}>
                    <View>
                        <Text style={Styles.text1}>Profile Creating For</Text>
                        <View style={Styles.radiobtnView}>
                            <DropdownController
                                open={createforOpen}
                                value={createTypeValue}
                                items={createTypeItems}
                                setOpen={setCreateforOpen}
                                setValue={setCreateTypeValue}
                                setItems={setCreateTypeItems}
                                placeholder={'Profile For'}
                                searchable={true}
                                style={Styles.dropdownStyle}
                                onChangeItem={(item) => {
                                    console.log('qwerty', item);
                                }}
                                listMode={'SCROLLVIEW'}
                                zIndex={90}
                            />
                        </View>
                    </View>
                    <View style={Styles.genderView}>
                        <Text style={Styles.text1}>Gender</Text>
                        <View style={Styles.genderradiobtn}>
                            <RadioController
                                value={getRegisterData.data?.data.gender[0].Id}
                                status={
                                    checkedgender === getRegisterData.data?.data.gender[0].Id
                                        ? 'checked'
                                        : 'unchecked'
                                }
                                onPress={() =>
                                    setCheckedGender(getRegisterData.data?.data.gender[0].Id)
                                }
                                text={getRegisterData.data?.data.gender[0].GenderName}
                            />
                            <RadioController
                                value={getRegisterData.data?.data.gender[1].Id}
                                status={
                                    checkedgender === getRegisterData.data?.data.gender[1].Id
                                        ? 'checked'
                                        : 'unchecked'
                                }
                                onPress={() =>
                                    setCheckedGender(getRegisterData.data?.data.gender[1].Id)
                                }
                                text={getRegisterData.data?.data.gender[1].GenderName}
                            />
                        </View>
                    </View>
                    <View style={Styles.genderView}>
                        <Text style={Styles.text1}>Your Name</Text>
                        <View style={Styles.yournameview}>
                            <TextInputController
                                label="First Name"
                                text={firstName}
                                mode="outlined"
                                onChangeText={(firstName) => setFirstName(firstName)}
                                style={Styles.firstName}
                                theme={{
                                    colors: {
                                        primary: 'grey', // Outline color here
                                    },
                                }}
                            />
                            <TextInputController
                                label="Last Name"
                                text={lastName}
                                mode="outlined"
                                onChangeText={(lastName) => setLastName(lastName)}
                                style={Styles.firstName}
                                theme={{
                                    colors: {
                                        primary: 'grey', // Outline color here
                                    },
                                }}
                            />
                        </View>
                    </View>
                    <View style={Styles.genderView}>
                        <Text style={Styles.text1}>Date of birth</Text>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => {
                                setOpen(true);
                            }}
                            style={Styles.dateBirthStyle}>
                            <Text
                                style={{
                                    color: date ? COLORS.dotPrimary : COLORS.subTitle,
                                    margin: 4,
                                    padding: 4,
                                    fontSize: 16,
                                    marginLeft: 5,
                                }}>
                                {date
                                    ? moment(date, 'DD-MM-YYYY').format('DD/MM/YYYY')
                                    : 'Date of Birth'}
                            </Text>
                        </TouchableOpacity>
                        <DatePickController
                            mode="date"
                            open={open}
                            date={new Date()}
                            onConfirm={(date: any) => {
                                setOpen(false);
                                setDate(date);
                                console.log(date);
                            }}
                            onCancel={() => {
                                setOpen(false);
                            }}
                            modal={undefined}
                        />
                    </View>
                    <View style={Styles.genderView}>
                        <Text style={Styles.text1}>Mobile Number</Text>
                        <PhoneInput
                            ref={phoneInput}
                            value={mobilenumber}
                            defaultCode="IN"
                            layout="second"
                            onChangeText={(mobilenumber) => {
                                setMobilenumber(mobilenumber);
                                // if (mobileno.length > 10) {
                                // onMobileSubmit();
                                //}
                            }}
                            withDarkTheme
                            withShadow
                            autoFocus
                            // containerStyle={Styles.mobileStyle}
                            placeholder={'Mobile Number'}
                        />
                    </View>
                    <View style={Styles.genderView}>
                        <Text style={Styles.text1}>Email ID </Text>
                        <TextInputController
                            label="Email"
                            text={email}
                            mode="outlined"
                            onChangeText={(email) => {
                                setEmail(email);
                                // onEmailSubmit();
                            }}
                            onEndEditing={() => onEmailSubmit()}
                            style={{ height: 40, width: '60%', marginHorizontal: 10 }}
                            theme={{
                                colors: {
                                    primary: 'grey', // Outline color here
                                },
                            }}
                        />
                    </View>
                    <TouchableOpacity
                        style={Styles.touchableOpacity}
                        onPress={() => handleSubmit()}>
                        <Text style={Styles.text5}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

Createscreen.defaultProps = {};
export default Createscreen;
