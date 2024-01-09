import {View, Text} from 'react-native';
import React, { useState } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ReelsScreen from '../Screens/App/Reels/Reels';
import Cv from '../Screens/App/CvMaker';
import AuthStack from './AuthStack';
import SplashScreen from '../Screens/PreApp/SplashScreen';
import Connections from '../Screens/App/BottomTab/Connections';
import AppStack from './AppStack';
import { RootParamsList } from './types';
import CreateShareLink from 'screens/App/CreatePost/CreateShareLink';


const Root = createNativeStackNavigator<RootParamsList>();

const Navigation = () => {
  const [isSplash, setisSplash] = useState(false)
  return (
    <NavigationContainer>
      <Root.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Root.Screen name="Splash" component={SplashScreen} />
        <Root.Screen name="app" component={AppStack} />
        <Root.Screen name="auth" component={AuthStack} />
        <Root.Screen name="CreateShareLink" component={CreateShareLink}/>
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
