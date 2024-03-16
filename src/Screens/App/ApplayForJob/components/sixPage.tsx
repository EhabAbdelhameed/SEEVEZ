import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from 'components/molecules/Header';
import styles from '../styles';

import {useNavigation} from '@react-navigation/native';

import {useAppDispatch} from 'src/redux/store';
import {useSelector} from 'react-redux';
import AuthSlice, {selectUser} from 'src/redux/auth';
import AppSlice, {selectAccessToken} from 'src/redux/app';
import AppThunks from 'src/redux/app/thunks';
import ApplayHeader from './Header';
import {StatusBar} from 'react-native';
import {RenderSvgIcon} from 'components/atoms/svg';
import {
  DownloadIcon,
  FifthApplay,
  FirstApplay,
  FourthApplay,
  PDF,
  RecordAudio,
  SecondApplay,
  SixApplay,
  ThirdApplay,
  UploadYourCv,
} from 'assets/Svgs';
import UserHeader from './UserHeader';

import {appColors, appSizes} from 'theme';
import Button from 'components/molecules/Button';
import {Formik} from 'formik';
import CustomInput from 'components/molecules/Input/CustomInput';

const SixApplayPage = () => {
  // console.log(CurrentUserData)
  const User = useSelector(selectUser);
  const navigation = useNavigation<any>();
  const data = ['Yes', 'No'];
  
  return (
    <SafeAreaView edges={['top']} style={[styles.Container]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <ApplayHeader />

      <View style={styles.bottomSection}>
        <View style={{flexDirection: 'row'}}>
          <View style={{right: 20, position: 'absolute', top: -25}}>
            <RenderSvgIcon
              icon="ICONCV"
              width={40}
              height={48}
              style={styles.yellowIcon}
            />
          </View>
          <View style={styles.blueCircle}>
            <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
          </View>
        </View>
        <View style={{marginTop: 40}}>
          <SixApplay width={'100%'} height={20} />
          <View style={{marginTop: 30, marginBottom: 30}}>
            <Text
              style={{
                fontSize: 22,
                fontFamily: 'Noto Sans',
                color: '#000',
                fontWeight: '700',
              }}>
              Additional Questions
            </Text>
            <Formik
              initialValues={{About: ''}}
              onSubmit={values => {
                // navigation.navigate("ResetPassword")
              }}>
                {(props: any) => (
              <>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Noto Sans',
                  color: '#000',
                  fontWeight: '400',
                  marginTop: 10,
                  marginBottom:10,
                }}>
                What are your salary expectations?
              </Text>
              <CustomInput
                {...props}
                Label={'first'}
                placeholder="Write here.."
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Noto Sans',
                  color: '#000',
                  fontWeight: '400',
                  marginTop: 10,
                  marginBottom:10,
                }}>
               Portfolio link
              </Text>
              <CustomInput
                {...props}
                Label={'first'}
                placeholder="Write here.."
              />
             
                    </>
              )}
            </Formik>

            <View style={{height: appSizes.height * 0.28}} />
            <View style={{flexDirection: 'row', columnGap: 10}}>
              <View style={{width: '49%'}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: appColors.bg,
                    borderWidth: 1,
                    borderColor: appColors.primary,
                    paddingVertical: 10,
                    borderRadius: 16,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {}}>
                  <Text
                    style={{
                      color: appColors.primary,
                      fontSize: 18,
                      fontWeight: '500',
                      textAlign: 'center',
                      fontFamily: 'Noto Sans',
                    }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{width: '49%'}}>
                <Button onPress={() => {}} text={'Next'} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SixApplayPage;
