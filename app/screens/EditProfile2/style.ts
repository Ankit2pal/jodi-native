import { StyleSheet, Platform } from 'react-native';
import { COLORS, SIZES, width, height } from '../../utils/constants';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    fastimageStyle: {
        height: 100,
        width: 100,
        margin: 20,
        padding: 20,
    },
    mainTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    usrnameText: {
        textAlign: 'center',
        fontSize: 16,
    },
    mainView: {
        marginTop: '10%',
        marginHorizontal: 20,
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.white,
        marginLeft: 20,
        // marginTop: 5,
        bottom: 15,
    },
    accordianStyle: {
        backgroundColor: COLORS.dotPrimary,
        height: 60,
        borderRadius: 30,
    },
});

export default styles;
