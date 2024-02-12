import { View, Text, Button, ImageBackground, Alert } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from 'src/globalStyle'
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
  OutputFormatAndroidType,
} from 'react-native-audio-recorder-player';
import type {
  AudioSet,
  PlayBackType,
  RecordBackType,
} from 'react-native-audio-recorder-player';
import Svg, { Path } from 'react-native-svg';
import { styles } from './styles';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Wave from './components/Wave';
import { useNavigation } from '@react-navigation/native';
import { appColors } from 'theme';
const audioRecorderPlayer = new AudioRecorderPlayer();
const CreateVoice = () => {
  const navigation = useNavigation()
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStoped, setIsStoped] = useState(false);
  const [audioData, setAudioData] = useState<any>(null);
  const [recordData,setRecordData]=useState<any>('')
  const [milliseconds, setMilliseconds] = useState(0);

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  //setWaveformPoints
  const [waveformPoints, setWaveformPoints] = useState<any>([]);



  useEffect(() => {
    let timerInterval: any;

    if (isRecording) {
      timerInterval = setInterval(() => {
        setMilliseconds((prevMilliseconds) => (prevMilliseconds + 100) % 1000);
        setSeconds((prevSeconds) => Math.floor((prevSeconds + (milliseconds + 100) / 1000) % 60));
        setMinutes((prevMinutes) => Math.floor((prevMinutes + (seconds + 1) / 60) % 60));
        setHours((prevHours) => Math.floor((prevHours + (minutes + 1) / 60) % 24));
      }, 100);
    }

    return () => clearInterval(timerInterval);
  }, [isRecording, milliseconds, seconds, minutes, hours]);
  useEffect(() => {
    return () => {
      // Clean up when the component unmounts
      audioRecorderPlayer.stopPlayer();
    };
  }, []);

  const startRecording = async () => {
    try {
      setIsRecording(true);
      await audioRecorderPlayer.startRecorder();
    } catch (error) {
      console.error('Error starting recording: ', error);
    }
  };

  const stopRecording = async () => {
    // setWaveformPoints([])
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      setIsRecording(false);
      setIsStoped(true);
      // Ensure that the result is an array before setting it as audioData
      const audioDataArray:any = Array.isArray(result) ? result : Array.from(result);
      setAudioData(result);
      setRecordData(result)
      console.log("result",result)
     console.log("record Data: : : ",recordData)

      // Generate waveform points from the recorded audio data
      // const waveformPoints = await generateWaveformPoints(audioDataArray);
      // setWaveformPoints(waveformPoints);

      console.log('Recording stopped. Audio data:', audioDataArray);
    } catch (error) {
      console.error('Error stopping recording: ', error);
    }
  };

  const resetTimer = () => {
    setMilliseconds(0);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setIsStoped(false);
    setIsRecording(false);
    setAudioData(null);
  };
  // const startPlayback = async () => {
  //   try {
  //     await audioRecorderPlayer.startPlayer();
  //     setIsPlaying(true);
  //   } catch (error) {
  //     console.error('Error starting playback: ', error);
  //   }
  // };

  // const stopPlayback = async () => {
  //   try {
  //     await audioRecorderPlayer.stopPlayer();
  //     setIsPlaying(false);
  //   } catch (error) {
  //     console.error('Error stopping playback: ', error);
  //   }
  // };

  const generateWaveformPoints = (audioData:any) => {
    // Ensure that audioData is an array
    if (!Array.isArray(audioData)) {
      console.error('Invalid audioData format. Expected an array.');
      return [];
    }

    // Convert the audio data to waveform points
    // Adjust the scale and other parameters based on your requirements
    const scale = .1;
    const spacing = 4;

    return audioData.map((char, index) => {
      const x = index * spacing;
      const y = char.charCodeAt(0) * scale + 50; // Convert char to ASCII value
      return { x, y };
    });
  };
  const _handleNavigation = useCallback(() => {
    console.log("RECORD AUDIO: : : ....:......",audioData)
    navigation.navigate('CreateShareLink', {
      audioData:audioData,
    });
  }, [audioData]);
  return (
    <SafeAreaView edges={['top']} style={[globalStyles.screen,]}>
      <ImageBackground style={styles.bg}
        source={require("assets/images/bgGrediant.png")}
      >
        <Header />
        <Content
          hours={hours}
          seconds={seconds}
          minutes={minutes}
          milliseconds={milliseconds}
        />
        <Wave milliseconds={milliseconds} isRecording={audioData} />
        <Footer
          Press={isRecording ? stopRecording : startRecording} 
          Remove={resetTimer}
          Done={() => {
            // Alert.alert("Done")
            _handleNavigation()
          }}
          isStoped={isStoped}
        />
        {isRecording ? (
        <>
          <Text style={{ marginBottom: 10 }}>Recording...</Text>
        </>
      ) : (
        <>
          {/* <Button
            title="Start Recording"
            onPress={startRecording}
            disabled={isPlaying}
          /> */}
          {/* {audioData && (
            <View style={{ marginTop: 20 }}>
              <Button title="Start Playback" onPress={startPlayback} disabled={isRecording} />
            </View>
          )} */}
        </>
      )}
  
      {/* {isPlaying && (
        <Text style={{ marginTop: 10 }}>Playing...</Text>
      )} */}

      {/* <Button title="Stop" onPress={isRecording ? stopRecording : stopPlayback} /> */}

      </ImageBackground>


    </SafeAreaView>
  )
}

export default CreateVoice