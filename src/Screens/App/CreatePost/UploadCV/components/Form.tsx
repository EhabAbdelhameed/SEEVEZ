import {View, Text, Alert, Platform} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styles';
import {Formik} from 'formik';
import InputView from 'components/molecules/Input';
import Button from 'components/molecules/Button';
import {ADDONTHEROPTION} from 'assets/Svgs';

import {Input} from 'react-native-elements';
import {RenderSvgIcon} from 'components/atoms/svg';
import {Dropdown} from 'react-native-element-dropdown';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Form = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [options, setOptions] = useState<any>([1]);
  return (
    <View style={styles.formContainer}>
      <Text style={styles.textHeaderForm}>Upload your CV</Text>
      <Formik
        initialValues={{description: '', duration: '',options:[]}}
        onSubmit={values => Alert.alert(JSON.stringify(values))}>
        {(props: any) => (
          <View style={{height:'100%'}} >
            <View>
              <Text style={styles.label}>Add description</Text>
              <Input
                {...props}
                name={`description`}
                inputContainerStyle={{
                  borderRadius: 16,
                  borderColor: '#1D5EDD',
                  borderWidth: 1,
                  paddingHorizontal: 15,
                  height: Platform.OS == 'android' ? null : 50,
                }}
                onChangeText={e => props?.setFieldValue(`question`, e)}
                placeholderTextColor={'#B9B9B9'}
                containerStyle={{
                  paddingHorizontal: 0,
                  marginVertical: 1,
                  height: 50,
                  marginBottom: 15,
                }}
                inputStyle={{
                  fontSize: 14,
                  //  color: 'red'
                }}
                placeholder={`Write here..`}
              />
              {/* <InputView
                                name="question"
                                placeholder="Write here.."
                                props={props}
                            /> */}
            </View>
           
            <Button style={{position:'absolute',bottom:60,width:'100%'}} text="Done" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Form;
