import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from 'components/molecules/Header';
import styles from './styles';

import {useNavigation, useRoute} from '@react-navigation/native';

import {useAppDispatch} from 'src/redux/store';
import {useSelector} from 'react-redux';
import AuthSlice, {selectUser} from 'src/redux/auth';
import AppSlice, {selectAccessToken, selectReviewUser} from 'src/redux/app';
import AppThunks from 'src/redux/app/thunks';
import ApplayHeader from './components/Header';
import {StatusBar} from 'react-native';
import {RenderSvgIcon} from 'components/atoms/svg';
import {FirstApplay} from 'assets/Svgs';
import UserHeader from './components/UserHeader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import UsersHeader from './components/Header';
import ReviewCV from './components/ReviewCv';
import ReviewRecord from './components/ReviewRecord';
import QuestionReview from './components/Questions';
import Buttons from './components/Buttons';
import {appColors, appSizes} from 'theme';

const ReviewUser = () => {
  // console.log(CurrentUserData)
  const {apply_id, job_id, user_id}: any = useRoute().params;
  // console.log(apply_id,job_id,user_id)

  const [load, setLoad] = useState(false);
  const dispatch = useAppDispatch();
  const ReviewUser = useSelector(selectReviewUser);
  //  console.log("1234",JSON.stringify(ReviewUser))
  React.useEffect(() => {
    setLoad(true);
    let obj = {
      apply_id: apply_id,
      job_id: job_id,
      user_id: user_id,
    };
    dispatch(AppThunks.doReviewUser(obj)).then(() => setLoad(false));
  }, []);

  return (
    <SafeAreaView edges={['top']} style={[styles.Container]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />

      <UsersHeader />
      {/* <KeyboardAwareScrollView
          contentContainerStyle={{
            // alignItems: 'center',
            
          }}
          enableOnAndroid={true}
          keyboardShouldPersistTaps={'handled'}
          enableResetScrollToCoords={false}


          showsVerticalScrollIndicator={false}> */}
      {load ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: appColors.bg,
          }}>
          <ActivityIndicator size="large" color={appColors.primary} />
        </View>
      ) : (
        <ScrollView style={{marginTop: -40}}>
          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              height: 50,
              width: '100%',
              marginTop: -20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#FFF',
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                width: '100%',

                //  marginTop: -20,
              }}>
              <View style={styles.blueCircle} />
              <View style={styles.blueCircle}>
                <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
              </View>
              <View style={{marginRight: 20, marginTop: -15}}>
                <RenderSvgIcon
                  icon="ICONCV"
                  width={40}
                  height={32}
                  style={styles.yellowIcon}
                />
              </View>
            </View>
          </View>
          <View style={styles.bottomSection}>
            <View style={{marginTop: 10}}>
              <View style={{marginBottom: 10}}>
                <UserHeader data={ReviewUser?.user} />
              </View>
            </View>
            {ReviewUser?.answers?.map((item: any, index: number) => {
              return (
                <View>
                  {item?.question?.type == 4 ? (
                    <>
                        <Text
                        style={{
                          fontSize: 15,
                          fontFamily: 'Noto Sans',
                          color: '#000',
                          fontWeight: '700',
                          marginTop: 20,
                     
                        }}>
                        {item?.question?.question}
                      </Text>
                    <ReviewCV data={item} />
                    </>
                  ) : item?.question?.type == 2 ? (
                    <View>
                      <Text
                        style={{
                          fontSize: 15,
                          fontFamily: 'Noto Sans',
                          color: '#000',
                          fontWeight: '700',
                          marginTop: 20,
                          marginBottom: 10,
                        }}>
                        {item?.question?.question}
                      </Text>
                      <ReviewRecord user={ReviewUser?.user} data={item} />
                    </View>
                  ) : (
                    <QuestionReview data={item} />
                  )}
                </View>
              );
            })}
            <View style={{height: appSizes.height * 0.065}} />
            <Buttons />
          </View>
        </ScrollView>
      )}
      {/* </KeyboardAwareScrollView> */}
    </SafeAreaView>
  );
};

export default ReviewUser;
