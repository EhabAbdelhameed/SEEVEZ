import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import AvatarIcon from '../../../../../Components/molecules/Avatar'
import { dummyAvatar } from '../../../../../Dummy'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'
import { appSizes } from '../../../../../theme/appSizes'

const User = () => {
    return (
        <View style={[styles.rowContainer, {
            width: "100%",
            justifyContent: "flex-start",
            marginBottom: 3
        }]}>
            <AvatarIcon style={styles.avatar} imgUrl={dummyAvatar}
                // noActive={true}
            />
            <View style={styles.textSection2}>
                <View style={styles.rowContainer}>
                    <Text style={[styles.text1, {
                        marginBottom: 0,
                        fontSize: appSizes.font_m - 3
                    }]}>User</Text>
                    <RenderSvgIcon
                        icon='RIGHTACCOUNT'
                        width={13}
                    />
                </View>
                <View style={{ width: "90%" }}>
                    <Text style={[styles.text4]}
                        numberOfLines={2}
                    >Software engineer at google</Text>
                </View>
            </View>
        </View>
    )
}

export default User