import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from 'src/globalStyle'
import { appColors } from 'theme'
import Header from './components/Header'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Content from './components/Content'
import { useSelector } from 'react-redux'
import { selectLang } from 'src/redux/lang'
import { useTranslation } from 'react-i18next'


const Location = () => {
    //use param
    const lang = useSelector(selectLang);

    const {t, i18n} = useTranslation();
    return (
        <SafeAreaView edges={['top']} style={[globalStyles.screen,{direction:lang=='ar'?'rtl':'ltr'}]}>

            <Header />
            <KeyboardAwareScrollView
            
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

export default Location