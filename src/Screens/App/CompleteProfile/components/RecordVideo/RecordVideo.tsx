import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { appColors } from '../../../../../theme/appColors';
import { RenderSvgIcon } from '../../../../../Components/atoms/svg';
import { VIDEOICON } from 'assets/Svgs';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-fast-video';
import { styles } from './styles';
import AppThunks from 'src/redux/app/thunks';
import { useAppDispatch } from 'src/redux/store';

const RecordVideo = (data: any) => {
  const navigation = useNavigation<any>();
  const [isPaused, setPaused] = useState(false);

 
  const handleVideoLoad = () => {
    // Video has loaded, you can now play it
    setTimeout(() => {
      
      setPaused(true);
    }, 1);
  
  };

 

  return (
    <View style={[styles.CardContainer,{ borderWidth:data?.user_data !== null?0:1}]}>
      {data?.user_data === null ? (
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdateRecordVideo')}
            style={styles.secContainer}>
            <VIDEOICON />
          </TouchableOpacity>
         
        </View>
      ) : (
        // <TouchableOpacity onPress={handleVideoPress}>
          <Video
          
            resizeMode="cover"  
            // paused={isPaused}
            source={{ uri: data?.user_data?.media }}
            style={styles.videoContainer}
            onLoad={handleVideoLoad}
            
          />
        // </TouchableOpacity>
      )}
      <View style={styles.topContainer1}>
        <TouchableOpacity
          onPress={() => navigation.navigate('UpdateRecordVideo')}
          style={[
            styles.secContainer,
            {
              backgroundColor:
               data?.user_data === null
                  ? appColors.bg
                  : appColors.white,
            },
          ]}>
          <VIDEOICON />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RecordVideo;

