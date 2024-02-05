import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {styles} from './styles';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import DonotHaveAccountSection from '../../../../../Components/molecules/DonotHaveAccountSection';
import AuthTopSection from '../../../../../Components/molecules/AuthTopSection';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../../../theme/appColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../../../../../Components/molecules/Button';

import {BigLogo, VIDEOICON} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {Formik} from 'formik';
import {appSizes} from 'theme/appSizes';
import Video from 'react-native-fast-video';
import AppThunks from 'src/redux/app/thunks';
import {useAppDispatch} from 'src/redux/store';
import {useSelector} from 'react-redux';
import {selectDone} from 'src/redux/app';
import RNFS from 'react-native-fs';
import TopHeader from '../Header/TopHeader';
import BottomHeader from '../Header/BottomHeader';
const SaveVideo = () => {
  // const navigation = useNavigation<any>();
  const navigation = useNavigation();
  const {videoPath, key, source}: any = useRoute().params;
  const [loading, setLoading] = React.useState(false);
  const [isPaused, setPaused] = useState(false);
  const dispatch = useAppDispatch();

  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const changeDone = useSelector(selectDone);
  useEffect(() => {
    console.log('0000', videoPath);
    // console.log(source[0]?.uri)
    changeDone&&key==3 ? navigation.navigate('MyVideoCV'):changeDone?navigation.navigate('CompleteProfileScreen') : null;
  }, [changeDone]);
  const saveVideoFun = () => {
    if (key == 1) {
      setLoading(true);
      const formdata = new FormData();
      formdata.append('media', {
        uri: 'file://' + videoPath,
        type: 'video/mp4',
        name: 'video.mp4',
      });
      dispatch(AppThunks.doUploadCV(formdata)).then((res: any) => {
        dispatch(AppThunks.GetProfileInfo());
        setLoading(false);
      });
    } else {
      setLoading(true);
      const formdata = new FormData();
      //  console.log(source)
      formdata.append('media', {
        uri: source?.assets[0]?.uri,
        type: source?.assets[0]?.type,
        name: source?.assets[0]?.fileName,
      });
      console.log('2222', JSON.stringify(formdata));
      dispatch(AppThunks.doUploadCV(formdata)).then((res: any) => {
        dispatch(AppThunks.GetProfileInfo());
        setLoading(false);
      });
    }
  };
  const handleVideoLoad = () => {
    setTimeout(() => {
      setPaused(true);
    }, 100);
  };
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
        <TopHeader />
        <View style={styles.bottomSection}>
          <BottomHeader />

          <View style={styles.CardContainer1}>
            <Video
              resizeMode="cover"
              //   controls={true}
              paused={isPaused}
              source={{uri: videoPath}}
              style={{
                width: '100%',
                height: 420,
                borderRadius: 16,
                marginBottom: 20,
              }}
              onLoad={handleVideoLoad}
            />
            <View style={styles.topContainer2}>
              <TouchableOpacity
                onPress={() => setPaused(!isPaused)}
                style={[
                  styles.secContainer,
                  {
                    backgroundColor: appColors.white,
                  },
                ]}>
                <VIDEOICON />
              </TouchableOpacity>
            </View>
          </View>
          <Button loading={loading} text={'Done'} onPress={saveVideoFun} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SaveVideo;
