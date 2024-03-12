import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {appColors} from '../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../Components/atoms/svg';
import {AVATAR, Star} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';
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
const Formick = () => {
  const navigation = useNavigation<any>();
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  const User = useSelector(selectUser);
  //   console.log(User?.email)
  return (
    <Formik
      //   validationSchema={LoginSchema}
      initialValues={{email:User?.email, phone: User?.phone_number || ''}}
      onSubmit={values => {
        const formdata = new FormData();
        formdata.append('email', values.email);

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
              marginBottom: 10,
            }}>
            Your email address
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
              marginBottom: 10,
            }}>
            Your phone number
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
          <View style={{height:appSizes.height*.15}} />
          <Button
            // loading={loading}
            text={t('next')}
            onPress={()=>navigation.navigate("SecondApplayPage")}
          />
        </View>
      )}
    </Formik>
  );
};

export default Formick;