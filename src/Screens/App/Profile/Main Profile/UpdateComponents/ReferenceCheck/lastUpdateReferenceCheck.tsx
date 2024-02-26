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
  import {Input} from 'react-native-elements';
  import {BigLogo, PHOTO, PDF} from 'assets/Svgs';
  import {SafeAreaView} from 'react-native-safe-area-context';
  import {StatusBar} from 'react-native';
  import {Formik} from 'formik';
  import InputView from 'components/molecules/Input';
  import {appSizes} from 'theme/appSizes';
  import DocumentPicker from 'react-native-document-picker';
  import AppThunks from 'src/redux/app/thunks';
  import {useAppDispatch} from 'src/redux/store';
  import {useSelector} from 'react-redux';
  import {selectAccessToken, selectDone} from 'src/redux/app';
  import NewPicker from 'components/molecules/PhonePicker';
import TopHeader from 'screens/App/CompleteProfile/components/Header/TopHeader';
import BottomHeader from 'screens/App/CompleteProfile/components/Header/BottomHeader';
import AuthSlice from 'src/redux/auth';
import { selectLang } from 'src/redux/lang';
import { useTranslation } from 'react-i18next';
  
  const UpdateOneRefernceCheck = () => {
    // const navigation = useNavigation<any>();
    const {data}: any = useRoute().params;
    console.log('Refesdd', data);
    const defaultCode={
        code: '',
        dial_code:data?.country_code,
        flag: '',
        name: {
          ar: '',
          bg: '',
          by: '',
          cn: '',
          cz: '',
          de: '',
          ee: '',
          el: '',
          en: '',
          es: '',
          fr: '',
          he: '',
          it: '',
          jp: '',
          nl: '',
          pl: '',
          pt: '',
          ro: '',
          ru: '',
          ua: '',
          zh: '',
        },
      };
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const changeDone = useSelector(selectDone);
    const [phoneNumbers, setPhoneNumbers] = useState<any>([1]);
    // console.log(changeDone)
    const AccessToken = useSelector(selectAccessToken);
    useEffect(() => {
      AccessToken ? dispatch(AuthSlice.chnageisAuth(false)) : null;
    }, [AccessToken]);
    useEffect(() => {
      changeDone ? navigation.goBack() : null;
    }, [changeDone]);
    const _handleNavigate = useCallback(() => {
      navigation.goBack();
    }, []);
    const [Source, setSource] = useState<any>([]);
    const [loading, setLoading] = React.useState(false);
    const [code, setCode] = React.useState('');
    const [codes, setCodes] = React.useState<any>([]);
    const addCode = (newCode :any) => {
      setCodes((prevCodes:any) => [...prevCodes, newCode]);
    };
    const uploadFile = async (type: any) => {
      try {
        const res: any = await DocumentPicker.pick({
          type: [DocumentPicker.types.pdf],
        });
        console.log(res);
        setSource(res);
      } catch (err) {
        // setFieldValue(name.replace(/\s/g, ''), '');
        if (DocumentPicker.isCancel(err)) {
          console.log('Canceled');
        } else {
          console.log('Unknown Error: ' + JSON.stringify(err));
          throw err;
        }
      }
    };
    const lang = useSelector(selectLang);
    const {t, i18n} = useTranslation();
    return (
      <SafeAreaView edges={['top']} style={[styles.container,{direction:lang=="ar"?'rtl':'ltr'}]}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
        <KeyboardAwareScrollView
          contentContainerStyle={{
            backgroundColor: appColors.bg,
            // marginTop: 40,
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
                marginBottom: 10,
              }}>
              {t("referenceCheck")}
            </Text>
            <Formik
              initialValues={{phone:data?.phone||'', code:data?.country_code||''}}
              onSubmit={values => {
                setLoading(true);
                const formdata = new FormData();
            
                  formdata.append(
                    `country_code`,
                    code == '' ? '+20' : code,
                  );
                  formdata.append(`id`, data?.id);
                  formdata.append(`phone`, values.phone);
                
  
                Source!=0?formdata.append('background_check', {
                  uri: Source[0]?.uri,
                  type: Source[0]?.type,
                  name: Source[0]?.name,
                }):null
                console.log(formdata);
                dispatch(AppThunks.doUpdateReferenceCheck(formdata)).then(
                  (res: any) => {
                    dispatch(AppThunks.GetProfileInfo());
                    setLoading(false);
                  },
                );
  
                // navigation.navigate("ResetPassword")
              }}>
              {(props: any) => (
                <View>
                  {phoneNumbers.map((phoneNumber: any, index: any) => (
                    <View key={index}>
                      <Input
                        {...props}
                        leftIcon={
                          <NewPicker
                            index={index}
                            setcode={setCode}
                            //   defaultCodes={defaultCode}
                            // setCodes={(newCode) => {
                            //   addCode(newCode);
                            //   props?.setFieldValue(
                            //     `code`,
                            //     code
                            //   );
                            // }}
                            props={props}
                          />}
                       
                    
                        name={`phone`}
                        inputContainerStyle={{
                          borderRadius: 16,
                          borderColor: '#1D5EDD',
                          borderWidth: 1,
                          paddingHorizontal: 15,
                        }}
                        onChangeText={e =>
                          props?.setFieldValue(`phone`, e)
                        }
                        value={props.values.phone}
                        containerStyle={{
                          paddingHorizontal: 0,
                          marginVertical: 1,
                          height: 60,
                        }}
                        inputStyle={{
                          fontSize: 14,
                          textAlign:lang=='ar'?'right':'left'
                          //  color: 'red'
                        }}
                        keyboardType="number-pad"
                        placeholder={t('Enter phone number')}
                      />
                      {/* {index > 0 && (
                        <TouchableOpacity
                          onPress={() => removePhoneNumber(index)}>
                          <Text>Remove Phone Number</Text>
                        </TouchableOpacity>
                      )} */}
                    </View>
                  ))}
  
                
                  <TouchableOpacity
                    style={styles.InputStyleNoWidth}
                    onPress={uploadFile}>
                    <PDF />
                    <Text style={{fontSize: 19, color: appColors.primary}}>
                      {Source.length == 0
                        ? t('uploadBackgroundCheck')
                        : Source[0].name}
                    </Text>
                  </TouchableOpacity>
                  <View style={{height: appSizes.height * 0.07}} />
  
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
  
  export default UpdateOneRefernceCheck;
  