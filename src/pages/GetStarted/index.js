import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { BGStarted } from '../../assets';
import Button from '../../components/Button';

const GetStarted = () => {
    return (
        <ImageBackground source={BGStarted} style={styles.container}>
            <Button title="Sign Up" onPress={() => alert('Hai')}/>
            <Button title="Sign In" type="secondary" onPress={() => alert('Ha')}/>
        </ImageBackground>
    );
};

export default GetStarted

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    }
})
