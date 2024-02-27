import {View, Text, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import {RenderSvgIcon} from 'components/atoms/svg';
import {PDF, UploadYourCv} from 'assets/Svgs';
import {appColors, appSizes} from 'theme';
import {useSelector} from 'react-redux';
import {selectPhotoData} from 'src/redux/app';

const ExternalLinks = () => {
  const photoData = useSelector(selectPhotoData);
  return (
    <View
      style={[
        styles.CVContainer,
        {
          width: '68%',
          left:10,
          bottom:20,
        },
      ]}>
     
      <Text style={styles.text12}>{photoData?.addonesCaption}</Text>
      {photoData?.exterinalLinks?.map((Exp: any, index: any) => (
        <Text
          style={[
            styles.text12,
            {
              color: '#1A56C9',
              marginTop: 12,
            },
          ]}>
          {Exp?.link}
        </Text>
      ))}

      <TouchableOpacity style={styles.containerHire}>
        <RenderSvgIcon icon="COMMENT" width={20} height={20} />
        <Text
          style={[
            styles.text3,
            {
              color: appColors.white,
            },
          ]}>
          Hire now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExternalLinks;
