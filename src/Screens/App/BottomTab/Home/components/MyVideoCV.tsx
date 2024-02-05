import {View, Text, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from 'src/globalStyle';
import {useNavigation, useRoute} from '@react-navigation/native';
import Video from 'react-native-fast-video';
import {styles} from '../styles';
import {videoSource} from 'screens/App/Reels/fucntions/helper';
import {appColors} from 'theme';
import {RenderSvgIcon} from 'components/atoms/svg';
import { DELETE, VIDEOICON } from 'assets/Svgs';
import { useSelector } from 'react-redux';
import { selectUser } from 'src/redux/auth';


const MyVideoCV = () => {
  

  const CurrentUserData = useSelector(selectUser);
  const navigation = useNavigation<any>();
  const [isPaused, setPaused] = useState(false);
  return (
    <SafeAreaView
      edges={['top']}
      style={[
        globalStyles.screen,
        {
          backgroundColor: appColors.black,
        },
      ]}>
    <View
      style={[
        styles.CardContainer,
        {borderWidth: CurrentUserData?.user_data?.cv_media !== null ? 0 : 1},
      ]}>
      {CurrentUserData?.user_data?.cv_media === null ? (
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdateRecordVideo',{key:'5'})}
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
          source={{uri: CurrentUserData?.user_data?.cv_media?.media}}
          style={styles.videoContainer}
        />
        // </TouchableOpacity>
      )}
      {CurrentUserData?.user_data?.cv_media !== null ? (
        <View style={styles.topContainer1}>
          <TouchableOpacity
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
            onPress={() => navigation.navigate('UpdateRecordVideo',{key:'5'})}
            style={[
              styles.secContainer,
              {
                backgroundColor:
                CurrentUserData?.user_data?.cv_media === null ? appColors.bg : appColors.white,
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
      {CurrentUserData?.user_data?.cv_media !== null ? (
        <View style={styles.topContainer2}>
          {isPaused==true ? (
            <TouchableOpacity
              onPress={() => setPaused(!isPaused)}
              style={[
                styles.secContainer,
                {
                  backgroundColor:
                  CurrentUserData?.user_data?.cv_media === null ? appColors.bg : appColors.white,
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
                height:600,
              }}/>
          )}
        </View>
      ) : null}
    </View>
    </SafeAreaView>
  );
};

export default MyVideoCV;