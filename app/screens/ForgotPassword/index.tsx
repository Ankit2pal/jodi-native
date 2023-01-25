import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    SafeAreaView,
    Text,
    ScrollView,
    StyleSheet,
    View,
    Alert,
    TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { TextInput } from 'react-native-paper';
import style from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { COLORS, SIZES, height } from '../../utils/constants';
import TextInputController from 'app/components/TextInputComponent/TextInputController';
import { onForgotRequest } from '../../store/slice/forgotPasswordSlice';
import { onLoginChangeReq } from 'app/store/slice/loginChangePassSlice';
interface Props {}

const ForgotPassword: React.FC<Props> = (props) => {
    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = useState(false);
    const dispatch = useDispatch();

    const forgotData1 = useSelector((state) => state.forgotPassword);
    console.log("forgotData1 ::", forgotData1)
  
    const onForgotPassword = () => {
        if (forgotData1.data === false) {
            const payload = {
                EmailId: email,
            };
            dispatch(onLoginChangeReq(payload));
            NavigationService.navigate('Login')
        } else {
            const payload = {
                EmailId: email,
            };
            dispatch(onForgotRequest(payload));
        }
    };
    return (
        <SafeAreaView style={style.container}>
            <ScrollView>
                <View>
                    <FastImage
                        style={style.logoImg}
                        source={require('../../assets/Vector.png')}
                        resizeMode={'contain'}
                    />
                    <FastImage
                        style={style.centerImg}
                        source={require('../../assets/j58UEs7q5k.png')}
                        resizeMode={'contain'}
                    />
                    <Text style={style.topContainerText}>
                        Please Enter Your Email Address To Recieve a varification
                    </Text>
                </View>
                <View style={style.textInputView}>
                    <Text style={style.forgotTextStyle}>Forgot Password</Text>
                    <TextInputController
                        label="Email"
                        text={email}
                        mode="outlined"
                        onChangeText={(email) => setEmail(email)}
                        style={style.textInputController}
                        activeUnderlineColor={COLORS.subTitle}
                        theme={{
                            colors: {
                                primary: '#0b421b', // Outline color here
                            },
                        }}
                    />
                    <TouchableOpacity>
                        <Text style={style.sendTouchableOpcity}>Back to sign in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.sendTouchableOpcity2}
                        onPress={() => onForgotPassword()}>
                        <Text style={style.sendText}>Send</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

ForgotPassword.defaultProps = {};
export default ForgotPassword;

// import React from 'react';
// import { SafeAreaView, Text, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
// import FastImage from 'react-native-fast-image';
// import { TextInput } from 'react-native-paper';
// import style from './styles';
// import NavigationService from 'app/navigation/NavigationService';
// import { COLORS, SIZES, height } from '../../utils/constants';
// import TextInputController from 'app/components/TextInputComponent/TextInputController';
// interface Props {}

// const ForgotPassword: React.FC<Props> = (props) => {
//     const [email, setEmail] = React.useState('');
//     return (
//         <SafeAreaView style={style.container}>
//             <ScrollView>
//                 <View>
//                     <FastImage
//                         style={style.logoImg}
//                         source={require('../../assets/Vector.png')}
//                         resizeMode={'contain'}
//                     />
//                     <FastImage
//                         style={style.centerImg}
//                         source={require('../../assets/j58UEs7q5k.png')}
//                         resizeMode={'contain'}
//                     />
//                     <Text style={style.topContainerText}>
//                         Please Enter Your Email Address To Recieve a varification
//                     </Text>
//                 </View>
//                 <View style={style.textInputView}>
//                     <Text style={style.forgotTextStyle}>Forgot Password</Text>
//                     <TextInputController
//                         label="Email"
//                         text={email}
//                         mode="outlined"
//                         onChangeText={(email) => setEmail(email)}
//                         style={style.textInputController}
//                         activeUnderlineColor={COLORS.subTitle}
//                         theme={{
//                             colors: {
//                                 primary: '#0b421b', // Outline color here
//                             },
//                         }}
//                     />
//                     <TouchableOpacity>
//                         <Text style={style.sendTouchableOpcity}>Back to sign in</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         style={style.sendTouchableOpcity2}
//                         onPress={() => NavigationService.navigate('OTP')}>
//                         <Text style={style.sendText}>Send</Text>
//                     </TouchableOpacity>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// };

// ForgotPassword.defaultProps = {};
// export default ForgotPassword;
