import { View, Text, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import { styles } from '../styles'
import { RenderSvgIcon } from 'components/atoms/svg'
import { useNavigation } from '@react-navigation/native'
import { appColors } from 'theme'

const Header = () => {
    const navigation = useNavigation()

    const _handleNavigation = useCallback(
        () => {
            navigation.goBack();
        },
        [],
    );
    return (
        <View style={styles.HeaderContainer}>
           <TouchableOpacity onPress={_handleNavigation} activeOpacity={0.8}>
            <RenderSvgIcon
              icon="ARROWBACK"
              width={30}
              height={30}
              color={appColors.primary}
            />
          </TouchableOpacity>
            
            <Text style={styles.TitleHeader}>Recording</Text>
            <RenderSvgIcon
                icon='SETTING'
            />
        </View>
    )
}

export default Header