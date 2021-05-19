import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Input, Link, Button, Gap } from '../../components';
import axios from 'axios';
import { AsyncStorage } from 'react-native';

const SignIn = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = () => {
        const data = {
            email,
            password,
        }
        console.log("data yang mau dikirim : ", data);
        console.log("data stringify : ", JSON.stringify(data));

        axios.post(`http://192.168.137.1:8000/auth/login`, data)
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });

        navigation.replace('MainApp')
    }

    return (
        <View style={styles.page}>
            <Text style={styles.title}>Sign In to Malam Minggu</Text>
            {/* <Input label="Email Address" />
            <Gap height={24} />
            <Input label="Password" />
            <Gap height={10} />
            <Gap height={40} />
            <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
            <Gap height={30} /> */}

            <TextInput placeholder="Email" placeholderTextColor="white" style={styles.input} value={email} onChangeText={(value) => setEmail(value)} />
            <Gap height={24} />
            <TextInput placeholder="Password" placeholderTextColor="blue" style={styles.input} value={password} onChangeText={(value) => setPassword(value)} secureTextEntry={true} />
            <Gap height={50} />
            {/* <Button title="Sign Up" onPress={submit} /> */}
            <Button title="Sign In" onPress={submit} />
            <Link title="Create New Account" size={16} align="center" onPress={() => navigation.navigate('SignUp')} />
            
        </View>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: 'rgb(28, 27, 27)',
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'rgb(247, 156, 59)',
        marginTop: 0,
        marginBottom: 40,
    },
    input: {
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 25,
        paddingHorizontal: 18,
        color: "white",
        borderColor: 'rgb(247, 156, 59)'
    },

});