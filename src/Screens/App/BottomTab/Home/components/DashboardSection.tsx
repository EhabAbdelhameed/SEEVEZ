import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import AvatarIcon from '../../../../../Components/molecules/Avatar'
import { dummyAvatar } from '../../../../../Dummy'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'
import { LayerDashboard } from '../../../../../assets/Svgs'
import { appSizes } from '../../../../../theme/appSizes'
import { appColors } from '../../../../../theme/appColors'

const DashboardSection = () => {
    return (
        <View style={styles.containerDashboard}>
            <View style={[styles.rowContainer, { width: "100%", justifyContent: "space-between" }]}>
                <View style={styles.rowContainer}>
                    <AvatarIcon
                        imgUrl={dummyAvatar}
                        noActive={true}
                        style={styles.avatar}
                    />
                    <Text style={[styles.text1, {
                        marginBottom: 0
                    }]}>Total engagement</Text>
                </View>
                <RenderSvgIcon icon='LAYER' />
            </View>
            <View style={[styles.rowContainer,
            {
                width: "100%",
                justifyContent: "space-between",
                marginTop: 15
            }]}>
                <View style={styles.textSection}>
                    <Text style={[styles.text1, {
                        fontSize: appSizes.font_xxl,
                    }]}>10%</Text>
                    <Text style={styles.text3}>Engagement rate</Text>
                </View>
                <View style={styles.textSection}>
                    <Text style={[styles.text1, {
                        fontSize: appSizes.font_xxl,
                    }]}>100</Text>
                    <Text style={styles.text3}>Post counts</Text>
                </View>
                <View style={styles.textSection}>
                    <LayerDashboard width={95} />
                </View>
            </View>
            <View style={[styles.rowContainer,
            {
                width: "100%",
                justifyContent: "space-between",
                marginTop: 20
            }]}>
                <View style={styles.textIconSection}>
                    <RenderSvgIcon
                        icon='HEART'
                        color={appColors.primary}
                    />
                    <View style={styles.textSection2}>
                        <Text style={[styles.text1, {
                            fontSize: appSizes.font_xxl - 1,
                        }]}>100</Text>
                        <Text style={styles.text2}>Likes</Text>
                    </View>
                </View>
                <View style={styles.textIconSection}>
                    <RenderSvgIcon
                        icon='REPOST'
                        color={appColors.green2}
                    />
                    <View style={styles.textSection2}>
                        <Text style={[styles.text1, {
                            fontSize: appSizes.font_xxl - 1,
                        }]}>250</Text>
                        <Text style={styles.text2}>Repost</Text>
                    </View>
                </View>
                <View style={styles.textIconSection}>
                    <RenderSvgIcon
                        icon='SHARE'
                        color={appColors.Orange}

                    />
                    <View style={styles.textSection2}>
                        <Text style={[styles.text1, {
                            fontSize: appSizes.font_xxl - 1,
                        }]}>10</Text>
                        <Text style={styles.text2}>Share</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.rowContainer,
            {
                width: "100%",
                justifyContent: "space-between",
                marginTop: 20,
                marginBottom:10
            }]}>
                <View style={[styles.textIconSection2]}>

                    <View style={styles.textSection2}>
                        <Text style={[styles.text1, {
                            fontSize: appSizes.font_xxl - 1,
                        }]}>1200</Text>
                        <Text style={styles.text2}>Followers</Text>
                    </View>
                    <View style={styles.dot} />
                </View>
                <View style={[styles.textIconSection2]}>

                    <View style={styles.textSection2}>
                        <Text style={[styles.text1, {
                            fontSize: appSizes.font_xxl - 1,
                        }]}>200</Text>
                        <Text style={styles.text2}>Jobs applied</Text>
                    </View>
                    <View style={[styles.dot, {
                        backgroundColor: appColors.green2
                    }]} />
                </View>
            </View>
        </View>
    )
}

export default DashboardSection