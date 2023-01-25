import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FastImage from 'react-native-fast-image';
import Profiles from 'app/screens/CreateProfile/index';
import Dashboard from '../screens/Dashboard';
import Premium from '../screens/Premium';
import Notification from '../screens/Notifcation';
import Helpusscreen from 'app/screens/HelpUs';
import MyProfile from 'app/screens/MyProfile';
import Search from 'app/screens/Search';
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    const theme = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarStyle: {
                    position: 'absolute',
                    height: 70,
                    justifyContent: 'center',
                },
            }}>
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Dashboard',
                    tabBarIcon: () => (
                        <FastImage
                            source={require('../assets/Dashboard.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    ),
                    tabBarLabelStyle: { fontSize: 15, bottom: 6 },
                    headerStyle: { backgroundColor: theme.colors.primary },
                }}
            />
            <Tab.Screen
                name="MyProfile"
                component={MyProfile}
                options={{
                //    headerShadowVisible:23,
                
                    tabBarLabel: 'MyProfile',
                    headerShown: false,
                    headerStyle: { backgroundColor: theme.colors.primary },
                    tabBarIcon: ({ color, size }) => (
                        <FastImage
                            source={require('../assets/Profile.png')}
                            style={{ height: 40, width: 40 }}
                            />
                            ), //tabBarBadge: 2,
                            tabBarLabelStyle: { fontSize: 15, bottom: 6 },
                        }}
            />
                        <Tab.Screen
                            name="Premium"
                            component={Premium}
                            
                            options={{
                                tabBarLabel: 'Premium',
                                headerShown: false,
                                tabBarIcon: ({ color, size }) => (
                                    <FastImage
                                        source={require('../assets/premium.png')}
                                        style={{ height: 40, width: 40 }}
                                    />
                                ),
                                tabBarLabelStyle: { fontSize: 15, bottom: 6 },
                                headerStyle: { backgroundColor: theme.colors.primary },
                            }}
                        />

            <Tab.Screen
                name="ChangePassword2"
                component={Search}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size }) => (
                        <FastImage
                            source={require('../assets/Search.png')}
                            style={{ height: 40, width: 40 }}
                        />
                    ),
                    tabBarLabelStyle: { fontSize: 15, bottom: 6 },
                    headerStyle: { backgroundColor: theme.colors.primary },
                }}
            />

            <Tab.Screen
                name="Notification"
                component={Notification}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ color, size }) => (
                        <FastImage
                            source={require('../assets/Notification.png')}
                            style={{ height: 40, width: 40 }}
                        />
                    ),
                    tabBarLabelStyle: { fontSize: 15, bottom: 6 },
                    headerStyle: { backgroundColor: theme.colors.primary },
                }}
            />
        </Tab.Navigator>
    );
};
export default BottomTabNavigation;
