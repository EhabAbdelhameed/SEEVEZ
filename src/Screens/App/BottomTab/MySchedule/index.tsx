import React from 'react';
import {View} from 'react-native';
// import { Calendar } from 'react-native-calendars';
import Header from './components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from 'src/globalStyle';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { appSizes } from 'theme';

const MyCalendarScreen = () => {
  return (
    <SafeAreaView edges={['top']} style={[globalStyles.screen]}>
      <Header />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          alignItems: 'center',
          // paddingBottom: 30,
          paddingHorizontal: appSizes.padding_m,
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default MyCalendarScreen;
