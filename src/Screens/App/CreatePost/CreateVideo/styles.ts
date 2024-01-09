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
    skipContainer: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        backgroundColor: appColors.primary,
        borderRadius: appSizes.radius_m,
    },
    skipText: {
        color: appColors.white,
        fontSize: appSizes.font_m
    }
})