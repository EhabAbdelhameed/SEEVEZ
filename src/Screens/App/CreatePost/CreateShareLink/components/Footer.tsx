import {View, Text, TouchableOpacity, Platform} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styles';
import {SaveCircle} from 'assets/Svgs';
import {appColors} from 'theme';
import {useAppDispatch} from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import {ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {selectPhotoData} from 'src/redux/app';

const Footer = (data: any) => {
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const photoData = useSelector(selectPhotoData);
  const sendAudioData = () => {
    if (photoData?.key == 6) {
      setIsLoading(true);
      const formdata = new FormData();
      photoData.location != null && photoData.location != ''
        ? formdata.append('location', photoData.location)
        : null;
      if (photoData?.tagPepoles != null && photoData?.tagPepoles?.length != 0) {
        for (let i = 0; i < photoData?.tagPepoles?.length; i++) {
          formdata.append(`mention[${i}][id]`, photoData?.tagPepoles[i]?.id);
          formdata.append(
            `mention[${i}][name]`,
            photoData?.tagPepoles[i]?.name,
          );
        }
      }
      data?.data[2] != '' || !data
        ? formdata.append('caption', data?.data[2])
        : null;

      formdata.append('color', photoData?.image);
      formdata.append('files', {
        uri: photoData?.pdf, // URI of the audio file
        type: 'audio/mp3', // Mime type of the audio file
        name: 'audio.mp3', // Name of the audio file
      });
      dispatch(AppThunks.doAddAudio(formdata)).then((response: any) => {
        setIsLoading(false);
      });
    } else {
      setIsLoading(true);
      const formdata = new FormData();
      photoData.location != null && photoData.location != ''
        ? formdata.append('location', photoData.location)
        : null;
      if (photoData?.tagPepoles != null && photoData?.tagPepoles?.length != 0) {
        for (let i = 0; i < photoData?.tagPepoles?.length; i++) {
          formdata.append(`mention[${i}][id]`, photoData?.tagPepoles[i]?.id);
          formdata.append(
            `mention[${i}][name]`,
            photoData?.tagPepoles[i]?.name,
          );
        }
      }
      data?.data[2] != '' || !data
        ? formdata.append('caption', data?.data[2])
        : null;
      formdata.append(`question`, photoData?.pdf?.question);
      for (let i = 0; i < photoData?.pdf?.options?.length; i++) {
        formdata.append(
          `array[${i}][answer]`,
          photoData?.pdf?.options[i]?.answer,
        );
      }
      // formdata.append(`duration`, photoData?.pdf?.duration);
      formdata.append(`duration`, '4000000000000');
      // {
      // "uri": "file:///assets/images/Rectangle9.png",
      // "type": "image/png",
      // "name": "Rectangle9.png"
      // }
      formdata.append('color', photoData?.image);
      dispatch(AppThunks.CreatePoll(formdata)).then((response: any) => {
        setIsLoading(false);
      });
    }
  };

  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerLeftSide}></View>
      <TouchableOpacity onPress={sendAudioData} style={styles.btnShare}>
        {isLoading ? (
          <ActivityIndicator size={'small'} color={'#FFF'} />
        ) : (
          <Text
            style={[
              styles.textOption,
              {
                color: appColors.white,
              },
            ]}>
            Share
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
