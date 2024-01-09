import { StyleSheet } from "react-native";
import { appColors, appSizes } from "theme";

export const styles = StyleSheet.create({
    bg: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center"
    },
    HeaderContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 18,
        height: 60,
        // backgroundColor: appColors.error
    },
    skipContainer: {
        // paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: appColors.primary,
        borderRadius: appSizes.radius_m,
        width:70,
        alignItems:"center"
    },
    skipText: {
        color: appColors.white,
        fontSize: appSizes.font_m
    },
    TitleHeader:{
        color: appColors.white,
        fontSize: appSizes.font_l,
        fontWeight:"600",
    },
    FooterContainer:{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 18,
        // paddingVertical:20,
        // backgroundColor: "#999",
        zIndex: 100,
        height: 80,
        marginBottom:20
    },
    RemoveContainer:{
        backgroundColor: appColors.secondary,
        borderWidth:1,
        borderColor: appColors.primary,
        paddingVertical: 6,
        borderRadius: appSizes.radius_m,
        width:90,
        alignItems:"center",

    },
    Timer:{
        color: appColors.white,
        fontSize: appSizes.font_xxxxl,
        fontWeight:"600",
    }
})