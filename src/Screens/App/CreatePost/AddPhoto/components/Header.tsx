import {
  PermissionsAndroid,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {styles} from '../styles';
import {RenderSvgIcon} from 'components/atoms/svg';
import {appColors} from 'theme';
import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useSelector } from 'react-redux';
import { selectLang } from 'src/redux/lang';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const navigation = useNavigation<any>();
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const [source, setSource] = useState([]);
  const checkCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app requires access to your camera.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission granted');
        // Launch camera here
        launchCamera({quality: 0.5, mediaType: 'photo'}, response => {
          console.log('Response:', response);
          navigation.navigate('CreatePhoto2', {item: response, key: '2'});
        });
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  return (
    <View style={styles.HeaderContainer}>
         <TouchableOpacity onPress={_handleNavigate} activeOpacity={0.8}>
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
        </TouchableOpacity>
      <Text style={styles.TitleHeader}>{t("newPost")}</Text>
      <TouchableOpacity onPress={checkCameraPermission}>
        <RenderSvgIcon icon="CAMERA" color={appColors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
