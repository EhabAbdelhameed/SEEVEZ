import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cv from '../Screens/App/CvMaker';
import ReelsScreen from '../Screens/App/Reels/Reels';
import TabBar from './BottomTab/TabBar';
import { AppParamsList } from './types';
import ProfileScreen from 'screens/App/Profile/Main Profile';
import CreateVideo from 'screens/App/CreatePost/CreateVideo';
import CreateVoice from 'screens/App/CreatePost/CreateVoice';
import AnalyticsScreen from 'screens/App/Profile/Analytics';
import AddPhoto from 'screens/App/CreatePost/AddPhoto';
import CreateVideo2 from 'screens/App/CreatePost/CreateVideo2';
import CreatePull from 'screens/App/CreatePost/CreatePull';


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
