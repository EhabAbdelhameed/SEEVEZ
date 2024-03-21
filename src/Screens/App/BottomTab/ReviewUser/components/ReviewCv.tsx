import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useCallback} from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {DownloadIcon, PDF, Star, Upload, UploadYourCv} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
const ReviewCV = ({data}: {data: any}) => {
  // console.log(JSON.stringify(data), 'data');
  const navigation = useNavigation<any>();
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(data?.answer?.answer?.fileUrl)}
      style={{
        backgroundColor: appColors.bg,
        borderWidth: 1,
        borderColor: appColors.primary,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 16,
        marginTop: 20,
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
            numberOfLines={1}
            style={{
              fontSize: 16,
              fontFamily: 'Noto Sans',
              color: appColors.primary,
              fontWeight: '700',
            }}>
            {data?.answer?.answer?.attributes?.name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Noto Sans',
              color: appColors.primary,
              fontWeight: '400',
              marginTop: 2,
            }}>
            {(
              parseInt(data?.answer?.answer?.attributes?.size) / 1048576
            ).toFixed(4)}{' '}
            MB
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
