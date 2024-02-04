import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import {RenderSvgIcon, TName} from 'components/atoms/svg';
import {appColors} from 'theme';
import {PrimaryParamListKeys} from 'src/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
    navKey: PrimaryParamListKeys;
  }) => {
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
          <Text style={styles.textOption}>{title}</Text>
        </View>
        <View style={styles.leftSideOption}>
          {title2 ? (
            <Text style={[styles.textOption, {color: appColors.grey}]}>
              {title2}
            </Text>
          ) : null}
          {title == 'Audience' ? (
            <TouchableOpacity style={{flexDirection:'row',columnGap:5}}>
              <Text
                style={{
                  fontFamily: 'Noto Sans',
                  fontSize: 16,
                  color:'#979797',
                  fontWeight: '400',
                }}>
                Followers
              </Text>
              <View style={{ transform: [{rotate: '180deg'}]}}>
              <RenderSvgIcon icon="ARROWBACK" color={appColors.primary} />
              </View>
            </TouchableOpacity>
          ) : (
            <Pressable
              style={{
                transform: [{rotate: '180deg'}],
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
      <Item icon="AUDIENCE" title="Audience" navKey="Camera" />
      <TouchableOpacity onPress={()=>navigation.navigate("TagPeople")}><Item icon="TAG" title="Tag people" navKey="Camera" /></TouchableOpacity>
      <Item icon="ADDLOCATION" title="Add location" navKey="Camera" />
      <Item icon="SETTING" title="Advanced settings" navKey="Camera" />
    </View>
  );
};

export default Option;
