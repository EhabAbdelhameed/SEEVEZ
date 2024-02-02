import {StyleSheet} from 'react-native';
import {appColors} from '../../../../../../theme/appColors';
import {appSizes} from '../../../../../../theme/appSizes';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: appColors.white,
    },
    logoContainer: {
      flexBasis: 'auto',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal: 20,
      // alignItems: '',
      marginVertical: appSizes.x,
      marginBottom: appSizes.height * 0.07,
    },
    bottomSection: {
      backgroundColor: appColors.white,
      flex: 1,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      position: 'relative',
      zIndex: 10,
      height: '100%',
      paddingHorizontal: appSizes.padding_x,
      // marginTop:-15
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
      width: appSizes.width,
      alignItems: 'center',
    },
  

    loginTextContainer: {
      marginTop: appSizes.spacing_xxxx,
      flexDirection: 'row',
      flexBasis: 'auto',
      justifyContent: 'space-between',
      marginBottom: appSizes.spacing_m,
      fontFamily: 'Noto Sans',
    },
    loginText: {
      color: appColors.textColor,
      fontSize: appSizes.font_xxxxxl - 2,
      textAlign: 'center',
      fontWeight: '700',
      fontFamily: 'Noto Sans',
    },
    loginTextSub: {
      color: appColors.textColor,
      fontSize: appSizes.font_xs,
      textAlign: 'center',
      fontWeight: '400',
      width: appSizes.width * 0.7,
      lineHeight: 20,
      marginTop: 5,
      fontFamily: 'Noto Sans',
    },
    yellowIcon: {
      // marginTop: 5,
    },

    Circle: {
      width: 20,
      height: 20,
      borderRadius: 20 / 2,
      backgroundColor: appColors.secondary,
      borderWidth: 1,
      borderColor: appColors.primary,
      alignItems: "center",
      justifyContent: "center",
      // marginTop:2,
    },
    innerCircle: {
      width: 13,
      height: 13,
      borderRadius: 13 ,
      backgroundColor: appColors.primary
    },
     Row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    Row2: {
      flexDirection: 'row',
      alignItems: 'center',
     
    },
      rowAnswer:{
        flexDirection:"row",
        // justifyContent:"",
        paddingHorizontal:appSizes.padding_m,
        width:"100%",
        marginTop: 10,
        alignItems:"center",
        columnGap:15
      },
      Head: {
        fontSize: 16,
        fontWeight: '700',
        color: appColors.black,
      },
      Des: {
        fontSize: 14,
        fontWeight: '400',
        color: appColors.black,
        marginTop: 3,
      },
      RatingText: {
        fontSize: 12,
        fontWeight: '700',
        color: appColors.black,
        marginRight: 3,
      },
  });
  
  export default styles;