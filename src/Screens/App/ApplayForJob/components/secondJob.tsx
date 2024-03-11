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
  FirstApplay,
  PDF,
  SecondApplay,
  UploadYourCv,
} from 'assets/Svgs';
import UserHeader from './UserHeader';
import Formick from './Formick';
import {appColors, appSizes} from 'theme';
import Button from 'components/molecules/Button';

const SecondApplayPage = () => {
  // console.log(CurrentUserData)
  const User = useSelector(selectUser);

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
          <SecondApplay width={'100%'} height={20} />
          <View style={{marginTop: 30, marginBottom: 30}}>
            <Text
              style={{
                fontSize: 22,
                fontFamily: 'Noto Sans',
                color: '#000',
                fontWeight: '700',
              }}>
              Upolad your CV
            </Text>
            <TouchableOpacity style={styles.InputStyleNoWidth1}>
              <PDF />
              <View>
                <Text
                  numberOfLines={1}
                  style={{fontSize: 16, color: appColors.primary}}>
                  Justin Dokidis CV 2023
                </Text>
                <Text
                  numberOfLines={1}
                  style={{fontSize: 12, color: appColors.primary}}>
                  1 MB
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                }}>
                <View style={styles.Circle}>
                  <DownloadIcon />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                }}>
                <View style={styles.Circle}>
                  <View style={styles?.innerCircle} />
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.InputStyleNoWidth1}>
              <PDF />
              <View>
                <Text
                  numberOfLines={1}
                  style={{fontSize: 16, color: appColors.primary}}>
                  Justin Dokidis CV 2021
                </Text>
                <Text
                  numberOfLines={1}
                  style={{fontSize: 12, color: appColors.primary}}>
                  1 MB
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                }}>
                <View style={styles.Circle}>
                  <DownloadIcon />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                }}>
                <View style={styles.Circle}>
                  {/* <View style={styles?.innerCircle} /> */}
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.InputStyleNoWidth1}>
              <UploadYourCv width={24} height={24} />
              <View>
                <Text
                  numberOfLines={1}
                  style={{fontSize: 20, color: appColors.primary}}>
                  Upload file
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{height: appSizes.height * 0.22}} />
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

export default SecondApplayPage;
