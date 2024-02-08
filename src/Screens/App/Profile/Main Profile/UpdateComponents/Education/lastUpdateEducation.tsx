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

// import RNDateTimePicker from '@react-native-community/datetimepicker';
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
const UpdateOneEducation = () => {
  const {data}: any = useRoute().params;
  console.log('Education', data);
  const [startDates, setStartDates] = useState(new Date(data?.start_date));
  const [endDates, setEndDates] = useState(new Date(data?.end_date));

  const [isVisible, setVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [type, setType] = useState('0');
  const [value, setValue] = useState(null);
  const [Source, setSource] = useState<Array<any>>([]);
  const [loading, setLoading] = React.useState(false);

  const dispatch = useAppDispatch();

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

  const openGallery = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
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

  // const navigation = useNavigation<any>();
  const pick = (props: any, index: any) => {
    launchImageLibrary({quality: 0.5, mediaType: 'photo'}).then((res: any) => {
      setSource([
        ...Source.slice(0, index),
        res?.assets[0]?.fileName,
        ...Source.slice(index + 1),
      ]);
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
            <View style={{width: 32}}>
              {/* <RenderSvgIcon icon="ICON2CV" width={32} height={48} /> */}
            </View>
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
              university_name: data?.university_name || '',
              level_id: data?.level_id?.id || '',
              field_of_study: data?.field_of_study || '',
              grade: data?.grade || '',
              start_date: data?.start_date || new Date(),
              end_date: data?.end_date || new Date(),
              degree_certificate: '',
            }}
            onSubmit={values => {
              setLoading(true);
              const formdata = new FormData();
              formdata.append(`id`, data?.id);
              formdata.append(`university_name`, values.university_name);
              formdata.append(`field_of_study`, values.field_of_study);
              formdata.append(`level_id`, values.level_id);
              formdata.append(`grade`, values.grade);

              formdata.append(`start_date`, values.start_date);
              formdata.append(`end_date`, values.end_date);

              Source.length != 0
                ? formdata.append(`degree_certificate`, {
                    uri: Source[0]?.uri,
                    type: Source[0]?.type,
                    name: Source[0]?.name,
                  })
                : null;

              console.log(formdata);

              dispatch(AppThunks.doUpdateEducation(formdata)).then(
                (res: any) => {
                  setLoading(false);
                },
              );
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
                    }}>
                    {`Education`}
                  </Text>
                  <Input
                    {...props}
                    name={`university_name`}
                    placeholderTextColor={'#B9B9B9'}
                    inputContainerStyle={{
                      borderRadius: 16,
                      borderColor: '#1D5EDD',
                      borderWidth: 1,
                      paddingHorizontal: 15,
                      height: Platform.OS == 'ios' ? 50 : null,
                      // marginBottom:5
                    }}
                    value={props.values.university_name}
                    onChangeText={e =>
                      props?.setFieldValue(`university_name`, e)
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
                    placeholder={data?.level_id?.name}
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={(item: any) => {
                      props?.setFieldValue(`level_id`, item?.id);
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
                      justifyContent: 'space-around',
                      marginBottom: 10,
                      columnGap: 15,
                    }}>
                    <TextInput
                      placeholder="Field of study"
                      placeholderTextColor={'#B9B9B9'}
                      style={styles.inputStyle}
                      onChangeText={e =>
                        props?.setFieldValue(`field_of_study`, e)
                      }
                      value={props.values.field_of_study}
                    />

                    <TextInput
                      placeholder="Grade"
                      placeholderTextColor={'#B9B9B9'}
                      style={styles.inputStyle}
                      onChangeText={e => props?.setFieldValue(`grade`, e)}
                      value={props.values.grade}
                    />
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
                          setVisible(true), setType('1');
                        }}>
                        <View style={styles.InputStyleNoWidth}>
                          <Text
                            style={{
                              marginRight: 20,
                              color: '#000',
                              fontSize: 14,
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
                            setVisible(false);
                          }}
                        />
                      )}

                  <TouchableOpacity
                    onPress={openGallery}
                    style={styles.InputStyleNoWidth1}>
                    <PHOTO style={{marginRight: 20}} />
                    <Text style={{fontSize: 20, color: appColors.primary}}>
                      {Source ? 'Update degree certificate' : Source}
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

export default UpdateOneEducation;
