import { NavigationHelpersContext } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';


const SignUp = (navigation) => {
    return (
        <View style={styles.page}>
            <Header onPress={() => navigation.goBack()} title="Sign Up" />
            <View style={styles.content}>
                <Input label="Name" />
                <Gap height={24} />
                <Input label="Email" />
                <Gap height={24} />
                <Input label="Password" />
                <Gap height={40} />
                <Button label="Sign Up" />
            </View>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    content: {
        padding: 40,
        paddingTop: 0,
    },
    page: {
        backgroundColor: 'rgb(28, 27, 27)',
        flex: 1,

    }
});