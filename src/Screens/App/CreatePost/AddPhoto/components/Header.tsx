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

  return (
    <View style={styles.HeaderContainer}>
      <TouchableOpacity style={styles.skipContainer} onPress={_handleNavigate}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      <Text style={styles.TitleHeader}>New post</Text>
      <TouchableOpacity onPress={checkCameraPermission}>
        <RenderSvgIcon icon="CAMERA" color={appColors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
