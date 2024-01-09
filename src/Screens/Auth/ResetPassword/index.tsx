import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import { RenderSvgIcon } from 'components/atoms/svg';
import { Formik } from 'formik';
import InputView from 'components/molecules/Input';
import Button from 'components/molecules/Button';
import DonotHaveAccountSection from 'components/molecules/DonotHaveAccountSection';
import AuthTopSection from 'components/molecules/AuthTopSection';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { appColors } from 'theme/appColors';
import { useNavigation } from '@react-navigation/native';
import { BigLogo } from 'assets/Svgs';
import { SafeAreaView } from 'react-native-safe-area-context';

const ResetPassword = () => {
  const navigation = useNavigation()
  return (
    // <View style={styles.container}>
    <SafeAreaView edges={['top']} style={styles.container}>

      <KeyboardAwareScrollView
        contentContainerStyle={{
          // alignItems: "center",
          // paddingBottom: 30,
          backgroundColor: appColors.bg,
          paddingTop: 10


        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={"handled"}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoContainer}>
          <BigLogo />

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
            marginTop:50,
          }}
          titleStyle={{
            fontSize: 35,
          }}
            title="Reset password ?"
            subtitle="Lorem ipsum dolor sit amet consectetur. Posuere pellentesque morbi placerat orci"
          />
          <Formik
            initialValues={{ password: '', confirmPassword: '', }}
            onSubmit={values => {
          
              alert(values)
            }}>
            {(props: any) => (
              <View>
               
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
          <View style={{ height: 50 }} />

                <Button text="Get started" onPress={props.handleSubmit} style={styles.btn}/>
              </View>
            )}
          </Formik>
   
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ResetPassword;
