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
    marginVertical: appSizes.x,
    marginBottom: appSizes.height * 0.1,
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
    // marginTop:-15
  },
  circles: {
    position: 'absolute',
    top: 5,
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
  socialBtnContainer:{
    width:"98%",
    height:50,
    marginBottom:20,
    borderRadius:15,
    justifyContent:"center",
    alignItems:"center",
    borderColor:appColors.dark,
    borderWidth:.8,
    flexDirection:"row",
    columnGap:10,
    alignSelf:"center"
  },
  textSocail:{
    fontSize:appSizes.font_l-2,
    color:appColors.black,
    fontWeight:"500",
    fontFamily:'Noto Sans'
  },
  orContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginBottom:appSizes.spacing_m
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
  btn:{
      backgroundColor: appColors.secondary,
      borderColor: appColors.primary,
      borderWidth: .8,
      marginBottom:12,
      height:55
  }
  
  
  
  
});

export default styles;
