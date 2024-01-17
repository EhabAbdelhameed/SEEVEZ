import { StyleSheet } from 'react-native';
import { appColors } from '../../../theme/appColors';
import { appSizes } from '../../../theme/appSizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  logoContainer: {
    flexBasis: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: appSizes.m,
    // marginBottom: appSizes.height * 0.12,
  },
  bottomSection: {
    backgroundColor: appColors.white,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'relative',
    zIndex: 10,
    height: "100%",
    paddingHorizontal: appSizes.padding_x,
    marginTop:30
  },
  circles: {
    position: 'absolute',
    top: 3,
    marginTop:10,
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

  forgotPassword: {
    color: appColors.primary,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: appSizes.spacing_m,
    fontFamily:'Noto Sans'
  },
  orContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: appSizes.spacing_m,
  },
  orText: {
    color: '#B9B9B9',
    fontSize: 16,
    fontWeight: '500',
    fontFamily:'Noto Sans'
  },
  line: {
    width: 51,
    height: 1,
    backgroundColor: '#B9B9B9',
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: appSizes.spacing_m,
  },
  rowAgree: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    columnGap: 6,
    width: "94%",
    marginBottom: appSizes.spacing_l,
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
    fontFamily:'Noto Sans'
  },
  agreeLine:{
    color:appColors.primary,
    textDecorationLine:"underline",
    fontFamily:'Noto Sans'
  },
  DocStyle:{
    borderRadius: 16,
    borderColor: '#1D5EDD',
    borderWidth: 1,
    // paddingHorizontal: 15,
    // paddingVertical: 4,
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    paddingLeft: 17,
    alignItems:'flex-start',
    // alignItems: 'center',
    height: 50,
    marginBottom: 10,
    backgroundColor: '#E8EFFC',
  }
});

export default styles;
