import {View, Text, Alert, Platform} from 'react-native';
import React, {useCallback, useState} from 'react';
import {styles} from '../styles';
import {Formik} from 'formik';
import InputView from 'components/molecules/Input';
import Button from 'components/molecules/Button';
import {ADDONTHEROPTION, DELETE} from 'assets/Svgs';
import DropDown from './DropDown';
import {Input} from 'react-native-elements';
import {RenderSvgIcon} from 'components/atoms/svg';
import {Dropdown} from 'react-native-element-dropdown';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {duration} from 'moment';
import Toast from 'react-native-toast-message';
import CustomInput from 'components/molecules/Input/CustomInput';
import AppSlice from 'src/redux/app';
import {useAppDispatch} from 'src/redux/store';
import {appSizes} from 'theme';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
const data = [
  {label: '1 day', id: 1},
  {label: '3 days', id: 2},
  {label: '7 days', id: 3},
  {label: '2 weeks', id: 4},
];
const data1 = [
  {label: 'يوم', id: 1},
  {label: '3 أيام', id: 2},
  {label: '7 أيام', id: 3},
  {label: 'أسبوعين', id: 4},
];
const Form = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  const _handleNavigation = useCallback(() => {
    // navigation.navigate('cre');
  }, []);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [value, setValue] = useState(null);
  // const [jobRequirements, setJobRequirements] = useState<any>([1]);
  const [jobRequirements, setJobRequirements] = useState<any>(['']);
  const [skills, setSkills] = useState<any>(['']);
  const removeLastOption = () => {
    setJobRequirements((prevOptions: any) => prevOptions.slice(0, -1));
  };
  const removeLastSkill = () => {
    setSkills((prevOptions: any) => prevOptions.slice(0, -1));
  };
  return (
    <View style={styles.formContainer}>
      <Text style={styles.textHeaderForm}>Tell us who you‘re hiring</Text>
      <Formik
        initialValues={{
          JobTitle: '',
          JobLocation: '',
          duration: '',
          job_requirements: [''],
          skills: [''],
        }}
        onSubmit={values => {
          if (values.JobTitle != '' && values.JobLocation != ''&&values.job_requirements[0]!='') {
            navigation.navigate('Form2');
          } else {
            Toast.show({
              type: 'error',
              text1: t('Please enter the Mandatory data'),
            });
          }
        }}>
        {(props: any) => (
          <View>
            <View>
              <Text style={styles.label}>
                Job title{' '}
                <Text
                  style={{
                    fontSize: 14,
                    color: '#676767',
                    fontWeight: '400',
                    fontFamily: 'Noto Sans',
                  }}>
                  {'( Mandatory )'}
                </Text>
              </Text>
              <CustomInput
                {...props}
                Label={'JobTitle'}
                placeholder={t('writeHere')}
              />
            </View>
            <View>
              <Text style={styles.label}>
                Job location{' '}
                <Text
                  style={{
                    fontSize: 14,
                    color: '#676767',
                    fontWeight: '400',
                    fontFamily: 'Noto Sans',
                  }}>
                  {'( Mandatory )'}
                </Text>
              </Text>
              <CustomInput
                {...props}
                Label={'JobLocation'}
                placeholder={t('writeHere')}
              />
            </View>

            {jobRequirements.map((Exp: any, index: any) => (
              <View key={index}>
                <Text style={styles.label}>
                  Job Requirment{' '}
                  {index == 0 ? (
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#676767',
                        fontWeight: '400',
                        fontFamily: 'Noto Sans',
                      }}>
                      {'( Mandatory )'}
                    </Text>
                  ) : (
                    ''
                  )}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Input
                    {...props}
                    name={`job_requirements[${index}]`}
                    inputContainerStyle={[
                      styles.inputContainer,
                      {width: index > 0 ? '95%' : '100%'},
                    ]}
                    onChangeText={e =>
                      props?.setFieldValue(`job_requirements[${index}]`, e)
                    }
                    placeholderTextColor={'#B9B9B9'}
                    containerStyle={styles.containerStyle}
                    inputStyle={[
                      styles.inputStyle,
                      {textAlign: lang == 'ar' ? 'right' : 'left'},
                    ]}
                    placeholder={t('writeHere')}
                  />

                  {index > 0 && (
                    <TouchableOpacity style={{marginLeft:-10}} onPress={() => removeLastOption()}>
                      <DELETE width={30} height={30} />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            ))}
            <TouchableOpacity
              onPress={() => {
                setJobRequirements((prevOptions: any) => [...prevOptions, '']);
              }}
              style={styles.AddOptionContainer}>
              <ADDONTHEROPTION />
              <Text style={styles.text2}>Add another requirment</Text>
            </TouchableOpacity>
            <View>
             
              {skills.map((Exp: any, index: any) => (
              <View key={index}>
                <Text style={styles.label}>
                  Skills{' '}
                  {index == 0 ? (
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#676767',
                        fontWeight: '400',
                        fontFamily: 'Noto Sans',
                      }}>
                      {'( Optional )'}
                    </Text>
                  ) : (
                    ''
                  )}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Input
                    {...props}
                    name={`skills[${index}]`}
                    inputContainerStyle={[
                      styles.inputContainer,
                      {width: index > 0 ? '95%' : '100%'},
                    ]}
                    onChangeText={e =>
                      props?.setFieldValue(`skills[${index}]`, e)
                    }
                    placeholderTextColor={'#B9B9B9'}
                    containerStyle={styles.containerStyle}
                    inputStyle={[
                      styles.inputStyle,
                      {textAlign: lang == 'ar' ? 'right' : 'left'},
                    ]}
                    placeholder={t('writeHere')}
                  />

                  {index > 0 && (
                    <TouchableOpacity style={{marginLeft:-10}} onPress={() => removeLastSkill()}>
                      <DELETE width={30} height={30} />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            ))}
            <TouchableOpacity
              onPress={() => {
                setSkills((prevOptions: any) => [...prevOptions, '']);
              }}
              style={styles.AddOptionContainer}>
              <ADDONTHEROPTION />
              <Text style={styles.text2}>Add another skill</Text>
            </TouchableOpacity>
             
            </View>
           
            <View style={{height: appSizes.height * 0.02}} />
            <Button text={t('next')} onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Form;
