import {View, Text, TouchableOpacity, TextInput, Alert, Image} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
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
import { appSizes } from 'theme/appSizes';
import AppThunks from 'src/redux/app/thunks';
import { useAppDispatch } from 'src/redux/store';
import { useSelector } from 'react-redux';
import { selectDone } from 'src/redux/app';

const UpdateCompanyAbout = () => {
  // const navigation = useNavigation<any>();
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false);
  const [about,setAbout]=useState('')
  const dispatch = useAppDispatch();
  const _handleNavigate = useCallback(
      () => {
          navigation.goBack();
      },
      [],
  )
  const changeDone = useSelector(selectDone);
  // console.log(changeDone)
  useEffect(() => {
    changeDone ? navigation.goBack() : null;
  }, [changeDone]);
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          backgroundColor: appColors.bg,
          marginTop:40,
          
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
              fontFamily: 'Noto Sans',
            }}>
            About
          </Text>
          <Formik
            initialValues={{About: ''}}
            onSubmit={values => {
              setLoading(true);
              const formdata = new FormData();

              formdata.append('about', about);
             

              console.log(formdata);
              dispatch(AppThunks.doAddCompanyAbout(formdata)).then(
                (res: any) => {
                  setLoading(false);
                },
              );
              // navigation.navigate("ResetPassword")
            }}>
            {(props: any) => (
              <View>
                <TextInput
                  multiline
                  numberOfLines={10} // Set the number of lines you want to display
                  style={styles.textArea} // Define your own styles for the text area
                  placeholder="Write here.."
                  placeholderTextColor={'#B9B9B9'}
                  
                  onChangeText={(e)=>setAbout(e)}
                  onBlur={props.handleBlur('About')}
                  value={props.values.About}
                  textAlignVertical="top"
                />
                <View style={{height:appSizes.height * 0.09}}/>
                <Button loading={loading}  text={'Done'} onPress={props.handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdateCompanyAbout;