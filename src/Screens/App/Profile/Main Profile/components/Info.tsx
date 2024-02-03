import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {ImageBackground} from 'react-native';
import {Analytic, Analytics, ReviewCV} from '../../../../../assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectUser} from 'src/redux/auth';

const InfoCard = (data: any) => {
  const CurrentUserData = useSelector(selectUser);
  console.log(
    'CurrentUser ',
    CurrentUserData?.user_data?.user_type,
    CurrentUserData?.work_type,
  );
  const navigation = useNavigation();
  return (
    <View style={styles.CardContainer}>
      <View style={styles.secContainer}>
        <RenderSvgIcon
          icon="SEND"
          width={20}
          height={20}
          color={appColors.white}
          style={styles.SENDIcon}
        />
        <TouchableOpacity onPress={() => navigation.navigate('UpdateInfo')}>
          <RenderSvgIcon
            icon="PEN"
            width={20}
            height={20}
            color={appColors.white}
            style={styles.PENIcon}
          />
        </TouchableOpacity>
        <ImageBackground
          source={{uri: data?.data?.avatar}}
          style={styles.ImageBackground}
          imageStyle={styles.imageStyle}>
          <View style={styles.PlusContainer}>
            <RenderSvgIcon
              icon="PLUSFOLLOW"
              width={20}
              height={20}
              color={appColors.white}
            />
          </View>
        </ImageBackground>

        <View style={styles.Row}>
          <Text style={styles.Name}>{data?.data?.name}</Text>
          <RenderSvgIcon
            icon="RIGHTACCOUNT"
            width={20}
            height={20}
            color={appColors.white}
          />
        </View>
        <Text style={styles.Description}>{data?.data?.job_title}</Text>
        <View style={[styles.Row, {marginTop: 10}]}>
          <View style={styles.subContainer}>
            <Text style={styles.subText}>Premium</Text>
          </View>
          <View style={styles.statuesContainer}>
            <Text style={styles.statuesText}>Online</Text>
          </View>
          <View style={styles.FollowersContainer}>
            <Text style={styles.FollowersText}>1.500 Followers</Text>
          </View>
        </View>
        {data?.data?.area == null &&
        data?.data?.city == null &&
        data?.data?.country == null ? null : (
          <View style={styles.Row}>
            <RenderSvgIcon
              icon="LOCATION"
              width={20}
              height={20}
              color={appColors.white}
            />
            <Text style={styles.InfoText}>{`${
              data?.data?.area == null ? null : `${data?.data?.area} ،`
            } ${data?.data?.city == null ? null : data?.data?.city} ${
              data?.data?.country
            }`}</Text>
          </View>
        )}
        <View style={styles.Row}>
          <RenderSvgIcon
            icon="EMAIL"
            width={20}
            height={20}
            color={appColors.white}
          />
          <Text style={styles.InfoText}>{data?.data?.email}</Text>
        </View>
        <View style={styles.Row}>
          <RenderSvgIcon
            icon="PHONE"
            width={20}
            height={20}
            color={appColors.white}
          />
          <Text style={styles.InfoText}>{data?.data?.phone_number}</Text>
        </View>
        <View style={styles.Row}>
          <RenderSvgIcon
            icon="WEBSITE"
            width={20}
            height={20}
            color={appColors.white}
          />
          <Text style={styles.InfoText}>Http/www.exa.com</Text>
        </View>
        <View style={styles.Row}>
          <RenderSvgIcon
            icon="INSTA"
            width={20}
            height={20}
            color={appColors.white}
            style={{marginRight: 20}}
          />
          <RenderSvgIcon
            icon="FACE"
            width={20}
            height={20}
            color={appColors.white}
            style={{marginRight: 20}}
          />
          <RenderSvgIcon
            icon="LINKED"
            width={20}
            height={20}
            color={appColors.white}
            style={{marginRight: 20}}
          />
        </View>
        {CurrentUserData?.work_type == 'freelancer' ||
        CurrentUserData?.user_data?.user_type == 'recruiter' ? (
          <View style={[styles.Row, {marginTop: 15}]}>
            <TouchableOpacity
              style={{
                // width: 140,
                height: 40,
                backgroundColor: appColors.primary,
                paddingHorizontal: 20,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: appColors.primary,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                columnGap: 10,
              }}>
              <Analytic width={20} height={20} />
              <Text style={{color: appColors.white}}>My analytics</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={[styles.Row, {marginTop: 15}]}>
            <ReviewCV width={140} />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('Analytics');
              }}>
              <Analytics width={140} style={{marginLeft: 10}} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default InfoCard;

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
  ImageBackground: {
    height: 95,
    width: 95,
  },
  imageStyle: {
    borderRadius: 95,
    resizeMode: 'cover',
    backgroundColor: appColors.six,
  },
  SENDIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  PENIcon: {
    position: 'absolute',
    right: 40,
    top: 10,
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  Name: {
    fontSize: 23,
    fontWeight: '700',
    color: appColors.black,
    marginRight: 7,
  },
  Description: {
    fontSize: 14,
    fontWeight: '400',
    color: appColors.black,
    marginRight: 7,
    marginTop: 2,
  },
  subContainer: {
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 30,
    backgroundColor: '#F8E5B0',
    borderColor: '#A57900',
    borderWidth: 0.3,
    marginRight: 10,
  },
  subText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#A57900',
  },
  statuesContainer: {
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 30,
    backgroundColor: '#E6FAFA',
    borderColor: '#00928E',
    borderWidth: 0.3,
    marginRight: 10,
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
  FollowersText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#15439D',
  },
  InfoText: {
    fontWeight: '600',
    color: appColors.black,
    marginLeft: 7,
  },
  Title: {
    fontSize: 16,
    fontWeight: '700',
    color: appColors.black,
  },
  Des: {
    fontSize: 12,
    fontWeight: '400',
    color: appColors.black,
  },
  PlusContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: appColors.primary,
    borderRadius: 20,
  },
});
