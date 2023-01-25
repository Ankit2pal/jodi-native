import { StyleSheet } from 'react-native';
import { COLORS, SIZES, width, height } from '../../utils/constants';

const Styles = StyleSheet.create({
    imagestyle1: {
        height: 57,
        width: 234,
        marginTop: '11%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    imagestyle2: {
        height: 440,
        width: 240,
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: 30,
    },
    maincontainer: {
        marginHorizontal: 30,
        bottom: 60
    },
    textstyle: {
        fontSize: 30,
        color: COLORS.dotPrimary,
        justifyContent: 'space-between',
        fontWeight: 'bold',
    },
    textinputcontainer: {
        justifyContent: 'space-between',
        marginTop: 20
    },
    textinput1: {
        height: 50,
        width: '100%',
        backgroundColor: COLORS.white,
    },
    textinput2: {
        height: 50,
        width: '100%',
        backgroundColor: COLORS.white,
    },
    touchableopacity1: {
        alignSelf: 'flex-end',
        color: COLORS.dotPrimary,
        marginTop: 10
    },
    touchableopacity2: {
        height: 50,
        width: '100%',
        backgroundColor: COLORS.dotPrimary,
        borderRadius: 25,
        marginTop: 15,
    },
    loginstyle: {
        fontSize: 16,
        color: COLORS.white,

        alignSelf: 'center',
        marginVertical: 15,
        fontWeight: 'bold',
    },
});

export default Styles;
