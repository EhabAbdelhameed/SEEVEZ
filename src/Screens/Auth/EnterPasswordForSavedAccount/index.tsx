import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { RenderSvgIcon } from 'components/atoms/svg';
import AuthTopSection from 'components/molecules/AuthTopSection';
import { Formik } from 'formik';
import InputView from 'components/molecules/Input';
import Button from 'components/molecules/Button';
import DonotHaveAccountSection from 'components/molecules/DonotHaveAccountSection';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const EnterPasswordForSavedAccount = () => {
  const navigation = useNavigation()
  const _handleNavigate = () => {
    navigation.navigate("ForgetPassword")
  }
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/images/logoWithName.png')} />
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
            subtitle="Write your password to log in"
          />
          <View style={styles.containerr}>
            <View style={styles.innerContainer}>
              <RenderSvgIcon icon="OPROJECTS" width={40} height={40} />
              <View>
                <Text style={styles.text}>O-Project</Text>
                <Text style={styles.text2}>O-Project@info.com</Text>
              </View>
            </View>
          </View>
          <Formik
            initialValues={{ password: '' }}
            onSubmit={values => Alert.alert(JSON.stringify(values))}>
            {(props: any) => (
              <View>
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
          <View style={{ marginTop: 'auto' }}>
            <DonotHaveAccountSection />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EnterPasswordForSavedAccount;
