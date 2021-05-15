import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { EditProfile, NextArrow, UserPhoto } from '../../assets'

const List = ({ profile, name, desc, type, onPress }) => {
    return (
        <View style={styles.container} onPress={onPress}>
            <Image source={EditProfile} style={styles.avatar} />
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            {type === 'next' && <NextArrow />}
        </View>
    );
};

export default List;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    content: {
        flex: 1,
        marginLeft: 16,
    },
    avatar: {
        color: 'white',
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
    },
    name: {
        color: 'white',
        fontSize: 16,
    },
    desc: {
        color: 'white',
        fontSize: 12,
    }

})