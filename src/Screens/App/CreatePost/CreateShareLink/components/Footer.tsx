import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styles';
import {SaveCircle} from 'assets/Svgs';
import {appColors} from 'theme';
import {useAppDispatch} from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import {ActivityIndicator} from 'react-native';

const Footer = (data: any) => {
  //  console.log("Footer Data",data)
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const sendAudioData = () => {
    setIsLoading(true);
    const formdata = new FormData();

    formdata.append('template', {
      uri: data?.data[0]?.uri,
      type: data?.data[0]?.type,
      name: data?.data[0]?.name,
    });

    formdata.append('files', {
      uri: data?.audioData?.data, // URI of the audio file
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
