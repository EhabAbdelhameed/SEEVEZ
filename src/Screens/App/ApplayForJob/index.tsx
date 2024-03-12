import {ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from 'components/molecules/Header';
import styles from './styles';

import {useNavigation} from '@react-navigation/native';

import {useAppDispatch} from 'src/redux/store';
import {useSelector} from 'react-redux';
import AuthSlice, {selectUser} from 'src/redux/auth';
import AppSlice, {selectAccessToken} from 'src/redux/app';
import AppThunks from 'src/redux/app/thunks';
import ApplayHeader from './components/Header';
import {StatusBar} from 'react-native';
import {RenderSvgIcon} from 'components/atoms/svg';
import {FirstApplay} from 'assets/Svgs';
import UserHeader from './components/UserHeader';
import Formick from './components/Formick';

const ApplayForJob = () => {
  // console.log(CurrentUserData)
  const User =useSelector(selectUser)

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
        <View style={{ marginTop: 40}}>
          <FirstApplay width={'100%'} height={20} />
          <View style={{marginTop: 30,marginBottom:30}}>
            <Text
              style={{
                fontSize: 22,
                fontFamily: 'Noto Sans',
                color: '#000',
                fontWeight: '700',
              }}>
              Contact info
            </Text>
            <UserHeader/>
          </View>
        
        </View>
        <Formick/>
      </View>
    </SafeAreaView>
  );
};

export default ApplayForJob;