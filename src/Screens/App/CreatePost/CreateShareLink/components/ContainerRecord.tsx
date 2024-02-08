import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {styles} from '../styles';

const ContainerRecord = (key: any) => {
  return key == 0 ? (
    <ImageBackground
      source={require('assets/images/bgGrediant.png')}
      style={styles.bgContainer}
      resizeMode="stretch">
      <Image
        source={require('assets/images/Record.png')}
        style={{width: '60%'}}
        resizeMode="contain"
      />
    </ImageBackground> //'#1D5EDD', '#00CEC8', '#EDBC33', '#ED3C3C'
  ) : (
    <View
      style={[
        styles.bgContainer,
        {
          backgroundColor:
            key == 1
              ? '#1D5EDD'
              : key == 2
              ? '#00CEC8'
              : key == 3
              ? '#EDBC33'
              : '#ED3C3C',
        },
      ]}>
      <Image
        source={require('assets/images/Record.png')}
        style={{width: '60%'}}
        resizeMode="contain"
      />
    </View>
  );
};

export default ContainerRecord;
