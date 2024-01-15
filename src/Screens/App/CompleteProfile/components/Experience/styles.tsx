import {StyleSheet} from 'react-native';
import {appColors} from '../../../../../theme/appColors';
import {appSizes} from '../../../../../theme/appSizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  logoContainer: {
    flexBasis: 'auto',
    justifyContent: 'space-around',
    flexDirection:'row',
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
  socialBtnContainer: {
    width: '98%',
    height: 60,
    marginBottom: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: appColors.dark,
    borderWidth: 0.8,
    flexDirection: 'row',
    columnGap: 10,
    alignSelf: 'center',
  },
  textSocail: {
    fontSize: appSizes.font_l,
    color: appColors.black,
    fontWeight: '500',
  },
  orContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginBottom: appSizes.spacing_m,
  },
  orText: {
    color: '#B9B9B9',
    fontSize: 16,
    fontWeight: '500',
  },
  line: {
    width: 51,
    height: 1,
    backgroundColor: '#B9B9B9',
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
  },
  loginText: {
    color: appColors.textColor,
    fontSize: appSizes.font_xxxxxl - 2,
    textAlign: 'center',
    fontWeight: '700',
  },
  loginTextSub: {
    color: appColors.textColor,
    fontSize: appSizes.font_xs,
    textAlign: 'center',
    fontWeight: '400',
    width: appSizes.width * 0.7,
    lineHeight: 20,
    marginTop: 5,
  },
  yellowIcon: {
    // marginTop: 5,
  },
  textArea: {
    borderRadius: 16,
    borderColor: '#1D5EDD',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderBottomWidth: 0.5,
    marginBottom:40,
    marginTop:10
  },
  skipContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: appColors.primary,
    borderRadius: appSizes.radius_m,
    width:81,
    height:38,
    justifyContent:'center',
    alignItems:'center'
},
skipText: {
    color: appColors.white,
    fontSize: 18
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
},
agreeLine:{
  color:appColors.primary,
  textDecorationLine:"underline"
},
});

export default styles;
