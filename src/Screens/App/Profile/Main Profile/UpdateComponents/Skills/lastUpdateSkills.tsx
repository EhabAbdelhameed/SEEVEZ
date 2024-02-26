import {View, Text, TouchableOpacity, TextInput, Alert, Image, Platform} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import styles from './styles';
import {RenderSvgIcon} from '../../../../../../Components/atoms/svg';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../../../../theme/appColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../../../../../../Components/molecules/Button';

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
import { Input } from 'react-native-elements';
import TopHeader from 'screens/App/CompleteProfile/components/Header/TopHeader';
import BottomHeader from 'screens/App/CompleteProfile/components/Header/BottomHeader';
import { selectLang } from 'src/redux/lang';
import { useTranslation } from 'react-i18next';

const UpdateOneSkills = () => {
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
  const { title,data}: any = useRoute().params;
  const lang = useSelector(selectLang);
  const {t, i18n} = useTranslation();
  
  return (
    <SafeAreaView edges={['top']} style={[styles.container,{direction:lang=="ar"?'rtl':'ltr'}]}>
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
              fontFamily: 'Noto Sans',
            }}>
           {t(title.toLowerCase())}
          </Text>
          <Formik
            initialValues={{Skills:data?.name||''}}
            onSubmit={values => {
              setLoading(true);
              const formdata = new FormData();
              formdata.append('id', data?.id);

              formdata.append('name', values.Skills);
              if(title!='Interests'){
                dispatch(AppThunks.doUpdateSkills(formdata)).then((res: any) => {
                  dispatch(AppThunks.GetProfileInfo())
                  setLoading(false);
                });
              }else{
                dispatch(AppThunks.doUpdateIntersts(formdata)).then((res: any) => {
                  dispatch(AppThunks.GetProfileInfo())
                  setLoading(false);
                });
              }
              

              // navigation.navigate("ResetPassword")
            }}>
            {(props: any) => (
              <View>
            
                       <Input
                    {...props}
                    name={`Skills`}
                    inputContainerStyle={{
                      borderRadius: 16,
                      borderColor: '#1D5EDD',
                      borderWidth: 1,
                      paddingHorizontal: 15,
                      height: Platform.OS == 'android' ? null : 50,
                    }}
                    value={props.values.Skills}
                    onChangeText={e => props?.setFieldValue(`Skills`, e)}
                    placeholderTextColor={'#B9B9B9'}
                    containerStyle={{
                      paddingHorizontal: 0,
                      marginVertical: 1,
                      height: 50,
                      marginBottom: 15,
                    }}
                    inputStyle={{
                      fontSize: 14,
                      textAlign:lang=='ar'?'right':'left'
                      //  color: 'red'
                    }}
                    placeholder={t("writeHere")}
                  />

                <View style={{height: appSizes.height * 0.28}} />

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

export default UpdateOneSkills;
