import { ActivityIndicator, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import { appColors } from '../../theme/appColors';

const Button = ({ text, onPress, style, textStyle,loading }: {loading?:boolean; text: string; onPress: () => void; style?: ViewStyle; textStyle?: TextStyle; }) => {
  return (
    <TouchableOpacity disabled={loading} onPress={onPress} style={[styles.container, { ...style }]}>
    {
    loading?
    <ActivityIndicator size={'large'} color='#FFF'/> 
    :
     <Text style={[styles.text, {...textStyle}]}>{text}</Text>
     }
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.primary,
    paddingVertical: 10,
    borderRadius: 16,
    height:50,
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    color: appColors.white,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily:'Noto Sans'
  },
});
