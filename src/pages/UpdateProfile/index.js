import React from 'react';
import { ScrollView, StyleSheet, Text, View, } from 'react-native';
import { Input, ProfileMap, Gap, Button } from '../../components';

const UpdateProfile = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Text style={styles.text}>Edit Profile</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <ProfileMap isRemove />
                    <Gap height={26} />
                    <Input label="Full Name" />
                    <Gap height={24} />
                    <Input label="Email" />
                    <Gap height={24} />
                    <Input label="Password" />
                    <Gap height={40} />
                    <Button title="Save Profile" onPress={() => navigation.navigate('Profile')} />
                </View>
            </ScrollView>
        </View>
    );
};

export default UpdateProfile;

const styles = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: 'rgb(28, 27, 27)',
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        paddingTop: 0,
    },
    text: {
        color: 'rgb(247, 156, 59)',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        color: 'rgb(247, 156, 59)',
    }
})