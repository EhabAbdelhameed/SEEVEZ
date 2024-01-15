import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import React, {useCallback} from 'react';
import styles from './styles';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import DonotHaveAccountSection from '../../../../../Components/molecules/DonotHaveAccountSection';
import AuthTopSection from '../../../../../Components/molecules/AuthTopSection';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../../../theme/appColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../../../../../Components/molecules/Button';

import {BigLogo} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {Formik} from 'formik';
import InputView from 'components/molecules/Input';
import {appSizes} from 'theme/appSizes';
import DateTimePicker from '@react-native-community/datetimepicker';
const UpdateTraining = () => {
  // const navigation = useNavigation<any>();
  const navigation = useNavigation();
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          backgroundColor: appColors.bg,
          marginTop: 40,
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <TouchableOpacity
            style={styles.skipContainer}
            onPress={_handleNavigate}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <BigLogo height={30} width={96} style={{marginLeft:70 }} />
        </View>
        <View style={styles.circles}>
          <RenderSvgIcon icon="CIRCLELOGIN" width={240} height={220} />
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.blueCircle}>
            <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
          </View>
          <View style={styles.loginTextContainer}>
            <View>
              <RenderSvgIcon icon="ICON2CV" width={32} height={48} />
            </View>
            <View style={[{alignItems: 'center'}]}>
              <Text style={[styles.loginText, {fontSize: 24}]}>
                Complete Profile
              </Text>
              <Text style={[styles.loginTextSub, {fontSize: 13}]}>
                Finish setting up your profile to get noticed by recruiters
              </Text>
            </View>
            <View>
              <RenderSvgIcon
                icon="ICONCV"
                width={40}
                height={48}
                style={styles.yellowIcon}
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: '#000',
              marginLeft: 8,
              marginBottom: 10,
            }}>
            Training Courses
          </Text>
          <Formik
            initialValues={{Training: ''}}
            onSubmit={values => {
              // navigation.navigate("ResetPassword")
            }}>
            {(props: any) => (
              <View>
                <InputView
                  name="Institute"
                  placeholder="Write here.."
                  // props={props}
                  {...props}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <TextInput
                    placeholder="Field of study"
                    style={{
                      borderRadius: 16,
                      borderColor: '#1D5EDD',
                      borderWidth: 1,
                      paddingHorizontal: 15,
                      paddingVertical: 4,
                      borderBottomWidth: 0.5,
                      height: 60,
                      width: '46%',
                    }}
                  />
                  <TextInput
                    placeholder="Grade"
                    style={{
                      borderRadius: 16,
                      borderColor: '#1D5EDD',
                      borderWidth: 1,
                      paddingHorizontal: 15,
                      paddingVertical: 4,
                      borderBottomWidth: 0.5,
                      height: 60,
                      width: '46%',
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 20,
                    marginBottom:20
                  }}>
                  <View style={{width: '46%'}}>
                    <Text
                      style={{color: '#000', fontSize: 16, fontWeight: '400',marginBottom:10,marginLeft:10}}>
                      Start date
                    </Text>
                    <View
                      style={{
                        borderRadius: 16,
                        borderColor: '#1D5EDD',
                        borderWidth: 1,
                        paddingHorizontal: 15,
                        paddingVertical: 4,
                        borderBottomWidth: 0.5,
                        height: 60,
                      
                      }}>

                      </View>
                  </View>
                  <View style={{width: '46%'}}>
                    <Text
                      style={{color: '#000', fontSize: 16, fontWeight: '400',marginBottom:10,marginLeft:10}}>
                      End date
                    </Text>
                    <View
                      style={{
                        borderRadius: 16,
                        borderColor: '#1D5EDD',
                        borderWidth: 1,
                        paddingHorizontal: 15,
                        paddingVertical: 4,
                        borderBottomWidth: 0.5,
                        height: 60,
                      
                      }}></View>
                  </View>
                </View>

                <Button text={'Done'} onPress={props.handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdateTraining;
