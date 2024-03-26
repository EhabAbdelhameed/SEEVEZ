import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
// import { Calendar } from 'react-native-calendars';
import Header from './components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from 'src/globalStyle';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors, appSizes} from 'theme';
// import {Calendar} from 'react-native-calendars';
import {RenderSvgIcon} from 'components/atoms/svg';
import {Agenda} from 'react-native-calendars';
import { styles } from './style';
const MyCalendarScreen = () => {
  const CustomKnob = () => {
    return null; // Returning null to remove the loader
  };
  const [selectedDay, setSelectedDay] = useState(null);
  const [items, setItems] = useState({
    '2024-03-25': [{name: 'Event 1', time: '10:00 AM'}],
    '2024-03-26': [
      {name: 'Event 2', time: '2:00 PM'},
      {name: 'Event 3', time: '4:00 PM'},
    ],
    '2024-03-27': [{name: 'Event 4', time: '11:00 AM'}],
  });

  const handleDayPress = (day: any) => {
    // You can update items based on the selected day
    // For demonstration, let's set events for the selected day
   
      
    
    let obj={
     
      [day.dateString]:[{name: 'New Event', time: '12:00 PM'}]
    }
    setItems(obj)
  };
  const renderDay = (day: any, item: any) => {
    // Ensure day object is defined before accessing properties
    if (!day) {
      return null;
    }
  
    // Apply custom style to selected day if it matches the selectedDay
    const selectedStyle = selectedDay === day.dateString ? styles.selectedDay : null;
  
    return (
      <View style={[styles.dayContainer, selectedStyle]}>
        <Text style={styles.dayText}>{day.day}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView edges={['top']} style={[globalStyles.screen]}>
      <Header />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          // alignItems: 'center',
          // paddingBottom: 30,
          paddingHorizontal: appSizes.padding_m,
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
        <Agenda
            items={items}
            // Pass renderDay prop to customize day rendering
            renderDay={renderDay}
            onDayPress={handleDayPress}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default MyCalendarScreen;
