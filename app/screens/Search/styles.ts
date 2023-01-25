import { StyleSheet, Platform } from 'react-native';
import { COLORS, SIZES, width, height } from '../../utils/constants';

const styles = StyleSheet.create({
    container: {
       flex: 1,
        backgroundColor:COLORS.white
    },
    containerTow: {
        margin: 10,
        padding: 10,
    },
    searchText: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
    },
    searchBarContainer: {
        flexDirection: 'row',
        marginHorizontal: 30,
        justifyContent: 'space-between',
    },
    searchStyle: {
        width: '86%',
        height: 50,
        color: 'red',
        borderRadius: 30,
        backgroundColor: COLORS.darkGreen,
        textShadowColor: 'white',
    },
    inputStyle: {
        color: 'white',
    },
    containerCenterStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    modelTouchable: {
        height: 50,
        width: 50,
        backgroundColor: COLORS.primary,
        borderRadius: 50 / 2,
        left: 15,
    },
    filterStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 1,
        top: 15,
    },
    modelContainerStyle: {
        width: '100%',
        height: '60%',
        backgroundColor: COLORS.darkGreen,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    countryContainer: {
        marginHorizontal: 20,
        marginTop: '20%',
    },
    stateConatiner: {
        flexDirection: 'row',
        width: '80%',
        marginRight: 30,
    },
    stateInnerStyle: {
        marginTop: 25,
    },
    workingLocationStyle: {
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
    dropdownStyle2: {
        height: 20,

        borderRadius: 30,
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: COLORS.dropDown,
        borderColor: COLORS.dropDown,
    },
    dropdownStyle3: {
        height: 20,

        borderRadius: 30,
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: COLORS.dropDown,
        borderColor: COLORS.dropDown,
    },
    dropdownStyle4: {
        height: 20,
        borderRadius: 30,
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: COLORS.dropDown,
        borderColor: COLORS.dropDown,
    },
    applyButton: {
        width: '90%',
        marginTop: '10%',
        height: 60,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 30,
    },
    applyText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.darkGreen,
    },
    mainContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: '10%',
    },
    nameText: {
        marginLeft: 30,
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
    },
    ViewAllText: {
        fontSize: 20,
        marginRight: 5,
        color: 'black',
    },
    bottomStyle: {
        marginBottom: 90,
    },
    innerViewStyle: {
        width: width / 3,
    },
    fastImage: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    innerViewTwo: {
        marginTop: 10,
        marginHorizontal: 5,
    },
    titleStyle: {
        fontSize: 20,
        color: COLORS.darkGreen,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 16,
        color: COLORS.subTitle,
        marginVertical: 12,
        textAlign: 'center',
    },
    ViewProfileButton: {
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 40,
        backgroundColor: COLORS.darkGreen,
    },
    viewProfileText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    rowConatinerStyle2: {
        flexDirection: 'row',
        marginTop: 20,
    },
    rowConatinerStyle3: {
        flexDirection: 'row',
        marginTop: '10%',
    },
});

export default styles;
