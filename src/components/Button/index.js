import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({type, title, onPress}) => {
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: type => ({
        backgroundColor: type === 'secondary' ? 'grey' : 'rgb(247, 156, 59)',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginVertical: 5
    }),
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
