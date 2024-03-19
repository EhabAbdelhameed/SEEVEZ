import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';

import {appColors} from 'theme/appColors';
import {selectLang} from 'src/redux/lang';
import {useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RenderSvgIcon} from 'components/atoms/svg';
import {styles} from '../styles';
import {globalStyles} from 'src/globalStyle';
import {AVATAR, SaveJob} from 'assets/Svgs';
import AvatarIcon from 'components/molecules/Avatar';
import {useAppDispatch, useAppSelector} from 'src/redux/store';
import {selectFollowingList, selectOneJob} from 'src/redux/app';
import AppThunks from 'src/redux/app/thunks';
import {selectUser} from 'src/redux/auth';

const RecruiterHeader = ({
  data,
  onPress = () => {},
}: {
  data?: string;
  onPress?: () => void;
}) => {
    const {id}:any=useRoute().params
  const lang = useSelector(selectLang);
  const navigation = useNavigation();
  const User = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const MyJob = useAppSelector(selectOneJob);
  const [count, setCount] = React.useState(0);
  const FollowingList = useAppSelector(selectFollowingList);
  const [load, setLoad] = useState(false);
  // console.log('hshshh', FollowingList);
  React.useEffect(() => {
    dispatch(AppThunks.doGetFollowingList());
  }, []);
  let exist = FollowingList?.some(
    (ele: any) => ele?.id == MyJob?.users?.company?.recruiters[0]?.user_id,
  );

  const doFollowingOperation = () => {
    setLoad(true);
    !exist
      ? dispatch(
          AppThunks.doFollowUser(MyJob?.users?.company?.recruiters[0]?.user_id),
        ).then(() => {
            dispatch(AppThunks.doGetFollowingList());
            dispatch(AppThunks.doGetJobDescraption(id)).then(() =>setLoad(false))
         
        })
      : dispatch(
          AppThunks.doUnFollowUser(
            MyJob?.users?.company?.recruiters[0]?.user_id,
          ),
        ).then(() => {
            dispatch(AppThunks.doGetFollowingList());
            dispatch(AppThunks.doGetJobDescraption(id)).then(() =>setLoad(false))
         
        });
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        // navigate('UserProfile', { id: item?.userId });
      }}
      style={[
        styles.containerUserSection,
        {backgroundColor: '#FFF', marginTop: 15, marginBottom: 15},
      ]}>
      <View style={globalStyles.leftHeaderContainer}>
        {MyJob?.users?.company?.recruiters[0]?.avatar == null ||
        MyJob?.users?.company?.recruiters[0]?.avatar == 'null' ||
        MyJob?.users?.company?.recruiters[0]?.avatar == undefined ? (
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
          <AvatarIcon
            imgUrl={MyJob?.users?.company?.recruiters[0]?.avatar}
            style={{height: 65, width: 65}}
          />
        )}
        <View style={{rowGap: 3}}>
          <View style={[globalStyles.leftHeaderContainer, {width: '90%'}]}>
            <Text style={styles.UserName} numberOfLines={1}>
              {MyJob?.users?.company?.recruiters[0]?.name}
            </Text>
          </View>
          {/* <Text style={styles.work}>Hr recruiter at microssoft</Text> */}
          <View style={styles.followersContainer}>
            <Text style={[styles.text3, {color: appColors.blue2}]}>
              {MyJob?.users?.company?.recruiters[0]?.number_of_followers >= 1000
                ? `${
                    MyJob?.users?.company?.recruiters[0]?.number_of_followers /
                    1000
                  }k`
                : MyJob?.users?.company?.recruiters[0]
                    ?.number_of_followers}{' '}
              {'Followers'}
            </Text>
          </View>
        </View>
      </View>
      {MyJob?.users?.company?.recruiters[0]?.user_id == User?.user_id ? null : (
        <TouchableOpacity
          activeOpacity={0.8}
          disabled={load}
          onPress={() => doFollowingOperation()}
          style={[
            styles.folowCotainer,
            {width: 80, justifyContent: 'center', alignItems: 'center'},
          ]}>
          {load ? (
            <ActivityIndicator size={'small'} color={appColors.darkGreen1} />
          ) : (
            <View style={{flexDirection: 'row', columnGap: 5}}>
              <Text style={[styles.text3, {color: appColors.darkGreen1}]}>
                {exist ? 'Unfollow' : 'Follow'}
              </Text>
              <RenderSvgIcon icon="PLUSFOLLOW" width={15} height={15} />
            </View>
          )}
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default RecruiterHeader;
