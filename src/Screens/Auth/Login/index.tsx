import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import { RenderSvgIcon } from '../../../Components/atoms/svg';
import { Form, Formik } from 'formik';
import { Input } from 'react-native-elements';
import InputView from '../../../Components/molecules/Input';
import Button from '../../../Components/molecules/Button';
import SocialCard from '../../../Components/molecules/SocialCard';
import DonotHaveAccountSection from '../../../Components/molecules/DonotHaveAccountSection';
import AuthTopSection from '../../../Components/molecules/AuthTopSection';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BigLogo, LogoWithName } from 'assets/Svgs';

const Login = () => {
  const navigation = useNavigation()
  const _handleNavigate = () => {
    navigation.navigate("ForgetPassword")
  }
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            {/* <Image source={require('../../../assets/images/logoWithName.png')} /> */}
            <BigLogo />
          </View>
          <View style={styles.bottomSection}>
            <View style={styles.circles}>
              <RenderSvgIcon icon="CIRCLELOGIN" width={233} height={237} />
            </View>
            <View style={styles.blueCircle}>
              <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
            </View>
            <AuthTopSection
              title="Log in"
              subtitle="Log in with your e-mail and password"
            />
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={values => {
                navigation.navigate("app")
              }}>
              {(props: any) => (
                <View>
                  <InputView
                    name="email"
                    placeholder="Write your email"
                    iconName={'RIGIHTININPUT'}
                    props={props}
                  />
                  <InputView
                    name="password"
                    placeholder="Write your password"
                    iconName={'EYE'}
                    secure={true}
                    props={props}
                  />
                  <Text style={styles.forgotPassword}
                    onPress={_handleNavigate}
                  >Forgot password ?</Text>
                  <Button text="Log in" onPress={props.handleSubmit} />
                </View>
              )}
            </Formik>
            <View style={styles.orContainer}>
              <View style={styles.line}></View>
              <Text style={styles.orText}>Or log in by</Text>
              <View style={styles.line}></View>
            </View>
            <View>
              <View style={styles.socialContainer}>
                <SocialCard iconName="FACEBOOK" text="Facebook" />
                <SocialCard iconName="LINKEDIN" text="Linkedin" />
              </View>
              <View style={styles.socialContainer}>
                <SocialCard iconName="GOOGLE" text="Google" />
                <SocialCard iconName="APPLE" text="Apple" />
              </View>
            </View>
            <DonotHaveAccountSection />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>

  );
};

export default Login;
