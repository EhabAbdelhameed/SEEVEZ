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
    userAvatar: {
        height: 67.5,
        width: 67.5,
        borderRadius: 40,
        marginBottom: 10,
        marginTop: 30,
      },
      switchTextContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 7,
        paddingVertical: 5,
      },
      preferences: {
        fontSize: 16,
        color: "#ccc",
        paddingTop: 10,
        fontWeight: "500",
        paddingLeft: 20,
      },
      switchText: {
        fontSize: 17,
        color: "",
        paddingTop: 10,
        fontWeight: "bold",
      },
})