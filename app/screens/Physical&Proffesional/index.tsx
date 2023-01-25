import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Platform,
    AsyncStorage,
} from 'react-native';
import { Text } from 'react-native-paper';
import DropdownController from 'app/components/DropDownComponent';
import { COLORS, SIZES, width, height } from '../../utils/constants';
import Styles from './style';
import styles from '../Onboarding/styles';
import NavigationService from 'app/navigation/NavigationService';
import { useDispatch, useSelector } from 'react-redux';
import { onGetRegisterDataRequest } from 'app/store/slice/getRegisterDataSlice';

interface Props {}

const Physicalscreen: React.FC<Props> = (props) => {
    const dispatch = useDispatch();

    const [bodyTypeOpen, setBodyTypeOpen] = useState(false);
    const [bodyTypeValue, setBodyTypeValue] = useState([]);
    const [bodyTypeItems, setBodyTypeItems] = useState([
        { label: 'Fat', value: 'Fat' },
        { label: 'Thin', value: 'Thin' },
        { label: 'Medium', value: 'Medium' },
    ]);

    const [complexianOpen, setComplexianOpen] = useState(false);
    const [complexianValue, setComplexianValue] = useState([]);
    const [complexianItems, setComplexianItems] = useState([
        { label: 'Extremely fair skin', value: 'Extremely fair skin' },
        { label: 'Fair skin', value: 'Fair skin' },
        { label: 'Medium skin', value: 'Medium skin' },
        { label: 'Olive skin', value: 'Olive skin' },
        { label: 'Brown skin', value: 'Brown skin' },
        { label: 'Black skin', value: 'Black skin' },
    ]);

    const [physicalStatusOpen, setPhysicalStatusOpen] = useState(false);
    const [physicalStatusValue, setPhysicalStatusValue] = useState([]);
    const [physicalStatusItems, setPhysicalStatusItems] = useState([
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Weak', value: 'Weak' },
    ]);

    const [weightOpen, setWeightOpen] = useState(false);
    const [weightValue, setWeightValue] = useState([]);
    const [weightItems, setWeightItems] = useState([
        { label: '30-40', value: '30-40' },
        { label: '40-50', value: '40-50' },
        { label: '50-60', value: '50-60' },
        { label: '60-70', value: '60-70' },
        { label: '70-80', value: '80-90' },
        { label: '90-100', value: '90-100' },
        { label: '100+', value: '100+' },
    ]);

    const [heightOpen, setHeightOpen] = useState(false);
    const [heightValue, setHeightValue] = useState([]);
    const [heightItems, setHeightItems] = useState([
        { label: '100-110 cm', value: '100-110 cm' },
        { label: '110-120 cm', value: '110-120 cm' },
        { label: '120-130 cm', value: '120-130 cm' },
        { label: '130-140 cm', value: '130-140 cm' },
        { label: '140-150 cm', value: '140-150 cm' },
        { label: '150-160 cm', value: '150-160 cm' },
        { label: '160-170 cm', value: '160-170 cm' },
        { label: '170-180 cm', value: '170-180 cm' },
        { label: '180+', value: '180+' },
    ]);

    const [highestEduOpen, setHighestEduOpen] = useState(false);
    const [highestEduValue, setHighestEduValue] = useState([]);
    const [highestEduItems, setHighestEduItems] = useState([
        { label: 'Graduate in Health Science ', value: 'Graduate in Health Science' },
        {
            label: 'Graduate in Information Technology',
            value: 'Graduate in Information Technology',
        },
        {
            label: 'Graduate in Buisness Administartion',
            value: 'Graduate in Buisness Administartion',
        },
        { label: 'Graduate in Human Resource', value: 'Graduate in Human Resource' },
        { label: 'PostGraduate in Health Science', value: 'PostGraduate in Health Science' },
        {
            label: 'PostGraduate in Information Technology',
            value: 'PostGraduate in Information Technology',
        },
        {
            label: 'PostGraduate in Buisness Administartion',
            value: 'PostGraduate in Buisness Administartion',
        },
        { label: 'PostGraduate in Human Resource', value: 'PostGraduate in Human Resource' },
    ]);

    const [occupationOpen, setOccupationOpen] = useState(false);
    const [occupationValue, setOccupationValue] = useState([]);
    const [occupationItems, setOccupationItems] = useState([
        { label: 'Doctor', value: 'Doctor' },
        { label: 'Engineer', value: 'Engineer' },
        { label: 'Electrician', value: 'Electrician' },
        { label: 'Other...', value: 'Other...' },
    ]);

    const [employmentTypeOpen, setEmploymentTypeOpen] = useState(false);
    const [employmentTypeValue, setEmploymentTypeValue] = useState([]);
    const [employmentTypeItems, setemploymentTypeItems] = useState([
        { label: 'Private', value: 'Private' },
        { label: 'Goverment', value: 'Goverment' },
        { label: 'Self-employed', value: 'Self-employed' },
        { label: 'Other...', value: 'Other...' },
    ]);

    const [annualIncomeOpen, setAnnualIncomeOpen] = useState(false);
    const [annualIncomeValue, setAnnualIncomeValue] = useState([]);
    const [annualIncomeItems, setAnnualIncomeItems] = useState([
        { label: '1Lakh - 2Lakh', value: '1Lakh - 2Lakh' },
        { label: '2Lakh - 3Lakh', value: '2Lakh - 3Lakh' },
        { label: '3Lakh - 4Lakh', value: '3Lakh - 4Lakh' },
        { label: '4Lakh - 5Lakh', value: '4Lakh - 5Lakh' },
        { label: '5Lakh+', value: '5Lakh+' },
    ]);
    const getRegisterData = useSelector((state) => state.getRegisterData);
    console.log('let get start ::', getRegisterData);

    useEffect(() => {
        dispatch(onGetRegisterDataRequest());
    }, []);

    const onSubmit = async () => {
        const payload = {
            bodyType: bodyTypeValue,
            complexion: complexianValue,
            physicalstatus: physicalStatusValue,
            weight: weightValue,
            height: heightValue,
            highestEducation: highestEduValue,
            occupation: occupationValue,
            employementType: employmentTypeValue,
            annualIncome: annualIncomeValue,
        };
        console.log('payload data physical', payload);
        try {
            await AsyncStorage.setItem(
                'physical',
                JSON.stringify({
                    bodyType: bodyTypeValue,
                    complexion: complexianValue,
                    physicalstatus: physicalStatusValue,
                    weight: weightValue,
                    height: heightValue,
                    highestEducation: highestEduValue,
                    occupation: occupationValue,
                    employementType: employmentTypeValue,
                    annualIncome: annualIncomeValue,
                }),
            );
        } catch (error) {
            console.log('Err', error);
        }
        NavigationService.navigate('FamilyScreen');
        const getPhysicalData = await AsyncStorage.getItem('physical');
        console.log('Physical data', getPhysicalData);
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.container}>
                <View style={Styles.subContainer}>
                    <Text style={Styles.physicalInfoText}>PHYSICAL INFORMATION</Text>
                    <Text style={Styles.headingText}>Body Type</Text>
                    <DropdownController
                        open={bodyTypeOpen}
                        value={bodyTypeValue}
                        items={bodyTypeItems}
                        setOpen={setBodyTypeOpen}
                        setValue={setBodyTypeValue}
                        setItems={setBodyTypeItems}
                        placeholder={'Select your Body Type'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={90}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>Complexian</Text>
                    <DropdownController
                        open={complexianOpen}
                        value={complexianValue}
                        items={complexianItems}
                        setOpen={setComplexianOpen}
                        setValue={setBodyTypeValue}
                        setItems={setBodyTypeItems}
                        placeholder={'Select your Complexian'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={80}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>Physical Status</Text>
                    <DropdownController
                        open={physicalStatusOpen}
                        value={physicalStatusValue}
                        items={physicalStatusItems}
                        setOpen={setPhysicalStatusOpen}
                        setValue={setPhysicalStatusValue}
                        setItems={setPhysicalStatusItems}
                        placeholder={'Select your Physical Status'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={70}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>Weight (in kg)</Text>
                    <DropdownController
                        open={weightOpen}
                        value={weightValue}
                        items={weightItems}
                        setOpen={setWeightOpen}
                        setValue={setWeightValue}
                        setItems={setWeightItems}
                        placeholder={'Select your Weight'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={60}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>Height (in cm)</Text>
                    <DropdownController
                        open={heightOpen}
                        value={heightValue}
                        items={heightItems}
                        setOpen={setHeightOpen}
                        setValue={setHeightValue}
                        setItems={setHeightItems}
                        placeholder={'Select your Height'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={50}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.partnerPreText}>PATNER PROFESSIONAL</Text>
                    <Text style={Styles.headingText}>Highest Education</Text>
                    <DropdownController
                        open={highestEduOpen}
                        value={highestEduValue}
                        items={highestEduItems}
                        setOpen={setHighestEduOpen}
                        setValue={setHighestEduValue}
                        setItems={setHighestEduItems}
                        placeholder={'Select your Education'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={40}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>Occupation</Text>
                    <DropdownController
                        open={occupationOpen}
                        value={occupationValue}
                        items={occupationItems}
                        setOpen={setOccupationOpen}
                        setValue={setOccupationValue}
                        setItems={setOccupationItems}
                        placeholder={'Select your Occupation'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={30}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>Employment Type</Text>
                    <DropdownController
                        open={employmentTypeOpen}
                        value={employmentTypeValue}
                        items={employmentTypeItems}
                        setOpen={setEmploymentTypeOpen}
                        setValue={setEmploymentTypeValue}
                        setItems={setemploymentTypeItems}
                        placeholder={'Select your Employment'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={20}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>Annual Income</Text>
                    <DropdownController
                        open={annualIncomeOpen}
                        value={annualIncomeValue}
                        items={annualIncomeItems}
                        setOpen={setAnnualIncomeOpen}
                        setValue={setAnnualIncomeValue}
                        setItems={setAnnualIncomeItems}
                        placeholder={'Select your Annual Income'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={10}
                    />
                </View>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => onSubmit()}
                    style={Styles.continueTouchableOpacity}>
                    <Text style={Styles.continueText}>Next</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

Physicalscreen.defaultProps = {};

export default Physicalscreen;
