import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appColors } from '../../../../../theme/appColors'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'

const RecommendationsCard = () => {
    return (
        <View style={styles.CardContainer}>
            <View style={styles.secContainer}>
                <Text style={styles.Title}>Recommendations</Text>
                <View style={[styles.Row, { marginTop: 15, marginBottom: -10 }]}>
                    <View style={styles.smallCardContainer}>
                        <Text style={styles.smallCardText}>Given</Text>
                    </View>
                    <View style={[styles.smallCardContainer, { backgroundColor: appColors.primary }]}>
                        <Text style={[styles.smallCardText, { color: '#fff' }]}>Received</Text>
                    </View>
                </View>

                <View style={[styles.Row, { marginVertical: 15 }]}>
                    <Image
                        source={{ uri: 'https://scontent.fcai19-2.fna.fbcdn.net/v/t39.30808-6/359534542_3391290584470469_8259665208312422637_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=0R-hkOPP8gMAX9J78MR&_nc_ht=scontent.fcai19-2.fna&oh=00_AfDdItg61cVUz2yJVvmpbFFhmWn20WjpcHk7PpuD86yycg&oe=657D4854' }}
                        style={styles.Image}
                    />
                    <View style={{ marginLeft: 15 }}>
                        <View style={styles.Row}>
                            <Text style={styles.Name}>Ahmed khalifa</Text>
                            <RenderSvgIcon icon='RIGHTACCOUNT' style={{ marginLeft: 10 }} width={17} height={17} />
                        </View>
                        <Text style={styles.CompanyName}>Human resource at microssoft</Text>
                    </View>
                </View>
                <Text style={styles.Des}>Lorem ipsum dolor sit amet consectetur. Interdum sit platea imperdiet justo id fames suscipit. Ultricies commodo cras a ac lobortis tempor velit quisque nascetur.</Text>
            </View>
        </View>
    )
}

export default RecommendationsCard

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
    },
    Title: {
        fontSize: 20,
        fontWeight: '700',
        color: appColors.black,
    },
    Image: {
        height: 40,
        width: 40,
        borderRadius: 65
    },
    Name: {
        fontSize: 18,
        fontWeight: '700',
        color: appColors.black,
    },
    CompanyName: {
        fontSize: 12,
        fontWeight: '400',
        color: appColors.black,
    },
    Des: {
        fontSize: 12,
        fontWeight: '400',
        color: '#676767',
        marginBottom: 10
    },
    smallCardContainer: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderColor: appColors.lightPurple,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: appColors.bg,
        marginRight: 10,
        marginBottom: 10,
    },
    smallCardText: {
        fontSize: 12,
        fontWeight: '400',
        color: appColors.blue2,
        marginRight: 5
    },
})