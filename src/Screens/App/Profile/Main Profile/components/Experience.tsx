import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appColors } from '../../../../../theme/appColors'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'
import ReadMore from '@fawazahmed/react-native-read-more'

const ExperienceCard = () => {
    return (
        <View style={styles.CardContainer}>
            <View style={styles.secContainer}>
                <View style={styles.Row}>
                    <Text style={styles.Title}>Experience</Text>
                    <View style={styles.Row2}>
                        <RenderSvgIcon icon='PLUSFOLLOW' style={{ marginRight: 10 }} width={20} height={20} color={appColors.primary} />
                        <RenderSvgIcon icon='PEN' width={20} height={20} color={appColors.primary} />
                    </View>
                </View>

                <View style={styles.Row2}>
                    <Image
                        source={{ uri: 'https://scontent.fcai19-2.fna.fbcdn.net/v/t39.30808-6/359534542_3391290584470469_8259665208312422637_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=0R-hkOPP8gMAX9J78MR&_nc_ht=scontent.fcai19-2.fna&oh=00_AfDdItg61cVUz2yJVvmpbFFhmWn20WjpcHk7PpuD86yycg&oe=657D4854' }}
                        style={styles.Image}
                    />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.Title2}>Senior ui/ux designer</Text>
                        <Text style={styles.CompanyName}>O-Projects</Text>
                        <Text style={styles.des}>Sep 2023 - Present · 2 mos  Cairo, Egypt</Text>
                    </View>
                </View>
                <View style={styles.Row3}>
                    <View style={styles.FollowersContainer}>
                        <Text style={styles.FollowersText}>Full time</Text>
                    </View>
                    <View style={styles.statuesContainer}>
                        <Text style={styles.statuesText}>Hybrid</Text>
                    </View>
                </View>
                <Text style={styles.Title3}>Description</Text>
                <ReadMore style={styles.PostText} animate={true} seeMoreStyle={{ color: appColors.primary, textDecorationLine: 'underline' }} seeLessStyle={{ color: appColors.primary, textDecorationLine: 'underline' }} seeLessText='less' seeMoreText='Read more' numberOfLines={3}>{"Highly experienced, creative, and multitalented Senior UI/UX Designer and Senior Graphic Designer with an extensive background in, UI & UX marketing, social media advertising, branding and print design. Exceptional collaborative and interpersonal skills; very strong team player with well-developed communication abilities. Experienced at producing high-end business-to-business and consumer-facing designs; talented at building and maintaining partnerships. Passionate and accustomed to performing in deadline-driven environments.Also excels at several tech tools, including Illustrator, Photoshop, InDesign. XD , Figmaand After Effect"}</ReadMore>
            </View>

            <View style={styles.devider} />
            <Text style={styles.seeAll}>See all</Text>
        </View>
    )
}

export default ExperienceCard

const styles = StyleSheet.create({
    CardContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: '100%',
        backgroundColor: appColors.white,
        borderRadius: 25,
        marginTop: 15
    },
    statuesContainer: {
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 30,
        backgroundColor: '#E6FAFA',
        borderColor: '#00928E',
        borderWidth: .3,
        marginLeft: 7,

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
    Row3: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 75
    },
    FollowersText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#15439D'
    },
    secContainer: {
        width: '100%',
        backgroundColor: appColors.lightGrey2,
        borderRadius: 25,
        padding: 5,
        paddingTop: 10
    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    Row2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Title: {
        fontSize: 20,
        fontWeight: '700',
        color: appColors.black,
    },
    Title2: {
        fontSize: 19,
        fontWeight: '600',
        color: appColors.black,
    },
    Image: {
        height: 65,
        width: 65,
        borderRadius: 65
    },
    CompanyName: {
        fontSize: 15,
        fontWeight: '400',
        color: appColors.black,
        marginTop: 3
    },
    des: {
        fontSize: 11,
        fontWeight: '400',
        color: appColors.black,
        marginTop: 3
    },
    Title3: {
        fontWeight: '600',
        color: appColors.black,
        marginTop: 15
    },
    PostText: {
        fontSize: 12,
        fontWeight: '400',
        marginTop: 15,
        color: appColors.black
    },
    devider: {
        height: 1,
        width: '95%',
        backgroundColor: '#E8E8E8',
        marginTop: 20,
        marginBottom: 10,
        alignSelf: 'center'
    },
    seeAll: {
        fontSize: 18,
        fontWeight: '600',
        color: appColors.primary,
        textAlign: 'center'
    }
})