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
        borderWidth: 1,
        borderRadius: 25,
        borderColor: appColors.primary
    },
    UserName: {
        fontSize: 14,
        color: appColors.dark,
        fontWeight: '700'
    },
    work: {
        fontSize: 11,
        fontWeight: "400",
        fontFamily:"Noto Sans",
        color: appColors.dark
    },
    text2: {
        fontSize: appSizes.font_l - 3,
        fontWeight: "600",
        color: appColors.dark
    },
    text3: {
        fontSize: 11,
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
        // width: "100%",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 15,
        rowGap: 10,
        borderRadius:16,

        backgroundColor:'#FFF'
    },
    container2Users: {
        // width: "100%",
        borderRadius: appSizes.x,
        backgroundColor: appColors.white,
        // padding: appSizes.m,
      
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
        paddingBottom: 5,

        paddingHorizontal:5,
        backgroundColor: appColors.lightGrey2,
        alignItems: "center",
        borderRadius: appSizes.m
    },
    followersContainer: {
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        // paddingHorizontal:18,
        paddingVertical: 2,
        // paddingHorizontal: 15,
        backgroundColor: appColors.lightPurple2,
        borderRadius: appSizes.l,
        marginTop: 2,
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
    PostText: {
        fontSize: 12,
        fontWeight: '400',
        marginTop: 15,
        color: '#676767',
        textAlign:'left'
      },
      AnalticContainer:{
        // width: '49%',
        backgroundColor: '#FFF',
        elevation: 2,
        borderRadius: 16,
        paddingHorizontal:10,
        paddingBottom:10,
        paddingTop:5
      //   paddingVertical:25
      },
      bigText:{
        fontSize: 40,
        fontWeight: '700',
        fontFamily: 'Noto Sans',
        color: '#1C1C1C',
        marginTop:5,
      },
      subText:{
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'Noto Sans',
        color: '#1C1C1C',
        marginTop:5,
      },
      timeText:{
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Noto Sans',
        color: '#1C1C1C',
        marginTop:5,
        marginBottom:10,
      },
      ColorView:{
        width: 8,
        height: 8,
        borderRadius: 8,
        marginTop: 10,
        backgroundColor: '#1D5EDD',
      }


})