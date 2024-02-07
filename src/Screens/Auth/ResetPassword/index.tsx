import {View, Text, Image, Alert, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {RenderSvgIcon} from 'components/atoms/svg';
import {Formik} from 'formik';
import InputView from 'components/molecules/Input';
import Button from 'components/molecules/Button';
import DonotHaveAccountSection from 'components/molecules/DonotHaveAccountSection';
import AuthTopSection from 'components/molecules/AuthTopSection';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from 'theme/appColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import {BigLogo} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch} from 'src/redux/store';
import {useLoadingSelector} from 'src/redux/selectors';
import AuthThunks from 'src/redux/auth/thunks';
import AuthSlice, {selectReseted} from 'src/redux/auth';
import {ResetSchema} from 'src/Formik/schema';
import {useSelector} from 'react-redux';
import CustomInput from 'components/molecules/Input/CustomInput';

const ResetPassword = () => {
  const navigation = useNavigation();
  const {email, otpValue}: any = useRoute().params;
  const dispatch = useAppDispatch();
  // const loading = useLoadingSelector(AuthThunks.doResetPassword());
  const [Token, setToken] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const reseted = useSelector(selectReseted);
  useEffect(() => {
    dispatch(AuthSlice.chnageVerified(false));

    reseted ? navigation.navigate('login') : null;
  }, [reseted]);
  return (
    // <View style={styles.container}>
    <SafeAreaView edges={['top']} style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          // alignItems: "center",
          // paddingBottom: 30,
          backgroundColor: appColors.bg,
          paddingTop: 10,
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../assets/images/seevezlogo.png')}
            style={{width: 148, height: 47}}
          />
        </View>
        <View style={styles.circles}>
          <RenderSvgIcon icon="CIRCLELOGIN" width={270} height={237} />
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.blueCircle}>
            <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
          </View>
          <AuthTopSection
            style={{
              marginTop: 50,
            }}
            titleStyle={{
              fontSize: 32,
            }}
            title="Reset password ?"
            subtitle="Lorem ipsum dolor sit amet consectetur. Posuere pellentesque morbi placerat orci"
          />
          <Formik
            validationSchema={ResetSchema}
            initialValues={{password: '', confirmPassword: ''}}
            onSubmit={values => {
              setLoading(true);
              const formData = new FormData();

              formData.append('email', email?.toLowerCase());
              formData.append('otp', otpValue);

              formData.append('password', values.password);
              formData.append('password_confirmation', values.confirmPassword);

              dispatch(AuthThunks.doResetPassword(formData)).then(() =>
                setLoading(false),
              );
            }}>
            {(props: any) => (
              <View>
                <CustomInput
                  {...props}
                  Label={'password'}
                  placeholder="Enter your password"
                  secureTextEntry={true}
                />

                <CustomInput
                  {...props}
                  Label={'confirmPassword'}
                  placeholder="Confirm your password"
                  secureTextEntry={true}
                />
                <View style={{height: 50}} />

                <Button
                  text="Get started"
                  loading={loading}
                  onPress={props.handleSubmit}
                  style={styles.btn}
                />
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ResetPassword;
