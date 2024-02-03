import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg';
import { appColors } from '../../../../../theme/appColors';

const BoxContentTitle = ({
    children,
    title,
    onPress = () => { }
}: {
    children: React.ReactNode;
    title?: string;
    onPress?: Function
}) => {
    return (
        <View style={styles.containerBox}>
            {children}
            <TouchableOpacity style={styles.boxTitleBottomContainer}
                onPress={() => {
                    onPress()
                }}
            >
                <Text style={[styles.text1, {
                    marginBottom: 0
                }]}>{title}</Text>
                <View style={{ transform: [{ rotate: "180deg" }] }}>
                    <RenderSvgIcon
                        icon='ARROWBACK'
                        color={title=='My internship'?appColors.Orange:appColors.primary}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default BoxContentTitle