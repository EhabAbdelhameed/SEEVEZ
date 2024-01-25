import {View, Text, TouchableOpacity, TextInput, Alert, Image} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
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
import { appSizes } from 'theme/appSizes';
import AppThunks from 'src/redux/app/thunks';
import { useAppDispatch } from 'src/redux/store';
import { selectUser } from 'src/redux/auth';
import { useSelector } from 'react-redux';
import { selectDone } from 'src/redux/app';
import { Input } from 'react-native-elements';

const UpdateLanguages = () => {
  // const navigation = useNavigation<any>();
  const navigation = useNavigation();
  const CurrentUserData = useSelector(selectUser);
  const changeDone=useSelector(selectDone)
  const [Languages, setLanguages] = useState<any>([1]);

  // console.log(changeDone)  
useEffect(() => {
changeDone?navigation.goBack():null
}, [changeDone]);
  // console.log(CurrentUserData)
  const [loading, setLoading] = React.useState(false);
  const dispatch = useAppDispatch();
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          backgroundColor: appColors.bg,
      
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
            }}>
            Language
          </Text>
          <Formik
            initialValues={{Languages:[{name:'',rate:''}]}}
            onSubmit={values => {

              setLoading(true);
              const formdata = new FormData();
              values.Languages.map((item: any, index: any) => {
                formdata.append(`array[${index}][name]`, item.name);
                formdata.append(`array[${index}][rate]`, 5);
              });

            
              console.log(formdata);
              dispatch(AppThunks.doAddLanguages(formdata)).then((res: any) => {
                dispatch(AppThunks.GetProfileInfo())
                setLoading(false);
              });
              // navigation.navigate("ResetPassword")
            }}>
            {(props: any) => (
              <View>
              {Languages.map((lang: any, index: any) => (
                 <Input
                      {...props}
                      
                      name={`phones[${index}][phone]`}
                      inputContainerStyle={{
                        borderRadius: 16,
                        borderColor: '#1D5EDD',
                        borderWidth: 1,
                        paddingHorizontal: 15
                      }}
                      onChangeText={(e)=>props?.setFieldValue(`Languages[${index}]["name"]`,e)}
                      containerStyle={{
                        paddingHorizontal: 0,
                        marginVertical: 1,
                        height: 60,
                      }}
                    
                   
                      placeholder={`Enter your language ${index + 1}`}
                    />
              ))}
                <TouchableOpacity  onPress={() => {
                    setLanguages((prev: any) => {
                      return [...prev, 1];
                    });
                  }} style={{flexDirection: 'row', marginBottom: 20}}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 36,
                      height: 36,
                      borderRadius: 36,
                      backgroundColor: appColors.bg,
                    }}>
                    <RenderSvgIcon
                      icon="PLUSFOLLOW"
                      width={16}
                      height={16}
                      color={appColors.primary}
                    />
                  </View>
                  <View style={{justifyContent:'center',alignItems:'center'}}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '500',
                      marginLeft: 15,
                      color: '#000',
                    }}>
                    Add another language
                  </Text>
                  </View>
                </TouchableOpacity>
                <View style={{height:appSizes.height * 0.22}}/>

                <Button loading={loading} text={'Done'} onPress={props.handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdateLanguages;
