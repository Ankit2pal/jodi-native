import { StyleSheet } from 'react-native';
import { COLORS, SIZES, width, height } from '../../utils/constants';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        marginHorizontal: 20,
        marginTop: 25,
    },
    dropdownStyle: {
        height: 20,
        borderRadius: 30,
        marginTop: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: COLORS.dropDown,
        borderColor: COLORS.dropDown,
    },
    continueTouchableOpacity: {
        width: '88%',
        height: 50,
        backgroundColor: COLORS.dotPrimary,
        borderRadius: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: '5%',
        marginBottom: 20,
    },
    continueText: {
        textAlign: 'center',
        fontSize: 18,
        margin: 5,
        padding: 5,
        color: COLORS.white,
    },
    religionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    headingText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginTop: 15,
    },
    village: {
        height: 40,
        width: '98%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    vendorIdStyle: {
        marginHorizontal: 20,
        //marginTop: 10,
    },
    checkBoxStyle: {
        flexDirection: 'row',
        marginHorizontal: 25,
        marginTop: 20,
    },
    termsText: {
        fontSize: 20,
        color: 'rgb(25, 118, 210)',
        flexDirection: 'row',
    },
    textTermsStyle: {
        marginTop: 10,
        fontSize: 18,
    },
    modelStyle: {
        width: '100%',
        height: '70%',
        backgroundColor: 'white',
        borderRadius: 5,
    },
    termsView: {
        height: 50,
        width: '100%',
        backgroundColor: '#fe3f46',
    },
    condtionText: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 20,
        color: 'white',
    },
    scrollView: {
        padding: 10,
        margin: 10,
    },
    crossStyle: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        marginRight: 10,
        bottom: 25,
    },
    fastImage: {
        width: 25,
        height: 25,
    },
    boldText: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 20,
    },
    btnStyle: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        padding: 13,
        margin: 13,
        borderRadius: 10,
        backgroundColor: '#fe3f46',
        marginTop: 10,
    },
    agreeText: {
        color: 'white',
    },
    memberDuration: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    indianText: {
        marginTop: 10,
    },
    memberCancel: {
        fontWeight: 'bold',
    },
});

export default Styles;
