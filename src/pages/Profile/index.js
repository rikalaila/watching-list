import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { List, ProfileMap, Gap } from '../../components'
import { NextArrow, LogOut } from '../../assets'

const Profile = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Text style={styles.text}>Profile</Text>
                <Gap height={10} />
                <ProfileMap
                    name="Titis Prawilas Sari"
                    desc="titisprawilas@gmail.com"
                />
                <Gap height={30} />
                <List
                    name="Edit Profile"
                    desc="Last Update Yesterday"
                    type="NextArrow"
                    onPress={() => navigation.navigate('UpdateProfile')}
                />
                <List
                    name="Log Out"
                    type="LogOut"
                    onPress={() => navigation.navigate('Splash')}
                />
            </View>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: 'rgb(28, 27, 27)',
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'rgb(247, 156, 59)',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
})
