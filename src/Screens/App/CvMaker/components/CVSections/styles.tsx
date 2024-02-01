import { StyleSheet } from "react-native";
import { appColors } from "../../../../../theme/appColors";
import { appSizes } from "../../../../../theme/appSizes";

export const styles = StyleSheet.create({
    bigContainer: {
        width: '100%',
        // alignItems: "center",
     
    },
    container: {
        width: "90%",
        alignItems: "center",
        paddingHorizontal: 18,
        paddingVertical: 20,
        backgroundColor: appColors.lightGrey,
        borderRadius: 20,
        marginTop: 20,
        alignSelf:"center"
    },
    container2: {
        width: "90%",
        alignItems: "flex-start",
        paddingHorizontal: 18,
        paddingVertical: 20,
        backgroundColor: appColors.lightGrey,
        borderRadius: 20,
        marginTop: 20,
        alignSelf:"center"
    },
    AvatarContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 86,
        height: 86,
        borderRadius: 86,
        backgroundColor: '#E8EFFC',
        borderWidth: 1,
        borderColor: '#B9CDF4',
        marginBottom:10
    },
    avatar: {
        width: 86,
        height: 86,
        borderRadius: 50,
        marginBottom:10
    },
    userName: {
        color: appColors.black,
        fontSize: appSizes.font_xl,
        fontWeight: "700",
    },
    text1: {
        color: appColors.black,
        fontSize: appSizes.font_m,
        fontWeight: "400",
        marginTop: 4
    },
    text2: {
        color: appColors.black,
        fontSize: appSizes.font_m,
        fontWeight: "500",
        marginTop: 4
    },
    absIconsProfile: {
        position: "absolute",
        top: -10,
        left: "10%",
        width: "90%",
        // backgroundColor:appColors.primary,
        zIndex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    textHeaderSection: {
        color: appColors.black,
        fontSize: appSizes.font_l,
        fontWeight: "600",
    },
    textContentSection: {
        color: appColors.black,
        fontSize: appSizes.font_xs,
        fontWeight: "400",
        marginTop: 10,
    },
    rowContainer:{
        width:"100%",
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"space-between",
        // paddingHorizontal:18,
        paddingVertical:7,
        // backgroundColor:appColors.secondary
    },
    label:{
        color: appColors.black,
        fontSize: appSizes.font_m,
        fontWeight: "500",
        marginTop: 5,
    },
    absIconsContainer:{
        position: "absolute",
        top: 17,
        right: 15,
        // backgroundColor:appColors.primary,
        zIndex: 1,
        columnGap:8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
})