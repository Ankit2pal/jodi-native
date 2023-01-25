import React from 'react';
import { SafeAreaView, Text, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { RouteType } from '../routes/RouteType';
import FastImage from 'react-native-fast-image';
import { TextInput } from 'react-native-paper';
import style from './style';
import NavigationService from 'app/navigation/NavigationService';
import { COLORS, SIZES, height } from '../../utils/constants';
import TextInputController from 'app/components/TextInputComponent/TextInputController';
import { clockRunning } from 'react-native-reanimated';
import styles from './style';


type Props = RouteType<'index'>;


const Welcome: React.FC<Props> = ({ navigation, route }) => {

    return (
        <SafeAreaView style={style.container}>
            <ScrollView>
                <View style={style.spaceView}>

                    <FastImage
                        style={style.logoImg}
                        source={require('../../assets/images/logo.png')}
                        resizeMode={'contain'}
                    />

                    <FastImage
                        style={style.centerImg}
                        source={require('../../assets/images/onBoarding2.png')}
                        resizeMode={'contain'}
                    />

                    <View style={style.spaceView2}>
                        <Text style={style.topContainerText}>
                            Hello Rahul
                        </Text>
                        <Text style={style.topContainerText1}>
                            Welcome to Jodibanao matrimoney
                        </Text>
                        <Text style={style.topContainerText2}>
                            Just need few more details to get you started!
                        </Text>
                        <TouchableOpacity style={style.TouchableOpcity}
                            onPress={() => NavigationService.navigate('Physicalscreen')}>
                            <Text style={style.sendText}>Let`s get start</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Welcome;
