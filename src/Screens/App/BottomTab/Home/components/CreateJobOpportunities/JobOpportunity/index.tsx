import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from 'src/globalStyle'
import { appColors } from 'theme'
import Header from './components/Header'
import Content from './components/Content'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useRoute } from '@react-navigation/native'

const JobOpportunityCompany = () => {
    const {color}: any = useRoute().params;
    return (
        <SafeAreaView edges={['top']} style={[globalStyles.screen,{backgroundColor:color=='#FFF'?appColors.bg:'#F8E5B0'}]}>

            <Header />
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    alignItems: "center",
                    paddingBottom: 40,
                    // flex:1

                }}
                enableOnAndroid={true}
                keyboardShouldPersistTaps={"handled"}
                enableResetScrollToCoords={false}
                showsVerticalScrollIndicator={false}
            >
                <Content  />
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default JobOpportunityCompany