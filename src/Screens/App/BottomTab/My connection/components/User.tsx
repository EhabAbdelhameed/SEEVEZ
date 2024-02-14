import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { globalStyles } from '../../../../../globalStyle';
import { dummyAvatar } from '../../../../../Dummy';
import { RenderSvgIcon } from '../../../../../Components/atoms/svg';
import { appColors } from '../../../../../theme/appColors';
import AvatarIcon from '../../../../../Components/molecules/Avatar';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import { selectFollowingList } from 'src/redux/app';

const UserSection = ({
    item,
    setLoad,
}: {
    item?: any;
    setLoad?: any;
}) => {
    const [count, setCount] = React.useState(0)
    const dispatch = useAppDispatch()
    const FollowingList = useAppSelector(selectFollowingList)
    let exist = FollowingList?.some((ele: any) => ele?.toUserPublicId == item?.user_id)
    const doFollowingOperation = () => {
        !exist ?
            dispatch(AppThunks.doFollowUser(item?.userId)).then(() => {
                dispatch(AppThunks.doGetFollowingList())
            })
            :
            dispatch(AppThunks.doUnFollowUser(item?.userId)).then((res: any) => {
                dispatch(AppThunks.doGetFollowingList())
            })
    }
    React.useEffect(() => {
        dispatch(AppThunks.doGetFollowers(item?.userId)).then((res: any) => {
            setCount(res?.payload?.data?.followCounts[0]?.followerCount)
            setLoad(false)
        })
    }, [])
    return (
        <TouchableOpacity activeOpacity={.8} onPress={() => { }} style={styles.containerUserSection}>
            <View style={globalStyles.leftHeaderContainer}>
                <AvatarIcon imgUrl={item?.avatarCustomUrl} style={{ height: 65, width: 65 }} />
                <View style={{ rowGap: 3 }}>
                    <View style={[globalStyles.leftHeaderContainer, { width: "100%", }]}>
                        <Text style={styles.UserName} numberOfLines={1}>{item?.displayName}</Text>
                    </View>
                    <Text style={styles.work}>{item?.metadata?.job_title}</Text>
                    <View style={styles.followersContainer}>
                        <Text style={[styles.text3, { color: appColors.blue2 }]}>{count >= 1000 ? `${count / 1000}k` : count} followers</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                activeOpacity={.8}
                onPress={() => doFollowingOperation()}
                style={styles.folowCotainer}
            >
                <Text style={[styles.text3, { color: appColors.darkGreen1 }]}>{exist ? 'unfollow' : 'Follow'}</Text>
                <RenderSvgIcon icon='PLUSFOLLOW' width={15} height={15} />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

export default UserSection;
