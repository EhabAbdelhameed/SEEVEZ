import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import ReadMore from '@fawazahmed/react-native-read-more';

const AchievementsCard = (data: any) => {
  console.log('From ACH', data);
  return (
    <View style={styles.CardContainer}>
      <View style={styles.secContainer}>
        <View style={styles.Row}>
          <Text style={styles.Title}>Achievements</Text>
          <View style={styles.Row2}>
            <RenderSvgIcon
              icon="PLUSFOLLOW"
              style={{marginRight: 10}}
              width={20}
              height={20}
              color={appColors.primary}
            />
            <RenderSvgIcon
              icon="PEN"
              width={20}
              height={20}
              color={appColors.primary}
            />
          </View>
        </View>
        {data?.data == null ? null : (
          <ReadMore
            style={styles.PostText}
            animate={true}
            seeMoreStyle={{
              color: appColors.primary,
              textDecorationLine: 'underline',
            }}
            seeLessStyle={{
              color: appColors.primary,
              textDecorationLine: 'underline',
            }}
            seeLessText="less"
            seeMoreText="Read more"
            numberOfLines={3}>
            {
             data?.data?.text
            }
          </ReadMore>
        )}
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
  },
  Title2: {
    fontSize: 19,
    fontWeight: '600',
    color: appColors.black,
  },
  Image: {
    height: 65,
    width: 65,
    borderRadius: 65,
  },
  CompanyName: {
    fontSize: 15,
    fontWeight: '400',
    color: appColors.black,
    marginTop: 3,
  },
  des: {
    fontSize: 11,
    fontWeight: '400',
    color: appColors.black,
    marginTop: 3,
  },
  Title3: {
    fontWeight: '600',
    color: appColors.black,
    marginTop: 15,
  },
  PostText: {
    fontSize: 12,
    fontWeight: '400',
    color: appColors.black,
  },
});
