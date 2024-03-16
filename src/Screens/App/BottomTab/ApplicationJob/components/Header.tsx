import { View, Text, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import { globalStyles } from '../../../../../globalStyle'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'
import { appColors } from '../../../../../theme/appColors'
import { dummyAvatar } from '../../../../../Dummy'
import { styles } from '../styles'
import AvatarIcon from '../../../../../Components/molecules/Avatar'
import { useAppSelector } from 'src/redux/store'
import { selectUser } from 'src/redux/auth'
import { useNavigation } from '@react-navigation/native'
import { AVATAR } from 'assets/Svgs'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { selectLang } from 'src/redux/lang'

const Header = () => {
  const User = useAppSelector(selectUser)
  const navigation = useNavigation()
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  return (
    <View style={{backgroundColor: appColors.bg}}>
    <View style={styles.logoContainer}>
      <TouchableOpacity
        onPress={_handleNavigate}
        activeOpacity={0.8}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          columnGap: 15,
        }}>
        <RenderSvgIcon
          icon="ARROWBACK"
          style={{
            transform:
              lang == 'ar' ? [{rotate: '180deg'}] : [{rotate: '0deg'}],
          }}
          width={30}
          height={30}
          color={appColors.primary}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            fontFamily: 'Noto Sans',
            color: '#000',
            

          }}>
         Applications
        </Text>
      </TouchableOpacity>
      {/* <BigLogo height={30} width={96} style={{marginLeft: 70}} />
       */}
    </View>
  </View>
  )
}

export default Header