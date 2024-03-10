import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
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

const Header = () => {
  const User = useAppSelector(selectUser)
  const navigation = useNavigation()
  return (
    <View style={globalStyles.header}>
      <View style={globalStyles.leftHeaderContainer}>
      {User?.avatar == null || User?.avatar == undefined ? (
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 48,
              // marginTop:10,
              // borderWidth: 1,
              // borderColor: '#DDD',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: appColors.white,
            }}>
            <AVATAR height={32} width={32} />
          </View>
        ) : (
          <AvatarIcon imgUrl={User?.avatar} style={styles.avatar} />
        )}
      
        <View>
          <View style={[globalStyles.leftHeaderContainer, {
            width: "100%",
          }]}>
            <View style={{
              maxWidth: "85%",
            }}>
              <Text style={styles.text2} numberOfLines={1}>{User?.name}</Text>
            </View>
            <RenderSvgIcon
              icon='RIGHTACCOUNT'
              width={15}
            />
          </View>
          <Text style={styles.text3}>{User?.job_title} </Text>
        </View>
      </View>
      <View style={globalStyles.rightHeaderContainer}>
        <TouchableOpacity activeOpacity={.8} onPress={() => { navigation.navigate('Search') }}>
          <RenderSvgIcon
            icon='SEARCH'
            color={appColors.primary}
          />
        </TouchableOpacity>
        {/* <RenderSvgIcon
          icon='COMMENT'
          color={appColors.primary}
        />
        <RenderSvgIcon
          icon='NOTIFICATION'
          color={appColors.primary}
        /> */}
      </View>
    </View>
  )
}

export default Header