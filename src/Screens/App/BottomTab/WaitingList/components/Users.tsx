import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles';
import {globalStyles} from '../../../../../globalStyle';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {appColors} from '../../../../../theme/appColors';
import AvatarIcon from '../../../../../Components/molecules/Avatar';
import {useAppDispatch, useAppSelector} from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import {selectFollowingList} from 'src/redux/app';
import {AVATAR} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import {appSizes} from 'theme';

const Users = ({item}: {item?: any}) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const [count, setCount] = React.useState(1000000);

  // React.useEffect(() => {
  //   dispatch(AppThunks.doGetFollowers(item?.user_id)).then((res: any) => {
  //     setCount(res?.payload?.data?.followCounts[0]?.followerCount);
  //   });
  // }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate('UserProfile', {id: item?.user_id});
      }}
      style={styles.containerUserSection}>
      <View style={globalStyles.leftHeaderContainer}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {item?.avatar == null ? (
            <View
              style={{
                width: 62,
                height: 62,
                borderRadius: 62,
                // borderWidth: 1,
                // borderColor: '#DDD',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: appColors.bg,
              }}>
              <AVATAR height={48} width={48} />
            </View>
          ) : (
            <AvatarIcon imgUrl={item?.avatar} style={{height: 62, width: 62}} />
          )}
        </View>
        <View style={{rowGap: 1}}>
          <View style={[globalStyles.leftHeaderContainer, {width: '100%'}]}>
            <Text style={styles.UserName} numberOfLines={1}>
              Charlie ekstrom
            </Text>
          </View>
          <Text style={[styles.work, {fontSize: 10}]}>
            Ui Ux designer at microssoft
          </Text>
          <View style={[styles.followersContainer]}>
            <Text style={[styles.text3, {color: appColors.blue2}]}>
              {count >= 1000 && count < 1000000
                ? `${count / 1000}k`
                : count >= 1000000
                ? `${count / 1000000}m`
                : count}{' '}
              {'Followers'}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {}}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          columnGap: 3,
          borderRadius: appSizes.l,
          borderWidth: 1,
          paddingVertical: 6,
          paddingHorizontal: 15,
          borderColor: appColors.lightGreen,
          backgroundColor: '#E6FAFA',
        }}>
        <Text style={[styles.text3, {color: '#00928E'}]}>Shortlisted</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Users;
