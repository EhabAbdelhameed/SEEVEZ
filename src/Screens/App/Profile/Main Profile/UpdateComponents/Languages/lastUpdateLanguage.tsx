import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import {RenderSvgIcon} from '../../../../../../Components/atoms/svg';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../../../../theme/appColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../../../../../../Components/molecules/Button';

import {BigLogo, Star} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {Formik} from 'formik';
import InputView from 'components/molecules/Input';
import {appSizes} from 'theme/appSizes';
import AppThunks from 'src/redux/app/thunks';
import {useAppDispatch} from 'src/redux/store';
import AuthSlice, {selectUser} from 'src/redux/auth';
import {useSelector} from 'react-redux';
import {selectAccessToken, selectDone} from 'src/redux/app';
import {Input} from 'react-native-elements';
import TopHeader from 'screens/App/CompleteProfile/components/Header/TopHeader';
import BottomHeader from 'screens/App/CompleteProfile/components/Header/BottomHeader';
import { selectLang } from 'src/redux/lang';
import { useTranslation } from 'react-i18next';

const UpdateOneLanguage = () => {
  const {data1}: any = useRoute().params;
  console.log('LANGUAGE ', data1);
  // const navigation = useNavigation<any>();
  const navigation = useNavigation();
  const CurrentUserData = useSelector(selectUser);
  const changeDone = useSelector(selectDone);

  // console.log(changeDone)
  useEffect(() => {
    changeDone ? navigation.goBack() : null;
  }, [changeDone]);
  // console.log(CurrentUserData)
  const [loading, setLoading] = React.useState(false);
  const [rate, setRate] = React.useState(0);
  const dispatch = useAppDispatch();
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const AccessToken = useSelector(selectAccessToken);
  useEffect(() => {
    AccessToken ? dispatch(AuthSlice.chnageisAuth(false)) : null;
  }, [AccessToken]);
  const [buttonIndex, setButtonIndex] = React.useState(
    data1?.rate == 5
      ? 0
      : data1?.rate == 3
      ? 1
      : data1?.rate == 2
      ? 2
      : data1?.rate == 1
      ? 3
      : 5,
  );
  // const [languageStates, setLanguageStates] = useState();
  const data = [
    {
      languageRate: 'Native or Proficient',
      Rate: 5,
    },
    {
      languageRate: 'Advanced',
      Rate: 3,
    },
    {
      languageRate: 'Intermediate',
      Rate: 2,
    },
    {
      languageRate: 'Beginner',
      Rate: 1,
    },
  ];
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

          <Formik
            initialValues={{name: data1?.name || '', rate: data1?.rate || ''}}
            onSubmit={values => {
              setLoading(true);
              const formdata = new FormData();
              formdata.append(`id`, data1?.id);
              formdata.append(`name`, values.name);
              formdata.append(`rate`, values.rate);

              console.log(formdata);
              dispatch(AppThunks.doUpdateLanguages(formdata)).then((res: any) => {
                dispatch(AppThunks.GetProfileInfo());
                setLoading(false);
              });
              // navigation.navigate("ResetPassword")
            }}>
            {(props: any) => (
              <View>
                <View style={{marginTop: 10, marginBottom: 10}}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '500',
                      color: '#000',
                      marginLeft: 8,
                      marginBottom: 10,
                    }}>
                    {t("language")}
                  </Text>
                  <Input
                    {...props}
                    name={`name`}
                    inputContainerStyle={{
                      borderRadius: 16,
                      borderColor: '#1D5EDD',
                      borderWidth: 1,
                      paddingHorizontal: 15,
                      // marginTop:20,
                    }}
                    onChangeText={e => props?.setFieldValue(`name`, e)}
                    value={props.values.name}
                    containerStyle={{
                      paddingHorizontal: 0,
                      marginVertical: 1,
                      height: 60,
                    }}
                    inputStyle={{
                      fontSize: 14,
                      //  color: 'red'
                    }}
                    placeholder={t('Enter your language')}
                  />
                  <View style={{paddingLeft: 15, marginBottom: 10}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 15,
                      }}>
                      <Text
                        style={{
                          color: '#000',
                          fontSize: 16,
                          fontWeight: '700',
                        }}>
                        {t("Rate your language ?")} 
                      </Text>
                      <View style={{flexDirection: 'row', columnGap: 5}}>
                        <Text style={{fontSize: 12}}>
                          {buttonIndex == 0
                            ? '5'
                            : buttonIndex == 1
                            ? '3'
                            : buttonIndex == 2
                            ? '2'
                            : buttonIndex == 3
                            ? '1'
                            : '0'}
                          /5
                        </Text>
                        <Star width={20} height={20} />
                      </View>
                    </View>
                  </View>
                  {data?.map((item: any, rateIndex: any) => (
                    // <View >
                    <TouchableOpacity
                      key={rateIndex}
                      style={[styles.rowAnswer, {marginBottom: 10}]}
                      onPress={() => {
                        console.log(buttonIndex, rateIndex);
                        setButtonIndex(rateIndex);
                        props?.setFieldValue(`rate`, item.Rate);
                      }}>
                 
                      <View style={styles.Circle}>
                        {buttonIndex == rateIndex ? (
                          <View style={styles?.innerCircle} />
                        ) : null}
                      </View>
                      <Text style={{color: '#000', fontSize: 15}}>
                      {t(item?.languageRate)}
                      </Text>
                    </TouchableOpacity>
                
                  ))}
                </View>

                {/* <View style={{height: appSizes.height * 0.0}} /> */}

                <Button
                  loading={loading}
                  text={t('Done')}
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

export default UpdateOneLanguage;
