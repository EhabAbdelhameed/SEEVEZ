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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {BigLogo, CALANDER, PHOTO} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {Formik} from 'formik';
import InputView from 'components/molecules/Input';
import {appSizes} from 'theme/appSizes';
import {Dropdown} from 'react-native-element-dropdown';

import DateTimePicker from '@react-native-community/datetimepicker';
import DocumentPicker from 'react-native-document-picker';

import AppThunks from 'src/redux/app/thunks';
import {useAppDispatch} from 'src/redux/store';
import {useSelector} from 'react-redux';
import {selectDone, selectEducation} from 'src/redux/app';
import axios from 'axios';
import {selectUser} from 'src/redux/auth';
import {Input} from 'react-native-elements';
import {isDate} from 'lodash';
import ReactNativeModal from 'react-native-modal';
import TopHeader from '../Header/TopHeader';
import BottomHeader from '../Header/BottomHeader';
import CustomInput from 'components/molecules/Input/CustomInput';

// import RNDateTimePicker from '@react-native-community/datetimepicker';
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
const UpdateEducation = () => {
  const [startDates, setStartDates] = useState<Array<Date>>([new Date()]);
  const [endDates, setEndDates] = useState<Array<Date>>([new Date()]);

  const [isVisible, setVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [type, setType] = useState('0');
  const [indexToUpdateStart, setIndexToUpdateStart] = useState(0);
  const [indexToUpdateEnd, setIndexToUpdateEnd] = useState(0);

  const [value, setValue] = useState(null);
  const [Source, setSource] = useState<Array<any>>([]);
  const [loading, setLoading] = React.useState(false);

  const dispatch = useAppDispatch();
  const [Education, setEducation] = useState<any>([1]);
  const [Educations, setEducations] = useState<any>([
    {
      university_name: '',
      level_id: '',
      field_of_study: '',
      grade: '',
      start_date: new Date(),
      end_date: new Date(),
      degree_certificate: '',
    },
  ]);

  const changeDone = useSelector(selectDone);
  // const UserData = useSelector(selectUser);
  const EducationLevelData = useSelector(selectEducation);
  // console.log(changeDone)
  useEffect(() => {
    changeDone ? navigation.goBack() : null;
  }, [changeDone]);
  useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      dispatch(AppThunks.GetEducationLevel());
      // console.log(EducationLevelData)
    });
    return RenderFunction;
  }, []);

  const openGallery = async (props: any, index: any) => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });

      // The selected media is available in the result.uri
      // dispatch(setImageURL(result[0].uri));

      setSource(prevSource => {
        const updatedSource = [...prevSource];
        updatedSource[index] = result[0].name;
        return updatedSource;
      });

      props?.setFieldValue(`Education[${index}]["degree_certificate"]`, {
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
  const pick = (props: any, index: any) => {
    launchImageLibrary({quality: 0.5, mediaType: 'photo'}).then((res: any) => {
      setSource(prevSource => {
        const updatedSource = [...prevSource];
        updatedSource[index] = res?.assets[0]?.fileName;
        return updatedSource;
      });
      props?.setFieldValue(`Education[${index}]["degree_certificate"]`, {
        uri: res?.assets[0]?.uri,
        type: res?.assets[0]?.type,
        name: res?.assets[0]?.fileName,
      });

      // console.log("sdasdas "+JSON.stringify(res))
    });
  };
  const navigation = useNavigation();

  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <KeyboardAwareScrollView
        contentContainerStyle={{}}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}>
        <TopHeader />
        <View style={styles.bottomSection}>
          <BottomHeader />

          <Formik
            initialValues={{
              Education: [
                {
                  university_name: '',
                  level_id: '',
                  field_of_study: '',
                  grade: '',
                  start_date: '',
                  end_date: '',
                  degree_certificate: '',
                },
              ],
            }}
            onSubmit={values => {
              setLoading(true);
              const formdata = new FormData();
              values.Education.map((item: any, index: any) => {
                formdata.append(
                  `array[${index}][university_name]`,
                  item.university_name,
                );
                formdata.append(
                  `array[${index}][field_of_study]`,
                  item.field_of_study,
                );
                formdata.append(`array[${index}][level_id]`, item.level_id);
                formdata.append(`array[${index}][grade]`, item.grade);

                formdata.append(
                  `array[${index}][start_date]`,
                  item.start_date == '' || !item.start_date
                    ? Moment(new Date()).format('yyyy/MM/DD')
                    : item.start_date,
                );
                formdata.append(
                  `array[${index}][end_date]`,
                  item.end_date == '' || !item.end_date
                    ? Moment(new Date()).format('yyyy/MM/DD')
                    : item.end_date,
                );

                item.degree_certificate == '' || !item.degree_certificate
                  ? null
                  : formdata.append(
                      `array[${index}][degree_certificate]`,
                      item.degree_certificate,
                    );
              });
              // console.log(formdata);

              dispatch(AppThunks.doAddEducation(formdata)).then((res: any) => {
                setLoading(false);
              });
            }}>
            {(props: any) => (
              <View>
                {Education.map((Exp: any, index: any) => (
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: '500',
                        color: '#000',
                        marginLeft: 8,
                        marginBottom: 10,
                      }}>
                      {`Education`}
                    </Text>
                    <Input
                      {...props}
                      name={`Education[${index}][university_name]`}
                      placeholderTextColor={'#B9B9B9'}
                      inputContainerStyle={{
                        borderRadius: 16,
                        borderColor: '#1D5EDD',
                        borderWidth: 1,
                        paddingHorizontal: 15,
                        height: Platform.OS == 'ios' ? 50 : null,
                        // marginBottom:5
                      }}
                      onChangeText={e =>
                        props?.setFieldValue(
                          `Education[${index}]["university_name"]`,
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
                      placeholder={`School / university name`}
                    />
                    {/* <CustomInput
                      {...props}
                      Label={`Education[${index}][university_name]`}
                      placeholder="School / university name"
                     
                    /> */}

                    <Dropdown
                      style={styles.uploadContainer}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      data={EducationLevelData}
                      search
                      // maxHeight={300}
                      labelField="name"
                      valueField="id"
                      placeholder="Education level"
                      searchPlaceholder="Search..."
                      value={value}
                      onChange={(item: any) => {
                        props?.setFieldValue(
                          `Education[${index}]["level_id"]`,
                          item?.id,
                        );
                      }}
                      renderRightIcon={() => (
                        <RenderSvgIcon
                          icon={dropdownOpen ? 'ArrowUp' : 'ArrowDown'} // Choose the icon based on the dropdown state
                          width={16}
                          height={16}
                        />
                      )}
                      onFocus={() => setDropdownOpen(true)} // Set the state to open when the dropdown is focused
                      onBlur={() => setDropdownOpen(false)}
                    />

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 10,
                        // backgroundColor:'red'
                        // width:'100%',
                        // columnGap: 15,
                      }}>
                      <View style={{width: '48%'}}>
                        <Input
                          {...props}
                          name={`Education[${index}]["field_of_study"]`}
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
                              `Education[${index}]["field_of_study"]`,
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
                      <View style={{width: '48%'}}>
                        <Input
                          {...props}
                          name={`Education[${index}]["grade"]`}
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
                              `Education[${index}]["grade"]`,
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
                        justifyContent: 'space-around',
                        // marginTop: 20,
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
                            setVisible(true),
                              setType('1'),
                              setIndexToUpdateStart(index);
                          }}>
                          <View style={styles.InputStyleNoWidth}>
                            <Text
                              style={{
                                marginRight: 20,
                                color:'#B9B9B9',
                                fontSize: 16,
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
                          }}>
                          End date
                        </Text>
                        <TouchableOpacity
                          onPress={() => {
                            setVisible(true),
                              setType('2'),
                              setIndexToUpdateEnd(index);
                          }}>
                          <View style={styles.InputStyleNoWidth}>
                            <Text
                              style={{
                                marginRight: 20,
                                color: '#B9B9B9',
                                fontSize: 16,
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
                                textColor="#000"
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
                                      setStartDates(prevSource => {
                                        const updatedStartsDate = [...prevSource];
                                        updatedStartsDate[index] =
                                          selectedDate;
                                        return updatedStartsDate;
                                      });
                                      props?.setFieldValue(
                                        `Education[${index}]["start_date"]`,
                                        Moment(selectedDate).format(
                                          'yyyy/MM/DD',
                                        ),
                                      );
                                    } else {
                                      setEndDates(prevSource => {
                                        const updatedEndDates = [...prevSource];
                                        updatedEndDates[index] =
                                          selectedDate;
                                        return updatedEndDates;
                                      });
                                      props?.setFieldValue(
                                        `Education[${index}]["end_date"]`,
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
                          

                              if (selectedDate !== undefined) {
                                if (type == '1') {
                            
                                  setStartDates(prevSource => {
                                    const updatedStartsDate = [...prevSource];
                                    updatedStartsDate[index] =
                                      selectedDate;
                                    return updatedStartsDate;
                                  });
                               
                                  props?.setFieldValue(
                                    `Education[${index}]["start_date"]`,
                                    Moment(selectedDate).format('yyyy/MM/DD'),
                                  );
                                } else {
                                  setEndDates(prevSource => {
                                    const updatedEndDates = [...prevSource];
                                    updatedEndDates[index] =
                                      selectedDate;
                                    return updatedEndDates;
                                  });
                                  // setEndDates([
                                  //   ...endDates.slice(0, updatedIndexEnd),
                                  //   selectedDate,
                                  //   ...endDates.slice(updatedIndexEnd + 1),
                                  // ]);

                                  props?.setFieldValue(
                                    `Education[${index}]["end_date"]`,
                                    Moment(selectedDate).format('yyyy/MM/DD'),
                                  );
                                }
                              }
                              setVisible(false);
                            }}
                          />
                        )}

                    <TouchableOpacity
                      onPress={() => openGallery(props, index)}
                      style={styles.InputStyleNoWidth1}>
                      <PHOTO style={{marginRight: 20}} />
                      <Text
                        numberOfLines={1}
                        style={{fontSize: 20, color: appColors.primary}}>
                        {Source[index] == null
                          ? 'Upload degree certificate'
                          : `${Source[index].slice(0, 20)}...`}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
                <TouchableOpacity
                  onPress={() => {
                    setEducation((prev: any) => {
                      return [...prev, 1];
                    });
                  }}
                  style={{flexDirection: 'row', marginBottom: 10}}>
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
                      Add another school
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

export default UpdateEducation;
