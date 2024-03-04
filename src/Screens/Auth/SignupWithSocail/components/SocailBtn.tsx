import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles'
import { RenderSvgIcon, TName } from '../../../../Components/atoms/svg'

const SocailBtn = ({ title, icon,onpress }: { title: string, icon: TName,onpress: () => void  }) => {
    return (
        <TouchableOpacity style={styles.socialBtnContainer} onPress={onpress}>
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