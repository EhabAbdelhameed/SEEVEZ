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
import {useAppDispatch} from 'src/redux/store';
import AppSlice, { selectPhotoData } from 'src/redux/app';
import AudioComponent from './Audio';
import PollComponent from './Poll';
const audioRecorderPlayer = new AudioRecorderPlayer();
const ContainerRecord = (key: any) => {

  const CurrentUserData = useSelector(selectUser);
const audioData=useSelector(selectPhotoData)
  const [waveformPoints, setWaveformPoints] = useState<any>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      AppSlice?.changeImage(
        key?.data[1]?.length == 0
          ? key?.data[0] == 0
            ? require('assets/images/bgGrediant.png')
            : key?.data[0] == 1
            ? require('assets/images/Rectangle9.png')
            : key?.data[0] == 2
            ? require('assets/images/Rectangle10.png')
            : key?.data[0] == 3
            ? require('assets/images/Rectangle11.png')
            : key?.data[0] == 4
            ? require('assets/images/Rectangle12.png')
            : {uri: key?.data[1][0]?.uri}
          : {uri: key?.data[1][0]?.uri},
      ),
    );
  }, [key?.data[0],key?.data[1]]);
 

 

 

 
  return (
    <ImageBackground
      source={audioData?.image}
      style={[styles.bgContainer,{height:audioData?.key==6?220:420}]}
      resizeMode="stretch">
     
      {audioData?.key==6?<AudioComponent/>:<PollComponent/>}
     
    </ImageBackground> //'#1D5EDD', '#00CEC8', '#EDBC33', '#ED3C3C'
  );
};

export default ContainerRecord;
