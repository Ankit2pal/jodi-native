import React, { useState, useEffect } from 'react';
import Styles from './style';
import {
    StyleSheet,
    Text,
    AsyncStorage,
    View,
    TouchableOpacity,
    ScrollView,
    Alert,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import NavigationService from 'app/navigation/NavigationService';
import TextInputController from 'app/components/TextInputComponent';
import { onLoginRequest } from 'app/store/slice/loginSlice';
interface Props {}

const Login: React.FC<Props> = (props) => {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const dispatch = useDispatch();
    const data = useSelector((state) => state?.login);

    useEffect(() => {
        if (data.data?.UserId) {
            AsyncStorage.setItem('done', data.data?.UserId);
            Alert.alert('Alert', JSON.stringify(data.data.message), [
                { text: 'OK', onPress: () => NavigationService.navigate('Welcome') },
            ]);
        }
    }, [data]);

    const onLoginData = () => {
        if (!!email && !!password) {
            const payload = {
                EmailId: email,
                PasswordHash: password,
            };
            dispatch(onLoginRequest(payload));
        } else {
            Alert.alert('Please enter valid details.');
        }
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
                    source={require('../../assets/Login.png')}
                    resizeMode={'contain'}
                />
                <View style={Styles.maincontainer}>
                    <View>
                        <Text style={Styles.textstyle}>Let's Log In</Text>
                    </View>
                    <View style={Styles.textinputcontainer}>
                        <TextInputController
                            label="Email"
                            text={email}
                            mode="outlined"
                            onChangeText={(email) => setEmail(email)}
                            style={Styles.textinput1}
                            theme={{
                                colors: {
                                    primary: '#0b421b', // Outline color here
                                },
                            }}
                        />
                        <View style={{ height: 10 }} />
                        <TextInputController
                            label="Password"
                            mode="outlined"
                            text={password}
                            onChangeText={(password) => setPassword(password)}
                            style={Styles.textinput2}
                            theme={{
                                colors: {
                                    primary: '#082A22', // Outline color here
                                },
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => NavigationService.navigate('ForgotPassword')}>
                            <Text style={Styles.touchableopacity1}>Forgot Password ?</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={Styles.touchableopacity2}
                        onPress={() => onLoginData()}>
                        <Text style={Styles.loginstyle}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

Login.defaultProps = {};

export default Login;
