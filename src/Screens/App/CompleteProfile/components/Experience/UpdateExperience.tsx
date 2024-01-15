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

import {BigLogo, CALANDER, PHOTO} from 'assets/Svgs';
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
const UpdateExperience = () => {
  const [date, setDate] = useState(new Date());
  const [date1, setDate1] = useState(new Date());
  const [index, setIndex] = React.useState(false);
  const [isVisible, setVisible] = useState(false);
  const [type, setType] = useState('0');


  const handleDateChange = (event: any, selectedDate: any) => {
    // Handle date change logic here
    if (selectedDate !== undefined&&type=='1') {
      setDate(selectedDate);
    }else if(selectedDate !== undefined&&type=='2'){
      setDate1(selectedDate);

    }
    setVisible(false); // Close the DateTimePicker modal
  };
 

  // const navigation = useNavigation<any>();
  const navigation = useNavigation();

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
              <RenderSvgIcon icon="ICON2CV" width={32} height={48} />
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
                height={48}
                style={styles.yellowIcon}
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: '#000',
              marginLeft: 8,
              marginBottom: 10,
            }}>
            Experience
          </Text>
          <Formik
            initialValues={{Industry: '',YearsOfExperience:'',JobType:''}}
            onSubmit={values => {
              // navigation.navigate("ResetPassword")
            }}>
            {(props: any) => (
              <View>
                  <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom:10
                  }}>
                  <TextInput
                    placeholder="Job title"
                    style={{
                      borderRadius: 16,
                      borderColor: '#1D5EDD',
                      borderWidth: 1,
                      paddingHorizontal: 15,
                      paddingVertical: 4,
                      borderBottomWidth: 0.5,
                      height: 60,
                      width: '46%',
                    }}
                  />
                  <TextInput
                    placeholder="Company name"
                    style={{
                      borderRadius: 16,
                      borderColor: '#1D5EDD',
                      borderWidth: 1,
                      paddingHorizontal: 15,
                      paddingVertical: 4,
                      borderBottomWidth: 0.5,
                      height: 60,
                      width: '46%',
                    }}
                  />
                </View>
                <InputView
                  name="Industry"
                  placeholder="Industry"
                  // props={props}
                  {...props}
                />
                   <InputView
                  name="YearsOfExperience"
                  placeholder="Years of experience"
                  // props={props}
                  {...props}
                />
                   <InputView
                  name="JobType"
                  placeholder="Job type"
                  // props={props}
                  {...props}
                />
              
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    // marginTop: 20,
                    marginBottom: 20,
                  }}>
                  <View style={{width: '46%'}}>
                    <Text
                      style={{
                        color: '#000',
                        fontSize: 16,
                        fontWeight: '400',
                        marginBottom: 10,
                        marginLeft: 10,
                      }}>
                      Start date
                    </Text>
                    <TouchableOpacity onPress={() =>{ setVisible(true),setType('1')}}>
                      <View
                        style={{
                          borderRadius: 16,
                          borderColor: '#1D5EDD',
                          borderWidth: 1,
                          paddingHorizontal: 15,
                          paddingVertical: 4,
                          borderBottomWidth: 0.5,
                          height: 60,
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'row',
                        }}>
                        <Text
                          style={{
                            marginRight: 20,
                            color: '#DDD',
                            fontSize: 16,
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
                  <View style={{width: '46%'}}>
                    <Text
                      style={{
                        color: '#000',
                        fontSize: 16,
                        fontWeight: '400',
                        marginBottom: 10,
                        marginLeft: 10,
                      }}>
                      End date
                    </Text>
                    <TouchableOpacity onPress={() => {setVisible(true),setType('2')}}>
                      <View
                        style={{
                          borderRadius: 16,
                          borderColor: '#1D5EDD',
                          borderWidth: 1,
                          paddingHorizontal: 15,
                          paddingVertical: 4,
                          borderBottomWidth: 0.5,
                          height: 60,
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'row',
                        }}>
                        <Text
                          style={{
                            marginRight: 20,
                            color: '#DDD',
                            fontSize: 16,
                          }}>
                          {date1.getDate() +
                            '/' +
                            date1.getMonth() +
                            1 +
                            '/' +
                            date1.getFullYear()}
                        </Text>
                        <CALANDER />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.rowAgree}>
                  <TouchableOpacity
                    onPress={() => setIndex(!index)}
                    style={styles.Circle}>
                    <View style={index ? styles.innerCircle : null} />
                  </TouchableOpacity>
                  <Text style={styles.agree}>
                  I currently work there
                    
                   
                  </Text>
                </View>
                <View
                  style={{
                    borderRadius: 16,
                    borderColor: '#1D5EDD',
                    borderWidth: 1,
                    paddingHorizontal: 15,
                    paddingVertical: 4,
                    borderBottomWidth: 0.5,
                    marginBottom: 10,
                    marginTop: 5,
                    height: 54,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <PHOTO style={{marginRight: 20}} />
                  <Text style={{fontSize: 20, color: appColors.primary}}>
                  Upload experience Letter 
                  </Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
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
                      }}>
                      Add another course
                    </Text>
                  </View>
                </View>
                <Button text={'Done'} onPress={props.handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
        {isVisible && (
          <DateTimePicker
            mode="date"
            value={date}
            onChange={handleDateChange}
          />
        )}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdateExperience;
