import { StyleSheet } from "react-native";
import { appSizes } from "../../../theme/appSizes";
import { appColors } from "../../../theme/appColors";

export const styles = StyleSheet.create({
    conatainer: {
      width: '100%',
      alignSelf: 'flex-start',
      height: appSizes.with / 1.8,
      backgroundColor: appColors.primary,
      borderRadius: 10,
      overflow: 'hidden',
      elevation: 1,
    },
    btnPuase: {
      position: 'absolute',
      top: appSizes.with / 5,
      left: appSizes.with / 2.55,
      zIndex: 1000,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      flex: 1,
      // backgroundColor: '#0006',
      width: '100%',
      height: '100%',
      zIndex:1000
    },
    overlaySet: {
      flexDirection: 'row',
      height: 50,
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: appSizes.with,
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
  });