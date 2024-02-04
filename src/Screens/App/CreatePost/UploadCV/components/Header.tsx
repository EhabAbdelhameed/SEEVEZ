import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { RenderSvgIcon } from 'components/atoms/svg'
import { styles } from '../styles'
import { useNavigation } from '@react-navigation/native'
import { appColors } from 'theme'

const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.HeaderContainer}>
            <View style={styles.rightContainer}>
                <Pressable
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    {/* <RenderSvgIcon
                        icon='ARROWBACK'
                        color={appColors.primary}
                    /> */}
                </Pressable>
                <TouchableOpacity style={styles.skipContainer}
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    <Text style={[styles.skipText]}>Skip</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.rightContainer}>
                <RenderSvgIcon
                    icon='WHO'
                    color={appColors.primary}

                />
                <Text style={[styles.skipText, {
                    color: appColors.primary,
                }]}>Anyone</Text>
                <View
                    style={{
                        transform: [{
                            rotate: "-90deg"
                        }]
                    }}
                >
                    <RenderSvgIcon
                        icon='ARROWBACK'
                        color={appColors.primary}  
                    />
                </View>
            </View>
        </View>
    )
}

export default Header