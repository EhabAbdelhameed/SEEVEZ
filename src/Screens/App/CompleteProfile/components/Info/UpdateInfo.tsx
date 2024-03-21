import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  Platform,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Moment from 'moment';
import styles from './styles';

import DonotHaveAccountSection from '../../../../../Components/molecules/DonotHaveAccountSection';
import AuthTopSection from '../../../../../Components/molecules/AuthTopSection';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../../../theme/appColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../../../../../Components/molecules/Button';

import {
  BigLogo,
  CALANDER,
  PHOTO,
  PERSON,
  ImageInfo,
  DELETE,
  Close,
} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {Formik} from 'formik';
import InputView from 'components/molecules/Input';
import {appSizes} from 'theme/appSizes';
import DatePicker from 'react-native-date-picker';
import Modal, {ReactNativeModal} from 'react-native-modal';
import DocumentPicker from 'react-native-document-picker';

import DateTimePicker from '@react-native-community/datetimepicker';

import {Modalize} from 'react-native-modalize';
import AppThunks from 'src/redux/app/thunks';
import {useAppDispatch} from 'src/redux/store';
import {useSelector} from 'react-redux';
import AppSlice, {selectAccessToken, selectDone} from 'src/redux/app';
import AuthSlice, {selectUser} from 'src/redux/auth';
import NewPicker from 'components/molecules/PhonePicker';
import {Input} from 'react-native-elements';
import {RenderSvgIcon} from 'components/atoms/svg';
import {launchImageLibrary} from 'react-native-image-picker';
import BottomModal from './BottomModal';
import BottomModalIos from './BottomModalIos';
import TopHeader from '../Header/TopHeader';
import * as Yup from 'yup';
import BottomHeader from '../Header/BottomHeader';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
import {Nationalities} from '../../../../../../Nationality';

import {MultiSelect} from 'react-native-element-dropdown';
import CustomInput from 'components/molecules/Input/CustomInput';
// import RNDateTimePicker from '@react-native-community/datetimepicker';
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
const UpdateInfo = () => {
  const CurrentUserData = useSelector(selectUser);
  //  console.log("55",JSON.stringify)
  const [date, setDate] = useState(new Date(CurrentUserData?.birthdate));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const dispatch = useAppDispatch();
  const [index, setIndex] = React.useState(false);
  const [isVisible, setVisible] = useState(false);
  const [type, setType] = useState('0');
  const [buttonIndex, setButtonIndex] = React.useState(
    CurrentUserData?.gender == 'male'
      ? 0
      : CurrentUserData?.gender == 'female'
      ? 1
      : CurrentUserData?.gender == null
      ? 3
      : 2,
  );
  const [buttonIndexHealth, setButtonIndexHealth] = React.useState(2);
  const [buttonIndexSmoker, setButtonIndexSmoker] = React.useState(
    CurrentUserData?.smoker == null ? 2 : CurrentUserData?.smoker == 0 ? 1 : 0,
  );
  const [isShowSalary, setIsShowSalary] = useState(false);
  const [isVisiable, setIsVisiable] = useState(false);
  const [Filter, setFilter] = useState<any>(Nationalities);
  const changeDone = useSelector(selectDone);
  // console.log(changeDone)
  useEffect(() => {
    changeDone ? navigation.goBack() : null;
  }, [changeDone]);

  // const [Nationality, setNationality] = useState('');
  const [gender, setGender] = useState('');

  const [smoker, setSmoker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value2, setValue2] = useState(null);
  const [source, setSource] = useState<any>([]);
  const [Nationality, setNationality] = useState<any>(['']);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const renderItem = (item: any) => {
    return (
      <View
        style={{
          padding: 17,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
      </View>
    );
  };
  const UploadImageProfile = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      // The selected media is available in the result.uri
      // dispatch(setImageURL(result[0].uri));

      setSource(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled document picker');
      } else {
        console.error('DocumentPicker Error:', err);
      }
    }
  };
  const pick = () => {
    launchImageLibrary({quality: 0.5, mediaType: 'photo'}).then((res: any) => {
      setSource(res?.assets);
    });
  };

  // useEffect(() => {
  //   changeDone ? navigation.goBack() : null;
  // }, [changeDone]);

  // const navigation = useNavigation<any>();
  const navigation = useNavigation();
  const GenderData = ['male', 'female', 'preferNotToSay'];
  const HealthProfile = ['disabilities', 'specialNeeds'];
  const Smoker = ['yes', 'no'];
  const [code, setCode] = React.useState('');
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();

  const data = {
    title: 'Disabilities',
    subTitle: 'What is your disability?',
  };
  const data1 = {
    title: 'Special Needs',
    subTitle: 'What is your Special Needs ?',
  };
  const addNationalty = () => {
    let arr = [...Nationality];
    arr.push('');
    setNationality(arr);
    // console.log(Nationality)
  };

  const removeNationalty = (index: any) => {
    const newNationalty = [...Nationality];
    newNationalty.splice(index, 1);
    setNationality(newNationalty);
  };

  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);

  const regFacebook = /^(https?:\/\/)?(www\.)?facebook\.com\/.*/i;
  const linkedinPattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/.*/i;
  const instagramPattern = /^(https?:\/\/)?(www\.)?instagram\.com\/.*/i;
  const githubPattern = /^(https?:\/\/)?(www\.)?github\.com\/.*/i;
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;

  const renderListItem = (item: any) => {
    return (
      <TouchableOpacity
        onPress={() => handleDeleteNationality(item?.id)}
        style={{
          backgroundColor: appColors.bg, // Change the background color of selected items
          borderRadius: 10, // Add border radius to the selected items
          paddingHorizontal: 20,
          paddingVertical: 10, // Adjust padding for selected items
          margin: 2,
          columnGap: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row', // Adjust margin for selected items
        }}>
        <Text>{item.name}</Text>

        <Close />
      </TouchableOpacity>
    );
  };
  const handleDeleteNationality = (NationalityId: any) => {
    // Show confirmation dialog

    // Dispatch the action to delete the experience
    dispatch(AppThunks.doDeleteNationality(NationalityId)).then((res: any) => {
      dispatch(AppThunks.GetProfileInfo());
      dispatch(AppSlice.changeDone(false));
    });
  };
  //url.startsWith("http://") || url.startsWith("https://")

  return (
    <SafeAreaView
      edges={['top']}
      style={[styles.container, {direction: lang == 'ar' ? 'rtl' : 'ltr'}]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          backgroundColor: appColors.bg,
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}>
        <TopHeader />
        <View style={styles.bottomSection}>
          <BottomHeader />
          <TouchableOpacity
            onPress={Platform.OS == 'ios' ? pick : UploadImageProfile}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 15,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 86,
                height: 86,
                borderRadius: 86,
                backgroundColor: '#E8EFFC',
                borderWidth: 1,
                borderColor: '#B9CDF4',
              }}>
              {CurrentUserData?.avatar == null &&
              (source == undefined || source?.length == 0) ? (
                <PERSON />
              ) : (
                <Image
                  source={{
                    uri:
                      source?.length != 0 || !source
                        ? source[0]?.uri
                        : CurrentUserData?.avatar,
                  }}
                  style={{width: 86, height: 86, borderRadius: 86}}
                  resizeMode="cover"
                />
              )}
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 36,
                  height: 36,
                  borderRadius: 36,
                  backgroundColor: '#E8EFFC',
                  borderWidth: 1,
                  borderColor: '#B9CDF4',
                  position: 'absolute',
                  bottom: -20,
                }}>
                <ImageInfo />
              </View>
            </View>
          </TouchableOpacity>

          <Formik
            initialValues={{
              FullName: CurrentUserData?.name||'',  
              JobTitle: CurrentUserData?.job_title||'',

              Location: CurrentUserData?.country || '',
              phone: CurrentUserData?.phone_number || '',
              city: CurrentUserData?.city || '',
              area: CurrentUserData?.area || '',
              facebook: CurrentUserData?.facebook || '',
              linkedin: CurrentUserData?.linkedin || '',
              instagram: CurrentUserData?.instagram || '',
              website: CurrentUserData?.website || '',
              github: CurrentUserData?.github || '',
              other: CurrentUserData?.other || '',
              currentSalary: CurrentUserData?.current_salary || '',
              expectedSalary: CurrentUserData?.expected_salary || '',
              showSalary: CurrentUserData?.show_salary || false,
              gender: CurrentUserData?.gender || '',
              birthdate: CurrentUserData?.birthdate || new Date(),
              disability: CurrentUserData?.disabilities || '',
              specialNeeds: CurrentUserData?.special_needs || '',
              heights: CurrentUserData?.height || '',
              weight: CurrentUserData?.weight || '',
              isSmoke: CurrentUserData?.smoker || '',
              avatar: CurrentUserData?.avatar || '',
              code: CurrentUserData?.country_code || '',
            }}
            validationSchema={Yup.object().shape({
              facebook: Yup.string()
                .trim()
                .matches(regFacebook, 'Must be a facebook link'),
              linkedin: Yup.string()
                .trim()
                .matches(linkedinPattern, 'Must be a linkedin link'),
              instagram: Yup.string()
                .trim()
                .matches(instagramPattern, 'Must be an instagram link'),
              github: Yup.string()
                .trim()
                .matches(githubPattern, 'Must be a github link'),
              other: Yup.string().trim().matches(urlPattern, 'Must be a link'),
              website: Yup.string()
                .trim()
                .matches(urlPattern, 'Must be a website link'),
            })}
            onSubmit={values => {
              setLoading(true);

              const formdata = new FormData();

              formdata.append('name', values.FullName);

              formdata.append('country_code', code == '' ? '+20' : code);

              values.JobTitle != '' || !values.JobTitle
                ? formdata.append('job_title', values.JobTitle)
                : formdata.append('job_title', '');
              values.phone != '' || !values.phone
                ? formdata.append('phone_number', values.phone)
                : formdata.append('phone_number', '');
              values.currentSalary != ''
                ? formdata.append('current_salary', values.currentSalary)
                : formdata.append('current_salary', '');
              values.expectedSalary != '' || !values.expectedSalary
                ? formdata.append('expected_salary', values.expectedSalary)
                : formdata.append('expected_salary', '');
              formdata.append('show_salary', isShowSalary == false ? 0 : 1);
              gender != ''
                ? formdata.append('gender', gender.toLocaleLowerCase())
                : null;
              values.birthdate != new Date() || !values.birthdate
                ? formdata.append(
                    'birthdate',
                    Moment(date).format('yyyy/MM/DD'),
                  )
                : formdata.append('birthdate', '');

              values.heights != '' || !values.heights
                ? formdata.append('height', values.heights)
                : formdata.append('height', '');
              formdata.append('smoker', smoker == false ? 0 : 1);
              values.weight != '' || !values.weight
                ? formdata.append('weight', values.weight)
                : formdata.append('weight', '');
              values.other != '' || !values.other
                ? formdata.append('other', values.other)
                : formdata.append('other', '');
              values.github != '' || !values.github
                ? formdata.append('github', values.github)
                : formdata.append('github', '');
              values.website != '' || !values.website
                ? formdata.append('website', values.website)
                : formdata.append('website', '');
              values.facebook != '' || !values.facebook
                ? formdata.append('facebook', values.facebook)
                : formdata.append('facebook', '');
              values.linkedin != '' || !values.linkedin
                ? formdata.append('linkedin', values.linkedin)
                : formdata.append('linkedin', '');
              values.instagram != '' || !values.instagram
                ? formdata.append('instagram', values.instagram)
                : formdata.append('instagram', '');
              if (Nationality[0] != '') {
                for (var i = 0; i < Nationality.length; i++) {
                  formdata.append(`array[${i}][nationality]`, Nationality[i]);
                }
              }

              values.Location != '' || !values.Location
                ? formdata.append('country', values.Location)
                : formdata.append('country', '');
              values.city != '' || !values.city
                ? formdata.append('city', values.city)
                : formdata.append('city', '');
              values.area != '' || !values.area
                ? formdata.append('area', values.area)
                : formdata.append('area', '');

              source?.length != 0
                ? formdata.append('avatar', {
                    uri: source[0]?.uri,
                    type: source[0]?.type,
                    name:
                      Platform.OS == 'ios'
                        ? source[0]?.fileName
                        : source[0]?.name,
                  })
                : null;
              console.log(formdata);
              dispatch(AppThunks.doAddPersonalInfo(formdata)).then(
                (res: any) => {
                  dispatch(AppThunks.GetProfileInfo());
                  setLoading(false);
                },
              );
              // navigation.navigate("ResetPassword")
            }}>
            {(props: any) => (
              <View>
                <Text style={styles.labelStyle1}>{t('fullName')}</Text>
                <CustomInput
                  {...props}
                  Label={'FullName'}
                  placeholder={t('fullName')}
                  value={props.values.FullName}
                />
                <Text style={styles.labelStyle1}>{t('jobTitle')}</Text>
                <CustomInput
                  {...props}
                  Label={'JobTitle'}
                  placeholder={t('jobTitle')}
                  value={props.values.JobTitle}
                />
                <Text style={styles.labelStyle1}>{t('location')}</Text>

                <CustomInput
                  {...props}
                  Label={'Location'}
                  placeholder={t('yourCountry')}
                  value={props.values.Location}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                    columnGap: 10,
                  }}>
                  <View style={{width: '49%'}}>
                    <CustomInput
                      {...props}
                      
                      Label={'city'}
                      placeholder={t('yourCity')}
                      value={props.values.city}
                    />
                  </View>
                  <View style={{width: '49%'}}>
                    <CustomInput
                      {...props}
                      Label={'area'}
                      placeholder={t('yourArea')}
                      value={props.values.area}
                    />
                  </View>
                </View>
                <Text style={styles.labelStyle1}>{t('phone')}</Text>
                {/* <InputView {...props} name="phone" placeholder="Your phone" /> */}
                <Input
                  {...props}
                  leftIcon={
                    lang == 'en' ? (
                      <NewPicker
                        index={index}
                        setcode={setCode}
                        props={props}
                      />
                    ) : null
                  }
                  rightIcon={
                    lang == 'ar' ? (
                      <NewPicker
                        index={index}
                        setcode={setCode}
                        props={props}
                      />
                    ) : null
                  }
                  name={`phone`}
                  value={props.values.phone}
                  inputContainerStyle={{
                    borderRadius: 16,
                    borderColor: '#1D5EDD',
                    borderWidth: 1,
                    paddingHorizontal: 15,
                  }}
                  onChangeText={e => props?.setFieldValue(`phone`, e)}
                  containerStyle={{
                    paddingHorizontal: 0,
                    marginVertical: 1,
                    height: 60,
                  }}
                  inputStyle={{
                    fontSize: 14,
                    textAlign: lang == 'ar' ? 'right' : 'left',
                    //  color: 'red'
                  }}
                  keyboardType="number-pad"
                  placeholder={t('Enter phone number')}
                />
                <Text style={styles.labelStyle1}>{t('externalLinks')}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                    columnGap: 15,
                  }}>
                  <View style={{width: '49%'}}>
                    <CustomInput
                      {...props}
                      Label={'facebook'}
                      placeholder={t('Facebook')}
                      value={props.values.facebook}
                    />
                    {props?.errors.facebook && props?.touched.facebook ? (
                      <Text
                        style={{color: 'red', marginLeft: 10, fontSize: 12}}>
                        {props?.errors.facebook}
                      </Text>
                    ) : null}
                  </View>
                  <View style={{width: '49%'}}>
                    <CustomInput
                      {...props}
                      Label={'linkedin'}
                      placeholder={t('Linkedin')}
                      value={props.values.linkedin}
                    />
                    {props?.errors.linkedin && props?.touched.linkedin ? (
                      <Text
                        style={{color: 'red', marginLeft: 10, fontSize: 12}}>
                        {props?.errors.linkedin}
                      </Text>
                    ) : null}
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                    columnGap: 15,
                  }}>
                  <View style={{width: '49%'}}>
                    <CustomInput
                      {...props}
                      Label={'instagram'}
                      placeholder={t('Instagram')}
                      value={props.values.instagram}
                    />
                    {props?.errors.instagram && props?.touched.instagram ? (
                      <Text
                        style={{color: 'red', marginLeft: 10, fontSize: 12}}>
                        {props?.errors.instagram}
                      </Text>
                    ) : null}
                  </View>
                  <View style={{width: '49%'}}>
                    <CustomInput
                      {...props}
                      Label={'website'}
                      placeholder={t('Website')}
                      value={props.values.website}
                    />
                    {props?.errors.website && props?.touched.website ? (
                      <Text
                        style={{color: 'red', marginLeft: 10, fontSize: 12}}>
                        {props?.errors.website}
                      </Text>
                    ) : null}
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                    columnGap: 15,
                  }}>
                  <View style={{width: '49%'}}>
                    <CustomInput
                      {...props}
                      Label={'github'}
                      placeholder={t('Github')}
                      value={props.values.github}
                    />
                    {props?.errors.github && props?.touched.github ? (
                      <Text
                        style={{color: 'red', marginLeft: 10, fontSize: 12}}>
                        {props?.errors.github}
                      </Text>
                    ) : null}
                  </View>
                  <View style={{width: '49%'}}>
                    <CustomInput
                      {...props}
                      Label={'other'}
                      placeholder={t('Others')}
                      value={props.values.other}
                    />
                    {props?.errors.other && props?.touched.other ? (
                      <Text
                        style={{color: 'red', marginLeft: 10, fontSize: 12}}>
                        {props?.errors.other}
                      </Text>
                    ) : null}
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                    columnGap: 15,
                  }}>
                  <View style={{width: '49%'}}>
                    <Text style={styles.labelStyle1}>{t('currentSalary')}</Text>

                    <CustomInput
                      {...props}
                      Label={'currentSalary'}
                      placeholder={t('writeHere')}
                      value={props.values.currentSalary}
                    />
                  </View>
                  <View style={{width: '49%'}}>
                    <Text style={styles.labelStyle1}>
                      {t('expectedSalary')}
                    </Text>

                    <CustomInput
                      {...props}
                      Label={'expectedSalary'}
                      placeholder={t('writeHere')}
                      value={props.values.expectedSalary}
                    />
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    setIndex(!index), setIsShowSalary(!isShowSalary);
                  }}
                  style={styles.rowAgree}>
                  <View style={[styles.Circle]}>
                    <View style={index ? [styles.innerCircle] : null} />
                  </View>
                  <Text style={[styles.agree, {fontSize: 14}]}>
                    {t('don’tShowMySalary')}
                  </Text>
                </TouchableOpacity>
                <Text style={[styles.labelStyle1, {marginBottom: 10}]}>
                  {' '}
                  {t('gender')}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    paddingRight: 20,
                  }}>
                  {GenderData?.map((item, index) => (
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          setButtonIndex(index), setGender(item);
                          //  console.log("ITEM: ",item)
                        }}
                        style={{
                          flexDirection: 'row',
                        }}>
                        <View style={styles.Circle}>
                          {buttonIndex == index ? (
                            <View style={styles?.innerCircle} />
                          ) : null}
                        </View>

                        <Text
                          style={{
                            color: '#000',
                            marginLeft: 10,
                            fontFamily: 'Noto Sans',
                            fontSize: 14,
                            fontWeight: '400',
                          }}>
                          {t(item)}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>

                <View style={{marginTop: 10, marginBottom: 10}}>
                  <Text style={styles.labelStyle1}>{t('birthdate')}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setVisible(true), setType('1');
                    }}>
                    <View style={styles.dateStyle}>
                      <CALANDER />
                      <Text
                        style={{
                          marginRight: 20,
                          color: '#DDD',
                          fontSize: 16,
                          fontFamily: 'Noto Sans',
                        }}>
                        {Moment(date).format('DD/MM/yyyy')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View>
                  <View style={{marginTop: 10, marginBottom: 10}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View>
                        <Text style={styles.labelStyle}>
                          {t('nationality')}
                        </Text>
                      </View>
                    </View>
                    <MultiSelect
                      style={styles.uploadContainer1}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      itemTextStyle={{color: '#000'}}
                      data={Nationalities}
                      search
                      labelField="name"
                      valueField="name"
                      placeholder={'Select one or more Nationality'}
                      searchPlaceholder="Search..."
                      value={selected}
                      onChange={(items: any) => {
                        setSelected(items), setNationality(items);
                  
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
                    {CurrentUserData?.user_data?.nationality?.length != 0 ? (
                      <FlatList
                        data={CurrentUserData?.user_data?.nationality}
                        renderItem={({item}) => renderListItem(item)}
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()}
                      />
                    ) : null}
                  </View>
                </View>

                <View style={{height: appSizes.height * 0.05}} />

                <Button
                  loading={loading}
                  text={t('Done')}
                  onPress={props.handleSubmit}
                />
                {Platform.OS == 'ios'
                  ? isVisible && (
                      <ReactNativeModal isVisible={isVisible}>
                        <View
                          style={{
                            width: '100%',
                            paddingVertical: 20,
                            borderRadius: 10,
                            backgroundColor: '#fff',
                            alignItems: 'center',
                          }}>
                          <DateTimePicker
                            testID="dateTimePicker"
                            textColor="#000"
                            value={date}
                            mode="date"
                            is24Hour={true}
                            display="spinner"
                            onChange={(event: any, selectedDate: any) => {
                              // props?.setFieldValue(`birthdate`, selectedDate);
                              setDate(selectedDate);
                              // setVisible(false);
                            }}
                          />
                          <Button
                            text="Choose"
                            onPress={() => setVisible(false)}
                            style={{width: '90%', marginTop: 20}}
                          />
                        </View>
                      </ReactNativeModal>
                    )
                  : isVisible && (
                      <DateTimePicker
                        mode="date"
                        value={date}
                        // display="spinner"
                        onChange={(event: any, selectedDate: any) => {
                          // props?.setFieldValue(`birthdate`, selectedDate);
                          setDate(selectedDate);
                          setVisible(false);
                        }}
                      />
                    )}
              </View>
            )}
          </Formik>
        </View>
        {/* <BottomModal
          ModalRef={ModalRef}
          data={buttonIndexHealth == 0 ? data : data1}
          setData={
            buttonIndexHealth == 0 ? setDisabilityData : setSpecialNeedsData
          }
        /> */}

        <View style={{height: 40}} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdateInfo;
