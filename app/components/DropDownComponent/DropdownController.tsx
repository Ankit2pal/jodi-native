import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

interface Props {
    open: boolean;
    value: string;
    items: any;
    setOpen: () => void;
    setValue: () => void;
    setItems: () => void;
    style?: any;
    placeholder?: string;
    onChangeItem: (item: any) => void;
    listMode?: 'SCROLLVIEW' | 'FLATLIST';
    multiple?: boolean;
    multipleText?: string;
    min?: number;
    max?: number;
    searchable?: boolean;
    showTickIcon?: boolean;
    disabled?: boolean;
    key: string;
    dropDownContainerStyle: 'TOP' | 'BOTTOM';
    zIndex?: number;
    dropDownDirection?: 'TOP' | 'BOTTOM';
    ref?:any;
}

const DropdownController: React.FC<Props> = (props) => (
    <DropDownPicker
        open={props.open}
        value={props.value}
        items={props.items}
        setOpen={props.setOpen}
        setValue={props.setValue}
        setItems={props.setItems}
        style={props.style}
        placeholder={props.placeholder}
        // onChangeItem={props.onChangeItem}
        listMode={props.listMode}
        multiple={props.multiple}
        multipleText={props.multipleText}
        min={props.min}
        max={props.max}
        searchable={props.searchable}
        showTickIcon={props.showTickIcon}
        disabled={props.disabled}
        key={props.key}
        // dropDownContainerStyle={props.dropDownContainerStyle}
        zIndex={props.zIndex}
        dropDownDirection={props.dropDownDirection}
        ref={props.ref}
    />
    // <DropDownPicker zIndex={} />
);

DropdownController.defaultProps = {
    open: false,
    value: '',
    items: [],
    setOpen: () => {},
    setValue: () => {},
    setItems: () => {},
    style: {},
    placeholder: '',
    onChangeItem: () => {},
    listMode: 'SCROLLVIEW',
    multiple: false,
    multipleText: '',
    min: 0,
    max: 0,
    searchable: false,
    showTickIcon: false,
    disabled: false,
    key: '',
    dropDownContainerStyle: 'TOP',
    zIndex: 0,
    dropDownDirection: 'BOTTOM',
    ref:{}
};

export default DropdownController;
