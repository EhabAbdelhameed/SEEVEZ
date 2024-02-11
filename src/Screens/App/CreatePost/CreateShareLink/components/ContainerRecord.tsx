import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {styles} from '../styles';
// import Sound from 'react-native-sound';
const ContainerRecord = (key: any,audioData:any) => {
  console.log("from tamp",audioData)
  // let sound: Sound | null = null;
  // const [isPlaying, setIsPlaying] = useState(false);
  // const playAudio = () => {
  //   if (audioData) {
  //     sound = new Sound(audioData, '', (error:any) => {
  //       if (error) {
  //         console.log('Error loading sound: ', error);
  //         return;
  //       }
  //       // Play the sound
  //       sound?.play((success:any) => {
  //         if (success) {
  //           console.log('Sound played successfully');
  //         } else {
  //           console.log('Sound playback failed');
  //         }
  //       });
  //       setIsPlaying(true);
  //     });
  //   }
  // };

  // // Function to stop the audio
  // const stopAudio = () => {
  //   sound?.stop(() => {
  //     console.log('Sound stopped');
  //   });
  //   setIsPlaying(false);
  // };
    console.log("this IMageURIData",JSON.stringify(key))
  return key?.data[0] == 0||key?.data[1]?.length!=0?(
    <ImageBackground
      source={key?.data[0] == 0?require('assets/images/bgGrediant.png'):{uri:key?.data[1][0]?.uri}}
      style={styles.bgContainer}
      resizeMode="stretch">  
      <Image
        source={require('assets/images/Record.png')}
        style={{width: '60%'}}
        resizeMode="contain"
      />
    </ImageBackground> //'#1D5EDD', '#00CEC8', '#EDBC33', '#ED3C3C'
  ) : (
    <View
      style={[
        styles.bgContainer,
        {
          backgroundColor:
          key?.data[0] == 1
              ? '#1D5EDD'
              : key?.data[0] == 2
              ? '#00CEC8'
              :key?.data[0] == 3
              ? '#EDBC33'
              : '#ED3C3C',
        },
      ]}>
        {/* <TouchableOpacity onPress={isPlaying ? stopAudio : playAudio}> */}
      <Image
        source={require('assets/images/Record.png')}
        style={{width: '60%'}}
        resizeMode="contain"
      />
      {/* </TouchableOpacity> */}
    </View>
  );
};

export default ContainerRecord;
