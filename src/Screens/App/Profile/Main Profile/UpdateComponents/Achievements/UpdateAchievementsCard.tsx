import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  FlatList,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import {RenderSvgIcon} from '../../../../../../Components/atoms/svg';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../../../../theme/appColors';

import {BigLogo, CALANDER, CompanyLogo, DELETE, PHOTO} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import moment from 'moment';
import {useAppDispatch} from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import AppSlice from 'src/redux/app';
import {useSelector} from 'react-redux';
import {selectUser} from 'src/redux/auth';
import ReadMore from '@fawazahmed/react-native-read-more';

const UpdateAchievementCard = () => {
  const CurrentUserData = useSelector(selectUser);
  let data = CurrentUserData?.user_data?.achievement;
//   console.log('11111111Ach ', data);
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      dispatch(AppThunks.GetProfileInfo());
      dispatch(AppSlice.changeDone(false));
    });
    return RenderFunction;
  }, [navigation]);
  // console.log('FromUpdated ', data);
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const differenceInYears = (date1: any, date2: any) => {
    let start_date = moment(date1).format('yyyy-MM-DD');
    let end_date = moment(date2).format('yyyy-MM-DD');
    let years =
      parseInt(end_date.substring(0, 4)) - parseInt(start_date.substring(0, 4));

    Math.abs(years);

    return years;
  };
  const handleDeleteAchievement = (achievementId: any) => {
    // Show confirmation dialog
    Alert.alert(
      'Seevez',
      'Are you sure you want to delete this achievement ?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // Dispatch the action to delete the experience
            dispatch(AppThunks.doDeleteAchievement(achievementId)).then(
              (res: any) => {
                dispatch(AppThunks.GetProfileInfo());
              },
            );
          },
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          backgroundColor: appColors.bg,
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <TouchableOpacity onPress={_handleNavigate} activeOpacity={0.8}>
            <RenderSvgIcon
              icon="ARROWBACK"
              width={30}
              height={30}
              color={appColors.primary}
            />
          </TouchableOpacity>
          {/* <BigLogo height={30} width={96} style={{marginLeft: 70}} />
           */}
          <Image
            source={require('../../../../../../assets/images/seevezlogo.png')}
            style={{width: 100, height: 30}}
          />
        </View>
        <View style={styles.circles}>
          <RenderSvgIcon icon="CIRCLELOGIN" width={220} height={160} />
        </View>

        <View style={styles.bottomSection}>
          <View style={styles.blueCircle}>
            <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
          </View>
          <View style={styles.loginTextContainer}>
            <View style={{width: 32}}>
              {/* <RenderSvgIcon icon="ICON2CV" width={32} height={48} /> */}
            </View>

            <View>
              <RenderSvgIcon
                icon="ICONCV"
                width={40}
                height={48}
                style={styles.yellowIcon}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: '#000',
                marginLeft: 8,
                fontFamily: 'Noto Sans',
              }}>
              Achievements
            </Text>
            <View style={{flexDirection: 'row', columnGap: 15, marginLeft: 5}}>
              <TouchableOpacity onPress={() => handleDeleteAchievement(data?.id)}>
                <DELETE />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('UpdateOneAchievements', {
                    data: data,
                  })
                }>
                <RenderSvgIcon
                  icon="PEN"
                  width={20}
                  height={20}
                  color={appColors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginBottom: 15,paddingHorizontal:10}}>
            
              <ReadMore
                style={styles.PostText}
                animate={true}
                seeMoreStyle={{
                  color: appColors.primary,
                  textDecorationLine: 'underline',
                }}
                seeLessStyle={{
                  color: appColors.primary,
                  textDecorationLine: 'underline',
                }}
                seeLessText="less"
                seeMoreText="Read more"
                numberOfLines={3}>
                {data?.text}
              </ReadMore>
              <Image
                style={styles.Certificate}
                source={{
                  uri: data?.certificate,
                }}
              />
         
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdateAchievementCard;
