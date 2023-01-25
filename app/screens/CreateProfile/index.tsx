import React, { useState, useEffect, useRef } from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Platform,
    AsyncStorage,
} from 'react-native';
import Styles from './style';
import { Text } from 'react-native-paper';
import DropdownController from 'app/components/DropDownComponent';
import { COLORS, SIZES, width, height } from '../../utils/constants';
import TextInputController from 'app/components/TextInputComponent';
import { Checkbox } from 'react-native-paper';
import NavigationService from 'app/navigation/NavigationService';
import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';
import { onGetCasteDataRequest } from 'app/store/slice/getCasteSlice';
import { onGetStateDataRequest } from 'app/store/slice/getStateSlice';
import { onGetCityDataRequest } from 'app/store/slice/getCitySlice';
import { onGetCountryDataRequest } from 'app/store/slice/getCountrySlice';
import { onGetPostalCodeDataRequest } from 'app/store/slice/postalCodeSlice';
import FastImage from 'react-native-fast-image';
import { registerationStep2 } from 'app/store/slice/registerPostSlice';

interface Props {}

const CreateProfile: React.FC<Props> = (props) => {
    const [village, setVillage] = useState();
    const [vendorId, setVendorId] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [checkedBox, setCheckedBox] = React.useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

    const [religionOpen, setReligionOpen] = useState(false);
    const [religionValue, setReligionValue] = useState('');
    const [religionItems, setReligionItems] = useState([]);

    const [casteOpen, setCasteOpen] = useState(false);
    const [casteValue, setCasteValue] = useState([]);
    const [casteItems, setCasteItems] = useState([]);

    const [countryOpen, setCountryOpen] = useState(false);
    const [countryValue, setCountryValue] = useState([]);
    const [countryItems, setCountryItems] = useState([]);

    const [stateOpen, setStateOpen] = useState(false);
    const [stateValue, setStateValue] = useState([]);
    const [stateItems, setStateItems] = useState([]);

    const [cityOpen, setCityOpen] = useState(false);
    const [cityValue, setCityValue] = useState([]);
    const [cityItems, setCityItems] = useState([]);

    // const [postalCodeOpen, setPostalCodeOpen] = useState(false);
    const [postalCodeValue, setPostalCodeValue] = useState([]);
    // const [postalCodeItems, setpostalCodeItems] = useState([]);
    const [maritalStatusOpen, setMaritalStatusOpen] = useState(false);
    const [maritalStatusValue, setMaritalStatusValue] = useState('');
    const [maritalStatusItems, setMaritalStatusItems] = useState([]);

    const dispatch = useDispatch();
    const getRegisterData = useSelector((state) => state.getRegisterData);
    const casteData = useSelector((state) => state.getCasteData);
    const stateData = useSelector((state) => state.getStateData);
    const cityData = useSelector((state) => state.getCityData);
    const countryData = useSelector((state) => state.getCountryData);
    const postalCodeData = useSelector((state) => state.postalCode);
    console.log('postalCodeData :::::>>>:::', postalCodeData);
    const dropdownref = useRef();
    console.log('PostalCode', postalCodeData);

    useEffect(() => {
        dispatch(onGetCountryDataRequest());
    }, []);

    useEffect(() => {
        console.log('val = ', dropdownref.current);
        console.log('postalCodeValue', postalCodeValue);
        const postalDate = { countryValue, postalCodeValue };
        if (postalCodeValue.length == 6) {
            dispatch(onGetPostalCodeDataRequest(postalDate));
        }
    }, [postalCodeValue]);

    useEffect(() => {
        dispatch(onGetCasteDataRequest(religionValue));
        return () => {};
    }, [religionValue]);

    useEffect(() => {
        dispatch(onGetStateDataRequest(countryValue));
        return () => {};
    }, [countryValue]);

    useEffect(() => {
        dispatch(onGetCityDataRequest({ countryValue, stateValue }));
        return () => {};
    }, [countryValue, stateValue]);

    // to store data in redux
    const handleSubmit = async () => {
        const payload = {
            Religion: religionValue,
            Caste: casteValue,
            Country: countryValue,
            State: stateValue,
            City: cityValue,
            Maritaial: maritalStatusValue,
            Village: village,
            PostalCode: postalCodeValue,
            VendorId: vendorId,
            Password: password,
        };
        // dispatch(registerationStep2(payload));
        try {
            // const payload = {
            //     FullName: name,
            //     MobileNumber: phonenumber,
            //     GenderId: genderValue,
            // };
            await AsyncStorage.setItem(
                'CreateProfile',
                JSON.stringify({
                    Religion: religionValue,
                    Caste: casteValue,
                    Country: countryValue,
                    State: stateValue,
                    City: cityValue,
                    Maritaial: maritalStatusValue,
                    Village: village,
                    PostalCode: postalCodeValue,
                    VendorId: vendorId,
                    Password: password,
                }),
            );
        } catch (error) {
            console.log('Err', error);
        }
        const data = await AsyncStorage.getItem('CreateProfile');
        console.log("qwertyuiop[asdfghjkl",data);

        NavigationService.navigate('Welcome');
    };
    const data = useSelector((state) => state.registerPost);

    // console.log('biryaniiiiiii',data?.MobileNumber);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.container}>
                <View style={Styles.subContainer}>
                    <Text style={Styles.religionText}>Religion</Text>
                    <DropdownController
                        open={religionOpen}
                        value={religionValue}
                        items={getRegisterData.data?.data.religion.map((item: any) => ({
                            label: item.ReligionName,
                            value: item.Id,
                        }))}
                        searchable={true}
                        setOpen={setReligionOpen}
                        setValue={setReligionValue}
                        setItems={setReligionItems}
                        placeholder={'Select your Religion'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => console.log('item', item)}
                        listMode={'SCROLLVIEW'}
                        zIndex={70}
                        dropDownDirection={'BOTTOM'}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>Caste</Text>
                    <DropdownController
                        open={casteOpen}
                        value={casteValue}
                        items={casteData.data?.data.map((item: any) => ({
                            label: item.CastName,
                            value: item.CastName,
                        }))}
                        searchable={true}
                        setOpen={setCasteOpen}
                        setValue={setCasteValue}
                        setItems={setCasteItems}
                        placeholder={'Select your Caste'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={60}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>Country</Text>
                    <DropdownController
                        open={countryOpen}
                        value={countryValue}
                        items={countryData.data?.data.map((item: any) => ({
                            label: item.name,
                            value: item.iso2,
                        }))}
                        searchable={true}
                        setOpen={setCountryOpen}
                        setValue={setCountryValue}
                        setItems={setCountryItems}
                        placeholder={'Select your Country'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={50}
                        searchable={true}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>State</Text>
                    <DropdownController
                        open={stateOpen}
                        value={stateValue}
                        items={stateData.data?.data.map((item: any) => ({
                            label: item.name,
                            value: item.iso2,
                        }))}
                        searchable={true}
                        setOpen={setStateOpen}
                        setValue={setStateValue}
                        setItems={setStateItems}
                        placeholder={'Select your State'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={40}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>City</Text>
                    <DropdownController
                        open={cityOpen}
                        value={cityValue}
                        items={cityData.data?.data.map((item: any) => ({
                            label: item.name,
                            value: item.id,
                        }))}
                        searchable={true}
                        setOpen={setCityOpen}
                        setValue={setCityValue}
                        setItems={setCityItems}
                        placeholder={'Select your City'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={20}
                    />
                </View>

                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>Marital Status</Text>
                    <DropdownController
                        open={maritalStatusOpen}
                        value={maritalStatusValue}
                        items={getRegisterData.data?.data.maritalStatus.map((item: any) => ({
                            label: item.MaritalStatusName,
                            value: item.MaritalStatusName,
                        }))}
                        searchable={true}
                        setOpen={setMaritalStatusOpen}
                        setValue={setMaritalStatusValue}
                        setItems={setMaritalStatusItems}
                        placeholder={'Select your Marital Status'}
                        style={Styles.dropdownStyle}
                        onChangeItem={(item) => {
                            console.log(item);
                        }}
                        listMode={'SCROLLVIEW'}
                        zIndex={20}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>Village</Text>
                    <TextInputController
                        label="Village"
                        text={village}
                        mode="outlined"
                        onChangeText={(village: any) => setVillage(village)}
                        style={Styles.village}
                        theme={{
                            colors: {
                                primary: 'grey',
                            },
                        }}
                    />
                </View>
                <View style={Styles.subContainer}>
                    <Text style={Styles.headingText}>Postal Code</Text>
                    <TextInputController
                        label="Postal Code"
                        text={postalCodeValue}
                        mode="outlined"
                        onChangeText={(postalCodeValue: any) => setPostalCodeValue(postalCodeValue)}
                    />
                </View>
                <View style={Styles.vendorIdStyle}>
                    <Text style={Styles.headingText}>Vendor Id</Text>
                    <TextInputController
                        label="Vendor Id"
                        text={vendorId}
                        mode="outlined"
                        //placeholder='Vendor Id option'
                        onChangeText={(vendorId: any) => setVendorId(vendorId)}
                        style={Styles.village}
                        theme={{
                            colors: {
                                primary: 'grey',
                            },
                        }}
                    />
                </View>

                <View style={Styles.vendorIdStyle}>
                    <Text style={Styles.headingText}>Password</Text>
                    <TextInputController
                        label="Password"
                        text={password}
                        mode="outlined"
                        //placeholder='Vendor Id option'
                        onChangeText={(password: any) => setPassword(password)}
                        style={Styles.village}
                        theme={{
                            colors: {
                                primary: 'grey',
                            },
                        }}
                    />
                </View>
                <View style={Styles.vendorIdStyle}>
                    <Text style={Styles.headingText}>Confirm Password</Text>
                    <TextInputController
                        label="Confirm Password"
                        text={confirmPassword}
                        mode="outlined"
                        //placeholder='Vendor Id option'
                        onChangeText={(confirmPassword: any) => setConfirmPassword(confirmPassword)}
                        style={Styles.village}
                        theme={{
                            colors: {
                                primary: 'grey',
                            },
                        }}
                    />
                </View>
                <View style={Styles.checkBoxStyle}>
                    <Checkbox
                        status={checkedBox ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setCheckedBox(!checkedBox);
                        }}
                    />
                    <Text style={Styles.termsText} onPress={() => setModalVisible(!isModalVisible)}>
                        I Accept your Terms and Conditions
                    </Text>
                </View>
                <Modal
                    animationType={'fade'}
                    transparent
                    visible={isModalVisible}
                    swipeDirection={'down'}
                    onRequestClose={() => {
                        setModalVisible(!isModalVisible);
                    }}
                    backdropOpacity={0.5}>
                    <View style={Styles.modelStyle}>
                        <View style={Styles.termsView}>
                            <Text style={Styles.condtionText}>Terms and Conditions</Text>
                            <TouchableOpacity
                                onPress={() => setModalVisible(!isModalVisible)}
                                style={Styles.crossStyle}>
                                <FastImage
                                    source={require('../../assets/cross.png')}
                                    style={Styles.fastImage}
                                />
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            <View style={Styles.scrollView}>
                                <Text style={Styles.textTermsStyle}>
                                    Using Jodi Banav Matrimony is subject to the following terms and
                                    conditions. (hereafter referred to as "Jodi Banav" and including
                                    its affiliates, agents, and other representatives).
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    The following terms and conditions govern all services that Jodi
                                    Banav and its affiliates deliver to you. You voluntarily agree
                                    to the terms and conditions shown below when you visit or
                                    register with Jodi Banav. Additionally, you will be subject to
                                    the terms and conditions applicable to any current or future
                                    Jodi Banav services and any Jodi Banav-affiliated businesses,
                                    whether or not they are listed on the Jodi Banav Web site.
                                    Before making any payment in relation to any service, please
                                    read the numerous services offered by Jodi Banav and make sure
                                    you understand them. This agreement will govern your
                                    relationship with Jodi Banav and all transactions or services
                                    by, with, or in connection with Jodi Banav for all purposes and
                                    shall be unconditionally and irrevocably binding between the
                                    parties. As Users using Jodi Banav's services, it will be
                                    assumed that you have read, understood, and expressly accepted
                                    and agreed to the terms and conditions hereof. This agreement
                                    shall govern all of your rights, privileges, obligations, and
                                    liabilities with respect to any transactions or services made
                                    by, with, or associated with Jodi Banav for any reason. The
                                    terms and conditions may occasionally be modified by Jodi Banav
                                    at its sole discretion.
                                </Text>
                                <Text style={Styles.boldText}>1.Criteria</Text>
                                <Text style={Styles.textTermsStyle}>
                                    In Jodi Banav, the minimum age to register is 18 years old for
                                    women and 21 years old for men, while the maximum age is 70
                                    years old.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    Even if your family, friends, or other relatives contribute
                                    information during registration on your behalf with your express
                                    authorization, Jodi Banav will still rely on that information
                                    and believe it to be genuine and accurate. Jodi Banav is not
                                    required to confirm the veracity or accuracy of the information
                                    you provided.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    You affirm and guarantee that you are capable legally, have the
                                    right to enter this Agreement, and are not barred or otherwise
                                    restricted by any applicable legislation. You have read the
                                    Terms and Conditions and concur that you must abide by them
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    Jodi Banav hereby reserves the right to immediately terminate
                                    your membership and/or your right to use the services of Jodi
                                    Banav without providing a refund of any fees paid to Jodi Banav
                                    if at any time it determines, in its sole discretion, that you
                                    are not eligible to become a member or that You have
                                    misrepresented Your eligibility.
                                </Text>
                                <Text style={Styles.boldText}>2. Registration</Text>
                                <Text style={Styles.textTermsStyle}>
                                    - It is assumed that you would provide your personal information
                                    honestly and fairly during the registration procedure. You would
                                    understand that providing honest, accurate, current, and
                                    comprehensive information is necessary for efficient and
                                    effective matchmaking. Additionally, you agree that you alone
                                    are accountable for any information submitted on this
                                    application form. It is expressly stated that neither Jodi Banav
                                    nor any of its officers or affiliates shall be liable for any
                                    act or omission committed by any person based on any information
                                    or data provided by you in Jodi Banav, and you agree to hold
                                    Jodi Banav harmless from and against all claims, actions, or
                                    demands brought by any person based on any act or omission based
                                    on information provided by you in Jodi Banav. If Jodi Banav
                                    needs more information to better serve you, you agree to provide
                                    us with it.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    - As a Member, please refrain from entering important profile
                                    information in any fields other than those that apply.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    - If at any time Jodi Banav learns or has reason to suspect that
                                    any information you have provided during registration or in any
                                    other way is false, inaccurate, or vague, Jodi Banav shall have
                                    the right to suspend or terminate your membership, retain the
                                    membership fee you have already paid and refuse to provide you
                                    with any further services.
                                </Text>
                                <Text style={Styles.boldText}>3. Account</Text>
                                <Text style={Styles.textTermsStyle}>
                                    If you use or register on this site, you are in charge of
                                    keeping your password and account information secure, as well as
                                    limiting access to your computer. You also agree to take
                                    responsibility for any and all activity that takes place under
                                    your account or password. Furthermore, you fully acknowledge
                                    that the information you submit to Jodi Banav is accessible to
                                    all other users as well and that neither Jodi Banav nor any of
                                    its employees are liable for any misuse, exploitation, or abuse
                                    of the information by third parties. In their sole discretion,
                                    Jodi Banav and its affiliates reserve the right to reject
                                    service, delete or edit content, cancel subscriptions, and
                                    terminate accounts.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    You are not allowed to use Jodi Banav to advertise or solicit
                                    other members to purchase or sell goods or services. You also
                                    agree not to send other members any spam emails or chain
                                    letters. It is against these rules to use any information
                                    obtained from Jodi Banav to harass, abuse, or harm another
                                    person or to contact, advertise to, solicit, or sell to any
                                    member without the member's prior explicit consent or the
                                    consent of Jodi Banav. You understand and agree that Jodi Banav
                                    cannot monitor the behaviour of its members off Jodi Banav.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    Each member should choose their preferred partner and
                                    accordingly proceed. If a member doesn't specify a preference or
                                    sets a preference incorrectly, Jodi Banav will choose a partner
                                    based on the user's profile information, which the member can
                                    change at any time.
                                </Text>
                                <Text style={Styles.boldText}>4. Membership</Text>
                                <Text style={Styles.textTermsStyle}>
                                    Membership is not executed automatically; Jodi Banav has the
                                    authority to grant admission. When Jodi Banav accepts your
                                    profile and payment as required, that is when you become a
                                    member of Jodi Banav. Membership and admittance rights are only
                                    granted to those who meet the requirements of Jodi Banav policy.
                                    The same are stated below:
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    - Indian Citizens and Nationals
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    - Persons of Indian Origin (PIO)
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    - Non-Resident Indians (NRI)
                                </Text>
                                <View style={Styles.memberDuration}>
                                    <Text style={Styles.boldText}>Membership Duration:</Text>
                                    <Text style={Styles.textTermsStyle}>
                                        You will remain a member of Jodi Banav until:
                                    </Text>
                                </View>
                                <Text style={Styles.textTermsStyle}>
                                    - Jodi Banav either completes its commitments to you by
                                    providing its services to you, or you stop the membership
                                    agreement.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    - When you are under ‘paid membership’: Your paid membership's
                                    validity is measured in days (45, 90, or 180), not months (1.5,
                                    3, or 6).
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    - You have the option of choosing Standing Instructions (SI) for
                                    payments toward upcoming repurchases of currently acquired
                                    packages. Your consent will be used on or before the expiration
                                    dates if you want to do so.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    - Your membership is intended for personal use, thus, it is
                                    private. Without the express written agreement of Jodi Banav, it
                                    may not be assigned, transferred, or licensed for use by any
                                    other person or company.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    <Text style={Styles.memberCancel}>
                                        Membership Cancellation:
                                    </Text>{' '}
                                    Either party may cancel the membership by giving the other party
                                    written notice. For any member who violates any of the rules,
                                    Jodi Banav maintains the right to revoke membership, suspend a
                                    profile, or disable access. The membership fees are not
                                    refundable in any case.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    Laws of India will apply to the membership and any violations of
                                    the terms and conditions set out herein because the membership
                                    is deemed to have been entered into at Hyderabad, India. Courts
                                    with the relevant jurisdiction in Hyderabad will have the final
                                    say on any disputes relating to or otherwise affecting
                                    membership, including how any of the terms should be
                                    interpreted. You hereby expressly consent to the Hyderabad
                                    court's jurisdiction over any potential conflicts.
                                </Text>
                                <Text style={Styles.boldText}>5. Privacy Principles</Text>
                                <Text style={Styles.textTermsStyle}>
                                    To fully understand our policies, please read and comprehend our
                                    Privacy Policy, which also applies to your visit to Jodi Banav.
                                    Members acknowledge that Jodi Banav and its network have no
                                    influence over how search engines behave and that Jodi Banav is
                                    not liable for any such actions by other search engines. Search
                                    engines may crawl and index members' profiles.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    Jodi Banav disclaims all liability for any mistakes, omissions,
                                    or statements made on any of its pages, linked pages, or other
                                    websites. You are urged to independently confirm the accuracy of
                                    all material before acting in reliance on it because Jodi Banav
                                    does not in any way endorse any advertising on its web pages.
                                    The connected sites are not under Jodi Banav's control, and Jodi
                                    Banav is not liable for their contents, any changes or updates
                                    to those contents, or any links contained in a linked site.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    Jodi Banav reserves the right to periodically alter its features
                                    and offerings in response to member feedback or in response to a
                                    modification of Company policy.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    Before responding to any matrimonial advertisement, members are
                                    urged to conduct adequate/thorough research. The claims and
                                    statements made by advertisers regarding the status, age, and
                                    income of other members are not backed by Jodi Banav, and the
                                    website also disclaims responsibility for the information
                                    contained in any voice messages that members may exchange.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    In newspapers, on television, or in any other media, Jodi Banav
                                    reserves the right but does not have to publish Matrimonial
                                    Classifieds based on your Jodi Banav profile. Before taking any
                                    action in response to these matrimonial adverts, members are
                                    urged to conduct adequate and complete research. The claims and
                                    representations made by responders regarding any particulars,
                                    including but not limited to status, age, and income, are not
                                    guaranteed, assured, or subscribed to by Jodi Banav.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    All electronic communications from Jodi Banavmatrimony.com,
                                    including SMSes, emails, Whatsapp messages, and other instant
                                    messages, are sent purely for your personal use. Any such
                                    message forwarding is not permitted. Any challenges or
                                    complications that may occur as a result of forwarding emails or
                                    messages addressed to you are totally your responsibility.
                                </Text>
                                <Text style={Styles.boldText}>6. Online Conduct & Behavior</Text>
                                <Text style={Styles.textTermsStyle}>
                                    You are accountable for the data you post or transmit through
                                    Jodi Banav's services, including your profile and photos.
                                    Defamatory, blasphemous, abusive, obscene, sexually explicit,
                                    profane, intimidating, illegal, or infringing upon someone
                                    else's rights, including intellectual property rights, are not
                                    permitted to be posted or transmitted in any manner. No
                                    information or content may include information about any of Jodi
                                    Banav's opponents, including their contact information. You
                                    agree to refrain from using your membership, whether it be
                                    online or offline, as a channel for chain letters, spam emails,
                                    solicitations, advertising, or any other type of marketing.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    <Text style={Styles.memberCancel}>Extraneous contents:</Text>{' '}
                                    Jodi Banav hereby alerts and warns its members of the
                                    possibility of unauthorised content posting by any person,
                                    including members and unauthorised users, and advises discretion
                                    in access since such content, information, or representation may
                                    not be suitable for you and may even be offensive. In no way
                                    will Jodi Banav be held accountable for such content,
                                    information, or assertions. Additionally, Jodi Banav disclaims
                                    all liability for any abuse by any user of data and information
                                    in the public domain, including any edits, updates, deletions,
                                    reproductions, sales, or transmissions.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    Contacting other members requires the verification of their
                                    mobile numbers. Mobile users can access all profiles. The Jodi
                                    Banav website will no longer host any profiles whose mobile
                                    numbers have not been validated.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    As a free member, you can only contact a select group of other
                                    members to express your interest. This offer is only good for a
                                    short time. The option to offer this functionality to members is
                                    one that Jodi Banav reserves.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    If you send other members "abusive, obscene or sexually
                                    oriented" message(s), your membership will be immediately
                                    suspended. Your profile may be suspended by Jodi Banav at any
                                    time and without prior warning.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    If your photo or horoscope is invalid, unclear, or unrelated,
                                    Jodi Banav maintains the right to alter or delete it.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    Only messages seeking a life partner should be addressed to
                                    individuals of the other gender. You are not permitted to abuse
                                    Jodi Banav's services on the pretence of "dating," "flirting,"
                                    "friendship," etc.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    If Jodi Banav discovers any illegal or objectionable material,
                                    or if your contact information is entered in the wrong fields,
                                    they retain the right to modify your profile. Jodi Banav may
                                    change the profile for additional, not listed herewith, causes.
                                    Jodi Banav has the right to suspend your account if any
                                    offensive material is discovered in your video clipping.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    Without first obtaining permission from the owner of any
                                    proprietary or leased rights to the content, information, or
                                    trademarks, you will not upload or transmit that material. In no
                                    way will Jodi Banav be held accountable for any lawsuit filed by
                                    a third party due to the actions you stated here.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    When a prospect is selected for further consideration or is
                                    liked by other prospects, they will be contacted. By adjusting
                                    the Privacy Settings for the account owner, this action can
                                    still be kept private.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    Any content that a member posts in areas of the website that are
                                    open to the public and discuss social media reserves the right
                                    to be removed or edited by Jodi Banav.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    In accordance with the guidelines outlined above, Jodi Banav
                                    reserves the right—but is not obligated—to edit, delete,
                                    obscure, or refuse to publish any content or information.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    Jodi Banav has put restrictions on the copying and downloading
                                    of photos and content from specific portal parts in order to
                                    increase the security of its users.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    We just check the member's profile information. The interested
                                    parties themselves must conduct character checks.
                                </Text>
                                <Text style={Styles.boldText}>7. Communication</Text>
                                <Text style={Styles.textTermsStyle}>
                                    You hereby expressly request and invite Jodi Banav and/or its
                                    authorized personnel to communicate with you through any telecom
                                    resources at the registered number that you have provided in
                                    order to describe, explicate, and clarify the various services
                                    offered by Jodi Banav and to help, aid, or support you in using
                                    the aforementioned services from Jodi Banav.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    If you'd like to stop getting emails, texts, or phone calls from
                                    Jodi Banav at any time, you can email the company and/or its
                                    authorized staff to let them know you'd like to stop receiving
                                    those types of communications.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    You acknowledge that until Jodi Banav and/or its authorized
                                    professionals explicitly inform you that communication with them
                                    will stop, it will be assumed that you intend to continue
                                    soliciting and inviting all communications from Jodi Banav.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    You guarantee that neither you nor the cell number you provided
                                    is listed on the Do Not Disturb/National Customer Preference
                                    Register and that you have made the necessary changes to your
                                    registration.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    In addition, and in any case, you do hereby also unconditionally
                                    accept and undertake that any preferences you establish with or
                                    registrations made with the Do Not Disturb ("DND
                                    Register")/National Customer Preference Register shall be
                                    superseded by this invitation and solicitation ("NCPR"). Without
                                    limiting the foregoing and in any case, by explicitly inviting
                                    and soliciting Jodi Banav's services, you also unconditionally
                                    agree that your rights under the Telecom Commercial
                                    Communications Customer Preference Regulations, 2010, or any
                                    subsequent amendments thereto, or under the NCPR, are suspended
                                    or void until you expressly communicate the end of the
                                    relationship.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    You also unqualifiedly promise to hold Jodi Banav and its
                                    officials harmless from any losses, damages, fines, fees, or
                                    other repercussions that may result from any violation or breach
                                    of the aforementioned representation, commitment, or
                                    undertaking, whether direct or indirect.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    You communicate with us electronically when you visit Jodi Banav
                                    or send us emails and permit us to communicate with you online.
                                    Messages from us to you will be sent to your email address or
                                    posted on this website. You concur that all contracts,
                                    notifications, disclosures, and other communications we deliver
                                    to you electronically satisfy all written communication
                                    requirements established by law.
                                </Text>
                                <Text style={Styles.boldText}>8. Copyright</Text>
                                <Text style={Styles.textTermsStyle}>
                                    All materials on this website, including text, graphics, logos,
                                    button icons, pictures, audio clips, downloads, data
                                    compilations, and software, are the exclusive property of Jodi
                                    Banav or its content suppliers and are thus protected by Indian
                                    and international copyright laws. Jodi Banav is the sole owner
                                    of the compilation of all contents on this website, which is
                                    protected by Indian and international copyright laws. Every
                                    piece of software used on this website is owned by Jodi Banav or
                                    its software vendors and is covered by Indian and international
                                    copyright laws.
                                </Text>
                                <Text style={Styles.boldText}>9. Trademark</Text>
                                <Text style={Styles.textTermsStyle}>
                                    The following domain names are owned by Jodi Banav and are not
                                    to be used with permission: Jodi Banavmatrimony.com Jodi
                                    Banav.in Jodi Banav.co.in Jodi Banav.net
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    The registered trademarks of Jodi Banav or its subsidiaries
                                    include other marks mentioned on our website. Other Jodi Banav
                                    images, such as page headers, button icons, scripts, and service
                                    names, are either the property of Jodi Banav or its affiliates
                                    or are used under licence. All other trademarks not owned by
                                    Jodi Banav or its subsidiaries that appear on this site are the
                                    property of their respective owners, who may or may not be
                                    affiliated with, connected to, or sponsored by Jodi Banav or its
                                    subsidiaries. Jodi Banav's trademarks and trade address may not
                                    be used in connection with any product or service that is not
                                    Jodi Banav in any manner that is likely to cause confusion among
                                    members or in any manner.
                                </Text>
                                <Text style={Styles.boldText}>10. Site Access and License</Text>
                                <Text style={Styles.textTermsStyle}>
                                    You are given a restricted permission by Jodi Banav to view and
                                    use this website for your own personal purposes; you are not
                                    permitted to download (other than page caching) or change it in
                                    any way, unless you have Jodi Banav's express written approval.
                                    This licence forbids the following actions: selling or otherwise
                                    transferring this site or its contents; collecting and using any
                                    product listings, descriptions, or prices; altering this site or
                                    its contents; downloading or copying account information for the
                                    benefit of another merchant; and using data mining, robots, or
                                    other tools for similar information gathering and extraction.
                                    Without Jodi Banav's prior written approval, you are not allowed
                                    to copy, duplicate, sell, resell, access, or otherwise exploit
                                    this website or any part of it for commercial gain. Without
                                    express written consent, you may not use framing techniques or
                                    tools to enclose any trademark, logo, or other intellectual
                                    material of Jodi Banav and our affiliates. This includes using
                                    pictures, text, page layout, or forms. Without Jodi Banav's
                                    prior written approval, you are not permitted to utilise any
                                    Meta tags or other types of "hidden text" employing its name or
                                    trademarks. The Jodi Banav permit or licence is terminated by
                                    any illegal use. Without specific written consent, you are not
                                    permitted to use any Jodi Banav trademarks, logos, or other
                                    proprietary graphics or marks as part of the connection. You
                                    expressly authorise Jodi Banav to automatically copy your
                                    profiles from the Jodi Banav domain to its community-based
                                    matrimonial sites based on member information relevance, such as
                                    caste, subcaste, religion, age, marital status, etc., by
                                    registering your profile through any of our domains.
                                </Text>
                                <Text style={Styles.boldText}>
                                    11. Service Provider, Not Agency
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    In addition to offering services, Jodi Banav serves as a forum
                                    for all of its members to share knowledge that will further
                                    their shared marital goals. It must be made very clear that Jodi
                                    Banav will only offer contact between and among members who are
                                    a part of its service framework, not their direct contact
                                    information. Jodi Banav does not participate in the exchange or
                                    its outcomes and is not a member's agent. Although it is not
                                    required, Jodi Banav maintains the right to keep an eye on
                                    disagreements between you and other users.
                                </Text>
                                <Text style={Styles.boldText}>
                                    12. Limitation of Liability and Disclaimer of Warranties
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    Jodi Banav offers this website on a "as is" and "as available"
                                    basis. Jodi Banav disclaims all warranties and representations,
                                    either stated or implied, as to the operation of this website
                                    and the information, contents, products, and services featured
                                    on this website. You hereby explicitly acknowledge that the use
                                    of this website is at your own risk.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    Jodi Banav disclaims all guarantees, express or implicit,
                                    including, but not limited to, implied warranties of
                                    merchantability and fitness for a particular purpose, to the
                                    fullest extent permitted by applicable law. Any failure
                                    resulting from misrepresentations made by any of Jodi Banav's
                                    members will not subject the organisation, its employees, office
                                    holders, directors, etc. to liability. Members are expected to
                                    make sufficient efforts, initiatives, and due diligence to
                                    satisfy themselves before choosing your match by verifying the
                                    accuracy of the documents given by prospects while shortlisting
                                    them. Members are urged to select prospects carefully and
                                    cautiously, and to do their due diligence before selecting a
                                    match by putting forth the necessary time, effort, and
                                    consideration. The absence of viruses or other malicious
                                    components on this website, its servers, or e-mails sent by Jodi
                                    Banav is not guaranteed by the company. Jodi Banav disclaims all
                                    responsibility for any damages, whether direct, indirect,
                                    incidental, punitive, or consequential, resulting from the use
                                    of this website
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    No matter what is stated to the contrary, under no circumstances
                                    will Jodi Banav, its officials, or employees be held accountable
                                    for anything related to, resulting from, or linked with:
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    - any action or inaction that Jodi Banav does not take;
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    - any inaccurate or misleading information that you or someone
                                    acting on your behalf submits;
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    - whatever action you perform, whether alone or with another
                                    person, and any results from it that are based on data that any
                                    other user has contributed;
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    - any unpermitted or illegal action taken by a third party in
                                    connection with or involving any data given by you or on your
                                    behalf;
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    - any attempt at or act of cybercrime by anyone;
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    - any event involving a "force majeure" or "Act of God."
                                </Text>
                                <Text style={Styles.boldText}>13. Indemnity</Text>
                                <Text style={Styles.textTermsStyle}>
                                    You hereby agree to hold harmless Jodi Banav and/or its
                                    affiliates, partner websites, and their respective lawful
                                    successors and assigns from and against any and all losses,
                                    liabilities, claims, damages, costs, and expenses (including
                                    reasonable legal fees and disbursements in connection therewith
                                    and interest chargeable thereon) asserted against or incurred by
                                    them.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    Any violation of any country-specific laws or standards of
                                    behaviour is totally and exclusively your responsibility; Jodi
                                    Banav is not accountable in any way.
                                </Text>
                                <Text style={Styles.boldText}>14. General Instructions</Text>
                                <Text style={Styles.textTermsStyle}>
                                    Jodi Banav will keep all personal information provided by
                                    members confidential, with the exception of information intended
                                    for publication or transmission, and will take all reasonable
                                    measures to do so. Jodi Banav may, however, disclose such
                                    information if forced to do so by law. You hereby fully agree,
                                    understand, and accept that, regardless of the cessation,
                                    termination, or discontinuation of the membership, Jodi Banav
                                    shall keep and retain the information and/or data that you may
                                    submit for as long as permitted by law.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    Please study our other terms, including our pricing policy,
                                    which are posted on this site. Site Policies, Modification, and
                                    Severability Our site, our policies, and these Terms and
                                    Conditions of Use are all subject to change at any time. The
                                    legality and enforceability of the remaining conditions will not
                                    be affected if any of these terms are found to be invalid, void,
                                    or for any other reason unenforceable.
                                </Text>
                                <Text style={Styles.textTermsStyle}>
                                    If any of the terms or conditions included here are not
                                    acceptable to you, please think it over it and register
                                    accordingly.
                                </Text>
                                <TouchableOpacity style={Styles.btnStyle}>
                                    <Text style={Styles.agreeText}>AGREE</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </Modal>

                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => handleSubmit()}
                    style={Styles.continueTouchableOpacity}>
                    <Text style={Styles.continueText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

CreateProfile.defaultProps = {};

export default CreateProfile;
