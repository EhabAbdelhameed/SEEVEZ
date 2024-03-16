import {Linking, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from 'components/molecules/Header';
import styles from '../styles';

import {useNavigation, useRoute} from '@react-navigation/native';

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
import DocumentPicker from 'react-native-document-picker';
const SecondApplayPage = () => {
  // console.log(CurrentUserData)
  const {data}: any = useRoute().params;
  // console.log(JSON.stringify(data))
  const User = useSelector(selectUser);
  const navigation = useNavigation<any>();
  const [source, setSource] = useState<any>([]);
  const uploadFile = async () => {
    try {
      const res: any = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });

      setSource(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Canceled');
      } else {
        console.log('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const navigateToNextPage =()=>{
    let obj={
      email:data?.email,
      phone:data?.phone,
      cv_pdf:source?.length!=0?User?.cv_pdf:source,
    }

    navigation.navigate('ThirdApplayPage',{data:obj})
  }
  // console.log(JSON.stringify(User))
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
            {User?.cv_pdf == null ? null : (
              <TouchableOpacity
                onPress={() => Linking.openURL(User?.cv_pdf?.fileUrl)}
                style={styles.InputStyleNoWidth1}>
                <PDF />
                <View>
                  <Text
                    numberOfLines={1}
                    style={{fontSize: 16, color: appColors.primary}}>
                    {User?.cv_pdf?.attributes?.name}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{fontSize: 12, color: appColors.primary}}>
                    {(
                      parseInt(User?.cv_pdf?.attributes?.size) / 1048576
                    ).toFixed(4)}{' '}
                    MB
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
            )}

            <TouchableOpacity
              onPress={uploadFile}
              style={styles.InputStyleNoWidth1}>
              <UploadYourCv width={24} height={24} />
              <View>
                {source?.length==0?
                <Text
                  numberOfLines={1}
                  style={{fontSize: 20, color: appColors.primary}}>
                  Upload file
                </Text>: <Text
                  numberOfLines={1}
                  style={{fontSize: 20, color: appColors.primary}}>
                  {source[0].name}
                </Text>}
              </View>
            </TouchableOpacity>
            <View
              style={{
                height:
                  User?.cv_pdf == null
                    ? appSizes.height * 0.45
                    : appSizes.height * 0.33,
              }}
            />
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
                  onPress={_handleNavigate}>
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
                  onPress={navigateToNextPage}
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

export default SecondApplayPage;
