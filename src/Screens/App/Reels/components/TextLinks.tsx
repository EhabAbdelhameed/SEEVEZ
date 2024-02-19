import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { RenderSvgIcon } from '../../../../Components/atoms/svg'
import { appSizes } from '../../../../theme/appSizes'
import { appColors } from '../../../../theme/appColors'

const TextLinks = (data:any) => {

    return (
        <View style={[styles.CVContainer, {
            width: "68%"
        }]}>
            <Text style={[styles.text11, {
                fontSize: appSizes.m + 2,
                fontWeight: "bold"
            }]}>Lorem ipsum dolor</Text>
            <Text style={styles.text12}>{data?.data?.addonCaption}</Text>
            {data?.data?.externalLinks?.map((Exp: any, index: any) => (
            <Text style={[styles.text12, {
                color: "#1A56C9",
                marginTop: 12,
            }]}>{Exp?.link}</Text>))}
           
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