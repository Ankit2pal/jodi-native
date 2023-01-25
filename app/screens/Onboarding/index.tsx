import React, { useEffect } from 'react';
import { View, Image, AsyncStorage, TouchableOpacity, Dimensions } from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import AppIntroSlider from 'react-native-app-intro-slider';
import FastImage from 'react-native-fast-image';
import { Text } from 'react-native-paper';
import { COLORS, SIZES, width, height } from '../../utils/constants';
import { onLogout } from 'app/store/slice/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
interface Props {}

const OnBoarding: React.FC<Props> = (props) => {
    const slides = [
        {
            id: 1,
            title: '',
            image: require('../../assets/images/onBoarding1.png'),
        },
        {
            id: 2,
            title: "Welcome To The World's No.1 Matchmaking Service",
            image: require('../../assets/images/onBoarding2.png'),
        },
        {
            id: 3,
            title: '',
            image: require('../../assets/images/onBoarding3.png'),
        },
    ];

    const data = useSelector((state) => state.registerpost);
    const OnDoneFunction = async () => {
        NavigationService.navigate('Signup');
        try {
            await AsyncStorage.setItem('done', JSON.stringify('true'));
        } catch (error) {
            console.log('Err', error);
        }
    };

    const checkFunction = async () => {
        // const checked = await AsyncStorage.getItem('done');
        const list = await AsyncStorage.getItem('pay');
        const requiredList = JSON.parse(list);
        console.log('Full Name: ', requiredList?.FullName);
        if (list) {
            if (requiredList?.FullName && requiredList?.MobileNumber) {
                NavigationService.navigate('Createscreen');
            } else {
                NavigationService.navigate('Signup');
            }
            console.log('not checked');
        }
        const ProfileScreen = await AsyncStorage.getItem('Profile');
        const requiredProfile = JSON.parse(ProfileScreen);
        console.log('required ProfileScreenssss', requiredProfile);

        if (ProfileScreen) {
            if (requiredProfile?.email) {
                NavigationService.navigate('CreateProfile');
            }
            console.log('create screen email', requiredProfile);
        }



        const CreateScreen = await AsyncStorage.getItem('CreateProfile');
        const requiredScreen = JSON.parse(CreateScreen);
        console.log('create Screen data new', requiredScreen);

        if (CreateScreen) {
            if (requiredScreen?.email && requiredScreen?.MobileNumber) {
                NavigationService.navigate('');
            }
            console.log('create screen email', requiredScreen);
        }

        const getPhysicalData = await AsyncStorage.getItem('physical');
        const requiredPhysicalData = JSON.parse(getPhysicalData);
        console.log('requiredPhysicaladata', requiredPhysicalData);
    };
    useEffect(() => {
        checkFunction();
        return () => {};
    }, []);

    return (
        <View style={styles.container}>
            <AppIntroSlider
                data={slides}
                renderItem={({ item }) => {
                    if (item.id == 3) {
                        return (
                            <View>
                                <FastImage
                                    source={item.image}
                                    style={styles.imageStyle3}
                                    resizeMode={'contain'}
                                />
                                <View style={styles.mainViewStyle}>
                                    <Text style={styles.joinWithStyle}>
                                        Join With us to Find Perfect Match
                                    </Text>
                                    <Text style={styles.findTextStyle}>
                                        Find Indian Brides & Grooms in
                                    </Text>
                                    <Text style={styles.jodiTextStyle}>Jodi Banao Matrimony</Text>
                                    <TouchableOpacity
                                        onPress={() => OnDoneFunction()}
                                        style={styles.accountStyle}>
                                        <Text style={styles.createAccount}>Create an account</Text>
                                    </TouchableOpacity>
                                    <View style={styles.accountView}>
                                        <Text style={styles.accText}>
                                            Already have an account ?
                                        </Text>
                                        <Text
                                            style={{ color: COLORS.primary }}
                                            onPress={() => NavigationService.navigate('Login')}>
                                            {' '}
                                            sign in
                                        </Text>
                                    </View>
                                    {/* <Text style={{ fontSize:20, color:'red'}} onPress={()=>dispatch(onLogout()) }>logout</Text> */}
                                </View>
                            </View>
                        );
                    } else if (item.id == 2) {
                        return (
                            <View>
                                <FastImage
                                    source={require('../../assets/images/logo.png')}
                                    style={styles.imageStyle4}
                                    resizeMode={'contain'}
                                />
                                <View>
                                    <FastImage
                                        source={item.image}
                                        style={styles.imageStyle2}
                                        resizeMode={'contain'}
                                    />
                                    <Text style={styles.titleStyle}>{item.title}</Text>
                                </View>
                            </View>
                        );
                    } else {
                        return (
                            <View>
                                <FastImage
                                    source={require('../../assets/images/logo.png')}
                                    style={styles.imageStyle5}
                                    resizeMode={'contain'}
                                />
                                <View>
                                    <FastImage
                                        source={item.image}
                                        style={styles.imageStyle1}
                                        resizeMode={'contain'}
                                    />
                                    <Text style={styles.titleStyle}>{item.title}</Text>
                                </View>
                            </View>
                        );
                    }
                }}
                activeDotStyle={styles.activeDotStyle}
                dotStyle={styles.dotStyle}
                //showSkipButton
                showNextButton={false}
                bottomButton={false}
                showDoneButton={false}
            />
        </View>
    );
};

OnBoarding.defaultProps = {};

export default OnBoarding;
