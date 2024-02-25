import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {appColors} from '../../../../../theme/appColors';
import { useSelector } from 'react-redux';
import { selectLang } from 'src/redux/lang';
import { useTranslation } from 'react-i18next';
import { transform } from 'lodash';

const BoxContentTitle = ({
  children,
  title,
  onPress = () => {},
}: {
  children: React.ReactNode;
  title?: string;
  onPress?: Function;
}) => {
  const lang = useSelector(selectLang);
   const {t, i18n} = useTranslation();
  return (
    <View style={styles.containerBox}>
      {children}
      <TouchableOpacity
        style={styles.boxTitleBottomContainer}
        onPress={() => {
          onPress();
        }}>
        <Text
          style={[
            styles.text1,
            {
              marginBottom: 0,
            },
          ]}>
          {title}
        </Text>
        <View style={{transform: [{rotate: '180deg'}]}}>
          <RenderSvgIcon
            icon="ARROWBACK"
            color={
              title == 'My internship' ? appColors.Orange : appColors.primary
            }
            style={{ transform:lang=='ar'? [{ rotate: '180deg' }]: [{ rotate: '3600deg' }] }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BoxContentTitle;
