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
import { useTranslation } from 'react-i18next';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const CurrentUserData = useSelector(selectUser);
  const lang = useSelector(selectLang);

  const { t, i18n } = useTranslation();
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
  return (
    <SafeAreaView edges={['top']} style={[globalStyles.screen, { direction: lang == 'en' ? 'ltr' : 'rtl' }]}>
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
              title={t("myReels")}
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
                    ? t('myApplicants')
                    : t('myConnections')
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
                title={t("myVideoCv")}
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

            <BoxContentTitle Change title={t("myAnalytics")}>
              <View style={{
                backgroundColor: '#3c3c3cc9',
                zIndex: 100,
                flex: 1,
                height: '100%',
                width: '100%',
                position: 'absolute',
                borderRadius: 20
              }}></View>
              <View style={{
                padding: appSizes.padding_s
              }}>
                <DashboardSection />
              </View>
            </BoxContentTitle>
          </View>
          {CurrentUserData?.work_type == 'freelancer' ||
            CurrentUserData?.user_data?.user_type == 'company' ||
            CurrentUserData?.user_data?.user_type == 'company_admin' ? null : (
            <View style={styles.rowContainer}>
              <BoxContentTitle
                title={t("cvMaker")}
                onPress={() => {
                  navigation.navigate('Cv');
                }}>
                <ImageBackground
                  source={require('../../../../assets/images/cv.png')}
                  style={styles.imgBg2}
                  resizeMode="contain"></ImageBackground>
              </BoxContentTitle>

              <BoxContentTitle
                title={t('myConnections')}
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
                Change
                title={
                  CurrentUserData?.user_data?.user_type == 'recruiter'
                    ? t('myWorkshop')
                    : t('myJobs')
                }>
                <View style={{
                  backgroundColor: '#3c3c3cc9',
                  zIndex: 100,
                  flex: 1,
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  borderRadius: 20
                }}></View>
                <View style={{
                  padding: appSizes.padding_s
                }}>
                  <CompanySection />
                  <CompanySection />
                  <CompanySection />
                </View>
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
                    {t("createAVacancy")}

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
            <BoxContentTitle title={t("myPolls")} onPress={() => {
              navigation.navigate('MYPolls');
            }}>
              <Polls />
            </BoxContentTitle>
            <BoxContentTitle
              title={t("myProfile")}
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
            <BoxContentTitle Change title={t("mySchedule")}>
              <View style={{
                backgroundColor: '#3c3c3cc9',
                zIndex: 100,
                flex: 1,
                height: '100%',
                width: '100%',
                position: 'absolute',
                borderRadius: 20
              }}></View>
              <View style={{
                padding: appSizes.padding_s,
                width: '100%'
              }}>
                <Schedule />
              </View>
            </BoxContentTitle>
          </View>
          <View style={styles.rowContainer}>
            <BoxContentTitle title={t("hashtags")}>
              <Hashtags />
            </BoxContentTitle>
            <BoxContentTitle title={t("trendingNow")}>
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
            <BoxContentTitle Change title={t("myCommunities")}>
              <View style={{
                backgroundColor: '#3c3c3cc9',
                zIndex: 100,
                flex: 1,
                height: '100%',
                width: '100%',
                position: 'absolute',
                borderRadius: 20
              }}></View>
              <View style={{
                padding: appSizes.padding_s,
                width: '100%'
              }}>
                <Communities />
              </View>
            </BoxContentTitle>
          </View>
          {CurrentUserData?.user_data?.user_type == 'company' ||
            CurrentUserData?.user_data?.user_type == 'company_admin' ? (
            <View style={styles.rowContainer}>
              <BoxContentTitle title={t("pendingRequests")}>
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
