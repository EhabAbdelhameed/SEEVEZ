import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { RenderSvgIcon } from '../../../../Components/atoms/svg'
import Bolls from './Bolls'
import TextLinks from './TextLinks'
import { useNavigation } from '@react-navigation/native'
import DeviceInfo from 'react-native-device-info'
import { useSelector } from 'react-redux'
import { selectUser } from 'src/redux/auth'
import { AVATAR } from 'assets/Svgs'
import { appColors } from 'theme/appColors'

const ContentVideo = ({ overlay = false, type = 'bolls' }: { overlay: boolean; type: string }) => {
    const navigation = useNavigation<any>()
    const CurrentUserData=useSelector(selectUser)
    // const hasNotch = DeviceInfo.hasNotch()
    return (
        <View style={[styles.container]}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.leftHeader}
                    onPress={() => {
                        navigation.popToTop()
                    }}
                >
                    <RenderSvgIcon
                        icon='ARROWBACK'
                    />
                    <Text style={styles.textLeftHeader}>My reels</Text>
                </TouchableOpacity> 
              <View style={styles.rightHeader}>
                    <RenderSvgIcon
                        icon='SEARCH'
                    />
                    <RenderSvgIcon
                        icon='COMMENT'
                    />
                    <RenderSvgIcon
                        icon='NOTIFICATION'
                    />
                </View>
            </View>
            <View style={styles.footer}>
                {!overlay ? type == "bolls" ? <Bolls /> : <TextLinks /> : null}
                <View style={styles.leftFooter}>
                <View
          style={{
            width: 56,
            height: 56,
            borderRadius: 56,
            // borderWidth: 1,
            // borderColor: '#DDD',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: appColors.bg,
          }}>
          {CurrentUserData?.avatar == null ? (
            <AVATAR height={48} width={48} />
          ) : (
            <Image
              source={{uri: CurrentUserData?.avatar}}
              style={{width: 56, height: 56, borderRadius: 56}}
              resizeMode="cover"
            />
          )}</View>
                    <View style={{
                        marginLeft: 5,
                        rowGap: 4
                    }}>
                        <View style={styles.nameIcon}>
                            <Text style={styles.name}>{CurrentUserData?.name}</Text>
                            <RenderSvgIcon
                                icon='RIGHTACCOUNT'
                            />
                            <Text style={styles.text2}>-2 nd</Text>
                        </View>
                        <Text style={styles.text2}>{CurrentUserData?.job_title}</Text>
                        <View style={styles.containerType}>
                            <Text style={styles.text3}>Premium</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.rightFooter}>
                    <View style={styles.containerIconText}>
                        <RenderSvgIcon
                            icon='HEART'
                            width={30}
                            height={30}
                        />
                        <Text style={styles.textIcon}>10k</Text>
                    </View>
                    <View style={styles.containerIconText}>
                        <RenderSvgIcon
                            icon='REPOST'
                            width={30}
                            height={30}
                        />
                        <Text style={styles.textIcon}>10k</Text>
                    </View>
                    <View style={styles.containerIconText}>
                        <RenderSvgIcon
                            icon='SHARE'
                            width={30}
                            height={30}
                        />
                        <Text style={styles.textIcon}>10k</Text>
                    </View>
                    <View style={styles.containerIconText}>
                        <RenderSvgIcon
                            icon='THREEDOTS'
                            width={30}
                            height={30}
                        />
                    </View>
                </View>

            </View>
        </View>
    )
}

export default ContentVideo

