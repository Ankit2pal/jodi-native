import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './style';

interface Props {
    defaultCode?: CountryCode
withDarkTheme?: boolean
withShadow?: boolean
autoFocus?: boolean
defaultValue?: string
value?: string
disabled?: boolean
disableArrowIcon?: boolean
placeholder?: string;
onChangeCountry?: (country: Country) => void;
onChangeText?: (text: string) => void;
onChangeFormattedText?: (text: string) => void;
containerStyle?: StyleProp<ViewStyle>;
textContainerStyle?: StyleProp<ViewStyle>;
renderDropdownImage?: JSX.Element;
textInputProps?: TextInputProps;
textInputStyle?: StyleProp<TextStyle>;
codeTextStyle?: StyleProp<TextStyle>;
flagButtonStyle?: StyleProp<ViewStyle>;
countryPickerButtonStyle : StyleProp<ViewStyle>;
layout?: "first" | "second";
filterProps?: CountryFilterProps;
countryPickerProps?: any;

}

const PhoneNumberController: React.FC<Props> = (props) => {
    return (
        <TextInput
            {...props}
            mode={props.mode}
            value={props.text}
            onChangeText={props.onChangeText}
            style={props.style}
            placeholder={props.placeholder}
            label={props.label}
            secureTextEntry={props.secureTextEntry}
            autoCapitalize={props.autoCapitalize}
            autoCorrect={props.autoCorrect}
            keyboardType={props.keyboardType}
            returnKeyType={props.returnKeyType}
            onSubmitEditing={props.onSubmitEditing}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            onEndEditing={props.onEndEditing}
            left={props.left}
            right={props.right}
            disabled={props.disabled}
            activeUnderlineColor={props.activeUnderlineColor}
            maxLength={props.maxLength}
            multiline={props.multiline}
            numberOfLines={props.numberOfLines}
            theme={props.theme}
        />
    );
};

PhoneNumberController.defaultProps = {
    text: '',
    style: {},
    placeholder: '',
    label: '',
    secureTextEntry: false,
    autoCapitalize: 'none',
    autoCorrect: false,
    keyboardType: 'default',
    returnKeyType: 'done',
    onChangeText: () => {},
    onSubmitEditing: () => {},
    onBlur: () => {},
    onFocus: () => {},
    onEndEditing: () => {},
    left: null,
    right: null,
    disabled: false,
    activeUnderlineColor: '',
    maxLength: 50,
    multiline: false,
    numberOfLines: 1,
    theme: {},
};

export default PhoneNumberController;
