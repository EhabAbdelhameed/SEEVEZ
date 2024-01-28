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
                name="UpdateRecordVideo"
                component={UpdateRecordVideo}
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
                name="ProfileScreen"
                component={ProfileScreen}
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

        </Stack.Navigator>
    );
};

export default AppStack;
