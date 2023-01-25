import { StyleSheet } from 'react-native';
import { COLORS, SIZES, width, height } from '../../utils/constants';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginTop: '15%',
        marginBottom: 20,
    },
    continueText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight:'700',
        margin: 5,
        padding: 5,
        color: COLORS.white,
    },
    subContainer: {
        marginHorizontal: 20,
        marginTop: 25,
    },
    physicalInfoText: {
        color: COLORS.dotPrimary,
        fontWeight: '700',
        marginHorizontal: 10,
        fontSize:18,
       
    },
    partnerPreText: {
        color: COLORS.dotPrimary,
        fontWeight: '700',
        marginHorizontal: 10,
        fontSize:18,
        marginTop:25 
    },
    headingText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginTop: 15,
        color: COLORS.dotPrimary,
    },
  
});

export default Styles;
