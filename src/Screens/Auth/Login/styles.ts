import {StyleSheet} from 'react-native';
import {appColors} from 'theme/appColors';
import {appSizes} from 'theme/appSizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.bg,
  },
  logoContainer: {
    flexBasis: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: appSizes.x,
    marginBottom: appSizes.height * 0.12,
  },
  bottomSection: {
    backgroundColor: appColors.white,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'relative',
    zIndex: 10,
    paddingHorizontal: appSizes.padding_x,
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

  forgotPassword: {
    color: appColors.primary,
    fontSize: 13,
    fontWeight: '200',
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
});

export default styles;
