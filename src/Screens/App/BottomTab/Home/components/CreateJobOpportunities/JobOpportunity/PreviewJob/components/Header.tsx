import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import {appColors} from 'theme/appColors';
import {selectLang} from 'src/redux/lang';
import {useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RenderSvgIcon} from 'components/atoms/svg';
import {selectOneJob} from 'src/redux/app';
import {useAppSelector} from 'src/redux/store';
import {selectUser} from 'src/redux/auth';

const Header = ({
  Title,
  onPress = () => {},
}: {
  Title?: string;
  onPress?: () => void;
}) => {
  const lang = useSelector(selectLang);
  const navigation = useNavigation();
  const {obj,color}: any = useRoute().params;

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
          color={color!='#FFF'?'#E8AB00':appColors.primary}
        />
        <View style={{marginLeft: 10}}>
          <Text style={[styles.Title, {fontSize: 22,color:color!='#FFF'?'#E8AB00':appColors.primary}]}>{Title}</Text>
        </View>
      </TouchableOpacity>
     
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
