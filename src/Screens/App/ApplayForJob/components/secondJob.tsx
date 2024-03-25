import {Linking, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
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
  SecondApplay,
  UploadYourCv,
} from 'assets/Svgs';
import UserHeader from './UserHeader';
import Formick from './Formick';
import {appColors, appSizes} from 'theme';
import Button from 'components/molecules/Button';
import DocumentPicker from 'react-native-document-picker';
import ApplySteps from './ApplaySteps';
const SecondApplayPage = () => {
  const changeDone = useSelector(selectDone);
  // console.log(changeDone)
  useEffect(() => {
    changeDone ? navigation.navigate('Bag') : null;
  }, [changeDone]);
  // console.log(CurrentUserData)
  const {data, questions}: any = useRoute().params;

  const dispatch = useAppDispatch();
  const User = useSelector(selectUser);
  // console.log(User?.cv_pdf)
  const navigation = useNavigation<any>();
  const [source, setSource] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [buttonIndex, setButtonIndex] = useState(0);
  const uploadFile = async () => {
    try {
      const res: any = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });

      setSource(res);
      // console.log("RESS",JSON.stringify(res))
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
  const navigateToNextPage = () => {
    let obj = {
      job_id: data?.job_id,
      email: data?.email,
      phone: data?.phone,
      cv_pdf: buttonIndex == 0 ? User?.cv_pdf : source,

      questions: questions,
    };

    navigation.navigate('DynamicQuestionsComponent', {data: obj});
  };
  const submit = () => {
    setLoading(true);

    const formdata = new FormData();
    formdata.append('job_id', data?.job_id);
    for (let i = 0; i < questions?.length; i++) {
      if (i > 2) {
        break;
      } else {
        formdata.append(`array[${i}][question_id]`, questions[i].id);
        formdata.append(`array[${i}][type]`, questions[i].type);
      }
    }
    formdata.append(`array[0][answer]`, data?.email);
    formdata.append(`array[1][answer]`, data?.phone);
    if (buttonIndex != 0) {
      formdata.append('array[2][answer]', {
        uri: source[0]?.uri,
        type: source[0]?.type,
        name: source[0]?.name,
      });
    } else {
      formdata.append('array[2][answer]', JSON.stringify(User?.cv_pdf));
    }
    // console.log(JSON.stringify(formdata));
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
        <View style={{}}>
          <ApplySteps question={questions} CurrentIndex={1} />
          <View style={{marginTop: 30, marginBottom: 30}}>
            <Text
              style={{
                fontSize: 22,
                fontFamily: 'Noto Sans',
                color: '#000',
                fontWeight: '700',
              }}>
              {questions[2]?.question}
            </Text>
            {User?.cv_pdf == null ? null : (
              <TouchableOpacity
                onPress={() => setButtonIndex(0)}
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
                    {buttonIndex == 0 ? (
                      <View style={styles?.innerCircle} />
                    ) : null}
                  </View>
                </TouchableOpacity>
              </TouchableOpacity>
            )}
            {source?.length == 0 ? null : (
              <TouchableOpacity
                onPress={() => setButtonIndex(1)}
                style={styles.InputStyleNoWidth1}>
                <PDF />
                <View>
                  <Text
                    numberOfLines={1}
                    style={{fontSize: 16, color: appColors.primary}}>
                    {source[0]?.name}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{fontSize: 12, color: appColors.primary}}>
                    {(
                      parseInt(source[0]?.size) / 1048576
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
                    {buttonIndex == 1 ? (
                      <View style={styles?.innerCircle} />
                    ) : null}
                  </View>
                </TouchableOpacity>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              onPress={uploadFile}
              style={styles.InputStyleNoWidth1}>
              <UploadYourCv width={24} height={24} />
              <View>
                {source?.length == 0 ? (
                  <Text
                    numberOfLines={1}
                    style={{fontSize: 20, color: appColors.primary}}>
                    Upload file
                  </Text>
                ) : (
                  <Text
                    numberOfLines={1}
                    style={{fontSize: 20, color: appColors.primary}}>
                    {source[0].name}
                  </Text>
                )}
              </View>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 11,
                fontFamily: 'Noto Sans',
                color: '#000',
                fontWeight: '400',
                // marginBottom: 10,
              }}>
              Upload files (Image, PDF, Video) max (2 MB)
            </Text>
            <View
              style={{
                height:
                  User?.cv_pdf == null
                    ? appSizes.height * 0.43
                    : appSizes.height * 0.31,
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
                  loading={loading}
                  onPress={questions?.length == 3 ? submit : navigateToNextPage}
                  text={questions?.length == 3 ? 'Submit' : 'Next'}
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
