import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import AvatarIcon from '../../../../../Components/molecules/Avatar'
import { Vod, dummyAvatar } from '../../../../../Dummy'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'
import { appSizes } from '../../../../../theme/appSizes'
import { appColors } from '../../../../../theme/appColors'

const CompanySection = () => {
    return (
        <View style={[styles.rowContainer, {
            width: "100%",
            justifyContent: "flex-start",
            marginBottom: 15
        }]}>
            <AvatarIcon style={styles.avatar} imgUrl={Vod}
                noActive={true}
            />
            <View style={styles.textSection2}>
                <View style={styles.rowContainer}>
                    <Text style={[styles.text1, {
                        marginBottom: 0,
                        fontSize: appSizes.font_m
                    }]}>Senior ui ux designer</Text>
                </View>
                <View style={[styles.rowContainer,{
                    marginTop:4
                }]}>
                    <Text style={[styles.text3]}
                        numberOfLines={2}
                    >Vodafone</Text>
                     <Text style={[styles.text3]}
                        numberOfLines={2}
                    >cairo, egypt</Text>
                    <Text style={[styles.text3,{color:appColors.Orange}]}
                        numberOfLines={2}
                    >Internship</Text>
                    <Text style={[styles.text3,{color:appColors.Orange}]}
                        numberOfLines={2}
                    >3 hours ago</Text>
                </View>
            </View>
        </View>
    )
}

export default CompanySection