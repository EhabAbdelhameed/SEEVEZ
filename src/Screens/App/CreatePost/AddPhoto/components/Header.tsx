import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import { styles } from '../styles'
import { RenderSvgIcon } from 'components/atoms/svg'
import { appColors } from 'theme'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const navigation = useNavigation()
    const _handleNavigate = useCallback(
        () => {
            navigation.goBack();
        },
        [],
    )

    return (
        <View style={styles.HeaderContainer}>
            <TouchableOpacity style={styles.skipContainer}
                onPress={_handleNavigate}
            >
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
            <Text style={styles.TitleHeader}>New post</Text>
            <RenderSvgIcon
                icon='CAMERA'
                color={appColors.primary}
            />
        </View>
    )
}

export default Header
