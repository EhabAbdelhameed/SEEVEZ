import { StyleSheet } from "react-native";
import { appColors } from "../../../../theme/appColors";
import { appSizes } from "../../../../theme/appSizes";

export const styles = StyleSheet.create({
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
    rowContainer:{
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"space-between",
        columnGap:10,
        width:"100%"
    },
    imgBg:{
        width:"100%",
        height:150,
        alignItems:"center",
        justifyContent:"center",
    },
    imgBg2:{
        width:"100%",
        height:140,
        alignItems:"center",
        justifyContent:"center",
    },
    absIcon:{
        position:"absolute",
        right:5,
        bottom:5
    }
})