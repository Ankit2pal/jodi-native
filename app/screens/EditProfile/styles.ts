import { StyleSheet, Platform } from 'react-native';
import { COLORS, SIZES, width, height } from '../../utils/constants';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    fastimageStyle: {
        height: 100,
        width: 100,
        margin: 20,
        padding: 20,
    },
    usrnameText: {
        textAlign: 'center',
        fontSize: 20,
        top: 23,
    },
    mainView: {
        marginTop: '10%',
        marginHorizontal: 20,
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color:COLORS.white,
        marginLeft: 20,
        // marginTop: 5,
        bottom: 15,
    },
    accordianStyle: {
        backgroundColor: COLORS.dotPrimary,
        height: 55,
        borderRadius: 30,
    },
});

export default styles;
