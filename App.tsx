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


{/*

import { View, Text } from 'react-native'
import React from 'react'
import Upload from 'react-native-background-upload'
import ImageCropPicker from 'react-native-image-crop-picker';

const App = () => {
  const videoUri = 'file:///Users/mac/Library/Developer/CoreSimulator/Devices/0B586555-0674-4154-9044-6C4EBC257C65/data/Media/DCIM/100APPLE/IMG_0002.JPG';
  const options = {
    url: 'https://seevezapi.o-projects.org/api/post-photo',
    path: videoUri,
    method: 'POST',
    type: 'raw',
    headers: {
      "accesstoken": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkwtTl9wMEpQWTlpQWFtczlITllBNnN6TEhSV3JzLUdFSDduQklQOVRaUjgifQ.eyJ1c2VyIjp7InVzZXJJZCI6IjY1OTNlZmIyMzg3OTgzODA2ZjcyODBkYiIsInB1YmxpY1VzZXJJZCI6IjEiLCJkZXZpY2VJbmZvIjp7ImtpbmQiOiJpb3MiLCJtb2RlbCI6InN0cmluZyIsInNka1ZlcnNpb24iOiJzdHJpbmcifSwibmV0d29ya0lkIjoiNjU0NzQ2NTFjNTBmN2MwNjI1N2I1MDRmIiwiZGlzcGxheU5hbWUiOiJTdXBlciIsInJlZnJlc2hUb2tlbiI6IjlkOTFmN2JkNDM2NTQ4MGQ0MGM0YTE3OTM0YTMxNTg4N2YxZTEyNmVlZDU1YTJkYzQ2NmE5ODM2YTYwODgwZTE5OTkwYjg2ZmU4ZmQ5OTk5In0sInN1YiI6IjY1OTNlZmIyMzg3OTgzODA2ZjcyODBkYiIsImlzcyI6Imh0dHBzOi8vYXBpLmV1LmFtaXR5LmNvIiwiaWF0IjoxNzA4OTcyNTEzLCJleHAiOjE3MTE1NjQ1MTN9.TQ8uV_Po6wjhEnu8s4oxh2NR7h5J7Upo5m7HDXA9GOnAPRB5Jn0eFvvD_a-waBGy0mIydQS7bglY-wuB_3wAkKg1_4EV3QqHGurpH2fjk_9pRm7QFGEQhSqWN5lL7IFvB1FotjICpGA1FCHROd5g9xQfoLSmKRxpXUi9dGyPUdae060HKa_21YQWshWHImrmH-DJt4tKPyfzFSo0lpwD4wnCIN8BSDvV5KSz9OGZClWn7g89k4RP90a6MLwp7U1ytHgiwtZi4aTuEO3VtXHdtt_FZD7bvZDF-HfzIJE-aE-ssH0kgDw6pUL6lOOAJQ7vDHYJcLmFVITWQWp1avsT3g"
    },
    // Below are options only supported on Android
    notification: {
      enabled: true
    },
    useUtf8Charset: true
  }
  
    // ImageCropPicker.openPicker({
    //   multiple: true,
    //   maxFiles: 3
    // }).then(images => {
    //   console.log(images)
    // });
  
  // uploadVideoInBackground(videoUri);
  Upload.startUpload(options).then((uploadId) => {
    console.warn(uploadId)
    console.log('Upload started')
    Upload.addListener('progress', uploadId, (data) => {
      console.log(`Progress: ${data.progress}%`)
    })
    Upload.addListener('error', uploadId, (data) => {
      console.log(`Error: ${data.error}%`)
    })
    Upload.addListener('cancelled', uploadId, (data) => {
      console.log(`Cancelled!`)
    })
    Upload.addListener('completed', uploadId, (data) => {
      // data includes responseCode: number and responseBody: Object
      console.log('Completed!')
    })
  }).catch((err) => {
    console.log('Upload error!', err)
  })


  return (
    <View>
      <Text style={{ marginTop: 300 }} onPress={() => ((videoUri))}>App</Text>
    </View>
  )
}

export default App

*/}