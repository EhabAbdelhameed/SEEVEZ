import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';
import { Eye, EyeSlash, Right } from 'assets/Svgs';
const CustomInput = ({
  values,
  Label,
  handleChange,
  handleBlur,
  touched,
  errors,
  placeholder,
  secureTextEntry,
  maxLength,
  ...props
}: {
  Label?: any;
  values: any;
  handleChange: any;
  handleBlur?: any;
  touched?: any;
  errors?: any;
  secureTextEntry?: boolean;
  maxLength?: number;
} & TextInputProps) => {
  const [secure, setSecure] = React.useState(true)

  return (
    <>
      <View style={[styles.Container, { borderColor: (errors[Label] && touched[Label]) ? 'red' : '#1D5EDD', }]}>
        <TextInput
          {...props}
          value={values[Label]}
          placeholder={placeholder}
          maxLength={maxLength}
          style={[styles.Input, {}]}
          placeholderTextColor={'#B9B9B9'}
          secureTextEntry={secureTextEntry ? secure : false}
          onChangeText={handleChange(Label)}
        />
        {Label == 'email' && ((errors[Label] == undefined && values[Label] != '') ? <Right fill={'green'} /> : <Right fill="#E8E8E8" />)}
        {secureTextEntry && (
          secure ?
            <TouchableOpacity activeOpacity={.8} onPress={() => setSecure(false)}>
              <Eye fill={'green'} />
            </TouchableOpacity>
            :
            <TouchableOpacity activeOpacity={.8} onPress={() => setSecure(true)}>
              <EyeSlash fill="#E8E8E8" />
            </TouchableOpacity>
        )}
      </View >

    </>
  );
};

export default CustomInput;
