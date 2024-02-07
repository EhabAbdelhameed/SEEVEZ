import {View, Text, Alert, Platform} from 'react-native';
import React, {useCallback, useState} from 'react';
import {styles} from '../styles';
import {Formik} from 'formik';
import InputView from 'components/molecules/Input';
import Button from 'components/molecules/Button';
import {ADDONTHEROPTION} from 'assets/Svgs';
import DropDown from './DropDown';
import {Input} from 'react-native-elements';
import {RenderSvgIcon} from 'components/atoms/svg';
import {Dropdown} from 'react-native-element-dropdown';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import { duration } from 'moment';
import Toast from 'react-native-toast-message';
const data = [
  {label: '1 day', id: 1},
  {label: '3 days', id: 2},
  {label: '7 day', id: 3},
  {label: '2 week', id: 4},
];
const Form = (source: any) => {
  const navigation = useNavigation<any>();
  const _handleNavigation = useCallback(() => {
    navigation.navigate('CreatePollLink');
  }, []);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [value, setValue] = useState(null);
  // const [options, setOptions] = useState<any>([1]);
  const [options, setOptions] = useState<any>([
    { answer: '' },{ answer: '' } // Initial single input field for one option
  ]);
  return (
    <View style={styles.formContainer}>
      <Text style={styles.textHeaderForm}>Create a poll</Text>
      <Formik
        initialValues={{question: '', duration: '', options: [{answer: ''}]}}
        onSubmit={values => {
          if(values.question!=''&&values.duration!=''&&values.options?.length>=2){
            navigation.navigate('CreatePollLink', {
              data: {source, values},
            });
          }else{
            Toast.show({
              type: 'error',
              text1: 'Please fill all the data',
            });
          }
        
        }}>
        {(props: any) => (
          <View>
            <View>
              <Text style={styles.label}>Your question</Text>
              <Input
                {...props}
                name={`question`}
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
            {options.map((Exp: any, index: any) => (
              <View key={index}>
                <Text style={styles.label}>{`option${index + 1}`}</Text>
                <Input
                  {...props}
                  name={`options[${index}][answer]`}
                  inputContainerStyle={styles.inputContainer}
                  onChangeText={e => props?.setFieldValue(`options[${index}][answer]`, e)}
                  placeholderTextColor={'#B9B9B9'}
                  containerStyle={styles.containerStyle}
                  inputStyle={styles.inputStyle}
                  placeholder={`Write here..`}
                />
              </View>
            ))}

            <TouchableOpacity
            onPress={() => {
              setOptions((prevOptions:any) => [...prevOptions, { answer: '' }]);
            }}
              style={styles.AddOptionContainer}>
              <ADDONTHEROPTION />
              <Text style={styles.text2}>Add another option</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.label}>Poll duration</Text>  
              <Dropdown
                style={styles.uploadContainer}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                // maxHeight={300}
                labelField="label"
                valueField="id"
                placeholder="Duration"
                searchPlaceholder="Search..."
                value={value}
                onChange={(item: any) => {
                  props?.setFieldValue(`duration`, item?.id);
                }}
                renderRightIcon={() => (
                  <RenderSvgIcon
                    icon={dropdownOpen ? 'ArrowUp' : 'ArrowDown'} // Choose the icon based on the dropdown state
                    width={16}
                    height={16}
                  />
                )}
                onFocus={() => setDropdownOpen(true)} // Set the state to open when the dropdown is focused
                onBlur={() => setDropdownOpen(false)}
              />
            </View>
            <View style={{marginVertical: 10, marginBottom: 20}}>
              <Text style={[styles.text1]}>
                Lorem ipsum dolor sit amet consectetur. Ac orci congue a
                sagittis nunc nibh. Vulputate id a posuere tortor tellus dis
                vulputate auctor.
              </Text>
            </View>
            <Button text="Done" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Form;
