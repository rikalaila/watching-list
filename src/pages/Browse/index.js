import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Browse = () => {
    return (
        <View style={styles.container}>
            <Text>Browse Page</Text>
        </View>
    );
};

export default Browse;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    }
})
