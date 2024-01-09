import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { RenderSvgIcon } from '../../../../Components/atoms/svg'
import Bolls from './Bolls'
import TextLinks from './TextLinks'
import { useNavigation } from '@react-navigation/native'
import DeviceInfo from 'react-native-device-info'

const ContentVideo = ({ overlay = false, type = 'bolls' }: { overlay: boolean; type: string }) => {
    const navigation = useNavigation()
    const hasNotch = DeviceInfo.hasNotch()
    return (
        <View style={[styles.container, { marginTop: hasNotch ? 50 : 20 }]}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.leftHeader}
                    onPress={() => {
                        navigation.goBack()
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
                    <View>
                        <Image
                            source={{ uri: `https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D` }}
                            style={styles.avatar}
                        />
                        <View style={styles.dotAvatar} />
                    </View>
                    <View style={{
                        marginLeft: 5,
                        rowGap: 4
                    }}>
                        <View style={styles.nameIcon}>
                            <Text style={styles.name}>Carter Rosser</Text>
                            <RenderSvgIcon
                                icon='RIGHTACCOUNT'
                            />
                            <Text style={styles.text2}>-2 nd</Text>
                        </View>
                        <Text style={styles.text2}>Ui Ux designer at microssoft</Text>
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

