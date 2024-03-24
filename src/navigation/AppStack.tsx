import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cv from '../Screens/App/CvMaker';
import ReelsScreen from '../Screens/App/Reels/Reels';
import TabBar from './BottomTab/TabBar';
import {AppParamsList} from './types';
import ProfileScreen from 'screens/App/Profile/Main Profile';
import CompleteProfileScreen from 'screens/App/CompleteProfile';
import CompleteCompanyProfileScreen from 'screens/App/CompleteCompanyProfile';

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
import CreatePhoto2 from 'screens/App/CreatePost/AddPhoto2';
import Location from 'screens/App/CreatePost/AddLocation';
import MyConnection from 'screens/App/BottomTab/My connection';
import UserProfile from 'screens/App/BottomTab/User profile';
import CreateShareLink from 'screens/App/CreatePost/CreateShareLink';

import ExterinalLinks from 'screens/App/CreatePost/ExteraLinks';
import MYPolls from 'screens/App/MyPolls';
import HealthProfile from 'screens/App/CompleteProfile/components/HealthProfile/HealthProfile';
import SearchScreen from 'screens/App/Search';
import JobOpportunity from 'screens/App/CreatePost/JobOpportunity';

import JobDetailsScreen from 'screens/App/Job Details';
import MyJob from 'screens/App/BottomTab/My Job';
import JobDescraption from 'screens/App/BottomTab/JopDescraption';
import UpdateExterinalLinks from 'screens/App/CreatePost/UpdateExteralinks';
import UpdateCV from 'screens/App/CreatePost/UpdateCV';
import MyJobToJobSeeker from 'screens/App/BottomTab/MyJobJobSeeker';
import ApplayForJob from 'screens/App/ApplayForJob';
import SecondApplayPage from 'screens/App/ApplayForJob/components/secondJob';
import UpdateSkills from 'screens/App/CompleteProfile/components/Skills/UpdateSkills';
import Market from 'screens/App/CreatePost/Market';
import Form2 from 'screens/App/CreatePost/JobOpportunity/components/Form2';
import JobOpportunityCompany from 'screens/App/BottomTab/Home/components/CreateJobOpportunities/JobOpportunity';
import PreviewJob from 'screens/App/BottomTab/Home/components/CreateJobOpportunities/JobOpportunity/PreviewJob';
import Form2JobOpportunity from 'screens/App/BottomTab/Home/components/CreateJobOpportunities/JobOpportunity/components/Form2';
import ThirdApplayPage from 'screens/App/ApplayForJob/components/ThirdJob';
import FourthApplayPage from 'screens/App/ApplayForJob/components/FourthJob';
import FifthApplayPage from 'screens/App/ApplayForJob/components/FifthPage';
import sixApplayPage from 'screens/App/ApplayForJob/components/sixPage';
import SixApplayPage from 'screens/App/ApplayForJob/components/sixPage';
import SavedJob from 'screens/App/BottomTab/SavedJob';
import ApplicationsJob from 'screens/App/BottomTab/ApplicationJob';
import Assignment from 'screens/App/BottomTab/ApplicationJob/components/Assignment';
import JobDescraptionCompany from 'screens/App/BottomTab/JobDescraptionCompany';
import ReviewUser from 'screens/App/BottomTab/ReviewUser';
import ShortedList from 'screens/App/BottomTab/ShortedList';
import WatingList from 'screens/App/BottomTab/WaitingList';
import EmployeeAppliedList from 'screens/App/BottomTab/EmployeeAppliedList';
import RejectedList from 'screens/App/BottomTab/RejectedList';
import DynamicQuestionsComponent from 'screens/App/ApplayForJob/components/BasicPage';
import MyCalendarScreen from 'screens/App/BottomTab/MySchedule';

const Stack = createNativeStackNavigator<AppParamsList>();
const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabBar"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabBar" component={TabBar} />
      <Stack.Screen name="MyConnection" component={MyConnection} />
      <Stack.Screen
        name="CompleteProfileScreen"
        component={CompleteProfileScreen}
      />
      <Stack.Screen
        name="CompleteCompanyProfileScreen"
        component={CompleteCompanyProfileScreen}
      />
      <Stack.Screen name="UpdateAbout" component={UpdateAbout} />
      <Stack.Screen name="SaveVideo" component={SaveVideo} />
      <Stack.Screen name="SaveVideoCompany" component={SaveVideoCompany} />
      <Stack.Screen name="UpdateRecordVideo" component={UpdateRecordVideo} />
      <Stack.Screen
        name="UpdateRecordVideoCompany"
        component={UpdateRecordVideoCompany}
      />
      <Stack.Screen name="UpdateCompanyAbout" component={UpdateCompanyAbout} />
      <Stack.Screen name="UpdateLanguages" component={UpdateLanguages} />
      <Stack.Screen name="UpdateAchievements" component={UpdateAchievements} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen
        name="UpdateRefernceCheck"
        component={UpdateRefernceCheck}
      />
      <Stack.Screen name="UpdateSkills" component={UpdateSkills} />
      <Stack.Screen name="UpdateTraining" component={UpdateTraining} />
      <Stack.Screen name="UpdateExperience" component={UpdateExperience} />
      <Stack.Screen name="UpdateEducation" component={UpdateEducation} />
      <Stack.Screen name="UpdateInfo" component={UpdateInfo} />
      <Stack.Screen name="UpdateCompanyInfo" component={UpdateCompanyInfo} />
      <Stack.Screen name="UpdateAboutCard" component={UpdateAboutCard} />
      <Stack.Screen name="UpdateInfoCard" component={UpdateInfoCard} />
      <Stack.Screen name="AddNewExperience" component={AddNewExperience} />
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
      <Stack.Screen name="UpdateOneEducation" component={UpdateOneEducation} />
      <Stack.Screen name="UpdateLanguageCard" component={UpdateLanguageCard} />
      <Stack.Screen
        name="UpdateOneAchievements"
        component={UpdateOneAchievements}
      />
      <Stack.Screen
        name="UpdateAchievementCard"
        component={UpdateAchievementCard}
      />
      <Stack.Screen name="UpdateOneLanguage" component={UpdateOneLanguage} />
      <Stack.Screen name="UpdateTrainingCard" component={UpdateTrainingCard} />
      <Stack.Screen name="UpdateOneTraining" component={UpdateOneTraining} />
      <Stack.Screen
        name="UpdateReferenceCheckCard"
        component={UpdateReferenceCheckCard}
      />
      <Stack.Screen
        name="UpdateOneRefernceCheck"
        component={UpdateOneRefernceCheck}
      />
      <Stack.Screen name="UpdateSkillsCard" component={UpdateSkillsCard} />
      <Stack.Screen name="UpdateOneSkills" component={UpdateOneSkills} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen
        name="ProfileCompanyScreen"
        component={ProfileCompanyScreen}
      />

      <Stack.Screen name="Analytics" component={AnalyticsScreen} />
      <Stack.Screen name="Cv" component={Cv} />
      {/* <Stack.Screen
                name="Connections"
                component={Connections}
            /> */}
      <Stack.Screen name="Reels" component={ReelsScreen} />
      <Stack.Screen name="CreateVideo" component={CreateVideo} />
      <Stack.Screen name="CreateVoice" component={CreateVoice} />
      <Stack.Screen name="AddPhoto" component={AddPhoto} />
      <Stack.Screen name="CreateVideo2" component={CreateVideo2} />
      <Stack.Screen name="CreatePhoto2" component={CreatePhoto2} />
      <Stack.Screen name="CreatePull" component={CreatePull} />
      <Stack.Screen name="CV" component={CV} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="CreatePollLink" component={CreatePollLink} />
      <Stack.Screen name="TagPeople" component={TagPeople} />
      <Stack.Screen name="SearchPeople" component={SearchPeople} />
      <Stack.Screen name="MyVideoCV" component={MyVideoCV} />
      <Stack.Screen name="CreateShareLink" component={CreateShareLink} />
      <Stack.Screen name="Market" component={Market} />
      <Stack.Screen name="ExterinalLinks" component={ExterinalLinks} />
      <Stack.Screen name="MYPolls" component={MYPolls} />
      <Stack.Screen name="HealthProfile" component={HealthProfile} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="JobOpportunity" component={JobOpportunity} />
      <Stack.Screen name="Form2" component={Form2} />

      <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
      <Stack.Screen name="MyJob" component={MyJob} />
      <Stack.Screen name="JobDescraption" component={JobDescraption} />
      <Stack.Screen
        name="UpdateExterinalLinks"
        component={UpdateExterinalLinks}
      />
      <Stack.Screen name="UpdateCV" component={UpdateCV} />
      <Stack.Screen name="MyJobToJobSeeker" component={MyJobToJobSeeker} />
      <Stack.Screen name="ApplayForJob" component={ApplayForJob} />
      <Stack.Screen name="SecondApplayPage" component={SecondApplayPage} />
      <Stack.Screen
        name="JobOpportunityCompany"
        component={JobOpportunityCompany}
      />
      <Stack.Screen name="PreviewJob" component={PreviewJob} />
      <Stack.Screen
        name="Form2JobOpportunity"
        component={Form2JobOpportunity}
      />
      <Stack.Screen name="ThirdApplayPage" component={ThirdApplayPage} />
      <Stack.Screen name="FourthApplayPage" component={FourthApplayPage} />
      <Stack.Screen name="FifthApplayPage" component={FifthApplayPage} />
      <Stack.Screen name="SixApplayPage" component={SixApplayPage} />
      <Stack.Screen name="SavedJob" component={SavedJob} />
      <Stack.Screen name="ApplicationsJob" component={ApplicationsJob} />
      <Stack.Screen name="Assignment" component={Assignment} />
      <Stack.Screen
        name="JobDescraptionCompany"
        component={JobDescraptionCompany}
      />
      <Stack.Screen name="ReviewUser" component={ReviewUser} />
      <Stack.Screen name="ShortedList" component={ShortedList} />
      <Stack.Screen name="WatingList" component={WatingList} />
      <Stack.Screen
        name="EmployeeAppliedList"
        component={EmployeeAppliedList}
      />
      <Stack.Screen name="RejectedList" component={RejectedList} />
      <Stack.Screen name="DynamicQuestionsComponent" component={DynamicQuestionsComponent} />
      <Stack.Screen name="MyCalendarScreen" component={MyCalendarScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
