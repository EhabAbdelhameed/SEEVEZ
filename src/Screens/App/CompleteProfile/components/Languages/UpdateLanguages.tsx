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

import {BigLogo, Star} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {Formik} from 'formik';
import InputView from 'components/molecules/Input';
import {appSizes} from 'theme/appSizes';
import AppThunks from 'src/redux/app/thunks';
import {useAppDispatch} from 'src/redux/store';
import {selectUser} from 'src/redux/auth';
import {useSelector} from 'react-redux';
import {selectDone} from 'src/redux/app';
import {Input} from 'react-native-elements';
import TopHeader from '../Header/TopHeader';
import BottomHeader from '../Header/BottomHeader';

const UpdateLanguages = () => {
  // const navigation = useNavigation<any>();
  const navigation = useNavigation();
  const CurrentUserData = useSelector(selectUser);
  const changeDone = useSelector(selectDone);
  const [Languages, setLanguages] = useState<any>([1]);

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
  const [buttonIndex, setButtonIndex] = React.useState(5);
  const [languageStates, setLanguageStates] = useState(
    Languages.map(() => ({ rate: 0, buttonIndex: 5 }))
  );
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
        <TopHeader />
        <View style={styles.bottomSection}>
          <BottomHeader />

          <Formik
            initialValues={{Languages: [{name: '', rate: ''}]}}
            onSubmit={values => {
              setLoading(true);
              const formdata = new FormData();
              values.Languages.map((item: any, index: any) => {
                formdata.append(`array[${index}][name]`, item.name);
                formdata.append(`array[${index}][rate]`, item.rate);
              });

              console.log(formdata);
              dispatch(AppThunks.doAddLanguages(formdata)).then((res: any) => {
                dispatch(AppThunks.GetProfileInfo());
                setLoading(false);
              });
              // navigation.navigate("ResetPassword")
            }}>
            {(props: any) => (
              <View>
                {Languages.map((lang: any, index: any) => (
                  <View key={index} style={{marginTop: 10, marginBottom: 10}}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: '500',
                        color: '#000',
                        marginLeft: 8,
                        marginBottom: 10,
                      }}>
                      Language
                    </Text>
                    <Input
                      {...props}
                      name={`phones[${index}][phone]`}
                      inputContainerStyle={{
                        borderRadius: 16,
                        borderColor: '#1D5EDD',
                        borderWidth: 1,
                        paddingHorizontal: 15,
                        // marginTop:20,
                      }}
                      onChangeText={e =>
                        props?.setFieldValue(`Languages[${index}]["name"]`, e)
                      }
                      containerStyle={{
                        paddingHorizontal: 0,
                        marginVertical: 1,
                        height: 60,
                      }}
                      inputStyle={{
                        fontSize: 14,
                        //  color: 'red'
                      }}
                      placeholder={`Enter your language`}
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
                          Rate your language ?
                        </Text>
                        <View style={{flexDirection: 'row', columnGap: 5}}>
                          
                          <Text style={{fontSize: 12}}>{languageStates[index]?.rate}/5</Text>
                          <Star width={20} height={20} />
                        </View>
                      </View>
                    </View>
                    {data?.map((item: any, rateIndex: any) => (
                      // <View >
                      <TouchableOpacity
                      key={rateIndex}
                      style={[styles.rowAnswer, { marginBottom: 10 }]}
                      onPress={() => {
                        setLanguageStates((prev:any) =>
                          prev.map((state:any, i:any) =>
                            i === index
                              ? { rate: item.Rate, buttonIndex: rateIndex }
                              : state
                          )
                        ),

                        props?.setFieldValue(
                          `Languages[${index}]["rate"]`,
                          item.Rate,
                        );
                      }}
                    >
                      {/* <TouchableOpacity
                        style={[styles.rowAnswer, {marginBottom: 10}]}
                        onPress={() => {
                          setButtonIndex(index);
                       
                          setRate(data[index].Rate);
                        }}> */}
                        <View style={styles.Circle}>
                        {languageStates[index].buttonIndex == rateIndex ? (
                            <View style={styles?.innerCircle} />
                          ) : null}
                        </View>
                        <Text style={{color: '#000', fontSize: 15}}>
                          {item?.languageRate}
                        </Text>
                      </TouchableOpacity>
                      // </View>
                    ))}
                  </View>
                ))}
                <TouchableOpacity
                    onPress={() => {
                      setLanguages((prev: any) => {
                        setLanguageStates((prevStates:any) => [
                          ...prevStates,
                          { rate: 0, buttonIndex: 5 },
                        ]);
                        return [...prev, 1];
                      });
                    }}
                  style={{flexDirection: 'row', marginBottom: 20}}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 36,
                      height: 36,
                      borderRadius: 36,
                      backgroundColor: appColors.bg,
                    }}>
                    <RenderSvgIcon
                      icon="PLUSFOLLOW"
                      width={16}
                      height={16}
                      color={appColors.primary}
                    />
                  </View>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: '500',
                        marginLeft: 15,
                        color: '#000',
                      }}>
                      Add another language
                    </Text>
                  </View>
                </TouchableOpacity>
                {/* <View style={{height: appSizes.height * 0.0}} /> */}

                <Button
                  loading={loading}
                  text={'Done'}
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

export default UpdateLanguages;
