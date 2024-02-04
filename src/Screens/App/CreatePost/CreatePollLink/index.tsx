import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from 'src/globalStyle'
import { appColors } from 'theme'
import Header from './components/Header'
import Content from './components/Content'
import Templetes from './components/Templetes'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const CreatePollLink = () => {
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

export default CreatePollLink