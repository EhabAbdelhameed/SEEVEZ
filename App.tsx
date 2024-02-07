import { View, Text, SafeAreaView, Platform } from 'react-native'
import { PortalProvider } from '@gorhom/portal';
import React from 'react'
import { enableScreens } from "react-native-screens";
import Navigation from './src/navigation'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CodePush from 'react-native-code-push';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { Store } from 'src/redux/store';
import Toast from 'react-native-toast-message';

enableScreens()

let CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
};
const App = () => {
  React.useEffect(() => {
    if (Platform.OS == "ios") {
      CodePush.sync({
        updateDialog: { title: 'A new update is Available' },
        installMode: CodePush.InstallMode.IMMEDIATE,
      }).catch(e => console.log(e));
    }
  }, []);
  return (
    <Provider store={Store().store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          {/* <CommonStatusBar /> */}

          <PortalProvider>

            <Navigation />
          </PortalProvider>
        </SafeAreaProvider>
        <Toast topOffset={50} />
      </GestureHandlerRootView>
    </Provider>
  )
}

export default CodePush(CodePushOptions)(App);
