import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {RenderSvgIcon} from '../../../Components/atoms/svg';
import {Formik} from 'formik';
import InputView from '../../../Components/molecules/Input';
import Button from '../../../Components/molecules/Button';
import DonotHaveAccountSection from '../../../Components/molecules/DonotHaveAccountSection';
import AuthTopSection from '../../../Components/molecules/AuthTopSection';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../theme/appColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import {BigLogo, PDF} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import DocumentPicker from 'react-native-document-picker';
import {RegistSchema, RegistSchemaCompany} from '../../../Formik/schema';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// import {useAppDispatch} from 'src/redux/store';
import AuthThunks from 'src/redux/auth/thunks';
import DeviceInfo from 'react-native-device-info';
const SignupTwo = () => {
  const UineqId = async () => {
    const ff = await DeviceInfo.getUniqueId();
    return ff;
  };
  const DeviceVersion = async () => {
    const ff = await DeviceInfo.getVersion();

    return ff;
  };
  const DeviceModel = async () => {
    const ff = await DeviceInfo.getModel();
    return ff;
  };

  const Dispatch = useDispatch();
  const uploadFile = async (setFieldValue: any, name: any) => {
    try {
      const res: any = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setFieldValue(name.replace(/\s/g, ''), {
        uri: res[0]?.uri,
        type: res[0]?.type,
        name: res[0]?.name,
      });
    } catch (err) {
      setFieldValue(name.replace(/\s/g, ''), '');
      if (DocumentPicker.isCancel(err)) {
        console.log('Canceled');
      } else {
        console.log('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  const {work_type, title}: any = useRoute().params;
  console.log(work_type, title);
  const navigation = useNavigation<any>();
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
          {/* <Image source={require('../../../assets/images/logoWithName.png')} /> */}
          <BigLogo />
          {/* <RenderSvgIcon
            icon='LOGOWITHTITLE'
            width={100}
            height={50}
            style={{width:"100%",height:"100%"}}
          /> */}
        </View>
        <View style={styles.circles}>
          <RenderSvgIcon icon="CIRCLELOGIN" width={270} height={237} />
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.blueCircle}>
            <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
          </View>
          <AuthTopSection
            title="Sign up"
            subtitle={
              title == 'Sign up as a job seeker'
                ? 'as a job seeker'
                : title == 'Sign up as a recruiter' && work_type !== 'Company'
                ? 'as a Freelancer recruiter'
                : work_type == 'Company'
                ? 'Company'
                : ''
            }
          />
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              password: '',
              confirmPassword: '',
              code: '',
              phone: '',
              taxId: '',
            }}
            // validationSchema={work_type === 'Company' ? RegistSchemaCompany : RegistSchema}
            onSubmit={(values) => {
              const formdata = new FormData();

              formdata.append('name', values.fullName);
              formdata.append('country_code', values.code==''?'+20':values.code.dial_code);
              formdata.append('phone_number', values.phone);
              formdata.append('email', values.email);
              formdata.append('password', values.password);
              formdata.append('password_confirmation', values.confirmPassword);
              formdata.append('device_id', UineqId());
              formdata.append('device_kind', Platform.OS);
              formdata.append('device_model', DeviceModel());
              formdata.append('device_version', DeviceVersion());
              if (
                title == 'Sign up as a recruiter' &&
                work_type !== 'Company'
              ) {
                formdata.append('work_type', work_type);
                // Dispatch(AuthThunks.doSignUpJobSeeker(formdata));
              }

              if (work_type == 'Company') {
                // formdata.append("tax_id",values.taxId)
                // formdata.append("tax_card_document",values.password)
                // formdata.append("commercial_registration_d",values.password)
              }

              Dispatch(AuthThunks.doSignUpRecruiter(formdata));
              // console.log(JSON.stringify(formdata))

              // navigation.navigate('Verification');
            }}>
            {(props: any) => (
              <View>
                <InputView
                  name="fullName"
                  placeholder="Your full name"
                  props={props}
                />
                <InputView
                  name="phone"
                  placeholder="Your phone"
                  props={props}
                />
                <InputView
                  name="email"
                  placeholder="Write your email"
                  iconName={'RIGIHTININPUT'}
                  props={props}
                />
                {work_type == 'Company' ? (
                  <View>
                    <InputView
                      name="taxID"
                      placeholder="Enter the taxID"
                      //  iconName={'RIGIHTININPUT'}
                      props={props}
                    />
                    <View style={styles.DocStyle}>
                      <View style={{flexDirection: 'row'}}>
                        <PDF />
                        <Text
                          style={{
                            marginLeft: 10,
                            fontSize: 20,
                            color: '#15439D',
                          }}>
                          Upload Tax card
                        </Text>
                      </View>
                    </View>
                    <View style={styles.DocStyle}>
                      <View style={{flexDirection: 'row'}}>
                        <PDF />
                        <Text
                          style={{
                            marginLeft: 10,
                            fontSize: 20,
                            color: '#15439D',
                          }}>
                          Upload commercial registration
                        </Text>
                      </View>
                    </View>
                  </View>
                ) : null}
                <InputView
                  name="password"
                  placeholder="Write your password"
                  iconName={'EYE'}
                  secure={true}
                  props={props}
                />
                <InputView
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  iconName={'EYE'}
                  secure={true}
                  props={props}
                />
                <View style={styles.rowAgree}>
                  <TouchableOpacity style={styles.Circle}>
                    <View style={styles.innerCircle} />
                  </TouchableOpacity>
                  <Text style={styles.agree}>
                    I agree to the seevez{' '}
                    <Text style={styles.agreeLine}>terms & condiitions</Text>{' '}
                    and the seevez{' '}
                    <Text style={styles.agreeLine}>privacy policy</Text>
                  </Text>
                </View>
                <Button text="Sign up" onPress={props.handleSubmit} />
              </View>
            )}
          </Formik>
          <DonotHaveAccountSection noLang type="Log in" />
          <View style={{height: 50}} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignupTwo;
