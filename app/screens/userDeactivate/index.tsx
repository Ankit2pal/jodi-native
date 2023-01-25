import React, { useEffect, useState } from 'react';
import { List } from 'react-native-paper';
import NavigationService from 'app/navigation/NavigationService';
import AccordionComponent from 'app/components/AccordionComponent';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import TextInputController from 'app/components/TextInputComponent';
import DropdownController from 'app/components/DropDownComponent';
import { onGetDeactivateUserDataRequest } from 'app/store/slice/getDeactivateUserSlice';
import styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import HeaderComponent from 'app/components/HeaderComponent';
import { onpostDeactivateRequest } from 'app/store/slice/postDeactivateUserSlice';
import BottomTabNavigation from 'app/navigation/BottomTabNavigation';

interface Props {}

const Deactivate: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const [deactivateOpen, setDeactivateOpen] = useState(false);
    const [deactivateValue, setDeactivateValue] = useState();
    const [deactivateItems, setDeactivateItems] = useState([]);

    const [name, setName] = React.useState('');

    const [dataType, setDataType] = React.useState();
    const [message, SetMessage] = React.useState();
    const [DeactiveReason, setDeactiveReason] = React.useState();

    const user = useSelector((state) => state.DeactivateData);
    const userID = useSelector((state) => state?.login);

    useEffect(() => {
        console.log("deactivateValue ???", deactivateValue)
        dispatch(onGetDeactivateUserDataRequest());
        return () => {};
    }, [deactivateValue]);

    const onSubmit = () => {
        const payload = {
            DeactiveTypeId: deactivateValue,
            DeactiveReason: DeactiveReason,
            UserId: userID.data?.UserId,
        };
        console.log('user  dev payload', payload);
        dispatch(onpostDeactivateRequest(payload));
    };

    return (
        <>
            <View style={styles.container}>
                <HeaderComponent menuicon={'arrow-left'} headerName={'Deactivate'} />
                <View style={styles.container}></View>
                <View style={styles.mainView}>
                    <DropdownController
                        open={deactivateOpen}
                        value={deactivateValue}
                        items={user.data?.data?.map((item: any) => ({
                            label: item.DeactiveType,
                            value: item.Id,
                        }))}
                        searchable={true}
                        setOpen={setDeactivateOpen}
                        setValue={setDeactivateValue}
                        setItems={setDeactivateItems}
                        placeholder={'Deactivate Type'}
                        style={styles.dropdownStyle}
                        onChangeItem={(dataType) => {
                            console.log(dataType);
                        }}
                        // value={dataType}
                        listMode={'SCROLLVIEW'}
                        zIndex={70}
                        // onChangeText={(dataType) => setDataType(dataType)}
                    />
                    <TextInputController
                        label="Deactivate reason "
                        text={DeactiveReason}
                        value={DeactiveReason}
                        mode="outlined"
                        // onChangeText={(name) => setName(name)}
                        style={styles.textinput1}
                        theme={{
                            colors: {
                                primary: '#0b421b', // Outline color here
                            },
                        }}
                        onChangeText={(DeactiveReason: any) => setDeactiveReason(DeactiveReason)}
                    />
                    <TouchableOpacity style={styles.touchableopacity1} onPress={() => onSubmit()}>
                        <Text style={styles.deactivatestyle}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
           
        </>
    );
};

Deactivate.defaultProps = {};

export default Deactivate;
