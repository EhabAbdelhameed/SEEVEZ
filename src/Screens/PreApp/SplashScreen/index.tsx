import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
const SplashScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <LottieView
      source={require('assets/images/Splash Seevez.json')}
      autoPlay
      resizeMode='cover'
      loop={false}
      style={{
        flex: 1,
      }}

      onAnimationFinish={() => {
        navigation.navigate('auth')
      }}
    />
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
