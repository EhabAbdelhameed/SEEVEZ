import {View, Text, Image, Alert, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import AuthSlice, {selectIsSignUpCompany, selectVerified} from 'src/redux/auth';
import {useSelector} from 'react-redux';
import DeviceInfo from 'react-native-device-info';
import {OtpSchema} from 'src/Formik/schema';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';

const Verification = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [value,setValue]=useState('')
  const {email, type}: any = useRoute().params;
  const CELL_COUNT = 4;
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(59);
  const [otpValue, setOtpValue] = React.useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });
  // const { goBack, navigate } = useNavigation<any>()
  // const loading = useLoadingSelector(AuthThunks.doSignIn())
  const [loading, setLoading] = React.useState(false);

  const Verified = useSelector(selectVerified);
  const ChangeCompanyAdmin = useSelector(selectIsSignUpCompany);

  useEffect(() => {
   
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

      Verified&&!ChangeCompanyAdmin&& dispatch(AuthSlice.chnageisAuth(true))
      Verified&&ChangeCompanyAdmin&&navigation.navigate('login')
    }
  }, [Verified,]);

  const ActiveAccount = () => {
   
    setLoading(true);
    const formData = new FormData();
    formData.append('email', email);
    formData.append('otp', value);
    setOtpValue(value);
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
            {/* <RenderSvgIcon icon="LOGOWITHTITLE" width={170} height={90} /> */}
            <Image
                  source={require('../../../assets/images/seevezlogo.png')}
                  style={{width: 135, height: 40,marginTop:10,marginBottom:10}}
                />
            <View>
              <RenderSvgIcon icon="ICONCV" width={40} height={48} />
            </View>
          </View>

          <Text style={styles.verificationText}>OTP Verification</Text>
          <Text style={styles.verificationText2}>
            We will send you a one-time password on this email Address :
            <Text style={{fontWeight: '700'}}>{email}</Text>
          </Text>
   
              <View>
                {/* <InputView
                  name="otp"
                  placeholder="Your OTP Code"
                  // props={props}
                  {...props}
                /> */}
                {/* <OtpInputs
                  handleChange={code => console.log(code)}
                  numberOfInputs={6}
                /> */}
                <CodeField
                            ref={ref}
                            {...props}
                            value={value}
                            onChangeText={setValue}
                            cellCount={CELL_COUNT}
                            rootStyle={{}}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            renderCell={({ index, symbol, isFocused }) => (
                                <View
                                    onLayout={getCellOnLayoutHandler(index)}
                                    key={index}
                                    style={[
                                        styles.cellRoot,
                                        isFocused && styles.focusCell,
                                    ]}>
                                    <Text style={styles.cellText}>
                                        {symbol || (isFocused ? <Cursor /> : null)}
                                    </Text>
                                </View>
                            )}
                        />

                <Button
                loading={loading}
                  text={
                    type == 'forget'
                      ? 'Change password'
                      : 'Activate your account'
                  }
                  onPress={()=>ActiveAccount()}
                />
              </View>
       
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
