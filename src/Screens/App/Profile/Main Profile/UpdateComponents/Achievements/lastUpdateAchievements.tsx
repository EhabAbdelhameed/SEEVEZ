import {View, Text, TouchableOpacity, TextInput, Alert, Image, Platform} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import {RenderSvgIcon} from '../../../../../../Components/atoms/svg';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../../../../theme/appColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../../../../../../Components/molecules/Button';
import DocumentPicker from 'react-native-document-picker';
import {BigLogo, PHOTO} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {Formik} from 'formik';
import {appSizes} from 'theme/appSizes';
import { useAppDispatch } from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import { useSelector } from 'react-redux';
import { selectDone } from 'src/redux/app';
import { launchImageLibrary } from 'react-native-image-picker';


const UpdateOneAchievements = () => {
    const {data}: any = useRoute().params;
    console.log('Achev', data);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useAppDispatch();
  // const navigation = useNavigation<any>();
  const [Source, setSource] = useState<any>([]);
  const [achievements, setAchievements] = useState('');
  const changeDone=useSelector(selectDone)
      // console.log(changeDone)
  useEffect(() => {
    changeDone?navigation.goBack():null
  }, [changeDone]);
  const navigation = useNavigation();
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const openGallery = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      // The selected media is available in the result.uri
      // dispatch(setImageURL(result[0].uri));

      setSource(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled document picker');
      } else {
        console.error('DocumentPicker Error:', err);
      }
    }
  };
  const pick = () => {
    launchImageLibrary({quality: 0.5, mediaType: 'photo'}).then((res: any) => {
      setSource(res?.assets);
      // console.log("sdasdas "+JSON.stringify(res))
    });
  };
  
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
       <TouchableOpacity onPress={_handleNavigate} activeOpacity={0.8}>
            <RenderSvgIcon
              icon="ARROWBACK"
              width={30}
              height={30}
              color={appColors.primary}
            />
          </TouchableOpacity>
          {/* <BigLogo height={30} width={96} style={{marginLeft: 70}} />
           */}
          <Image
            source={require('../../../../../../assets/images/seevezlogo.png')}
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
                Complete profile
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
            Achievements 
          </Text>
          <Formik
            initialValues={{Achievements:data?.text||''}}
            onSubmit={values => {
              setLoading(true);
              const formdata = new FormData();
              formdata.append('id',data?.id );
              formdata.append('text',values.Achievements );
              // formdata.append('user_id', 3);
              // formdata.append('rate',5 );
             Source.length!=0? formdata.append('certificate', {
                uri: Source[0]?.uri,
                type: Source[0]?.type,
                name: Source[0]?.name,
              }):null
              // console.log("555555 "+JSON.stringify(formdata))
              dispatch(AppThunks.doUpdateAchievement(formdata)).then((res: any) => {
                dispatch(AppThunks.GetProfileInfo())
                setLoading(false);

              });
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
                  
                
                  onChangeText={e =>
                    props?.setFieldValue(`Achievements`, e)
                  }
                //   onBlur={props.handleBlur('Achievements')}
                  value={props.values.Achievements}
                  textAlignVertical="top"
                />
                <Text style={{marginBottom: 10}}>1500 characters</Text>
                <TouchableOpacity
                  onPress={openGallery}
                  style={styles.uploadContainer}>
                  <PHOTO style={{marginRight: 20}} />
                  <Text style={{fontSize: 20, color: appColors.primary, fontFamily: 'Noto Sans'}}>
                    {Source.length == 0
                      ? 'Update certificate image'
                      : Source[0].name}
                  </Text>
                </TouchableOpacity>
                <View style={{height:appSizes.height * 0.06}}/>
                <Button loading={loading} text={'Done'} onPress={props.handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdateOneAchievements;
