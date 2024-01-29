import {ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from 'components/molecules/Header';
import {styles} from './styles';
import Complete from './components/Complete/Complete';
import InfoCard from './components/Info/Info';
import AboutCard from './components/About/About';
import ExperienceCard from './components/Experience/Experience';
import {useNavigation} from '@react-navigation/native';
import EducationCard from './components/Education/Education';
import TrainingCard from './components/Training/Training';
import SkillsCard from './components/Skills/Skills';
import RecordVideo from './components/RecordVideo/RecordVideo';

import LanguagesCard from './components/Languages/Languages';
import ReferenceCheckCard from './components/RefernceCheck/RefernceCheck';

import AchievementsCard from './components/Achievements/Achievements';
import {useAppDispatch} from 'src/redux/store';
import {useSelector} from 'react-redux';
import {selectUser} from 'src/redux/auth';
import AppSlice from 'src/redux/app';
import AppThunks from 'src/redux/app/thunks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';

const CompleteProfileScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const CurrentUserData = useSelector(selectUser);
  const [isLoading, setIsLoading] = useState(false);

  // console.log(CurrentUserData)
  React.useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      dispatch(AppThunks.GetProfileInfo());
      dispatch(AppSlice.changeDone(false));
    });
    return RenderFunction;
  }, [navigation]);

  const data = [
    'Ux design',
    'Research',
    'Figma',
    'XD',
    'Web',
    'User flow',
    'Ui design',
  ];
  const data2 = ['Creative/Design/Art', 'Human ', 'IT/Software Development'];
  return (
    <SafeAreaView edges={['top']} style={styles.Container}>
      <Header Title="My profile" onPress={() => navigation.goBack()} />
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <LottieView
            source={''}
            autoPlay
            loop
            style={styles.loadingAnimation}
          />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <RecordVideo user_data={CurrentUserData?.user_data?.cv_media} />
          <View style={styles.PaddingContainer}>
            <Complete
              pers={parseInt(CurrentUserData?.user_data?.complete_progress)}
            />
            <InfoCard user_data={CurrentUserData} />
            <AboutCard About={CurrentUserData} />
            <ExperienceCard data={CurrentUserData?.user_data?.experiences} />
            <EducationCard data={CurrentUserData?.user_data?.educations} />
            <TrainingCard data={CurrentUserData?.user_data?.training_courses} />
            <SkillsCard
              title={'Skills'}
              data={CurrentUserData?.user_data?.skills}
            />
            <SkillsCard
              title={'Interests'}
              data={CurrentUserData?.user_data?.interests}
            />
            <LanguagesCard data={CurrentUserData?.user_data?.languages} />
            <AchievementsCard data={CurrentUserData?.user_data?.achievement} />
            <ReferenceCheckCard
              data={CurrentUserData?.user_data?.reference_check}
            />
          </View>

          {/* <View style={{ height: 20 }} /> */}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default CompleteProfileScreen;

