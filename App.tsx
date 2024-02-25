import { View, Text, SafeAreaView, Platform, I18nManager } from 'react-native'
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
import i18n from 'src/i18n/i18n';

enableScreens()


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
