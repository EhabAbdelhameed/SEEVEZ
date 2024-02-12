import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../styles';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
  OutputFormatAndroidType,
} from 'react-native-audio-recorder-player';
import Sound from 'react-native-sound';
import {Slider} from 'react-native-elements';
import {appColors} from 'theme';
import Svg, {Path} from 'react-native-svg';
import {AVATAR, PAUSE, VOICE, WAVE} from 'assets/Svgs';
import {RenderSvgIcon} from 'components/atoms/svg';
import {useSelector} from 'react-redux';
import {selectUser} from 'src/redux/auth';
const audioRecorderPlayer = new AudioRecorderPlayer();
const ContainerRecord = (key: any) => {
  const CurrentUserData = useSelector(selectUser);
  console.log('Key object:', JSON.stringify(key));
  const [waveformPoints, setWaveformPoints] = useState<any>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const sound = new Sound(key?.audioData?.data, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load sound:', error);
    } else {
      setDuration(sound?.getDuration());
    }
  });
  const generateWaveformPoints = (audioData: any) => {
    // Perform some processing on the audio data to generate waveform points
    const waveformPoints = [];

    // Hypothetical processing - simply generate random points for demonstration
    const numPoints = 100; // Number of points for the waveform
    const maxValue = 100; // Max value for the waveform (for demonstration)
    for (let i = 0; i < numPoints; i++) {
      const x = i; // X-coordinate of the point (e.g., time or index)
      const y = Math.random() * maxValue; // Y-coordinate of the point (amplitude)
      waveformPoints.push({x, y});
    }

    return waveformPoints;
  };
  useEffect(() => {
    const timerId = setInterval(() => {
      if (isPlaying) {
        sound.getCurrentTime(seconds => {
          setCurrentTime(seconds);
        });
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [isPlaying]);
  useEffect(() => {
    const points = generateWaveformPoints(key?.audioData?.data);
    setWaveformPoints(points);
  }, [isPlaying]);

  const playSound = () => {
    setIsPlaying(true);
    sound.play(success => {
      if (success) {
        console.log('Sound played successfully');
        setIsPlaying(false);
      } else {
        console.log('Sound playback failed');
        setIsPlaying(false);
      }
    });
  };

  const formatTime = (seconds: any) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${
      remainingSeconds < 10 ? '0' : ''
    }${remainingSeconds}`;
  };
  return key?.data[0] == 0 || key?.data[1]?.length != 0 ? (
    <ImageBackground
      source={
        key?.data[0] == 0&&key?.data[1]?.length == 0 
          ? require('assets/images/bgGrediant.png')
          : {uri: key?.data[1][0]?.uri}
      }
      style={styles.bgContainer}
      resizeMode="stretch">
      {/* <TouchableOpacity style={{width:'100%',justifyContent:'center',alignItems:'center'}} onPress={isPlaying ? startPlayback : stopPlayback}> */}

      <View
        style={{
          backgroundColor: '#FFF',
          width: '80%',
          paddingHorizontal: 20,
          borderRadius: 20,
          paddingVertical: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            columnGap: 10,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity
            // style={styles.button}
            onPress={isPlaying ? () => sound.stop() : playSound}>
            <PAUSE />
          </TouchableOpacity>
          {/* <Svg height="40" width="80%">
            <Path
              d={`M${waveformPoints
                .map((point: any) => `${point.x},${point.y}`)
                .join(' ')}`}
              fill="none"
              stroke="blue"
              strokeWidth="2"
            />
          </Svg> */}
          <WAVE/>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              // borderWidth: 1,
              // borderColor: '#DDD',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: appColors.bg,
            }}>
            {CurrentUserData?.avatar == null ? (
              <AVATAR height={32} width={32} />
            ) : (
              <Image
                source={{uri: CurrentUserData?.avatar}}
                style={{width: 40, height: 40, borderRadius: 40}}
                resizeMode="cover"
              />
            )}
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                // borderWidth: 1,
                // borderColor: '#DDD',
                justifyContent: 'center',
                position: 'absolute',
                bottom: 2,
                right: 2,
                alignItems: 'center',
                backgroundColor: '#FFF',
              }}>
              <VOICE height={10} width={10} />
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.timeText}>{formatTime(duration)}</Text>
          <Text style={styles.timeText}>12:00 pm</Text>
        </View>
      </View>
      {/* </TouchableOpacity>  */}
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
              : key?.data[0] == 3
              ? '#EDBC33'
              : '#ED3C3C',
        },
      ]}>
      <View
        style={{
          backgroundColor: '#FFF',
          width: '80%',
          paddingHorizontal: 20,
          borderRadius: 20,
          paddingVertical: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            columnGap: 10,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity
            // style={styles.button}
            onPress={isPlaying ? () => sound.stop() : playSound}>
            <PAUSE />
          </TouchableOpacity>
          {/* <Svg height="40" width="80%">
            <Path
              d={`M${waveformPoints
                .map((point: any) => `${point.x},${point.y}`)
                .join(' ')}`}
              fill="none"
              stroke="blue"
              strokeWidth="2"
            />
          </Svg> */}
           <WAVE/>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              // borderWidth: 1,
              // borderColor: '#DDD',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: appColors.bg,
            }}>
            {CurrentUserData?.avatar == null ? (
              <AVATAR height={32} width={32} />
            ) : (
              <Image
                source={{uri: CurrentUserData?.avatar}}
                style={{width: 40, height: 40, borderRadius: 40}}
                resizeMode="cover"
              />
            )}
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                // borderWidth: 1,
                // borderColor: '#DDD',
                justifyContent: 'center',
                position: 'absolute',
                bottom: 2,
                right: 2,
                alignItems: 'center',
                backgroundColor: '#FFF',
              }}>
              <VOICE height={10} width={10} />
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.timeText}>{formatTime(duration)}</Text>
          <Text style={styles.timeText}>12:00 pm</Text>
        </View>
      </View>
    </View>
  );
};

export default ContainerRecord;
