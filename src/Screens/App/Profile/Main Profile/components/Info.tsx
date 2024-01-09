import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appColors } from '../../../../../theme/appColors'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'
import { ImageBackground } from 'react-native'
import { Analytics, ReviewCV } from '../../../../../assets/Svgs'
import { useNavigation } from '@react-navigation/native'

const InfoCard = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.CardContainer}>
            <View style={styles.secContainer}>
                <RenderSvgIcon icon='SEND' width={20} height={20} color={appColors.white} style={styles.SENDIcon} />
                <RenderSvgIcon icon='PEN' width={20} height={20} color={appColors.white} style={styles.PENIcon} />
                <ImageBackground
                    source={{ uri: 'https://scontent.fcai19-2.fna.fbcdn.net/v/t39.30808-6/359534542_3391290584470469_8259665208312422637_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=0R-hkOPP8gMAX9J78MR&_nc_ht=scontent.fcai19-2.fna&oh=00_AfDdItg61cVUz2yJVvmpbFFhmWn20WjpcHk7PpuD86yycg&oe=657D4854' }}
                    style={styles.ImageBackground}
                    imageStyle={styles.imageStyle}
                >
                    <View style={styles.PlusContainer}>
                        <RenderSvgIcon icon='PLUSFOLLOW' width={20} height={20} color={appColors.white} />
                    </View>
                </ImageBackground>

                <View style={styles.Row}>
                    <Text style={styles.Name}>Ahmed khalifa</Text>
                    <RenderSvgIcon icon='RIGHTACCOUNT' width={20} height={20} color={appColors.white} />
                </View>
                <Text style={styles.Description}>Senior React native at O-Project</Text>
                <View style={[styles.Row, { marginTop: 10 }]}>
                    <View style={styles.subContainer}>
                        <Text style={styles.subText}>Premium</Text>
                    </View>
                    <View style={styles.statuesContainer}>
                        <Text style={styles.statuesText}>Online</Text>
                    </View>
                    <View style={styles.FollowersContainer}>
                        <Text style={styles.FollowersText}>1.500 Followers</Text>
                    </View>
                </View>
                <View style={styles.Row}>
                    <RenderSvgIcon icon='LOCATION' width={20} height={20} color={appColors.white} />
                    <Text style={styles.InfoText}>Nasr City ، Cairo Egypt</Text>
                </View>
                <View style={styles.Row}>
                    <RenderSvgIcon icon='EMAIL' width={20} height={20} color={appColors.white} />
                    <Text style={styles.InfoText}>Example@info.com</Text>
                </View>
                <View style={styles.Row}>
                    <RenderSvgIcon icon='PHONE' width={20} height={20} color={appColors.white} />
                    <Text style={styles.InfoText}>0127 356 4321</Text>
                </View>
                <View style={styles.Row}>
                    <RenderSvgIcon icon='WEBSITE' width={20} height={20} color={appColors.white} />
                    <Text style={styles.InfoText}>Http/www.exa.com</Text>
                </View>
                <View style={styles.Row}>
                    <RenderSvgIcon icon='INSTA' width={20} height={20} color={appColors.white} style={{ marginRight: 20 }} />
                    <RenderSvgIcon icon='FACE' width={20} height={20} color={appColors.white} style={{ marginRight: 20 }} />
                    <RenderSvgIcon icon='LINKED' width={20} height={20} color={appColors.white} style={{ marginRight: 20 }} />
                </View>
                <View style={[styles.Row, { marginTop: 15 }]}>
                    <ReviewCV width={140} />
                    <TouchableOpacity activeOpacity={.8} onPress={()=>{navigation.navigate('Analytics')}}>
                        <Analytics width={140} style={{ marginLeft: 10 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default InfoCard

const styles = StyleSheet.create({
    CardContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: '100%',
        backgroundColor: appColors.white,
        borderRadius: 25,
        marginTop: 15
    },
    secContainer: {
        width: '100%',
        backgroundColor: appColors.lightGrey2,
        borderRadius: 25,
        padding: 5,
        paddingTop: 10
    },
    ImageBackground: {
        height: 95,
        width: 95,
    },
    imageStyle: {
        borderRadius: 95,
        resizeMode: 'contain',
        backgroundColor: appColors.six
    },
    SENDIcon: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    PENIcon: {
        position: 'absolute',
        right: 40,
        top: 10
    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    Name: {
        fontSize: 23,
        fontWeight: '700',
        color: appColors.black,
        marginRight: 7
    },
    Description: {
        fontSize: 14,
        fontWeight: '400',
        color: appColors.black,
        marginRight: 7,
        marginTop: 2
    },
    subContainer: {
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 30,
        backgroundColor: '#F8E5B0',
        borderColor: '#A57900',
        borderWidth: .3,
        marginRight: 10
    },
    subText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#A57900'
    },
    statuesContainer: {
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 30,
        backgroundColor: '#E6FAFA',
        borderColor: '#00928E',
        borderWidth: .3,
        marginRight: 10
    },
    statuesText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#00928E'
    },
    FollowersContainer: {
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 30,
        backgroundColor: '#E8EFFC',
        borderColor: '#15439D',
        borderWidth: .3
    },
    FollowersText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#15439D'
    },
    InfoText: {
        fontWeight: '600',
        color: appColors.black,
        marginLeft: 7
    },
    Title: {
        fontSize: 16,
        fontWeight: '700',
        color: appColors.black
    },
    Des: {
        fontSize: 12,
        fontWeight: '400',
        color: appColors.black
    },
    PlusContainer: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        backgroundColor: appColors.primary,
        borderRadius: 20
    }
})