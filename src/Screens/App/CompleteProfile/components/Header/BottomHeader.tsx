import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {Star} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
const BottomHeader = () => {
  return (
    <View>
      <View style={styles.blueCircle}>
        <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
      </View>
      <View style={styles.loginTextContainer}>
        <View style={{width: 32}}>
          {/* <RenderSvgIcon icon="ICON2CV" width={32} height={48} /> */}
        </View>
        <View style={[{alignItems: 'center'}]}>
          <Text style={[styles.loginText, {fontSize: 24}]}>
            Complete profile
          </Text>
          <Text style={[styles.loginTextSub, {fontSize: 13}]}>
            Finish setting up your profile to get noticed by recruiters
          </Text>
        </View>
        <View>
          <RenderSvgIcon
            icon="ICONCV"
            width={40}
            height={48}
            style={styles.yellowIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default BottomHeader;
