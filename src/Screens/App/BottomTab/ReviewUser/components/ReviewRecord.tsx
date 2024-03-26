import {View, Text, TouchableOpacity, Linking, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from '../styles';
import {RenderSvgIcon} from 'components/atoms/svg';
import {
  AVATAR,
  EmptySound,
  PAUSE,
  PDF,
  UploadYourCv,
  VIDEOICON,
  VOICE,
  WAVE,
} from 'assets/Svgs';
import {appColors} from 'theme';
import {useSelector} from 'react-redux';
import {selectPhotoData} from 'src/redux/app';
import Sound from 'react-native-sound';
import {selectUser} from 'src/redux/auth';

const ReviewRecord = ({user,data}:{user:any,data:any}) => {
  const audioData = useSelector(selectPhotoData);
  const CurrentUserData = useSelector(selectUser);
  console.log(data)
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const soundRef = useRef<Sound | null>(null);
    useEffect(() => {
      const sound = new Sound(
        data?.answer?.answer?.fileUrl,
        Sound.MAIN_BUNDLE,
        error => {
          if (error) {
            console.log('Failed to load sound:', error);
          } else {
            setDuration(sound?.getDuration());
            soundRef.current = sound; // Save the sound instance to the ref
          }
        },
      );

      return () => {
        if (soundRef.current) {
          soundRef.current.release(); // Release the sound instance when unmounting
        }
      };
    }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (isPlaying && soundRef.current) {
        soundRef.current.getCurrentTime(seconds => {
          setCurrentTime(seconds);
        });
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [isPlaying]);

  const playSound = () => {
    setIsPlaying(true);
    if (soundRef.current) {
      soundRef.current.play(success => {
        if (success) {
          console.log('Sound played successfully');
          setIsPlaying(false);
        } else {
          console.log('Sound playback failed');
          setIsPlaying(false);
        }
      });
    }
  };

  const stopSound = () => {
    setIsPlaying(false);
    if (soundRef.current) {
      soundRef.current.stop();
    }
  };

  const formatTime = (seconds: any) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${
      remainingSeconds < 10 ? '0' : ''
    }${remainingSeconds}`;
  };
  return (
    <View
      style={{
        backgroundColor: appColors.bg,

        paddingHorizontal: 20,
        borderRadius: 20,
        paddingVertical: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          columnGap: 10,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity onPress={isPlaying ? stopSound : playSound}>
          {isPlaying ? (
            <PAUSE />
          ) : (
            <VIDEOICON width={30} height={30} fill={'#f00'} />
          )}
        </TouchableOpacity>

        <EmptySound width={200} height={40} />
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
          {data?.avatar == null ? (
            <AVATAR height={32} width={32} />
          ) : (
            <Image
              source={{uri: data?.avatar}}
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 5,
        }}>
       
      </View>
    </View>
  );
};

export default ReviewRecord;
