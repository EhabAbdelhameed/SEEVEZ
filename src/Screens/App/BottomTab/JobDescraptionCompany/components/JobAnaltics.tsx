import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import AvatarIcon from '../../../../../Components/molecules/Avatar';
import {dummyAvatar} from '../../../../../Dummy';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {
  AVATAR,
  AppliedIcon,
  LayerDashboard,
  RejectedIcon,
  ShortedIcon,
  WaitIcon,
} from '../../../../../assets/Svgs';
import {appSizes} from '../../../../../theme/appSizes';
import {appColors} from '../../../../../theme/appColors';
import {useSelector} from 'react-redux';
import {useAppDispatch} from 'src/redux/store';
import {selectUser} from 'src/redux/auth';
import {withDecay} from 'react-native-reanimated';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const JobAnaltics = () => {
  const dispatch = useAppDispatch();
  const CurrentUserData = useSelector(selectUser);
  const lang = useSelector(selectLang);
  const {t, i18n} = useTranslation();
  const navigation=useNavigation<any>()
  return (
    <View style={{width: '100%'}}>
      <View style={{flexDirection: 'row', columnGap: 10, width: '100%'}}>
        <TouchableOpacity onPress={()=>navigation.navigate("EmployeeAppliedList")} style={styles.AnalticContainer}>
          <Text style={styles.bigText}>200</Text>
          <Text style={styles.subText}>Employees applied</Text>
          <Text style={styles.timeText}>Past 10 days</Text>
          <AppliedIcon />
          <View style={styles.ColorView} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("WatingList")} style={styles.AnalticContainer}>
          <Text style={styles.bigText}>50</Text>
          <Text style={styles.subText}>Waiting list</Text>
          <Text style={styles.timeText}>Past 10 days</Text>
          <WaitIcon />
          <View style={[styles.ColorView, {backgroundColor: '#E8AB00'}]} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',columnGap:10,width:'100%',marginTop:10}}>
      <TouchableOpacity onPress={()=>navigation.navigate("ShortedList")} style={styles.AnalticContainer}>
        <Text style={styles.bigText}>100</Text>
        <Text style={styles.subText}>Shortlisted</Text>
        <Text style={styles.timeText}>Past 10 days</Text>
        <ShortedIcon />
        <View style={[styles.ColorView,{backgroundColor:'#00CEC8'}]} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("RejectedList")} style={styles.AnalticContainer}>
        <Text style={styles.bigText}>50</Text>
        <Text style={styles.subText}>Rejected</Text>
        <Text style={styles.timeText}>Past 10 days</Text>
        <RejectedIcon />
        <View style={[styles.ColorView,{backgroundColor:'#ED3C3C'}]} />
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default JobAnaltics;
