import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { styles } from './styles'
import { RenderSvgIcon } from 'components/atoms/svg'
import { appColors } from 'theme'
import { useNavigation } from '@react-navigation/native'
import { selectPhotoData } from 'src/redux/app'
import { useSelector } from 'react-redux'

const Header = () => {
  const navigation = useNavigation()
  const photoData = useSelector(selectPhotoData);
  const _handleNavigation = useCallback(() => {
    photoData?.key=="6"?navigation.navigate('CreateShareLink'):
    navigation.navigate('CreatePollLink');
  }, []);

  return (
    <View style={styles.HeaderContainer}>
      <Pressable onPress={_handleNavigation}>
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
