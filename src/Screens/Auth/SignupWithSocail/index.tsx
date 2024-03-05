import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import { RenderSvgIcon } from '../../../Components/atoms/svg';
import DonotHaveAccountSection from '../../../Components/molecules/DonotHaveAccountSection';
import AuthTopSection from '../../../Components/molecules/AuthTopSection';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { appColors } from '../../../theme/appColors';
import { useNavigation, useRoute } from '@react-navigation/native';
import SocailBtn from './components/SocailBtn';
import Button from '../../../Components/molecules/Button';
import { BigLogo } from 'assets/Svgs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector } from 'src/redux/store';
import { selectLang } from 'src/redux/lang';
import { useTranslation } from 'react-i18next';
// import { LoginManager, AccessToken } from 'react-native-fbsdk';
// import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
const SignupWithSocail = () => {
  const { work_type, title }: any = useRoute().params
  const lang = useAppSelector(selectLang);
  const { t, i18n } = useTranslation();
  const navigation = useNavigation<any>()
//   const googleSignIn = async () => {

//     GoogleSignin.configure({
//         webClientId: '766263686299-qj2lg59kpq1u4cdf7c0t1qha6kd5h2j6.apps.googleusercontent.com'
//     });
//     try {
//         await GoogleSignin.hasPlayServices();
//         const userInfo = await GoogleSignin.signIn()
//         const { accessToken } = await GoogleSignin.getTokens();

//         console.log('user ====================================');
//         // dispatch(GoogleSign(accessToken));
//         console.log(accessToken)
//         console.log('====================================');

//     } catch (error: any) {
//         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//             // user cancelled the login flow
//         } else if (error.code === statusCodes.IN_PROGRESS) {
//             // operation (e.g. sign in) is in progress already
//         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//             // play services not available or outdated
//         } else {
//             // some other error happened
//         }
//         console.log('errr====================================');
//         console.log(JSON.stringify(error));
//         console.log('====================================');
//     }
// };
  return (
    <SafeAreaView edges={['top']} style={[styles.container, { direction: lang == 'en' ? 'ltr' : 'rtl' }]}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          // alignItems: "center",
          // paddingBottom: 30,
          backgroundColor: appColors.bg,
          // paddingTop: 40
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={"handled"}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoContainer}>
          {/* <Image source={require('../../../assets/images/logoWithName.png')} /> */}
          <Image
            source={require('../../../assets/images/seevezlogo.png')}
            style={{ width: 148, height: 47 }}
          />
        </View>
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
        <View style={styles.circles}>
          <RenderSvgIcon icon="CIRCLELOGIN" width={240} height={220} />
        </View>
        <View style={styles.bottomSection}>

          <View style={styles.blueCircle}>
            <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
          </View>
          <AuthTopSection
            title={t("Sign up")}
            subtitle=""
          />
          {/* <SocailBtn onpress={()=>console.log("ehab")} title={t("Facebook")} icon='FACEBOOK' />
          <SocailBtn onpress={()=>console.log("moh")} title={t("Linkedin")} icon='LINKEDIN' />

          <SocailBtn onpress={googleSignIn} title={t("Google")} icon='GOOGLE' />
          <SocailBtn onpress={()=>console.log("ehab")} title={t("Apple")} icon='APPLE' />
          <View style={styles.orContainer}>
            <View style={styles.line}></View>
            <Text style={styles.orText}>{t("orSignUpBy")}</Text>
            <View style={styles.line}></View>
          </View> */}
          <Button text={t("continueWithEmail")} onPress={() => { navigation.navigate("signup2", { work_type: work_type, title: title }) }}
            style={styles.btn}
            textStyle={{
              color: appColors.primary
            }}
          />

          <DonotHaveAccountSection noLang type='Log in' />

          <View style={{ height: 50 }} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignupWithSocail;
