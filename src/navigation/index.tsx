import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ReelsScreen from '../Screens/App/Reels/Reels';
import Cv from '../Screens/App/CvMaker';
import AuthStack from './AuthStack';
import SplashScreen from '../Screens/PreApp/SplashScreen';
import Connections from '../Screens/App/BottomTab/Connections';
import AppStack from './AppStack';
import {RootParamsList} from './types';
import CreateShareLink from 'screens/App/CreatePost/CreateShareLink';
import {useSelector} from 'react-redux';
import AuthSlice, {selectIsAuth} from 'src/redux/auth';
import {useAppDispatch} from 'src/redux/store';
import AppDrawer from './Drawer/Drawer';
import AppThunks from 'src/redux/app/thunks';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Root = createNativeStackNavigator<RootParamsList>();

const Navigation = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  // dispatch(AuthSlice.chnageisAuth(false))
  const [splash, setSplash] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 4000);

    // const interval = setInterval(() => {
    //   isAuth && dispatch(AppThunks.GetAccessToken())
    // }, 150000);
    // return () => clearInterval(interval);
  }, []);
  // console.log(isAuth)
  return (
    <NavigationContainer>
      <Root.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        {splash && <Root.Screen name="Splash" component={SplashScreen} />}
        {!isAuth ? (
          <Root.Screen name="auth" component={AuthStack} />
        ) : (
          <>
            <Root.Screen name="app" component={AppDrawer} />
            <Root.Screen name="CreateShareLink" component={CreateShareLink} />
          </>
        )}
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
