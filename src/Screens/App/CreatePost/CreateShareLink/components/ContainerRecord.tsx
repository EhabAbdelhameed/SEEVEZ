import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Platform,
  FlatList,
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
import {AVATAR, LOCATION, PAUSE, VOICE, WAVE} from 'assets/Svgs';
import {RenderSvgIcon} from 'components/atoms/svg';
import {useSelector} from 'react-redux';
import {selectUser} from 'src/redux/auth';
import {useAppDispatch} from 'src/redux/store';
import AppSlice, {selectPhotoData} from 'src/redux/app';
import AudioComponent from './Audio';
import PollComponent from './Poll';
import LinearGradient from 'react-native-linear-gradient';
const audioRecorderPlayer = new AudioRecorderPlayer();
const ContainerRecord = (key: any) => {
  const CurrentUserData = useSelector(selectUser);
  const audioData = useSelector(selectPhotoData);
  const [waveformPoints, setWaveformPoints] = useState<any>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const dispatch = useAppDispatch();
  //'#1D5EDD', '#00CEC8', '#EDBC33', '#ED3C3C'
  useEffect(() => {
    dispatch(
      AppSlice?.changeImage(
        key?.data == 0
          ? '#0f0'
          : key?.data == 1
          ? '#1D5EDD'
          : key?.data == 2
          ? '#00CEC8'
          : key?.data == 3
          ? '#EDBC33'
          : key?.data == 4
          ? '#ED3C3C'
          : null,
      ),
    );
  }, [key?.data]);

  return key?.data == 0 ? (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#EDBC33', '#1D5EDD', '#00CEC8']}
      style={[
        styles.bgContainer,
        {
          height: audioData?.key == 6 ? 220 : 350,
          // backgroundColor: audioData?.image,
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      {audioData?.key == 6 ? <AudioComponent /> : <PollComponent />}
      {audioData?.names == null || audioData?.names?.length == 0 ? null : (
        <View style={styles.taggedPeopleContainer}>
          <FlatList
            scrollEnabled={false}
            data={audioData?.names}
            numColumns={2}
            renderItem={({item, index}) => (
              <View key={index} style={styles.taggedPerson}>
                <Text
                  style={{
                    color: '#10347A',
                    fontFamily: 'Noto Sans',
                    fontSize: 8,
                    fontWeight: '400',
                  }}>{`@${item}`}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
       {audioData?.location == null || audioData?.location == '' ? null : (
        <View
          style={{
            position: 'absolute',
            top: 20,
            left: 10,
            flexDirection: 'row',
            columnGap: 10,
            backgroundColor:'#FFF',
            borderRadius:16,
            width:180,
            paddingHorizontal:10,
            paddingVertical:6

          }}>
            <LOCATION/>
          <Text
            style={{
              color: '#10347A',
              fontFamily: 'Noto Sans',
              fontSize: 12,
              fontWeight: '400',
            }}>
            {audioData?.location}
          </Text>
        </View>
      )}
    </LinearGradient>
  ) : (
    <View
      style={[
        styles.bgContainer,
        {
          height: audioData?.key == 6 ? 220 : 350,
          backgroundColor: audioData?.image == '#0f0'?null:audioData?.image,
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      {audioData?.key == 6 ? <AudioComponent /> : <PollComponent />}
      {audioData?.names == null || audioData?.names?.length == 0 ? null : (
        <View style={styles.taggedPeopleContainer}>
          <FlatList
            scrollEnabled={false}
            data={audioData?.names}
            numColumns={2}
            renderItem={({item, index}) => (
              <View key={index} style={styles.taggedPerson}>
                <Text
                  style={{
                    color: '#10347A',
                    fontFamily: 'Noto Sans',
                    fontSize: 8,
                    fontWeight: '400',
                  }}>{`@${item}`}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
       {audioData?.location == null || audioData?.location == '' ? null : (
        <View
          style={{
            position: 'absolute',
            top: 20,
            left: 10,
            flexDirection: 'row',
            columnGap: 10,
            backgroundColor:'#FFF',
            borderRadius:16,
            width:180,
            paddingHorizontal:10,
            paddingVertical:6

          }}>
            <LOCATION/>
          <Text
            style={{
              color: '#10347A',
              fontFamily: 'Noto Sans',
              fontSize: 12,
              fontWeight: '400',
            }}>
            {audioData?.location}
          </Text>
        </View>
      )}
    </View>
  ); //'#1D5EDD', '#00CEC8', '#EDBC33', '#ED3C3C'
};

export default ContainerRecord;
