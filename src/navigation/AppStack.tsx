import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cv from '../Screens/App/CvMaker';
import ReelsScreen from '../Screens/App/Reels/Reels';
import TabBar from './BottomTab/TabBar';
import { AppParamsList } from './types';
import ProfileScreen from 'screens/App/Profile/Main Profile';
import CompleteProfileScreen from 'screens/App/CompleteProfile'
import CompleteCompanyProfileScreen from 'screens/App/CompleteCompanyProfile'

import CreateVideo from 'screens/App/CreatePost/CreateVideo';
import CreateVoice from 'screens/App/CreatePost/CreateVoice';
import AnalyticsScreen from 'screens/App/Profile/Analytics';
import AddPhoto from 'screens/App/CreatePost/AddPhoto';
import CreateVideo2 from 'screens/App/CreatePost/CreateVideo2';
import UpdateAchievements from 'screens/App/CompleteProfile/components/Achievements/UpdateAchievements';
import CreatePull from 'screens/App/CreatePost/CreatePull';
import UpdateExperience from 'screens/App/CompleteProfile/components/Experience/UpdateExperience';
import UpdateTraining from 'screens/App/CompleteProfile/components/Training/UpdateTraining';
import UpdateRefernceCheck from 'screens/App/CompleteProfile/components/RefernceCheck/UpdateRefernceCheck';
import UpdateAbout from 'screens/App/CompleteProfile/components/About/UpdateAbout';
import UpdateSkills from 'screens/App/CompleteProfile/components/Skills/UpdateSkills';
import UpdateInfo from 'screens/App/CompleteProfile/components/Info/UpdateInfo';
import UpdateLanguages from 'screens/App/CompleteProfile/components//Languages/UpdateLanguages';
import UpdateEducation from 'screens/App/CompleteProfile/components/Education/UpdateEducation';
import UpdateCompanyInfo from 'screens/App/CompleteCompanyProfile/components/Info/UpdateInfo';
import UpdateCompanyAbout from 'screens/App/CompleteCompanyProfile/components/About/UpdateAbout';
import UpdateRecordVideo from 'screens/App/CompleteProfile/components/RecordVideo/UpdateRecordVideo';
import SaveVideo from 'screens/App/CompleteProfile/components/RecordVideo/SaveVideo';
import UpdateAboutCard from 'screens/App/Profile/Main Profile/UpdateComponents/About/UpdateAboutCard';
import UpdateInfoCard from 'screens/App/Profile/Main Profile/UpdateComponents/Info/UpdateInfoCard';
import AddNewExperience from 'screens/App/Profile/Main Profile/UpdateComponents/Experience/AddNewExperience';
import UpdateExperienceCard from 'screens/App/Profile/Main Profile/UpdateComponents/Experience/UpdateExperienceCard';
import UpdateOneExperience from 'screens/App/Profile/Main Profile/UpdateComponents/Experience/LastUpdatePage';
import UpdateRecordVideoCompany from 'screens/App/CompleteCompanyProfile/components/RecordVideo/UpdateRecordVideoCompany';
import SaveVideoCompany from 'screens/App/CompleteCompanyProfile/components/RecordVideo/SaveVideoCompany';
import ProfileCompanyScreen from 'screens/App/Profile/Main Company Profile';
import UpdateEducationCard from 'screens/App/Profile/Main Profile/UpdateComponents/Education/UpdateEducationCard';
import UpdateOneEducation from 'screens/App/Profile/Main Profile/UpdateComponents/Education/lastUpdateEducation';
import UpdateLanguageCard from 'screens/App/Profile/Main Profile/UpdateComponents/Languages/UpdateLanguageCard';
import UpdateOneLanguage from 'screens/App/Profile/Main Profile/UpdateComponents/Languages/lastUpdateLanguage';
import UpdateTrainingCard from 'screens/App/Profile/Main Profile/UpdateComponents/TrainingCourse/UpdateTrainingCard';
import UpdateOneTraining from 'screens/App/Profile/Main Profile/UpdateComponents/TrainingCourse/lastUpdateTrainingCard';
import UpdateOneAchievements from 'screens/App/Profile/Main Profile/UpdateComponents/Achievements/lastUpdateAchievements';
import UpdateAchievementCard from 'screens/App/Profile/Main Profile/UpdateComponents/Achievements/UpdateAchievementsCard';
import UpdateReferenceCheckCard from 'screens/App/Profile/Main Profile/UpdateComponents/ReferenceCheck/UpdateRefernceCheckCard';
import UpdateOneRefernceCheck from 'screens/App/Profile/Main Profile/UpdateComponents/ReferenceCheck/lastUpdateReferenceCheck';
import UpdateSkillsCard from 'screens/App/Profile/Main Profile/UpdateComponents/Skills/UpdateSkillsCard';
import UpdateOneSkills from 'screens/App/Profile/Main Profile/UpdateComponents/Skills/lastUpdateSkills';
import CV from 'screens/App/CreatePost/UploadCV';
import CreatePollLink from 'screens/App/CreatePost/CreatePollLink';
import TagPeople from 'screens/App/CreatePost/TagPeople';
import SearchPeople from 'screens/App/CreatePost/SearchPeople';
import MyVideoCV from 'screens/App/BottomTab/Home/components/MyVideoCV';
const Stack = createNativeStackNavigator<AppParamsList>();
const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName="TabBar" screenOptions={{
            headerShown: false,
        }}>

            <Stack.Screen
                name="TabBar"
                component={TabBar}
            />
               <Stack.Screen
                name="CompleteProfileScreen"
                component={CompleteProfileScreen}
            />
             <Stack.Screen
                name="CompleteCompanyProfileScreen"
                component={CompleteCompanyProfileScreen}
            />
              <Stack.Screen
                name="UpdateAbout"
                component={UpdateAbout}
            />
             <Stack.Screen
                name="SaveVideo"
                component={SaveVideo}
            />
              <Stack.Screen
                name="SaveVideoCompany"
                component={SaveVideoCompany}
            />
              <Stack.Screen
                name="UpdateRecordVideo"
                component={UpdateRecordVideo}
            />
            <Stack.Screen
                name="UpdateRecordVideoCompany"
                component={UpdateRecordVideoCompany}
            />
              <Stack.Screen
                name="UpdateCompanyAbout"
                component={UpdateCompanyAbout}
            />
                <Stack.Screen
                name="UpdateLanguages"
                component={UpdateLanguages}
            />
              <Stack.Screen
                name="UpdateAchievements"
                component={UpdateAchievements}
            />
             <Stack.Screen
                name="UpdateRefernceCheck"
                component={UpdateRefernceCheck}
            />
             <Stack.Screen
                name="UpdateSkills"
                component={UpdateSkills}
            />
              <Stack.Screen
                name="UpdateTraining"
                component={UpdateTraining}
            />
              <Stack.Screen
                name="UpdateExperience"
                component={UpdateExperience}
            />
             <Stack.Screen
                name="UpdateEducation"
                component={UpdateEducation}
            />
               <Stack.Screen
                name="UpdateInfo"
                component={UpdateInfo}
            />
              <Stack.Screen
                name="UpdateCompanyInfo"
                component={UpdateCompanyInfo}
            />
                <Stack.Screen
                name="UpdateAboutCard"
                component={UpdateAboutCard}
            />
                <Stack.Screen
                name="UpdateInfoCard"
                component={UpdateInfoCard}
            />
             <Stack.Screen
                name="AddNewExperience"
                component={AddNewExperience}
            />
             <Stack.Screen
                name="UpdateExperienceCard"
                component={UpdateExperienceCard}
            />
                <Stack.Screen
                name="UpdateOneExperience"
                component={UpdateOneExperience}
            />
            <Stack.Screen
                name="UpdateEducationCard"
                component={UpdateEducationCard}
            />
            <Stack.Screen
                name="UpdateOneEducation"
                component={UpdateOneEducation}
            />
              <Stack.Screen
                name="UpdateLanguageCard"
                component={UpdateLanguageCard}
            />
            <Stack.Screen
                name="UpdateOneAchievements"
                component={UpdateOneAchievements}
            />
                <Stack.Screen
                name="UpdateAchievementCard"
                component={UpdateAchievementCard}
            />
            <Stack.Screen
                name="UpdateOneLanguage"
                component={UpdateOneLanguage}
            />
              <Stack.Screen
                name="UpdateTrainingCard"
                component={UpdateTrainingCard}
            />
            <Stack.Screen
                name="UpdateOneTraining"
                component={UpdateOneTraining}
            />
               <Stack.Screen
                name="UpdateReferenceCheckCard"
                component={UpdateReferenceCheckCard}
            />
            <Stack.Screen
                name="UpdateOneRefernceCheck"
                component={UpdateOneRefernceCheck}
            />
              <Stack.Screen
                name="UpdateSkillsCard"
                component={UpdateSkillsCard}
            />
            <Stack.Screen
                name="UpdateOneSkills"
                component={UpdateOneSkills}
            />
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
            />
                  <Stack.Screen
                name="ProfileCompanyScreen"
                component={ProfileCompanyScreen}
            />
           
            <Stack.Screen
                name="Analytics"
                component={AnalyticsScreen}
            />
            <Stack.Screen
                name="Cv"
                component={Cv}
            />
            {/* <Stack.Screen
                name="Connections"
                component={Connections}
            /> */}
            <Stack.Screen
                name="Reels"
                component={ReelsScreen}
            />
            <Stack.Screen
                name="CreateVideo"
                component={CreateVideo}
            />
            <Stack.Screen
                name="CreateVoice"
                component={CreateVoice}
            />
            <Stack.Screen
                name="AddPhoto"
                component={AddPhoto}
            />
            <Stack.Screen
                name='CreateVideo2'
                component={CreateVideo2}
            />
            <Stack.Screen
                name='CreatePull'
                component={CreatePull}
            />
              <Stack.Screen
                name='CV'
                component={CV}
            />
             <Stack.Screen
                name='CreatePollLink'
                component={CreatePollLink}
            />
               <Stack.Screen
                name='TagPeople'
                component={TagPeople}
            />
              <Stack.Screen
                name='SearchPeople'
                component={SearchPeople}
            />
              <Stack.Screen
                name='MyVideoCV'
                component={MyVideoCV}
            />

        </Stack.Navigator>
    );
};

export default AppStack;
