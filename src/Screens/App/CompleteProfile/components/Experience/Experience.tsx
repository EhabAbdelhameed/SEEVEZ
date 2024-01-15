import {Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {AVATAR} from 'assets/Svgs';
import ReadMore from '@fawazahmed/react-native-read-more';
import { useNavigation } from '@react-navigation/native';

const ExperienceCard = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.CardContainer}>
      <View style={styles.secContainer}>
        <View style={styles.Row}>
          <Text style={styles.Title}>Experience</Text>
          <View style={styles.Row2}>
          <TouchableOpacity onPress={()=>navigation.navigate("UpdateExperience")}>
            <RenderSvgIcon
              icon="PEN"
              width={20}
              height={20}
              color={appColors.primary}
            />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.Row2}>
          {/* <Image
                        source={{ uri:'https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-profile-glyph-black-icon-png-image_691589.jpg' }}
                        style={styles.Image}
                    /> */}
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
            <Text style={styles.Title2}>Job Title</Text>
            <Text style={styles.CompanyName}>Company Name</Text>
            {/* <Text style={styles.des}>Sep 2023 - Present · 2 mos  Cairo, Egypt</Text> */}
          </View>
        </View>
        {/* <View style={styles.Row3}>
                    <View style={styles.FollowersContainer}>
                        <Text style={styles.FollowersText}>Full time</Text>
                    </View>
                    <View style={styles.statuesContainer}>
                        <Text style={styles.statuesText}>Hybrid</Text>
                    </View>
                </View> */}
      </View>

      {/* <View style={styles.devider} />
            <Text style={styles.seeAll}>See all</Text> */}
    </View>
  );
};

export default ExperienceCard;

const styles = StyleSheet.create({
  CardContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '100%',
    backgroundColor: appColors.white,
    borderRadius: 25,
    marginTop: 15,
  },
  statuesContainer: {
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 30,
    backgroundColor: '#E6FAFA',
    borderColor: '#00928E',
    borderWidth: 0.3,
    marginLeft: 7,
  },
  statuesText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#00928E',
  },
  FollowersContainer: {
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 30,
    backgroundColor: '#E8EFFC',
    borderColor: '#15439D',
    borderWidth: 0.3,
  },
  Row3: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 75,
  },
  FollowersText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#15439D',
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
    // borderRadius: 65
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
    marginTop: 15,
    color: appColors.black,
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
