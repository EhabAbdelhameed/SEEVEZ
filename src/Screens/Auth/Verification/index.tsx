import {View, Text, Image, Alert, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {RenderSvgIcon} from '../../../Components/atoms/svg';
import {Formik} from 'formik';
import InputView from '../../../Components/molecules/Input';
import Button from '../../../Components/molecules/Button';
import DonotHaveAccountSection from '../../../Components/molecules/DonotHaveAccountSection';
import AuthTopSection from '../../../Components/molecules/AuthTopSection';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../theme/appColors';
import Video from 'react-native-fast-video';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useLoadingSelector} from 'src/redux/selectors';
import AuthThunks from 'src/redux/auth/thunks';
import {useAppDispatch} from 'src/redux/store';
import AuthSlice, {selectVerified} from 'src/redux/auth';
import {useSelector} from 'react-redux';
import DeviceInfo from 'react-native-device-info';
import {OtpSchema} from 'src/Formik/schema';
import OtpInputs from 'react-native-otp-inputs';
const Verification = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const {email, type}: any = useRoute().params;

  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(59);
  const [otpValue, setOtpValue] = React.useState('');

  // const { goBack, navigate } = useNavigation<any>()
  // const loading = useLoadingSelector(AuthThunks.doSignIn())
  const [loading, setLoading] = React.useState(false);

  const Verified = useSelector(selectVerified);
  useEffect(() => {
    dispatch(AuthSlice.chnageIsSignedUp(false));
    dispatch(AuthSlice.chnageReseted(false));
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  useEffect(() => {
    if (type == 'forget') {
      Verified && navigation.navigate('ResetPassword', {email, otpValue});
    } else {
      Verified && dispatch(AuthSlice.chnageisAuth(true));
    }
  }, [Verified]);

  const ActiveAccount = (values: any) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('email', email);
    formData.append('otp', values.otp);
    setOtpValue(values.otp);
    // formData.append('type', type == 'Forget' ? 'reset' : 'verify')

    dispatch(AuthThunks.doVerifyOTP(formData)).then(() => setLoading(false));
  };

  const ResendOTP = () => {
    const formData = new FormData();
    formData.append('email', email?.toLowerCase());

    dispatch(AuthThunks.doResendCode(formData));
    setSeconds(59);
  };
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      {/* <View style={styles.container}> */}
      <KeyboardAwareScrollView
        contentContainerStyle={{
          // alignItems: "center",
          // paddingBottom: 30,
          backgroundColor: appColors.bg,
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../assets/images/Verification.png')}
            style={styles.img}
          />
        </View>
        <View style={styles.bottomSection}>
          <RenderSvgIcon
            icon="CIRCLECV"
            width={64}
            height={32}
            style={{position: 'absolute', top: -15, alignSelf: 'center'}}
          />
          <View style={styles.loginTextContainer}>
            <View>
              <View style={{width: 32}} />
              {/* <RenderSvgIcon icon="ICON2CV" width={32} height={48} /> */}
            </View>
            <RenderSvgIcon icon="LOGOWITHTITLE" width={170} height={90} />
            <View>
              <RenderSvgIcon icon="ICONCV" width={40} height={48} />
            </View>
          </View>

          <Text style={styles.verificationText}>Otp Verification</Text>
          <Text style={styles.verificationText2}>
            We will send you a one-time password on this email Address :
            <Text style={{fontWeight: '700'}}>exampel@info.com</Text>
          </Text>
          <Formik
            validationSchema={OtpSchema}
            initialValues={{otp: ''}}
            onSubmit={values => {
              ActiveAccount(values);
              // navigation.navigate("ResetPassword")
            }}>
            {(props: any) => (
              <View>
                <InputView
                  name="otp"
                  placeholder="Your OTP Code"
                  // props={props}
                  {...props}
                />
                {/* <OtpInputs
                  handleChange={code => console.log(code)}
                  numberOfInputs={6}
                /> */}

                <Button
                loading={loading}
                  text={
                    type == 'forget'
                      ? 'Change Password'
                      : 'Activate the account'
                  }
                  onPress={props.handleSubmit}
                />
              </View>
            )}
          </Formik>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              disabled={seconds != 0}
              onPress={() => ResendOTP()}
              style={styles.resendCode}>
              Resend the code{' '}
            </Text>
            {seconds != 0 && (
              <Text style={styles.resendCode}>
                {minutes}:{seconds}
              </Text>
            )}
          </View>

          <View style={{height: 50}} />
        </View>
      </KeyboardAwareScrollView>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default Verification;
