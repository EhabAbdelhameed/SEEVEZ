import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  Platform,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import {RenderSvgIcon} from '../../../../../../Components/atoms/svg';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../../../../theme/appColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../../../../../../Components/molecules/Button';
import Moment from 'moment';
import {BigLogo, CALANDER, PHOTO} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {Formik} from 'formik';
import InputView from 'components/molecules/Input';
import {appSizes} from 'theme/appSizes';
import DatePicker from 'react-native-date-picker';
import DocumentPicker from 'react-native-document-picker';
import Modal, {ReactNativeModal} from 'react-native-modal';
import {isDate} from 'lodash';
import DateTimePicker from '@react-native-community/datetimepicker';
import AppThunks from 'src/redux/app/thunks';
import {useAppDispatch} from 'src/redux/store';
import {useSelector} from 'react-redux';
import {selectDone} from 'src/redux/app';
import {Input} from 'react-native-elements';
import {launchImageLibrary} from 'react-native-image-picker';
// import RNDateTimePicker from '@react-native-community/datetimepicker';
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
const UpdateOneTraining = () => {
  const {data}: any = useRoute().params;
  console.log('Tranoing', data);
  const navigation = useNavigation();
  const [Source, setSource] = useState<any>('');
  const [loading, setLoading] = React.useState(false);
  const [isVisible, setVisible] = useState(false);
  const [type, setType] = useState('0');
  const dispatch = useAppDispatch();
  const changeDone = useSelector(selectDone);
  const [startDates, setStartDates] = useState(new Date(data?.start_date));
  const [endDates, setEndDates] = useState(new Date(data?.end_date));
  useEffect(() => {
    changeDone ? navigation.goBack() : null;
  }, [changeDone]);
  const openGallery = async (props: any) => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSource(result[0].name);
      props?.setFieldValue(`certificate_image`, {
        uri: result[0]?.uri,
        type: result[0]?.type,
        name: result[0]?.name,
      });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled document picker');
      } else {
        console.error('DocumentPicker Error:', err);
      }
    }
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
          <TouchableOpacity onPress={_handleNavigate} activeOpacity={0.8}>
            <RenderSvgIcon
              icon="ARROWBACK"
              width={30}
              height={30}
              color={appColors.primary}
            />
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
            <View style={{width: 32}}></View>
            <View style={[{alignItems: 'center'}]}>
              <Text style={[styles.loginText, {fontSize: 24}]}>
                Complete profile
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

          <Formik
            initialValues={{
              institute: data?.institute||'',
              field_of_study:data?.field_of_study|| '',
              grade:data?.grade|| '',
              start_date:data?.start_date|| new Date(),
              end_date:data?.end_date||new Date(),
              certificate_image: '',
            }}
            onSubmit={values => {
              setLoading(true);
              const formdata = new FormData();
              formdata.append(`id`, data?.id);
              formdata.append(`institute`, values.institute);
              formdata.append(`field_of_study`, values.field_of_study);

              formdata.append(`grade`, values.grade);

              formdata.append(`start_date`, values.start_date);
              formdata.append(`end_date`, values.end_date);

             Source!=''? formdata.append(`certificate_image`, values.certificate_image):null

              dispatch(AppThunks.doUpdateTrainingCourse(formdata)).then(
                (res: any) => {
                  setLoading(false);
                },
              );
              // navigation.navigate("ResetPassword")
            }}>
            {(props: any) => (
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '500',
                      color: '#000',
                      marginLeft: 8,
                      marginBottom: 10,
                      fontFamily: 'Noto Sans',
                    }}>
                    {`Training Courses`}
                  </Text>
                  <Input
                    {...props}
                    name={`institute`}
                    inputContainerStyle={{
                      borderRadius: 16,
                      borderColor: '#1D5EDD',
                      borderWidth: 1,
                      paddingHorizontal: 15,
                      height: Platform.OS == 'android' ? null : 50,
                    }}
                    value={props.values.institute}
                    onChangeText={e => props?.setFieldValue(`institute`, e)}
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
                    placeholder={`Institute`}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      // justifyContent: 'space-around',
                      columnGap: 15,
                    }}>
                    <TextInput
                      placeholder="Field of study"
                      style={styles.inputStyle}
                      onChangeText={e =>
                        props?.setFieldValue(`field_of_study`, e)
                      }
                      value={props.values.field_of_study}
                    />
                    <TextInput
                      placeholder="Grade"
                      style={styles.inputStyle}
                      onChangeText={e => props?.setFieldValue(`grade`, e)}
                      value={props.values.grade}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      // justifyContent: 'space-around',
                      marginTop: 10,
                      marginBottom: 20,
                      columnGap: 15,
                    }}>
                    <View style={{width: '48%'}}>
                      <Text
                        style={{
                          color: '#000',
                          fontSize: 16,
                          fontWeight: '400',
                          marginBottom: 10,
                          marginLeft: 10,
                          fontFamily: 'Noto Sans',
                        }}>
                        Start date
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          setVisible(true), setType('1');
                        }}>
                        <View style={styles.InputStyleNoWidth}>
                          <Text
                            style={{
                              marginRight: 20,
                              color: '#000',
                              fontSize: 14,
                              fontFamily: 'Noto Sans',
                            }}>
                            {Moment(startDates).format('DD/MM/yyyy')}
                          </Text>
                          <CALANDER />
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={{width: '48%'}}>
                      <Text
                        style={{
                          color: '#000',
                          fontSize: 16,
                          fontWeight: '400',
                          marginBottom: 10,
                          marginLeft: 10,
                          fontFamily: 'Noto Sans',
                        }}>
                        End date
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          setVisible(true), setType('2');
                        }}>
                        <View style={styles.InputStyleNoWidth}>
                          <Text
                            style={{
                              marginRight: 20,
                              color: '#000',
                              fontSize: 14,
                              fontFamily: 'Noto Sans',
                            }}>
                            {Moment(endDates).format('DD/MM/yyyy')}
                          </Text>
                          <CALANDER />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
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
                              value={
                                type === '1' && isDate(startDates)
                                  ? startDates
                                  : isDate(endDates)
                                  ? endDates
                                  : new Date() // Provide a default date if the specified date is invalid
                              }
                              mode="date"
                              is24Hour={true}
                              display="spinner"
                              onChange={(event: any, selectedDate: any) => {
                                if (selectedDate !== undefined) {
                                  if (type == '1') {
                                    setStartDates(selectedDate);

                                    props?.setFieldValue(
                                      `start_date`,
                                      Moment(selectedDate).format('yyyy/MM/DD'),
                                    );
                                  } else {
                                    setEndDates(selectedDate);

                                    props?.setFieldValue(
                                      `end_date`,
                                      Moment(selectedDate).format('yyyy/MM/DD'),
                                    );
                                  }
                                }
                                // setVisible(false);
                              }}
                              // style={styles.dateTimePicker} // Customize styles here
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
                          value={
                            type === '1' && isDate(startDates)
                              ? startDates
                              : isDate(endDates)
                              ? endDates
                              : new Date() // Provide a default date if the specified date is invalid
                          }
                          onChange={(event: any, selectedDate: any) => {
                            console.log(selectedDate);
                            if (selectedDate !== undefined) {
                              if (type == '1') {
                                setStartDates(selectedDate);

                                props?.setFieldValue(
                                  `start_date`,
                                  Moment(selectedDate).format('yyyy/MM/DD'),
                                );
                              } else {
                                setEndDates(selectedDate);

                                props?.setFieldValue(
                                  `end_date`,
                                  Moment(selectedDate).format('yyyy/MM/DD'),
                                );
                              }
                            }
                            console.log(startDates);
                            setVisible(false);
                          }}
                        />
                      )}

                  <TouchableOpacity
                    onPress={() => openGallery(props)}
                    style={styles.uploadContainer}>
                    <PHOTO style={{marginRight: 20}} />
                    <Text style={{fontSize: 20, color: appColors.primary}}>
                      {Source == '' ? 'Update certificate image' : Source}
                    </Text>
                  </TouchableOpacity>
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
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdateOneTraining;
