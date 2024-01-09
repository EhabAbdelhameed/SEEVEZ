import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { appColors } from '../../../../../theme/appColors'
import { appSizes } from '../../../../../theme/appSizes'

const Hashtags = () => {
    const Item = ({ hashtag }: { hashtag: string }) => {
        return (
            <>
                <View
                    style={[styles.hashtagItem]}
                >
                    <Text style={[styles.text2, {
                        color: appColors.primary
                    }]}>#{hashtag}</Text>
                </View>
            </>
        )
    }
    return (
        <View style={styles.containerProfile}>
            <Text style={[styles.text1,{
                fontSize:appSizes.font_xs,
                marginBottom:10,
                marginTop:-3
            }]}>Company hashtags</Text>
            <Item
                hashtag='React-native'
            />
            <Item
                hashtag='Css'
            />
            <Item
                hashtag='Html'
            />
        </View>
    )
}

export default Hashtags