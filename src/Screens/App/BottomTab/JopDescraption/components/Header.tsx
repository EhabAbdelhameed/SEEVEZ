import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import {appColors} from 'theme/appColors';
import {selectLang} from 'src/redux/lang';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {RenderSvgIcon} from 'components/atoms/svg';

const Header = ({
  Title,
  onPress = () => {},
}: {
  Title?: string;
  onPress?: () => void;
}) => {
  const lang = useSelector(selectLang);
  const navigation = useNavigation();
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
          <Text style={styles.work}>O-Project</Text>
          <Text style={styles.work}>cairo, egypt</Text>
          <Text style={[styles.work, {color: '#00BBB6'}]}>full time</Text>
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
