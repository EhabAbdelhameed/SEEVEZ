import {ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from 'components/molecules/Header';
import styles from './styles';

import {useNavigation} from '@react-navigation/native';

import {useAppDispatch} from 'src/redux/store';
import {useSelector} from 'react-redux';
import AuthSlice, {selectUser} from 'src/redux/auth';
import AppSlice, {selectAccessToken} from 'src/redux/app';
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

const ReviewUser = () => {
  // console.log(CurrentUserData)
  const [load, setLoad] = useState(false);
  const dispatch = useAppDispatch();
  // const User =useSelector(selectUser)
  // React.useEffect(() => {
  //   setLoad(true);
  //   dispatch(AppThunks.doGetJobDescraption(id)).then(() => setLoad(false));
  // }, []);

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
      <ScrollView style={{marginTop:-40}}>
      <View style={{justifyContent:'flex-end',alignItems:'flex-end',height:50,width:'100%',marginTop:-20}}>
         
         <View
           style={{
             flexDirection: 'row',
             justifyContent: 'space-between',
             backgroundColor:'#FFF',
             borderTopLeftRadius: 30,
             borderTopRightRadius: 30,
             width:'100%'
             

            //  marginTop: -20,
           }}>
           <View style={styles.blueCircle}/>
           <View style={styles.blueCircle}>
             <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
           </View>
           <View style={{marginRight: 20,marginTop:-15}}>
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
            <View style={{marginBottom: 30}}>
              <UserHeader />
            </View>
          </View>
          <ReviewCV />
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Noto Sans',
              color: '#000',
              fontWeight: '700',
              marginTop: 20,
              marginBottom: 10,
            }}>
            Tell us briefly about yourself. and your working experience
          </Text>
          <ReviewRecord />
          <QuestionReview />
          <Buttons />
        </View>
      </ScrollView>
      {/* </KeyboardAwareScrollView> */}
    </SafeAreaView>
  );
};

export default ReviewUser;
