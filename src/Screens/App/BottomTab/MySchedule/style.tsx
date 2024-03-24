import { StyleSheet } from "react-native";
import { appColors } from "../../../../theme/appColors";
import { appSizes } from "../../../../theme/appSizes";

export const styles = StyleSheet.create({
    text2: {
        fontSize: appSizes.font_l - 3,
        fontWeight: "600",
        color: appColors.dark
    },
    text3: {
        fontSize: appSizes.font_xs - 2,
        fontWeight: "400",
        color: appColors.dark
    },
    text1: {
        fontSize: appSizes.font_l - 1,
        fontWeight: "600",
        color: appColors.dark,
        alignSelf: "center"
    },
    rowContainer:{
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"space-between",
        columnGap:10,
        width:"100%"
    },
    imgBg:{
        width:"100%",
        height:150,
        alignItems:"center",
        justifyContent:"center",
    },
    imgBg2:{
        width:"100%",
        height:140,
        alignItems:"center",
        justifyContent:"center",
    },
    absIcon:{
        position:"absolute",
        right:5,
        bottom:5
    },
    video: {
        width: '100%',
        height: "100%",
    },
    container: {
        // borderTopLeftRadius:appSizes.radius_m,
        // borderTopRightRadius:appSizes.radius_m,
        borderRadius: appSizes.radius_l,
        width: "100%",
        height: "100%",
        alignSelf: "center",
        backgroundColor: appColors.bg,
        // marginTop:10
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
    camera: {
        width: '100%',
        height: appSizes.height,
        marginTop: -20,
      },
      recordButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: 'red',
        padding: 20,
        alignItems: 'center',
      },
      recordButtonText: {
        fontSize: 18,
        color: '#fff',
      },
      videoPlayer: {
        flex: 1,
      },
   
      topContainer1: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
          top:10,
        position: 'absolute',
        zIndex: 100,
        // top: 50,
        height: 60,
      },
      topContainer2: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 18,
    
        position: 'absolute',
        zIndex: 100,
        // top: 50,
        height: 70,
      },
      videoContainer: {  
        width: '100%',
        height: '100%',     
        // borderBottomRightRadius: 25,
        // borderBottomLeftRadius:25,
         // Ensure that the video appears above other components
      },
      CardContainer: {
        // paddingHorizontal: 20,
        // paddingVertical: 15,
        width: '100%',
        backgroundColor: appColors.bg,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
    
        // marginTop: 15,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: appColors.primary,
      },
      secContainer: {
        width: 96,
        height: 96,
        // backgroundColor: appColors.bg,
        borderRadius: 96,
        borderWidth: 0.5,
        marginBottom: 10,
        borderColor: appColors.primary,
      
        padding: 5,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      bottomContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
        // paddingVertical:20,
        // backgroundColor: "#999",
        position: 'absolute',
        zIndex: 100,
        bottom: 20,
        height: 80,
      },
})