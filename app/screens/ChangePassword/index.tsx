import React from 'react';
import { SafeAreaView, Text, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TextInput } from 'react-native-paper';
import style from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { COLORS, SIZES, height } from '../../utils/constants';
import TextInputController from 'app/components/TextInputComponent/TextInputController';
import { onResetPassRequest } from 'app/store/slice/resetPasswordSlice';
import { useDispatch, useSelector } from 'react-redux';

interface Props {}

const ChangePassword: React.FC<Props> = (props) => {
    const [password, setPssword] = React.useState('');
    const [newPassword, setNewPssword] = React.useState('');
    const dispatch = useDispatch();
    const data = useSelector((state) => state.resetPassword);
    console.log('resetdata---->>>>', data);

    const onSubmit = () => {
        const payload = {
            password: password,
        };
        dispatch(onResetPassRequest(payload));

        
    };
    return (
        <SafeAreaView style={style.container}>
            <ScrollView>
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
                    Your New Password Must Be Differnt From Previously Used Password
                </Text>

                <View style={style.textInputView}>
                    <TextInputController
                        label="Password"
                        text={password}
                        mode="outlined"
                        onChangeText={(password) => setPssword(password)}
                        style={style.textInputController}
                        activeUnderlineColor={COLORS.subTitle}
                        theme={{
                            colors: {
                                primary: COLORS.dotPrimary,
                            },
                        }}
                    />
                    <View style={style.newPasswordText} />
                    <TextInputController
                        label="NewPassword"
                        text={newPassword}
                        mode="outlined"
                        onChangeText={(newPassword) => setNewPssword(newPassword)}
                        style={style.textInputController}
                        activeUnderlineColor={COLORS.subTitle}
                        theme={{
                            colors: {
                                primary: COLORS.dotPrimary,
                            },
                        }}
                    />
                    <TouchableOpacity>
                        <Text style={style.ChangeTextStyle}>Change Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.TouchableOpcity2} onPress={() => onSubmit()}>
                        <Text style={style.sendText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

ChangePassword.defaultProps = {};

export default ChangePassword;
