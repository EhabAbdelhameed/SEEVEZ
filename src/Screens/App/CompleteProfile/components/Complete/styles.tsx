import {StyleSheet} from 'react-native';
import {appColors} from '../../../../../theme/appColors';
import {appSizes} from '../../../../../theme/appSizes';

const styles = StyleSheet.create({
  containerCompleteProfile: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.white,
    paddingHorizontal: appSizes.padding_s,
    paddingVertical: appSizes.padding_m,
    marginTop: appSizes.spacing_m,
    borderRadius: appSizes.radius_l
},
containerBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.white,
    paddingHorizontal: appSizes.padding_s,
    paddingVertical: appSizes.padding_s,
    marginTop: appSizes.spacing_m,
    borderRadius: appSizes.radius_l
},
rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 10
},
contentContainer: {
    width: "85%"
},
text1: {
    fontSize: appSizes.font_m,
    fontWeight: "700",
    color: appColors.dark,
    marginBottom: 4
},
text2: {
    fontSize: appSizes.font_xs-3,
    fontWeight: "400",
    color: appColors.dark,
    opacity: .8,
    marginLeft:10
},


slider: {
    width: "100%",
    height: 8,
    borderRadius: 5,
    backgroundColor: "rgba(0, 206, 200, 1)"
},
circleSlider: {
    backgroundColor: "rgba(0, 206, 200, 1)",
    width: 20,
    height: 20,
    padding: 3,
    borderRadius: 10,
    position: "absolute",
    left: "0%",
    alignItems: "center",
    justifyContent: "center"
},
rowItemSlide: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    marginTop: 10
},
});

export default styles;
