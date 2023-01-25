import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import {} from '@react-navigation/drawer';
import { Appbar } from 'react-native-paper';
import NavigationService from 'app/navigation/NavigationService';
import Drawer from 'app/navigation/Drawer';
import { COLORS } from 'app/utils/constants';
const HeaderComponent = ({ menuicon, headerName }) => {
    const navigation = useNavigation();
    return (
        <Appbar.Header style={{ backgroundColor: COLORS.dotPrimary, }}>
            <Appbar.Action
                icon={menuicon ? menuicon : 'arrow-left'}
                onPress={() =>
                    headerName == 'Home'
                        ? navigation.dispatch(DrawerActions.toggleDrawer())
                        : NavigationService.goBack()
                }
            />
            <Appbar.Content title={headerName} />
        </Appbar.Header>
    );
};

export default HeaderComponent;
