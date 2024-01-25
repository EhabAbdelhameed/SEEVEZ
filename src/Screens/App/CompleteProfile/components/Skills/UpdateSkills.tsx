import {View, Text, TouchableOpacity, TextInput, Alert, Image} from 'react-native';
import React, {useCallback, useEffect} from 'react';
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
import AppThunks from 'src/redux/app/thunks';
import {useAppDispatch} from 'src/redux/store';
import { useSelector } from 'react-redux';
import { selectUser } from 'src/redux/auth';
import { selectDone } from 'src/redux/app';

const UpdateSkills = () => {
  const [loading, setLoading] = React.useState(false);
  // const navigation = useNavigation<any>();
  const navigation = useNavigation();
  const CurrentUserData = useSelector(selectUser);
  const changeDone=useSelector(selectDone)
  // console.log(changeDone)
useEffect(() => {
changeDone?navigation.goBack():null
}, [changeDone]);
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const dispatch = useAppDispatch();
  const { title}: any = useRoute().params;

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
          {/* <BigLogo height={30} width={96} style={{marginLeft: 70}} />
           */}
          <Image
            source={require('../../../../../assets/images/seevezlogo.png')}
            style={{width: 100, height: 30}}
          />
        </View>
        <View style={styles.circles}>
          <RenderSvgIcon icon="CIRCLELOGIN" width={220} height={160} />
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.blueCircle}>
            <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
          </View>
          <View style={styles.loginTextContainer}>
            <View style={{width:32}}>
              {/* <RenderSvgIcon icon="ICON2CV" width={32} height={48} /> */}
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
              fontFamily: 'Noto Sans',
            }}>
           {title}
          </Text>
          <Formik
            initialValues={{Skills: ''}}
            onSubmit={values => {
              setLoading(true);
              const formdata = new FormData();
              formdata.append('user_id', CurrentUserData.id);

              formdata.append('name', values.Skills);
              if(title=='Skills'){
                dispatch(AppThunks.doAddSkills(formdata)).then((res: any) => {
                  dispatch(AppThunks.GetProfileInfo())
                  setLoading(false);
                });
              }else{
                dispatch(AppThunks.doAddIntersts(formdata)).then((res: any) => {
                  dispatch(AppThunks.GetProfileInfo())
                  setLoading(false);
                });
              }
              

              // navigation.navigate("ResetPassword")
            }}>
            {(props: any) => (
              <View>
                <InputView
                  name="Skills"
                  placeholder="Write here.."
                  // props={props}
                  {...props}
                />

                <View style={{height: appSizes.height * 0.28}} />

                <Button
                  loading={loading}
                  text={'Done'}
                  onPress={props.handleSubmit}
                />
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdateSkills;
