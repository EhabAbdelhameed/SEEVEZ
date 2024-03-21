import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {Star} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
import { useAppSelector } from 'src/redux/store';
import { selectOneJob } from 'src/redux/app';
const UsersHeader = () => {

  const navigation = useNavigation<any>();
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  const MyJob = useAppSelector(selectOneJob);
  return (
    <View style={{backgroundColor: appColors.bg}}>
      <View style={styles.logoContainer}>
        <TouchableOpacity
          onPress={_handleNavigate}
          activeOpacity={0.8}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            columnGap: 15,
          }}>
          <RenderSvgIcon
            icon="ARROWBACK"
            style={{
              transform:
                lang == 'ar' ? [{rotate: '180deg'}] : [{rotate: '0deg'}],
            }}
            width={30}
            height={30}
            color={appColors.primary}
          />

          <View style={{}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Noto Sans',
                color: '#000',
              }}>
             {MyJob?.job_title}
            </Text>
            <View style={{flexDirection: 'row', columnGap: 8, marginLeft: 3}}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  fontFamily: 'Noto Sans',
                  color: '#000',
                }}>
              {MyJob?.users?.name}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  fontFamily: 'Noto Sans',
                  color: '#000',
                }}>
               {MyJob?.job_location}
              </Text>
              <Text
                style={{
                  color: '#00BBB6',
                  fontSize: 16,
                  fontWeight: '400',
                  fontFamily: 'Noto Sans',
                }}>
              {MyJob?.job_type_id?.name}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UsersHeader;
