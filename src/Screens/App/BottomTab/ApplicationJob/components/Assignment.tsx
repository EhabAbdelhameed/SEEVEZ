import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from 'components/molecules/Header';

import {useNavigation} from '@react-navigation/native';

import {useAppDispatch} from 'src/redux/store';
import {useSelector} from 'react-redux';
import AuthSlice, {selectUser} from 'src/redux/auth';
import AppSlice, {selectAccessToken} from 'src/redux/app';
import AppThunks from 'src/redux/app/thunks';
import ApplayHeader from './Header';
import {StatusBar} from 'react-native';
import {RenderSvgIcon} from 'components/atoms/svg';
import {FifthApplay, RecordAudio} from 'assets/Svgs';

import {appColors, appSizes} from 'theme';
import Button from 'components/molecules/Button';
import {Formik} from 'formik';
import CustomInput from 'components/molecules/Input/CustomInput';
import {styles} from '../styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Assignment = () => {
  // console.log(CurrentUserData)
  const User = useSelector(selectUser);
  const navigation = useNavigation<any>();
  const data = ['Yes', 'No'];
  const [buttonIndexSmoker, setButtonIndexSmoker] = React.useState(0);
  const [smoker, setSmoker] = useState(false);
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <SafeAreaView edges={['top']} style={[styles.Container]}>
        <Header Title='Assessment' onPress={_handleNavigate}/>
        <KeyboardAwareScrollView
          contentContainerStyle={{
            alignItems: 'center',
           
            // flex:1
            // paddingBottom: 140,
          }}
          enableOnAndroid={true}
          keyboardShouldPersistTaps={'handled'}
          enableResetScrollToCoords={false}
          showsVerticalScrollIndicator={false}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      
        <View style={{ paddingHorizontal:15}}>
      <View style={styles.bottomSection}>
        <View style={{marginTop: 10}}>
          <View style={{ marginBottom: 30}}>
            <Text
              style={{
                fontSize: 22,
                fontFamily: 'Noto Sans',
                color: '#000',
                fontWeight: '700',
              }}>
              Answer the questions
            </Text>
            <Formik
              initialValues={{About: ''}}
              onSubmit={values => {
                // navigation.navigate("ResetPassword")
              }}>
              {(props: any) => (
                <>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Noto Sans',
                      color: '#000',
                      fontWeight: '400',
                      marginTop: 10,
                      marginBottom: 10,
                    }}>
                    How many years of work experience do you have with
                    Prototyping?
                  </Text>
                  <CustomInput
                    {...props}
                    Label={'first'}
                    placeholder="Write here.."
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Noto Sans',
                      color: '#000',
                      fontWeight: '400',
                      marginTop: 10,
                      marginBottom: 10,
                    }}>
                    How many years of work experience do you have with User
                    Flows?
                  </Text>
                  <CustomInput
                    {...props}
                    Label={'first'}
                    placeholder="Write here.."
                  />
                  <Text
                    style={{
                      fontSize: 22,
                      fontFamily: 'Noto Sans',
                      color: '#000',
                      fontWeight: '700',
                    }}>
                    Have you completed the following level of education:
                    Bachelor's Degree?
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                        columnGap:40,
                      marginTop: 20,
                      marginBottom:20
                    }}>
                    {data?.map((item, index) => (
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        onPress={() => {
                          setButtonIndexSmoker(index), setSmoker(!smoker);
                        }}>
                        <View style={[styles.Circle, {}]}>
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
                          {item}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                  <Text
                    style={{
                      fontSize: 22,
                      fontFamily: 'Noto Sans',
                      color: '#000',
                      fontWeight: '700',
                    }}>
                    Tell us briefly about yourself. and your working experience
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Noto Sans',
                      color: '#000',
                      fontWeight: '400',
                    }}>
                    Max duration is 3 minutes
                  </Text>

                  <TouchableOpacity style={styles.InputStyleNoWidth1}>
                    <RecordAudio width={30} height={30} />
                    <View>
                      <Text
                        numberOfLines={1}
                        style={{fontSize: 20, color: appColors.primary}}>
                        record
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Noto Sans',
                      color: '#000',
                      fontWeight: '400',
                      marginTop: 10,
                      marginBottom: 10,
                    }}>
                    How many years of work experience do you have with Figma
                    (Software)?
                  </Text>
                  <CustomInput
                    {...props}
                    Label={'first'}
                    placeholder="Write here.."
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Noto Sans',
                      color: '#000',
                      fontWeight: '400',
                      marginTop: 10,
                      marginBottom: 10,
                    }}>
                    How many years of work experience do you have with Figma
                    (Software)?
                  </Text>
                  <CustomInput
                    {...props}
                    Label={'first'}
                    placeholder="Write here.."
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Noto Sans',
                      color: '#000',
                      fontWeight: '400',
                      marginTop: 10,
                      marginBottom: 10,
                    }}>
                    How many years of work experience do you have with Figma
                    (Software)?
                  </Text>
                  <CustomInput
                    {...props}
                    Label={'first'}
                    placeholder="Write here.."
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Noto Sans',
                      color: '#000',
                      fontWeight: '400',
                      marginTop: 10,
                      marginBottom: 10,
                    }}>
                    How many years of work experience do you have with Figma
                    (Software)?
                  </Text>
                  <CustomInput
                    {...props}
                    Label={'first'}
                    placeholder="Write here.."
                  />
                </>
              )}
            </Formik>

            {/* <View style={{height: appSizes.height * 0.05}} /> */}
            <View style={{flexDirection: 'row', columnGap: 10,marginTop:20}}>
              <View style={{width: '49%'}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: appColors.bg,
                    borderWidth: 1,
                    borderColor: appColors.primary,
                    paddingVertical: 10,
                    borderRadius: 16,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {}}>
                  <Text
                    style={{
                      color: appColors.primary,
                      fontSize: 18,
                      fontWeight: '500',
                      textAlign: 'center',
                      fontFamily: 'Noto Sans',
                    }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{width: '49%'}}>
                <Button onPress={() => {}} text={'Submit'} />
              </View>
            </View>
          </View>
        </View>
      </View>
      </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Assignment;
