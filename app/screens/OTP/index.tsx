import React from 'react';
import { SafeAreaView, Text, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TextInput } from 'react-native-paper';
import style from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { COLORS, SIZES, height } from '../../utils/constants';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import TextInputController from 'app/components/TextInputComponent/TextInputController';
interface Props {}

const OTP: React.FC<Props> = (props) => {
    const [email, setEmail] = React.useState('');
    return (
        <SafeAreaView style={style.container}>
            <ScrollView>
                <View style={style.innerViewStyle}>
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
                        Please Enter The 6 Digit Code Send To demo123@gmail.com
                    </Text>
                    <View style={style.otpInputView}>
                        <OTPInputView
                            style={style.OTPInputViewContainer}
                            pinCount={6}
                            autoFocusOnLoad
                            codeInputFieldStyle={style.underlineStyleBase}
                            codeInputHighlightStyle={style.underlineStyleHighLighted}
                            onCodeFilled={(code) => {
                                console.log(`Code is ${code}, you are good to go!`);
                            }}
                        />
                        <TouchableOpacity>
                            <Text style={style.TouchableOpcity}>Resend Code</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={style.TouchableOpcity2}
                        onPress={() => NavigationService.navigate('ChangePassword')}>
                        <Text style={style.LoginText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

OTP.defaultProps = {};
export default OTP;
