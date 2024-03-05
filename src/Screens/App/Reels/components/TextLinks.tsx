import { View, Text, TouchableOpacity, Linking } from 'react-native'
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
          
            <Text style={styles.text12}>{data?.data?.addonCaption}</Text>
            {data?.data?.externalLinks?.map((Exp: any, index: any) => (
                <TouchableOpacity  onPress={() => Linking.openURL(Exp?.link)}>
            <Text numberOfLines={2} style={[styles.text12, {
                color: "#1A56C9",
                marginTop: 12,
            }]}>{Exp?.link}</Text>
            </TouchableOpacity>))}
           
           
        </View>
    )
}

export default TextLinks