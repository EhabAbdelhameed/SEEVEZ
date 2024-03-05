import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { styles } from '../styles'
import { RenderSvgIcon } from 'components/atoms/svg'
import { appColors } from 'theme'
import { useNavigation } from '@react-navigation/native'
import { selectLang } from 'src/redux/lang'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const navigation = useNavigation()
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  const _handleNavigate = useCallback(
    () => {
      navigation.goBack();
    },
    [],
  )

  return (
    <View style={styles.HeaderContainer}>
      <Pressable onPress={_handleNavigate}>
        <RenderSvgIcon
          icon='ARROWBACK'
          color={appColors.primary}
        />
      </Pressable>
      <Text style={styles.TitleHeader}>{t("newReel")}</Text>
    </View>
  )
}

export default Header
