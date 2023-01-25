import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

interface Props {
    value: string;
    status: 'checked' | 'unchecked';
    onPress: () => void;
    disabled?: boolean;
    color?: string;
    uncheckedColor?: string;
    theme?: any;
    key?: string;
    text?: string;
}

const RadioController: React.FC<Props> = (props) => (
    <View
        style={{
            flexDirection: 'row',
            backgroundColor: '#D9D9D9',
            borderRadius: 30,
            marginHorizontal: 10,
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 10,
        }}>
        <RadioButton
            {...props}
            value={props.value}
            color={props.color}
            status={props.status}
            onPress={props.onPress}
            uncheckedColor={props.uncheckedColor}
            disabled={props.disabled}
            key={props.key}
            theme={props.theme}
        />
        <Text style={{ fontSize: 20, color: '#000000', marginVertical: 3, marginRight: 15 }}>
            {props.text}
        </Text>
    </View>
);

RadioController.defaultProps = {
    disabled: false,
    color: '#082A22',
    uncheckedColor: '#000',
    value: '',
    status: 'unchecked',
    onPress: () => {},
    theme: {},
    key: '',
    text: '',
};

export default RadioController;
