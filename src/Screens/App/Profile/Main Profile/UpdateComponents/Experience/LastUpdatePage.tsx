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
import {RenderSvgIcon} from '../../../../../../Components/atoms/svg';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../../../../theme/appColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../../../../../../Components/molecules/Button';

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
import Pdf from 'react-native-pdf';
const UpdateOneExperience = () => {
  const {data}: any = useRoute().params;

  console.log('sdasdsadedreew', data);
  const [startDates, setStartDates] = useState(new Date(data?.start_date));
  const [endDates, setEndDates] = useState(new Date(data?.end_date));

  const [isVisible, setVisible] = useState(false);
  const [type, setType] = useState('0');
  const [Work, setWork] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [stillWorkHere, setStillWorkHere] = useState(
    data?.still_work_here == 0 ? false : true,
  );
  const [selectedCompanyName, setSelectedCompanyName] = useState('');

  const [experienceLetter, setExperienceLetter] = useState('');
  const [loading, setLoading] = React.useState(false);
  const dispatch = useAppDispatch();
  const changeDone = useSelector(selectDone);
  const [Experince, setExperience] = useState<any>([1]);
  const IndustryData = useSelector(selectIndstruy);
  const YearsData = useSelector(selectYears);
  const JobTypeData = useSelector(selectJobtype);
  const CompaniesData = useSelector(selectCompanies);
  const [key, setKey] = useState('');
  const [value, setValue] = useState(data?.industry_id?.name);
  const [value1, setValue1] = useState(data?.years_of_experience_id?.name);
  const [value2, setValue2] = useState(data?.job_type_id?.name);
  const [index1, setIndex1] = useState(null);
  const [propsData, setPropsData] = useState<any>([]);
  const [selectedItem, setSelectedItem] = useState<any>([]);
  const [selectedCompanyNames, setSelectedCompanyNames] = useState<string[]>(
    [],
  );

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
  const renderListItem = (item: any, props: any) => (
    <TouchableOpacity
      style={{}}
      onPress={() => handleItemSelected(item, props)}>
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
  const handleItemSelected = (selectedItem: any, props: any) => {
    // Handle the selected item, for example, update the state or perform other actions.
    console.log('Selected Item:', selectedItem);
    setSelectedItem(selectedItem);

    // setSelectedCompanyName(selectedItem.name);
    props?.setFieldValue(`company_id`, selectedItem?.id);
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
    console.log(CompaniesData);
    return () => clearTimeout(timer);
  }, [searchQuery]);
  const uploadFile = async (props: any) => {
    try {
      const res: any = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });

      setExperienceLetter(res[0].name);
      props?.setFieldValue(`experience_letter`, {
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
                Update Experience
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
              job_title: data?.job_title || '',
              company_name: data?.company_name==null?data?.company_id?.name:data?.company_name || '',
              industry_id: data?.industry_id?.id || '',
              years_of_experience_id: data?.years_of_experience_id?.id || '',
              job_type_id: data?.job_type_id?.id || '',
              start_date: data?.start_date || new Date(),
              end_date: data?.end_date || new Date(),
              still_work_here: data?.still_work_here==0?0:1||'',
              experience_letter: '',
              description: data?.description || '',
              company_id:data?.company_id==null?'':data?.company_id?.id|| '',
            }}
            onSubmit={values => {
              setLoading(true);
              const formdata = new FormData();
              formdata.append(`id`, data?.id);
              formdata.append(`job_title`, values.job_title);
              values.company_id == ''
                ? formdata.append(`company_name`, values.company_name)
                : formdata.append(`company_id`, values.company_id);
              formdata.append(`industry_id`, values.industry_id);
              formdata.append(`description`, values.description);
              formdata.append(
                `years_of_experience_id`,
                values.years_of_experience_id,
              );
              formdata.append(`job_type_id`, values.job_type_id);
              formdata.append(`start_date`, values.start_date);
              formdata.append(`end_date`, values.end_date);
              formdata.append(`still_work_here`, values.still_work_here);
              experienceLetter?.length != 0 ?formdata.append(`experience_letter`, values.experience_letter):null;

              console.log('FormData', formdata);

              dispatch(AppThunks.doUpdateExperience(formdata)).then((res: any) => {
                dispatch(AppThunks.GetProfileInfo());
                setLoading(false);
              });
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
                    }}>
                    Experience
                  </Text>
                  <TextInput
                    placeholder="Job title"
                    onChangeText={value =>
                      props?.setFieldValue(`job_title`, value)
                    }
                    value={props.values.job_title}
                    style={{
                      borderRadius: 16,
                      borderColor: '#1D5EDD',
                      borderWidth: 1,
                      paddingHorizontal: 15,
                      height: 50,
                      fontSize: 14,
                      marginBottom: 10,
                      color: '#000',
                      fontFamily: 'Noto Sans',
                    }}
                  />
                  <TextInput
                    placeholder="Company name"
                    value={props.values.company_name}
                    onChangeText={value => {
                      setSearchQuery(value);
                      if (selectedItem.length === 0) {
                        props?.setFieldValue(`company_name`, value);
                      }
                    }}
                    style={{
                      borderRadius: 16,
                      borderColor: '#1D5EDD',
                      borderWidth: 1,
                      paddingHorizontal: 15,
                      height: 50,
                      fontSize: 14,
                      marginBottom: 10,
                      color: '#000',
                      fontFamily: 'Noto Sans',
                    }}
                  />

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
                        renderItem={({item}) => renderListItem(item, props)}
                        keyExtractor={(item, index) => index.toString()}
                      />
                    </View>
                  )}

                  <Dropdown
                    style={styles.uploadContainer1}
                    placeholderStyle={styles.placeholderStyle1}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={IndustryData}
                    search
                    // maxHeight={300}
                    labelField="name"
                    valueField="id"
                    placeholder={data?.industry_id?.name}
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={(item: any) => {
                      props?.setFieldValue(`industry_id`, item?.id);
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
                    placeholderStyle={styles.placeholderStyle1}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={YearsData}
                    search
                    // maxHeight={300}
                    labelField="name"
                    valueField="id"
                    placeholder={data?.years_of_experience_id?.name}
                    searchPlaceholder="Search..."
                    value={value1}
                    onChange={(item: any) => {
                      props?.setFieldValue(`years_of_experience_id`, item?.id);
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
                    placeholderStyle={styles.placeholderStyle1}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={JobTypeData}
                    search
                    // maxHeight={300}
                    labelField="name"
                    valueField="id"
                    placeholder={data?.job_type_id?.name}
                    searchPlaceholder="Search..."
                    value={value2}
                    onChange={(item: any) => {
                      props?.setFieldValue(`job_type_id`, item?.id);
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
                    name={`description`}
                    placeholderTextColor={'#B9B9B9'}
                    inputContainerStyle={{
                      borderRadius: 16,
                      borderColor: '#1D5EDD',
                      borderWidth: 1,
                      paddingHorizontal: 15,
                      height: 50,
                    }}
                    value={props.values.description}
                    onChangeText={e => props?.setFieldValue(`description`, e)}
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
                          setVisible(true), setType('1');
                        }}>
                        <View style={styles.InputStyleNoWidth}>
                          <Text
                            style={{
                              marginRight: 20,
                              color: '#000',
                              fontSize: 16,
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
                              fontSize: 16,
                            }}>
                            {Moment(endDates).format('DD/MM/yyyy')}
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
                                    type === '1' && isDate(startDates)
                                      ? startDates
                                      : isDate(endDates)
                                      ? endDates
                                      : new Date() // Provide a default date if the specified date is invalid
                                  }
                                  mode="date"
                                  textColor="#000"
                                  is24Hour={true}
                                  display="spinner"
                                  onChange={(event: any, selectedDate: any) => {
                                    if (selectedDate !== undefined) {
                                      if (type == '1') {
                                        setStartDates(selectedDate);

                                        props?.setFieldValue(
                                          `start_date`,
                                          Moment(selectedDate).format(
                                            'yyyy/MM/DD',
                                          ),
                                        );
                                      } else {
                                        setEndDates(selectedDate);
                                        props?.setFieldValue(
                                          `end_date`,
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
                    </View>
                  </View>
                  <View style={styles.rowAgree}>
                    <TouchableOpacity
                      onPress={() => {
                        setStillWorkHere(!stillWorkHere);

                        props?.setFieldValue(
                          `still_work_here`,
                          stillWorkHere ? 0 : 1,
                        );
                      }}
                      style={styles.Circle}>
                      <View style={stillWorkHere ? styles.innerCircle : null} />
                    </TouchableOpacity>
                    <Text style={styles.agree}>I currently work there</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => uploadFile(props)}
                    style={styles.uploadContainer}>
                    <PHOTO style={{marginRight: 20}} />
                    <Text
                      style={{
                        fontSize: 18,
                        color: appColors.primary,
                        fontFamily: 'Noto Sans',
                      }}>
                      {experienceLetter == ''
                        ? 'Update degree certificate'
                        : experienceLetter}
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

export default UpdateOneExperience;
