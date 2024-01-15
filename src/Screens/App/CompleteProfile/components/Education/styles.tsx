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
}
});

export default styles;
