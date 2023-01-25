import React, { useEffect, useState } from 'react';
import Styles from './style';
import { View, Text, StyleSheet, AsyncStorage, TouchableOpacity, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TextInput } from 'react-native-paper';
import NavigationService from 'app/navigation/NavigationService';
import TextInputController from 'app/components/TextInputComponent';
import DropdownController from 'app/components/DropDownComponent';
import { useDispatch, useSelector } from 'react-redux';
import { onRegisterPostRequest, shortRegistration } from 'app/store/slice/registerPostSlice';
import { onGetRegisterDataRequest } from 'app/store/slice/getRegisterDataSlice';

interface Props {}

const Signup: React.FC<Props> = (props) => {
    const [genderOpen, setGenderOpen] = useState(false);
    const [genderValue, setGenderValue] = useState();
    const [genderItems, setGenderItems] = useState([]);

    const [name, setName] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [phonenumber, setPhonenumber] = React.useState('');
    const dispatch = useDispatch();
    const data = useSelector((state) => state.registerPost);
    console.log('viralllllllllllllllll', data);
    const getRegisterData = useSelector((state) => state.getRegisterData);
    console.log('dataataaatatatatatata ::', getRegisterData);

    useEffect(() => {
        dispatch(onGetRegisterDataRequest());
    }, []);

    useEffect(() => {
        console.log('genderValue', genderValue);

        // dispatch(onGetRegisterDataRequest());
    }, [genderValue]);

    const registerPost = () => {
        const payload = {
            FullName: name,
            MobileNumber: phonenumber,
            GenderId: genderValue,
        };
        console.log('payload :::>>>', payload);
        dispatch(onRegisterPostRequest(payload));
        // NavigationService.navigate('Login');
    };

    const preSubmit = async () => {
        const payload = {
            FullName: name,
            MobileNumber: phonenumber,
            GenderId: genderValue,
        };
        console.log('reg post ', payload);
        try {
            // const payload = {
            //     FullName: name,
            //     MobileNumber: phonenumber,
            //     GenderId: genderValue,
            // };
            await AsyncStorage.setItem(
                'pay',
                JSON.stringify({
                    FullName: name,
                    MobileNumber: phonenumber,
                    GenderId: genderValue,
                }),
            );
        } catch (error) {
            console.log('Err', error);
        }
        NavigationService.navigate('Createscreen');
        const list = await AsyncStorage.getItem('pay');
        // console.log('async storage', list);
    };

    return (
        <View style={{ backgroundColor: 'white' }}>
            <ScrollView>
                <FastImage
                    style={Styles.imagestyle1}
                    source={require('../../assets/Logo.png')}
                    resizeMode={'contain'}
                />
                <FastImage
                    style={Styles.imagestyle2}
                    source={require('../../assets/wedding-invitation-card-the-bride-and-groom-cute-couple-in-traditional-indian-dress-cartoon-character-illustration-vector.png')}
                    resizeMode={'contain'}
                />
                <View style={Styles.maincontainer}>
                    <View>
                        <Text style={Styles.text1}>Join with us to find perfect match</Text>
                    </View>
                    <View style={Styles.textinputcontainer}>
                        <TextInputController
                            label="Enter Bride \ Groom Name "
                            text={name}
                            mode="outlined"
                            onChangeText={(name) => setName(name)}
                            style={Styles.textinput1}
                            theme={{
                                colors: {
                                    primary: '#0b421b', // Outline color here
                                },
                            }}
                        />
                        <View style={{ height: 10 }} />
                        {/* <TextInputController
                            label="Gender"
                            mode="outlined"
                            text={gender}
                            onChangeText={(gender) => setGender(gender)}
                            style={Styles.textinput1}
                            theme={{
                                colors: {
                                    primary: '#0b421b', // Outline color here
                                },
                            }}
                        /> */}

                        <DropdownController
                            open={genderOpen}
                            value={genderValue}
                            items={getRegisterData.data?.data.gender.map((item: any) => ({
                                label: item.GenderName,
                                value: item.Id,
                            }))}
                            searchable={true}
                            setOpen={setGenderOpen}
                            setValue={setGenderValue}
                            setItems={setGenderItems}
                            placeholder={'Gender'}
                            style={Styles.dropdownStyle}
                            onChangeItem={(item) => {
                                console.log(item);
                            }}
                            listMode={'SCROLLVIEW'}
                            zIndex={70}
                        />

                        <View style={{ height: 30 }} />
                        <TextInputController
                            label="Phone No."
                            mode="outlined"
                            text={phonenumber}
                            onChangeText={(phonenumber) => setPhonenumber(phonenumber)}
                            style={Styles.textinput1}
                            theme={{
                                colors: {
                                    primary: '#0b421b', // Outline color here
                                },
                            }}
                            keyboardType={'numeric'}
                        />
                    </View>
                    <TouchableOpacity style={Styles.touchableopacity1} onPress={() => preSubmit()}>
                        <Text style={Styles.registertextstyle}>REGISTER NOW</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

Signup.defaultProps = {};

export default Signup;
