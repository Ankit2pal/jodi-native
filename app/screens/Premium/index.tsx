import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {}

const Premium: React.FC<Props> = (props) => (
    <View style={styles.container}>
        <Text style={{ fontSize: 30 }}> Premium </Text>
    </View>
);

Premium.defaultProps = {};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Premium;