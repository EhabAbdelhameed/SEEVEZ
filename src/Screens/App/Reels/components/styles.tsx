import { Dimensions, StyleSheet } from "react-native";
// import { appSizes } from "../../theme/appSizes";
import { appColors } from "../../../../theme/appColors";
import { appSizes } from "../../../../theme/appSizes";
const { width, height } = Dimensions.get("window")
export const styles = StyleSheet.create({
    container: {
        width: width,
        height: height / 1.14,
        paddingHorizontal: 16,
        justifyContent: "space-between",
        // backgroundColor:appColors.fourth
    },
    header: {
        width: "100%",
        // backgroundColor: "#489",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15
        // height:100,
    },
    leftHeader: {
        flex: 1,
        alignItems: "center",
        // backgroundColor: "#5659",
        flexDirection: "row"
    },
    rightHeader: {
        flex: 1,
        alignItems: "center",
        // backgroundColor: "#282",
        flexDirection: "row",
        justifyContent: "flex-end",
        columnGap: 25
    },
    textLeftHeader: {
        color: "white",
        fontSize: 20,
        fontWeight: "600",
        marginLeft: 10
    },
    footer: {
        width: "100%",
        // backgroundColor: "red",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between"
    },
    rightFooter: {
        width: 40,
        // backgroundColor: appColors.blue,
        rowGap: 26,
        paddingBottom: 15
    },
    leftFooter: {
        // width:"80%",
        // backgroundColor: appColors.secondary,
        alignItems: "flex-start",
        flexDirection: "row",
    },
    containerIconText: {
        alignItems: "center",
        rowGap: 6,
        justifyContent: "space-between"
    },
    textIcon: {
        color: appColors.white,
        fontSize: 12,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    name: {
        color: appColors.white,
        fontSize: 20,
        fontWeight: "700"
    },
    nameIcon: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 5
    },
    text2: {
        color: appColors.white,
        fontSize: 16,
        fontWeight: "600"
    },
    containerType: {
        backgroundColor: "#F8E5B0",
        borderRadius: 20,
        paddingHorizontal: 8,
        paddingVertical: 5,
        width: 110,
        alignItems: "center"
    },
    text3: {
        color: "#A57900",
        fontSize: 15,
        fontWeight: "600"
    },
    dotAvatar: {
        width: 15,
        height: 15,
        backgroundColor: "#00CEC8",
        borderRadius: 10,
        position: "absolute",
        bottom: 5,
        right: 5
    },
    bollsContainer: {
        width: "85%",
        backgroundColor: appColors.white,
        position: "absolute",
        // height: 200,
        left: 0,
        bottom: 100,
        elevation: 4,
        borderRadius: 10,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 4
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    },
    text11: {
        fontSize: appSizes.x-1,
        fontWeight: "600",
        color: appColors.black,
    },
    text12: {
        fontSize: appSizes.m,
        fontWeight: "400",
        color: "#1C1C1C",
        marginVertical: 5,
    },
    text13: {
        fontSize: appSizes.m,
        fontWeight: "500",
        color: appColors.black,
    },
    circle11: {
        borderColor: "rgba(29, 94, 221, 1)",
        backgroundColor: "rgba(232, 239, 252, 1)",
        width: 20,
        height: 20,
        padding: 3,
        borderWidth: 1,
        borderRadius: 10
    },
    filledInnerCircle: {
        backgroundColor: "rgba(29, 94, 221, 1)",
        width: "100%",
        height: "100%",
        borderRadius: 10
    },
    rowItemSlide: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 5,
    },
    slider: {
        width: "100%",
        height: 8,
        borderRadius: 5,
        backgroundColor: "#a62",
        justifyContent: "center"
    },
    circleSlider: {
        borderColor: "rgba(29, 94, 221, 1)",
        backgroundColor: "rgba(232, 239, 252, 1)",
        width: 20,
        height: 20,
        padding: 3,
        borderWidth: 1,
        borderRadius: 10,
        position: "absolute",
        left: "0%",
        alignItems: "center",
        justifyContent: "center"
    },
    containerHire: {
        backgroundColor: "#1D5EDD",
        borderRadius: 20,
        paddingHorizontal: 8,
        paddingVertical: 5,
        width: 130,
        alignItems: "center",
        flexDirection:"row",
        columnGap:5,
        justifyContent:"center",
        marginTop:10
    },

})