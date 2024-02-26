import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import React, {useCallback} from 'react';
import {RenderSvgIcon} from 'components/atoms/svg';
import {styles} from '../styles';
import {useNavigation} from '@react-navigation/native';
import {appColors} from 'theme';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';

const Header = () => {
  const navigation = useNavigation();
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();

  return (
    <View style={styles.HeaderContainer}>
      <View style={styles.rightContainer}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          {/* <RenderSvgIcon
                        icon='ARROWBACK'
                        color={appColors.primary}
                    /> */}
        </Pressable>
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
      </View>
      <View style={styles.rightContainer}>
        {/* <RenderSvgIcon icon="WHO" color={appColors.primary} />
        <Text
          style={[
            styles.skipText,
            {
              color: appColors.primary,
            },
          ]}>
          Anyone
        </Text> */}
    
      </View>
    </View>
  );
};

export default Header;
