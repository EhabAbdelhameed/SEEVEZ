import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {styles} from '../styles';
import {globalStyles} from '../../../../../globalStyle';
import {dummyAvatar} from '../../../../../Dummy';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {appColors} from '../../../../../theme/appColors';
import AvatarIcon from '../../../../../Components/molecules/Avatar';
import {useAppDispatch, useAppSelector} from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import {selectFollowingList} from 'src/redux/app';
import {useNavigation} from '@react-navigation/native';
import {AVATAR} from 'assets/Svgs';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';

const UserSection = ({item, setLoad}: {item?: any; setLoad?: any}) => {
  const [count, setCount] = React.useState(0);
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<any>();
  const lang = useSelector(selectLang);
  const [following, setFollowing] = React.useState(false);
  const {t, i18n} = useTranslation();
  const FollowingList = useAppSelector(selectFollowingList);
  let exist = FollowingList?.some((ele: any) => ele?.id == item?.id);
  const doFollowingOperation = () => {
    setFollowing(true);
    !exist
      ? dispatch(AppThunks.doFollowUser(item?.id)).then(() => {
          dispatch(AppThunks.doGetFollowingList()).then(() => {
            setFollowing(false);
          });
        })
      : dispatch(AppThunks.doUnFollowUser(item?.id)).then((res: any) => {
          dispatch(AppThunks.doGetFollowingList()).then(() => {
            setFollowing(false);
          });
        });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigate('UserProfile', {id: item?.id});
      }}
      style={styles.containerUserSection}>
      <View style={globalStyles.leftHeaderContainer}>
        {item?.avatar == null ||
        item?.avatar == 'null' ||
        item?.avatar == undefined ? (
          <View
            style={{
              width: 65,
              height: 65,
              borderRadius: 65,
              // borderWidth: 1,
              // borderColor: '#DDD',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: appColors.bg,
            }}>
            <AVATAR height={48} width={48} />
          </View>
        ) : (
          <AvatarIcon imgUrl={item?.avatar} style={{height: 65, width: 65}} />
        )}
        <View style={{rowGap: 3}}>
          <View style={[globalStyles.leftHeaderContainer, {width: '100%'}]}>
            <Text style={styles.UserName} numberOfLines={1}>
              {item?.name}
            </Text>
          </View>
          <Text style={styles.work}>{item?.job_title}</Text>
          <View style={styles.followersContainer}>
            <Text style={[styles.text3, {color: appColors.blue2}]}>
              {item?.number_of_followers >= 1000
                ? `${item?.number_of_followers / 1000}k`
                : item?.number_of_followers}{' '}
              {t('Followers')}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => doFollowingOperation()}
        style={styles.folowCotainer}>
        {following ? (
          <ActivityIndicator size="small" color={appColors.darkGreen1} />
        ) : (
          <View style={{flexDirection: 'row', columnGap: 5}}>
            <Text style={[styles.text3, {color: appColors.darkGreen1}]}>
              {exist ? 'unfollow' : 'Follow'}
            </Text>
            <RenderSvgIcon icon="PLUSFOLLOW" width={15} height={15} />
          </View>
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default UserSection;
