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
const SaveVideo = () => {
  // const navigation = useNavigation<any>();
  const navigation = useNavigation();
  const {videoPath, key, source}: any = useRoute().params;
  const [loading, setLoading] = React.useState(false);
  const [isPaused, setPaused] = useState(false);
  const dispatch = useAppDispatch();
  const convertFileUriToContentUri = async (videoPath:any) => {
    try {
      // Get the absolute path from the file URI
      const absolutePath = '/' + videoPath.split('/').pop();
  
      // Rename the file to get a new URI
      await RNFS.moveFile(videoPath, absolutePath);
  
      // Get the content URI from the absolute path
      const contentUri = `content://media/external/video/media/${absolutePath}`;
  
      return contentUri;
    } catch (error) {
      console.error('Error converting file URI to content URI:', error);
      return null;
    }
  };
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const changeDone = useSelector(selectDone);
  useEffect(() => {
    console.log('0000', videoPath);
    // console.log(source[0]?.uri)
    changeDone ? navigation.navigate('CompleteProfileScreen') : null;
  }, [changeDone]);
  const saveVideoFun = () => {
    if (key == 1) {
      setLoading(true);
      const formdata = new FormData();
      convertFileUriToContentUri(videoPath)
      .then((contentUri) => {
        console.log('Content URI hhhhhh:', contentUri);
        formdata.append('media', {
          uri: contentUri,     
          type: 'video/mp4',
          name: 'VID-20240121-WA0052.mp4',
        });
        console.log("key",JSON.stringify(formdata))
        dispatch(AppThunks.doUploadCV(formdata)).then((res: any) => {
          dispatch(AppThunks.GetProfileInfo());
          setLoading(false);
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
     
     
    } else {
      setLoading(true);
      const formdata = new FormData();
      
      formdata.append('media', {
        uri: source[0]?.uri,
        type: source[0]?.type,
        name: source[0]?.name,
      });
      console.log("2222",JSON.stringify(formdata))
      dispatch(AppThunks.doUploadCV(formdata)).then((res: any) => {
        dispatch(AppThunks.GetProfileInfo());
        setLoading(false);
      });
    }
  };
  const handleVideoLoad = () => {
    // Video has loaded, you can now play it
    setTimeout(() => {
      setPaused(true);
    }, 100);

    // console.log(source)
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
        <View style={styles.logoContainer}>
          <TouchableOpacity
            style={styles.skipContainer}
            onPress={_handleNavigate}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          {/* <BigLogo height={30} width={96} style={{marginLeft: 70}} />
           */}
          <Image
            source={require('../../../../../assets/images/seevezlogo.png')}
            style={{width: 100, height: 30}}
          />
        </View>
        <View style={styles.circles}>
          <RenderSvgIcon icon="CIRCLELOGIN" width={220} height={160} />
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.blueCircle}>
            <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
          </View>
          <View style={styles.loginTextContainer}>
            <View style={{width: 32}}>
              {/* <RenderSvgIcon icon="ICON2CV" width={32} height={48} /> */}
            </View>
            <View style={[{alignItems: 'center'}]}>
              <Text style={[styles.loginText, {fontSize: 24}]}>
                Complete Profile
              </Text>
              <Text style={[styles.loginTextSub, {fontSize: 13}]}>
                Finish setting up your profile to get noticed by recruiters
              </Text>
            </View>
            <View>
              <RenderSvgIcon
                icon="ICONCV"
                width={40}
                height={48}
                style={styles.yellowIcon}
              />
            </View>
          </View>
          <View style={styles.topContainer1}></View>
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
