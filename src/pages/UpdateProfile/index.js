import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View, } from 'react-native';
import { Input, ProfileMap } from '../../components';

const UpdateProfile = () => {
    return (
        <View style={styles.page}>
            <Text>Edit Profile</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <ProfileMap />
                    <Gap height={26} />
                    <Input label="Full Name" />
                    <Gap height={24} />
                    <Input label="Email" />
                    <Gap height={24} />
                    <Input label="Password" />
                    <Gap height={40} />
                    <Button title="Save Profile" />
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
        padding: 40,
        paddingTop: 0,
    }
})