import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { styles } from '../styles'
import { RenderSvgIcon } from 'components/atoms/svg'
import { appColors } from 'theme'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
  const navigation = useNavigation()
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
      <Text style={styles.TitleHeader}>New reel</Text>
    </View>
  )
}

export default Header
