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
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import DonotHaveAccountSection from '../../../../../Components/molecules/DonotHaveAccountSection';
import AuthTopSection from '../../../../../Components/molecules/AuthTopSection';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../../../theme/appColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../../../../../Components/molecules/Button';
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
// import RNDateTimePicker from '@react-native-community/datetimepicker';
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
const UpdateTraining = () => {
  const [Source, setSource] = useState<Array<any>>([]);
  const [studyField, setStudyField] = useState<any>('');
  const [grade, setGrade] = useState<any>('');
  const [loading, setLoading] = React.useState(false);

  const [isVisible, setVisible] = useState(false);
  const [type, setType] = useState('0');
  const dispatch = useAppDispatch();
  const [TrainingCourse, setTrainingCourse] = useState<any>([1]);
  const changeDone = useSelector(selectDone);
  const [startDates, setStartDates] = useState<Array<Date>>([new Date()]);
  const [endDates, setEndDates] = useState<Array<Date>>([new Date()]);
  const [selectedDateIndex, setSelectedDateIndex] = useState<number>(0);
  // console.log(changeDone)
  useEffect(() => {
    changeDone ? navigation.goBack() : null;
  }, [changeDone]);
  const openGallery = async (props: any, index: any) => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      // The selected media is available in the result.uri
      // dispatch(setImageURL(result[0].uri));
      setSource([
        ...Source.slice(0, index),
        result[0].name,
        ...Source.slice(index + 1),
      ]);
      props?.setFieldValue(`TrainingCourse[${index}]["certificate_image"]`, {
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
            source={require('../../../../../assets/images/seevezlogo.png')}
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

          <Formik
            initialValues={{
              TrainingCourse: [
                {
                  institute: '',
                  field_of_study: '',
                  grade: '',
                  start_date: '',
                  end_date: '',
                  certificate_image: '',
                },
              ],
            }}
            onSubmit={values => {
              setLoading(true);
              const formdata = new FormData();
              values.TrainingCourse.map((item: any, index: any) => {
                formdata.append(`array[${index}][institute]`, item.institute);
                formdata.append(
                  `array[${index}][field_of_study]`,
                  item.field_of_study,
                );

                formdata.append(`array[${index}][grade]`, item.grade);

                formdata.append(`array[${index}][start_date]`, item.start_date);
                formdata.append(`array[${index}][end_date]`, item.end_date);

                formdata.append(
                  `array[${index}][certificate_image]`,
                  item.certificate_image,
                );
              });

              dispatch(AppThunks.doAddTrainingCourse(formdata)).then(
                (res: any) => {
                  setLoading(false);
                },
              );
              // navigation.navigate("ResetPassword")
            }}>
            {(props: any) => (
              <View>
                {TrainingCourse.map((tc: any, index: any) => (
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
                      name={`TrainingCourse[${index}][institute]`}
                      inputContainerStyle={{
                        borderRadius: 16,
                        borderColor: '#1D5EDD',
                        borderWidth: 1,
                        paddingHorizontal: 15,
                      }}
                      onChangeText={e =>
                        props?.setFieldValue(
                          `TrainingCourse[${index}]["institute"]`,
                          e,
                        )
                      }
                      placeholderTextColor={'#B9B9B9'}
                      containerStyle={{
                        paddingHorizontal: 0,
                        marginVertical: 1,
                        height: 60,
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
                          props?.setFieldValue(
                            `TrainingCourse[${index}]["field_of_study"]`,
                            e,
                          )
                        }
                      />
                      <TextInput
                        placeholder="Grade"
                        style={styles.inputStyle}
                        onChangeText={e =>
                          props?.setFieldValue(
                            `TrainingCourse[${index}]["grade"]`,
                            e,
                          )
                        }
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
                                color: '#DDD',
                                fontSize: 16,
                                fontFamily: 'Noto Sans',
                              }}>
                              {Moment(startDates[index]).format('DD/MM/yyyy')}
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
                                color: '#DDD',
                                fontSize: 16,
                                fontFamily: 'Noto Sans',
                              }}>
                              {Moment(endDates[index]).format('DD/MM/yyyy')}
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
                                value={
                                  type === '1' && isDate(startDates[index])
                                    ? startDates[index]
                                    : isDate(endDates[index])
                                    ? endDates[index]
                                    : new Date() // Provide a default date if the specified date is invalid
                                }
                                mode="date"
                                is24Hour={true}
                                display="spinner"
                                onChange={(event: any, selectedDate: any) => {
                                  if (selectedDate !== undefined) {
                                    if (type == '1') {
                                      if (index == 0) {
                                        setStartDates([
                                          ...startDates.slice(0, index),
                                          selectedDate,
                                          ...startDates.slice(index + 1),
                                        ]);
                                      } else {
                                        let array = startDates;
                                        array.push(selectedDate);
                                        setStartDates(array);
                                      }
                                      props?.setFieldValue(
                                        `TrainingCourse[${index}]["start_date"]`,
                                        Moment(selectedDate).format(
                                          'yyyy/MM/DD',
                                        ),
                                      );
                                    } else {
                                      if (index == 0) {
                                        setEndDates([
                                          ...endDates.slice(0, index),
                                          selectedDate,
                                          ...endDates.slice(index + 1),
                                        ]);
                                      } else {
                                        let array = endDates;
                                        array.push(selectedDate);
                                        setEndDates(array);
                                      }
                                      props?.setFieldValue(
                                        `TrainingCourse[${index}]["end_date"]`,
                                        Moment(selectedDate).format(
                                          'yyyy/MM/DD',
                                        ),
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
                              type === '1' && isDate(startDates[index])
                                ? startDates[index]
                                : isDate(endDates[index])
                                ? endDates[index]
                                : new Date() // Provide a default date if the specified date is invalid
                            }
                            onChange={(event: any, selectedDate: any) => {
                              console.log(selectedDate);
                              if (selectedDate !== undefined) {
                                console.log('Index: ', index);
                                if (type == '1') {
                                  // updatedStartDates[index] = selectedDate;
                                  // setStartDates(updatedStartDates);
                                  if (index == 0) {
                                    setStartDates([
                                      ...startDates.slice(0, index),
                                      selectedDate,
                                      ...startDates.slice(index + 1),
                                    ]);
                                  } else {
                                    let array = startDates;
                                    array.push(selectedDate);
                                    setStartDates(array);
                                  }

                                  props?.setFieldValue(
                                    `TrainingCourse[${index}]["start_date"]`,
                                    Moment(selectedDate).format('yyyy/MM/DD'),
                                  );
                                } else {
                                  if (index == 0) {
                                    setEndDates([
                                      ...endDates.slice(0, index),
                                      selectedDate,
                                      ...endDates.slice(index + 1),
                                    ]);
                                  } else {
                                    let array = endDates;
                                    array.push(selectedDate);
                                    setEndDates(array);
                                  }

                                  props?.setFieldValue(
                                    `TrainingCourse[${index}]["end_date"]`,
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
                      onPress={() => openGallery(props, index)}
                      style={styles.uploadContainer}>
                      <PHOTO style={{marginRight: 20}} />
                      <Text style={{fontSize: 20, color: appColors.primary}}>
                        {Source[index] == null
                          ? 'Upload certificate image'
                          : Source[index]}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
                <TouchableOpacity
                  onPress={() => {
                    setTrainingCourse((prev: any) => {
                      return [...prev, 1];
                    });
                  }}
                  style={{flexDirection: 'row', marginBottom: 20}}>
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
                </TouchableOpacity>
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

export default UpdateTraining;
