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
import { launchImageLibrary } from 'react-native-image-picker';
import TopHeader from '../Header/TopHeader';
import BottomHeader from '../Header/BottomHeader';
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
      setSource((prevSource) => {
        const updatedSource = [...prevSource];
        updatedSource[index] =result[0].name;
        return updatedSource;
      });
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
  const pick = (props: any, index: any) => {
    launchImageLibrary({quality: 0.5, mediaType: 'photo'}).then((res: any) => {
      setSource((prevSource) => {
        const updatedSource = [...prevSource];
        updatedSource[index] =res?.assets[0]?.fileName;
        return updatedSource;
      });

      props?.setFieldValue(`TrainingCourse[${index}]["certificate_image"]`, {
        uri: res?.assets[0]?.uri,
        type: res?.assets[0]?.type,
        name: res?.assets[0]?.fileName,
      });
     
      // console.log("sdasdas "+JSON.stringify(res))
    });
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
          <TopHeader />
        <View style={styles.bottomSection}>
          <BottomHeader />

          <Formik
            initialValues={{
              TrainingCourse: [
                {
                  institute: '',
                  field_of_study: '',
                  grade: '',
                  start_date: '',
                  end_date:'',
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
                 console.log("Dates: ",item.start_date,item.end_date)
                formdata.append(`array[${index}][start_date]`,item.start_date==''||!item.start_date? Moment(new Date()).format('yyyy/MM/DD'):item.start_date);
                formdata.append(`array[${index}][end_date]`,item.end_date==''||!item.end_date? Moment(new Date()).format('yyyy/MM/DD'):item.end_date);

                item.certificate_image==''||!item.certificate_image?null:formdata.append(
                  `array[${index}][certificate_image]`,
                  item.certificate_image,
                );
              });
              console.log("Training Form Data ",formdata)

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
                      {`Training courses`}
                    </Text>
                    <Input
                      {...props}
                      name={`TrainingCourse[${index}][institute]`}
                      inputContainerStyle={{
                        borderRadius: 16,
                        borderColor: '#1D5EDD',
                        borderWidth: 1,
                        paddingHorizontal: 15,
                        height:Platform.OS=='android'?null:50
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
                        height: 50,
                        marginBottom:15
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
                        justifyContent: 'space-between',
                        alignItems:'center',
                        marginBottom: 10,
                        // backgroundColor:'red'
                        // width:'100%',
                        // columnGap: 15,
                      }}>
                        <View style={{width:'48%'}}>
                      <Input
                        {...props}
                        name={`TrainingCourse[${index}]["field_of_study"]`}
                        placeholderTextColor={'#B9B9B9'}
                        inputContainerStyle={{
                          borderRadius: 16,
                          borderColor: '#1D5EDD',
                          borderWidth: 1,
                          paddingHorizontal: 15,
                          paddingVertical: 4,

                          height: Platform.OS == 'ios' ? 50 : null,
                          // marginBottom:5
                        }}
                        onChangeText={e =>
                          props?.setFieldValue(
                            `TrainingCourse[${index}]["field_of_study"]`,
                            e,
                          )
                        }
                        containerStyle={{
                          paddingHorizontal: 0,
                          height: 50,
                          marginVertical: 2,
                        }}
                        inputStyle={{
                          fontSize: 14,
                          //  color: 'red'
                        }}
                        placeholder={`Field of study`}
                      />
                      </View>
                      <View style={{width:'48%'}}>
                      <Input
                        {...props}
                        name={`TrainingCourse[${index}]["grade"]`}
                        placeholderTextColor={'#B9B9B9'}
                        inputContainerStyle={{
                          borderRadius: 16,
                          borderColor: '#1D5EDD',
                          borderWidth: 1,
                          paddingHorizontal: 15,
                          paddingVertical: 4,

                          
                          height: Platform.OS == 'ios' ? 50 : null,
                          // marginBottom:5
                        }}
                        onChangeText={e =>
                          props?.setFieldValue(
                            `TrainingCourse[${index}]["grade"]`,
                            e,
                          )
                        }
                        containerStyle={{
                          paddingHorizontal: 0,
                          height: 50,
                          // marginVertical: 2,
                        }}
                        inputStyle={{
                          fontSize: 14,
                          //  color: 'red'
                        }}
                        placeholder={`Grade`}
                      />
                      </View>
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
                                textColor='#000'
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
                      onPress={() =>openGallery(props, index)}
                      style={styles.uploadContainer}>
                      <PHOTO style={{marginRight: 20}} />
                      <Text numberOfLines={1} style={{fontSize: 20, color: appColors.primary}}>
                        {Source[index] == null
                          ? 'Upload certificate image'
                          :  `${Source[index].slice(0,20)}...`}
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
