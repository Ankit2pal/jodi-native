import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Platform,
} from 'react-native';
import { Text } from 'react-native-paper';
import DropdownController from 'app/components/DropDownComponent';
import { COLORS, SIZES, width, height } from '../../utils/constants';
import Styles from './style';
import styles from '../Onboarding/styles';
import NavigationService from 'app/navigation/NavigationService';

interface Props {}

const FamilyScreen: React.FC<Props> = (props) => {
    const [familyTypeOpen, setFamilyTypeOpen] = useState(false);
    const [familyTypeValue, setFamilyTypeValue] = useState([]);
    const [familyTypeItems, setFamilyTypeItems] = useState([
        { label: 'Joint-Family', value: 'Joint-Family' },
        { label: 'Nuclear-Family', value: 'Nuclear-Family' },
    ]);

    const [familyStatusOpen, setFamilyStatusOpen] = useState(false);
    const [familyStatusValue, setFamilyStatusValue] = useState([]);
    const [familyStatusItems, setFamilyStatusItems] = useState([
        { label: 'Joint-Family', value: 'Joint-Family' },
        { label: 'Nuclear-Family', value: 'Nuclear-Family' },
    ]);

    const [fatherNameOpen, setFatherNameOpen] = useState(false);
    const [fatherNameValue, setFatherNameValue] = useState([]);
    const [fatherNameItems, setFatherNameItems] = useState([
        { label: 'XYZ', value: 'XYZ' },
        { label: 'ZXY', value: 'ZXY' },
    ]);

    const [motherNameOpen, setMotherNameOpen] = useState(false);
    const [motherNameValue, setMotherNameValue] = useState([]);
    const [motherNameItems, setMotherNameItems] = useState([
        { label: 'XYZ', value: 'XYZ' },
        { label: 'ZYX', value: 'ZYX' },
    ]);

    const [numberOfBrothersOpen, setNumberOfBrothersOpen] = useState(false);
    const [numberOfBrothersValue, setNumberOfBrothersValue] = useState([]);
    const [numberOfBrothersItems, setNumberOfBrothersItems] = useState([
        { label: '1-2', value: '1-2' },
        { label: '2-3', value: '2-3' },
        { label: '3-4', value: '3-4' },
    ]);

    const [numberOfSistersOpen, setNumberOfSistersOpen] = useState(false);
    const [numberOfSistersValue, setNumberOfSistersValue] = useState([]);
    const [numberOfSistersItems, setNumberOfSistersItems] = useState([
        { label: '1-2', value: '1-2' },
        { label: '2-3', value: '2-3' },
        { label: '3-4', value: '3-4' },
    ]);

    const [starOpen, setStarOpen] = useState(false);
    const [starValue, setStarValue] = useState([]);
    const [starItmes, setStarItmes] = useState([
        { label: 'yyyy', value: 'yyyy' },
        { label: 'aaaa', value: 'aaaa' },
    ]);

    const [highestEduOpen, setHighestEduOpen] = useState(false);
    const [highestEduValue, setHighestEduValue] = useState([]);
    const [highestEduItems, setHighestEduItems] = useState([
        { label: 'Graduation in Helth Science', value: 'Graduation in Helth Science' },
        { label: 'GovermentGraduation in Helth Science', value: 'Graduation in Computer Science' },
        { label: 'Self-employed', value: 'Self-employed' },
        { label: 'Other...', value: 'Other...' },
    ]);

    const [employmentTypeOpen, setEmploymentTypeOpen] = useState(false);
    const [employmentTypeValue, setEmploymentTypeValue] = useState([]);
    const [employmentTypeItems, setEmploymentTypeItems] = useState([
        { label: 'Private', value: 'Private' },
        { label: 'Goverment', value: 'Goverment' },
        { label: 'Self-employed', value: 'Self-employed' },
        { label: 'Other...', value: 'Other...' },
    ]);
    const [occupationOpen, setOccupationOpen] = useState(false);
    const [occupationValue, setOccupationValue] = useState([]);
    const [occupationItems, setOccupationItems] = useState([
        { label: 'Private', value: 'Private' },
        { label: 'Goverment', value: 'Goverment' },
        { label: 'Self-employed', value: 'Self-employed' },
    ]);
    const [annualIncomeOpen, setAnnualIncomeOpen] = useState(false);
    const [annualIncomeValue, setAnnualIncomeValue] = useState([]);
    const [annualIncomeItems, setAnnualIncomeItems] = useState([
        { label: '1-2Lakh', value: '1-2Lakh' },
        { label: '2-3Lakh', value: '2-3Lakh' },
        { label: '3-4Lakh', value: '3-4Lakh' },
    ]);
    const [countryOpen, setCountryOpen] = useState(false);
    const [countryValue, setCountryValue] = useState([]);
    const [countryItems, setCountryItems] = useState([
        { label: 'India', value: 'India' },
        { label: 'United States', value: 'Unitesd States' },
    ]);
    const [stateOpen, setStateOpen] = useState(false);
    const [stateValue, setStateValue] = useState([]);
    const [stateItems, setStateItems] = useState([
        { label: 'Gujarat', value: 'Gujarat' },
        { label: 'Maharashtra', value: 'Maharashtra' },
    ]);
    const [districtOpen, setDistrictOpen] = useState(false);
    const [districtValue, setDistrictValue] = useState([]);
    const [districtItems, setDistrictItems] = useState([
        { label: 'Surat', value: 'Surat' },
        { label: 'Bardoli', value: 'Bardoli' },
    ]);
    const [cityOpen, setCityOpen] = useState(false);
    const [cityValue, setCityValue] = useState([]);
    const [cityItems, setCityItems] = useState([
        { label: 'Surat', value: 'Surat' },
        { label: 'Ahemdabad', value: 'Ahemdabad' },
        { label: 'Vadodra', value: 'Vadodra' },
    ]);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.container}>
                <View style={Styles.subContainer}>
                    <Text style={Styles.physicalInfoText}>Family Details</Text>
                    <Text style={Styles.headingText}>Family Type</Text>
                    <DropdownController
                        open={familyTypeOpen}
                        value={familyTypeValue}
                        items={familyTypeItems}
                        setOpen={setFamilyTypeOpen}
                        setValue={setFamilyTypeValue}
                        setItems={setFamilyTypeItems}
                        placeholder={'Select your Family Type'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={140}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>Family Status</Text>
                    <DropdownController
                        open={familyStatusOpen}
                        value={familyStatusValue}
                        items={familyStatusItems}
                        setOpen={setFamilyStatusOpen}
                        setValue={setFamilyStatusValue}
                        setItems={setFamilyStatusItems}
                        placeholder={'Select your Family Status'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={130}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>Father's Name</Text>
                    <DropdownController
                        open={fatherNameOpen}
                        value={fatherNameValue}
                        items={fatherNameItems}
                        setOpen={setFatherNameOpen}
                        setValue={setFatherNameValue}
                        setItems={setFatherNameItems}
                        placeholder={`Father's Name`}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={120}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>Mother's Name</Text>
                    <DropdownController
                        open={motherNameOpen}
                        value={motherNameValue}
                        items={motherNameItems}
                        setOpen={setMotherNameOpen}
                        setValue={setMotherNameValue}
                        setItems={setMotherNameItems}
                        placeholder={`Mother's Name`}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={110}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>Number of Brothers</Text>
                    <DropdownController
                        open={numberOfBrothersOpen}
                        value={numberOfBrothersValue}
                        items={numberOfBrothersItems}
                        setOpen={setNumberOfBrothersOpen}
                        setValue={setNumberOfBrothersValue}
                        setItems={setNumberOfBrothersItems}
                        placeholder={'Select your Brothers Number'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={100}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>Number of Sisters</Text>
                    <DropdownController
                        open={numberOfSistersOpen}
                        value={numberOfSistersValue}
                        items={numberOfSistersItems}
                        setOpen={setNumberOfSistersOpen}
                        setValue={setNumberOfSistersValue}
                        setItems={setNumberOfSistersItems}
                        placeholder={'Select your Sisters Number'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={90}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.partnerPreText}>PATNER PREFERENCES</Text>
                    <Text style={Styles.headingText}>Star</Text>
                    <DropdownController
                        open={starOpen}
                        value={starValue}
                        items={starItmes}
                        setOpen={setStarOpen}
                        setValue={setStarValue}
                        setItems={setStarItmes}
                        placeholder={'Select your Star'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={80}
                    />
                </View>
                <View style={Styles.subContainer}>
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
                        zIndex={70}
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
                        setItems={setEmploymentTypeItems}
                        placeholder={'Select your Employment'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={60}
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
                        zIndex={60}
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
                        zIndex={50}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>Contry</Text>
                    <DropdownController
                        open={countryOpen}
                        value={countryValue}
                        items={countryItems}
                        setOpen={setCountryOpen}
                        setValue={setCountryItems}
                        setItems={setCountryItems}
                        placeholder={'Select your Contry'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={40}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>State</Text>
                    <DropdownController
                        open={stateOpen}
                        value={stateValue}
                        items={stateItems}
                        setOpen={setStateOpen}
                        setValue={setStateValue}
                        setItems={setStateItems}
                        placeholder={'Select your State'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={30}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>District</Text>
                    <DropdownController
                        open={districtOpen}
                        value={districtValue}
                        items={districtItems}
                        setOpen={setDistrictOpen}
                        setValue={setDistrictValue}
                        setItems={setDistrictItems}
                        placeholder={'Select your District'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={20}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>City</Text>
                    <DropdownController
                        open={cityOpen}
                        value={cityValue}
                        items={cityItems}
                        setOpen={setCityOpen}
                        setValue={setCityValue}
                        setItems={setCityItems}
                        placeholder={'Select your City'}
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
                    onPress={() => NavigationService.navigate('Permanentscreen')}
                    style={Styles.continueTouchableOpacity}>
                    <Text style={Styles.continueText}>Next</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

FamilyScreen.defaultProps = {};

export default FamilyScreen;
