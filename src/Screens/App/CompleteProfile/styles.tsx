import { StyleSheet } from 'react-native'
import { appColors } from '../../../theme/appColors'

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: appColors.bg,
    },
    PaddingContainer: {
        paddingHorizontal: 20,
    },
    CardContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: '100%',
        backgroundColor: appColors.white,
        borderRadius: 25
    },
    RowBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      loadingAnimation: {
        width: 200,
        height: 200,
      },
})