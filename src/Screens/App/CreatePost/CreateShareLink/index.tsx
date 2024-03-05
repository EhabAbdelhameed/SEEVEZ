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
import {useAppDispatch} from 'src/redux/store';
import AppSlice, {selectAccessToken, selectDone} from 'src/redux/app';
import {useSelector} from 'react-redux';
import AuthSlice from 'src/redux/auth';

const CreateShareLink = () => {
  // const {audioData}: any = useRoute().params;
  // console.log("123,",audioData)
  const dispatch = useAppDispatch();
  const changeDone = useSelector(selectDone);
 

  const navigation = useNavigation();
  useEffect(() => {
    changeDone ? navigation.navigate('Reels') : null;
  }, [changeDone]);
 
  return (
    <SafeAreaView edges={['top']} style={[globalStyles.screen]}>
      <Header />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: 20,
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}>
        <Content />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default CreateShareLink;
