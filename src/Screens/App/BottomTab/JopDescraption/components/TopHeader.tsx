import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import {appColors} from 'theme/appColors';
import {selectLang} from 'src/redux/lang';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {RenderSvgIcon} from 'components/atoms/svg';
import {styles} from '../styles';
import { globalStyles } from 'src/globalStyle';
import { SaveJob } from 'assets/Svgs';
import { selectUser } from 'src/redux/auth';
import { selectOneJob } from 'src/redux/app';
import { useAppSelector } from 'src/redux/store';

const TopHeader = ({
  Title,
  onPress = () => {},
}: {
  Title?: string;
  onPress?: () => void;
}) => {
  const lang = useSelector(selectLang);
  const navigation = useNavigation();
  const MyJob = useAppSelector(selectOneJob)
  const User = useAppSelector(selectUser)
   
  const getdate = () => {
    const startDate: Date = new Date(MyJob?.created_at);
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
  return (
    <View style={[globalStyles.leftHeaderContainer,{backgroundColor:'#FFF',paddingHorizontal:20,marginBottom:20}]}>
      
        <View style={{rowGap: 3}}>
          <View style={[globalStyles.leftHeaderContainer, {width: '100%',columnGap:70,marginLeft:3}]}>
            <Text style={styles.UserName} numberOfLines={1}>
            {MyJob?.job_title}
            </Text>
            <SaveJob />
          </View>
          <View style={{flexDirection: 'row', columnGap: 8, marginLeft: 3}}>
          <Text style={styles.work}>{User?.name}</Text>
          <Text style={styles.work}>{MyJob?.job_location}</Text>
          <Text style={[styles.work, {color: '#00BBB6'}]}>{getdate()}</Text>
        </View>
          <View style={{flexDirection:'row',columnGap:10}}>
          <View style={styles.followersContainer}>
            <Text style={[styles.text3, {color: appColors.blue2}]}>
            {MyJob?.job_types?.name}
            </Text>
          </View>
          <View style={[styles.followersContainer,{backgroundColor:'#E6FAFA'}]}>
            <Text style={[styles.text3, {color: '#00928E'}]}>
            {MyJob?.work_type?.name}
            </Text>
          </View>
          <View style={[styles.followersContainer,{backgroundColor:'#FDF7E6'}]}>
            <Text style={[styles.text3, {color: '#A57900'}]}>
            23 applicants
            </Text>
          </View>
          </View>
        </View>
      </View>
  );
};

export default TopHeader;


