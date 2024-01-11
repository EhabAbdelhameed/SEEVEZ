import React, {useState} from 'react';
import {Input} from 'react-native-elements';
import {RenderSvgIcon, TName} from '../atoms/svg';
import {FormikProps} from 'formik';
import {Text, View} from 'react-native';
import NewPicker from './PhonePicker';

const InputView = ({
  name,
  placeholder,

  iconName,
  secure = false,
  touched,
  errors,
  ...props
}: {
  name: string;
  placeholder: string;
  props: FormikProps<any>;
  iconName?: TName;
  secure?: boolean;
  touched?: any;
  errors?: any;
}) => {
  return (
    <>
      <Input
        placeholder={placeholder}
        secureTextEntry={secure}
        autoComplete="off"
        leftIcon={name == 'phone' ? <NewPicker props={props} /> : <View />}
        rightIcon={
          iconName ? (
            <RenderSvgIcon icon={iconName} width={16} height={16} />
          ) : (
            <View />
          )
        }
        onChangeText={props.handleChange(name)}
        value={props.values.name}
        onBlur={props.handleBlur(name)}
        style={{
          borderBottomWidth: 0,
        }}
        inputContainerStyle={{
          borderRadius: 16,
          borderColor: '#1D5EDD',
          borderWidth: 1,
          paddingHorizontal: 15,
          paddingVertical: 4,
          borderBottomWidth: 0.5,
        }}
        inputStyle={{
          fontSize: 14,
        }}
        containerStyle={{
          paddingHorizontal: 0,
          marginVertical: 1,
          height: 70,
        }}
        {...props}
      />
      {errors[name] && touched[name] && (
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={{color: 'red', fontSize: 14,marginBottom:10}}>{errors[name]}</Text>
        </View>
      )}
    </>
  );
};

export default InputView;
