import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {DownloadIcon, PDF, Star, Upload, UploadYourCv} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';

import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
const Buttons = () => {
  const navigation = useNavigation<any>();
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  return (
    <View style={{paddingBottom:40}}>
      <TouchableOpacity style={[styles.buttonStyle]}>
        <Text style={[styles.textStyle]}>Shortlised</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {borderColor: '#ED3C3C', backgroundColor: '#FBE8E8'},
        ]}>
        <Text style={[styles.textStyle, {color: '#ED3C3C'}]}>Rejected</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {borderColor: '#1D5EDD', backgroundColor: appColors.bg},
        ]}>
        <Text style={[styles.textStyle, {color: '#1A56C9'}]}>Waiting list</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#E6FAFA',
    borderWidth: 1,
    borderColor: '#00BBB6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 20,
  },
  textStyle: {
    fontSize: 20,
    fontFamily: 'Noto Sans',
    color: '#00928E',
    fontWeight: '500',
  },
});
