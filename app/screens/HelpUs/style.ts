import { StyleSheet, Platform } from 'react-native';
import { COLORS, SIZES, width, height } from '../../utils/constants';

const Styles = StyleSheet.create({
    container: {
       // justifyContent: 'center',
       // alignItems: 'center',
        //flex: 1,
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    text2: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    mainView: {
        // height: '100%',
        // width: '100%',
        backgroundColor: COLORS.white,
    },
    subView: {
        marginTop: '10%',
        marginHorizontal: 10,
    },
    titleStyle: {
        fontSize: 16,
        color: COLORS.white,
        fontWeight: 'bold',
        marginLeft: 20,
       bottom: 6,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

        
    },
    accordianStyle: {
        backgroundColor: COLORS.dotPrimary,
        height: 60,
        borderRadius: 10,
    },
    downArrowStyle:{
        bottom:6
    }
});

export default Styles;