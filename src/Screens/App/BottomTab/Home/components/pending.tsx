import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AvatarIcon from '../../../../../Components/molecules/Avatar';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {appSizes} from '../../../../../theme/appSizes';
import {appColors} from '../../../../../theme/appColors';
import {dummyAvatar} from '../../../../../Dummy';
import {Vod} from '../../../../../Dummy';
const Pending = () => {
  return (
    <View
      style={[
        styles.rowContainer,
        {
          width: '100%',
        //   justifyContent: 'center',
        //   alignItems: 'center',
          marginBottom: 15,
          backgroundColor: appColors.lightPurple2,
          paddingHorizontal: 20,
          paddingVertical: appSizes.padding_s,
          borderRadius: appSizes.radius_l,
        },
      ]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          columnGap: 10,
        }}>
        <View
          style={{
            backgroundColor: appColors.darkGreen1,
            width: 10,
            height: 10,
            borderRadius: 10,
            marginRight:10
          }}
        />
        <View
          style={{width: 1, height: 50, backgroundColor: '#CCC'}}
        />
        <AvatarIcon style={styles.avatar} imgUrl={Vod} noActive={true} />
        <View>
          <View
            style={{
              flexDirection: 'row',
              columnGap: 5,
            //   justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize:16,
                fontWeight: '700',
                color: appColors.dark,
              }}>
              Aspen Dokidis
            </Text>
            <RenderSvgIcon icon="RIGHTACCOUNT" width={13} />
          </View>
          <Text style={[styles.text3]}>Aspn@O-Project.org</Text>
        </View>
        <Text style={[styles.text3,{fontSize:14,opacity:1,marginLeft:20}]}>9 m</Text>
      </View>
    </View>
  );
};

export default Pending;
