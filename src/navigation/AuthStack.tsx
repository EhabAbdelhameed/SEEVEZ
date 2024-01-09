import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Auth/Login';
import SplashScreen from '../Screens/PreApp/SplashScreen';
import LoginSavedAccount from '../Screens/Auth/LoginSavedAccount';
import EnterPasswordForSavedAccount from '../Screens/Auth/EnterPasswordForSavedAccount';
import SignUp from '../Screens/Auth/SignUp';
import SignupTwo from '../Screens/Auth/SignupTwo';
import Verification from '../Screens/Auth/Verification';
import ForgetPassword from '../Screens/Auth/ForgetPassword';
import SignupWithSocail from '../Screens/Auth/SignupWithSocail';
import { AuthParamsList } from './types';
import ResetPassword from 'screens/Auth/ResetPassword';



const Stack = createNativeStackNavigator<AuthParamsList>();
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="login" screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signup"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signup2"
        component={SignupTwo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Verification'
        component={Verification}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
      />
      <Stack.Screen
        name="SignupWithSocail"
        component={SignupWithSocail}
      />
      <Stack.Screen
      name='ResetPassword'
      component={ResetPassword}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
