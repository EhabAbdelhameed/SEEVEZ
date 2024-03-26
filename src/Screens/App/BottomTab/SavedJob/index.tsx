import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Header from './components/Header';
import CommonStatusBar from '../../../../ui/StatusBar';
import ContainerUsers from './components/ContainerUsers';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../../../globalStyle';
import AppThunks from 'src/redux/app/thunks';
import {useAppDispatch, useAppSelector} from 'src/redux/store';
import {
  selectCompaniesUser,
  selectFollowingList,
  selectFreelancerJobs,

  selectRecommandedJobs,
  selectJobSeeker,
  selectListUsers,
  selectRecuriters,
  selectMySavedJob,
} from 'src/redux/app';
import FooterSection from './components/footerPagaination';
import {appColors} from 'theme';
import {SaveJobFill, WihteSave} from 'assets/Svgs';
import {RenderSvgIcon} from 'components/atoms/svg';
import { useNavigation } from '@react-navigation/native';

const SavedJob = (props: any) => {
  const dispatch = useAppDispatch();
  const ListUsers = useAppSelector(selectListUsers);
  const navigation = useNavigation<any>();
  const mySavedJob = useAppSelector(selectMySavedJob);
   

  // console.log("MySavedJob",JSON.stringify(mySavedJob))

  const [isLoading, setIsloading] = useState(false);

  React.useEffect(() => {
    setIsloading(true);

    dispatch(AppThunks.doGetMySavedJob()).then(() =>
      setIsloading(false),
    );
  }, []);

  return (
    <SafeAreaView edges={['top']} style={globalStyles.screen}>
      <View style={styles.screen}>
        <Header />
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            columnGap: 10,
            marginBottom: 20,
          }}>
          <TouchableOpacity
            style={[styles.topButton,{backgroundColor:appColors.primary}]}>
            <WihteSave width={24} height={24}/>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Noto Sans',
                fontWeight: '400',
                color: '#FFF',
              }}>
              Saved
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("ApplicationsJob")}
            style={styles.topButton}>
            <RenderSvgIcon icon="BAG" color={appColors.primary} width={24} height={24} />
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Noto Sans',
                fontWeight: '400',
                color: appColors.primary,
              }}>
              Applications
            </Text>
          </TouchableOpacity>
        </View>
        <KeyboardAwareScrollView
          contentContainerStyle={{
            alignItems: 'center',
            flex:1
            // paddingBottom: 140,
          }}
          enableOnAndroid={true}
          keyboardShouldPersistTaps={'handled'}
          enableResetScrollToCoords={false}
          showsVerticalScrollIndicator={false}>
          {mySavedJob == null || mySavedJob?.length == 0 ? null : (
            <ContainerUsers
              data={mySavedJob}  
              loading={isLoading}
            />
          )}
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SavedJob;
