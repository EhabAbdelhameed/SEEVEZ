import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {DownloadIcon, PDF, Star, Upload, UploadYourCv} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
const ReviewCV = () => {
  const navigation = useNavigation<any>();
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: appColors.bg,
        borderWidth: 1,
        borderColor: appColors.primary,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 16,
      }}>
      <View
        style={{
          flexDirection: 'row',
          columnGap: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <PDF />
        <View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Noto Sans',
              color: appColors.primary,
              fontWeight: '700',
            }}>
            Justin Dokidis CV 2023
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Noto Sans',
              color: appColors.primary,
              fontWeight: '400',
              marginTop: 2,
            }}>
            1 MB
          </Text>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 24,
            height: 24,
            borderRadius: 24,
            borderWidth: 1,
            borderColor: appColors.primary,
          }}>
          <DownloadIcon />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReviewCV;
