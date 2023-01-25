import { StyleSheet } from 'react-native';
import { COLORS, SIZES, width, height } from '../../utils/constants';

const Styles = StyleSheet.create({
    safeviewstyle: {
        flex: 1,
    },
    mainviewstyle: {
        marginHorizontal: 25,
        marginTop: 10,
    },
    text1: {
        fontSize: 20,
        color:COLORS.dotPrimary,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    radiobtnView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    text2: {
        fontSize: 20,
        color: COLORS.dotPrimary,
        fontWeight: 'bold',
        marginTop: 10,
    },
    genderradiobtn: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    text3: {
        fontSize: 20,
        color: COLORS.dotPrimary,
        fontWeight: 'bold',
        marginTop: 20,
    },
    yournameview: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 10,
    },
    text4: {
        fontSize: 20,
        color: COLORS.dotPrimary,
        fontWeight: 'bold',
        marginTop: 20,
    },
    touchableOpacity: {
        height: 50,
        width: '93%',
        backgroundColor: COLORS.dotPrimary,
        borderRadius: 25,
        marginTop: '13%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginHorizontal: 10,
    },
    text5: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
        marginVertical: 10,
        fontWeight: 'bold',
    },
    createProfileText: {
        margin: 10,
        padding: 10,
        flex: 1,
    },
    genderView: {
        marginTop: 15,
    },
    firstName: {
        height: 40,
        width: '48%',
    },
    dateBirthStyle: {
        height: 40,
        borderWidth: 1,
        borderColor: 'grey',
        marginHorizontal: 10,
        marginTop: 10,
    },
    mobileStyle:{
        backgroundColor: 'red',
        height: 40,
        marginHorizontal: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'grey',
    }
});

export default Styles;
