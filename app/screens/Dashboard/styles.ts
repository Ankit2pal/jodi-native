import { StyleSheet, Platform } from 'react-native';
import { COLORS, SIZES, width, height } from '../../utils/constants';

const Styles = StyleSheet.create({
    view1: {
        width: 50,
        height: 50,
        padding: 5,
        margin: 5,
        marginRight: 20,
        marginTop: -45,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    },
    img: {
        width: 50,
        height: 50,
    },
    onineIcon: {
        width: 15,
        height: 15,
        backgroundColor: '#C69749',
        borderRadius: 15 / 2,
        position: 'absolute',
        bottom: 10,
        right: -10,
        //marginTop: 3,
    },
    imageUser: {
        flexDirection: 'row',
        marginTop: 10,
    },
    img2: {
        width: 80,
        height: 80,
        margin: 10,
        marginTop: 15,
        marginLeft: 15,
    },
    welcomeTextView: {
        marginTop: 23,
        marginHorizontal: 10,
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    text2: {
        fontSize: 18,
    },
    view2: {
        backgroundColor: 'white',
        top: 20,
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    view3: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 23,
    },
    textView: {
        width: width / 3.5,
        padding: 5,
        height: 100,
        margin: 5,
        borderRadius: 15,
        borderWidth: 1,
        fontSize: 50,
        color: COLORS.white,
        textAlign: 'center',
        justifyContent: 'center',
        borderColor: '#d9cbca',
        backgroundColor: COLORS.color3,
        marginHorizontal: 30,
    },
    textView2: {
        width: width / 3.5,
        marginHorizontal: 30,
        padding: 5,
        height: 100,
        margin: 5,
        borderRadius: 15,
        fontSize: 50,
        color: COLORS.white,
        textAlign: 'center',
        justifyContent: 'center',
        borderColor: '#d9cbca',
        backgroundColor: COLORS.color7,
        // marginHorizontal: 10,
    },
    commanText: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
    },
    view4: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: '4%',
    },
    viewProfiletxt: {
        marginLeft: 15,
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
    },
    moreProfiletxt: {
        fontSize: 18,
        marginRight: 5,
        color: COLORS.color7,
        marginTop: 6,
    },
    view5: {
        marginTop: 10,
        marginHorizontal: 5,
    },
});

export default Styles;
