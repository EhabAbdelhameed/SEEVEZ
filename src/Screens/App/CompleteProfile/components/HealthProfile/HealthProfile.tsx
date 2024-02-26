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
import {appSizes} from 'theme/appSizes';
import {useAppDispatch} from 'src/redux/store';
import {useSelector} from 'react-redux';
import {selectAccessToken, selectDone} from 'src/redux/app';
import AppThunks from 'src/redux/app/thunks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthSlice, {selectUser} from 'src/redux/auth';
import TopHeader from '../Header/TopHeader';
import BottomHeader from '../Header/BottomHeader';
import CustomButton from 'components/molecules/Button/CustomButton';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
import BottomModalIos from '../Info/BottomModalIos';

const HealthProfile = () => {
  // const navigation = useNavigation<any>();
  const CurrentUserData = useSelector(selectUser);
  const navigation = useNavigation();
  const [about, setAbout] = useState('');
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const [isVisiable, setIsVisiable] = useState(false);
  const changeDone = useSelector(selectDone);
  // console.log(changeDone)
  useEffect(() => {
    changeDone ? navigation.goBack() : null;
  }, [changeDone]);
  const AccessToken = useSelector(selectAccessToken);

  const [disabilityData, setDisabilityData] = useState(CurrentUserData?.disabilities);
  const [specialNeedsData, setSpecialNeedsData] = useState(CurrentUserData?.special_needs);
  const [index, setIndex] = React.useState(false);
  const [isVisible, setVisible] = useState(false);
  const [type, setType] = useState('0');
  const [buttonIndex, setButtonIndex] = React.useState(
    CurrentUserData?.gender == 'male'
      ? 0
      : CurrentUserData?.gender == 'female'
      ? 1
      : CurrentUserData?.gender == null
      ? 3
      : 2,
  );
  const [buttonIndexHealth, setButtonIndexHealth] = React.useState(2);
  const [buttonIndexSmoker, setButtonIndexSmoker] = React.useState(
    CurrentUserData?.smoker == null ? 2 : CurrentUserData?.smoker == 0 ? 1 : 0,
  );
  // const [Nationality, setNationality] = useState('');

  const [smoker, setSmoker] = useState(false);

  // console.log(changeDone)
  useEffect(() => {
    changeDone ? navigation.goBack() : null;
  }, [changeDone]);

  useEffect(() => {
    AccessToken ? dispatch(AuthSlice.chnageisAuth(false)) : null;
  }, [AccessToken]);
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  const GenderData = ['male', 'female', 'preferNotToSay'];
  const HealthProfile = ['disabilities', 'specialNeeds'];
  const Smoker = ['yes', 'no'];
  const data = {
    title: 'Disabilities',
    subTitle: 'What is your disability?',
  };
  const data1 = {
    title: 'Special Needs',
    subTitle: 'What is your Special Needs ?',
  };
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
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
        <TopHeader />
        <View style={styles.bottomSection}>
          <BottomHeader />
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: '#000',
              // marginLeft: 8,
              fontFamily: 'Noto Sans',
            }}>
            {'Health profile'}
          </Text>
          <Formik
            initialValues={{
              disability: CurrentUserData?.disabilities || '',
              specialNeeds: CurrentUserData?.special_needs || '',
              heights: CurrentUserData?.height || '',
              weight: CurrentUserData?.weight || '',
              isSmoke: CurrentUserData?.smoker || '',
            }}
            onSubmit={values => {
              setLoading(true);
              const formdata = new FormData();
              formdata.append('name', CurrentUserData?.name);
              disabilityData != '' || !disabilityData
                ? formdata.append('disabilities', disabilityData)
                : formdata.append('disabilities', '');
              specialNeedsData != ''
                ? formdata.append('special_needs', specialNeedsData)
                : formdata.append('special_needs', '');
              values.heights != '' || !values.heights
                ? formdata.append('height', values.heights)
                : formdata.append('height', '');
              formdata.append('smoker', smoker == false ? 0 : 1);
              values.weight != '' || !values.weight
                ? formdata.append('weight', values.weight)
                : formdata.append('weight', '');

              // console.log(formdata);
              dispatch(AppThunks.doAddAbout(formdata)).then((res: any) => {
                dispatch(AppThunks.GetProfileInfo());

                setLoading(false);
              });
              // navigation.navigate("ResetPassword")
            }}>
            {(props: any) => (
              <View>
                <View>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        columnGap: 15,
                        paddingVertical: 13,
                      }}>
                        <View>
                      <TouchableOpacity
                        onPress={() => {
                          setButtonIndexHealth(0), setIsVisiable(true);
                        }}
                        style={{
                          flexDirection: 'row',
                        }}>
                        <View style={styles.Circle}>
                          {buttonIndexHealth == 0 ? (
                         <View style={styles?.innerCircle} /> 
                         ) : null} 
                        </View>

                        <Text style={{color: '#000', marginLeft: 5}}>
                          Disabilities
                        </Text>
                       
                      </TouchableOpacity>
                      {disabilityData != null ? (
                      <Text style={{marginTop:10}}>{disabilityData}</Text>
                    ) : null}
                      </View>
                         <View>
                      <TouchableOpacity
                        onPress={() => {
                          setButtonIndexHealth(1), setIsVisiable(true);
                        }}
                        style={{
                          flexDirection: 'row',
                        }}>
                        <View style={styles.Circle}>
                         {buttonIndexHealth == 1 ? (
                          <View style={styles?.innerCircle} /> 
                          ) : null} 
                        </View>

                        <Text style={{color: '#000', marginLeft: 5}}>
                          Special Needs
                        </Text>
                      </TouchableOpacity>
                      {specialNeedsData != null ? (
                      <Text style={{marginTop:10}}>{specialNeedsData}</Text>
                    ) : null}
                    </View>
                      <TouchableOpacity
                        onPress={() => {
                          setButtonIndexHealth(3)
                        }}
                        style={{
                          flexDirection: 'row',
                        }}>
                        <View style={styles.Circle}>
                          {buttonIndexHealth == 3 ? (
                          <View style={styles?.innerCircle} /> 
                          ) : null}
                        </View>

                        <Text style={{color: '#000', marginLeft: 5}}>None</Text>
                      </TouchableOpacity>
                    </View>

                  

                   
                  </View>
                </View>
                <View
                  style={{
                    // flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                    columnGap: 15,
                  }}>
                  <View>
                    <Text style={styles.labelStyle}>Height</Text>
                    <TextInput
                      placeholder="Write here.."
                      placeholderTextColor={'#B9B9B9'}
                      style={styles.InputStyleWithOutWidth}
                      keyboardType="number-pad"
                      onChangeText={value =>
                        props?.setFieldValue(`heights`, value)
                      }
                      value={props.values.heights}
                    />
                  </View>
                  <View>
                    <Text style={styles.labelStyle}>Weight</Text>
                    <TextInput
                      placeholder="Write here.."
                      placeholderTextColor={'#B9B9B9'}
                      keyboardType="number-pad"
                      style={styles.InputStyleWithOutWidth}
                      onChangeText={value =>
                        props?.setFieldValue(`weight`, value)
                      }
                      value={props.values.weight}
                    />
                  </View>
                </View>
                <Text style={styles.labelStyle}>{t('smoker')}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    // justifyContent: 'space-around',
                    marginBottom: 20,
                    columnGap: 25,
                  }}>
                  {Smoker?.map((item, index) => (
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={() => {
                        setButtonIndexSmoker(index), setSmoker(!smoker);
                      }}>
                      <View style={styles.Circle}>
                        {buttonIndexSmoker == index ? (
                          <View style={styles?.innerCircle} />
                        ) : null}
                      </View>

                      <Text
                        style={{
                          color: '#000',
                          marginLeft: 8,
                          fontFamily: 'Noto Sans',
                        }}>
                        {t(item)}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <BottomModalIos
                  visable={isVisiable}
                  setVisable={setIsVisiable}
                  disabilityData={buttonIndexHealth == 0
                    ?disabilityData:specialNeedsData}
                 
                  data={buttonIndexHealth == 0 ? data : data1}
                  setData={
                    buttonIndexHealth == 0
                      ? setDisabilityData
                      : setSpecialNeedsData
                  }
                />
                <View style={{height: appSizes.height * 0.03}} />
                <CustomButton
                  loading={loading}
                  text={t('Done')}
                  onPress={props.handleSubmit}
                />
                {/* <Button loading={loading} text={'Done'} onPress={props.handleSubmit} /> */}
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default HealthProfile;
