import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  Platform,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Moment from 'moment';
import styles from './styles';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import DonotHaveAccountSection from '../../../../../Components/molecules/DonotHaveAccountSection';
import AuthTopSection from '../../../../../Components/molecules/AuthTopSection';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../../../theme/appColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../../../../../Components/molecules/Button';

import {
  BigLogo,
  CALANDER,
  PHOTO,
  PERSON,
  ImageInfo,
  CompanyLogo,
  Upload,
} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {Formik} from 'formik';
import InputView from 'components/molecules/Input';

import DocumentPicker from 'react-native-document-picker';

import AppThunks from 'src/redux/app/thunks';
import {useAppDispatch} from 'src/redux/store';
import {useSelector} from 'react-redux';
import {selectDone} from 'src/redux/app';
import {launchImageLibrary} from 'react-native-image-picker';
import {selectUser} from 'src/redux/auth';
import TopHeader from 'screens/App/CompleteProfile/components/Header/TopHeader';
import BottomHeader from 'screens/App/CompleteProfile/components/Header/BottomHeader';
// import RNDateTimePicker from '@react-native-community/datetimepicker';
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
const UpdateCompanyInfo = () => {
  const dispatch = useAppDispatch();
  const CurrentUserData = useSelector(selectUser);
  const changeDone = useSelector(selectDone);
  // console.log(changeDone)
  useEffect(() => {
    changeDone ? navigation.goBack() : null;
  }, [changeDone]);

  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [facebook, setFacebook] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [instagram, setInstagram] = useState('');
  const [website, setWebsite] = useState('');
  const [github, setGithub] = useState('');
  const [others, setOthers] = useState('');

  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState<any>([]);
  const [sourceVideo, setSourceVideo] = useState<any>([]);

  const UploadImageProfile = async () => {
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

  const pick = () => {
    launchImageLibrary({quality: 0.5, mediaType: 'photo'}).then((res: any) => {
      setSource(res?.assets);
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
          <View style={{flexDirection: 'row', columnGap: 20, marginBottom: 10}}>
            <TouchableOpacity
              onPress={Platform.OS == 'ios' ? pick : UploadImageProfile}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 15,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 86,
                  height: 86,
                  borderRadius: 86,
                  backgroundColor: '#E8EFFC',
                  borderWidth: 1,
                  borderColor: '#B9CDF4',
                }}>
                {CurrentUserData?.avatar == null &&
                (source == undefined || source?.length == 0) ? (
                  <CompanyLogo />
                ) : (
                  <Image
                    source={{
                      uri:
                        source?.length != 0 || !source
                          ? source[0]?.uri
                          : CurrentUserData?.avatar,
                    }}
                    style={{width: 86, height: 86, borderRadius: 86}}
                    resizeMode="cover"
                  />
                )}

                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 36,
                    height: 36,
                    borderRadius: 36,
                    backgroundColor: '#E8EFFC',
                    borderWidth: 1,
                    borderColor: '#B9CDF4',
                    position: 'absolute',
                    right: -15,
                  }}>
                  <ImageInfo />
                </View>
              </View>
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  color: '#1C1C1C',
                  // textAlign: 'center',

                  fontFamily: 'Noto Sans',
                  fontSize: 24,
                  marginBottom: 20,
                  fontWeight: '600',
                }}>
                {CurrentUserData?.name}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.statuesContainer}>
                  <Text style={styles.statuesText}>Online</Text>
                </View>
                <View style={styles.FollowersContainer}>
                  <Text style={styles.FollowersText}>Free account</Text>
                </View>
              </View>
            </View>
          </View>
          {/* <TouchableOpacity
            onPress={UploadVideoProfile}
            style={styles.InputStyleOutWidth}>
            <View style={{flexDirection: 'row'}}>
              <Upload />
              <Text
                style={{
                  fontFamily: 'Noto Sans',
                  fontSize: 20,
                  color: appColors.primary,
                  fontWeight: '500',
                }}>
                {sourceVideo.length == 0
                  ? 'Upload a video'
                  : sourceVideo[0].name}
              </Text>
            </View>
          </TouchableOpacity> */}
          <Formik
            initialValues={{
              Location: CurrentUserData?.country || '',

              city: CurrentUserData?.city || '',
              area: CurrentUserData?.area || '',
              facebook: CurrentUserData?.facebook || '',
              linkedin: CurrentUserData?.linkedin || '',
              instagram: CurrentUserData?.instagram || '',
              website: CurrentUserData?.website || '',
              github: CurrentUserData?.github || '',
              other: CurrentUserData?.other || '',
            }}
            onSubmit={values => {
              setLoading(true);
              const formdata = new FormData();

              values.other != '' || !values.other
                ? formdata.append('other', values.other)
                : formdata.append('other', '');
              values.github != '' || !values.github
                ? formdata.append('github', values.github)
                : formdata.append('github', '');
              values.website != '' || !values.website
                ? formdata.append('website', values.website)
                : formdata.append('website', '');
              values.facebook != '' || !values.facebook
                ? formdata.append('facebook', values.facebook)
                : formdata.append('facebook', '');
              values.linkedin != '' || !values.linkedin
                ? formdata.append('linkedin', values.linkedin)
                : formdata.append('linkedin', '');
              values.instagram != '' || !values.instagram
                ? formdata.append('instagram', values.instagram)
                : formdata.append('instagram', '');

              values.Location != '' || !values.Location
                ? formdata.append('country', values.Location)
                : formdata.append('country', '');
              values.city != '' || !values.city
                ? formdata.append('city', values.city)
                : formdata.append('city', '');
              values.area != '' || !values.area
                ? formdata.append('area', values.area)
                : formdata.append('area', '');
            
                source?.length != 0
                ? formdata.append('avatar', {
                  uri: source[0]?.uri,
                  type: source[0]?.type,
                  name:
                    Platform.OS == 'ios'
                      ? source[0]?.fileName
                      : source[0]?.name,
                })
                : null;

              console.log(formdata);
              dispatch(AppThunks.doAddCompanyInfo(formdata)).then(
                (res: any) => {
                  setLoading(false);
                },
              );
              // navigation.navigate("ResetPassword")
            }}>
            {(props: any) => (
              <View>
                <Text style={styles.labelStyle1}>Location</Text>
                <TextInput
                  placeholder="Your country"
                  placeholderTextColor={'#B9B9B9'}
                  onChangeText={value =>
                    props?.setFieldValue(`Location`, value)
                  }
                  value={props.values.Location}
                  style={{
                    borderRadius: 16,
                    borderColor: '#1D5EDD',
                    borderWidth: 1,
                    paddingHorizontal: 15,
                    height: 50,
                    fontSize: 14,
                    marginBottom: 10,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                    columnGap: 15,
                  }}>
                  <View style={{width: '49%'}}>
                    <TextInput
                      placeholder="Your city"
                      placeholderTextColor={'#B9B9B9'}
                      style={styles.InputStyleWithOutWidth}
                      onChangeText={value =>
                        props?.setFieldValue(`city`, value)
                      }
                      value={props.values.city}
                    />
                  </View>
                  <View style={{width: '49%'}}>
                    <TextInput
                      placeholder="Your area"
                      placeholderTextColor={'#B9B9B9'}
                      style={styles.InputStyleWithOutWidth}
                      onChangeText={value =>
                        props?.setFieldValue(`area`, value)
                      }
                      value={props.values.area}
                    />
                  </View>
                </View>

                <Text style={styles.labelStyle1}>External links</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                    columnGap: 15,
                  }}>
                  <TextInput
                    placeholder="Facebook"
                    placeholderTextColor={'#B9B9B9'}
                    style={styles.InputStyle}
                    onChangeText={value =>
                      props?.setFieldValue(`facebook`, value)
                    }
                    value={props.values.facebook}
                  />
                  <TextInput
                    placeholder="Linkedin"
                    placeholderTextColor={'#B9B9B9'}
                    style={styles.InputStyle}
                    onChangeText={value =>
                      props?.setFieldValue(`linkedin`, value)
                    }
                    value={props.values.linkedin}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                    columnGap: 15,
                  }}>
                  <TextInput
                    placeholder="Instagram"
                    style={styles.InputStyle}
                    placeholderTextColor={'#B9B9B9'}
                    onChangeText={value =>
                      props?.setFieldValue(`instagram`, value)
                    }
                    value={props.values.instagram}
                  />
                  <TextInput
                    placeholder="Website"
                    placeholderTextColor={'#B9B9B9'}
                    style={styles.InputStyle}
                    onChangeText={value =>
                      props?.setFieldValue(`website`, value)
                    }
                    value={props.values.website}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                    columnGap: 15,
                  }}>
                  <TextInput
                    placeholder="Github"
                    placeholderTextColor={'#B9B9B9'}
                    style={styles.InputStyle}
                    onChangeText={value =>
                      props?.setFieldValue(`github`, value)
                    }
                    value={props.values.github}
                  />
                  <TextInput
                    placeholder="Others"
                    placeholderTextColor={'#B9B9B9'}
                    style={styles.InputStyle}
                    onChangeText={value => props?.setFieldValue(`other`, value)}
                    value={props.values.other}
                  />
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

export default UpdateCompanyInfo;
