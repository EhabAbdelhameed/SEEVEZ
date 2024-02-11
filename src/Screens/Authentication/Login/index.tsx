
import { View, Text, Image, } from 'react-native';
import React, { useEffect } from 'react';
import styles from './styles';
import { RenderSvgIcon } from '../../../Components/atoms/svg';
import DonotHaveAccountSection from '../../../Components/molecules/DonotHaveAccountSection';
import AuthTopSection from '../../../Components/molecules/AuthTopSection';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useAppDispatch } from 'src/redux/store';
import AuthSlice from 'src/redux/auth';
import Form from './Components/form';
import { Logo } from 'assets/images';
import SocialCard from 'components/molecules/Social Card';
import { Apple, FaceBook, Google, Linkedin } from 'assets/Svgs';

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      dispatch(AuthSlice.chnageReseted(false));
      dispatch(AuthSlice.chnageIsCompanyAdmin(false));
    });
    return RenderFunction;
  }, []);
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Image source={Logo} style={styles.Logo} />
        <View style={styles.bottomSection}>
          <RenderSvgIcon icon="CIRCLELOGIN" width={233} height={237} style={styles.circles} />
          <RenderSvgIcon icon="CIRCLECV" width={64} height={32} style={styles.blueCircle} />
          <AuthTopSection title="Log in" subtitle="Log in with your e-mail and password" />
          <Form />
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>Or log in by</Text>
            <View style={styles.line} />
          </View>
          <View>
            <View style={styles.socialContainer}>
              <SocialCard Icon={<FaceBook />} text="Facebook" />
              <SocialCard Icon={<Linkedin />} text="Linkedin" />
            </View>
            <View style={styles.socialContainer}>
              <SocialCard Icon={<Google />} text="Google" />
              <SocialCard Icon={<Apple />} text="Apple" />
            </View>
          </View>
          <DonotHaveAccountSection />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
