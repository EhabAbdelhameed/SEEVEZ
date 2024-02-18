import {View, Text, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {RenderSvgIcon} from 'components/atoms/svg';
import {PDF, UploadYourCv} from 'assets/Svgs';
import {appColors} from 'theme';
import {useSelector} from 'react-redux';
import {selectPhotoData} from 'src/redux/app';

const CVAddones = (data: any) => {
  console.log("mm",data)
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(data?.data?.pdfData?.fileUrl)}
      style={styles.CVContainer}>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '700',
          fontFamily: 'Noto Sans',
          color: '#000',
        }}>
        My CV in the attachment below
      </Text>
      <Text style={styles.text12}>{data?.data?.addonCaption}</Text>
      <View style={{flexDirection: 'row', columnGap: 15, alignItems: 'center'}}>
        <PDF />
        <Text
          style={{
            fontSize: 14,
            fontWeight: '700',
            fontFamily: 'Noto Sans',
            color: appColors.primary,
          }}>
          {data?.data?.pdfData?.attributes?.name}
        </Text>
        <View
          style={{
            width: 34,
            height: 34,
            borderRadius: 34,
            backgroundColor: appColors.bg,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <UploadYourCv />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CVAddones;
