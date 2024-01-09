import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles'
import { RenderSvgIcon, TName } from '../../../../Components/atoms/svg'

const SocailBtn = ({ title, icon }: { title: string, icon: TName }) => {
    return (
        <TouchableOpacity style={styles.socialBtnContainer}>
            <RenderSvgIcon
                icon={icon}
                width={24}
                height={24}
            />
            <Text style={styles.textSocail}>{title}</Text>
        </TouchableOpacity>
    )
}

export default SocailBtn