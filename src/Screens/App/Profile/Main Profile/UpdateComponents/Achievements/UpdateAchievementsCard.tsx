import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  FlatList,
  Linking,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import {RenderSvgIcon} from '../../../../../../Components/atoms/svg';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../../../../theme/appColors';

import {BigLogo, CALANDER, CompanyLogo, DELETE, PDF, PHOTO} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import moment from 'moment';
import {useAppDispatch} from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import AppSlice, { selectAccessToken, selectDone } from 'src/redux/app';
import {useSelector} from 'react-redux';
import AuthSlice, {selectUser} from 'src/redux/auth';
import ReadMore from '@fawazahmed/react-native-read-more';
import { useTranslation } from 'react-i18next';
import { selectLang } from 'src/redux/lang';

const UpdateAchievementCard = () => {
  const CurrentUserData = useSelector(selectUser);
  let data = CurrentUserData?.user_data?.achievement;
  console.log('11111111Ach ', data);
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const [refreshPage, setRefreshPage] = useState(false);
    const changeDone = useSelector(selectDone);
    useEffect(() => {
      if (data?.length === 0 && changeDone) {
        setRefreshPage(true);
      }
    }, [data, changeDone]);
  
    useEffect(() => {
      if (refreshPage) {
        navigation.goBack();
        setRefreshPage(false);
      }
    }, [refreshPage, navigation]);
  React.useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      dispatch(AppThunks.GetProfileInfo());
      dispatch(AppSlice.changeDone(false));
    });
    return RenderFunction;
  }, [navigation]);
  const AccessToken = useSelector(selectAccessToken);
  useEffect(() => {
    AccessToken ? dispatch(AuthSlice.chnageisAuth(false)) : null;
  }, [AccessToken]);
  // console.log('FromUpdated ', data);
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const lang = useSelector(selectLang);
  const {t, i18n} = useTranslation();
  const handleDeleteAchievement = (achievementId: any) => {
    // Show confirmation dialog
    Alert.alert(
      t('SEEVEZ'),
      t('Are you sure you want to delete this achievement?'),
      [
        {
          text: t('cancel'),
          style: 'cancel',
        },
        {
          text: t('OK'),
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
    <SafeAreaView edges={['top']} style={[styles.container,{direction:lang=="ar"?'rtl':'ltr'}]}>
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
              style={{transform:lang=='ar'?[{rotate: '180deg'}]:[{rotate: '0deg'}]}}
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
              {t('achievements')}
            </Text>
           
          </View>
          {data?.map((item: any) => (
             <View style={{marginBottom: 15,paddingHorizontal:10,flexDirection:'row'}}>
             <View style={{width:'85%'}}>
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
               seeLessText={t("less")}
               seeMoreText={t("Read more")}
               numberOfLines={3}>
               {item?.text}
             </ReadMore>
             {item?.object_info?.extension == 'pdf' ?
                <TouchableOpacity activeOpacity={.8} onPress={() => Linking.openURL(item?.certificate)} style={styles.PDFContainer}>
                  <PDF height={70} width={70} />
                </TouchableOpacity>
                :
                <Image style={styles.Certificate} source={{ uri: item?.certificate }} />}
             </View>
             <View style={{flexDirection: 'row', columnGap: 15, marginLeft: 5}}>
              <TouchableOpacity onPress={() => handleDeleteAchievement(item?.id)}>
                <DELETE />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('UpdateOneAchievements', {
                    data: item,
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
            ))}
         
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdateAchievementCard;
