import { StyleSheet } from "react-native";
import { appColors, appSizes } from "theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
        borderWidth: 1,
        borderColor: appColors.textColor,
        padding: 15,
        paddingVertical:15,
        borderRadius: 16,
        flexGrow: 1,
        justifyContent:"center",
      },
      text: {
        fontSize: 17,
        fontWeight: '500',
        color: appColors.textColor,
        fontFamily:'Noto Sans'
      },
});