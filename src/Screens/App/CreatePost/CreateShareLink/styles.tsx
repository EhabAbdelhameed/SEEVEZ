import { StyleSheet } from "react-native";
import { appColors, appSizes } from "theme";

export const styles = StyleSheet.create({
    HeaderContainer: {
        width: "100%",
        // backgroundColor:appColors.primary,
        // height:100,
        paddingTop: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    TitleHeader: {
        color: appColors.primary,
        fontSize: appSizes.font_l,
        fontWeight: "600",
        marginLeft: 10,
        marginTop: 0
    },
    ContentCotainer: {
        width: "100%",
        backgroundColor: appColors.lightGrey2,
        height: "100%",
        paddingTop: 10,
        paddingHorizontal: 10,
        alignSelf: "center",
        borderTopLeftRadius: appSizes.radius_l,
        borderTopRightRadius: appSizes.radius_l,
        marginTop: 20
    },
    RecordCotainer: {
        width: "100%",
        backgroundColor: appColors.lightGrey2,
        height: "100%",
        paddingTop: 10,
        paddingHorizontal: 10,
        alignSelf: "center",
        borderTopLeftRadius: appSizes.radius_l,
        borderTopRightRadius: appSizes.radius_l,

    },
    bgContainer: {
        width: "100%",
        height: 220,
        backgroundColor: appColors.primary,
        borderRadius: 15,
        overflow: "hidden",
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    cotainerTemalete: {
        width: "100%",
        // backgroundColor:appColors.error,
        paddingTop: 10,
        // paddingHorizontal:10,
        alignSelf: "center",
    },
    textTemplete: {
        color: appColors.black,
        fontSize: appSizes.font_l,
        fontWeight: "500",
        marginTop: 10
    },
    rowTemps: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 5,
        marginTop: 10,
        justifyContent: "space-between",
        height: 70
    },
    temp: {
        width: 70,
        height: 70,
        borderRadius: 40
    },
    optionsContainer: {
        width: "100%",
        marginTop: 5,
        rowGap: 14,
    },
    optionContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    leftSideOption: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10,
    },
    textOption: {
        color: appColors.black,
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
        paddingVertical: 13,
        paddingHorizontal: 35,
        borderRadius: 10
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 6,
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      timeText: {
        fontSize: 12,
       
      },
      slider: {
        width: '90%',
        marginBottom: 2,
      },
})