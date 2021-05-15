import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Remove, UserPhoto } from '../../assets'


const ProfileMap = ({ name, desc }) => {
    return (
        <View style={styles.container}>
            <View style={styles.borderProfile}>
                <Image source={UserPhoto} style={styles.avatar} />
                <Remove style={styles.removePhoto} />
            </View>
            { name && (
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.email}>{desc}</Text>
                </View>
            )}
        </View>
    );
};

export default ProfileMap

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,
    },
    borderProfile: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        borderWidth: 1,
        borderColor: '#E9ECEB',
    },
    name: {
        color: 'white',
        fontSize: 20,
        marginTop: 16,
        textAlign: 'center'
    },
    email: {
        color: 'white',
        fontSize: 20,
        marginTop: 16,
        textAlign: 'center'
    },
    removePhoto: {
        position: 'absolute',
        right: 8,
        bottom: 8,
    }
})