import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../../globalStyle';
import {RenderSvgIcon} from '../../../../Components/atoms/svg';
import {appColors} from '../../../../theme/appColors';

import {styles} from '../style';
import AvatarIcon from '../../../../Components/molecules/Avatar';
import {useAppSelector} from 'src/redux/store';
import {selectUser} from 'src/redux/auth';
import {AVATAR, ThreeDots, Time} from 'assets/Svgs';

const Footer = () => {
  const User = useAppSelector(selectUser);
  return (
    <View style={{paddingHorizontal: 20, marginTop: 10, flexDirection: 'row',justifyContent:'space-between'}}>
      <View style={{flexDirection: 'row', columnGap: 10}}>
        <TouchableOpacity>
          <RenderSvgIcon icon="HEART" width={23} height={23} />
        </TouchableOpacity>
        <TouchableOpacity>
          <RenderSvgIcon icon="REPOST" width={20} height={20} />
        </TouchableOpacity>
        <TouchableOpacity>
          <RenderSvgIcon icon="SHARE" width={20} height={20} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',columnGap:10}}>
        <Text
          style={{
            fontFamily: 'Noto Sans',
            fontSize: 12,
            fontWeight: '700',
            color: '#B9B9B9',
          }}>10K Like</Text>
        <Text
          style={{
            fontFamily: 'Noto Sans',
            fontSize: 12,
            fontWeight: '700',
            color: '#B9B9B9',
          }}>12K Repost</Text>
      </View>
    </View>
  );
};

export default Footer;
