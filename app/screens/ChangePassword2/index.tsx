import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    ScrollView,
    StyleSheet,
    View,
    TouchableOpacity,
    Alert,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { TextInput } from 'react-native-paper';
import Styles from '../ChangePassword/styles';
import NavigationService from 'app/navigation/NavigationService';
import { COLORS, SIZES, height } from '../../utils/constants';
import TextInputController from 'app/components/TextInputComponent/TextInputController';
import { onChangePassRequest } from 'app/store/slice/changePasswordSlice';
import { useDispatch, useSelector } from 'react-redux';
import { onLogout } from 'app/store/slice/loginSlice';

interface Props {}

const index: React.FC<Props> = (props) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPssword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const data = useSelector((state) => state?.changePassword?.data);
    const userID = useSelector((state) => state?.login);
    console.log('userID >>>???>>>', userID);
    const onSubmit = () => {
        const payload = {
            OldPassword: oldPassword,
            NewPassword: newPassword,
            UserId: userID.data?.UserId,
        };
        console.log('payload ch', payload);
        dispatch(onChangePassRequest(payload));
        Alert.alert('Alert', data.Message, [{ text: 'OK', onPress: () => dispatch(onLogout()) }]);
    };
    return (
        <SafeAreaView style={Styles.container}>
            <ScrollView>
                <FastImage
                    style={Styles.logoImg}
                    source={require('../../assets/Vector.png')}
                    resizeMode={'contain'}
                />
                <FastImage
                    style={Styles.centerImg}
                    source={require('../../assets/j58UEs7q5k.png')}
                    resizeMode={'contain'}
                />
                <View style={Styles.textInputView}>
                    <TextInputController
                        label="Old Password"
                        text={oldPassword}
                        mode="outlined"
                        onChangeText={(oldPassword) => setOldPassword(oldPassword)}
                        style={Styles.textInputController}
                        activeUnderlineColor={COLORS.subTitle}
                        theme={{
                            colors: {
                                primary: COLORS.dotPrimary,
                            },
                        }}
                    />
                    <View style={Styles.spaceView} />
                    <TextInputController
                        label="New Password"
                        text={newPassword}
                        mode="outlined"
                        onChangeText={(newPassword) => setNewPssword(newPassword)}
                        style={Styles.textInputController}
                        activeUnderlineColor={COLORS.subTitle}
                        theme={{
                            colors: {
                                primary: COLORS.dotPrimary,
                            },
                        }}
                    />
                    <View style={Styles.spaceView} />
                    <TextInputController
                        label="Confirm Password"
                        text={confirmPassword}
                        mode="outlined"
                        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                        style={Styles.textInputController}
                        activeUnderlineColor={COLORS.subTitle}
                        theme={{
                            colors: {
                                primary: COLORS.dotPrimary,
                            },
                        }}
                        onEndEditing={() => {
                            if (newPassword === confirmPassword) console.log('Matched!');
                            else console.log('Please Enter Correct Passsword!');
                        }}
                    />
                    <TouchableOpacity style={Styles.TouchableOpcity2} onPress={() => onSubmit()}>
                        <Text style={Styles.sendText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

index.defaultProps = {};

export default index;
