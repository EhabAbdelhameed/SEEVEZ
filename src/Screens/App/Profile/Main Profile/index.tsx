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
  return (
    <SafeAreaView edges={['top']} style={styles.Container}>
      <Header Title="My profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RecordVideoCard data={CurrentUserData?.user_data?.cv_media} />
        <View style={styles.PaddingContainer}>
          <Complete
            pers={parseInt(CurrentUserData?.user_data?.complete_progress)}
          />
          <InfoCard data={CurrentUserData} />
          <AboutCard data={CurrentUserData?.about} />
          <ExperienceCard data={CurrentUserData?.user_data?.experiences} />
          <EducationCard data={CurrentUserData?.user_data?.educations} />
          <TrainingCard data={CurrentUserData?.user_data?.training_courses} />
          <SkillsCard
            title={'Skills and tools'}
            data={CurrentUserData?.user_data?.skills}
          />
          <SkillsCard
            title={'Interests'}
            data={CurrentUserData?.user_data?.interests}
          />
          <LanguagesCard data={CurrentUserData?.user_data?.languages} />
          <AchievementsCard data={CurrentUserData?.user_data?.achievement} />
          <RecommendationsCard />
          <View style={{height: 20}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
