import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  FlatList,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import {RenderSvgIcon} from '../../../../../../Components/atoms/svg';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../../../../theme/appColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../../../../../../Components/molecules/Button';

import {BigLogo, CALANDER, PHOTO} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {Formik} from 'formik';
import InputView from 'components/molecules/Input';
import {appSizes} from 'theme/appSizes';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';
import DocumentPicker from 'react-native-document-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import AppThunks from 'src/redux/app/thunks';
import {useAppDispatch} from 'src/redux/store';
import Moment from 'moment';
import {Dropdown} from 'react-native-element-dropdown';
import {useSelector} from 'react-redux';
import {
  selectDone,
  selectIndstruy,
  selectJobtype,
  selectYears,
} from 'src/redux/app';
import {isDate, values} from 'lodash';

const AddNewExperience = () => {
  const [date, setDate] = useState(new Date());
  const [date1, setDate1] = useState(new Date());
  const [startDates, setStartDates] = useState<Array<Date>>([new Date()]);
  const [endDates, setEndDates] = useState<Array<Date>>([new Date()]);
  const [index2, setIndex2] = React.useState(false);
  const [isVisible, setVisible] = useState(false);
  const [type, setType] = useState('0');
  const [Work, setWork] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [stillWorkHere, setStillWorkHere] = useState<Array<boolean>>([false]);
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');

  const [experienceLetter, setExperienceLetter] = useState<Array<any>>([]);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useAppDispatch();
  const changeDone = useSelector(selectDone);
  const [Experince, setExperience] = useState<any>([1]);
  const IndustryData = useSelector(selectIndstruy);
  const YearsData = useSelector(selectYears);
  const JobTypeData = useSelector(selectJobtype);

  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [index1, setIndex1] = useState(null);
  const [propsData, setPropsData] = useState<any>([]);
  // console.log(changeDone)
  useEffect(() => {
    changeDone ? navigation.goBack() : null;
  }, [changeDone]);
  useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      dispatch(AppThunks.GetIndustry());
      dispatch(AppThunks.GetYearsOfExperience());
      dispatch(AppThunks.GetJobType());
    });
    return RenderFunction;
  }, []);
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Grape',
  ]);
  const filteredData = data.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const renderListItem = ({item}: any) => (
    <TouchableOpacity onPress={() => handleItemSelected(item)}>
      <Text style={{padding: 10, borderBottomWidth: 1, borderColor: '#ccc'}}>
        {item}
      </Text>
    </TouchableOpacity>
  );
  const handleItemSelected = (selectedItem: any) => {
    // Handle the selected item, for example, update the state or perform other actions.
    console.log('Selected Item:', selectedItem);
    // You may want to close the dropdown or clear the search query here.
    setSearchQuery('');
  };
  const uploadFile = async (props: any, index: any) => {
    try {
      const res: any = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });

      setExperienceLetter([
        ...experienceLetter.slice(0, index),
        res[0].name,
        ...experienceLetter.slice(index + 1),
      ]);
      props?.setFieldValue(`Experince[${index}]["experience_letter"]`, {
        uri: res[0]?.uri,
        type: res[0]?.type,
        name: res[0]?.name,
      });
    } catch (err) {
      // setFieldValue(name.replace(/\s/g, ''), '');
      if (DocumentPicker.isCancel(err)) {
        console.log('Canceled');
      } else {
        console.log('Unknown Error: ' + JSON.stringify(err));
        throw err;
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
              Experince: [
                {
                  job_title: '',
                  company_name: '',
                  industry_id: '',
                  years_of_experience_id: '',
                  job_type_id: '',
                  start_date: '',
                  end_date: '',
                  still_work_here: 0,
                  experience_letter: '',
                },
              ],
            }}
            onSubmit={values => {
              setLoading(true);
              const formdata = new FormData();
              values.Experince.map((item: any, index: any) => {
                formdata.append(`array[${index}][job_title]`, item.job_title);
                formdata.append(
                  `array[${index}][company_name]`,
                  item.company_name,
                );
                formdata.append(
                  `array[${index}][industry_id]`,
                  item.industry_id,
                );
                formdata.append(
                  `array[${index}][years_of_experience_id]`,
                  item.years_of_experience_id,
                );
                formdata.append(
                  `array[${index}][job_type_id]`,
                  item.job_type_id,
                );
                formdata.append(`array[${index}][start_date]`, item.start_date);
                formdata.append(`array[${index}][end_date]`, item.end_date);
                formdata.append(
                  `array[${index}][still_work_here]`,
                  item.still_work_here,
                );
                formdata.append(
                  `array[${index}][experience_letter]`,
                  item.experience_letter,
                );
              });

              dispatch(AppThunks.doAddExperience(formdata)).then((res: any) => {
                dispatch(AppThunks.GetProfileInfo());
                setLoading(false);
              });
              // navigation.navigate("ResetPassword")
            }}>
            {(props: any) => (
              <View>
                {Experince.map((Exp: any, index: any) => (
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: '500',
                        color: '#000',
                        marginLeft: 8,
                        marginBottom: 10,
                      }}>
                      {`Experience`}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginBottom: 10,
                        columnGap: 15,
                      }}>
                      <TextInput
                        placeholder="Job title"
                        style={styles.inputStyle}
                        onChangeText={e =>
                          props?.setFieldValue(
                            `Experince[${index}]["job_title"]`,
                            e,
                          )
                        }
                        placeholderTextColor={'#B9B9B9'}
                      />
                      <TextInput
                        placeholder="Company name"
                        style={styles.inputStyle}
                        value={searchQuery}
                        onChangeText={
                          e => setSearchQuery(e)
                          // props?.setFieldValue(
                          //   `Experince[${index}]["company_name"]`,
                          //   e,
                          // )
                        }
                        placeholderTextColor={'#B9B9B9'}
                      />
                    </View>
                    {searchQuery.length > 0 && (
                      <FlatList
                        data={filteredData}
                        renderItem={renderListItem}
                        keyExtractor={(item, index) => index.toString()}
                      />
                    )}
                    <Dropdown
                      style={styles.uploadContainer1}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      data={IndustryData}
                      search
                      // maxHeight={300}
                      labelField="name"
                      valueField="id"
                      placeholder="Industry"
                      searchPlaceholder="Search..."
                      value={value}
                      onChange={(item: any) => {
                        props?.setFieldValue(
                          `Experince[${index}]["industry_id"]`,
                          item?.id,
                        );
                        // console.log(item)
                        // setValue(item.name);
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
                    <Dropdown
                      style={styles.uploadContainer1}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      data={YearsData}
                      search
                      // maxHeight={300}
                      labelField="name"
                      valueField="id"
                      placeholder="Years of experience"
                      searchPlaceholder="Search..."
                      value={value1}
                      onChange={(item: any) => {
                        props?.setFieldValue(
                          `Experince[${index}]["years_of_experience_id"]`,
                          item?.id,
                        );
                        // setValue1(item?.name);
                      }}
                      renderRightIcon={() => (
                        <RenderSvgIcon
                          icon={dropdownOpen1 ? 'ArrowUp' : 'ArrowDown'} // Choose the icon based on the dropdown state
                          width={16}
                          height={16}
                        />
                      )}
                      onFocus={() => setDropdownOpen1(true)} // Set the state to open when the dropdown is focused
                      onBlur={() => setDropdownOpen1(false)}
                    />

                    <Dropdown
                      style={styles.uploadContainer1}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      data={JobTypeData}
                      search
                      // maxHeight={300}
                      labelField="name"
                      valueField="id"
                      placeholder="Job type"
                      searchPlaceholder="Search..."
                      value={value2}
                      onChange={(item: any) => {
                        props?.setFieldValue(
                          `Experince[${index}]["job_type_id"]`,
                          item?.id,
                        );
                        // setValue1(item?.name);
                      }}
                      renderRightIcon={() => (
                        <RenderSvgIcon
                          icon={dropdownOpen2 ? 'ArrowUp' : 'ArrowDown'} // Choose the icon based on the dropdown state
                          width={16}
                          height={16}
                        />
                      )}
                      onFocus={() => setDropdownOpen2(true)} // Set the state to open when the dropdown is focused
                      onBlur={() => setDropdownOpen2(false)}
                    />

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
                          }}>
                          Start date
                        </Text>
                        <TouchableOpacity
                          onPress={() => {
                            setVisible(true),
                              setIndex1(index),
                              setPropsData(props),
                              setType('1');
                          }}>
                          <View style={styles.InputStyleNoWidth}>
                            <Text
                              style={{
                                marginRight: 20,
                                color: '#B9B9B9',
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
                              setIndex1(index),
                              setPropsData(props),
                              setType('2');
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
                        {isVisible && (
                          <DateTimePicker
                            mode="date"
                            display="spinner"
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
                                    `Experince[${index}]["start_date"]`,
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
                                    `Experince[${index}]["end_date"]`,
                                    Moment(selectedDate).format('yyyy/MM/DD'),
                                  );
                                }
                              }
                              setVisible(false);
                            }}
                          />
                        )}
                      </View>
                    </View>
                    <View style={styles.rowAgree}>
                      <TouchableOpacity
                        onPress={() => {
                          setStillWorkHere(prev => {
                            const updatedArray = [...prev];
                            updatedArray[index] = !prev[index];
                            return updatedArray;
                          });

                          props?.setFieldValue(
                            `Experince[${index}]["still_work_here"]`,
                            stillWorkHere[index] ? 0 : 1,
                          );
                        }}
                        style={styles.Circle}>
                        <View
                          style={
                            stillWorkHere[index] ? styles.innerCircle : null
                          }
                        />
                      </TouchableOpacity>
                      <Text style={styles.agree}>I currently work there</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => uploadFile(props, index)}
                      style={styles.uploadContainer}>
                      <PHOTO style={{marginRight: 20}} />
                      <Text
                        style={{
                          fontSize: 18,
                          color: appColors.primary,
                          fontFamily: 'Noto Sans',
                        }}>
                        {experienceLetter[index] == null
                          ? 'Upload degree certificate'
                          : experienceLetter[index]}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
                <TouchableOpacity
                  onPress={() => {
                    setExperience((prev: any) => {
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
                        marginLeft: 15,
                        color: '#000',
                        fontFamily: 'Noto Sans',
                      }}>
                      Add another job
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

export default AddNewExperience;
