import React from 'react';
import { View } from 'react-native';
// import { Calendar } from 'react-native-calendars';
import Header from './components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from 'src/globalStyle';

const MyCalendarScreen = () => {

  return (
    <SafeAreaView
    edges={['top']}
    style={[globalStyles.screen]}>
    <View style={{ flex: 1 }}>
        <Header/>
   
    </View>
    </SafeAreaView>
  );
};

export default MyCalendarScreen;
