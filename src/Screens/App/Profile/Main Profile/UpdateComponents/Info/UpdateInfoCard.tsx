import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Moment from 'moment';
import styles from './styles';
import {RenderSvgIcon} from '../../../../../../Components/atoms/svg';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../../../../theme/appColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../../../../../../Components/molecules/Button';

import {BigLogo, CALANDER, PHOTO, PERSON, ImageInfo} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {Formik} from 'formik';
import InputView from 'components/molecules/Input';
import {appSizes} from 'theme/appSizes';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';
import DocumentPicker from 'react-native-document-picker';

import DateTimePicker from '@react-native-community/datetimepicker';
import BottomModal from './BottomModal';
import {Modalize} from 'react-native-modalize';
import AppThunks from 'src/redux/app/thunks';
import {useAppDispatch} from 'src/redux/store';
import {useSelector} from 'react-redux';
import {selectDone} from 'src/redux/app';
import {selectUser} from 'src/redux/auth';
// import RNDateTimePicker from '@react-native-community/datetimepicker';
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
const UpdateInfoCard = () => {
    const CurrentUserData = useSelector(selectUser);
  const [date, setDate] = useState(CurrentUserData?.birthdate);
  const dispatch = useAppDispatch();
  const [index, setIndex] = React.useState(false);
  const [isVisible, setVisible] = useState(false);
  const [type, setType] = useState('0');
  const [buttonIndex, setButtonIndex] = React.useState(CurrentUserData?.gender=='male'?0:CurrentUserData?.gender=='female'?1:2);
  const [buttonIndexHealth, setButtonIndexHealth] = React.useState(0);
  const [buttonIndexSmoker, setButtonIndexSmoker] = React.useState(0);
  const [isShowSalary, setIsShowSalary] = useState(false);
  const changeDone = useSelector(selectDone);
  // console.log(changeDone)
  useEffect(() => {
    changeDone ? navigation.goBack() : null;
  }, [changeDone]);
  const handleDateChange = (event: any, selectedDate: any) => {
    // Handle date change logic here

    setDate(selectedDate);

    setVisible(false); // Close the DateTimePicker modal
  };
  const [disabilityData, setDisabilityData] = useState('');
  const [specialNeedsData, setSpecialNeedsData] = useState('');
  const [city, setCity] = useState(CurrentUserData?.city);
  const [area, setArea] = useState(CurrentUserData?.area);
  const [facebook, setFacebook] = useState(CurrentUserData?.facebook);
  const [linkedin, setLinkedin] = useState(CurrentUserData?.linkedin);
  const [instagram, setInstagram] = useState(CurrentUserData?.instagram);
  const [website, setWebsite] = useState(CurrentUserData?.website);
  const [github, setGithub] = useState(CurrentUserData?.github);
  const [others, setOthers] = useState(CurrentUserData?.other);
  const [currentSalary, setCurrentSalary] = useState(CurrentUserData?.current_salary);
  const [expectedSalary, setExpectedSalary] = useState(CurrentUserData?.expected_salary);
  // const [Nationality, setNationality] = useState('');
  const [gender, setGender] = useState(CurrentUserData?.gender);
  const [heights, setHeights] = useState(CurrentUserData?.height);
  const [weight, setWeight] = useState(CurrentUserData?.weight);
  const [smoker, setSmoker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState<any>([]);
  const [Nationality, setNationality] = useState<any>(CurrentUserData?.user_data?.nationality);
 console.log("11111 ",CurrentUserData)
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
  // useEffect(() => {
  //   changeDone ? navigation.goBack() : null;
  // }, [changeDone]);

  // const navigation = useNavigation<any>();
  const navigation = useNavigation();
  const GenderData = ['Male', 'Female', 'Prefer not to say'];
  const HealthProfile = ['Disabilities', 'Special Needs'];
  const Smoker = ['Yes', 'No'];
  const ModalRef = useRef<Modalize>(null);
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
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          backgroundColor: appColors.bg,
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <TouchableOpacity
            style={styles.skipContainer}
            onPress={_handleNavigate}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          {/* <BigLogo height={30} width={96} style={{marginLeft: 70}} />
           */}
          <Image
            source={require('../../../../../../assets/images/seevezlogo.png')}
            style={{width: 100, height: 30}}
          />
        </View>
        <View style={styles.circles}>
          <RenderSvgIcon icon="CIRCLELOGIN" width={220} height={160} />
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.blueCircle}>
            <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
          </View>
          <View style={styles.loginTextContainer}>
            <View>
              <View style={{width: 32}} />
              {/* <RenderSvgIcon icon="ICON2CV" width={32} height={49} /> */}
            </View>
            <View style={[{alignItems: 'center'}]}>
              <Text style={styles.loginText}>Complete profile</Text>
              <Text style={styles.loginTextSub}>
                Finish setting up your profile to get noticed by recruiters
              </Text>
            </View>
            <View>
              <RenderSvgIcon
                icon="ICONCV"
                width={40}
                height={49}
                style={styles.yellowIcon}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={UploadImageProfile}
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
              {/* {CurrentUserData?.avatar==null} */}
              {CurrentUserData?.avatar != null ? (
                <Image
                  source={{uri: CurrentUserData?.avatar}}
                  style={{width: 86, height: 86, borderRadius: 86}}
                  resizeMode="cover"
                />
              ) : source.length != 0 ? (
                <Image
                  source={{uri: source[0].uri}}
                  style={{width: 86, height: 86, borderRadius: 86}}
                  resizeMode="cover"
                />
              ) : (
                <PERSON />
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
              FullName: '',
              JobTitle: '',
              Location: '',
              phone: '',
              code: '',
            }}
            onSubmit={values => {
              setLoading(true);

              const formdata = new FormData();

              values.FullName != ''
                ? formdata.append('name', values.FullName)
                : null;
              formdata.append('country_code', '+20');

              values.JobTitle != ''
                ? formdata.append('job_title', values.JobTitle)
                : null;
              formdata.append('phone_number', values.phone);
              currentSalary != ''
                ? formdata.append('current_salary', currentSalary)
                : null;
              expectedSalary != ''
                ? formdata.append('expected_salary', expectedSalary)
                : null;
              formdata.append('show_salary', isShowSalary == false ? 0 : 1);
              gender != '' ? formdata.append('gender', gender) : null;
              formdata.append('birthdate', Moment(date).format('yyyy/MM/DD'));

              disabilityData != ''
                ? formdata.append('disabilities', disabilityData)
                : null;
              specialNeedsData != ''
                ? formdata.append('special_needs', specialNeedsData)
                : null;
              heights != '' ? formdata.append('height', heights) : null;
              formdata.append('smoker', smoker == false ? 0 : 1);
              weight != '' ? formdata.append('weight', weight) : null;
              others != '' ? formdata.append('other', others) : null;
              github != '' ? formdata.append('github', github) : null;
              website != '' ? formdata.append('website', website) : null;
              facebook != '' ? formdata.append('facebook', facebook) : null;
              linkedin != '' ? formdata.append('linkedin', linkedin) : null;
              instagram != '' ? formdata.append('instagram', instagram) : null;

              for (var i = 0; i < Nationality.length; i++) {
                formdata.append(`array[${i}][nationality]`, Nationality[i]);
              }

              values.Location != ''
                ? formdata.append('country', values.Location)
                : null;
              city != '' ? formdata.append('city', city) : null;
              area != '' ? formdata.append('area', area) : null;

              formdata.append('avatar', {
                uri: source[0]?.uri,
                type: source[0]?.type,
                name: source[0]?.name,
              });
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
                <Text style={styles.labelStyle1}>Full name</Text>
                <InputView
                  name="FullName"
                  placeholder="Enter your Full Name"
                  value={CurrentUserData?.name}
                  
                  // props={props}
                  {...props}
                />
                <Text style={styles.labelStyle1}>Job title</Text>
                <InputView
                  name="JobTitle"
                  placeholder="Job title"
                  // props={props}
                  {...props}
                />
                <Text style={styles.labelStyle1}>Location</Text>
                <InputView
                  name="Location"
                  placeholder="Your country"
                  // props={props}
                  {...props}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                    columnGap: 15,
                  }}>
                  <View style={{width: '49%'}}>
                    <TextInput
                      placeholder="Your city"
                      placeholderTextColor={'#B9B9B9'}
                      value={city}
                      style={styles.InputStyleWithOutWidth}
                      onChangeText={e => setCity(e)}
                    />
                  </View>
                  <View style={{width: '49%'}}>
                    <TextInput
                      placeholder="Your area"
                      value={area}
                      placeholderTextColor={'#B9B9B9'}
                      style={styles.InputStyleWithOutWidth}
                      onChangeText={e => setArea(e)}
                    />
                  </View>
                </View>
                <Text style={styles.labelStyle1}>Phone</Text>
                <InputView {...props} name="phone" placeholder="Your phone" />
                <Text style={styles.labelStyle1}>External links</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                    columnGap: 15,
                  }}>
                  <TextInput
                    placeholder="Facebook"
                    placeholderTextColor={'#B9B9B9'}
                    style={styles.InputStyle}
                    value={facebook}
                    onChangeText={e => setFacebook(e)}
                  />
                  <TextInput
                    placeholder="Linkedin"
                    placeholderTextColor={'#B9B9B9'}
                    style={styles.InputStyle}
                    value={linkedin}
                    onChangeText={e => setLinkedin(e)}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                    columnGap: 15,
                  }}>
                  <TextInput
                    placeholder="Instagram"
                    style={styles.InputStyle}
                    placeholderTextColor={'#B9B9B9'}
                    value={instagram}
                    onChangeText={e => setInstagram(e)}
                  />
                  <TextInput
                    placeholder="Website"
                    placeholderTextColor={'#B9B9B9'}
                    style={styles.InputStyle}
                    value={website}
                    onChangeText={e => setWebsite(e)}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                    columnGap: 15,
                  }}>
                  <TextInput
                    placeholder="Github"
                    placeholderTextColor={'#B9B9B9'}
                    style={styles.InputStyle}
                    value={github}
                    onChangeText={e => setGithub(e)}
                  />
                  <TextInput
                    placeholder="Others"
                    placeholderTextColor={'#B9B9B9'}
                    style={styles.InputStyle}
                    value={others}
                    onChangeText={e => setOthers(e)}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                    columnGap: 15,
                  }}>
                  <View style={{width: '49%'}}>
                    <Text style={styles.labelStyle}>Current salary</Text>
                    <TextInput
                      placeholder="Write here.."
                      placeholderTextColor={'#B9B9B9'}
                      value={currentSalary}
                      style={styles.InputStyleWithOutWidth}
                      onChangeText={e => setCurrentSalary(e)}
                    />
                  </View>
                  <View style={{width: '49%'}}>
                    <Text style={styles.labelStyle}>Expected Salary</Text>
                    <TextInput
                      placeholder="Write here.."
                      style={styles.InputStyleWithOutWidth}
                      placeholderTextColor={'#B9B9B9'}
                      value={expectedSalary}
                      onChangeText={e => setExpectedSalary(e)}
                    />
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    setIndex(!index), setIsShowSalary(!isShowSalary);
                  }}
                  style={styles.rowAgree}>
                  <View style={styles.Circle}>
                    <View style={index ? styles.innerCircle : null} />
                  </View>
                  <Text style={styles.agree}>Don’t show my salary</Text>
                </TouchableOpacity>
                <Text style={styles.labelStyle}>Gender</Text>
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
                          setButtonIndex(index), setGender(GenderData[index]);
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
                          {item}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 20,
                    marginBottom: 20,
                    columnGap: 15,
                  }}>
                  <View style={{width: '49%'}}>
                    <Text style={styles.labelStyle}>Birthdate</Text>
                    <TouchableOpacity
                      onPress={() => {
                        setVisible(true), setType('1');
                      }}>
                      <View style={styles.dateStyle}>
                        <Text
                          style={{
                            marginRight: 20,
                            color: '#DDD',
                            fontSize: 16,
                            fontFamily: 'Noto Sans',
                          }}>
                          {Moment(date).format('DD/MM/yyyy')}
                        </Text>
                        <CALANDER />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{width: '49%'}}>
                    {Nationality.map((na: any, index: any) => (
                      <View key={index}>
                        <Text
                          style={[
                            styles.labelStyle,
                            {marginTop: index >= 1 ? 10 : 0},
                          ]}>{`Nationality`}</Text>
                        <TextInput
                          placeholder={`Enter your Nationality`}
                          placeholderTextColor={'#B9B9B9'}
                          value={Nationality[index].name}
                          style={styles.InputStyleWithOutWidth}
                          onChangeText={e => {
                            let data = [...Nationality];

                            data[index] = e;
                            setNationality(data);
                          }}
                        />
{/* 
                        {index > 0 && (
                          <TouchableOpacity
                            onPress={() => removeNationalty(index)}>
                            <Text>Remove Nationality</Text>
                          </TouchableOpacity>
                        )} */}
                      </View>
                    ))}
                  </View>
                </View>
                <TouchableOpacity
                  onPress={addNationalty}
                  style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                    columnGap: 15,
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 36,
                      height: 36,
                      borderRadius: 36,
                      backgroundColor: 'rgba(185,205,244,.7)',
                    }}>
                    <RenderSvgIcon
                      icon="PLUSFOLLOW"
                      width={16}
                      height={16}
                      color={appColors.primary}
                    />
                  </View>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: '500',

                        color: '#000',
                        fontFamily: 'Noto Sans',
                      }}>
                      Add another Nationality
                    </Text>
                  </View>
                </TouchableOpacity>
                <Text style={styles.labelStyle}>Health profile</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    // justifyContent: 'space-between',
                    marginBottom: 20,
                    columnGap: 25,
                  }}>
                  {HealthProfile?.map((item, index) => (
                    <TouchableOpacity
                      onPress={() => {
                        setButtonIndexHealth(index), ModalRef.current?.open();
                      }}
                      style={{
                        flexDirection: 'row',
                      }}>
                      <View style={styles.Circle}>
                        {buttonIndexHealth == index ? (
                          <View style={styles?.innerCircle} />
                        ) : null}
                      </View>

                      <Text style={{color: '#000', marginLeft: 5}}>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                    columnGap: 15,
                  }}>
                  <View style={{width: '49%'}}>
                    <Text style={styles.labelStyle}>Height</Text>
                    <TextInput
                      placeholder="Write here.."
                      placeholderTextColor={'#B9B9B9'}
                      style={styles.InputStyleWithOutWidth}
                      value={heights}
                      onChangeText={e => setHeights(e)}
                    />
                  </View>
                  <View style={{width: '49%'}}>
                    <Text style={styles.labelStyle}>Weight</Text>
                    <TextInput
                      placeholder="Write here.."
                      placeholderTextColor={'#B9B9B9'}
                      style={styles.InputStyleWithOutWidth}
                      value={weight}
                      onChangeText={e => setWeight(e)}
                    />
                  </View>
                </View>
                <Text style={styles.labelStyle}>Smoker</Text>
                <View   
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    // justifyContent: 'space-around',
                    marginBottom: 20,
                    columnGap: 25,
                  }}>
                  {Smoker?.map((item, index) => (
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={() => {
                        setButtonIndexSmoker(index), setSmoker(!smoker);
                      }}>
                      <View style={styles.Circle}>
                        {buttonIndexSmoker == index ? (
                          <View style={styles?.innerCircle} />
                        ) : null}
                      </View>

                      <Text
                        style={{
                          color: '#000',
                          marginLeft: 8,
                          fontFamily: 'Noto Sans',
                        }}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <Button
                  loading={loading}
                  text={'Done'}
                  onPress={props.handleSubmit}
                />
              </View>
            )}
          </Formik>
        </View>
        {isVisible && (
          <DateTimePicker
            mode="date"
            value={date}
            display="spinner"
            onChange={handleDateChange}
          />
        )}
        <BottomModal
          ModalRef={ModalRef}
          data={buttonIndexHealth == 0 ? data : data1}
          setData={
            buttonIndexHealth == 0 ? setDisabilityData : setSpecialNeedsData
          }
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdateInfoCard;
