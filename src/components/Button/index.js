import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Button = ({type, title}) => {
    return (
        <View style={styles.container(type)}>
            <Text style={styles.text}>{title}</Text>
        </View>
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
