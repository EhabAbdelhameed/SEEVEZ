import { View, Text, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import { styles } from '../styles'
import { RenderSvgIcon } from 'components/atoms/svg'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const navigation = useNavigation()

    const _handleNavigation = useCallback(
        () => {
            navigation.navigate("CreateShareLink")
        },
        [],
    );
    return (
        <View style={styles.HeaderContainer}>
            <TouchableOpacity style={styles.skipContainer}
                onPress={_handleNavigation}
            >
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
            <Text style={styles.TitleHeader}>Recording</Text>
            <RenderSvgIcon
                icon='SETTING'
            />
        </View>
    )
}

export default Header