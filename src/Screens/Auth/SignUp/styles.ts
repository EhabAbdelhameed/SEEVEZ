import { StyleSheet } from 'react-native';
import { appColors } from '../../../theme/appColors';
import { appSizes } from '../../../theme/appSizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  video: {
    width: '100%',
    height: 290,
    backgroundColor: '#fff',
  },
  bottomSection: {
    backgroundColor: appColors.white,
    // flex: 1,
    // flexGrow: 1,
    height: appSizes.height * 0.7,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'relative',
    zIndex: 10,
    paddingHorizontal: appSizes.padding_x,
    marginTop:-25,
    width:"100%"
  },
  circles: {
    position: 'absolute',
    top: -155,
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
    marginTop: appSizes.spacing_m,
    flexDirection: 'row',
    flexBasis: 'auto',
    justifyContent: 'space-between',
    marginBottom: appSizes.spacing_s,
  },
  loginText: {
    color: appColors.textColor,
    fontSize: appSizes.font_xxxxxl,
    textAlign: 'center',
    fontWeight: '700',
  },
  loginTextSub: {
    color: appColors.textColor,
    fontSize: appSizes.font_xs,
    textAlign: 'center',
    fontWeight: '400',
    width: appSizes.width * 0.6,
    lineHeight: 20,
  },
  yellowIcon: {
    // marginTop: 5,
  },
  signup: {
    color: appColors.textColor,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  letsJumpIn: {
    color: appColors.textColor,
    fontSize: 38,
    fontWeight: '600',
    textAlign: 'center',
  },
  rowRectangles: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // paddingHorizontal:18,
    columnGap: 10,
    paddingVertical: 5,
    marginTop: 15
    // backgroundColor:appColors.secondary
  },
  rectangleContainer: {
    width: 170,
    height: 210,
    borderRadius: 16,
    backgroundColor: appColors.secondary,
    borderWidth: .2,
    borderColor: appColors.primary
  },
  imgRectangle: {
    width: "100%",
    height: 122,
    // borderRadius:10,
  },
  rectangleText: {
    color: appColors.primary,
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
  },
  ModalHeaderContanier: {
    width: '100%',
    alignItems: "center",
    paddingHorizontal: appSizes.padding_m
  },
  ModalContanier: {
    width: '100%',
    alignItems: "center",
    paddingHorizontal: appSizes.padding_m,
    marginTop: 10
  },
  questionText:{
    color: appColors.dark,
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'left',
    marginTop: 10,
    alignSelf:"flex-start"
  },
  rowAnswer:{
    flexDirection:"row",
    justifyContent:"space-between",
    // paddingHorizontal:appSizes.padding_m,
    width:"100%",
    marginTop: 10,
    alignItems:"center"
  },
  Circle:{
    width: 20,
    height: 20,
    borderRadius: 20 ,
    backgroundColor: appColors.secondary,
    borderWidth:1,
    borderColor:appColors.primary,
    alignItems:"center",
    justifyContent:"center"
  },
  innerCircle:{
    width: 13,
    height: 13,
    borderRadius: 13 ,
    backgroundColor: appColors.primary
  },
  btn:{
    width:"100%",
    marginTop: 20
  }
});

export default styles;
