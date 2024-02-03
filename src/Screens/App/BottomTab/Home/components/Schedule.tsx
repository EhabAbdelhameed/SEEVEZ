import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'
import { appColors } from '../../../../../theme/appColors'
import AvatarIcon from '../../../../../Components/molecules/Avatar'
import { dummyAvatar } from '../../../../../Dummy'

const Schedule = () => {
    return (
        <View style={styles.containerSchedule}>
            <View
                style={[styles.rowContainer, {
                    justifyContent: "flex-start"
                }]}
            >
                <RenderSvgIcon
                    icon='CLOCK'
                />
                <Text style={[styles.text3, { color: appColors.darkGreen2 }]}>03:00 pm to 04:00 pm</Text>
            </View>
            <Text style={[styles.text2, { color: appColors.darkGreen2, marginTop: 10 }]}>Now going</Text>
            <View style={[styles.rowContainer,{
                marginTop:0,
                // backgroundColor:"#a99"
            }]}>
                <View>
                    <Text style={[styles.text1,{color:appColors.darkGreen2,marginBottom:0,marginLeft:10}]}>Senior ui ux designer</Text>
                </View>
                <View>
                    <View style={[styles.dot2,{
                        marginBottom:5,
                        backgroundColor:appColors.white
                    }]}/>
                     <View style={styles.dot2}/>
                </View>
            </View>
            <Text style={[styles.text2, { color: appColors.darkGreen2, marginTop: 0 }]}>O-project</Text>
            <View style={[styles.rowContainer, {
                        justifyContent: "flex-start",
                        columnGap: -4,
                        marginTop:10
                    }]}>
                        <AvatarIcon
                            imgUrl={dummyAvatar}
                            style={{...styles.imgsAvatar2,
                                zIndex:1
                            }}
                            noActive
                        />
                         <AvatarIcon
                            imgUrl={dummyAvatar}
                            style={{...styles.imgsAvatar2,
                                zIndex:2
                            }}
                            noActive
                        />
                         <AvatarIcon
                            imgUrl={dummyAvatar}
                            style={{...styles.imgsAvatar2,
                                zIndex:3
                            }}
                            noActive
                        />
                    </View>
        </View>
    )
}

export default Schedule