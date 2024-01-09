import { View, Text, SafeAreaView } from 'react-native'
import { PortalProvider } from '@gorhom/portal';
import React from 'react'
import { enableScreens } from "react-native-screens";
import Navigation from './src/navigation'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { Store } from 'src/redux/store';

enableScreens()


const App = () => {

  return (
    <Provider store={Store().store}>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        {/* <CommonStatusBar /> */}

        <PortalProvider>
          <Navigation />
        </PortalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
    </Provider>
  )
}

export default App