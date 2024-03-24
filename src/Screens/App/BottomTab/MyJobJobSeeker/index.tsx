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
import AppSlice, {
  selectCompaniesUser,
  selectFollowingList,
  selectFreelancerJobs,
  selectInternshipsJobs,
  selectRecommandedJobs,
  selectJobSeeker,
  selectListUsers,
  selectRecuriters,
} from 'src/redux/app';
import FooterSection from './components/footerPagaination';
import {appColors} from 'theme';
import {SaveJobFill} from 'assets/Svgs';
import {RenderSvgIcon} from 'components/atoms/svg';
import { useNavigation } from '@react-navigation/native';

const MyJobToJobSeeker = (props: any) => {
  const dispatch = useAppDispatch();
  const ListUsers = useAppSelector(selectListUsers);
  const navigation = useNavigation<any>();
  const FreelancerJobs = useAppSelector(selectFreelancerJobs);
  const InternshipsJobs = useAppSelector(selectInternshipsJobs);
  const RecommandedJobs = useAppSelector(selectRecommandedJobs);
// console.log("Recommanded",JSON.stringify(FreelancerJobs))
  const [isLoadingJobSeeker, setIsloadingJobSeeker] = useState(false);
  const [isLoadingRecuriter, setIsloadingRecuriter] = useState(false);
  const [isLoadingCompany, setIsloadingCompany] = useState(false);
  const [load, setLoad] = React.useState(false);
  React.useEffect(() => {
    setIsloadingJobSeeker(true);
    setIsloadingRecuriter(true);
    setIsloadingCompany(true);
    dispatch(AppSlice.changeDone(false));
    dispatch(AppThunks.doGetFollowingList());
    dispatch(AppThunks.doGetListUsers());
    dispatch(AppThunks.doGetFreelancerJobs()).then(() =>
      setIsloadingJobSeeker(false),
    );
    dispatch(AppThunks.doGetInternshipsJobs()).then(() =>
      setIsloadingRecuriter(false),
    );
    dispatch(AppThunks.doGetRecommandedJobs()).then(() =>
    setIsloadingCompany(false),
  );
  }, [load]);
  

  return (
    <SafeAreaView edges={['top']} style={globalStyles.screen}>
      <View style={styles.screen}>
        <Header />
        <View
          style={{paddingHorizontal: 20, flexDirection: 'row', columnGap: 10}}>
          <TouchableOpacity onPress={()=>navigation.navigate("SavedJob")}
            style={{
              borderWidth: 1,
              borderColor: appColors.primary,
              flexDirection: 'row',
              justifyContent: 'center',
              columnGap: 5,
              width: '50%',
              paddingVertical: 8,
              borderRadius: 16,
            }}>
            <SaveJobFill />
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Noto Sans',
                fontWeight: '400',
                color: appColors.primary,
              }}>
              Saved
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("ApplicationsJob")}
            style={{
              borderWidth: 1,
              borderColor: appColors.primary,
              flexDirection: 'row',
              justifyContent: 'center',
              columnGap: 5,
              width: '50%',
              paddingVertical: 8,
              borderRadius: 16,
            }}>
            <RenderSvgIcon icon="BAG" color={appColors.primary} />
            <Text
              style={{
                fontSize: 16,
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
           paddingBottom:120
          }}
          enableOnAndroid={true}
          keyboardShouldPersistTaps={'handled'}
          enableResetScrollToCoords={false}
          showsVerticalScrollIndicator={false}>
          {RecommandedJobs == null || RecommandedJobs?.length == 0 ? null : (
            <ContainerUsers
              title="Recommended for you"
              data={RecommandedJobs}
              loading={isLoadingCompany}
              load={setLoad}
            />
        )} 
          {InternshipsJobs == null || InternshipsJobs?.length == 0 ? null : (
            <ContainerUsers
              title="Internship opportunity"
              data={InternshipsJobs}
              loading={isLoadingRecuriter}
              load={setLoad}
            />
          )}
          {FreelancerJobs == null || FreelancerJobs?.length == 0 ? null : (
            <ContainerUsers
              title="Freelance opportunity"
              data={FreelancerJobs}
              loading={isLoadingJobSeeker}
              load={setLoad}
            />
          )}
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MyJobToJobSeeker;
