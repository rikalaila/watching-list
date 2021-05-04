import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Logo } from './../../assets';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Logo height="50%" width="50%" />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'rgb(28, 27, 27)',
    flex :1,
    alignContent: 'center',
    justifyContent: 'center'
  }
})
