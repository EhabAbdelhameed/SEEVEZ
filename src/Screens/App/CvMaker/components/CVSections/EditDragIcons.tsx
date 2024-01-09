import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'
import { appColors } from '../../../../../theme/appColors'

const EditDragIcons = ({
    color = appColors.primary,
    edit = true,
    scale = true
}: {
    color?: string;
    edit?: boolean;
    scale?: boolean
}) => {
    return (
        <View style={styles.absIconsContainer}>
            {scale ? <RenderSvgIcon
                icon='SCALECV'
                color={color}
            /> : null}
            {edit ? <RenderSvgIcon
                icon='EDITCV'
                color={color}
            /> : null}
        </View>
    )
}

export default EditDragIcons

