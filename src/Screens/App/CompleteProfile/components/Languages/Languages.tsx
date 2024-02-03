import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {Star} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';

const LanguagesCard = (data: any) => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.CardContainer}>
      <View style={styles.secContainer}>
        <View style={styles.Row}>
          <Text style={styles.Title}>Languages</Text>
          <View style={styles.Row2}>
            {/* <RenderSvgIcon icon='PLUSFOLLOW' style={{ marginRight: 10 }} width={20} height={20} color={appColors.primary} /> */}
            <TouchableOpacity
              onPress={() => navigation.navigate('UpdateLanguages')}>
             <RenderSvgIcon
                icon="PLUSFOLLOW"
                width={20}
                height={20}
                color={appColors.primary}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            marginTop: 2,
            marginBottom: 0,
            // alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {data?.data?.map((item: any) => (
            <View
              style={{
                flexDirection: 'row',
                // columnGap: 50,      
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom:10
              }}>
              <View>
                <Text style={styles.Head}>{item.name}</Text>
                <Text style={styles.Des}>
                  {item.rate == 5
                    ? 'Native or bilingual proficiency'
                    : item.rate == 3
                    ? 'Advanced'
                    : item.rate == 2
                    ? 'Intermediate'
                    : 'Beginner'}
                </Text>
              </View>
              <View style={styles.Row2}>
              <Text style={styles.RatingText}>{item?.rate}/5</Text>
                <Star />
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* <View style={styles.devider} />
            <Text style={styles.seeAll}>See all</Text> */}
    </View>
  );
};

export default LanguagesCard;

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
    columnGap: 2,
  },
  Title: {
    fontSize: 20,
    fontWeight: '700',
    color: appColors.black,
    fontFamily: 'Noto Sans',
  },
  Head: {
    fontSize: 16,
    fontWeight: '700',
    color: appColors.black,
    fontFamily: 'Noto Sans',
  },
  Des: {
    fontSize: 14,
    fontWeight: '400',
    color: appColors.black,
    marginTop: 3,
    fontFamily: 'Noto Sans',
  },
  RatingText: {
    fontSize: 12,
    fontWeight: '700',
    color: appColors.black,
    marginRight: 3,
    fontFamily: 'Noto Sans',
  },
  devider: {
    height: 1,
    width: '95%',
    backgroundColor: '#E8E8E8',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center',
  },
  seeAll: {
    fontSize: 18,
    fontWeight: '600',
    color: appColors.primary,
    textAlign: 'center',
    fontFamily: 'Noto Sans',
  },
});
