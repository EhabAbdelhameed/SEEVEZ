import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';
import {AVATAR, SaveJob} from 'assets/Svgs';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
import {selectUser} from 'src/redux/auth';
import TopHeader from './TopHeader';
import HeaderAfter from './HeaderAfterMeet';
import JobDetails from './JobDetails';
import JobSkills from './skills';
import ReadMore from '@fawazahmed/react-native-read-more';
import {appColors, appSizes} from 'theme';
import Button from 'components/molecules/Button';
import RecruiterHeader from './recruiterHeader';
import CustomButton from 'components/molecules/Button/CustomButton';
import CreatePhoto2 from 'screens/App/CreatePost/AddPhoto2';
import {useAppDispatch} from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';

const UserSection = () => {
  const {obj,color}: any = useRoute().params;

  const {navigate} = useNavigation<any>();
  const lang = useSelector(selectLang);
  const User = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const {t, i18n} = useTranslation();
  const [loading, setLoading] = useState(false);
  const createJob = () => {
    setLoading(true);
    const formdata = new FormData();
   

    obj?.job_title == '' ? null : formdata.append('job_title', obj?.job_title);
    obj?.job_location == ''
      ? null
      : formdata.append('job_location', obj?.job_location);
    obj?.number_of_vacancies == ''
      ? null
      : formdata.append('number_of_vacancies', obj?.number_of_vacancies);
    obj?.work_type_id == ''
      ? null
      : formdata.append('work_type_id', obj?.work_type_id);
    obj?.job_type_id == ''
      ? null
      : formdata.append('job_type_id', obj?.job_type_id);
    obj?.job_description == ''
      ? null
      : formdata.append('job_description', obj?.job_description);
    obj?.salary_range == ''
      ? null
      : formdata.append('salary_range', obj?.salary_range);
    obj?.email == '' ? null : formdata.append('email', obj?.email);
    obj?.external_link == ''
      ? null
      : formdata.append('external_link', obj?.external_link);
    if (obj?.job_requirements[0] != '') {
      for (let i = 0; i < obj?.job_requirements?.length; i++) {
        formdata.append(`job_requirements[${i}]`, obj?.job_requirements[i]);
      }
    }
    if (obj?.skills[0] != '') {
      for (let i = 0; i < obj?.skills?.length; i++) {
        formdata.append(`skills[${i}]`, obj?.skills[i]);
      }
    }
    if(color=='#FFF'){
      dispatch(AppThunks.doAddJobOpportunity(formdata)).then((res: any) => {
        dispatch(AppThunks.doGetJobs())
        setLoading(false);
      });
    }else{
      dispatch(AppThunks.doAddInternshipOpportunity(formdata)).then((res: any) => {
        dispatch(AppThunks.doGetJobs())
        setLoading(false);
      });
    }
  
  };

  // console.log("USERS",item)
  return (
    <View style={{paddingHorizontal: 10}}>
      <TopHeader data={obj} />

      <JobDetails data={obj} />
      {obj?.skillsName?.length == 0 ? null : (
        <>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              fontFamily: 'Noto Sans',
              color: '#000',
            }}>
            Skills
          </Text>
          <JobSkills data={obj?.skillsName} />
        </>
      )}

      <View style={{height: appSizes.height * 0.16}} />

      <CustomButton
        loading={loading}
        style={{backgroundColor:color!='#FFF'?'#E8AB00':appColors.primary}}
        text={'Share'}
        onPress={() => createJob()}
      />
    </View>
  );
};

export default UserSection;
