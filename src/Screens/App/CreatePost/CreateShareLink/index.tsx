import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from 'src/globalStyle'
import { appColors } from 'theme'
import Header from './components/Header'
import Content from './components/Content'
import Templetes from './components/Templetes'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useRoute } from '@react-navigation/native'
import { useAppDispatch } from 'src/redux/store'
import AppSlice, { selectPhotoData } from 'src/redux/app'
import { useSelector } from 'react-redux'

const CreateShareLink = () => {
  
    const dispatch=useAppDispatch()
    dispatch(AppSlice.changeKey("6"))
    const audioData=useSelector(selectPhotoData)
    console.log(audioData?.pdf)
    return (
        <SafeAreaView edges={['top']} style={[globalStyles.screen]}>

            <Header />
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    alignItems: "center",
                    paddingBottom: 20,

                }}
                enableOnAndroid={true}
                keyboardShouldPersistTaps={"handled"}
                enableResetScrollToCoords={false}
                showsVerticalScrollIndicator={false}
            >
                <Content />
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default CreateShareLink