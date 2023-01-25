import React, { useState, useCallback } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Modal,
    SafeAreaView,
    Image
} from 'react-native';
import styles from './styles';
import { COLORS, width } from '../../utils/constants';
import { Searchbar } from 'react-native-paper';
import NavigationService from 'app/navigation/NavigationService';
import FastImage from 'react-native-fast-image';
import DropdownController from 'app/components/DropDownComponent';
import HeaderComponent from 'app/components/HeaderComponent';

interface Props {}

const Search: React.FC<Props> = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = (query) => setSearchQuery(query);
    const [countryOpen, setCountryOpen] = useState(false);
    const [countryValue, setCountryValue] = useState([]);
    const [countryItems, setCountryItems] = useState([
        { label: 'Albania', value: 'Albania' },
        { label: 'Angola', value: 'Angola' },
        { label: 'Angola', value: 'Angola' },
        { label: 'Angola', value: 'Angola' },
        { label: 'Angola', value: 'Angola' },
    ]);

    const [stateOpen, setStateOpen] = useState(false);
    const [stateValue, setStateValue] = useState([]);
    const [stateItems, setStateItems] = useState([
        { label: 'Cuanza Sul', value: 'Cuanza Sul' },
        { label: 'Luanda Province', value: 'Luanda Province' },
        { label: 'Luanda Province', value: 'Luanda Province' },
        { label: 'Luanda Province', value: 'Luanda Province' },
        { label: 'Luanda Province', value: 'Luanda Province' },
    ]);

    const [districtOpen, setDistrictOpen] = useState(false);
    const [districtValue, setDistrictValue] = useState([]);
    const [districtItems, setDistrictItems] = useState([
        { label: 'Anand', value: 'Anand' },
        { label: 'Navsari', value: 'Navsari' },
    ]);

    const [workingOpen, setWorkingOpen] = useState(false);
    const [workingValue, setWorkingValue] = useState([]);
    const [workingItems, setWorkingItems] = useState([
        { label: 'Anand', value: 'Anand' },
        { label: 'Navsari', value: 'Navsari' },
    ]);

    const [serviceData, setServiceData] = useState([
        {
            id: 1,
            title: 'Radadiya jatin',
            subtitle: 'Freelcer',
            imageUrl: require('../../assets/image.png'),
        },
        {
            id: 2,
            title: 'Radadiya jatin',
            subtitle: 'Freelcer',
            imageUrl: require('../../assets/image.png'),
        },
        {
            id: 3,
            title: 'Radadiya jatin',
            subtitle: 'Freelcer',
            imageUrl: require('../../assets/image.png'),
        },
        {
            id: 4,
            title: 'Radadiya jatin',
            subtitle: 'Freelcer',
            imageUrl: require('../../assets/image.png'),
        },
    ]);

    const [serviceData2, setServiceData2] = useState([
        {
            id: 1,
            title: 'Radadiya jatin',
            subtitle: 'Freelcer',
            imageUrl: require('../../assets/image.png'),
        },
        {
            id: 2,
            title: 'Radadiya jatin',
            subtitle: 'Freelcer',
            imageUrl: require('../../assets/image.png'),
        },
        {
            id: 3,
            title: 'Radadiya jatin',
            subtitle: 'Freelcer',
            imageUrl: require('../../assets/image.png'),
        },
        {
            id: 4,
            title: 'Radadiya jatin',
            subtitle: 'Freelcer',
            imageUrl: require('../../assets/image.png'),
        },
    ]);

    return (
        <View style={styles.container}>
            <HeaderComponent menuicon={'menu'} headerName={''} />
            <View
                style={{
                    width: 50,
                    height: 50,
                    padding: 5,
                    margin: 5,
                    marginRight: 20,
                    marginTop: -45,
                    justifyContent: 'flex-end',
                    alignSelf: 'flex-end',
                }}>
                <Image
                    source={require('../../assets/images/user2.png')}
                    style={{
                        width: 50,
                        height: 50,
                    }}
                />
                <View
                    style={{
                        width: 15,
                        height: 15,
                        backgroundColor: '#C69749',
                        borderRadius: 15 / 2,
                        position: 'absolute',
                        bottom: 10,
                        right: -10,
                        //marginTop: 3,
                    }}></View>
            </View>
            <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.containerTow}>
                        <Text style={styles.searchText}>Search Profile</Text>
                    </View>
                    <View style={styles.searchBarContainer}>
                        <Searchbar
                            placeholder="Search Profile"
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={'white'}
                            style={styles.searchStyle}
                            inputStyle={styles.inputStyle}
                        />
                        <View style={styles.containerCenterStyle}>
                            <TouchableOpacity
                                style={styles.modelTouchable}
                                onPress={() => {
                                    setShowModal(!showModal);
                                }}>
                                <Text style={styles.filterStyle}>S</Text>
                            </TouchableOpacity>
                            <Modal
                                animationType={'fade'}
                                transparent={true}
                                visible={showModal}
                                swipeDirection={'down'}
                                onRequestClose={() => {
                                    setShowModal(!showModal);
                                }}>
                                <View style={styles.modelContainerStyle}>
                                    <View style={styles.countryContainer}>
                                        <DropdownController
                                            open={countryOpen}
                                            value={countryValue}
                                            items={countryItems}
                                            setOpen={setCountryOpen}
                                            setValue={setCountryValue}
                                            setItems={setCountryItems}
                                            placeholder={'Country'}
                                            style={styles.dropdownStyle}
                                            onChangeItem={(item) => {
                                                console.log(item);
                                            }}
                                            listMode={'SCROLLVIEW'}
                                            zIndex={50}
                                        />
                                    </View>
                                    <View style={styles.stateConatiner}>
                                        <View style={styles.stateInnerStyle}>
                                            <DropdownController
                                                open={stateOpen}
                                                value={stateValue}
                                                items={stateItems}
                                                setOpen={setStateOpen}
                                                setValue={setStateValue}
                                                setItems={setStateItems}
                                                placeholder={'State'}
                                                style={styles.dropdownStyle2}
                                                onChangeItem={(item) => {
                                                    console.log(item);
                                                }}
                                                listMode={'SCROLLVIEW'}
                                                zIndex={40}
                                            />
                                        </View>
                                        <View style={styles.stateInnerStyle}>
                                            <DropdownController
                                                open={districtOpen}
                                                value={districtValue}
                                                items={districtItems}
                                                setOpen={setDistrictOpen}
                                                setValue={setDistrictValue}
                                                setItems={setDistrictItems}
                                                placeholder={'District'}
                                                style={styles.dropdownStyle3}
                                                onChangeItem={(item) => {
                                                    console.log(item);
                                                }}
                                                listMode={'SCROLLVIEW'}
                                                zIndex={40}
                                            />
                                        </View>
                                    </View>

                                    <View style={styles.workingLocationStyle}>
                                        <DropdownController
                                            open={workingOpen}
                                            value={workingValue}
                                            items={workingItems}
                                            setOpen={setWorkingOpen}
                                            setValue={setWorkingValue}
                                            setItems={setWorkingItems}
                                            placeholder={'Working Location'}
                                            style={styles.dropdownStyle4}
                                            onChangeItem={(item) => {
                                                console.log(item);
                                            }}
                                            listMode={'SCROLLVIEW'}
                                            zIndex={30}
                                        />
                                    </View>
                                    <TouchableOpacity style={styles.applyButton}>
                                        <Text style={styles.applyText}>Apply</Text>
                                    </TouchableOpacity>
                                </View>
                            </Modal>
                        </View>
                    </View>
                    <View style={styles.mainContainer}>
                        <Text style={styles.nameText}>Radadiya jatin</Text>
                        <TouchableOpacity onPress={() => NavigationService.navigate('')}>
                            <Text style={styles.ViewAllText}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowConatinerStyle2}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {!!serviceData &&
                                serviceData.map((item: any) => {
                                    return (
                                        <View key={item.id} style={styles.innerViewStyle}>
                                            <TouchableOpacity activeOpacity={1}>
                                                <FastImage
                                                    source={item.imageUrl}
                                                    style={styles.fastImage}
                                                    resizeMode={'cover'}
                                                />
                                                <View style={styles.innerViewTwo}>
                                                    <Text style={styles.titleStyle}>
                                                        {item.title}
                                                    </Text>
                                                </View>
                                                <Text style={styles.subTitle}>{item.subtitle}</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.ViewProfileButton}>
                                                <Text style={styles.viewProfileText}>
                                                    View Profile
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    );
                                })}
                        </ScrollView>
                    </View>

                    <View style={styles.rowConatinerStyle3}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {!!serviceData2 &&
                                serviceData2.map((item: any) => {
                                    return (
                                        <View key={item.id} style={styles.innerViewStyle}>
                                            <TouchableOpacity activeOpacity={1}>
                                                <FastImage
                                                    source={item.imageUrl}
                                                    style={styles.fastImage}
                                                    resizeMode={'cover'}
                                                />
                                                <View style={styles.innerViewTwo}>
                                                    <Text style={styles.titleStyle}>
                                                        {item.title}
                                                    </Text>
                                                </View>
                                                <Text style={styles.subTitle}>{item.subtitle}</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.ViewProfileButton}>
                                                <Text style={styles.viewProfileText}>
                                                    View Profile
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    );
                                })}
                        </ScrollView>
                    </View>
                    <View style={styles.bottomStyle} />
                </ScrollView>
            </View>
        </View>
    );
};

Search.defaultProps = {};

export default Search;
