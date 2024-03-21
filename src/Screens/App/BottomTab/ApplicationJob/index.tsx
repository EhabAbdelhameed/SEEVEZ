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
  selectInternshipsJobs,
  selectRecommandedJobs,
  selectJobSeeker,
  selectListUsers,
  selectRecuriters,
  selectMyApplicationJob,
} from 'src/redux/app';
import FooterSection from './components/footerPagaination';
import {appColors} from 'theme';
import {SaveJob, SaveJobFill, WhiteBag, WihteSave} from 'assets/Svgs';
import {RenderSvgIcon} from 'components/atoms/svg';
import { useNavigation } from '@react-navigation/native';

const ApplicationsJob = (props: any) => {
  const dispatch = useAppDispatch();
  const ListUsers = useAppSelector(selectListUsers);

  const InternshipsJobs = useAppSelector(selectMyApplicationJob);



  const [isLoadingRecuriter, setIsloadingRecuriter] = useState(false);
  const navigation = useNavigation<any>();
  React.useEffect(() => {
    setIsloadingRecuriter(true);

    dispatch(AppThunks.doGetMyApplicationJob()).then(() =>
      setIsloadingRecuriter(false),
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
          <TouchableOpacity  onPress={()=>navigation.navigate("SavedJob")}
            style={{
              borderWidth: 1,
              borderColor: appColors.primary,
              flexDirection: 'row',
              justifyContent: 'center',
              columnGap: 5,
              width: '50%',
              paddingVertical: 8,
              borderRadius: 16,
              backgroundColor:'transparent'
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
          <TouchableOpacity 
            style={{
              borderWidth: 1,
              borderColor: appColors.primary,
              flexDirection: 'row',
              justifyContent: 'center',
              columnGap: 5,
              width: '50%',
              paddingVertical: 8,
              borderRadius: 16,
              backgroundColor:appColors.primary

            }}>
            <WhiteBag/>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Noto Sans',
                fontWeight: '400',
                color: '#FFF',
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
          {InternshipsJobs == null || InternshipsJobs?.length == 0 ? null : (
            <ContainerUsers
              data={InternshipsJobs}
              loading={isLoadingRecuriter}
            />
          )}
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ApplicationsJob;
