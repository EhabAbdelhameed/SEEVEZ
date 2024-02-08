import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import ReadMore from '@fawazahmed/react-native-read-more';
import {AVATAR, CompanyLogo, PDF} from 'assets/Svgs';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

const ExperienceProfileCard = (data: any) => {
 
  const [seeAllExperiences, setSeeAllExperiences] = useState(false);
  const navigation = useNavigation<any>();
  const differenceInMonths = (date1: any, date2: any) => {
    let start_date = moment(date1).format('yyyy-MM-DD');
    let end_date = moment(date2).format('yyyy-MM-DD');
    let years =
      (parseInt(end_date.substring(0, 4)) -
        parseInt(start_date.substring(0, 4))) *
      12;
    let months =
      parseInt(end_date.substring(5, 7)) - parseInt(start_date.substring(5, 7));
    Math.abs(years);
    Math.abs(months);

    return years + months;
  };

  // console.log('Difference is ',`${moment(data?.data?.end_date.diff(data?.data?.start_date,'months'))} month(s)`)

  return (
    <View style={styles.CardContainer}>
      <View style={styles.secContainer}>
        <View style={styles.Row}>
          <Text style={styles.Title}>Experience</Text>
          <View style={styles.Row2}>
            <TouchableOpacity
              onPress={() => navigation.navigate('UpdateExperience')}>
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
              onPress={() => navigation.navigate('UpdateExperienceCard')}>
              <RenderSvgIcon
                icon="PEN"
                width={20}
                height={20}
                color={appColors.primary}
              />
            </TouchableOpacity>}
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
              <CompanyLogo height={32} width={32} />
            </View>

            <View style={{marginLeft: 10}}>
              <Text style={styles.Title2}>Job Title</Text>
              <Text style={styles.CompanyName}>Company Name</Text>
            </View>
          </View>
        ) : seeAllExperiences ? (
          data?.data?.map((item: any, index: any) => (
            <View style={{marginBottom: 15}}>
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
                  <CompanyLogo height={32} width={32} />
                </View>
                <View style={{marginLeft: 10}}>
                  <Text style={styles.Title2}>{item.job_title}</Text>
                  <Text style={styles.CompanyName}>
                    {item?.company_name == null
                      ? item?.company_id?.name
                      : item?.company_name}
                  </Text>
                  <Text style={styles.des}>
                    {moment(item.start_date).format('MMM yyyy')} - Present{' '}
                    {differenceInMonths(item?.start_date, item?.end_date)} mos ·
                    Cairo, Egypt
                  </Text>
                </View>
              </View>
              <View style={styles.Row3}>
                <View style={styles.FollowersContainer}>
                  <Text style={styles.FollowersText}>
                    {item?.job_type_id?.name}
                  </Text>
                </View>
                {/* <View style={styles.statuesContainer}>
                <Text style={styles.statuesText}>Hybrid</Text>
              </View> */}
              </View>
              <Text style={styles.Title3}>Description</Text>
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
                {item.description}
              </ReadMore>
              {item?.experience_letter==null?null:
                item?.object_info?.extension == 'pdf' ? (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => Linking.openURL(item?.experience_letter)}
                    style={styles.PDFContainer}>
                    <PDF height={70} width={70} />
                  </TouchableOpacity>
                ) : (
                  <Image
                    style={styles.Certificate}
                    source={{
                      uri: item?.experience_letter,
                    }}
                  />
                )}
            </View>
          ))
        ) : (
          data?.data?.map((item: any, index: any) =>
            index == 0 ? (
              <View>
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
                    <CompanyLogo height={32} width={32} />
                  </View>
                  <View style={{marginLeft: 10}}>
                    <Text style={styles.Title2}>{item.job_title}</Text>
                    <Text style={styles.CompanyName}>
                      {item?.company_name == null
                        ? item?.company_id?.name
                        : item?.company_name}
                    </Text>
                    <Text style={styles.des}>
                      {moment(item.start_date).format('MMM yyyy')} - Present{' '}
                      {differenceInMonths(item?.start_date, item?.end_date)} mos
                      · Cairo, Egypt
                    </Text>
                  </View>
                </View>
                <View style={styles.Row3}>
                  <View style={styles.FollowersContainer}>
                    <Text style={styles.FollowersText}>
                      {item?.job_type_id?.name}
                    </Text>
                  </View>
                  {/* <View style={styles.statuesContainer}>
                      <Text style={styles.statuesText}>Hybrid</Text>
                    </View> */}
                </View>
                <Text style={styles.Title3}>Description</Text>
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
                  {item.description}
                </ReadMore>
                {item?.experience_letter==null?null:
                item?.object_info?.extension == 'pdf' ? (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => Linking.openURL(item?.experience_letter)}
                    style={styles.PDFContainer}>
                    <PDF height={70} width={70} />
                  </TouchableOpacity>
                ) : (
                  <Image
                    style={styles.Certificate}
                    source={{
                      uri: item?.experience_letter,
                    }}
                  />
                )}
              </View>
            ) : null,
          )
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

export default ExperienceProfileCard;

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
  PDFContainer: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.lightGrey3,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center',
  },
  Certificate: {
    width: 200,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 10,
  },
});
