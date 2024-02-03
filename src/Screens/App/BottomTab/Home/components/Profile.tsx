import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import AvatarIcon from '../../../../../Components/molecules/Avatar'
import { dummyAvatar } from '../../../../../Dummy'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'
import { useSelector } from 'react-redux'
import { selectUser } from 'src/redux/auth'

const Profile = () => {
    const CurrentUserData = useSelector(selectUser);
    return (
        <View style={styles.containerProfile}>
            <View style={{ marginBottom: 10 }}>
                <AvatarIcon
                    imgUrl={CurrentUserData?.avatar==null?dummyAvatar:CurrentUserData?.avatar}
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
            <Text style={styles.text1}>{CurrentUserData?.name}</Text>
            <Text style={styles.text2}>{CurrentUserData?.job_title==null?null:CurrentUserData?.job_title}</Text>
        </View>
    )
}

export default Profile