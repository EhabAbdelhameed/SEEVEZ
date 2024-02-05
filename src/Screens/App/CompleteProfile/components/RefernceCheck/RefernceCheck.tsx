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
  //  console.log("sdsdeerrtrr",data)
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
                icon="PLUSFOLLOW"
                width={20}
                height={20}
                color={appColors.primary}
              />
          </TouchableOpacity>
        </View>

        {data?.data?.length == 0 ? (
          <View
            style={{
              borderWidth: 1,
              borderColor: '#E8E8E8',
              height: 100,
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 16,
            }}>
            <Text style={{color: '#B9B9B9', fontFamily: 'Noto Sans'}}>Bio</Text>
          </View>
        ) : (
          <View
          style={{
            borderWidth: 1,
            borderColor: '#E8E8E8',
            height: 120,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 16,
            overflow:"hidden"
          }}>
          {data?.data?.map((item: any) => (
      
            <Text style={styles.Des}>{item.phone}</Text>
         
          ))}
          </View>
        )}
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
    fontFamily: 'Noto Sans'
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
