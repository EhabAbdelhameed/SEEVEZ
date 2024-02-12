import { StyleSheet } from "react-native";
import { appColors, appSizes } from "theme";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: appColors.lightGrey2,
  },
  imageContainer: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
    backgroundColor: '#fff',
    flex: 1,
  },
  image: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
  },
  containerContent: {
    width: "95%",
    backgroundColor: appColors.lightGrey2,
    height: "100%",
    paddingTop: 5,
    alignSelf: "center",
    borderTopLeftRadius: appSizes.radius_l,
    borderTopRightRadius: appSizes.radius_l,
    marginTop: 10
  },
  HeaderContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    height: 60,
    // backgroundColor: appColors.error
  },
  skipContainer: {
    // paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: appColors.primary,
    borderRadius: appSizes.radius_m,
    width: 70,
    alignItems: "center"
  },
  skipText: {
    color: appColors.white,
    fontSize: appSizes.font_m
  },
  TitleHeader: {
    color: appColors.black,
    fontSize: appSizes.font_l,
    fontWeight: "600",
  },
  containerHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    // height: 70,
    columnGap: 20,
    marginTop: 10,
    zIndex: 100
    // backgroundColor: appColors.error
  },
  leftSide: {
    flex: .7,
    flexDirection: "row",
    backgroundColor: appColors.lightGrey,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    columnGap: 5,
  },
  rightSide: {
    flex: 1.1,
    flexDirection: "row",
    backgroundColor: appColors.lightPurple2,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    columnGap: 5,
    borderWidth: 1,
    borderColor: appColors.primary
  },
  text1: {
    color: appColors.primary,
    fontSize: appSizes.font_m,
    fontWeight: "600",
  },
  absItems: {
    position: "absolute",
    top: 40,
    // right: 0,
    width: "100%",
    height: 40,
    zIndex: 1000,
    backgroundColor: appColors.lightGrey,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: .6,
    // borderTopWidth: 0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: appColors.primary
  },
  camera: {
    width: "100%",
    height: appSizes.height,
    marginTop:-20
},
selectedImageContainer: {
  // Your selected image container styles
  // For example:
  borderColor: 'blue',
  borderWidth: 2,
},
});
