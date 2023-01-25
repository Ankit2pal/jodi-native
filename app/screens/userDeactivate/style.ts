import { StyleSheet, Platform } from 'react-native';
import { COLORS, SIZES, width, height } from '../../utils/constants';

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        // alignItems: 'center',
        flex: 1,
    },
    mainView: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },
    dropdownStyle: {
        width:"90%",
        height: 50,
        borderRadius: 5,
        marginTop: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        borderColor: COLORS.dropDown,
        borderWidth:2
    },
    textinput1: {
        height: 50,
        width: '90%',
        backgroundColor: COLORS.white,
        marginBottom:20,
    },
    touchableopacity1: {
        height: 50,
        width: '45%',
        backgroundColor: COLORS.dotPrimary,
        borderRadius: 25,
        marginTop: 15,
    },
    deactivatestyle: {
        fontSize: 16,
        color: COLORS.white,
        alignSelf: 'center',
        marginVertical: 15,
        fontWeight: 'bold',
    },
});

export default styles;
