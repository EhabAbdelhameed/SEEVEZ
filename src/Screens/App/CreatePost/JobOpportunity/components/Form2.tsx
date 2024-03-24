import {View, Text, Alert, Platform, TextInput} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {styles} from '../styles';
import {Formik} from 'formik';
import * as Yup from 'yup';
import InputView from 'components/molecules/Input';
import Button from 'components/molecules/Button';
import {ADDONTHEROPTION, DELETE} from 'assets/Svgs';
import DropDown from './DropDown';
import {Input} from 'react-native-elements';
import {RenderSvgIcon} from 'components/atoms/svg';
import {Dropdown} from 'react-native-element-dropdown';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';
import {duration} from 'moment';
import Toast from 'react-native-toast-message';
import CustomInput from 'components/molecules/Input/CustomInput';
import AppSlice, {selectJobtype, selectWorktype} from 'src/redux/app';
import {useAppDispatch} from 'src/redux/store';
import {appSizes} from 'theme';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from 'src/globalStyle';
import Header from './Header';
import AppThunks from 'src/redux/app/thunks';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {selectUser} from 'src/redux/auth';
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
const Form2 = () => {
  const JobTypeData = useSelector(selectJobtype);
  const WorkTypeData = useSelector(selectWorktype);
  const User = useSelector(selectUser);

  const {data}: any = useRoute().params;
  console.log(JSON.stringify(data));

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
  useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      dispatch(AppThunks.GetJobType());
      dispatch(AppThunks.GetWorkType());

      //   dispatch(AppThunks?.GetCompaniesName(searchQuery)).then(() => {
      //     // setLoad(false)
      //   });
    });
    return RenderFunction;
  }, []);
  const [buttonIndexHealth, setButtonIndexHealth] = React.useState(0);
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  const EmailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (
    <SafeAreaView edges={['top']} style={[globalStyles.screen]}>
      <Header />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: 20,
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.formContainer, {paddingHorizontal: 20}]}>
          <Text style={styles.textHeaderForm}>
            Almost Done ! add job criteria
          </Text>
          <Formik
            initialValues={{
              number_of_vacancies: '',
              work_type_id: '',
              job_type_id: '',

              job_description: '',
              salary_range: '',
              email: '',
              external_link: '',
            }}
            validationSchema={
              buttonIndexHealth == 1
                ? Yup.object().shape({
                    external_link: Yup.string()
                      .trim()
                      .required('Please Enter a valid link')
                      .matches(urlPattern, 'Must be a link'),
                  })
                : Yup.object().shape({
                    email: Yup.string()
                      .email('E-mail must be valid')
                      .trim()
                      .min(8, 'Enter a valid e-mail')
                      .required('Please Enter your E-mail')
                      .matches(EmailReg, 'Invalid e-mail'),
                  })
            }
            onSubmit={values => {
              let obj = {
                job_title: data.JobTitle,
                job_location: data.JobLocation,
                number_of_vacancies: values.number_of_vacancies,
                work_type_id: values.work_type_id,
                job_type_id: values.job_type_id,
                job_description: values.job_description,
                salary_range: values.salary_range,
                email: values.email,
                external_link: values.external_link,
                job_requirements: data.job_requirements,
                skills: data.skills,
                user_id: User?.user_id,
                id: 3,
              };
              dispatch(AppSlice.changeJobOpportunity(obj));
              navigation.navigate('CreatePollLink');
            }}>
            {(props: any) => (
              <View>
                <View>
                  <Text style={styles.label}>
                    Number of vacancies{' '}
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#676767',
                        fontWeight: '400',
                        fontFamily: 'Noto Sans',
                      }}>
                      {'( Optional )'}
                    </Text>
                  </Text>
                  <CustomInput
                    {...props}
                    Label={'number_of_vacancies'}
                    placeholder={t('writeHere')}
                  />
                </View>
                <View>
                  <Text style={styles.label}>
                    Workplace type{' '}
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#676767',
                        fontWeight: '400',
                        fontFamily: 'Noto Sans',
                      }}>
                      {'( Optional )'}
                    </Text>
                  </Text>
                  <Dropdown
                    style={styles.uploadContainer}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    activeColor="#DDD"
                    itemTextStyle={{color: '#000'}}
                    data={WorkTypeData}
                    search
                    // maxHeight={300}
                    labelField="name"
                    valueField="id"
                    placeholder="Job type"
                    searchPlaceholder={t('search')}
                    value={value}
                    onChange={(item: any) => {
                      props?.setFieldValue(`work_type_id`, item?.id);
                    }}
                    renderRightIcon={() =>
                      lang == 'en' ? (
                        <RenderSvgIcon
                          icon={dropdownOpen ? 'ArrowUp' : 'ArrowDown'} // Choose the icon based on the dropdown state
                          width={16}
                          height={16}
                        />
                      ) : null
                    }
                    renderLeftIcon={() =>
                      lang == 'ar' ? (
                        <RenderSvgIcon
                          icon={dropdownOpen ? 'ArrowUp' : 'ArrowDown'} // Choose the icon based on the dropdown state
                          width={16}
                          height={16}
                        />
                      ) : null
                    }
                    onFocus={() => setDropdownOpen(true)} // Set the state to open when the dropdown is focused
                    onBlur={() => setDropdownOpen(false)}
                  />
                </View>
                <View>
                  <Text style={styles.label}>
                    Job type{' '}
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#676767',
                        fontWeight: '400',
                        fontFamily: 'Noto Sans',
                      }}>
                      {'( Optional )'}
                    </Text>
                  </Text>
                  <Dropdown
                    style={styles.uploadContainer}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    activeColor='#DDD'
                    itemTextStyle={{color: '#000'}}
                    data={JobTypeData}
                    search
                    // maxHeight={300}
                    labelField="name"
                    valueField="id"
                    placeholder="Job type"
                    searchPlaceholder={t('search')}
                    value={value}
                    onChange={(item: any) => {
                      props?.setFieldValue(`job_type_id`, item?.id),
                        dispatch(AppSlice.changeAddonesCaption(item?.name));
                    }}
                    renderRightIcon={() =>
                      lang == 'en' ? (
                        <RenderSvgIcon
                          icon={dropdownOpen ? 'ArrowUp' : 'ArrowDown'} // Choose the icon based on the dropdown state
                          width={16}
                          height={16}
                        />
                      ) : null
                    }
                    renderLeftIcon={() =>
                      lang == 'ar' ? (
                        <RenderSvgIcon
                          icon={dropdownOpen ? 'ArrowUp' : 'ArrowDown'} // Choose the icon based on the dropdown state
                          width={16}
                          height={16}
                        />
                      ) : null
                    }
                    onFocus={() => setDropdownOpen(true)} // Set the state to open when the dropdown is focused
                    onBlur={() => setDropdownOpen(false)}
                  />
                </View>
                <View>
                  <Text style={styles.label}>
                    Job description{' '}
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#676767',
                        fontWeight: '400',
                        fontFamily: 'Noto Sans',
                      }}>
                      {'( Optional )'}
                    </Text>
                  </Text>
                  <CustomInput
                    {...props}
                    Label={'job_description'}
                    placeholder={t('writeHere')}
                    style={{height: 200}}
                  />
                </View>
                <View>
                  <Text style={styles.label}>
                    Salary range{' '}
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#676767',
                        fontWeight: '400',
                        fontFamily: 'Noto Sans',
                      }}>
                      {'( Optional )'}
                    </Text>
                  </Text>
                  <CustomInput
                    {...props}
                    Label={'salary_range'}
                    placeholder={t('writeHere')}
                  />
                </View>
                <View>
                  <Text style={styles.label}>Applicant collection</Text>
                  <Text style={[styles.label, {fontSize: 14}]}>
                    You will receive applicants on seevez and get notified at
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      columnGap: 40,
                      marginBottom: 20,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        setButtonIndexHealth(0);
                      }}
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        columnGap: 5,
                      }}>
                      <View style={styles.Circle}>
                        {buttonIndexHealth == 0 ? (
                          <View style={styles?.innerCircle} />
                        ) : null}
                      </View>

                      <Text style={styles.label1}>E-mail</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setButtonIndexHealth(1);
                      }}
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        columnGap: 5,
                      }}>
                      <View style={styles.Circle}>
                        {buttonIndexHealth == 1 ? (
                          <View style={styles?.innerCircle} />
                        ) : null}
                      </View>

                      <Text style={styles.label1}>External link</Text>
                    </TouchableOpacity>
                  </View>
                  <TextInput
                    placeholder={t('writeHere')}
                    placeholderTextColor={'#B9B9B9'}
                    style={[
                      styles.InputStyle,
                      {
                        textAlign: lang == 'ar' ? 'right' : 'left',
                        borderColor:
                          buttonIndexHealth == 1
                            ? props?.errors['external_link'] &&
                              props?.touched['external_link']
                              ? 'red'
                              : '#1D5EDD'
                            : props?.errors['email'] && props?.touched['email']
                            ? 'red'
                            : '#1D5EDD',
                        width: '100%',
                      },
                    ]}
                    onChangeText={(value: any) =>
                      buttonIndexHealth == 1
                        ? props?.setFieldValue(`external_link`, value)
                        : props?.setFieldValue(`email`, value)
                    }
                    value={props.values.linkedin}
                  />
                  {buttonIndexHealth == 1 ? (
                    props?.errors.external_link &&
                    props?.touched.external_link ? (
                      <Text
                        style={{color: 'red', marginLeft: 10, fontSize: 12}}>
                        {props?.errors.external_link}
                      </Text>
                    ) : null
                  ) : props?.errors.email && props?.touched.email ? (
                    <Text style={{color: 'red', marginLeft: 10, fontSize: 12}}>
                      {props?.errors.email}
                    </Text>
                  ) : null}
                </View>

                <View style={{height: appSizes.height * 0.02}} />
                <Button text={t('next')} onPress={props.handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Form2;
