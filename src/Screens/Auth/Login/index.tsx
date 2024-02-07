import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {RenderSvgIcon} from '../../../Components/atoms/svg';
import {Form, Formik} from 'formik';
import {Input} from 'react-native-elements';
import InputView from '../../../Components/molecules/Input';
import Button from '../../../Components/molecules/Button';
import SocialCard from '../../../Components/molecules/SocialCard';
import DonotHaveAccountSection from '../../../Components/molecules/DonotHaveAccountSection';
import AuthTopSection from '../../../Components/molecules/AuthTopSection';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BigLogo, LogoWithName} from 'assets/Svgs';

import {useAppDispatch} from 'src/redux/store';
import AuthThunks from 'src/redux/auth/thunks';
import {useSelector} from 'react-redux';
import {useLoadingSelector} from 'src/redux/selectors';
import AuthSlice, {selectIsSignUpCompany, selectIsSignedUp, selectReseted, selectVerified} from 'src/redux/auth';
import {LoginSchema} from 'src/Formik/schema';
import CustomInput from 'components/molecules/Input/CustomInput';
const Login = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const Reseted = useSelector(selectReseted);
  // const signUpCompany=useSelector(selectIsSignUpCompany)
  const dispatch = useAppDispatch();
  const Verified = useSelector(selectVerified);
  const signedUp = useSelector(selectIsSignedUp);
  useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      dispatch(AuthSlice.chnageReseted(false));
      dispatch(AuthSlice.chnageIsCompanyAdmin(false));

    });
    return RenderFunction;
  }, []);
  // useEffect(() => {
  //   !Verified && navigation.navigate('Verification', {email, type: 'register'});
  // }, [Verified]);

  const _handleNavigate = () => {
    navigation.navigate('ForgetPassword');
  };

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/images/seevezlogo.png')}
              style={{width: 148, height: 40}}
            />
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
              validationSchema={LoginSchema}
              initialValues={{email: '', password: ''}}
              onSubmit={values => {
                setLoading(true);
                setEmail(values.email);
                const formdata = new FormData();
                formdata.append('email', values.email);
                formdata.append('password', values.password);

                dispatch(AuthThunks.doSignIn(formdata)).then((res: any) => {
                  setLoading(false);
                  console.log("Verified ",Verified)
                  if (!Verified&&signedUp) {
                    navigation.navigate('Verification', {
                      email: values.email,
                      type: 'register',
                    });
                  }
                });

                // navigation.navigate("app")
              }}>
              {(props: any) => (
                <View>
                  <InputView
                    {...props}
                    name="email"
                    placeholder="Write your email"
                    iconName={'RIGIHTININPUT'}
                  />
                  {/* <InputView
                    {...props}
                    name="password"
                    placeholder="Write your password"
                    iconName={'EYE'}
                    secure={true}
                  /> */}
                    <CustomInput
                  {...props}
                  Label={'password'}
                  placeholder="Write your password"
                  secureTextEntry={true}
                />
                  <Text style={styles.forgotPassword} onPress={_handleNavigate}>
                    Forgot password ?
                  </Text>
                  <Button
                    loading={loading}
                    text="Login"
                    onPress={props.handleSubmit}
                  />
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
