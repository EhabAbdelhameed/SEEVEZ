import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import AvatarIcon from '../../../../../Components/molecules/Avatar'
import { dummyAvatar } from '../../../../../Dummy'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'
import { appSizes } from '../../../../../theme/appSizes'
import { AVATAR } from 'assets/Svgs'

const User = (data: any) => {
    return (
        <View style={[styles.rowContainer, {
            width: "50%",
            justifyContent: "center",
            marginBottom: 3,
            paddingVertical: 3,
        }]}>
            {data?.data?.avatarCustomUrl == null ||data?.data?.avatarCustomUrl == 'null' || data?.data?.avatarCustomUrl == undefined || !data?.data?.avatarCustomUrl ?
                <View
                    style={{
                        width: 38,
                        height: 38,
                        borderRadius: 38,
                        // borderWidth: 1,
                        // borderColor: '#DDD',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#E8EFFC',
                    }}>
                    <AVATAR height={32} width={32} />
                </View> :
                <AvatarIcon
                    noActive
                    imgUrl={data?.data?.avatarCustomUrl}
                    style={{ height: 38, width: 38 }}
                />
            }
            <View style={styles.textSection2}>
                <View style={styles.rowContainer}>
                    <Text numberOfLines={1} style={[styles.text1, {
                        marginBottom: 0,
                        fontSize: appSizes.font_m - 3
                    }]}>{data?.data?.displayName == null ? "User" : data?.data?.displayName}</Text>
                    {/* <RenderSvgIcon
                        icon='RIGHTACCOUNT'
                        width={13}
                    /> */}
                </View>
                <View style={{ width: "90%" }}>
                    {data?.data?.metadata?.job_title == null ? null :
                        <Text style={[styles.text4]}
                            numberOfLines={2}
                        >{data?.data?.metadata?.job_title}</Text>}
                </View>
            </View>
        </View>
    )
}

export default User