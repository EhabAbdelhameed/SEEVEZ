import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {Star} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';

const LanguagesProfileCard = (data: any) => {
  const [seeAllExperiences, setSeeAllExperiences] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.CardContainer}>
      <View style={styles.secContainer}>
        <View style={styles.Row}>
          <Text style={styles.Title}>Languages</Text>
          <View style={styles.Row2}>
            <TouchableOpacity
              onPress={() => navigation.navigate('UpdateLanguages')}>
              <RenderSvgIcon
                icon="PLUSFOLLOW"
                style={{marginRight: 10}}
                width={20}
                height={20}
                color={appColors.primary}
              />
            </TouchableOpacity>
            {data?.data?.length == 0 ?null:
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              disabled={data?.data?.length == 0 ? true : false}
              onPress={() => navigation.navigate('UpdateLanguageCard')}>
              <RenderSvgIcon
                icon="PEN"
                width={20}
                height={20}
                color={appColors.primary}
              />
            </TouchableOpacity>}
          </View>
        </View>
        {data?.data?.length == 0
          ? null
          : data?.data?.map((item: any, index: any) =>
              seeAllExperiences ? (
                <View style={[styles.Row, {marginTop: 10, marginBottom: 0}]}>
                  <View>
                    <Text style={styles.Head}>{item?.name}</Text>
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
                    <Text style={styles.RatingText}>{item.rate}/5</Text>
                    <Star />
                  </View>
                </View>
              ) : index == 0 ? (
                <View style={[styles.Row, {marginTop: 10, marginBottom: 0}]}>
                  <View>
                    <Text style={styles.Head}>{item?.name}</Text>
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
              ) : null,
            )}
      </View>

      <View style={styles.devider} />
      <TouchableOpacity
        disabled={
          data?.data?.length == 0 || data?.data?.length == 1 ? true : false
        }
        onPress={() => setSeeAllExperiences(!seeAllExperiences)}>
        <Text style={styles.seeAll}>
          See {seeAllExperiences ? 'Less' : 'All'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LanguagesProfileCard;

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
  Head: {
    fontSize: 16,
    fontWeight: '700',
    color: appColors.black,
  },
  Des: {
    fontSize: 14,
    fontWeight: '400',
    color: appColors.black,
    marginTop: 3,
  },
  RatingText: {
    fontSize: 12,
    fontWeight: '700',
    color: appColors.black,
    marginRight: 3,
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
  },
});
