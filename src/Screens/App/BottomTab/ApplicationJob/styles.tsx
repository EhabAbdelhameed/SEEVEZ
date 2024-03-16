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
        fontWeight: '700'
    },
    work: {
        fontSize: 12,
        fontWeight: "400",
        color: appColors.dark
    },
    text2: {
        fontSize: appSizes.font_l - 3,
        fontWeight: "600",
        color: appColors.dark
    },
    text3: {
        fontSize: 10,
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
        // width: 100,
        // height:21,
        alignItems: "center",
        justifyContent: "center",
        // paddingHorizontal:18,
        paddingVertical: 4,
        paddingHorizontal:10,
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
      Container: {
        flex: 1,
        backgroundColor: appColors.bg,
      },
      container: {
        flex: 1,
        backgroundColor: appColors.white,
      },
    
      bottomSection: {
        width: "100%",
        // height:'100%',
        borderRadius: appSizes.x,
        backgroundColor: appColors.white,
        padding: appSizes.m
      },
      circles: {
        position: 'absolute',
        top: 5,
        marginTop: 10,
        width: appSizes.width,
        alignItems: 'center',
        zIndex: -1,
      },
      blueCircle: {
        position: 'absolute',
        top: -15,
        left: -20,
        width: appSizes.width,
        alignItems: 'center',
      },
    
      btn: {
        backgroundColor: appColors.secondary,
        borderColor: appColors.primary,
        borderWidth: 0.8,
        marginBottom: 12,
      },
      Circle: {
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        backgroundColor: appColors.secondary,
        borderWidth: 1,
        borderColor: appColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop:2,
      },
      innerCircle: {
        width: 13,
        height: 13,
        borderRadius: 13,
        backgroundColor: appColors.primary,
      },
      InputStyleNoWidth1: {
        borderRadius: 16,
        borderColor: '#1D5EDD',
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 12,
        // borderBottomWidth: 0.5,
        marginBottom: 10,
        marginTop: 20,
        backgroundColor: appColors.bg,
        // height: 54,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap:10
      },
      ModalContanier: {
        width: '100%',
        paddingVertical: 20,
        backgroundColor: '#ffff',
        // alignItems: "center",
        paddingHorizontal: 10,
        marginTop: 2,
        borderRadius: 15
    
      },
      questionText:{
        color: appColors.dark,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'left',
        marginTop: 10,
        
        fontFamily:'Noto Sans'
      },
      rowAnswer:{
        flexDirection:"row",
        justifyContent:"space-between",
        columnGap:10,
        paddingHorizontal:15,
        width:"100%",
        marginTop: 10,
        alignItems:"center"
      },
      ModalHeaderContanier: {
        width: '100%',
        alignItems: "center",
        paddingHorizontal: appSizes.padding_m,
        
      },
      rectangleText: {
        color: appColors.primary,
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 10,
        fontFamily:'Noto Sans'  
      },

})