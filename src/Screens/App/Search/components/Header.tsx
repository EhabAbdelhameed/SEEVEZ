import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { styles } from '../styles'
import { RenderSvgIcon } from 'components/atoms/svg'
import { appColors } from 'theme'
import { useNavigation } from '@react-navigation/native'
import { selectPhotoData } from 'src/redux/app'
import { useSelector } from 'react-redux'

const Header = () => {
  const navigation = useNavigation<any>()

  const _handleNavigation = useCallback(() => {
    navigation.goBack()
  }, []);

  return (
    <View style={styles.HeaderContainer}>
      <Pressable onPress={_handleNavigation}>
        <RenderSvgIcon
          icon='ARROWBACK'
          color={appColors.primary}
        />
      </Pressable>
      <Text style={styles.TitleHeader}>Search</Text>
    </View>
  )
}

export default Header
