import {StyleSheet} from 'react-native';
import {appColors} from '../../../theme/appColors';
import {appSizes} from '../../../theme/appSizes';

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
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: appSizes.spacing_m,
  },

  containerr: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: appColors.primary,
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: appSizes.spacing_s,
    paddingHorizontal: appSizes.padding_m,
    marginBottom: appSizes.spacing_m,
    backgroundColor:'#E8EFFC'
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: appColors.textColor,
  },
  text2: {
    fontSize: 12,
    fontWeight: '400',
    color: appColors.textColor,
  },
});

export default styles;
