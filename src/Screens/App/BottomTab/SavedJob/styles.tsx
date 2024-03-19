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
        borderWidth: .5,
        borderRadius: 25,
        borderColor: appColors.primary
    },
    UserName: {
        fontSize: 16,
        color: appColors.dark,
        fontWeight: '500'
    },
    work: {
        fontSize: 10,
        fontWeight: "400",
        color: appColors.dark
    },
    text2: {
        fontSize: appSizes.font_l - 3,
        fontWeight: "600",
        color: appColors.dark
    },
    text3: {
        fontSize: 12,
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
        // height:'100%',
        alignItems: "flex-start",
        paddingHorizontal: appSizes.padding_m,
        paddingVertical: 7,
        rowGap: 10
    },
    container2Users: {
        width: "100%",
        // height:'100%',
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
        width: 100,
        // height:21,
        alignItems: "center",
        justifyContent: "center",
        // paddingHorizontal:18,
        paddingVertical: 4,
        paddingHorizontal:15,
        backgroundColor: appColors.lightPurple2,
        borderRadius: appSizes.l,
        marginTop: 5,
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
    },
    containerFooterUsers1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
       
      },
      paginationNumber: {
        padding: 5,
        marginHorizontal: 5,
       
        borderRadius: 30,
        width:30,
        height:30,
        justifyContent:'center',
        alignItems:'center',
     

      },
      activePaginationNumber: {
        backgroundColor: 'blue', // Customize the background color for the active page number
      },
      paginationText: {
        fontSize: 16,
        color:appColors.primary
      },
      logoContainer: {
        flexBasis: 'auto',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        // alignItems: '',
        marginVertical: appSizes.x,
        // marginBottom: appSizes.height * 0.07,
        backgroundColor: appColors.bg,
      },
})