import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Input, Gap, } from '../../components';
import axios from 'axios';
import { useEffect } from 'react';

const SignUp = ({navigation}) => {
    const emuIP = "http://192.168.137.1";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");

    const submit = () => {
        const data = {
            name,
            email,
            password,
            password_confirmation,
        }
        console.log("data yang mau dikirim : ", data);
        console.log("data stringify : ", JSON.stringify(data));
        // axios.post('http://192.168.137.1/auth/register', {
        //     "name": "asd",
        //     "email": "asd@asd.com",
        //     "password": "123123123",
        //     "password_confirmation": "123123123",
        //   })

        // axios.post('http://192.168.137.1/auth/register', data)
        // .then((response) => {
        //     console.log(response);
        // }, (error) => {
        //     console.log(error);
        // });
        
        // .then(res => {
        //     console.log(res);
        //     console.log(res.data);
        //     // setName("");
        //     // setEmail("");
        //     // setPassword("");
        //     // setPassword_confirmation("");
        // })

        useEffect(() => {
            fetch('http://192.168.137.1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(console.log("res : ", response))
            .then(json => {
                console.log('post response : ', json)
            })
        }, []);

        navigation.replace('MainApp')
    }
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.text}>Sign Up to Malam Minggu</Text>
                {/* <Input label="Name" />
                <Gap height={24} />
                <Input label="Email" />
                <Gap height={24} />
                <Input label="Password" type="password" />
                <Gap height={40} />
<<<<<<< HEAD
                <Button title="Sign Up" onPress={() => navigation.replace('MainApp')} /> */}

                <TextInput placeholder="Name" placeholderTextColor="white" style={styles.input} value={name} onChangeText={(value) => setName(value)} />
                <Gap height={24} />
                <TextInput placeholder="Email" placeholderTextColor="white" style={styles.input} value={email} onChangeText={(value) => setEmail(value)} />
                <Gap height={24} />
                <TextInput placeholder="Password" placeholderTextColor="white" style={styles.input} value={password} onChangeText={(value) => setPassword(value)} secureTextEntry={true} />
                <Gap height={24} />
                <TextInput placeholder="Confirm Password" placeholderTextColor="white" style={styles.input} value={password_confirmation} onChangeText={(value) => setPassword_confirmation(value)} secureTextEntry={true} />
                <Gap height={40} />
                {/* <Button title="Sign Up" onPress={() => navigation.replace('MainApp')} /> */}
                <Button title="Sign Up" onPress={submit} />
                
=======
                <Button title="Continue" onPress={() => navigation.replace('MainApp')} />
>>>>>>> e433aa5bb2d665910c78346a475e0feab6052fd5
            </View>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    content: {
        marginTop: 20,
        padding: 40,
        paddingTop: 0,
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 25,
        paddingHorizontal: 18,
        color: "white",
        borderColor: 'rgb(247, 156, 59)'
    },

    page: {
        backgroundColor: 'rgb(28, 27, 27)',
        flex: 1,
    },
    text: {
        color: 'rgb(247, 156, 59)',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
    }
});