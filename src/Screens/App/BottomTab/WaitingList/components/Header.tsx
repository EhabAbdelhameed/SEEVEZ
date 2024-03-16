import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import {appColors} from 'theme/appColors';
import {selectLang} from 'src/redux/lang';
import {useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RenderSvgIcon} from 'components/atoms/svg';
import { selectOneJob } from 'src/redux/app';
import { useAppSelector } from 'src/redux/store';
import { selectUser } from 'src/redux/auth';

const Header = ({
  Title,
  onPress = () => {},
}: {
  Title?: string;
  onPress?: () => void;
}) => {
  // const {subTitle}: any = useRoute().params;

  const lang = useSelector(selectLang);
  const navigation = useNavigation();
  const MyJob = useAppSelector(selectOneJob)


  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.Row}
        onPress={onPress}
        activeOpacity={0.8}>
        <RenderSvgIcon
          icon="ARROWBACK"
          style={{
            transform: lang == 'ar' ? [{rotate: '180deg'}] : [{rotate: '0deg'}],
          }}
          width={25}
          height={25}
          color={appColors.primary}
        />
        <View style={{marginLeft: 10,}}>
        <Text style={[styles.Title,{fontSize:16}]}>{Title}</Text>
        <View style={{flexDirection: 'row', columnGap: 8, marginLeft: 3}}>
          <Text style={styles.work}>{MyJob?.users?.name}</Text>
          <Text style={styles.work}>{MyJob?.job_location}</Text>
          <Text style={[styles.work, {color: '#00BBB6'}]}>{MyJob?.job_type_id?.name}</Text>
        </View>
        </View>
      </TouchableOpacity>
      <View style={styles.Row}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <RenderSvgIcon
            icon="SEARCH"
            width={25}
            height={25}
            color={appColors.primary}
          />
        </TouchableOpacity>
        {/* <RenderSvgIcon icon='COMMENT' width={25} height={25} color={appColors.primary} style={{ marginLeft: 20 }} /> */}
        <RenderSvgIcon
          icon="NOTIFICATION"
          width={25}
          height={25}
          color={appColors.primary}
          style={{marginLeft: 20}}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: appColors.bg,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Title: {
    fontSize: 22,
    fontWeight: '700',
    color: appColors.black,
    
    fontFamily: 'Noto Sans',
  },
  work: {
    fontSize: 10,
    fontWeight: '400',
    fontFamily: 'Noto Sans',
    color: appColors.dark,
  },
});
