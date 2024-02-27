import React from 'react';
import { View, Text, Image, useWindowDimensions, StatusBar, TouchableOpacity } from 'react-native';
import Video from 'react-native-fast-video';
import { RenderSvgIcon } from '../../../Components/atoms/svg';
import styles from './styles';
import DonotHaveAccountSection from '../../../Components/molecules/DonotHaveAccountSection';
import RectangleBtn from './components/RectangleBtn';
// import Rectangle1Img from './../../../assets/images/Rectangle1.jpg';
// import Rectangle1Img2 from './../../../assets/images/Rectangle4.jpg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { appColors } from '../../../theme/appColors';
import { BigLogo } from 'assets/Svgs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector } from 'src/redux/store';
import { selectLang } from 'src/redux/lang';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
const SignUp = () => {
  const navigation = useNavigation()
  const { width, height } = useWindowDimensions()
  const lang = useAppSelector(selectLang);
  const { t, i18n } = useTranslation();
  // console.log(height/3)
  return (
    <SafeAreaView edges={['top']} style={[styles.container, { direction: lang == 'en' ? 'ltr' : 'rtl' }]}>
      <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingBottom: 0,
          backgroundColor: appColors.bg,
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}>

        <Video
          resizeMode="cover"
          repeat
          source={require('../../../assets/images/signUpVideo.mp4')}
          style={[styles.video, { height: height / 3.5 }]}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: '#fff',
            height: 40,
            width: 40,
            borderRadius: 25,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            top: 10,
            left: 10,
          }}
          activeOpacity={0.8}
        >
          <RenderSvgIcon icon='ARROWBACK' style={{ transform: lang == 'ar' ? [{ rotate: '180deg' }] : [{ rotate: '0deg' }] }}
            width={25} height={25} color={appColors.primary} />
        </TouchableOpacity>
        <View>
          <View style={styles.bottomSection}>
            <View style={styles.circles}>
              <RenderSvgIcon icon="CIRCLELOGIN" width={150} height={200} />
            </View>
            <View style={styles.blueCircle}>
              <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
            </View>
            <View style={styles.loginTextContainer}>
              <View style={{ width: 32 }}>
                {/* <RenderSvgIcon icon="ICON2CV" width={32} height={48} /> */}
              </View>
              <View>
                <Image
                  source={require('../../../assets/images/seevezlogo.png')}
                  style={{ width: 135, height: 40 }}
                />
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
            <View>
              <Text style={styles.signup}>{t("Sign up")}</Text>
              <Text style={styles.letsJumpIn}>{t("LetsJumpIn")}</Text>
            </View>
            <View style={styles.rowRectangles}>
              <RectangleBtn
                img={require("./../../../assets/images/Rectangle1.jpg")}
                title1={t('As a')}
                title2={t("Recruiter")}
              />
              <RectangleBtn
                img={require("./../../../assets/images/Rectangle4.jpg")}
                title1={t('As a')}
                title2={t('JobSeeker')}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <DonotHaveAccountSection type="Log in" />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
