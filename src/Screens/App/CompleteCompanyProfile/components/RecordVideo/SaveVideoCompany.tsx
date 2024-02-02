import {View, Text, TouchableOpacity, TextInput, Alert, Image} from 'react-native';
import React, { useCallback, useEffect } from 'react';
import {styles} from './styles';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import DonotHaveAccountSection from '../../../../../Components/molecules/DonotHaveAccountSection';
import AuthTopSection from '../../../../../Components/molecules/AuthTopSection';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../../../theme/appColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../../../../../Components/molecules/Button';

import {BigLogo} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {Formik} from 'formik';
import { appSizes } from 'theme/appSizes';
import Video from 'react-native-fast-video';
import AppThunks from 'src/redux/app/thunks';
import { useAppDispatch } from 'src/redux/store';
import { useSelector } from 'react-redux';
import { selectDone } from 'src/redux/app';

const SaveVideoCompany = () => {
  // const navigation = useNavigation<any>();
  const navigation = useNavigation()
  const {videoPath,key,source}: any = useRoute().params;
  const [loading, setLoading] = React.useState(false);
  const dispatch = useAppDispatch();
  const _handleNavigate = useCallback(
      () => {
          navigation.goBack();
      },
      [],
  )
  const changeDone = useSelector(selectDone);
  useEffect(() => {
    changeDone ? navigation.navigate('CompleteCompanyProfileScreen'): null;
  }, [changeDone]);
  const saveVideoFun =()=>{

    if (key==1){
      setLoading(true)
      const formdata = new FormData();

      formdata.append('media', {
        uri: videoPath,
        type: 'video/mp4',
        name:" VID-20240121-WA0052.mp4",
      })
      dispatch(AppThunks.doUploadCV(formdata)).then((res: any) => {
        dispatch(AppThunks.GetProfileInfo())
        setLoading(false);
        
      });
    
    }else{
      setLoading(true)
      const formdata = new FormData();

      formdata.append('media', {
        uri: source[0]?.uri,
        type: source[0]?.type,
        name: source[0]?.name,
      })
      dispatch(AppThunks.doUploadCV(formdata)).then((res: any) => {
        dispatch(AppThunks.GetProfileInfo())
        setLoading(false);
      
      });
    }
    // console.log(source)

  }
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          backgroundColor: appColors.bg,
          marginTop:40,
          
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
            <View style={{width:32}}>
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
          <Video
              resizeMode="cover"
            //   controls={true}
              source={{uri: videoPath}}
              style={{width:'100%',height:320,borderRadius:16,marginBottom:20}}
            
            />
            <Button loading={loading}  text={'Done'} onPress={saveVideoFun} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SaveVideoCompany;
