import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {AVATAR} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';

const EducationCard = (data: any) => {
  const navigation = useNavigation<any>();
 
  return (
    <View style={styles.CardContainer}>
      <View style={styles.secContainer}>
        <View style={styles.Row}>
          <Text style={styles.Title}>Education</Text>
          <View style={styles.Row2}>
            <TouchableOpacity
              onPress={() => navigation.navigate('UpdateEducation')}>
            <RenderSvgIcon
                icon="PLUSFOLLOW"
                width={20}
                height={20}
                color={appColors.primary}
              />
            </TouchableOpacity>
          </View>
        </View>

        {data?.data?.length == 0 ? (
          <View style={styles.Row2}>
            <View
              style={{
                width: 64,
                height: 64,
                borderRadius: 64,

                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: appColors.bg,
              }}>
              <AVATAR height={32} width={32} />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={styles.Title2}>School/university name</Text>
              <Text style={styles.CompanyName}>Field of study</Text>
            </View>
          </View>
        ) : (
          data?.data?.map((item:any) => (
            <View style={styles.Row2}>
              <View
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 64,

                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: appColors.bg,
                }}>
                <AVATAR height={32} width={32} />
              </View>
              <View style={{marginLeft: 10,width:'90%'}}>
                <Text style={styles.Title2}>{item.university_name} </Text>
                <Text style={styles.CompanyName}>{item.field_of_study}</Text>
              </View>
            </View>
          ))
        )}
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
    fontFamily: 'Noto Sans'
  },
  Title2: {
    fontSize: 18,
    fontWeight: '700',
    color: appColors.black,
    fontFamily: 'Noto Sans'
  },
  Image: {
    height: 30,
    width: 30,
    // borderRadius: 65,
    // marginRight: 10,
  },
  CompanyName: {
    fontSize: 16,
    fontWeight: '400',
    color: appColors.black,
    marginTop: 3,
    // width: '90%',
    fontFamily: 'Noto Sans'
  },
  des: {
    fontSize: 11,
    fontWeight: '400',
    color: appColors.black,
    marginTop: 3,
    fontFamily: 'Noto Sans'
  },
  Title3: {
    fontWeight: '600',
    color: appColors.black,
    marginTop: 3,
    fontFamily: 'Noto Sans'
  },
  Title4: {
    fontWeight: '400',
    color: appColors.black,
    marginTop: 3,
    fontSize: 12,
    fontFamily: 'Noto Sans'
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
    fontFamily: 'Noto Sans'
  },
});
