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
  
    btn: {
      backgroundColor: appColors.secondary,
      borderColor: appColors.primary,
      borderWidth: 0.8,
      marginBottom: 12,
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
    textArea: {
      borderRadius: 16,
      borderColor: '#1D5EDD',
      borderWidth: 1,
      paddingHorizontal: 20,
      paddingVertical: 20,
      // borderBottomWidth: 0.5,
      marginBottom: 40,
      marginTop: 10,
      backgroundColor:'#FFF',
      
    },
    skipContainer: {
      // paddingHorizontal: 20,
      // paddingVertical: 8,
      backgroundColor: appColors.primary,
      borderRadius: appSizes.radius_m,
      width: 82,
      height: 38,
      justifyContent: 'center',
      alignItems: 'center',
    },
    skipText: {
      color: appColors.white,
      fontSize: 18,
      fontFamily: 'Noto Sans',
    },
    rowAgree: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      columnGap: 6,
      width: "94%",
      marginBottom: appSizes.spacing_l,
      marginLeft:10
      // marginTop:appSizes.spacing_s
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
    agree: {
      color: appColors.black,
      fontSize: appSizes.font_m-1,
      fontWeight: '400',
      textAlign: 'left',
      fontFamily: 'Noto Sans',
    },
    agreeLine:{
      color:appColors.primary,
      textDecorationLine:"underline",
      fontFamily: 'Noto Sans',
    },
    InputStyleNoWidth:{
      borderRadius: 16,
      borderColor: '#1D5EDD',
      borderWidth: 1,
      paddingHorizontal: 15,
      paddingVertical: 4,
      // borderBottomWidth: 0.5,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    inputStyle:{
      borderRadius: 16,
      borderColor: '#1D5EDD',
      borderWidth: 1,
      paddingHorizontal: 15,
      paddingVertical: 4,
      // borderBottomWidth: 0.5,
      height: 50,
      width: '48%',
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
    uploadContainer1:{
      borderRadius: 16,
      borderColor: '#1D5EDD',
      borderWidth: 1,
      paddingHorizontal: 20,
      paddingVertical: 4,
      
      // borderBottomWidth: 0.5,
      marginBottom: 10,
      marginTop: 5,
      height: 52,
    
    },
    placeholderStyle: {
      fontSize: 14,
      color:"#000",
      fontFamily: 'Noto Sans',
      
  
    },
    placeholderStyle1: {
      fontSize: 14,
      color:"rgba(0,0,0,.8)",
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
    Row3: {
      flexDirection: 'row',
      marginTop: 10,
      marginLeft: 75,
    },
    FollowersText: {
      fontSize: 12,
      fontWeight: '400',
      color: '#15439D',
    },
    secContainer: {
      width: '100%',
      backgroundColor: appColors.lightGrey2,
      borderRadius: 25,
      padding: 5,
      paddingTop: 10,
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
    Title: {
      fontSize: 20,
      fontWeight: '700',
      color: appColors.black,
    },
    Title2: {
      fontSize: 19,
      fontWeight: '600',
      color: appColors.black,
    },
    Image: {
      height: 65,
      width: 65,
      borderRadius: 65,
    },
    CompanyName: {
      fontSize: 15,
      fontWeight: '400',
      color: appColors.black,
      marginTop: 3,
    },
    des: {
      fontSize: 11,
      fontWeight: '400',
      color: appColors.black,
      marginTop: 3,
    },
    Title3: {
      fontWeight: '600',
      color: appColors.black,
      marginTop: 15,
    },
    PostText: {
      fontSize: 12,
      fontWeight: '400',
      marginTop: 15,
      color: appColors.black,
    },
    FollowersContainer: {
      paddingHorizontal: 15,
      paddingVertical: 3,
      borderRadius: 30,
      backgroundColor: '#E8EFFC',
      borderColor: '#15439D',
      borderWidth: 0.3,
    },
    Title4: {
        fontWeight: '400',
        color: appColors.black,
        marginTop: 15,
        fontSize: 12,
      },  
      InputStyleNoWidth1:{
        borderRadius: 16,
        borderColor: '#1D5EDD',
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 12,
        // borderBottomWidth: 0.5,
        marginBottom: 10,
        marginTop: 5,
         backgroundColor:appColors.bg,
        // height: 54,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      Row1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
      },   InfoText: {
        
        fontWeight: '600',
        fontSize:16,
        color: appColors.black,
        marginLeft: 7
    },
  });
  
  export default styles;