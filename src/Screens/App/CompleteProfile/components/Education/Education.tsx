import {Image, StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import { AVATAR } from 'assets/Svgs';

const EducationCard = () => {
  return (
    <View style={styles.CardContainer}>
      <View style={styles.secContainer}>
        <View style={styles.Row}>
          <Text style={styles.Title}>Education</Text>
          <View style={styles.Row2}>
            <RenderSvgIcon
              icon="PEN"
              width={20}
              height={20}
              color={appColors.primary}
            />
          </View>
        </View>

        <View style={styles.Row2}>
        <View
            style={{
              width: 65,
              height: 65,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: '#DDD',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AVATAR style={styles.Image} />
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={styles.Title2}>School/university name</Text>
            <Text style={styles.CompanyName}>
             field of study
            </Text>
            {/* <Text style={styles.des}>2014 - 2018 ·4 years · Cairo, Egypt</Text>
            <View style={styles.Row2}>
              <Text style={styles.Title3}>Grade : </Text>
              <Text style={styles.Title4}>Excellent</Text>
            </View> */}
          </View>
        </View>
      </View>

      {/* <View style={styles.devider} />
            <Text style={styles.seeAll}>See all</Text> */}
    </View>
  );
};

export default EducationCard;

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
    height: 30,
    width: 30,
    // borderRadius: 65,
    // marginRight: 10,
  },
  CompanyName: {
    fontSize: 15,
    fontWeight: '400',
    color: appColors.black,
    marginTop: 3,
    width: '90%',
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
    marginTop: 3,
  },
  Title4: {
    fontWeight: '400',
    color: appColors.black,
    marginTop: 3,
    fontSize: 12,
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
