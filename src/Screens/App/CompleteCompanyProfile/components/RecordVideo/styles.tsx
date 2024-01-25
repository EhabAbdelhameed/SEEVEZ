import { StyleSheet } from "react-native";
import { appColors, appSizes } from "theme";

export const styles = StyleSheet.create({
    camera: {
        width: "100%",
        height: appSizes.height,
        marginTop:-20
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
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 18,
        // paddingVertical:20,
        // backgroundColor: "#999",
        position: "absolute",
        zIndex: 100,
        top: 50,
        height: 60
    },
    bottomContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 18,
        // paddingVertical:20,
        // backgroundColor: "#999",
        position: "absolute",
        zIndex: 100,
        bottom: 20,
        height: 80
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
        height:200,
        // borderBottomWidth: 0.5,
        marginBottom: 40,
        marginTop: 10,
        backgroundColor:'#FFF',
        
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
})