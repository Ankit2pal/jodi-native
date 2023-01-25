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

const Permanentscreen: React.FC<Props> = (props) => {
    const [addressOpen, setAddressOpen] = useState(false);
    const [addressValue, setAddressValue] = useState([]);
    const [addressItems, setAddressItems] = useState([
        { label: 'Surat', value: 'Surat' },
        { label: 'Ahemdabad', value: 'Ahemdabad' },
    ]);

    const [countryOpen, setCountryOpen] = useState(false);
    const [countryValue, setCountryValue] = useState([]);
    const [countryItems, setCountryItems] = useState([
        { label: 'India', value: 'India' },
        { label: 'United-States', value: 'United-States' },
    ]);

    const [stateOpen, setStateOpen] = useState(false);
    const [stateValue, setStateValue] = useState([]);
    const [stateItems, setstateItems] = useState([
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
    ]);

    const [propertyTypeOpen, setPropertyTypeOpen] = useState(false);
    const [propertyTypeValue, setPropertyTypeValue] = useState([]);
    const [propertyTypeItems, setPropertyTypeItems] = useState([
        { label: 'Own', value: 'Owen' },
        { label: 'Rented', value: 'Rented' },
    ]);

    const [countryOpen1, setCountryOpen1] = useState(false);
    const [countryValue1, setCountryValue1] = useState([]);
    const [countryItems1, setCountryItems1] = useState([
        { label: 'India', value: 'India' },
        { label: 'United-States', value: 'United-States' },
    ]);

    const [stateOpen1, setStateOpen1] = useState(false);
    const [stateValue1, setStateValue1] = useState([]);
    const [stateItems1, setStateItems1] = useState([
        { label: 'Gujarat', value: 'Gujarat' },
        { label: 'Maharashtra', value: 'Maharashtra' },
    ]);

    const [districtOpen1, setDistrictOpen1] = useState(false);
    const [districtValue1, setDistrictValue1] = useState([]);
    const [districtItems1, setDistrictItems1] = useState([
        { label: 'Surat', value: 'Surat' },
        { label: 'Bardoli', value: 'Bardoli' },
    ]);

    const [cityOpen1, setCityOpen1] = useState(false);
    const [cityValue1, setCityValue1] = useState([]);
    const [cityItems1, setCityItems1] = useState([
        { label: 'Surat', value: 'Surat' },
        { label: 'Ahemdabad', value: 'Ahemdabad' },
    ]);

    const [addressOpen1, setAddressOpen1] = useState(false);
    const [addressValue1, setAddressValue1] = useState([]);
    const [addressItems1, setAddressItems1] = useState([
        { label: 'Surat', value: 'Surat' },
        { label: 'Ahemdabad', value: 'Ahemdabad' },
    ]);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.container}>
                <View style={Styles.subContainer}>
                    <Text style={Styles.physicalInfoText}>PERMANENT LOCATION</Text>
                    <Text style={Styles.headingText}>Address</Text>
                    <DropdownController
                        open={addressOpen}
                        value={addressValue}
                        items={addressItems}
                        setOpen={setAddressOpen}
                        setValue={setAddressValue}
                        setItems={setAddressItems}
                        placeholder={'Address'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={140}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>Country</Text>
                    <DropdownController
                        open={countryOpen}
                        value={countryValue}
                        items={countryItems}
                        setOpen={setCountryOpen}
                        setValue={setCountryValue}
                        setItems={setCountryItems}
                        placeholder={'Select your Country'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={130}
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
                        setItems={setstateItems}
                        placeholder={`Select your State`}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={120}
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
                        placeholder={`Select your District`}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={110}
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
                        zIndex={100}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>Property Type</Text>
                    <DropdownController
                        open={propertyTypeOpen}
                        value={propertyTypeValue}
                        items={propertyTypeItems}
                        setOpen={setPropertyTypeOpen}
                        setValue={setPropertyTypeValue}
                        setItems={setPropertyTypeItems}
                        placeholder={'Select your Property Type'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={90}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.partnerPreText}>WORKING LOCATION</Text>
                    <Text style={Styles.headingText}>Country</Text>
                    <DropdownController
                        open={countryOpen1}
                        value={countryValue1}
                        items={countryItems1}
                        setOpen={setCountryOpen1}
                        setValue={setCountryValue1}
                        setItems={setCountryItems1}
                        placeholder={'Select your Country'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={80}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>State</Text>
                    <DropdownController
                        open={stateOpen1}
                        value={stateValue1}
                        items={stateItems1}
                        setOpen={setStateOpen1}
                        setValue={setStateValue1}
                        setItems={setStateItems1}
                        placeholder={'Select your State'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={70}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>District</Text>
                    <DropdownController
                        open={districtOpen1}
                        value={districtValue1}
                        items={districtItems1}
                        setOpen={setDistrictOpen1}
                        setValue={setDistrictValue1}
                        setItems={setDistrictItems1}
                        placeholder={'Select your District'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={60}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>City</Text>
                    <DropdownController
                        open={cityOpen1}
                        value={cityValue1}
                        items={cityItems1}
                        setOpen={setCityOpen1}
                        setValue={setCityValue1}
                        setItems={setCityItems1}
                        placeholder={'Select your City'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={50}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>Address</Text>
                    <DropdownController
                        open={addressOpen1}
                        value={addressValue1}
                        items={addressItems1}
                        setOpen={setAddressOpen1}
                        setValue={setAddressValue1}
                        setItems={setAddressItems1}
                        placeholder={'Address'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={40}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>Address Type</Text>
                    <DropdownController
                        open={addressOpen1}
                        value={addressValue1}
                        items={addressItems1}
                        setOpen={setAddressOpen1}
                        setValue={setAddressValue1}
                        setItems={setAddressItems1}
                        placeholder={'Select your Address Type'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={30}
                    />
                </View>

                <TouchableOpacity
                    activeOpacity={1}
                    style={Styles.continueTouchableOpacity}
                    onPress={() => NavigationService.navigate('Home')}>
                    <Text style={Styles.continueText}>Next</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

Permanentscreen.defaultProps = {};

export default Permanentscreen;
