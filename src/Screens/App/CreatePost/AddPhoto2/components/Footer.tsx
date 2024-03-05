import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import { SaveCircle } from 'assets/Svgs'
import { appColors } from 'theme'
import { selectLang } from 'src/redux/lang'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const Footer = ({saveVideo, loading}:any) => {
    const lang = useSelector(selectLang);

    const {t, i18n} = useTranslation();
    return (
        <View style={styles.footerContainer}>
            <View style={styles.footerLeftSide}>
               
            </View>
            <TouchableOpacity disabled={loading} onPress={saveVideo} style={styles.btnShare}>
                {loading?<ActivityIndicator size={'small'} color={'#FFF'}/>:
                <Text style={[styles.textOption, {
                    color: appColors.white
                }]}>{t("Next")}</Text>}
            </TouchableOpacity>
        </View>
    )
}

export default Footer