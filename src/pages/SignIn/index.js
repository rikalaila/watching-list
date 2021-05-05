import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Link, Button, Gap } from '../../components';

const SignIn = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.title}>SignIn Watching-List</Text>
            <Input label="Email Address" />
            <Gap height={24} />
            <Input label="Password" />
            <Gap height={10} />
            <Link title="Forgot My Password" size={12} />
            <Gap height={40} />
            <Button title="Sign In" />
            <Gap height={30} />
            <Link title="Create New Account" size={16} align="center" />
        </View>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: 'rgb(28, 27, 27)',
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
        /*fontFamily: 'Nunito-Semibold',*/
        color: '#112340',
        marginTop: 155,
        marginBottom: 40,
    },

});