import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Link, Gap } from '../../components';
import { Add, UserPhoto } from '../../assets';


const UploadPhoto = () => {
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <View style={styles.profile}>
                    <Text style={styles.text}>Upload Photo</Text>
                    <View style={styles.avatarWrapper}>
                        <Image source={UserPhoto} style={styles.avatar} />
                        <Image source={Add} style={styles.addPhoto} />
                    </View>
                    <Text style={styles.name}>Titis Prawilas Sari</Text>
                    <Text style={styles.email}>titisprawilas24@gmail.com</Text>
                </View>
                <View>
                    <Button title="Upload and Continue" />
                    <Gap height={30} />
                    <Link title="Skip fo this" size={16} align="center" />
                </View>
            </View>
        </View >
    );
};

export default UploadPhoto;

const styles = StyleSheet.create({
    content: {
        marginTop: 20,
        paddingHorizontal: 40,
        paddingBottom: 40,
        flex: 1,
        justifyContent: 'space-between',
    },
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    page: {
        backgroundColor: 'rgb(28, 27, 27)',
        flex: 1,
    },
    avatar: {
        width: 110,
        height: 110,
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: '#E9ECEB',
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6,
    },
    text: {
        color: 'rgb(247, 156, 59)',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 50,
        textAlign: 'center',
    },
    name: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
    },
    email: {
        fontSize: 18,
        textAlign: 'center',
        color: '#7D8797',
    }
})