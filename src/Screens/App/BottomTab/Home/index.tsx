import { View, Text, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Header from './components/Header';
import CompleteProfile from './components/CompleteProfile';
import BoxContentTitle from './components/BoxContentTitle';
import DashboardSection from './components/DashboardSection';
import User from './components/User';
import CompanySection from './components/CompanySection';
import Profile from './components/Profile';
import Polls from './components/Polls';
import Hashtags from './components/Hashtags';
import Communities from './components/Communities';
import Schedule from './components/Schedule';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from 'src/globalStyle';
import { appColors, appSizes } from 'theme';
import { PlayVideo, Trending } from 'assets/Svgs';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import AuthSlice, { selectUser } from 'src/redux/auth';
import { useSelector } from 'react-redux';
import AppThunks from 'src/redux/app/thunks';
import { RenderSvgIcon } from 'components/atoms/svg';
import Pending from './components/pending';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppSlice, { selectFollowingList } from 'src/redux/app';
import { selectLang } from 'src/redux/lang';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const CurrentUserData = useSelector(selectUser);
  const lang = useSelector(selectLang);

  // dispatch(AuthSlice.chnageisAuth(false))
  // const Following = AsyncStorage.getItem('FollowingList')
  const [followingList, setFollowingList] = useState<any[]>([]);
  const loadFollowingList = async () => {
    try {
      const followingListData = await AsyncStorage.getItem('FollowingList');

      if (followingListData !== null) {
        const parsedFollowingList = JSON.parse(followingListData);

        setFollowingList(parsedFollowingList);
      }
    } catch (error) {
      console.error('Error loading following list', error);
      // Handle error here, such as showing an alert to the user
    }
  };
  // console.log("585",ListFollowing)
  // console.log("HI",JSON.stringify(CurrentUserData))
  // const accessTocken=async()=>{
  //   const token: any = await AsyncStorage.getItem('USER_TOKEN');
  //   const accesstoken: any = await AsyncStorage.getItem('USER_ACCESS_TOKEN');
  //   console.log("AccessToken",accesstoken)
  //   // console.log("Token ",token)
  //    return token
  // }
  //  console.log("Current",CurrentUserData)
  React.useEffect(() => {
    // accessTocken();
    const RenderFunction = navigation.addListener('focus', () => {
      dispatch(AppThunks.GetProfileInfo());
      loadFollowingList();
      dispatch(AppSlice.changeDone(false));
    });
    return RenderFunction;
  }, [navigation]);
  React.useEffect(() => {
    loadFollowingList();
    dispatch(
      AppSlice.changePhotoData({
        image: null,
        addonesCaption: null,
        location: null,
        pdf: null,
        tagPepoles: null,
        key: null,
        names: null,
        market: null,
        exterinalLinks: null,
      }),
    );
  }, [followingList]);
  useEffect(() => {
    dispatch(AuthSlice.chnageVerified(false));
    dispatch(AuthSlice.chnageIsSignedUp(false));
    dispatch(AuthSlice.chnageReseted(false));
    dispatch(AppSlice.changeAccessToken(false));
    dispatch(
      AppSlice.changePhotoData({
        image: null,
        addonesCaption: null,
        location: null,
        pdf: null,
        tagPepoles: null,
        key: null,
        names: null,
        market: null,
        exterinalLinks: null,
      }),
    );
  }, []);
  console.warn(lang)
  return (
    <SafeAreaView edges={['top']} style={[globalStyles.screen, {
      // direction: 'ltr'
    }]}>
      <View style={globalStyles.screen}>
        <Header />
        <KeyboardAwareScrollView
          contentContainerStyle={{
            alignItems: 'center',
            paddingBottom: 130,
            paddingHorizontal: appSizes.padding_m,
          }}
          enableOnAndroid={true}
          keyboardShouldPersistTaps={'handled'}
          enableResetScrollToCoords={false}
          showsVerticalScrollIndicator={false}>
          {parseInt(CurrentUserData?.user_data?.complete_progress) ==
            100 ? null : (
            <CompleteProfile
              pers={parseInt(CurrentUserData?.user_data?.complete_progress)}
            />
          )}
          <View style={styles.rowContainer}>
            <BoxContentTitle
              title="My reels"
              onPress={() => {
                navigation.navigate('Reels');
              }}>
              <ImageBackground
                source={require('src/assets/images/Rectangle18.png')}
                style={styles.imgBg}
                resizeMode="contain">
                <PlayVideo />
              </ImageBackground>
            </BoxContentTitle>
            {CurrentUserData?.work_type == 'freelancer' ||
              CurrentUserData?.user_data?.user_type == 'company' ||
              CurrentUserData?.user_data?.user_type == 'company_admin' ? (
              <BoxContentTitle
                title={
                  CurrentUserData?.user_data?.user_type == 'company' ||
                    CurrentUserData?.user_data?.user_type == 'company_admin'
                    ? 'My Applicants'
                    : 'My connections'
                }
                onPress={() => {
                  navigation.navigate('Connections');
                }}>
                <User data={followingList[0]} />
                <User data={followingList[0]} />
                <User data={followingList[0]} />
                <View style={{ height: 8 }} />
              </BoxContentTitle>
            ) : (
              <BoxContentTitle
                title="My video CV"
                onPress={() => {
                  navigation.navigate('MyVideoCV');
                }}>
                <ImageBackground
                  source={require('src/assets/images/Rectangle17.png')}
                  style={styles.imgBg}
                  resizeMode="contain">
                  <PlayVideo />
                </ImageBackground>
              </BoxContentTitle>
            )}
          </View>
          <View style={styles.rowContainer}>
            <BoxContentTitle title="My analytics">
              <DashboardSection />
            </BoxContentTitle>
          </View>
          {CurrentUserData?.work_type == 'freelancer' ||
            CurrentUserData?.user_data?.user_type == 'company' ||
            CurrentUserData?.user_data?.user_type == 'company_admin' ? null : (
            <View style={styles.rowContainer}>
              <BoxContentTitle
                title="CV maker"
                onPress={() => {
                  navigation.navigate('Cv');
                }}>
                <ImageBackground
                  source={require('../../../../assets/images/cv.png')}
                  style={styles.imgBg2}
                  resizeMode="contain"></ImageBackground>
              </BoxContentTitle>
              <BoxContentTitle
                title="My connections"
                onPress={() => {
                  navigation.navigate('MyConnection');
                }}>
                <User data={followingList[0]} />
                <User data={followingList[1]} />
                <User data={followingList[2]} />
              </BoxContentTitle>
            </View>
          )}
          {CurrentUserData?.work_type == 'freelancer' ? null : (
            <View style={styles.rowContainer}>
              <BoxContentTitle
                title={
                  CurrentUserData?.user_data?.user_type == 'recruiter'
                    ? 'My workshop'
                    : 'My jobs'
                }>
                <CompanySection />
                <CompanySection />
                <CompanySection />
              </BoxContentTitle>
            </View>
          )}
          {CurrentUserData?.user_data?.user_type == 'recruiter' ||
            CurrentUserData?.user_data?.user_type == 'company' ||
            CurrentUserData?.user_data?.user_type == 'company_admin' ? (
            <View style={styles.rowContainer}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  backgroundColor: appColors.white,
                  paddingHorizontal: appSizes.padding_x,
                  paddingVertical: appSizes.padding_x,
                  marginTop: appSizes.spacing_m,
                  borderRadius: 50,
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 36,
                    height: 36,
                    borderRadius: 36,
                    backgroundColor: appColors.bg,
                  }}>
                  <RenderSvgIcon
                    icon="PLUSFOLLOW"
                    width={16}
                    height={16}
                    color={appColors.primary}
                  />
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '700',
                      color: appColors.dark,
                      fontFamily: 'Noto sanc',
                    }}>
                    Create a vacancy
                  </Text>
                </View>
              </View>
            </View>
          ) : null}
          {CurrentUserData?.user_data?.user_type == 'company' ||
            CurrentUserData?.user_data?.user_type == 'company_admin' ? (
            <View style={styles.rowContainer}>
              <BoxContentTitle title={'My internship'}>
                <CompanySection title={'My internship'} />
                <CompanySection title={'My internship'} />
                <CompanySection title={'My internship'} />
              </BoxContentTitle>
            </View>
          ) : null}
          <View style={styles.rowContainer}>
            <BoxContentTitle title="My polls" onPress={() => {
              navigation.navigate('MYPolls');
            }}>
              <Polls />
            </BoxContentTitle>
            <BoxContentTitle
              title="My profile"
              onPress={() =>
                CurrentUserData?.user_data?.user_type == 'company' ||
                  CurrentUserData?.user_data?.user_type == 'company_admin'
                  ? navigation.navigate('ProfileCompanyScreen')
                  : navigation.navigate('ProfileScreen')
              }>
              <Profile />
            </BoxContentTitle>
          </View>
          <View style={styles.rowContainer}>
            <BoxContentTitle title="My schedule">
              <Schedule />
            </BoxContentTitle>
          </View>
          <View style={styles.rowContainer}>
            <BoxContentTitle title="Hashtags">
              <Hashtags />
            </BoxContentTitle>
            <BoxContentTitle title="Trending now">
              <View style={styles.rowContainer}>
                <ImageBackground
                  source={require('../../../../assets/images/Rectangle171.png')}
                  style={[
                    {
                      height: 154,
                      flex: 1,
                    },
                  ]}
                  imageStyle={{
                    borderRadius: 10,
                  }}
                  resizeMode="cover">
                  <Trending style={styles.absIcon} />
                </ImageBackground>
                <ImageBackground
                  source={require('src/assets/images/Rectangle172.png')}
                  style={[
                    {
                      height: 154,
                      flex: 1,
                    },
                  ]}
                  imageStyle={{
                    borderRadius: 10,
                  }}
                  resizeMode="cover">
                  <Trending style={styles.absIcon} />
                </ImageBackground>
              </View>
            </BoxContentTitle>
          </View>
          <View style={styles.rowContainer}>
            <BoxContentTitle title="My communities">
              <Communities />
            </BoxContentTitle>
          </View>
          {CurrentUserData?.user_data?.user_type == 'company' ||
            CurrentUserData?.user_data?.user_type == 'company_admin' ? (
            <View style={styles.rowContainer}>
              <BoxContentTitle title="Pending requests">
                <Pending />
                <Pending />
              </BoxContentTitle>
            </View>
          ) : null}
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
