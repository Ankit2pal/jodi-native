import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, SIZES } from '../../utils/constants';
const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    spaceView:{
        height: 12
    },
    topContainerText: {
        color: COLORS.darkGreen,
        fontSize: 16,
        textAlign: 'center',
        bottom: 70,
        marginHorizontal: '20%',
    },
    textInputView: {
        bottom: 60,
        marginHorizontal: 30,
    },
    textInputController: {
        overflow: 'hidden',
        height: 50,
        color: COLORS.white,
        backgroundColor: COLORS.white,
    },

    sendText: {
        textAlign: 'center',
        fontSize: 18,
        margin: 5,
        padding: 5,
        color: COLORS.white,
    },
    TouchableOpcity2: {
        height: 50,
        width: '100%',
        backgroundColor: COLORS.darkGreen,
        borderRadius: 25,
        marginTop:22
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
    ChangeTextStyle: {
        color: COLORS.darkGreen,
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 30,
        marginHorizontal: '18%',
    },
    newPasswordText: {
        height: 12,
    },
});

export default styles;
