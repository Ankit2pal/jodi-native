import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, SIZES } from '../../utils/constants';
const { width, height } = Dimensions.get('screen');
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    topContainerText: {
        color: COLORS.darkGreen,
        fontSize: 16,
        textAlign: 'center',
        bottom: 70,
        marginHorizontal: 20,
    },
 
 
    TouchableOpcity: {
        color: COLORS.darkGreen,
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 20,
      
    },
    LoginText: {
        textAlign: 'center',
        fontSize: 18,
        margin: 5,
        padding: 5,
        fontWeight: 'bold',
        color: COLORS.white,
    },
    TouchableOpcity2: {
        height: 50,
        width: '100%',
        backgroundColor: COLORS.darkGreen,
        borderRadius: 25,
    },
    OTPInputViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: '100%',
        backgroundColor: COLORS.white,
        bottom: 30,
    },
    logoImg: {
        height: height / 11,
        width: width,
        marginTop: '10%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    centerImg: {
        height: height / 2,
        width: width / 2.4,

        justifyContent: 'center',
        alignSelf: 'center',
        bottom: 35,
    },
    borderStyleHighLighted: {
        borderColor: 'black',
    },
    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        color: COLORS.darkGreen,
        fontWeight: 'bold',
    },

    underlineStyleHighLighted: {
        borderColor: COLORS.darkGreen,
    },
    innerViewStyle: {
        marginHorizontal: 35,
    },
    otpInputView: {
        bottom: 15,
        marginHorizontal: '25%',
    },
});

export default style;
