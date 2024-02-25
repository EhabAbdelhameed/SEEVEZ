import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { appColors } from '../../../../../theme/appColors';
import { RenderSvgIcon } from '../../../../../Components/atoms/svg';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const AboutProfileCard = (data: any) => {
  const navigation = useNavigation<any>();

  const {t, i18n} = useTranslation();
  const [aboutSection, setAboutSection] = useState(t('bio')); // Added state to track edited content

  return (
    <View style={styles.CardContainer}>
      <View style={styles.secContainer}>
        <View style={styles.Row}>
          <Text style={styles.Title}>{t('about')}</Text>

          {!data?.current && <TouchableOpacity onPress={() => navigation.navigate('UpdateAbout')}>
            <RenderSvgIcon
              icon="PEN"
              width={20}
              height={20}
              color={appColors.white}
            />
          </TouchableOpacity>}
        </View>
        <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
          {data?.data == null ? (
            <View style={{ height: 100 }}>
              <Text style={[styles.Des, { color: '#B9B9B9' }]}>{aboutSection}</Text>
            </View>
          ) : (
            data?.data?.split('\n').length <= 6 ? <View style={{ height: 100 }}>
              <Text style={styles.Des}>{data?.data}</Text>
            </View> :
              <Text style={styles.Des}>{data?.data}</Text>

          )}
        </View>
      </View>
    </View>
  );
};

export default AboutProfileCard;

const styles = StyleSheet.create({
  CardContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '100%',
    backgroundColor: appColors.white,
    borderRadius: 25,
    marginTop: 15,
  },
  secContainer: {
    width: '100%',
    backgroundColor: appColors.lightGrey2,
    borderRadius: 25,
    padding: 5,
    paddingTop: 10,
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor:'red',
    // paddingHorizontal:10,
    marginBottom: 15,
  },
  Title: {
    fontSize: 20,
    fontWeight: '700',
    color: appColors.black,
    textAlign:'left'
  },
  Des: {
    fontWeight: '400',
    color: appColors.black,
    textAlign:'left'
  },
  EditDes: {
    fontWeight: '400',
    color: appColors.black,
    textAlignVertical: 'top',
    marginBottom: 10,
    textAlign:'left'
  },
});
