import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import AvatarIcon from '../../../../../Components/molecules/Avatar'
import { dummyAvatar } from '../../../../../Dummy'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'

const Profile = () => {
    return (
        <View style={styles.containerProfile}>
            <View style={{ marginBottom: 10 }}>
                <AvatarIcon
                    imgUrl={dummyAvatar}
                    noActive
                />
                <View
                    style={styles.absIconProfile}
                >
                    <RenderSvgIcon
                        icon='RIGHTACCOUNT'
                        width={16}
                    />
                </View>
            </View>
            <Text style={styles.text1}>Carter Rosser</Text>
            <Text style={styles.text2}>Ui Ux designer</Text>
        </View>
    )
}

export default Profile