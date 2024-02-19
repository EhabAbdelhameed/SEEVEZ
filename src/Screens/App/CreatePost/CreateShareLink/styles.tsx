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
      taggedPeopleContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
      },
      removeTagButton: {
        marginLeft: 5,
        padding: 5,
        backgroundColor: 'red',
        borderRadius: 5,
      },
      taggedPerson: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      taggedPeopleList: {
        marginTop: 10,
      },
      taggedPeopleTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      bollsContainer: {
        width: "80%",
        backgroundColor: appColors.white,
        // position: "absolute",
        alignSelf:'center',
        // height: 200,
        // left: 0,
       
        height:220,  
        // bottom: 10,
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
    CVContainer: {
        width: "80%",
        backgroundColor: appColors.white,
        position: "absolute",
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        // height: 200,
        // left: 0,
       
        bottom: 40,
        elevation: 4,
        borderRadius: 16,
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
        fontSize: 18,
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
    slider1: {
      width: "100%",
      height: 8,
      borderRadius: 5,
      backgroundColor: "#a62",
      justifyContent: "center"
  },
})