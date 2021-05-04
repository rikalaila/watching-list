import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Logo } from './../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted')
    }, 3000);
  }, [])
  return (
    <View style={styles.container}>
      <Logo />
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
