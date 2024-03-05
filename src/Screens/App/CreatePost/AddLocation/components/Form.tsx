import {View, Text, Alert, Platform} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styles';
import {Formik} from 'formik';
import Button from 'components/molecules/Button';

import CustomInput from 'components/molecules/Input/CustomInput';
import {appColors, appSizes} from 'theme';
import {UploadYourCv} from 'assets/Svgs';
import {useAppDispatch} from 'src/redux/store';
import DocumentPicker from 'react-native-document-picker';
import AppThunks from 'src/redux/app/thunks';
import {useNavigation, useRoute} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import AppSlice, {selectPhotoData} from 'src/redux/app';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
const Form = () => {
  const [source, setSource] = useState<any>([]);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  const photoData = useSelector(selectPhotoData);
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();

  return (
    <View style={styles.formContainer}>
      <Text style={styles.textHeaderForm}>{t('Search for location')}</Text>
      <Formik
        initialValues={{description: ''}}
        onSubmit={values => {
          if (values.description != '') {
            dispatch(AppSlice.changeLocation(values.description));
            photoData?.key == '6'
              ? navigation.navigate('CreateShareLink')
              : navigation.goBack();
          } else {
            Toast.show({
              type: 'error',
              text1: 'Please fill all the data',
            });
          }
        }}>
        {(props: any) => (
          <View style={{height: '100%'}}>
            <View>
              <Text style={styles.label}>
                {t("Only people on your list can see this reel")}
              </Text>

              <CustomInput
                {...props}
                Label={'description'}
                placeholder={t("writeHere")}
                style={{textAlign:lang=='ar'?'right':'left'}}
              />
            </View>

            <View style={{height: appSizes.height * 0.5}} />
            <Button
              style={{width: '100%'}}
              text={t("Done")}
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Form;
