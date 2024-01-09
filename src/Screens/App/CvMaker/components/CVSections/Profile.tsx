import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'
import EditDragIcons from './EditDragIcons'

const Profile = () => {
    return (
        <View style={styles.container}>
            <EditDragIcons scale={false}/>
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
            <Image
                source={{ uri: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" }}
                style={styles.avatar}
            />
            <Text style={styles.userName}>Carter Rosser</Text>
            <Text style={styles.text1}>Senior ui ux designer at O-Project</Text>
            <Text style={styles.text2}>Nasr City ، Cairo Egypt</Text>
            <Text style={styles.text2}>Example@info.com</Text>
            <Text style={styles.text2}>0100 2054 6657</Text>

        </View>
    )
}

export default Profile