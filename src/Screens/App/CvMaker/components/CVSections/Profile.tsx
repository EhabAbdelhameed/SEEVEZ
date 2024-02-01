import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'
import EditDragIcons from './EditDragIcons'
import { useAppSelector } from 'src/redux/store'
import { selectUser } from 'src/redux/auth'
import { PERSON } from 'assets/Svgs'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
    const User: any = useAppSelector(selectUser);
    const navigation = useNavigation<any>()
    return (
        <View style={styles.container}>
            <EditDragIcons scale={false} />
            <View style={styles.absIconsProfile}>
                <RenderSvgIcon
                    icon='ICON2CV'
                />
                <RenderSvgIcon
                    icon='CIRCLECV'
                />
                <RenderSvgIcon
                    icon='ICONCV'
                />

            </View>
            {User?.avatar == null
                ?
                <View style={styles.AvatarContainer}><PERSON /></View>
                :
                <Image source={{ uri: User?.avatar }} style={styles.avatar} />
            }
            <Text style={styles.userName}>{User?.name}</Text>
            <Text style={styles.text1}>{User?.job_title}</Text>
            <Text style={styles.text2}>{User?.area} ، {User?.city} {User?.country}</Text>
            <Text style={styles.text2}>{User?.email}</Text>
            <Text style={styles.text2}>{User?.country_code} {User?.phone_number}</Text>

        </View>
    )
}

export default Profile