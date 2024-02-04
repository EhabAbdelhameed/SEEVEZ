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
        justifyContent: "space-between"
    },
    topContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 18,
        // paddingVertical:20,
        // backgroundColor: "#999",
        position: "absolute",
        zIndex: 100,
        top: 0,
        height: 60
    },
    rightContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 5,

    },
    text1: {
        color: appColors.black,
        fontSize: appSizes.font_m,
        marginTop: 5
    },
    skipContainer: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        backgroundColor: appColors.primary,
        borderRadius: appSizes.radius_m,
    },
    skipText: {
        color: appColors.white,
        fontSize: appSizes.font_m
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
    formContainer: {
        width: "100%",
        backgroundColor: appColors.lightGrey2,
        height: "100%",
        // paddingTop: 10,
        paddingHorizontal: 10,
        alignSelf: "center",
        borderTopLeftRadius: appSizes.radius_l,
        borderTopRightRadius: appSizes.radius_l,
        marginBottom: 30
    },
    textHeaderForm: {
        color: appColors.black,
        fontSize: appSizes.font_l,
        fontWeight: "700",
        marginTop: 10,
        marginBottom: 10
    },
    label: {
        color: appColors.black,
        fontSize: appSizes.font_m,
        fontWeight: "500",
        marginTop: 10,
        marginBottom: 4,
    },
    AddOptionContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginVertical: 10,

    },
    text2: {
        color: appColors.black,
        fontSize: appSizes.font_m,
        fontWeight: "500"
    },
    DurationDropDown: {
        width: "100%",
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: appSizes.radius_m,
        height: 60,
        padding: 10,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        borderColor:appColors.primary

    },
    titleDuration: {
        color: appColors.grey,
        fontSize: appSizes.font_xs
    },
    durationItem:{
        width: "100%",
        borderTopWidth: 1,
        padding: 10,
        borderColor:appColors.grey
    },
    uploadContainer:{
        borderRadius: 16,
        borderColor: '#1D5EDD',
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 4,
        
        // borderBottomWidth: 0.5,
        marginBottom: 10,
        marginTop: 7,
        height: 52,
      
      },
      dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
      },
      icon: {
        marginRight: 5,
      },
      placeholderStyle: {
        fontSize: 14,
        color:"#B9B9B9",
        fontFamily: 'Noto Sans',
        
    
      },
      selectedTextStyle: {
        fontSize: 14,
        fontFamily: 'Noto Sans',
        color:'#000',
        opacity:.8
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
        fontFamily: 'Noto Sans',
      },
    
})