import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';

import ContainerUsers from './components/ContainerUsers';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';

import AppThunks from 'src/redux/app/thunks';
import {useAppDispatch, useAppSelector} from 'src/redux/store';
import {
  selectAccessToken,
  selectDone,
  selectFollowingList,
  selectListUsers,
  selectMyJob,
  selectOneJob,
} from 'src/redux/app';

import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AuthSlice from 'src/redux/auth';
import {useTranslation} from 'react-i18next';
import {selectLang} from 'src/redux/lang';
import Header from './components/Header';
import {appSizes} from 'theme/appSizes';
import {globalStyles} from 'src/globalStyle';

const PreviewJob = (props: any) => {

  const dispatch = useAppDispatch();
  const navigation = useNavigation();
 
  const changeDone = useSelector(selectDone);
 
  // console.log(changeDone)
  useEffect(() => {
    changeDone ? navigation.navigate('MyJob') : null;
  }, [changeDone]);
 
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
 

  return (
    <SafeAreaView
      edges={['top']}
      style={[globalStyles.screen, {direction: lang == 'en' ? 'ltr' : 'rtl'}]}>
      <View style={styles.screen}>
        <Header Title={'Review post'} onPress={() => navigation.goBack()} />
        <KeyboardAwareScrollView
          contentContainerStyle={{
            alignItems: 'center',
            flex:1,
            // paddingBottom: 30,
            paddingHorizontal: appSizes.padding_m,
          }}
          enableOnAndroid={true}
          keyboardShouldPersistTaps={'handled'}
          enableResetScrollToCoords={false}
          showsVerticalScrollIndicator={false}>
        
            <ContainerUsers />
       
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PreviewJob;
