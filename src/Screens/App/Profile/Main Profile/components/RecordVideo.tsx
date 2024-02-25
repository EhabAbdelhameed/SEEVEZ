import {Image, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {DELETE, VIDEOICON} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import Video from 'react-native-fast-video';
import { useAppDispatch } from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import AppSlice from 'src/redux/app';
import { useSelector } from 'react-redux';
import { selectLang } from 'src/redux/lang';
import { useTranslation } from 'react-i18next';

const RecordVideoCard = (data: any) => {
  const navigation = useNavigation<any>();
  const [isPaused, setPaused] = useState(false);
  const dispatch=useAppDispatch()
  const lang = useSelector(selectLang);
  const {t, i18n} = useTranslation();
  const handleDeleteVideo = (VideoId: any) => {
    // Show confirmation dialog
    Alert.alert(
      t('seevez'),
      t('Are you sure you want to delete this video?'),
      [
        {
          text: t('cancel'),
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
      {cancelable: false},
    );
  };

  return (
    <View
      style={[
        styles.CardContainer,
        {borderWidth: data?.data !== null ? 0 : 1},
      ]}>
      {data?.data === null ? (
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdateRecordVideo',{keys: 1})}
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
          source={{uri: data?.data?.media}}
          style={styles.videoContainer}
        />
        // </TouchableOpacity>
      )}
      {data?.data !== null ? (
        <View style={styles.topContainer1}>
          <TouchableOpacity onPress={()=>handleDeleteVideo(data?.data?.id)}
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
            onPress={() => navigation.navigate('UpdateRecordVideo',{keys: 1})}
            style={[
              styles.secContainer,
              {
                backgroundColor:
                  data?.data === null ? appColors.bg : appColors.white,
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
      {data?.data !== null ? (
        <View style={styles.topContainer2}>
          {isPaused==true ? (
            <TouchableOpacity
              onPress={() => setPaused(!isPaused)}
              style={[
                styles.secContainer,
                {
                  backgroundColor:
                  data?.data === null ? appColors.bg : appColors.white,
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
                height: 600,
              }}/>
          )}
        </View>
      ) : null}
    </View>
  );
};

export default RecordVideoCard;
const styles = StyleSheet.create({
  CardContainer: {
    // paddingHorizontal: 20,
    // paddingVertical: 15,
    width: '100%',
    backgroundColor: appColors.bg,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    marginBottom: 15,

    // marginTop: 15,
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: appColors.primary,
  },
   topContainer2: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,

    position: 'absolute',
    zIndex: 100,
    // top: 50,
    height: 70,
  },

  secContainer: {
    width: 96,
    height: 96,
    // backgroundColor: appColors.bg,
    borderRadius: 96,
    borderWidth: 0.5,
    marginBottom: 10,
    borderColor: appColors.primary,

    padding: 5,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RecordText: {
    fontFamily: ' Noto Sans',
    fontSize: 24,
    color: appColors.primary,
    fontWeight: '700',
  },
  topContainer1: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
      top:10,
    position: 'absolute',
    zIndex: 100,
    // top: 50,
    height: 60,
  },
  videoContainer: {
    width: '100%',
    height: 600,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,

    // Ensure that the video appears above other components
  },
});
