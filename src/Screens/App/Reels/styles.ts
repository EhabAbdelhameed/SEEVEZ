import { StyleSheet } from "react-native";
import { appSizes } from "../../../theme/appSizes";
import { appColors } from "../../../theme/appColors";

export const styles = StyleSheet.create({
    conatainer: {
      width: '100%',
      alignSelf: 'flex-start',
      height: appSizes.width / 1.8,
      backgroundColor: appColors.primary,
      borderRadius: 10,
      overflow: 'hidden',
      elevation: 1,
    },
    btnPuase: {
      position: 'absolute',
      top: appSizes.width / 5,
      left: appSizes.width / 2.55,
      zIndex: 1000,
    },
    overlay: {
      // ...StyleSheet.absoluteFillObject,
      // flex: 1,
      position:'absolute',
      // backgroundColor: '#0006',
      // width: '100%',
      // height: '100%',
      // zIndex:1000
    },
    overlaySet: {
      flexDirection: 'row',
      height: 50,
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: appSizes.width,
      // backgroundColor:"#a00"
    },
    icon: {
      // width: 20,
      // height: 20,
    },
    timer: {
      width: '100%',
      height: 65,
      backgroundColor: '#0006',
      position: 'absolute',
      bottom: 0,
      paddingHorizontal: 10,
    },
    containerTimeText: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 5,
      marginTop: 5,
    },
    timeText: {
      color: appColors.white,
      fontSize: appSizes.m,
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
  taggedPeopleContainer: {
    // marginTop: 20,
    // paddingHorizontal: 10,
    position:'absolute',
    left:10,
    top:170,

  },
  taggedPerson: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 10,
    width:84,
    paddingHorizontal:10,
    paddingVertical:6,
    backgroundColor:'#FFF',
    marginRight:10,
    borderRadius:16,
    
  },
  });