import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../../../globalStyle'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'
import { appColors } from '../../../../../theme/appColors'
import { dummyAvatar } from '../../../../../Dummy'
import { styles } from '../styles'
import AvatarIcon from '../../../../../Components/molecules/Avatar'

const Header = () => {
  return (
    <View style={globalStyles.header}>
      <View style={globalStyles.leftHeaderContainer}>
        <AvatarIcon imgUrl={dummyAvatar} style={styles.avatar} />
        <View>
          <View style={[globalStyles.leftHeaderContainer, {
            width: "100%",
          }]}>
            <View style={{
              maxWidth: "85%",
            }}>
              <Text style={styles.text2} numberOfLines={1}>Mohammed</Text>
            </View>
            <RenderSvgIcon
              icon='RIGHTACCOUNT'
              width={15}
            />
          </View>
          <Text style={styles.text3}>Ui Ux designer </Text>
        </View>
      </View>
      <View style={globalStyles.rightHeaderContainer}>
        <RenderSvgIcon
          icon='SEARCH'
          color={appColors.primary}
        />
        <RenderSvgIcon
          icon='COMMENT'
          color={appColors.primary}
        />
        <RenderSvgIcon
          icon='NOTIFICATION'
          color={appColors.primary}
        />
      </View>
    </View>
  )
}

export default Header