import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, { useCallback } from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {Star} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import { useSelector } from 'react-redux';
import { selectLang } from 'src/redux/lang';
import { useTranslation } from 'react-i18next';
const TopHeader = () => {
    const navigation = useNavigation<any>()
    const _handleNavigate = useCallback(() => {
        navigation.goBack();
      }, []);
      const lang = useSelector(selectLang);
  
      const {t, i18n} = useTranslation();
  return (
    <View style={{backgroundColor:appColors.bg}}>
        <View style={styles.logoContainer}>
          <TouchableOpacity onPress={_handleNavigate} activeOpacity={0.8}>
            <RenderSvgIcon
              icon="ARROWBACK"
              style={{transform:lang=='ar'?[{rotate: '180deg'}]:[{rotate: '0deg'}]}}
              width={30}
              height={30}
              color={appColors.primary}
            />
          </TouchableOpacity>
          {/* <BigLogo height={30} width={96} style={{marginLeft: 70}} />
           */}
          <Image
            source={require('../../../../../assets/images/seevezlogo.png')}
            style={{width: 100, height: 30}}
          />
        </View>
        <View style={styles.circles}>
          <RenderSvgIcon icon="CIRCLELOGIN" width={220} height={160} />
        </View>
    </View>
  );
};

export default TopHeader;


