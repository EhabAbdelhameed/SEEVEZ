import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from 'src/globalStyle';
import {appColors} from 'theme';
import Header from './components/Header';
import Content from './components/Content';
import Templetes from './components/Templetes';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectAccessToken, selectDone, selectPhotoData} from 'src/redux/app';
import AuthSlice from 'src/redux/auth';
import {useAppDispatch} from 'src/redux/store';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';

const CreatePollLink = () => {
  const dispatch = useAppDispatch();
  const changeDone = useSelector(selectDone);
  const navigation = useNavigation();
  // console.log(changeDone)
  useEffect(() => {
    changeDone ? navigation.navigate('Reels') : null;
  }, [changeDone]);
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();

  return (
    <SafeAreaView
      edges={['top']}
      style={[globalStyles.screen, {direction: lang == 'ar' ? 'rtl' : 'ltr'}]}>
      <Header />
      <KeyboardAwareScrollView
        contentContainerStyle={
          {
            // alignItems: "center",
            // paddingBottom: 20,
          }
        }
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}>
        <Content />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default CreatePollLink;
