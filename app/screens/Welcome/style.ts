import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, SIZES } from '../../utils/constants';
const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    spaceView: {
        flex: 1,
        
    },
    spaceView2: {
        marginHorizontal: 35
    },
    topContainerText: {
        color: COLORS.pink,
        fontSize: 16,
        textAlign: 'center',
        height: 30,
    },
    topContainerText1: {
        color: COLORS.darkGreen,
        fontSize: 16,
        textAlign: 'center',
        height: 48,
        marginHorizontal: '20%',
    },
    topContainerText2: {
        color: COLORS.primary,
        fontSize: 16,
        textAlign: 'center',
        height: 70,
        marginHorizontal: '22%',
    },

    sendText: {
        textAlign: 'center',
        fontSize: 18,
        margin: 5,
        padding: 5,
        color: COLORS.white,
        fontWeight:'bold'
    },
    TouchableOpcity: {
        height: 50,
        width: '100%',
        backgroundColor: COLORS.darkGreen,
        borderRadius: 25,
        marginVertical: 10,
    },
    logoImg: {
        height: height / 11,
        width: width,
        marginTop: '10%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    centerImg: {
        height: height / 2.1,
        width: width / 2.4,
        justifyContent: 'center',
        alignSelf: 'center',
    },


});

export default styles;
