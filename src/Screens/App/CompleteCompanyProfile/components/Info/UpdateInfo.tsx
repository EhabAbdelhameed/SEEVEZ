import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
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
// import RNDateTimePicker from '@react-native-community/datetimepicker';
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
const UpdateCompanyInfo = () => {
  const dispatch = useAppDispatch();

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
  const UploadVideoProfile = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.video],
      });

      // The selected media is available in the result.uri
      // dispatch(setImageURL(result[0].uri));

      setSourceVideo(result);
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
          <TouchableOpacity
            style={styles.skipContainer}
            onPress={_handleNavigate}>
            <Text style={styles.skipText}>Skip</Text>
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
            <View>
              <View style={{width: 32}} />
              {/* <RenderSvgIcon icon="ICON2CV" width={32} height={49} /> */}
            </View>
            <View style={[{alignItems: 'center'}]}>
              <Text style={styles.loginText}>Complete Profile</Text>
              <Text style={styles.loginTextSub}>
                Finish setting up your profile to get noticed by recruiters
              </Text>
            </View>
            <View>
              <RenderSvgIcon
                icon="ICONCV"
                width={40}
                height={49}
                style={styles.yellowIcon}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', columnGap: 20, marginBottom: 10}}>
            <TouchableOpacity
              onPress={UploadImageProfile}
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
                {source.length == 0 ? (
                  <CompanyLogo />
                ) : (
                  <Image
                    source={{uri: source[0]?.uri}}
                    style={{width: 86, height: 86, borderRadius: 86}}
                    resizeMode="cover"
                  />
                )}
                {console.log(source)}
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
                O- Project
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
              Location: '',
            }}
            onSubmit={values => {
              setLoading(true);
              const formdata = new FormData();

              formdata.append('other', others);
              formdata.append('github', github);
              formdata.append('website', website);
              formdata.append('facebook', facebook);
              formdata.append('linkedin', linkedin);
              formdata.append('instagram', instagram);

              formdata.append('country', values.Location);
              formdata.append('city', city);
              formdata.append('area', area);
              formdata.append('cv_pdf', {
                uri: sourceVideo[0]?.uri,
                type: sourceVideo[0]?.type,
                name: sourceVideo[0]?.name,
              });
              formdata.append('avatar', {
                uri: source[0]?.uri,
                type: source[0]?.type,
                name: source[0]?.name,
              });

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
                <InputView
                  name="Location"
                  placeholder="Your country"
                  // props={props}
                  {...props}
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
                      onChangeText={e => setCity(e)}
                    />
                  </View>
                  <View style={{width: '49%'}}>
                    <TextInput
                      placeholder="Your area"
                      placeholderTextColor={'#B9B9B9'}
                      style={styles.InputStyleWithOutWidth}
                      onChangeText={e => setArea(e)}
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
                    onChangeText={e => setFacebook(e)}
                  />
                  <TextInput
                    placeholder="Linkedin"
                    placeholderTextColor={'#B9B9B9'}
                    style={styles.InputStyle}
                    onChangeText={e => setLinkedin(e)}
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
                    onChangeText={e => setInstagram(e)}
                  />
                  <TextInput
                    placeholder="Website"
                    placeholderTextColor={'#B9B9B9'}
                    style={styles.InputStyle}
                    onChangeText={e => setWebsite(e)}
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
                    onChangeText={e => setGithub(e)}
                  />
                  <TextInput
                    placeholder="Others"
                    placeholderTextColor={'#B9B9B9'}
                    style={styles.InputStyle}
                    onChangeText={e => setOthers(e)}
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
