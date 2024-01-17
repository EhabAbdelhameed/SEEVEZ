import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import React, {useCallback, useState} from 'react';
import styles from './styles';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import DonotHaveAccountSection from '../../../../../Components/molecules/DonotHaveAccountSection';
import AuthTopSection from '../../../../../Components/molecules/AuthTopSection';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../../../theme/appColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../../../../../Components/molecules/Button';

import {BigLogo, CALANDER, PHOTO, PERSON} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {Formik} from 'formik';
import InputView from 'components/molecules/Input';
import {appSizes} from 'theme/appSizes';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';

import DateTimePicker from '@react-native-community/datetimepicker';
// import RNDateTimePicker from '@react-native-community/datetimepicker';
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
const UpdateInfo = () => {
  const [date, setDate] = useState(new Date());
  const [date1, setDate1] = useState(new Date());
  const [index, setIndex] = React.useState(false);
  const [isVisible, setVisible] = useState(false);
  const [type, setType] = useState('0');
  const [buttonIndex, setButtonIndex] = React.useState(0);
  const [buttonIndexHealth, setButtonIndexHealth] = React.useState(0);
  const [buttonIndexSmoker, setButtonIndexSmoker] = React.useState(0);

  const handleDateChange = (event: any, selectedDate: any) => {
    // Handle date change logic here
    if (selectedDate !== undefined && type == '1') {
      setDate(selectedDate);
    } else if (selectedDate !== undefined && type == '2') {
      setDate1(selectedDate);
    }
    setVisible(false); // Close the DateTimePicker modal
  };

  // const navigation = useNavigation<any>();
  const navigation = useNavigation();
  const GenderData = ['Male', 'Female', 'Prefer not to say'];
  const HealthProfile = ['Disabilities', 'Special Needs'];
  const Smoker = ['Yes', 'No'];

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
          <BigLogo height={30} width={96} style={{marginLeft: 70}} />
        </View>
        <View style={styles.circles}>
          <RenderSvgIcon icon="CIRCLELOGIN" width={240} height={220} />
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.blueCircle}>
            <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
          </View>
          <View style={styles.loginTextContainer}>
            <View>
              <RenderSvgIcon icon="ICON2CV" width={32} height={49} />
            </View>
            <View style={[{alignItems: 'center'}]}>
              <Text style={[styles.loginText, {fontSize: 24}]}>
                Complete Profile
              </Text>
              <Text style={[styles.loginTextSub, {fontSize: 13}]}>
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
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 86,
                height: 86,
                borderRadius: 86,
                backgroundColor: appColors.bg,
              }}>
              <PERSON />
            </View>
          </View>

          <Formik
            initialValues={{
              UniversityName: '',
              YearsOfExperience: '',
              JobType: '',
            }}
            onSubmit={values => {
              // navigation.navigate("ResetPassword")
            }}>
            {(props: any) => (
              <View>
                <Text style={styles.labelStyle1}>Your full name</Text>
                <InputView
                  name="FullName"
                  placeholder="Enter your Full Name"
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
                <Text style={styles.labelStyle1}>Phone</Text>
                <InputView {...props} name="phone" placeholder="Your phone" />
                <Text style={styles.labelStyle1}>External links</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                    columnGap:15
                  }}>
                  <TextInput placeholder="Facebook" style={styles.InputStyle} />
                  <TextInput placeholder="Linkedin" style={styles.InputStyle} />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                    columnGap:15
                  }}>
                  <TextInput
                    placeholder="Instagram"
                    style={styles.InputStyle}
                  />
                  <TextInput placeholder="Website" style={styles.InputStyle} />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                    columnGap:15
                  }}>
                  <TextInput placeholder="Github" style={styles.InputStyle} />
                  <TextInput placeholder="Others" style={styles.InputStyle} />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                    columnGap:15
                  }}>
                  <View style={{width: '49%'}}>
                    <Text style={styles.labelStyle}>Current salary</Text>
                    <TextInput
                      placeholder="Write here.."
                      style={styles.InputStyleWithOutWidth}
                    />
                  </View>
                  <View style={{width: '49%'}}>
                    <Text style={styles.labelStyle}>Expected Salary</Text>
                    <TextInput
                      placeholder="Write here.."
                      style={styles.InputStyleWithOutWidth}
                    />
                  </View>
                </View>
                <View style={styles.rowAgree}>
                  <TouchableOpacity
                    onPress={() => setIndex(!index)}
                    style={styles.Circle}>
                    <View style={index ? styles.innerCircle : null} />
                  </TouchableOpacity>
                  <Text style={styles.agree}>Don’t show my salary</Text>
                </View>
                <Text style={styles.labelStyle}>Gender</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                  }}>
                  {GenderData?.map((item, index) => (
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          setButtonIndex(index);
                        }}>
                        <View style={styles.Circle}>
                          {buttonIndex == index ? (
                            <View style={styles?.innerCircle} />
                          ) : null}
                        </View>
                      </TouchableOpacity>
                      <Text style={{color: '#000', marginLeft: 5}}>{item}</Text>
                    </View>
                  ))}
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 20,
                    marginBottom: 20,
                    columnGap:15
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
                           fontFamily: 'Noto Sans'
                          }}>
                          {date.getDate() +
                            '/' +
                            date.getMonth() +
                            1 +
                            '/' +
                            date.getFullYear()}
                        </Text>
                        <CALANDER />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{width: '49%'}}>
                    <Text
                     style={styles.labelStyle}>
                      Nationality
                    </Text>
                    <TextInput
                      placeholder="Write here.."
                      style={styles.InputStyleWithOutWidth}
                    />
                  </View>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10,columnGap:15}}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 36,
                      height: 36,
                      borderRadius: 36,
                      backgroundColor: appColors.bg,
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
                        marginLeft: 15,
                        color: '#000',
                        fontFamily: 'Noto Sans'
                      }}>
                      Add another Nationality
                    </Text>
                  </View>
                </View>
                <Text
                  style={styles.labelStyle}>
                  Health profile
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    marginBottom: 20,
                    columnGap:15
                  }}>
                  {HealthProfile?.map((item, index) => (
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          setButtonIndexHealth(index);
                        }}>
                        <View style={styles.Circle}>
                          {buttonIndexHealth == index ? (
                            <View style={styles?.innerCircle} />
                          ) : null}
                        </View>
                      </TouchableOpacity>
                      <Text style={{color: '#000', marginLeft: 5}}>{item}</Text>
                    </View>
                  ))}
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                    columnGap:15
                  }}>
                  <View style={{width: '49%'}}>
                    <Text
                      style={styles.labelStyle}>
                      Height
                    </Text>
                    <TextInput
                      placeholder="Write here.."
                      style={styles.InputStyleWithOutWidth}
                    />
                  </View>
                  <View style={{width: '49%'}}>
                    <Text
                      style={styles.labelStyle}>
                      Weight
                    </Text>
                    <TextInput
                      placeholder="Write here.."
                      style={styles.InputStyleWithOutWidth}
                    />
                  </View>
                </View>
                <Text
                  style={styles.labelStyle}>
                  Smoker
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    marginBottom: 20,
                    columnGap:15
                  }}>
                  {Smoker?.map((item, index) => (
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          setButtonIndexSmoker(index);
                        }}>
                        <View style={styles.Circle}>
                          {buttonIndexSmoker == index ? (
                            <View style={styles?.innerCircle} />
                          ) : null}
                        </View>
                      </TouchableOpacity>
                      <Text style={{color: '#000', marginLeft: 5,fontFamily: 'Noto Sans'}}>{item}</Text>
                    </View>
                  ))}
                </View>
                <Button text={'Done'} onPress={props.handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdateInfo;
