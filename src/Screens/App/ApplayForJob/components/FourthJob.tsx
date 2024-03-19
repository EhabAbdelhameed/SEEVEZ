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
  FourthApplay,
  PDF,
  RecordAudio,
  SecondApplay,
  ThirdApplay,
  UploadYourCv,
} from 'assets/Svgs';
import UserHeader from './UserHeader';
import Formick from './Formick';
import {appColors, appSizes} from 'theme';
import Button from 'components/molecules/Button';

const FourthApplayPage = (questions:any) => {
  // console.log(CurrentUserData)
  const User = useSelector(selectUser);
  const navigation = useNavigation<any>();
  const data=['Yes','No']
  const [buttonIndexSmoker, setButtonIndexSmoker] = React.useState(0);
  const [smoker, setSmoker] = useState(false);
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
          <FourthApplay width={'100%'} height={20} />
          <View style={{marginTop: 30, marginBottom: 30}}>
            <Text
              style={{
                fontSize: 22,
                fontFamily: 'Noto Sans',
                color: '#000',
                fontWeight: '700',
              }}>
             Have you completed the following level of education: Bachelor's Degree?
            </Text>
            <View style={{justifyContent:'flex-start',alignItems:'flex-start',marginTop:10}}>
            {data?.map((item, index) => (
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={() => {
                        setButtonIndexSmoker(index), setSmoker(!smoker);
                      }}>
                      <View style={[styles.Circle,{marginTop:15}]}>
                        {buttonIndexSmoker == index ? (
                          <View style={styles?.innerCircle} />
                        ) : null}
                      </View>

                      <Text
                        style={{
                          color: '#000',
                          marginLeft: 8,
                          fontFamily: 'Noto Sans',
                        }}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ))}
            
            </View>
            <View style={{height: appSizes.height * 0.37}} />
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
                <Button onPress={() => {navigation.navigate("FifthApplayPage")}} text={'Next'} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FourthApplayPage;
