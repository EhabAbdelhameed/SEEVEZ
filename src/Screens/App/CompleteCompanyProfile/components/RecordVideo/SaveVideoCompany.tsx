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
import TopHeader from 'screens/App/CompleteProfile/components/Header/TopHeader';
import BottomHeader from 'screens/App/CompleteProfile/components/Header/BottomHeader';

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
         <TopHeader />
        <View style={styles.bottomSection}>
          <BottomHeader />
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
