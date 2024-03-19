import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
import {appColors} from '../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../Components/atoms/svg';
import {AVATAR, Star} from 'assets/Svgs';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from '../styles';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
import {selectUser} from 'src/redux/auth';
import {Formik} from 'formik';
import CustomInput from 'components/molecules/Input/CustomInput';
import Button from 'components/molecules/Button';
import NewPicker from 'components/molecules/PhonePicker';
import {Input} from 'react-native-elements';
import { appSizes } from 'theme';
import { FirstApplaySchema, LoginSchema } from 'src/Formik/schema';
import { useAppDispatch } from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import { selectJobQuestions } from 'src/redux/app';
const Formick = () => {
  const {id}: any = useRoute().params;
 
  const navigation = useNavigation<any>();
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  const User = useSelector(selectUser);
  const dispatch=useAppDispatch()
  const Questions=useSelector(selectJobQuestions)

  React.useEffect(() => {
    // setIsloadingCompany(true);
    // dispatch(AppThunks.doGetFollowingList())
    dispatch(AppThunks.doGetJobQuestions(id))
  }, []);


  //   console.log(User?.email)
  return (
    <Formik
        validationSchema={FirstApplaySchema}
      initialValues={{email:User?.email, phone: User?.phone_number || ''}}
      onSubmit={values => {
        const formdata = new FormData();
        formdata.append('email', values.email);
        let array=[];
            let obj1={
              question1:Questions[0],
              question2:Questions[1],
              email:values.email,
              phone:values.phone,
              job_id:id
            }

        navigation.navigate("SecondApplayPage",{data:obj1,questions:Questions})
        // navigation.navigate("app")
      }}>
      {(props: any) => (
        <View>
          
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Noto Sans',
              color: '#000',
              fontWeight: '500',
              marginBottom: 15,
            }}>
              {Questions[0]?.question}
            {/* Your email address */}
          </Text>
          <CustomInput
            {...props}
            Label="email"
            placeholder={t('WriteYourEmail')}
           
          />

          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Noto Sans',
              color: '#000',
              fontWeight: '500',
              marginBottom: 15,
            }}>
           {Questions[1]?.question}
          </Text>
          {/* <InputView {...props} name="phone" placeholder="Your phone" /> */}
          <Input
            {...props}
            leftIcon={
              lang == 'en' ? (
                <NewPicker
                  // index={index}
                  // setcode={setCode}
                  props={props}
                />
              ) : null
            }
            rightIcon={
              lang == 'ar' ? (
                <NewPicker
                  // index={index}
                  // setcode={setCode}
                  props={props}
                />
              ) : null
            }
            name={`phone`}
            value={props.values.phone}
            inputContainerStyle={{
              borderRadius: 16,
              borderColor: '#1D5EDD',
              borderWidth: 1,
              paddingHorizontal: 15,
            }}
            onChangeText={e => props?.setFieldValue(`phone`, e)}
            containerStyle={{
              paddingHorizontal: 0,
              marginVertical: 1,
              height: 60,
            }}
            inputStyle={{
              fontSize: 14,
              textAlign: lang == 'ar' ? 'right' : 'left',
              //  color: 'red'
            }}
            keyboardType="number-pad"
            placeholder={t('Enter phone number')}
          />
          <Text style={{fontSize:11,fontFamily:'Noto Sans',fontWeight:'400',color:'#191919',marginTop:15}}>
          Submitting this application won’t change your seevez profile.
          Application powered by seevez | <Text style={{color:'#1D5EDD'}} >Help Center</Text>
        </Text>
          <View style={{height:appSizes.height*.13}} />
          <Button
            // loading={loading}
            text={t('next')}
            onPress={props.handleSubmit}
          />
        </View>
      )}
    </Formik>
  );
};

export default Formick;
