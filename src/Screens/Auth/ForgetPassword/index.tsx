import {View, Text, Image, Alert, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {RenderSvgIcon} from '../../../Components/atoms/svg';
import {Formik} from 'formik';
import InputView from '../../../Components/molecules/Input';
import Button from '../../../Components/molecules/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../theme/appColors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import AuthThunks from 'src/redux/auth/thunks';
import {useAppDispatch} from 'src/redux/store';
import {useSelector} from 'react-redux';
import {selectReseted} from 'src/redux/auth';
import {useLoadingSelector} from 'src/redux/selectors';
import {ForgetSchema} from 'src/Formik/schema';

const ForgetPassword = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  const Reseted = useSelector(selectReseted);
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  // const loading = useLoadingSelector(AuthThunks.doResetPassword());

  useEffect(() => {
    if (Reseted) {
      navigation.navigate('Verification', {email, type: 'forget'});
      // navigation.navigate('ResetPassword', { email })
    }
  }, [Reseted]);

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.container}>
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
              source={require('../../../assets/images/Otp.png')}
              style={styles.img}
            />
          </View>
          <View style={styles.bottomSection}>
            <View style={styles.iconsContainer}>
            <View style={{width:48}}></View>
              {/* <RenderSvgIcon icon="ICON2CV" width={32} height={48} /> */}
              <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
              
              <RenderSvgIcon icon="ICONCV" width={40} height={48} />
            </View>
            <View style={{justifyContent:'center',alignItems:'center',marginBottom:20}}>
            <Image
              source={require('../../../assets/images/seevezlogo.png')}
              style={{width: 148, height: 47}}
            />
            </View>
          

            <Text style={styles.verificationText}>Forgot password ?</Text>
            <Text style={styles.verificationText2}>
              We will send you a one-time password on your email.
            </Text>
            <Formik
              validationSchema={ForgetSchema}
              initialValues={{email: ''}}
              onSubmit={values => {
                setLoading(true);
                const formData = new FormData();
                formData.append('email', values.email);
                setEmail(values.email);
                dispatch(AuthThunks.doForgetPassword(formData)).then(() =>
                  setLoading(false),
                );

                // navigation.navigate("Verification", { email:values.email })
              }}>
              {(props: any) => (
                <View>
                  <InputView
                    name="email"
                    placeholder="Enter your email"
                    // props={props}
                    iconName={'RIGIHTININPUT'}
                    {...props}
                  />
                  <Button
                    loading={loading}
                    text="Next"
                    onPress={props.handleSubmit}
                  />
                </View>
              )}
            </Formik>
            {/* <View style={{height: 50}} /> */}
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;
