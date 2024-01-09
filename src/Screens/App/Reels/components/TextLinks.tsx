import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { RenderSvgIcon } from '../../../../Components/atoms/svg'
import { appSizes } from '../../../../theme/appSizes'
import { appColors } from '../../../../theme/appColors'

const TextLinks = () => {

    return (
        <View style={[styles.bollsContainer, {
            width: "68%"
        }]}>
            <Text style={[styles.text11, {
                fontSize: appSizes.m + 2,
                fontWeight: "bold"
            }]}>Lorem ipsum dolor</Text>
            <Text style={styles.text12}>Lorem ipsum dolor sit amet consectetur. Volutpat in id auctor varius etiam. Aliquet sagittis tellus malesuada egestas risus. Quis facilisi tincidunt mauris fusce lorem. Pellentesque accumsan.</Text>
            <Text style={[styles.text12, {
                color: "#1A56C9",
                marginTop: 12,
            }]}>http/www.loreipsum.com/4556874</Text>
            <Text style={[styles.text12, {
                color: "#1A56C9",
                marginTop: 3
            }]}>http/www.loreipsum.com/4556874</Text>
            <TouchableOpacity style={styles.containerHire}>
                <RenderSvgIcon icon='COMMENT' width={20} height={20} />
                <Text style={[styles.text3, {
                    color: appColors.white
                }]}>Hire now</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TextLinks