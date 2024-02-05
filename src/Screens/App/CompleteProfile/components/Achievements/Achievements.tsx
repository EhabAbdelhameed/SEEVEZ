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

const AchievementsCard = (data: any) => {
  const navigation = useNavigation<any>();
  
  const saveAachievementSection = () => {
    navigation.navigate('UpdateAchievements');
    // setAchievementsSection(SaveAachievementsSection);
    // setEditMode(false);
  };
  return (
    <View style={styles.CardContainer}>
      <View style={styles.secContainer}>
        <View style={styles.Row}>
          <Text style={styles.Title}>Achievements</Text>

          <TouchableOpacity onPress={saveAachievementSection}>
            <RenderSvgIcon
              icon="PLUSFOLLOW"
              width={20}
              height={20}
              color={appColors.primary}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={saveAachievementSection}>
            <RenderSvgIcon icon="HEART" width={20} height={20} color={appColors.black} />
          </TouchableOpacity> */}
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
        ) :data?.data?.map((item: any) => (
          <View
          style={{
            // borderWidth: 1,
            // borderColor: '#E8E8E8',
            // height: 100,
            // paddingHorizontal: 20,
            // paddingVertical: 10,
            // borderRadius: 16,
            overflow:"hidden"
          }}>
            <Text numberOfLines={4} style={styles.Des}>
              {item?.text}
            </Text>
            </View>

        ))}
        
      </View>
    </View>
  );
};

export default AchievementsCard;

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
    fontFamily: 'Noto Sans',
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
