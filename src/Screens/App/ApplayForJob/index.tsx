import {ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from 'components/molecules/Header';
import styles from './styles';

import {useNavigation, useRoute} from '@react-navigation/native';

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
import ApplySteps from './components/ApplaySteps';

const ApplayForJob = () => {
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
      
        <Formick/>
        
      </View>
    </SafeAreaView>
  );
};

export default ApplayForJob;
