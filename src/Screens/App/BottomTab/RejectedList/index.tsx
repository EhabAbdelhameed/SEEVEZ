import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';
import CommonStatusBar from '../../../../ui/StatusBar';
import ContainerUsers from './components/ContainerUsers';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../../../globalStyle';
import AppThunks from 'src/redux/app/thunks';
import {useAppDispatch, useAppSelector} from 'src/redux/store';
import {
  selectAccessToken,
  selectFollowingList,
  selectListUsers,
  selectListedUser,
  selectMyJob,
  selectOneJob,
} from 'src/redux/app';

import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AuthSlice from 'src/redux/auth';
import {useTranslation} from 'react-i18next';
import {selectLang} from 'src/redux/lang';
import Header from './components/Header';
import {appSizes} from 'theme/appSizes';

const RejectedList = (props: any) => {
  // const {id,title,subTitle}: any = useRoute().params;
  const {id}: any = useRoute().params;
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
 
  const [load, setLoad] = React.useState(false);
  const MyJob = useAppSelector(selectOneJob)
  const ListedUser = useAppSelector(selectListedUser)


  //  console.log("df : ",ListedUser)

  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  React.useEffect(() => {
    setLoad(true);
    let obj={
      job_id:id,
      status:2
    }
    dispatch(AppThunks.doGetListedUser(obj)).then(() => setLoad(false));
  }, []);

  return (
    <SafeAreaView
      edges={['top']}
      style={[globalStyles.screen, {direction: lang == 'en' ? 'ltr' : 'rtl'}]}>
      <View style={styles.screen}>
        <Header Title={MyJob?.job_title} onPress={() => navigation.goBack()} />
        <KeyboardAwareScrollView
          contentContainerStyle={{
            alignItems: 'center',
            // paddingBottom: 30,
            paddingHorizontal:10,
          }}
          enableOnAndroid={true}
          keyboardShouldPersistTaps={'handled'}
          enableResetScrollToCoords={false}
          showsVerticalScrollIndicator={false}>
          {load ? (
            <ActivityIndicator size={50} style={{marginTop: 300}} />
          ) : (
            <ContainerUsers data={ListedUser}/>
          )}
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default RejectedList;
