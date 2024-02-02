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

const RecordVideoCompany = (data: any) => {
  const navigation = useNavigation<any>();
  const [isPaused, setPaused] = useState(false);
   console.log("dd",JSON.stringify(data))
 
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
            source={{ uri: data?.user_data?.user_data?.cv_media?.media }}
            style={styles.videoContainer}
            onLoad={handleVideoLoad}
            
          />
        // </TouchableOpacity>
      )}
      <View style={styles.topContainer1}>
        <TouchableOpacity
          onPress={() => navigation.navigate('UpdateRecordVideoCompany')}
          style={[
            styles.secContainer,
            {
              backgroundColor:
               data?.user_data === null
                  ? appColors.bg
                  : appColors.white,
                  width:40,height:40,borderRadius:40
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
    </View>
  );
};

export default RecordVideoCompany;

