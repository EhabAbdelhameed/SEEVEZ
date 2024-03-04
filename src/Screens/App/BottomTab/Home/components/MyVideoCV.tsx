import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from 'src/globalStyle';
import {useNavigation, useRoute} from '@react-navigation/native';
import Video from 'react-native-fast-video';
import {styles} from '../styles';
import {videoSource} from 'screens/App/Reels/fucntions/helper';
import {appColors} from 'theme';
import {RenderSvgIcon} from 'components/atoms/svg';
import {DELETE, PlaceHolderReels, VIDEOICON} from 'assets/Svgs';
import {useSelector} from 'react-redux';
import {selectUser} from 'src/redux/auth';
import AppThunks from 'src/redux/app/thunks';
import AppSlice from 'src/redux/app';
import {useAppDispatch} from 'src/redux/store';
import {useTranslation} from 'react-i18next';
import {selectLang} from 'src/redux/lang';
import Header from 'components/molecules/Header';

const MyVideoCV = () => {
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const CurrentUserData = useSelector(selectUser);
  const navigation = useNavigation<any>();
  const [isPaused, setPaused] = useState(false);
  const dispatch = useAppDispatch();
  const handleDeleteVideo = (VideoId: any) => {
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
      {cancelable: false},
    );
  };
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  return (
    <SafeAreaView edges={['top']} style={[]}>
      {CurrentUserData?.user_data?.cv_media === null ? (
        <Header Title={t('My video cv')} onPress={() => navigation.goBack()} />
      ) : null}

      <View
        style={
          CurrentUserData?.user_data?.cv_media === null
            ? [
                styles.CardContainer,
                {
                  borderWidth:
                    CurrentUserData?.user_data?.cv_media !== null ? 0 : 1,
                },
              ]
            : {
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',

                backgroundColor: appColors.bg,
              }
        }>
        {CurrentUserData?.user_data?.cv_media === null ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',

              backgroundColor: '#FFF',
              paddingVertical: 16,
              paddingHorizontal: 20,
              borderRadius: 16,
              marginTop:-150,
            }}>
            <PlaceHolderReels />
            <Text
              style={{
                color: '#1C1C1C',
                fontSize: 24,
                fontWeight: '400',
                marginTop: 10,
              }}>
              {' '}
              No Video CV
            </Text>
            <View style={{width: '65%'}}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 20,
                  fontWeight: '700',
                  textAlign: 'center',
                }}>
                {' '}
                Make your first Video CV get hired fast
              </Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('UpdateRecordVideo', {keys: '5'})
              }
              style={{
                backgroundColor: appColors.primary,
                paddingHorizontal: 40,
                paddingVertical: 4,
                borderRadius: 16,
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 14,
                  fontWeight: '400',
                  textAlign: 'center',
                }}>
                Create Video CV
              </Text>
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
              ]}
              onPress={_handleNavigate}
              activeOpacity={0.8}>
              <RenderSvgIcon
                icon="ARROWBACK"
                style={{
                  transform:
                    lang == 'ar' ? [{rotate: '180deg'}] : [{rotate: '0deg'}],
                }}
                width={30}
                height={30}
                color={appColors.primary}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                handleDeleteVideo(CurrentUserData?.user_data?.cv_media?.id)
              }
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
              onPress={() =>
                navigation.navigate('UpdateRecordVideo', {keys: '5'})
              }
              style={[
                styles.secContainer,
                {
                  backgroundColor:
                    CurrentUserData?.user_data?.cv_media === null
                      ? appColors.bg
                      : appColors.white,
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
            {isPaused == true ? (
              <TouchableOpacity
                onPress={() => setPaused(!isPaused)}
                style={[
                  styles.secContainer,
                  {
                    backgroundColor:
                      CurrentUserData?.user_data?.cv_media === null
                        ? appColors.bg
                        : appColors.white,
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
                }}
              />
            )}
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default MyVideoCV;
