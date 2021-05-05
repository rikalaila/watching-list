import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { IconBack } from '../../../assets';

const Header = ({ onPress, title }) => {
    return (
        <View style={styles.container}>
            <Button type='icon-only' icon="arrow-back" onPress={onPress} />
            <Text style={styles.text}>{title}</Text>
            <Gap width={24} />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 30,
        backgroundColor: 'rgb(28, 27, 27)',
        flexDirection: 'row',
    },
    text: {
        textAlign: 'center',
        flex: 1,
        fontSize: 20,
        fontFamily: 'Nunito-Semibold',
        color: '#112340',
    }

})