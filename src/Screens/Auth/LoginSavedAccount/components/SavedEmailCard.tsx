import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RenderSvgIcon} from '../../../../Components/atoms/svg';
import {appColors} from '../../../../theme/appColors';
import RadioButton from '../../../../Components/molecules/RadioButton';
import {appSizes} from '../../../../theme/appSizes';

const SavedEmailCard = ({checked}: {checked: boolean}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <RenderSvgIcon icon="OPROJECTS" width={52} height={52} />
        <View>
          <Text style={styles.text}>O-Project</Text>
          <Text style={styles.text2}>O-Project@info.com</Text>
        </View>
      </View>
      <RadioButton checked={checked} />
    </View>
  );
};

export default SavedEmailCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: appColors.primary,
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: appSizes.spacing_s,
    paddingHorizontal: appSizes.padding_m,
    marginBottom: appSizes.spacing_m,
    backgroundColor:'#E8EFFC'
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: appColors.textColor,
  },
  text2: {
    fontSize: 12,
    fontWeight: '400',
    color: appColors.textColor,
  },
});
