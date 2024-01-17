import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { RenderSvgIcon } from '../atoms/svg'
import { appColors } from '../../theme/appColors'

const Header = ({
    Title,
    onPress = () => { },
}: {
    Title?: string;
    onPress?: () => void;
}) => {
    return (
        <View style={styles.Container}>
            <TouchableOpacity style={styles.Row}
                onPress={onPress}
                activeOpacity={0.8}
            >
                <RenderSvgIcon icon='ARROWBACK'
                    width={25} height={25} color={appColors.primary} />
                <Text style={styles.Title}>{Title}</Text>
            </TouchableOpacity>
            <View style={styles.Row}>
                <RenderSvgIcon icon='SEARCH' width={25} height={25} color={appColors.primary} />
                <RenderSvgIcon icon='COMMENT' width={25} height={25} color={appColors.primary} style={{ marginLeft: 20 }} />
                <RenderSvgIcon icon='NOTIFICATION' width={25} height={25} color={appColors.primary} style={{ marginLeft: 20 }} />
            </View>

        </View>
    )
}

export default Header


const styles = StyleSheet.create({
    Container: {
        backgroundColor: appColors.bg,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Title: {
        fontSize: 22,
        fontWeight: '700',
        color: appColors.black,
        marginLeft: 10,
        fontFamily: 'Noto Sans'
    }
})