import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
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
  selectJobSeeker,
  selectListUsers,
  selectRecuriters,
} from 'src/redux/app';
import FooterSection from './components/footerPagaination';

const Connections = (props: any) => {
  const dispatch = useAppDispatch();
  const ListUsers = useAppSelector(selectListUsers);

  const JobSeekerUser = useAppSelector(selectJobSeeker);
  const requriterUsers = useAppSelector(selectRecuriters);
  const companiesUsers = useAppSelector(selectCompaniesUser);
  const [jobseekerIndex, setJobseekerIndex] = useState(
    JobSeekerUser?.current_page,
  );
  const [recuriterIndex, setRecuriterIndex] = useState(requriterUsers?.current_page);
  const [companyIndex, setCompanyIndex] = useState(companiesUsers?.current_page);
  const [isLoadingJobSeeker, setIsloadingJobSeeker] = useState(false);
  const [isLoadingRecuriter, setIsloadingRecuriter] = useState(false);
  const [isLoadingCompany, setIsloadingCompany] = useState(false);
  React.useEffect(() => {
    setIsloadingJobSeeker(true);
    dispatch(AppThunks.doGetFollowingList())
    dispatch(AppThunks.doGetListUsers())
    dispatch(AppThunks.GetJobSeekers(jobseekerIndex)).then(() =>
      setIsloadingJobSeeker(false),
    );
    
  }, [jobseekerIndex]);
  React.useEffect(() => {

    setIsloadingRecuriter(true);
    dispatch(AppThunks.doGetFollowingList())
    dispatch(AppThunks.GetRecruiterUsers(recuriterIndex)).then(() =>
    setIsloadingRecuriter(false),
    );
   
  }, [recuriterIndex]);
  React.useEffect(() => {
    setIsloadingCompany(true);
    dispatch(AppThunks.doGetFollowingList())
    dispatch(AppThunks.GetCompanyUsers(companyIndex)).then(() =>
    setIsloadingCompany(false),
    );
   
  }, [companyIndex]);
  //  console.log("el3m Ehab ",JobSeekerUser)
  const handlePagination = (page: number) => {
    setJobseekerIndex(page);
  };
  const handlePaginationR = (page: number) => {
    setRecuriterIndex(page);
  }; const handlePaginationC = (page: number) => {
    setCompanyIndex(page);
  };
  return (
    <SafeAreaView edges={['top']} style={globalStyles.screen}>
      <View style={styles.screen}>
        <Header />
        <KeyboardAwareScrollView
          contentContainerStyle={{
            alignItems: 'center',
            paddingBottom: 140,
          }}
          enableOnAndroid={true}
          keyboardShouldPersistTaps={'handled'}
          enableResetScrollToCoords={false}
          showsVerticalScrollIndicator={false}>
          <ContainerUsers
            title="People you may know with similar roles"
            data={JobSeekerUser?.data}
            loading={isLoadingJobSeeker}
            totalPages={JobSeekerUser?.last_page}
            currentPage={JobSeekerUser?.current_page}
            onPageChange={handlePagination}
          />
           
           <ContainerUsers
           title="Popular pages"
            data={companiesUsers?.data}
            loading={isLoadingCompany}
            totalPages={companiesUsers?.last_page}
            currentPage={companiesUsers?.current_page}
            onPageChange={handlePaginationC}
          />
           <ContainerUsers
           title="Popular recruiters"
            data={requriterUsers?.data}
            loading={isLoadingRecuriter}
            totalPages={requriterUsers?.last_page}
            currentPage={requriterUsers?.current_page}
            onPageChange={handlePaginationR}
          />
          {/* <ContainerUsers title="Popular pages" data={[1, 2]} />
          <ContainerUsers title="Popular recruiters" data={[1, 2, 3, 4, 5]} /> */}
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Connections;
