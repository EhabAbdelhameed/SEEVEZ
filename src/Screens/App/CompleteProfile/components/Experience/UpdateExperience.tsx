import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  FlatList,
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

import {BigLogo, CALANDER, CompanyLogo, PHOTO} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {Formik} from 'formik';

import DocumentPicker from 'react-native-document-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import AppThunks from 'src/redux/app/thunks';
import {useAppDispatch} from 'src/redux/store';
import Moment from 'moment';
import {Dropdown} from 'react-native-element-dropdown';
import Header from './Header';
import {useSelector} from 'react-redux';
import ReactNativeModal from 'react-native-modal';
import {
  selectCompanies,
  selectDone,
  selectIndstruy,
  selectJobtype,
  selectYears,
} from 'src/redux/app';
import {isDate, values} from 'lodash';
import {Input} from 'react-native-elements';
import TopHeader from '../Header/TopHeader';
import BottomHeader from '../Header/BottomHeader';
// import RNDateTimePicker from '@react-native-community/datetimepicker';
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
const UpdateExperience = () => {
  const [startDates, setStartDates] = useState<Array<Date>>([new Date()]);
  const [endDates, setEndDates] = useState<Array<Date>>([new Date()]);

  const [isVisible, setVisible] = useState(false);
  const [type, setType] = useState('0');
  const [Work, setWork] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [stillWorkHere, setStillWorkHere] = useState<Array<boolean>>([false]);
  const [selectedCompanyName, setSelectedCompanyName] = useState('');

  const [experienceLetter, setExperienceLetter] = useState<Array<any>>([]);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useAppDispatch();
  const changeDone = useSelector(selectDone);
  const [Experince, setExperience] = useState<any>([1]);
  const IndustryData = useSelector(selectIndstruy);
  const YearsData = useSelector(selectYears);
  const JobTypeData = useSelector(selectJobtype);
  const CompaniesData = useSelector(selectCompanies);
  const [key, setKey] = useState('');
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [index1, setIndex1] = useState(null);
  const [propsData, setPropsData] = useState<any>([]);
  const [selectedItem, setSelectedItem] = useState<any>([]);
  const [selectedCompanyNames, setSelectedCompanyNames] = useState<string[]>(
    [],
  );

  // console.log(changeDone)
  useEffect(() => {
    changeDone ? navigation.goBack() : null;
  }, [changeDone]);
  useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      dispatch(AppThunks.GetIndustry());
      dispatch(AppThunks.GetYearsOfExperience());
      dispatch(AppThunks.GetJobType());
      dispatch(AppThunks?.GetCompaniesName(searchQuery)).then(() => {
        // setLoad(false)
      });
    });
    return RenderFunction;
  }, []);
  const [searchQuery, setSearchQuery] = useState('');

  // const filteredData = data.filter(item =>
  //   item.toLowerCase().includes(searchQuery.toLowerCase()),
  // );
  const filteredData = (data: any) =>
    data?.name?.toLowerCase().includes(searchQuery?.toLowerCase());
  const renderListItem = (item: any, props: any, index: any) => (
    <TouchableOpacity
      style={{}}
      onPress={() => handleItemSelected(item, props, index)}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 5,
          borderBottomWidth: 1,
          borderColor: '#CCC',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 20,
            height: 20,
            borderRadius: 20,
            backgroundColor: '#E8EFFC',
            borderWidth: 1,
            borderColor: '#B9CDF4',
          }}>
          {item?.avatar == null ? (
            <CompanyLogo width={25} height={25} />
          ) : (
            <Image
              source={{uri: item?.avatar}}
              style={{width: 25, height: 25, borderRadius: 25}}
              resizeMode="cover"
            />
          )}
        </View>

        <Text style={{padding: 10, borderColor: '#ccc', fontSize: 14}}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
  const handleItemSelected = (selectedItem: any, props: any, index: any) => {
    // Handle the selected item, for example, update the state or perform other actions.
    console.log('Selected Item:', selectedItem);
    setSelectedItem(selectedItem);

    setSelectedCompanyNames((prevNames: any) => {
      const updatedNames = [...prevNames];
      updatedNames[index] = selectedItem.name || '';
      return updatedNames;
    });
    // setSelectedCompanyName(selectedItem.name);

    props?.setFieldValue(`Experince[${index}]["company_id"]`, selectedItem?.id);
    // You may want to close the dropdown or clear the search query here.
    setSearchQuery('');
  };

  // const na = async () => {
  //   const token: any = await AsyncStorage.getItem('USER_TOKEN');
  //   console.log(token);
  // };
  // React.useEffect(()=>{
  //   na()
  // },[])
  React.useEffect(() => {
    const timer = setTimeout(() => {
      searchQuery &&
        dispatch(AppThunks?.GetCompaniesName(searchQuery)).then(() => {
          // setLoad(false)
        });
    }, 500);
    
    return () => clearTimeout(timer);
  }, [searchQuery]);
  const uploadFile = async (props: any, index: any) => {
    try {
      const res: any = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });

      setExperienceLetter((prevExperienceLetter) => {
        const updatedExperienceLetter = [...prevExperienceLetter];
        updatedExperienceLetter[index] = res[0].name;
        return updatedExperienceLetter;
      });
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
              Experince: [
                {
                  job_title: '',
                  company_name: '',
                  industry_id: '',
                  years_of_experience_id: '',
                  job_type_id: '',
                  start_date: '',
                  end_date:'',
                  still_work_here: 0,
                  experience_letter: '',
                  description: '',
                  company_id: '',
                },
              ],
            }}
            onSubmit={values => {
              setLoading(true);
              const formdata = new FormData();
              values.Experince.map((item: any, index: any) => {
                formdata.append(`array[${index}][job_title]`, item.job_title);
                values.Experince[index].company_id == ''||!values.Experince[index].company_id
                  ? formdata.append(
                      `array[${index}][company_name]`,
                      item.company_name,
                    )
                  : formdata.append(
                      `array[${index}][company_id]`,
                      item.company_id,
                    );
                formdata.append(
                  `array[${index}][industry_id]`,
                  item.industry_id,
                );
                formdata.append(
                  `array[${index}][description]`,
                  item.description,
                );
                formdata.append(
                  `array[${index}][years_of_experience_id]`,
                  item.years_of_experience_id,
                );
                formdata.append(
                  `array[${index}][job_type_id]`,
                  item.job_type_id,
                );
                formdata.append(`array[${index}][start_date]`,item.start_date==''||!item.start_date? Moment(new Date()).format('yyyy/MM/DD'):item.start_date);
                formdata.append(`array[${index}][end_date]`,item.end_date==''||!item.end_date? Moment(new Date()).format('yyyy/MM/DD'):item.end_date);
                item.still_work_here==0||!item.still_work_here?formdata.append(
                  `array[${index}][still_work_here]`,
                  0,
                ):formdata.append(
                  `array[${index}][still_work_here]`,
                  item.still_work_here,
                )
                item.experience_letter==''||!item.experience_letter?null:formdata.append(
                  `array[${index}][experience_letter]`,
                  item.experience_letter,
                ) 
              });
              console.log('FormData f ', formdata, "ffffff");

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
                      Experience
                    </Text>
                    <View style={{marginBottom:10}}>
                      <Input
                        {...props}
                        name={`Experince[${index}]["job_title"]`}
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
                            `Experince[${index}]["job_title"]`,
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
                        placeholder={`Job title`}
                      />
                    </View>
                    <View style={{marginBottom:5}}>
                      <Input
                        {...props}
                        name={`Experince[${index}]["company_name"]`}
                        value={selectedCompanyNames[index]}
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
                        onChangeText={value => {
                          setSearchQuery(value);

                          props?.setFieldValue(
                            `Experince[${index}]["company_name"]`,
                            value,
                          );
                          setSelectedCompanyNames(prevNames => {
                            const updatedNames = [...prevNames];
                            updatedNames[index] = value;
                            return updatedNames;
                          });
                        }}
                        containerStyle={{
                          paddingHorizontal: 0,
                          height: 50,
                          marginVertical: 2,
                        }}
                        inputStyle={{
                          fontSize: 14,
                          //  color: 'red'
                        }}
                        placeholder={`Company name`}
                      />
                    </View>

                    {searchQuery.length > 0 && (
                      <View
                        style={{
                          borderWidth: 1,
                          borderColor: appColors.bg,
                          borderRadius: 16,
                          backgroundColor: '#FFF',
                          paddingHorizontal: 15,
                        }}>
                        <FlatList
                          scrollEnabled={false}
                          data={CompaniesData?.filter(filteredData)}
                          renderItem={({item}) =>
                            renderListItem(item, props, index)
                          }
                          keyExtractor={(item, index) => index.toString()}
                        />
                      </View>
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
                    <Input
                      {...props}
                      name={`Experince[${index}][description]`}
                      placeholderTextColor={'#B9B9B9'}
                      inputContainerStyle={{
                        borderRadius: 16,
                        borderColor: '#1D5EDD',
                        borderWidth: 1,
                        paddingHorizontal: 15,
                        height: 50,
                      }}
                      onChangeText={e =>
                        props?.setFieldValue(
                          `Experince[${index}]["description"]`,
                          e,
                        )
                      }
                      containerStyle={{
                        paddingHorizontal: 0,
                        marginVertical: 1,
                      }}
                      inputStyle={{
                        fontSize: 14,
                        //  color: 'red'
                      }}
                      placeholder={`Description`}
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
                        {Platform.OS == 'ios'
                          ? isVisible && (
                              <ReactNativeModal isVisible={isVisible}>
                                <View
                                  style={{
                                    width: '100%',
                                    paddingVertical: 20,
                                    borderRadius: 10,
                                    backgroundColor: '#FFF',
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
                                    textColor="#000"
                                    is24Hour={true}
                                    display="spinner"
                                    onChange={(
                                      event: any,
                                      selectedDate: any,
                                    ) => {
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
                                            `Experince[${index}]["end_date"]`,
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
                                        `Experince[${index}]["end_date"]`,
                                        Moment(selectedDate).format(
                                          'yyyy/MM/DD',
                                        ),
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
                          console.log(
                            'still Work Here',
                            index,
                            stillWorkHere[index],
                          );
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
                        numberOfLines={1}
                        style={{
                          fontSize: 18,
                          color: appColors.primary,
                          fontFamily: 'Noto Sans',
                        }}>
                        {experienceLetter[index] == null
                          ? 'Upload degree certificate'
                          : `${experienceLetter[index].slice(0,20)}...`}
                         
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
                <TouchableOpacity
                  onPress={() => {
                    setExperience((prev: any) => {
                      return [...prev, 1];
                    });
                    setKey('');
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

export default UpdateExperience;
