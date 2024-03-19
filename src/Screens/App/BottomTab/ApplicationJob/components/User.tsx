import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
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
import {AVATAR, DotsThree, SaveJob, SaveJobFill, UnSave} from 'assets/Svgs';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
import {selectUser} from 'src/redux/auth';

import Swipeout from 'react-native-swipeout';
import ApplicationModal from './ApplicationJobModal';
const UserSection = ({item, setLoad}: {item?: any; setLoad?: any}) => {
  const [count, setCount] = React.useState(0);
  const dispatch = useAppDispatch();

  const lang = useSelector(selectLang);
  const User = useSelector(selectUser);
  const [isSaved, setIsSaved] = React.useState(false);

  const {t, i18n} = useTranslation();
  const handleSavePress = () => {
    // if (isSaved) {
    //   dispatch(AppThunks.doUnsaveJob(item?.id));
    // } else {
    //   dispatch(AppThunks.doSaveJob(item?.id));
    // }
    setIsSaved(!isSaved);
  };
  const [visable, setVisable] = useState(false);

  const navigation = useNavigation<any>();
  const getdate = () => {
    const startDate: Date = new Date(item?.created_at);
    const currentDate: Date = new Date();

    const timeDifferenceInMilliseconds: number =
      currentDate.getTime() - startDate.getTime();

    // Calculate total hours
    let totalHours: number = timeDifferenceInMilliseconds / (1000 * 60 * 60);
    let totalDays: number = totalHours / 24;
    let totalMonths: number = totalDays / 30;
    let totalYears: number = totalMonths / 12;
    if (totalHours < 24) {
      return parseInt(totalHours.toString()) + ' hours ago';
    }
    // Calculate total days
    if (totalHours >= 24 && totalDays < 30) {
      totalDays = totalHours / 24;
      if (totalDays < 2) {
        return parseInt(totalDays.toString()) + ' day ago';
      } else {
        return parseInt(totalDays.toString()) + ' days ago';
      }
    }

    // Calculate total months
    if (totalDays > 30 && totalMonths < 12) {
      totalMonths = totalDays / 30;

      if (totalMonths < 2) {
        return parseInt(totalMonths.toString()) + ' month ago';
      } else {
        return parseInt(totalMonths.toString()) + ' months ago';
      }
    }

    // Calculate total years
    if (totalMonths >= 12) {
      totalYears = totalMonths / 12;

      if (totalYears < 2) {
        return parseInt(totalYears.toString()) + ' year ago';
      } else {
        return parseInt(totalYears.toString()) + ' years ago';
      }
    }
  };

  React.useEffect(() => {
    dispatch(AppThunks.doGetFollowers(item?.userId)).then((res: any) => {
      setCount(res?.payload?.data?.followCounts[0]?.followerCount);
      setLoad(false);
    });
  }, []);

  // console.log("USERS",item)
  return (
    <View style={styles.containerUserSection}>
      <View style={[globalStyles.leftHeaderContainer, {width: '100%'}]}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('JobDescraption', {id: item?.id});
          }}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          {item?.users?.avatar == null || item?.users?.avatar == undefined ? (
            <View
              style={{
                width: 58,
                height: 58,
                borderRadius: 58,
                marginTop: 10,
                // borderWidth: 1,
                // borderColor: '#DDD',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: appColors.bg,
              }}>
              <AVATAR height={40} width={40} />
            </View>
          ) : (
            <AvatarIcon
              imgUrl={item?.users?.avatar}
              style={{
                height: 58,
                width: 58,
                marginTop: 10,
                borderWidth: 0.5,
                borderColor: appColors.primary,
                borderRadius: 58,
              }}
            />
          )}
        </TouchableOpacity>
        <View style={{rowGap: 2}}>
          <View
            style={[
              globalStyles.leftHeaderContainer,
              {width: '88%', marginLeft: 3, justifyContent: 'space-between'},
            ]}>
            <View style={{width: '80%'}}>
              <Text style={styles.UserName} numberOfLines={1}>
                {item?.jobs?.job_title}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => setVisable(true)}
              style={{marginRight: 20}}>
              <DotsThree />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', columnGap: 8, marginLeft: 3}}>
            <Text style={styles.work}>{item?.jobs?.users?.name}</Text>
            <Text style={styles.work}>{item?.jobs?.job_location}</Text>
          </View>
          <View>
            <Text style={[styles.work, {color: '#494949'}]}>
              applied {getdate()}
            </Text>
          </View>
          <View style={{flexDirection: 'row', columnGap: 5}}>
            {!item?.jobs?.job_types?.name ? null : (
              <View style={styles.followersContainer}>
                <Text style={[styles.text3, {color: appColors.blue2}]}>
                  {item?.jobs?.job_types?.name}
                </Text>
              </View>
            )}
            {!item?.jobs?.work_type?.name ? null : (
              <View
                style={[
                  styles.followersContainer,
                  {backgroundColor: '#E6FAFA'},
                ]}>
                <Text style={[styles.text3, {color: '#00928E'}]}>
                  {item?.jobs?.work_type?.name}
                </Text>
              </View>
            )}
            {!item?.jobs?.job_types?.name ? null : (
              <View
                style={[
                  styles.followersContainer,
                  {
                    backgroundColor:
                      item?.status == 2
                        ? '#FAE6E6'
                        : item?.status == 0
                        ? '#FDF7E6'
                        : item.status == 3
                        ? '#E8EFFC'
                        : item.status == 4
                        ? '#E6FAFA'
                        : '#676767',
                    borderWidth: 1,
                    borderColor:
                      item?.status == 2
                        ? '#F0B0B0'
                        : item?.status == 0
                        ? '#F8E5B0'
                        : item.status == 3
                        ? '#B9CDF4'
                        : item.status == 4
                        ? '#B0F0EE'
                        : '#494949',
                  },
                ]}>
                <Text
                  style={[
                    styles.text3,
                    {
                      color:
                        item?.status == 2
                          ? '#ED3C3C'
                          : item?.status == 0
                          ? '#A57900'
                          : item.status == 3
                          ? '#15439D'
                          : item.status == 4
                          ? '#00928E'
                          : '#DCDCDC',
                    },
                  ]}>
                  {item?.status == 2
                    ? 'Rejected'
                    : item?.status == 0
                    ? 'Pending'
                    : item.status == 3
                    ? 'Waiting list'
                    : item.status == 4
                    ? 'Shortlisted'
                    : 'Closed'}
                </Text>
              </View>
            )}
          </View>
          {item?.id == '9' ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('Assignment')}
              style={{
                borderWidth: 1,
                borderColor: appColors.primary,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: 200,
                paddingVertical: 6,
                marginTop: 10,
                borderRadius: 20,
                backgroundColor: appColors.primary,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Noto Sans',
                  fontWeight: '400',
                  color: '#FFF',
                }}>
                Take assessment
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      <ApplicationModal setVisable={setVisable} visable={visable} />
    </View>
  );
};

export default UserSection;
