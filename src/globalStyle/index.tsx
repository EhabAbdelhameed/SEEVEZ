import { StyleSheet } from "react-native";
import { appColors } from "../theme/appColors";

export const globalStyles=StyleSheet.create({
    header:{
        backgroundColor:appColors.secondary,
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:18,
        paddingVertical:20,
    },
    leftHeaderContainer:{
        width:"50%",
        flexDirection:"row",
        alignItems:"center",
        columnGap:10,
    },
    rightHeaderContainer:{
        width:"50%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-end",
        columnGap:16,
        paddingHorizontal:2
    },
    screen: {
        width: "100%",
        height: "100%",
        backgroundColor: appColors.bg
    },
})