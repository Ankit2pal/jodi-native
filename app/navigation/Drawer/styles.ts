import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, SIZES } from '../../utils/constants';
const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelStyle: {
        fontSize: 12,
        marginBottom: 12,
    },
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold',
    },
    text: {
        marginTop: 16,
        fontWeight: 'bold',
        flexDirection: 'row',
    },
    chekboxtext: {
        fontWeight: 'bold',
        margin: 8,
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    col: {
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    preference: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    button: {
        // backgroundColor: '#f8f8ff',
        padding: 10,
        borderRadius: 10,
        margin: 10,
        flexDirection: 'row',
    },
    listbutton: {
        padding: 5,
        borderRadius: 10,
        margin: 2,
        flexDirection: 'row',
    },
});

export default styles;
