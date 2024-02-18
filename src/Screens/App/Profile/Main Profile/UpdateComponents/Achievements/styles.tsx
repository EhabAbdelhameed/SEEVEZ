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
  PDFContainer: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.lightGrey3,
    borderRadius: 10,
    marginTop: 10,
  },
  bottomSection: {
    backgroundColor: appColors.white,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'relative',
    zIndex: 10,
    height: '100%',
    paddingHorizontal: 20,
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
    textAlign: 'left',
  },

  yellowIcon: {
    // marginTop: 5,
  },

  InputStyleNoWidth: {
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
  inputStyle: {
    borderRadius: 16,
    borderColor: '#1D5EDD',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 4,
    // borderBottomWidth: 0.5,
    height: 50,
    width: '48%',
  },
  uploadContainer: {
    borderRadius: 16,
    borderColor: '#1D5EDD',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.bg,
    // borderBottomWidth: 0.5,
    marginBottom: 10,
    marginTop: 7,
    height: 52,
  },
  uploadContainer1: {
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
    color: '#000',
    fontFamily: 'Noto Sans',
    textAlign:'left'
  },
  placeholderStyle1: {
    fontSize: 14,
    color: 'rgba(0,0,0,.8)',
    fontFamily: 'Noto Sans',
    textAlign:'left'
  },
  selectedTextStyle: {
    fontSize: 14,
    fontFamily: 'Noto Sans',
    color: '#000',
    opacity: 0.8,
    textAlign:'left'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    fontFamily: 'Noto Sans',
    textAlign:'left'
  },
  Row3: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 75,
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
  FollowersText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#15439D',
    textAlign:'left'
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
    // width:'90%'
    //   alignItems: 'center',
  },
  Title: {
    fontSize: 20,
    fontWeight: '700',
    color: appColors.black,
    textAlign:'left'
  },
  Title2: {
    fontSize: 19,
    fontWeight: '600',
    color: appColors.black,
    textAlign:'left'
  },
  Certificate: {
    width: 100,
    height: 150,
    alignSelf: 'flex-start',
    resizeMode: 'contain',
    marginVertical: 10,
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
    textAlign:'left'
  },
  des: {
    fontSize: 11,
    fontWeight: '400',
    color: appColors.black,
    marginTop: 3,
    textAlign:'left'
  },
  Title3: {
    fontWeight: '600',
    color: appColors.black,
    marginTop: 15,
    textAlign:'left'
  },
  PostText: {
    fontSize: 12,
    fontWeight: '400',
    // marginTop: 15,
    color: '#676767',
    textAlign:'left'
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
    textAlign:'left'
  },
  InputStyleNoWidth1: {
    borderRadius: 16,
    borderColor: '#1D5EDD',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 12,
    // borderBottomWidth: 0.5,
    marginBottom: 10,
    marginTop: 5,
    backgroundColor: appColors.bg,
    // height: 54,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
