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
import LoadingAnimation from '../../../assets/images/Loading.json'
import InfoProfileCard from '../Profile/Main Profile/components/Info';
import ExperienceProfileCard from '../Profile/Main Profile/components/Experience';
import EducationProfileCard from '../Profile/Main Profile/components/Education';
import TrainingProfileCard from '../Profile/Main Profile/components/Training';
import SkillsProfileCard from '../Profile/Main Profile/components/Skills';
import LanguagesProfileCard from '../Profile/Main Profile/components/Languages';
import AchievementsProfileCard from '../Profile/Main Profile/components/Achievements';
import ReferenceProfileCheck from '../Profile/Main Profile/components/ReferenceCheck';
import AboutProfileCard from '../Profile/Main Profile/components/About';
const CompleteProfileScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const CurrentUserData = useSelector(selectUser);
  const [isLoading, setIsLoading] = useState(true);

  // console.log(CurrentUserData)
  React.useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      dispatch(AppThunks.GetProfileInfo()).then(
        (res: any) => {
            setIsLoading(false);
        },
      );;
      dispatch(AppSlice.changeDone(false));
    });
    return RenderFunction;
  }, [navigation]);
  return (
    <SafeAreaView edges={['top']} style={styles.Container}>
      <Header Title="My profile" onPress={() => navigation.goBack()} />
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <LottieView
            source={LoadingAnimation}
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
            <InfoProfileCard data={CurrentUserData} />   
            <AboutProfileCard data={CurrentUserData?.about} />
            <ExperienceProfileCard data={CurrentUserData?.user_data?.experiences} />
            <EducationProfileCard data={CurrentUserData?.user_data?.educations} />
            <TrainingProfileCard data={CurrentUserData?.user_data?.training_courses} />
            <SkillsProfileCard
              title={'Skills'}
              data={CurrentUserData?.user_data?.skills}
            />
            <SkillsProfileCard
              title={'Interests'}
              data={CurrentUserData?.user_data?.interests}
            />
            <LanguagesProfileCard data={CurrentUserData?.user_data?.languages} />
            <AchievementsProfileCard data={CurrentUserData?.user_data?.achievement} />
            <ReferenceProfileCheck
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

