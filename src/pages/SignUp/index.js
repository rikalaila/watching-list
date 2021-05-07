import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Gap, } from '../../components';

const SignUp = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.text}>Sign Up to Malam Minggu</Text>
                <Input label="Name" />
                <Gap height={24} />
                <Input label="Email" />
                <Gap height={24} />
                <Input label="Password" />
                <Gap height={40} />
                <Button title="Continue" onPress={() => navigation.replace('UploadPhoto')} />
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