import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {appColors} from '../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../Components/atoms/svg';
import {Star} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
const ApplayHeader = () => {
  const navigation = useNavigation<any>();
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
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
          <Text
            style={{
              fontSize: 24,
              fontWeight: '700',
              fontFamily: 'Noto Sans',
              color: '#000',
            }}>
            Apply for job
          </Text>
        </TouchableOpacity>
        {/* <BigLogo height={30} width={96} style={{marginLeft: 70}} />
         */}
      </View>
    </View>
  );
};

export default ApplayHeader;
