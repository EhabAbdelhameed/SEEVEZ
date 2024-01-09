import { StyleSheet } from "react-native";
import { appColors } from "theme/appColors";
import { appSizes } from "theme/appSizes";

export const style=StyleSheet.create({
    container:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:18,
        paddingVertical:20,
        backgroundColor:appColors.secondary,
    },
    leftContainer:{
        width:"50%",
        flexDirection:"row",
        alignItems:"center",
        columnGap:10,
    },
    rightContainer:{
        width:"50%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-end",
        columnGap:16,
        paddingHorizontal:2
    },
    text1:{
        fontSize:appSizes.l,
        color:appColors.black,
        fontWeight:"600"
    },
    footer:{
        width:"100%",
        height:100,
        backgroundColor:"#F9F9F9",
        position:"absolute",
        bottom:0,
        justifyContent:"flex-start",
        alignItems:"center",
        paddingTop:12
    },
    textBtn:{
        color:appColors.white,
        fontSize:appSizes.font_l
    },
    btn:{
        width:"80%",
        paddingVertical:15,
        borderRadius:20,
        backgroundColor:appColors.primary,
        alignItems:"center",
    }
})