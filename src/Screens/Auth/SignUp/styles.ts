import { StyleSheet } from 'react-native';
import { appColors } from '../../../theme/appColors';
import { appSizes } from '../../../theme/appSizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal:20,
    backgroundColor: appColors.white,
  },
  video: {
    width: '100%',
    // height: 175,
    backgroundColor: '#fff',
  },
  bottomSection: {
    backgroundColor: appColors.white,
    // flex: 1,
    // flexGrow: 1,
    height: appSizes.height * 0.75,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // position: 'relative',
    // zIndex: 10,
    paddingHorizontal:20,
    marginTop:-25,
    // width:"100%"
  },
  circles: {
    position: 'absolute',
    top: -125,
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
    marginTop: appSizes.spacing_xx,
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
    fontFamily:'Noto Sans'
  },
  loginTextSub: {
    color: appColors.textColor,
    fontSize: appSizes.font_xs,
    textAlign: 'center',
    fontWeight: '400',
    width: appSizes.width * 0.6,
    lineHeight: 20,
    fontFamily:'Noto Sans'
  },
  yellowIcon: {
    // marginTop: 5,
  },
  signup: {
    color: appColors.textColor,
    fontSize: 19,
    fontWeight: '500',
    textAlign: 'center',
  },
  letsJumpIn: {
    color: appColors.black,
    fontSize: 38,  
    fontWeight: '700',
    textAlign: 'center',
    fontFamily:'Noto Sans'
  },
  rowRectangles: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  
    // paddingHorizontal:18,
    columnGap: 10,
    paddingVertical: 5,
    marginTop: 10,
    // overflow:'hidden',
    // backgroundColor:'red'
  
  },
  rectangleContainer: {
    width: '50%',   
    // backgroundColor:'red',
    // height: 210,
    borderRadius: 16,
    backgroundColor: appColors.secondary,
    borderWidth: .4,
    borderColor: appColors.primary
  },
  imgRectangle: {
    width: "100%",
    height: 122,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,

    // borderRadius:10,
  },
  rectangleText: {
    color: appColors.primary,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
    fontFamily:'Noto Sans'  
  },
  rectangleText1: {
    color: appColors.primary,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: -7,
    fontFamily:'Noto Sans',
    marginBottom:10
  },
  ModalHeaderContanier: {
    width: '100%',
    alignItems: "center",
    paddingHorizontal: appSizes.padding_m,
    
  },
  ModalContanier: {
    width: '100%',
    alignItems: "center",
    paddingHorizontal: appSizes.padding_m,
    marginTop: 2
  },
  questionText:{
    color: appColors.dark,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'left',
    marginTop: 10,
    alignSelf:"flex-start",
    fontFamily:'Noto Sans'
  },
  rowAnswer:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:appSizes.padding_m,
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
    marginTop: 20,
    fontFamily:'Noto Sans',
    fontSize:12
    // position:'absolute',
    // bottom:-110,
  }
});   

export default styles;
