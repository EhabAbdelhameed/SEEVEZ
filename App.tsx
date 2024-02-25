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
    Platform.OS == 'ios' ?
      (
        I18nManager.allowRTL(true),
        I18nManager.forceRTL(true)
      )
      :
      ((i18n.language === 'en') ? (
        I18nManager.allowRTL(false),
        I18nManager.forceRTL(false)
      ) : (
        I18nManager.allowRTL(true),
        I18nManager.forceRTL(true)
      ))
  }, [i18n.language])
  console.warn(I18nManager?.isRTL)
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

export default App