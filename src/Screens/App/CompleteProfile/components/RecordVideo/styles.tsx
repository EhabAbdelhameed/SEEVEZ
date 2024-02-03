import {StyleSheet} from 'react-native';
import {appColors, appSizes} from 'theme';

export const styles = StyleSheet.create({
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
  video: {
    width: '100%',
    height: appSizes.height,
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,

    position: 'absolute',
    zIndex: 100,
    top: 50,
    height: 60,
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
    height: 600,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius:25,
     // Ensure that the video appears above other components
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
    height: 200,
    // borderBottomWidth: 0.5,
    marginBottom: 40,
    marginTop: 10,
    backgroundColor: '#FFF',
  },
  skipContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: appColors.primary,
    borderRadius: appSizes.radius_m,
    width: 81,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipText: {
    color: appColors.white,
    fontSize: 18,
    fontFamily: 'Noto Sans',
  },
  CardContainer: {
    // paddingHorizontal: 20,
    // paddingVertical: 15,
    width: '100%',
    backgroundColor: appColors.bg,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,

    // marginTop: 15,
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: appColors.primary,
  },
  CardContainer1: {
    // paddingHorizontal: 20,
    // paddingVertical: 15,
    width: '100%',
    // backgroundColor: appColors.bg,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,

    // marginTop: 15,
    height: 420,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: appColors.primary,
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
  RecordText: {
    fontFamily: ' Noto Sans',
    fontSize: 24,
    color: appColors.primary,
    fontWeight: '700',
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

  Des: {
    fontWeight: '400',
    color: appColors.black,
  },
  EditDes: {
    fontWeight: '400',
    color: appColors.black,
    textAlignVertical: 'top',
    marginBottom: 10,
  },
});
