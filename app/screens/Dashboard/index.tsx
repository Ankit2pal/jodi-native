import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import { COLORS, SIZES, width, height } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { onGetViewProfileDataRequest } from 'app/store/slice/getViewProfileSlice';
import HeaderComponent from 'app/components/HeaderComponent';
import Styles from './styles';
interface Props {}

const Dashboard: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.ViewProfileData);
    // console.log('data>>>>>>>>>>>>>>', data._z?.data?.ViewedProfile);
    useEffect(() => {
        dispatch(onGetViewProfileDataRequest());
    }, []);

    const [recommendData, setRecommendData] = useState([
        {
            id: 1,
            name: 'Sweta Gupta, 24',
            age: '21',
            address: 'Telagana,Hyderabad',
            imageUrl: require('../../assets/images/profile1.png'),
        },
        {
            id: 2,
            name: 'Sweta Gupta, 24',
            age: '21',
            address: 'Telagana,Hyderabad',
            imageUrl: require('../../assets/images/profile1.png'),
        },
        {
            id: 3,
            name: 'Sweta Gupta, 24',
            age: '21',
            address: 'Telagana,Hyderabad',
            imageUrl: require('../../assets/images/profile1.png'),
        },
    ]);
    return (
        <View>
            <View>
                <HeaderComponent menuicon={'menu'} headerName={'Home'} />
                <View
                    style={Styles.view1}>
                    <Image
                        source={require('../../assets/images/user2.png')}
                        style={Styles.img}
                    />
                    <View
                        style={Styles.onineIcon}></View>
                </View>
            </View>
            <View style={Styles.imageUser}>
                <FastImage
                    style={Styles.img2}
                    source={require('../../assets/images/user.png')}
                    resizeMode={'contain'}
                />
                <View style={Styles.welcomeTextView}>
                    <Text style={Styles.welcomeText}>
                        Welcome,
                    </Text>
                    <Text style={Styles.text2}>Rakesh Sharma s</Text>
                </View>
            </View>
           
            <View
                style={Styles.view2}>
                <View
                    style={Styles.view3}>
                    <View>
                        <Text
                            style={Styles.textView}>
                            {data._z?.data?.ViewedProfile == null
                                ? '0'
                                : data._z?.data?.ViewedProfile}
                        </Text>
                        <Text style={Styles.commanText}>
                            View Profile
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={Styles.textView2}>
                            {data._z?.data?.ViewedProfile == null
                                ? '0'
                                : data._z?.data?.ViewedProfile}
                        </Text>
                        <Text style={Styles.commanText}>
                            Balance Profile
                        </Text>
                    </View>
                </View>
                <View
                    style={Styles.view4}>
                    <Text
                        style={Styles.viewProfileText}>
                        View Profiles
                    </Text>
                    <TouchableOpacity
                        onPress={() => console.log('Jodi Banao')}
                        style={{ flexDirection: 'row' }}>
                        <Text
                            style={Styles.moreProfiletxt}>
                            More Profiles
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row' }}>
                        {recommendData.map((item) => {
                            return (
                                <View key={item.id} style={styles.productFlatListContainer}>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        // onPress={() => NavigationService.navigate('Search')}

                                    >
                                        <FastImage
                                            source={item.imageUrl}
                                            style={styles.imageFlatlistStyle}
                                            resizeMode={'cover'}
                                        />
                                        <View style={{ marginTop: 10, marginHorizontal: 5 }}>
                                            <Text style={styles.productTitle}>{item.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                    </View>
                </ScrollView>
            </View>
            {/* </View> */}
        </View>
    );
};

Dashboard.defaultProps = {};

const styles = StyleSheet.create({
    productMainContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignSelf: 'center',
        top: 20,
    },
    productFlatListContainer: {
        width: width / 2.5,
        marginHorizontal: 25,
        padding: 5,
        margin: 5,
        borderRadius: 15,
        // borderWidth: 1,

        borderColor: '#d9cbca',
        // backgroundColor: COLORS.darkGreen
    },
    imageFlatlistStyle: {
        width: 173,
        height: 160,
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        marginHorizontal: 10,
    },
    productTitle: {
        fontSize: 20,
        bottom: 5,
        color: COLORS.primary,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Dashboard;
