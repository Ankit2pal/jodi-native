import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';

interface Props {
  modal: any;
  mode?: 'date' | 'datetime' | 'time';
  open?: any;
  date?: any;
  onConfirm: (text: any) => void;
  onCancel: () => void;
  theme?: any;
  style?: any;
}

const DatePickComponent: React.FC<Props> = props => {
  return (
    <DatePicker
      modal
      mode={props.mode}
      open={props.open}
      date={props.date}
      onConfirm={props.onConfirm}
      onCancel={props.onCancel}
      theme={props.theme}
      style={props.style}
    />
  );
};

DatePickComponent.defaultProps = {
  modal: '',
  open: '',
  date: '',
  onConfirm: () => {},
  onCancel: () => {},
  theme: '',
  style: {},
};

export default DatePickComponent;
