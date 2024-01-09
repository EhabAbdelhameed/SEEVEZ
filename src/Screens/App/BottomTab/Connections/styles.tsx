import { StyleSheet } from "react-native";
import { appColors } from "../../../../theme/appColors";
import { appSizes } from "../../../../theme/appSizes";

export const styles = StyleSheet.create({
    screen: {
        width: "100%",
        height: "100%",
        backgroundColor: appColors.bg
    },
    avatar: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: appColors.primary
    },
    text2: {
        fontSize: appSizes.font_l - 3,
        fontWeight: "600",
        color: appColors.dark
    },
    text3: {
        fontSize: appSizes.font_xs - 2,
        fontWeight: "400",
        color: appColors.dark
    },
    text1: {
        fontSize: appSizes.font_l - 1,
        fontWeight: "600",
        color: appColors.dark,
        alignSelf: "center"
    },
    containerUsers: {
        width: "100%",
        alignItems: "flex-start",
        paddingHorizontal: appSizes.padding_m,
        paddingVertical: 7,
        rowGap: 10
    },
    container2Users: {
        width: "100%",
        borderRadius: appSizes.x,
        backgroundColor: appColors.white,
        padding: appSizes.m
    },
    titleSection: {
        fontSize: appSizes.font_l - 1,
        fontWeight: "500",
        color: appColors.dark,
        marginLeft: 5
    },
    containerUserSection: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        // paddingHorizontal:18,
        padding: 7,
        backgroundColor: appColors.lightGrey2,
        alignItems: "center",
        borderRadius: appSizes.m
    },
    followersContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        // paddingHorizontal:18,
        paddingVertical: appSizes.s,
        paddingHorizontal: appSizes.padding_l,
        backgroundColor: appColors.lightPurple2,
        borderRadius: appSizes.l,
        marginTop: 2,
        borderWidth: 1,
        borderColor: appColors.lightPurple
    },
    folowCotainer: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 3,
        borderRadius: appSizes.l,
        borderWidth: 1,
        padding: appSizes.s,
        paddingHorizontal: appSizes.padding_s,
        borderColor: appColors.lightGreen,
        backgroundColor: appColors.lightGreen2
    },
    containerFooterUsers: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 7,
        borderTopWidth: 1,
        borderTopColor: appColors.lightGrey3
    },
    titleFooterUsers: {
        fontSize: appSizes.font_l - 1,
        fontWeight: "500",
        color: appColors.blue2
    }
})