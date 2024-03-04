import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { selectFollowingList } from 'src/redux/app';
import AppThunks from 'src/redux/app/thunks';
import { useNavigation } from '@react-navigation/native';
import { appColors } from 'theme';
import { AVATAR } from 'assets/Svgs';
import { styles } from '../styles';
import { t } from 'i18next';
import { RenderSvgIcon } from 'components/atoms/svg';
import { ScreenWidth } from 'react-native-elements/dist/helpers';

const User = ({ item }: any) => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation<any>()
    const FollowingList = useAppSelector(selectFollowingList);
    console.log(FollowingList)
    let exist = FollowingList?.some((ele: any) => ele?.id == item?.id);

    const doFollowingOperation = () => {
        !exist
            ? dispatch(AppThunks.doFollowUser(item?.id)).then(() => {
                dispatch(AppThunks.doGetFollowingList());
            })
            : dispatch(AppThunks.doUnFollowUser(item?.id)).then((res: any) => {
                dispatch(AppThunks.doGetFollowingList());
            });
    };
    return (
        <TouchableOpacity activeOpacity={.8} onPress={() => {
            navigation.navigate('UserProfile', { id: item?.id });
        }} style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: ScreenWidth,
            justifyContent: 'flex-start',
            paddingHorizontal: 25,
        }}>
            {item?.avatar == null ? (
                <View
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: appColors.bg,
                        marginRight: 15
                    }}>
                    <AVATAR height={50} width={40} />
                </View>
            ) : (
                <Image source={{ uri: item?.avatar }} style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    marginRight: 15
                }} />
            )}
            <View>
                <Text style={{
                    fontSize: 16,
                    color: appColors.dark,
                    fontWeight: '500',
                    width: 190,
                    textAlign:'left'
                }}>{item?.name}</Text>
                <Text style={{
                    fontSize: 11,
                    fontWeight: "400",
                    color: appColors.dark,
                    marginTop: 4,
                    width: 190,
                }}>{item?.job_title}</Text>
            </View>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => doFollowingOperation()}
                style={styles.folowCotainer}>
                <Text style={[styles.text3, { color: appColors.darkGreen1 }]}>
                    {exist ? t('unfollow') : t('follow')}
                </Text>
                <RenderSvgIcon icon="PLUSFOLLOW" width={15} height={15} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default User