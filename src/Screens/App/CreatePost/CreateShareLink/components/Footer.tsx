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
  console.log("Ehab Data",data?.data[2])
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const photoData = useSelector(selectPhotoData);
  const sendAudioData = () => {
    setIsLoading(true);
    const formdata = new FormData();
    photoData.location != null && photoData.location != ''
      ? formdata.append('location', photoData.location)
      : null;
    if (photoData?.tagPepoles != null && photoData?.tagPepoles?.length != 0) {
      for (let i = 0; i < photoData?.tagPepoles?.length; i++) {
        formdata.append(`mention[${i}][id]`, photoData?.tagPepoles[i]);
      }
    }
    data?.data[2] != ''||!data ? formdata.append('caption', data?.data[2]) : null;

    // {
      // "uri": "file:///assets/images/Rectangle9.png",
      // "type": "image/png",
      // "name": "Rectangle9.png"
    // }
    formdata.append('template', {
      uri:data?.data[0]==1?"assets/images/Rectangle9.png":data?.data[0]?.uri,
      type:data?.data[0]==1?'image/png': data?.data[0]?.type,
      name:data?.data[0]==1?'Rectangle9.png':
        Platform.OS == 'ios' ? data?.data[0]?.fileName : data?.data[0]?.name,
    });

    formdata.append('files', {
      uri: photoData?.pdf, // URI of the audio file
      type: 'audio/mp3', // Mime type of the audio file
      name: 'audio.mp3', // Name of the audio file
    });
    console.log(JSON.stringify(formdata));
    dispatch(AppThunks.doAddAudio(formdata)).then((response: any) => {
      setIsLoading(false);
    });
  };

  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerLeftSide}>
        <SaveCircle />
        <Text style={styles.textOption}>Save</Text>
      </View>
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
