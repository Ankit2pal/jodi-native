import { StyleSheet, Platform } from 'react-native';
import { COLORS, SIZES, width, height } from '../../utils/constants';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 30,
        top: 25,

        color: COLORS.darkGreen,
    },
    text2: {
        fontWeight: 'bold',
        fontSize: 25,
        top: 25,
    },
    mainView: {
        marginTop: '15%',
        height: '100%',
        backgroundColor: COLORS.white,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        marginBottom: '30%'
    },
    containerTouchableOpacity: {
        marginTop: '5%',
        marginHorizontal: 20,
    },
    subView: {
        marginTop: '10%',
        marginHorizontal: 20,
    },
    titleStyle: {
        fontSize: 18,
        color: COLORS.white,
        fontWeight: 'bold',
        marginLeft: 20,
        top: 12,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    texttitleStyle: {
        fontSize: 17,
        color: COLORS.white,
        fontWeight: 'bold',
        marginLeft: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    textCollapsibleStyle: {
        backgroundColor: COLORS.dotPrimary,
        height: 50,
        borderRadius: 30,
    },
    CollapsibleView: {
        backgroundColor: '#115747',
        marginHorizontal: 40,
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20
    },
    CollapsiblemaimView: {
        flexDirection: 'row',
        marginTop: 10
    },
    commanView:{
        flex: 0.5 
    }
});

export default styles;
