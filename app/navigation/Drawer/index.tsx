import React, { useEffect } from 'react';
import { View, TouchableOpacity, I18nManager, AsyncStorage } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { Avatar, Title, Text, List, RadioButton } from 'react-native-paper';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { onLogout } from 'app/store/slice/loginSlice';
import { useDispatch } from 'react-redux';



const Drawer: React.FC = (props) => {
    const navigation = useNavigation();

    const dispatch = useDispatch();
 

    return (
        <View style={styles.drawerContent}>
            <DrawerContentScrollView {...props}>
                <View style={styles.userInfoSection}>
                    <Avatar.Image source={require('../../assets/user.png')} size={50} />
                    <Title style={styles.title}>Dawid Urbaniak</Title>
                    <View style={styles.row} />
                </View>
                <DrawerItem
                    onPress={() => {
                        navigation.navigate('Home' as never);
                    }}
                    label={'Home'}
                    activeTintColor="#2196f3"
                    activeBackgroundColor="rgba(0, 0, 0, .04)"
                    inactiveTintColor="rgba(0, 0, 0, .87)"
                    inactiveBackgroundColor="transparent"
                />

                <DrawerItem
                    onPress={() => {
                        navigation.navigate('ChangePassword2' as never);
                    }}
                    label={'ChangePassword2'}
                    activeTintColor="#2196f3"
                    activeBackgroundColor="rgba(0, 0, 0, .04)"
                    inactiveTintColor="rgba(0, 0, 0, .87)"
                    inactiveBackgroundColor="transparent"
                />

                <DrawerItem
                    onPress={() => {
                        navigation.navigate('Helpusscreen' as never);
                    }}
                    label={'Helpusscreen'}
                    activeTintColor="#2196f3"
                    activeBackgroundColor="rgba(0, 0, 0, .04)"
                    inactiveTintColor="rgba(0, 0, 0, .87)"
                    inactiveBackgroundColor="transparent"
                />
                <DrawerItem
                    onPress={() => {
                        navigation.navigate('Deactivate' as never);
                    }}
                    label={'Deactivate'}
                    activeTintColor="#2196f3"
                    activeBackgroundColor="rgba(0, 0, 0, .04)"
                    inactiveTintColor="rgba(0, 0, 0, .87)"
                    inactiveBackgroundColor="transparent"
                    
                />
                <DrawerItem
                    onPress={() => {
                        dispatch(onLogout())
                        navigation.navigate('OnBoarding' as never);
                        AsyncStorage.removeItem('done')
                    }}
                    label={'Logout'}
                    activeTintColor="#2196f3"
                    activeBackgroundColor="rgba(0, 0, 0, .04)"
                    inactiveTintColor="rgba(0, 0, 0, .87)"
                    inactiveBackgroundColor="transparent"
                />
            </DrawerContentScrollView>
        </View>
    );
};

export default Drawer;
