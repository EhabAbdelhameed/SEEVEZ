import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from 'components/molecules/Header';
import styles from '../styles';

import {useNavigation, useRoute} from '@react-navigation/native';

import {useAppDispatch} from 'src/redux/store';
import {useSelector} from 'react-redux';
import AuthSlice, {selectUser} from 'src/redux/auth';
import AppSlice, {selectAccessToken, selectDone} from 'src/redux/app';
import AppThunks from 'src/redux/app/thunks';
import ApplayHeader from './Header';
import {StatusBar} from 'react-native';
import {RenderSvgIcon} from 'components/atoms/svg';
import {
  DownloadIcon,
  FirstApplay,
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

const ThirdApplayPage = (questions:any,currentQuestionIndex:any) => {
  // console.log(CurrentUserData)
  const {data}: any = useRoute().params;
  // console.log(JSON.stringify(data));

  const User = useSelector(selectUser);
  const navigation = useNavigation<any>();
  const changeDone = useSelector(selectDone);
  // console.log(changeDone)
  useEffect(() => {
    changeDone ? navigation.navigate('Bag') : null;
  }, [changeDone]);
  const dispatch = useAppDispatch();

  const [source, setSource] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  return (
    <View >
     <View style={{marginTop: 10}}>
       
          <View style={{marginTop: 10, marginBottom: 30}}>
            <Text
              style={{
                fontSize: 22,
                fontFamily: 'Noto Sans',
                color: '#000',
                fontWeight: '700',
              }}>
              Tell us briefly about yourself. and your working experience
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Noto Sans',
                color: '#000',
                fontWeight: '400',
              }}>
              Max duration is 3 minutes
            </Text>

            <TouchableOpacity style={styles.InputStyleNoWidth1}>
              <RecordAudio width={30} height={30} />
              <View>
                <Text
                  numberOfLines={1}
                  style={{fontSize: 20, color: appColors.primary}}>
                  record
                </Text>
              </View>
            </TouchableOpacity>
         
          
          </View>
        </View>
  
    </View>
  );
};

export default ThirdApplayPage;
