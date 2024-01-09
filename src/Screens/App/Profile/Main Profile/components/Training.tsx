import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appColors } from '../../../../../theme/appColors'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'

const TrainingCard = () => {
    return (
        <View style={styles.CardContainer}>
            <View style={styles.secContainer}>
                <View style={styles.Row}>
                    <Text style={styles.Title}>Training Courses</Text>
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
                        <Text style={styles.Title2}>Google UX design course</Text>
                        <Text style={styles.CompanyName}>Coursera</Text>
                        <Text style={styles.des}>2020 - 2021 ·1 years · Cairo, Egypt</Text>
                        <View style={styles.Row2}>
                            <Text style={styles.Title3}>Grade : </Text>
                            <Text style={styles.Title4}>Excellent</Text>
                        </View>
                    </View>
                </View>
                <Image style={styles.Certificate} source={{ uri: 'https://scontent.fcai19-2.fna.fbcdn.net/v/t39.30808-6/359534542_3391290584470469_8259665208312422637_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=0R-hkOPP8gMAX9J78MR&_nc_ht=scontent.fcai19-2.fna&oh=00_AfDdItg61cVUz2yJVvmpbFFhmWn20WjpcHk7PpuD86yycg&oe=657D4854' }} />

                <View style={styles.Row2}>
                    <Image
                        source={{ uri: 'https://scontent.fcai19-2.fna.fbcdn.net/v/t39.30808-6/359534542_3391290584470469_8259665208312422637_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=0R-hkOPP8gMAX9J78MR&_nc_ht=scontent.fcai19-2.fna&oh=00_AfDdItg61cVUz2yJVvmpbFFhmWn20WjpcHk7PpuD86yycg&oe=657D4854' }}
                        style={styles.Image}
                    />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.Title2}>Graphic Design</Text>
                        <Text style={styles.CompanyName}>Coursera</Text>
                        <Text style={styles.des}>2020 - 2021 ·1 years · Cairo, Egypt</Text>
                        <View style={styles.Row2}>
                            <Text style={styles.Title3}>Grade : </Text>
                            <Text style={styles.Title4}>Excellent</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.devider} />
            <Text style={styles.seeAll}>See all</Text>
        </View>
    )
}

export default TrainingCard

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
        width: '110%',
    },
    Image: {
        height: 40,
        width: 40,
        borderRadius: 65,
        marginRight: 10
    },
    CompanyName: {
        fontSize: 16,
        fontWeight: '400',
        color: appColors.black,
        marginTop: 3,
        width: '90%',
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
        marginTop: 3
    },
    Title4: {
        fontWeight: '400',
        color: appColors.black,
        marginTop: 3,
        fontSize: 12
    },
    Certificate: {
        width: 200,
        height: 150,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginVertical: 10
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