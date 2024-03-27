import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Calendar  } from 'react-native-big-calendar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from 'src/globalStyle';
import { appSizes } from 'theme';
import Header from './components/Header';

const MyCalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const calendarRef = useRef(null);
  // Example events data
  const events = [
    {
      title: 'Meeting',
      start: new Date(2024, 3, 25, 10, 0), // year, month (0-based), day, hour, minute
      end: new Date(2024, 3, 25, 11, 0),
    },
    {
      title: 'Party',
      start: new Date(2024, 3, 26, 14, 0),
      end: new Date(2024, 3, 26, 17, 0),
    },
  ];
  const handleDateChange = (date:any) => {
    setSelectedDate(date);
  };
  const handleScroll = (event:any) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    // Calculate the visible month based on the scroll position
    // Update the displayed month and year accordingly
    // ...
  };
  return (
    <SafeAreaView edges={['top']} style={[globalStyles.screen,{backgroundColor:'white'}]}>
    <Header />
    <KeyboardAwareScrollView
      contentContainerStyle={{
        // alignItems: 'center',
        // paddingBottom: 30,
        paddingBottom: 100,
      }}
      enableOnAndroid={true}
      keyboardShouldPersistTaps={'handled'}
      enableResetScrollToCoords={false}
      showsVerticalScrollIndicator={false}>
    <View style={{ flex: 1 }}>
    {/* <Text style={{ textAlign: 'center', fontSize: 20, paddingVertical: 10 }}>
        {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </Text> */}
      {/* <ScrollView
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ref={calendarRef}
        style={{flex:1,width:'100%'}}
      > */}
    <Calendar
        events={events}
        height={500}
        // horizontal={true} // Optional: specify the height of the calendar
        // Customize the appearance of events using the eventCellStyle prop
        eventCellStyle={(event) => ({
          backgroundColor: event.title === 'Meeting' ? 'blue' : 'green',
        })}
        // mode="month"
        // Handle event press using the onEventPress prop
        onEventPress={(event:any) => console.log('Event pressed:', event)}
        // Change background color to white
      
        // Enable scrolling and navigation between days
        scrollEnabled={true}
        
      
        ampm={true}
        onDateChange={handleDateChange}
        titleFormat={'MMMM yyyy'}
      />
      {/* </ScrollView> */}
    </View>
    </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default MyCalendarScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set background color to white
  },
  
});
