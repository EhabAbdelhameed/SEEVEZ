import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles';

import {useAppDispatch, useAppSelector} from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import {selectFollowingList} from 'src/redux/app';
import {useNavigation} from '@react-navigation/native';
import {AVATAR, SaveJob} from 'assets/Svgs';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
import {selectUser} from 'src/redux/auth';
import {appColors} from 'theme/appColors';
import AvatarIcon from 'components/molecules/Avatar';
import {globalStyles} from 'src/globalStyle';
import {ScreenWidth} from 'react-native-elements/dist/helpers';

const UserJobs = ({item, setLoad}: {item?: any; setLoad?: any}) => {
  const [count, setCount] = React.useState(0);
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<any>();
  const lang = useSelector(selectLang);


  const {t, i18n} = useTranslation();
 

  const getdate = () => {
    const startDate: Date = new Date("2024-02-14T11:41:47.000000Z");
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

  // console.log("USERS",item?.avatarCustomUrl)
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigate('JobDescraption', {id: item?.id});
      }}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: ScreenWidth,
        justifyContent: 'flex-start',
        paddingHorizontal: 25,
      }}>
      <View style={[globalStyles.leftHeaderContainer,{width:'100%'}]}>
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
            style={{height: 58, width: 58, marginTop: 10}}
          />
        )}
        <View style={{width:'70%'}}>
          <View
            style={[
            
              {width: '100%', marginLeft: 3,flexDirection:'row'},
            ]}>
            <View style={{width:'90%'}}>
            <Text style={[styles.UserName]}  numberOfLines={1}>
              {item?.job_title}
            </Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'flex-end',width:'20%'}}>
            <SaveJob />
            </View>
          </View>
          <View style={{flexDirection: 'row', columnGap: 8, marginLeft: 3}}>
            <Text style={styles.work}>{item?.users?.name}</Text>
            <Text style={styles.work}>{item?.job_location}</Text>
            <Text style={[styles.work, {color: '#00BBB6'}]}>{getdate()}</Text>
          </View>
          <View style={{flexDirection: 'row', columnGap: 10}}>
            {item?.job_type==null?null:
            <View style={styles.followersContainer}>
              <Text style={[styles.text3, {color: appColors.blue2}]}>
                {item?.job_type?.name}
              </Text>
            </View>}
            {item?.work_type==null?null:
            <View
              style={[styles.followersContainer, {backgroundColor: '#E6FAFA'}]}>
              <Text style={[styles.text3, {color: '#00928E'}]}>
                {item?.work_type?.name}
              </Text>
            </View>}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserJobs;
