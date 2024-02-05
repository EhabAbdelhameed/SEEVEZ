import {ScrollView, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from 'components/molecules/Header';
import {styles} from './styles';
import Complete from './components/Complete';
import InfoCard from './components/Info';
import AboutCard from './components/About';
import ExperienceCard from './components/Experience';
import {useNavigation} from '@react-navigation/native';
import EducationCard from './components/Education';
import TrainingCard from './components/Training';
import SkillsCard from './components/Skills';
import LanguagesCard from './components/Languages';
import AchievementsCard from './components/Achievements';
import RecommendationsCard from './components/Recommendations';
import RecordVideoCard from './components/RecordVideo';
import {selectUser} from 'src/redux/auth';
import {useSelector} from 'react-redux';
import AppSlice from 'src/redux/app';
import {useAppDispatch} from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import ReferenceCheck from './components/ReferenceCheck';
import InfoProfileCard from './components/Info';
import AboutProfileCard from './components/About';
import ReferenceProfileCheck from './components/ReferenceCheck';
import AchievementsProfileCard from './components/Achievements';
import LanguagesProfileCard from './components/Languages';
import SkillsProfileCard from './components/Skills';
import TrainingProfileCard from './components/Training';
import EducationProfileCard from './components/Education';
import ExperienceProfileCard from './components/Experience';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  
  React.useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      dispatch(AppThunks.GetProfileInfo())
      dispatch(AppSlice.changeDone(false));
    });
    return RenderFunction;
  }, [navigation]);
  const CurrentUserData = useSelector(selectUser);
  // console.log("This Data From Hossam ",JSON.stringify(CurrentUserData))
  return (
    <SafeAreaView edges={['top']} style={styles.Container}>
      <Header Title="My profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RecordVideoCard data={CurrentUserData?.user_data?.cv_media} />
        <View style={styles.PaddingContainer}>
          {parseInt(CurrentUserData?.user_data?.complete_progress)==100?null:
          <Complete
            pers={parseInt(CurrentUserData?.user_data?.complete_progress)}
          />}
          <InfoProfileCard data={CurrentUserData} />
          <AboutProfileCard data={CurrentUserData?.about} />
          <ExperienceProfileCard data={CurrentUserData?.user_data?.experiences} />
          <EducationProfileCard data={CurrentUserData?.user_data?.educations} />
          <TrainingProfileCard data={CurrentUserData?.user_data?.training_courses} />
          <SkillsProfileCard
            title={'Skills and tools'}
            data={CurrentUserData?.user_data?.skills}
          />
          <SkillsProfileCard
            title={'Interests'}
            data={CurrentUserData?.user_data?.interests}
          />
          <LanguagesProfileCard data={CurrentUserData?.user_data?.languages} />
          <AchievementsProfileCard data={CurrentUserData?.user_data?.achievement} />
          {/* <RecommendationsCard /> */}
          <ReferenceProfileCheck data={CurrentUserData?.user_data?.reference_check}/>
          <View style={{height: 20}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
