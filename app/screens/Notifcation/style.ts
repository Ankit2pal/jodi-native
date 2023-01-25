import { StyleSheet, Platform } from 'react-native';
import { COLORS, SIZES, width, height } from '../../utils/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    maincontainer: {
        padding: 15,
        margin: 15,
        
        backgroundColor: 'white',
        borderRadius: 8,
        borderColor: COLORS.darkGreen,
        borderWidth: 3
    },
    textStyle: {
        fontSize: 18, fontWeight: 'bold'
    },
    textStyle1: {
        fontSize: 16,
    },
});

export default styles;
