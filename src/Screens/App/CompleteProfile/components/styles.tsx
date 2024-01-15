import { StyleSheet } from "react-native";
import { appColors } from "../../../../theme/appColors";
import { appSizes } from "../../../../theme/appSizes";

export const styles = StyleSheet.create({
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
        fontSize: appSizes.font_xs,
        fontWeight: "400",
        color: appColors.dark,
        opacity: .8,
    },
    text3: {
        fontSize: appSizes.font_s,
        fontWeight: "400",
        color: appColors.dark,
        opacity: .8,
    },
    text4: {
        fontSize: appSizes.font_vs,
        fontWeight: "400",
        color: appColors.dark,
        opacity: .8,
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
    boxTitleBottomContainer: {
        flexDirection: "row",
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 5,
        borderTopColor: appColors.placeholder,
        borderTopWidth: .3,
        paddingTop: 10,
        marginTop: 10
    },
    containerDashboard: {
        width: "100%",
        alignItems: "flex-start",
        paddingHorizontal: appSizes.padding_s,
        // paddingVertical:appSizes.padding_m,
        // marginTop:appSizes.spacing_m,
        borderRadius: appSizes.radius_l
    },
    avatar: {
        width: 40,
        height: 40
    },
    textSection: {
        alignItems: "center",
    },
    textSection2: {
        alignItems: "flex-start"
    },
    textIconSection: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 5,
        backgroundColor: appColors.lightGrey,
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: appSizes.radius_l,
        flex: 1,
    },
    textIconSection2: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 5,
        backgroundColor: appColors.lightGrey,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: appSizes.radius_l,
        // width:"45%",
        flex: 1
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: appColors.primary,
        alignSelf: "flex-end",
        bottom: 4,
        right: 4,
    },
    containerProfile: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical:10,
        // backgroundColor:"#a00"
    },
    absIconProfile: {
        position: "absolute",
        bottom: -10,
        alignSelf: "center"
    },
    PollsContainer:{
        width:"100%",
        alignItems:"flex-start",
    },
    hashtagItem:{
        width:"90%",
        alignItems:"center",
        flexDirection:"column",
        backgroundColor:appColors.lightPurple2,
        paddingVertical:7,
        borderRadius:appSizes.radius_l,
        marginBottom:5
    },
    imgsAvatar:{
        width:15,
        height:15,
        borderWidth:1,
        borderRadius:7.5,
        borderColor:appColors.primary
    },
    imgsAvatar2:{
        width:15,
        height:15,
        borderWidth:1,
        borderRadius:7.5,
        borderColor:appColors.white
    },
    containerSchedule:{
        width: "100%",
        justifyContent: "center",
        marginBottom: 15,
        backgroundColor:appColors.green2,
        paddingHorizontal:appSizes.padding_s-2,
        paddingVertical:appSizes.padding_s,
        borderRadius:appSizes.radius_l
    },
    dot2: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: appColors.primary,
    },
})