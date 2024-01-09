import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import AvatarIcon from '../../../../../Components/molecules/Avatar'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'
import { appSizes } from '../../../../../theme/appSizes'
import { appColors } from '../../../../../theme/appColors'
import { dummyAvatar } from '../../../../../Dummy'

const Communities = () => {
    return (
        <View style={[styles.rowContainer, {
            width: "100%",
            justifyContent: "flex-start",
            marginBottom: 15,
            backgroundColor:appColors.lightPurple2,
            paddingHorizontal:appSizes.padding_s-2,
            paddingVertical:appSizes.padding_s,
            borderRadius:appSizes.radius_l
        }]}>
            <RenderSvgIcon
                icon="COMMONUCATIONS"
                width={40}
                height={40}
            />
            <View style={styles.textSection2}>
                <View style={styles.rowContainer}>
                    <Text style={[styles.text1, {
                        marginBottom: 0,
                        fontSize: appSizes.font_m
                    }]}>Senior ui ux designer</Text>
                </View>
                <View style={[styles.rowContainer, {
                    marginTop: 4
                }]}>
                    <View style={[styles.rowContainer, {
                        justifyContent: "flex-start",
                        columnGap: -4
                    }]}>
                        <AvatarIcon
                            imgUrl={dummyAvatar}
                            style={{...styles.imgsAvatar,
                                zIndex:1
                            }}
                            noActive
                        />
                         <AvatarIcon
                            imgUrl={dummyAvatar}
                            style={{...styles.imgsAvatar,
                                zIndex:2
                            }}
                            noActive
                        />
                         <AvatarIcon
                            imgUrl={dummyAvatar}
                            style={{...styles.imgsAvatar,
                                zIndex:3
                            }}
                            noActive
                        />
                    </View>
                    <Text style={[styles.text3]}
                        numberOfLines={2}
                    >12K Members</Text>
                    <View style={[styles.rowContainer, {
                        justifyContent: "flex-start",
                        columnGap: 2
                    }]}>
                        <RenderSvgIcon icon='PRIVATE' />
                        <Text style={[styles.text3, { color: appColors.placeholder }]}
                            numberOfLines={2}
                        >Internship</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default Communities