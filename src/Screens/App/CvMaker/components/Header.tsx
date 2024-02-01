import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { style } from './styles'
import { RenderSvgIcon } from 'components/atoms/svg'
import { appColors } from 'theme/appColors'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={style.container}>
            <TouchableOpacity style={style.leftContainer}
                onPress={() => {
                    navigation.goBack()
                }}
            >
                <RenderSvgIcon
                    icon='ARROWBACK'
                    color={appColors.primary}
                />
                <Text style={style.text1}>CV Maker</Text>
            </TouchableOpacity>
            <View style={style.rightContainer}>
                <TouchableOpacity activeOpacity={.8} onPress={() => { navigation.navigate('CompleteProfileScreen') }}>
                    <RenderSvgIcon
                        icon='EDITCV'
                        color={appColors.primary}
                    />
                </TouchableOpacity>
                <RenderSvgIcon
                    icon='COMMENT'
                    color={appColors.primary}

                />
                <RenderSvgIcon
                    icon='NOTIFICATION'
                    color={appColors.primary}

                />
            </View>
        </View>
    )
}

export default Header