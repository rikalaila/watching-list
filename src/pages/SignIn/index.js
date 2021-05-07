import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Link, Button, Gap } from '../../components';

const SignIn = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Text style={styles.title}>Sign In to Malam Minggu</Text>
            <Input label="Email Address" />
            <Gap height={24} />
            <Input label="Password" />
            <Gap height={10} />
            <Gap height={40} />
            <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
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
        fontSize: 30,
        fontWeight: 'bold',
        color: 'rgb(247, 156, 59)',
        marginTop: 20,
        marginBottom: 40,
    },

});