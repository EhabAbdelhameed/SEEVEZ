import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RenderSvgIcon, TName} from '../atoms/svg';
import {appColors} from 'theme/appColors';
import {appSizes} from 'theme/appSizes';

const SocialCard = ({iconName, text}: {iconName: TName; text: string}) => {
  return (
    <View style={styles.container}>
      <RenderSvgIcon icon={iconName} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default SocialCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    borderWidth: 1,
    borderColor: appColors.textColor,
    padding: appSizes.padding_l,
    paddingVertical:appSizes.padding_m,
    borderRadius: 16,
    flexGrow: 1,
    justifyContent:"center",
  },
  text: {
    fontSize: 17,
    fontWeight: '500',
    color: appColors.textColor,
    fontFamily:'Noto Sans'
  },
});
