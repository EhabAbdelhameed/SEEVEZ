import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import {RenderSvgIcon} from 'components/atoms/svg';
import {PDF, UploadYourCv} from 'assets/Svgs';
import {appColors} from 'theme';
import { useSelector } from 'react-redux';
import { selectPhotoData } from 'src/redux/app';
import { useTranslation } from 'react-i18next';
import { selectLang } from 'src/redux/lang';

const CV = () => {
    const photoData=useSelector(selectPhotoData)
    const lang = useSelector(selectLang);

    const {t, i18n} = useTranslation();
  return (
    <View style={styles.CVContainer}>
      <Text style={{fontSize: 14, fontWeight: '700', fontFamily: 'Noto Sans',color:'#000'}}>
        {t("My CV in the attachment below")}
      </Text>
      <Text style={styles.text12}>{photoData?.addonesCaption}</Text>
      <View style={{flexDirection: 'row',columnGap:15,alignItems:'center'}}>
        <PDF />
        <Text
          style={{
            fontSize: 14,
            fontWeight: '700',
            fontFamily: 'Noto Sans',
            color: appColors.primary,
          }}>
     {`${photoData?.pdf[0]?.name?.slice(0,16)}${photoData?.pdf[0]?.name?.length>=16?'...':''}`}  
        </Text>
        <View
          style={{
            width: 34,
            height: 34,
            borderRadius: 34,
            backgroundColor: appColors.bg,
            justifyContent:'center',
            alignItems:'center'
          }}>
          <UploadYourCv />
        </View>
      </View>
    </View>
  );
};

export default CV;
