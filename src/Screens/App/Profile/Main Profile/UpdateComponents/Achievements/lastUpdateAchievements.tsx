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
import { selectAccessToken, selectDone } from 'src/redux/app';
import { launchImageLibrary } from 'react-native-image-picker';
import TopHeader from 'screens/App/CompleteProfile/components/Header/TopHeader';
import BottomHeader from 'screens/App/CompleteProfile/components/Header/BottomHeader';
import AuthSlice from 'src/redux/auth';
import { selectLang } from 'src/redux/lang';
import { useTranslation } from 'react-i18next';


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
  const AccessToken = useSelector(selectAccessToken);
  useEffect(() => {
    AccessToken ? dispatch(AuthSlice.chnageisAuth(false)) : null;
  }, [AccessToken]);
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
  const lang = useSelector(selectLang);
  const {t, i18n} = useTranslation();
  return (
    <SafeAreaView edges={['top']} style={[styles.container,{direction:lang=="ar"?'rtl':'ltr'}]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          backgroundColor: appColors.bg,
       
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}>
     <TopHeader/>
        <View style={styles.bottomSection}>
         <BottomHeader/>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: '#000',
              marginLeft: 8,
              fontFamily: 'Noto Sans',
            }}>
            {t('achievements')}
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
                  style={[styles.textArea,{textAlign:lang=='ar'?'right':'left'}]} // Define your own styles for the text area
                  placeholder={t("writeHere")}
                  placeholderTextColor={'#B9B9B9'}
                  
                
                  onChangeText={e =>
                    props?.setFieldValue(`Achievements`, e)
                  }
                //   onBlur={props.handleBlur('Achievements')}
                  value={props.values.Achievements}
                  textAlignVertical="top"
                />
                <Text style={{marginBottom: 10}}>{t("1500 characters")}</Text>
                <TouchableOpacity
                  onPress={openGallery}
                  style={styles.uploadContainer}>
                  <PHOTO style={{marginRight: 20}} />
                  <Text style={{fontSize: 20, color: appColors.primary, fontFamily: 'Noto Sans'}}>
                    {Source.length == 0
                      ? t('uploadCertificateImage')
                      : Source[0].name}
                  </Text>
                </TouchableOpacity>
                <View style={{height:appSizes.height * 0.06}}/>
                <Button loading={loading} text={t('Done')} onPress={props.handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdateOneAchievements;
