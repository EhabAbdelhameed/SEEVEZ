import { Dimensions, StyleSheet } from 'react-native';
// import { appSizes } from "../../theme/appSizes";
import { appColors } from '../../../theme/appColors';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: appColors.bg
    // paddingHorizontal: 20,
  },
  bollsContainer: {

    // backgroundColor: appColors.white,
    // position: "absolute",
    // height: 200,
    // left: 10,

    // bottom: 200,

  },

  text11: {
    fontSize: 14,
    fontWeight: '700',
    color: appColors.black,
    marginBottom:10
  },
  text12: {
    fontSize: 10,
    fontWeight: '400',
    color: '#1C1C1C',
    marginVertical: 5,
    // marginRight:6,
  },
  text13: {
    fontSize: 10,
    fontWeight: '700',
    color: appColors.black,
  },
  circle11: {
    borderColor: 'rgba(29, 94, 221, 1)',
    backgroundColor: 'rgba(232, 239, 252, 1)',
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    borderWidth: 1,
    borderRadius: 16,
  },
  filledInnerCircle: {
    backgroundColor: 'rgba(29, 94, 221, 1)',
    width: 11,
    height: 11,
    borderRadius: 10,
  },
  rowItemSlide: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  slider: {
    width: '100%',
    height: 8,
    borderRadius: 5,
    backgroundColor: '#a62',
    justifyContent: 'center',
  },
  circleSlider: {
    borderColor: 'rgba(29, 94, 221, 1)',
    backgroundColor: 'rgba(232, 239, 252, 1)',
    width: 40,
    height: 40,
    padding: 3,
    borderWidth: 1,
    borderRadius: 10,
    position: 'absolute',
    // left: '0%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHire: {
    backgroundColor: '#1D5EDD',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 5,
    width: 130,
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 5,
    justifyContent: 'center',
    marginTop: 10,
  },
  CVContainer: {
    width: '80%',
    backgroundColor: appColors.white,
    position: 'absolute',
    // alignSelf:'center',
    // justifyContent:'center',
    // alignItems:'center',
    // height: 200,
    left: 20,

    bottom: 180,
    elevation: 4,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },

  timeText: {
    fontSize: 12,
  },
  modalContainer: {
    // backgroundColor: 'white',

    marginHorizontal: 20,
    position: 'absolute',
    bottom: 280,
    right: 5,
    width: '60%',
    flexDirection: 'row',
    // marginTop: 'auto', // This will make the modal appear at the bottom
  },
  PaddingContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  bigContainer: {

    // width: '85%',
    marginTop: 10,
    backgroundColor: appColors.white,
    // position: "absolute",
    // height: 200,
    // left: 10,
    // marginRight: 20,
    // bottom: 200,

    elevation: 1,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    paddingBottom: 15,

  },
  containerType: {
    backgroundColor: "#FDF7E6",
    borderRadius: 20,
    paddingHorizontal: 3,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: "#F8E5B0",
    width: 80,
    alignItems: "center",
    marginTop: -8,
  },
  text3: {
    color: "#A57900",
    fontSize: 12,
    fontWeight: "600"
  },
});
