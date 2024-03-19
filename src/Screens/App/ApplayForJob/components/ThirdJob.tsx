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

const ThirdApplayPage = (questions:any) => {
  // console.log(CurrentUserData)
  const {data}: any = useRoute().params;
  console.log(JSON.stringify(data));

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

  const navigateToNextPage = () => {
    let type3 = 0;
    let type1 = 0;
    if (data?.arrayType3?.length != 0) {
      type3++;
    } else if (data?.arrayType1?.length != 0) {
      type1++;
    } else {
    }
    let obj = {
      job_id: data?.job_id,
      email: data?.email,
      phone: data?.phone,
      cv_pdf: source?.length != 0 ? User?.cv_pdf : source,
      arrayType1: data?.arrayType1,
      arrayType2: data?.arrayType2,
      arrayType3: data?.arrayType3,
    };
    if (type3 != 0) {
      navigation.navigate('FourthApplayPage', {data: obj});
    } else {
      if (type1 != 0) {
        navigation.navigate('FifthApplayPage', {data: obj});
      }
    }
  };
  const submit = () => {
    setLoading(true);

    const formdata = new FormData();
    formdata.append('job_id', data?.job_id);
    for (let i = 0; i < data?.questions?.length; i++) {
      if (i >= 3) {
        break;
      } else {
        formdata.append(`array[${i}][question_id]`, data[i].id);
        formdata.append(`array[${i}][type]`, data[i].type);
      }
    }
    formdata.append(`array[3][question_id]`, data?.arrayType2[0]?.id);
    formdata.append(`array[3][type]`, data?.arrayType2[0]?.type);
    // formdata.append(`array[3][answer]`, data?.email);

    formdata.append(`array[0][answer]`, data?.email);
    formdata.append(`array[1][answer]`, data?.phone);
    if (Array.isArray(data?.cv_pdf)) {
      formdata.append('array[2][answer]', {
        uri: source[0]?.uri,
        type: source[0]?.type,
        name: source[0]?.name,
      });
    } else{
      formdata.append('array[2][answer]', User?.cv_pdf);
    }

    console.log(JSON.stringify(formdata));
    dispatch(AppThunks.doApplayQuestion(formdata)).then((res: any) => {
      setLoading(false);
    });
  };
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
          <ThirdApplay width={'100%'} height={20} />
          <View style={{marginTop: 30, marginBottom: 30}}>
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
            {/* <Text>You can always record again if needed.</Text> */}
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
                <Button
                  onPress={() => {
                    navigation.navigate('FourthApplayPage');
                  }}
                  text={'Next'}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ThirdApplayPage;
