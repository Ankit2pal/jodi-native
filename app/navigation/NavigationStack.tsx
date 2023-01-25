import * as React from 'react';
import { StatusBar, SafeAreaView, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './NavigationService';
import Login from 'app/screens/Login';
import OnBoarding from 'app/screens/Onboarding';
import Signup from 'app/screens/Signup';
import CreateProfile from 'app/screens/CreateProfile';
import Createscreen from 'app/screens/CreateProfilescreen';
import Physicalscreen from 'app/screens/Physical&Proffesional';
import ForgotPassword from 'app/screens/ForgotPassword';
import OTP from '../screens/OTP';
import ChangePassword from '../screens/ChangePassword';
import FamilyScreen from 'app/screens/Family&Partner Preference';
import Permanentscreen from 'app/screens/Permant&Worklocation';
import BottomTabNavigation from './BottomTabNavigation';
import EditProfile from 'app/screens/EditProfile';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EditProfile2 from 'app/screens/EditProfile2';
import Drawer from './Drawer';
import ChangePassword2 from 'app/screens/ChangePassword2';
import Helpusscreen from 'app/screens/HelpUs';
import Welcome from 'app/screens/Welcome';
import Notifcation from 'app/screens/Notifcation';
import MyProfile from 'app/screens/MyProfile';
const MainStack = createNativeStackNavigator();
const AppDrawer = createDrawerNavigator();
import { useNavigation } from '@react-navigation/native';
import { COLORS } from 'app/utils/constants';
import Deactivate from 'app/screens/userDeactivate';
const DrwaerNavigator = () => {
    return (
        <AppDrawer.Navigator drawerContent={() => <Drawer />}>
            <AppDrawer.Screen
                name={'Home'}
                component={BottomTabNavigation}
                options={{ headerShown: false }}
            />
            <AppDrawer.Screen
                name={'ChangePassword2'}
                component={ChangePassword2}
                options={{ headerShown: false }}
            />
            <AppDrawer.Screen
                name={'Helpusscreen'}
                component={Helpusscreen}
                options={{ headerShown: false }}
            />
            <AppDrawer.Screen
                name={'Deactivate'}
                component={Deactivate}
                options={{ headerShown: false }}
            />
        </AppDrawer.Navigator>
    );
};

const MainNavigator = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="OnBoarding"
                component={OnBoarding}
                options={{
                    headerShown: false,
                }}
            />
            <MainStack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            <MainStack.Screen name="MyProfile" component={MyProfile} options={{ headerShown: false }} />
            <MainStack.Screen
                name="EditProfile2"
                component={EditProfile2}
                options={{
                    title: 'EditProfile',
                    headerStyle: {
                        backgroundColor: '#082A22',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center',
                }}
            />
            <MainStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <MainStack.Screen name="OTP" component={OTP} options={{ headerShown: false }} />
            <MainStack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <MainStack.Screen name="Notifcation" component={Notifcation} options={{ headerShown: false }} />
            <MainStack.Screen
                name="ChangePassword"
                component={ChangePassword}
                options={{ headerShown: false }}
            />
            <MainStack.Screen
                name="Createscreen"
                component={Createscreen}
                options={{
                    title: 'Create Profile',
                    headerStyle: {
                        backgroundColor: '#082A22',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center',
                }}
            />
            <MainStack.Screen
                name="Physicalscreen"
                component={Physicalscreen}
                options={{
                    title: 'Physical and Professional Information',
                    headerStyle: {
                        backgroundColor: '#082A22',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center',
                }}
            />
            <MainStack.Screen
                name="FamilyScreen"
                component={FamilyScreen}
                options={{
                    title: 'Family and partner Preferences',
                    headerStyle: {
                        backgroundColor: '#082A22',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center',
                }}
            />
            <MainStack.Screen
                name="Permanentscreen"
                component={Permanentscreen}
                options={{
                    title: 'Permanent and Working Location',
                    headerStyle: {
                        backgroundColor: '#082A22',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center',
                }}
            />
            <MainStack.Screen name="CreateProfile" component={CreateProfile} />
            <MainStack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{ headerTitle: '' }}
            />
            <MainStack.Screen
                name="Home"
                component={DrwaerNavigator}
                options={{ headerShown: false }}
            />
            <MainStack.Screen
                name="Edit Profile"
                component={EditProfile}
                options={{
                    title: 'Edit Profile',
                    headerStyle: {
                        backgroundColor: '#082A22',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center',
                }}
            />
        </MainStack.Navigator>
    );
};

const App: React.FC = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar />
                <MainNavigator />
            </SafeAreaView>
        </NavigationContainer>
    );
};

export default App;
