import { StyleSheet } from "react-native";
import { appColors, appSizes } from "theme";

export const styles = StyleSheet.create({
    video: {
        width: '100%',
        height: "100%",
    },
    container: {
        // borderTopLeftRadius:appSizes.radius_m,
        // borderTopRightRadius:appSizes.radius_m,
        borderRadius: appSizes.radius_l,
        width: "100%",
        height: "100%",
        alignSelf: "center",
        backgroundColor: appColors.bg,
        // marginTop:10
    },
    topContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 18,
        // paddingVertical:20,
        // backgroundColor: "#999",
        position: "absolute",
        zIndex: 100,
        top: 0,
        height: 60
    },
    rightContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 5,

    },
    bottomContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 18,
        // paddingVertical:20,
        backgroundColor: appColors.transparentBlack50,
        position: "absolute",
        zIndex: 100,
        bottom: 0,
        paddingTop:30,
        paddingBottom:10,
        borderTopLeftRadius:appSizes.radius_l,
        borderTopRightRadius:appSizes.radius_l,
        // height: 80
    },
    bottomStartContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        gap: 10,
    },
    leftBtn: {
        flex: 1,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: appSizes.radius_m,
        backgroundColor: appColors.bink,
    },
    text1: {
        color: appColors.black,
        fontSize: appSizes.font_m,
        marginTop: 5
    },
    skipContainer: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        backgroundColor: appColors.primary,
        borderRadius: appSizes.radius_m,
    },
    skipText: {
        color: appColors.white,
        fontSize: appSizes.font_m
    },
    textOption: {
        color: appColors.white,
        fontSize: appSizes.font_m,
        fontWeight: "500",
    },
    footerContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 15,
        paddingHorizontal: 5,
    },
    footerLeftSide: {
        alignItems: "center",
        rowGap: 6,
    },
    btnShare: {
        backgroundColor: appColors.primary,
        paddingVertical: 16,
        paddingHorizontal: 35,
        borderRadius: 10,
    }

})