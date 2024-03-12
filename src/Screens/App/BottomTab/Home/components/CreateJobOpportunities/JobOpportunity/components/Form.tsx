import {View, Text, Alert, Platform} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {styles} from '../styles';
import {Formik} from 'formik';
import InputView from 'components/molecules/Input';
import Button from 'components/molecules/Button';
import {ADDONTHEROPTION, AddAnotherYallow, DELETE} from 'assets/Svgs';
import DropDown from './DropDown';
import {Input} from 'react-native-elements';
import {RenderSvgIcon} from 'components/atoms/svg';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';
import {duration} from 'moment';
import Toast from 'react-native-toast-message';
import CustomInput from 'components/molecules/Input/CustomInput';
import AppSlice, {selectSkills} from 'src/redux/app';
import {useAppDispatch} from 'src/redux/store';
import {appColors, appSizes} from 'theme';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
import AppThunks from 'src/redux/app/thunks';

const Form = () => {
  const {color}: any = useRoute().params;
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const lang = useSelector(selectLang);
  const [selected, setSelected] = useState([]);
  const [Names, setNames] = useState<any>([]);
  const {t, i18n} = useTranslation();
  const _handleNavigation = useCallback(() => {
    // navigation.navigate('cre');
  }, []);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const skills = useSelector(selectSkills);
  const [value, setValue] = useState(null);
  // const [jobRequirements, setJobRequirements] = useState<any>([1]);
  const [jobRequirements, setJobRequirements] = useState<any>(['']);

  const removeLastOption = () => {
    setJobRequirements((prevOptions: any) => prevOptions.slice(0, -1));
  };
  useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      dispatch(AppThunks.GetSkills());
    });
    return RenderFunction;
  }, []);

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
          skillsName: [],
        }}
        onSubmit={values => {
          if (
            values.JobTitle != '' &&
            values.JobLocation != '' &&
            values.job_requirements[0] != ''
          ) {
            navigation.navigate('Form2JobOpportunity', {data: values,color});
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
                color={color != '#FFF' ? '#E8AB00' : '#FFF'}
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
                color={color != '#FFF' ? '#E8AB00' : '#FFF'}
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
                      {
                        width: index > 0 ? '95%' : '100%',
                        borderColor:
                          color != '#FFF' ? '#E8AB00' : appColors.primary,
                        borderWidth: 1,
                      },
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
                    <TouchableOpacity
                      style={{marginLeft: -10}}
                      onPress={() => removeLastOption()}>
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
              {color != '#FFF' ? (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 36,
                    height: 36,
                    borderRadius: 30,
                    backgroundColor: '#F8E5B0',
                  }}>
                  <AddAnotherYallow />
                </View>
              ) : (
                <ADDONTHEROPTION />
              )}
              <Text style={styles.text2}>Add another requirment</Text>
            </TouchableOpacity>
            <View>
              <MultiSelect
                style={[
                  styles.uploadContainer1,
                  {
                    borderColor:
                      color != '#FFF' ? '#E8AB00' : appColors.primary,
                    borderWidth: 1,
                  },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={skills}
                search
                labelField="name"
                valueField="id"
                placeholder={'Select one or more skills'}
                searchPlaceholder="Search..."
                value={selected}
                onChange={(item: any) => {
                  setSelected(item);
                  props?.setFieldValue(`skills`, item);
                  let array = [];
                  for (let i = 0; i < skills?.length; i++) {
                    for (let m = 0; m < item?.length; m++) {
                      if (skills[i].id == item[m]) {
                        array.push(skills[i].name);
                      }
                    }
                  }
                  props?.setFieldValue(`skillsName`, array);

                  // setNames(array)
                }}
                renderRightIcon={() =>
                  lang == 'en' ? (
                    <RenderSvgIcon
                      icon={dropdownOpen ? 'ArrowUp' : 'ArrowDown'}
                      width={16}
                      height={16}
                    />
                  ) : null
                }
                maxSelect={7}
                renderLeftIcon={() =>
                  lang == 'ar' ? (
                    <RenderSvgIcon
                      icon={dropdownOpen ? 'ArrowUp' : 'ArrowDown'}
                      width={16}
                      height={16}
                    />
                  ) : null
                }
                onFocus={() => setDropdownOpen2(true)}
                onBlur={() => setDropdownOpen2(false)}
                // Customizing the style of selected items
                selectedStyle={{
                  backgroundColor: appColors.bg, // Change the background color of selected items
                  borderRadius: 10, // Add border radius to the selected items
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderColor: appColors.bg,
                  // Adjust padding for selected items
                  // margin: 2,
                  columnGap: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row', // Adjust margin for selected items
                }}
                dropdownPosition={'top'}
                // Customizing the rendering of selected items
              />
            </View>

            <View style={{height: appSizes.height * 0.07}} />
            <Button
              style={{
                backgroundColor:
                  color != '#FFF' ? '#E8AB00' : appColors.primary,
              }}
              text={t('next')}
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Form;
