import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import { RenderSvgIcon, TName } from 'components/atoms/svg'
import { appColors } from 'theme'
import { PrimaryParamListKeys } from 'src/navigation/types'
import { useNavigation } from '@react-navigation/native'

const Option = () => {
    const navigation = useNavigation()

    const Item = ({
        icon,
        title = '',
        title2 = '',
        navKey
    }: {

        icon: TName;
        title: string;
        title2?: string;
        navKey: PrimaryParamListKeys
    }) => {
        const _handleNav = () => {
            navigation.navigate(navKey)
        }
        return (
            <View style={styles.optionContainer}>
                <View style={styles.leftSideOption}>
                    <RenderSvgIcon
                        icon={icon}
                        color={appColors.primary}
                        width={20}
                        height={20}
                    />
                    <Text style={styles.textOption}>{title}</Text>
                </View>
                <View style={styles.leftSideOption}>
                    {title2 ? <Text style={[styles.textOption, { color: appColors.grey }]}>{title2}</Text> : null}
                    <Pressable style={{
                        transform: [{ rotate: "180deg" }]
                    }}
                        onPress={_handleNav}
                    >
                        <RenderSvgIcon
                            icon='ARROWBACK'
                            color={appColors.primary}
                        />
                    </Pressable>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.optionsContainer}>
            <Item icon='PIC' title='Add photo' navKey='AddPhoto' />
            <Item icon='AUDIENCE' title='Audience' navKey='Camera' />
            <Item icon='TAG' title='Tag people' navKey='Camera' />
            <Item icon='ADDLOCATION' title='Add location' navKey='Camera' />
            <Item icon='SETTING' title='Advanced settings' navKey='Camera' />
        </View>
    )
}

export default Option