import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {appColors} from '../../../../../theme/appColors';

import {AVATAR, Star} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
import {selectUser} from 'src/redux/auth';
const UserHeader = () => {
  const navigation = useNavigation<any>();
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  const User = useSelector(selectUser);
  return (
    <View style={{alignItems: 'center', flexDirection: 'row'}}>
      <View
        style={{
          width: 56,
          height: 56,
          borderRadius: 56,
          marginTop: 12,
          // borderWidth: 1,
          // borderColor: '#DDD',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: appColors.bg,
        }}>
        {User?.avatar == null ? (
          <AVATAR height={48} width={48} />
        ) : (
          <Image
            source={{uri: User?.avatar}}
            style={{width: 56, height: 56, borderRadius: 56}}
            resizeMode="cover"
          />
        )}
      </View>
      <View
        style={{
          marginLeft: 8,
          rowGap: 1,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Noto Sans',
            color: '#000',
            fontWeight: '700',
          }}>
          {/* {User?.name} */}
          Carter Rosser
        </Text>

        <Text style={{
            fontSize: 14,
            fontFamily: 'Noto Sans',
            color: '#1C1C1C',
            fontWeight: '400',
          }}>
          {/* {User?.job_title} */}
          Senior ui ux designer
          </Text>
        <Text style={{
            fontSize: 14,
            fontFamily: 'Noto Sans',
            color: '#1C1C1C',
            fontWeight: '400',
          }}>
          {/* {User?.country} */}
          6th of October, Cairo, Egypt
          </Text>
        <Text style={{
            fontSize: 14,
            fontFamily: 'Noto Sans',
            color: '#1C1C1C',
            fontWeight: '400',
          }}>{User?.phone_number}</Text>

      </View>
    </View>
  );
};

export default UserHeader;
