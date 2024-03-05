import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import {RenderSvgIcon, TName} from 'components/atoms/svg';
import {appColors} from 'theme';
import {PrimaryParamListKeys} from 'src/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { selectLang } from 'src/redux/lang';
import { useTranslation } from 'react-i18next';

const Option = () => {
  const navigation = useNavigation<any>();

  const Item = ({
    icon,
    title = '',
    title2 = '',
    navKey,
  }: {
    icon: TName;
    title: string;
    title2?: string;
    navKey?: PrimaryParamListKeys;
  }) => {
    const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
    const _handleNav = () => {
      navigation.navigate(navKey);
    };
    return (
      <View style={styles.optionContainer}>
        <View style={styles.leftSideOption}>
          <RenderSvgIcon
            icon={icon}
            color={appColors.primary}
            width={20}
            height={20}
          />
          <Text style={styles.textOption}>{t(title)}</Text>
        </View>
        <View style={styles.leftSideOption}>
          {title2 ? (
            <Text style={[styles.textOption, {color: appColors.grey}]}>
              {title2}
            </Text>
          ) : null}
          {title == 'Audience' ? (
            <TouchableOpacity style={{flexDirection: 'row', columnGap: 5}}>
              <Text
                style={{
                  fontFamily: 'Noto Sans',
                  fontSize: 16,
                  color: '#979797',
                  fontWeight: '400',
                }}>
                {t("Followers")}
              </Text>
              <View style={{transform: [{rotate: '180deg'}]}}>
                <RenderSvgIcon icon="ARROWBACK" color={appColors.primary} />
              </View>
            </TouchableOpacity>
          ) : (
            <Pressable
              style={{
                transform: [{rotate:lang=='en'? '180deg':'0deg'}],
              }}
              onPress={_handleNav}>
              <RenderSvgIcon icon="ARROWBACK" color={appColors.primary} />
            </Pressable>
          )}
        </View>
      </View>
    );
  };
  return (
    <View style={styles.optionsContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('TagPeople')}>
        <Item icon="TAG" title={"tagPeople"}  />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Location')}>
      <Item icon="ADDLOCATION" title="addLocation"  />
      </TouchableOpacity>
      {/* <Item icon="SETTING" title="Advanced settings" /> */}
    </View>
  );
};

export default Option;
