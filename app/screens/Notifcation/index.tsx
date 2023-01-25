import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { onGetgetNotificationRequest } from 'app/store/slice/getNotificationSlice';
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
interface Props { }

const Notifcation: React.FC<Props> = (props) => {
    const dispatch = useDispatch();

    const data = useSelector((state) => state.notification?.data?.data);
    console.log("notification data >>>>>", data);

    // const data = useSelector((state) => state.notification?.data?.data);
    useEffect(() => {
        dispatch(onGetgetNotificationRequest());
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.maincontainer}>
                            <TouchableOpacity >
                                <Text style={styles.textStyle}>{item.Id}</Text>
                                <Text style={styles.textStyle}>{item.Title}</Text>
                                <Text style={styles.textStyle1} >{item.Message}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}

            />
        </View>
    )
};

Notifcation.defaultProps = {};


export default Notifcation;