import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { appColors } from '../../../../../theme/appColors';
import { RenderSvgIcon } from '../../../../../Components/atoms/svg';
import { DELETE, VIDEOICON } from 'assets/Svgs';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-fast-video';
import { styles } from './styles';
import AppThunks from 'src/redux/app/thunks';
import { useAppDispatch } from 'src/redux/store';
import AppSlice from 'src/redux/app';

const RecordVideoCompany = (data: any) => {
  const navigation = useNavigation<any>();
  const [isPaused, setPaused] = useState(false);
  
  const dispatch = useAppDispatch();
  const handleDeleteVideo = (VideoId:any) => {
    // Show confirmation dialog
    Alert.alert(
      'Seevez',
      'Are you sure you want to delete this video?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // Dispatch the action to delete the experience
            dispatch(AppThunks.doDeleteVideoCV(VideoId)).then((res: any) => {
              dispatch(AppThunks.GetProfileInfo());
              dispatch(AppSlice.changeDone(false));
           
            });
          },
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <View
      style={[
        styles.CardContainer,
        {borderWidth: data?.user_data !== null ? 0 : 1},
      ]}>
      {data?.user_data === null ? (
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdateRecordVideoCompany')}
            style={styles.secContainer}>
            <VIDEOICON />
          </TouchableOpacity>
        </View>
      ) : (
        // <TouchableOpacity onPress={handleVideoPress}>
        <Video
          resizeMode="cover"
          paused={isPaused}
          repeat
          source={{uri: data?.user_data?.media}}
          style={styles.videoContainer}
        />
        // </TouchableOpacity>
      )}
      {data?.user_data !== null ? (
        <View style={styles.topContainer1}>
          <TouchableOpacity 
          onPress={() => handleDeleteVideo(data?.user_data?.id)} 
            style={[
              styles.secContainer,
              {
                backgroundColor: appColors.white,
                width: 40,
                height: 40,
                borderRadius: 40,
              },
            ]}>
            <DELETE />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdateRecordVideoCompany')}
            style={[
              styles.secContainer,
              {
                backgroundColor:
                  data?.user_data === null ? appColors.bg : appColors.white,
                width: 40,
                height: 40,
                borderRadius: 40,
              },
            ]}>
            <RenderSvgIcon
              icon="PEN"
              width={20}
              height={20}
              color={appColors.white}
            />
          </TouchableOpacity>
        </View>
      ) : null}
      {data?.user_data !== null ? (
        <View style={styles.topContainer2}>
          {isPaused==true ? (
            <TouchableOpacity
              onPress={() => setPaused(!isPaused)}
              style={[
                styles.secContainer,
                {
                  backgroundColor:
                    data?.user_data === null ? appColors.bg : appColors.white,
                  width: 96,
                  height: 96,
                  borderRadius: 96,
                },
              ]}>
              <VIDEOICON />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setPaused(!isPaused)}
              style={{
                width: '100%',
                height:300,
              }}/>
          )}
        </View>
      ) : null}
    </View>
  );
};

export default RecordVideoCompany;

