import {
  Image,
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

const ReferenceCheckCard = (data: any) => {
  const navigation = useNavigation<any>();
  
  const saveReferenceCheckSection = () => {
    navigation.navigate('UpdateRefernceCheck');
  };
  return (
    <View style={styles.CardContainer}>
      <View style={styles.secContainer}>
        <View style={styles.Row}>
          <Text style={styles.Title}>Reference Check</Text>

          <TouchableOpacity onPress={saveReferenceCheckSection}>
            <RenderSvgIcon
              icon="PEN"
              width={20}
              height={20}
              color={appColors.white}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.Des}>{data.data==null?'Bio':data.data}</Text>
      </View>
    </View>
  );
};

export default ReferenceCheckCard;

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
  Row2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Title: {
    fontSize: 20,
    fontWeight: '700',
    color: appColors.black,
  },

  Des: {
    fontWeight: '400',
    color: appColors.black,
  },
  EditDes: {
    fontWeight: '400',
    color: appColors.black,
    textAlignVertical: 'top',
    marginBottom: 10,
  },
});
