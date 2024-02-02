import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {useNavigation} from '@react-navigation/native';

const AboutCompanyCard = (About: any) => {
  const navigation = useNavigation<any>();

  const saveAboutSection = () => {
    navigation.navigate('UpdateCompanyAbout');
  };
  return (
    <View style={styles.CardContainer}>
      <View style={styles.secContainer}>
        <View style={styles.Row}>
          <Text style={styles.Title}>About</Text>

          <TouchableOpacity onPress={saveAboutSection}>
            <RenderSvgIcon
              icon="PEN"
              width={20}
              height={20}
              color={appColors.white}
            />
          </TouchableOpacity>
    
        </View>
   
        <View
          style={{
            borderWidth: 1,
            borderColor: '#E8E8E8',
            height: 100,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 16,
          }}>
          {About?.About?.about == null ? (
            <Text
              numberOfLines={4}
              style={{color: '#B9B9B9', fontFamily: 'Noto Sans'}}>
              Bio
            </Text>
          ) : (
            <Text style={{fontWeight: '400', color: appColors.black}}>
              {About?.About?.about}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default AboutCompanyCard;

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
    marginBottom: 15,
  },
  Title: {
    fontSize: 20,
    fontWeight: '700',
    color: appColors.black,
    fontFamily: 'Noto Sans',
  },
  Des: {
    fontWeight: '400',
    color: appColors.black,
    fontFamily: 'Noto Sans',
  },
  EditDes: {
    fontWeight: '400',
    color: appColors.black,
    textAlignVertical: 'top',
    marginBottom: 10,
    fontFamily: 'Noto Sans',
  },
});
