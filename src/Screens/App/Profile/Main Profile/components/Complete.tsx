import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appColors } from '../../../../../theme/appColors'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'
import ProgressBar from '../../../../../Components/molecules/Progress'
import { appSizes } from 'theme/appSizes'

const Complete = ({
    pers = 0
}: {
    pers: number;
}) => {
    const Slider = () => {
        return (
            <View style={styles.rowItemSlide}>
                <View style={{ width: "85%" }}>
                    <View style={[styles.slider, {
                        opacity: .4,
                    }]} />
                    <View style={[styles.slider, {
                        // backgroundColor: color,
                        position: "absolute",
                        left: 0,
                        width: `${pers}%`
                    }]} />
                    <View style={[styles.circleSlider, {
                        left: `${pers - 1}%`,
                        bottom: -5
                    }]} >
                        <RenderSvgIcon icon='RIGHTSLIDER' width={10} height={10} />
                    </View>
                </View>
                <Text style={styles.text2}>{pers}%</Text>
            </View>
        )
    }
   
    return (
        <>
        <View style={styles.containerCompleteProfile}>
            <View style={styles.rowContainer}>
                <View style={styles.contentContainer}>
                    <Text style={styles.text1}>Complete your profile</Text>
                    <Text style={styles.text2}>Lorem ipsum dolor sit amet consectetur.</Text>
                </View>
                <View style={{ transform: [{ rotate: "180deg" }] }}>
                    <RenderSvgIcon
                        icon='ARROWBACK'
                        color={appColors.primary}
                    />
                </View>
            </View>
            <Slider />
        </View>
    </>
    )
}

export default Complete

const styles = StyleSheet.create({
    containerCompleteProfile: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appColors.white,
        paddingHorizontal: appSizes.padding_s,
        paddingVertical: appSizes.padding_m,
        marginTop: appSizes.spacing_m,
        borderRadius: appSizes.radius_l
    },
    containerBox: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appColors.white,
        paddingHorizontal: appSizes.padding_s,
        paddingVertical: appSizes.padding_s,
        marginTop: appSizes.spacing_m,
        borderRadius: appSizes.radius_l
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 10
    },
    contentContainer: {
        width: "85%"
    },
    text1: {
        fontSize: appSizes.font_m,
        fontWeight: "700",
        color: appColors.dark,
        marginBottom: 4
    },
    text2: {
        fontSize: appSizes.font_xs-3,
        fontWeight: "400",
        color: appColors.dark,
        opacity: .8,
        marginLeft:10
    },
  
 
    slider: {
        width: "100%",
        height: 8,
        borderRadius: 5,
        backgroundColor: "rgba(0, 206, 200, 1)"
    },
    circleSlider: {
        backgroundColor: "rgba(0, 206, 200, 1)",
        width: 20,
        height: 20,
        padding: 3,
        borderRadius: 10,
        position: "absolute",
        left: "0%",
        alignItems: "center",
        justifyContent: "center"
    },
    rowItemSlide: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10,
        marginTop: 10
    },
})