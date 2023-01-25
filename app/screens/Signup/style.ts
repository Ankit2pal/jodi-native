import { StyleSheet } from 'react-native';
import { COLORS, SIZES, width, height } from '../../utils/constants';

const Styles = StyleSheet.create({
    imagestyle1: {
        height: 57,
        width: 234,
        marginTop: '10%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    imagestyle2: {
        height: 420,
        width: 200,
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: 10,
    },
    maincontainer: {
        marginHorizontal: 30,
        bottom: 40
    },
    text1: {
        fontSize: 30,
        color: COLORS.dotPrimary,
        justifyContent: 'space-between',
        fontWeight: 'bold',
    },
    textinputcontainer: {
        justifyContent: 'space-between',
        marginTop: 10
    },
    textinput1: {
        height: 50,
        width: '100%',
        backgroundColor: COLORS.white,
    },
    touchableopacity1: {
        height: 50,
        width: '100%',
        backgroundColor: COLORS.dotPrimary,
        borderRadius: 25,
        marginTop: 15,
    },
    registertextstyle: {
        fontSize: 16,
        color: COLORS.white,
        alignSelf: 'center',
        marginVertical: 15,
        fontWeight: 'bold',
    },
    headingText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginTop: 15,
        color: COLORS.dotPrimary,
    },
    dropdownStyle: {
        height: 25,
        borderRadius: 5,
        marginTop: 5,
        justifyContent: 'center',
        alignSelf: 'center',
       // backgroundColor: COLORS.dropDown,
        borderColor: COLORS.dropDown,
        borderWidth:2
    },

});

export default Styles;
