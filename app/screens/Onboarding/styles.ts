import { StyleSheet, Platform } from 'react-native';
import { COLORS, SIZES, width, height } from '../../utils/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    imageStyle1: {
        width: '80%',
        height: '70%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: '5%',
    },
    imageStyle2: {
        width: '90%',
        height: '60%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: '10%',
    },
    imageStyle3: {
        height: '30%',
        width: '80%',
        marginTop: 30,
        marginLeft: 20,
    },
    mainViewStyle: {
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.dotPrimary,
        marginTop: '20%',
        borderTopLeftRadius: 100,
    },
    joinWithStyle: {
        color: COLORS.primary,
        fontSize: 26,
        fontWeight: 'bold',
        margin: 15,
        padding: 15,
        marginHorizontal: 20,
        textAlign: 'center',
    },
    findTextStyle: {
        fontSize: 18,
        color: COLORS.white,
        textAlign: 'center',
    },
    jodiTextStyle: {
        fontSize: 18,
        color: COLORS.primary,
        textAlign: 'center',
    },
    accountStyle: {
        width: '70%',
        height: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: COLORS.white,
        marginTop: 20,
    },
    accountTextStyle: {
        fontSize: 16,
        textAlign: 'center',
    },
    titleStyle: {
        textAlign: 'center',
        color: COLORS.dotPrimary,
        fontSize: 20,
        marginTop: '12%',
        marginHorizontal: 20,
    },
    activeDotStyle: {
        backgroundColor: COLORS.dotPrimary,
        width: 10,
        height: 10,
        borderColor: COLORS.dotCircle,
        borderWidth: 3,
    },
    dotStyle: {
        backgroundColor: COLORS.dotCircle,
        width: 10,
        height: 10,
    },
    createAccount: {
        fontSize: 16,
        textAlign: 'center',
    },
    accountView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 8,
    },
    accText: {
        color: COLORS.white,
    },
    imageStyle4: {
        height: '20%',
        width: '50%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
    },
    imageStyle5: {
        height: '20%',
        width: '50%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
    },
});

export default styles;
