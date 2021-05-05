import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Input = ({label}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#7D8797',
        borderRadius: 10,
        padding: 12,
    },
    label: {
        fontSize: 16,
        color: 'white',
        marginBottom: 6,

    }
})