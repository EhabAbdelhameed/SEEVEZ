import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {ImageBackground} from 'react-native';
import {
  Analytic,
  Analytics,
  CompanyLogo,
  ReviewCV,
} from '../../../../../assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import {selectUser} from 'src/redux/auth';
import {useSelector} from 'react-redux';
import {useAppDispatch} from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';

const InfoCardCompany = (data: any) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const CurrentUserData = useSelector(selectUser);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    dispatch(
      AppThunks.doGetFollowers(
        data?.current ? data?.data?.id : data?.data?.user_id,
      ),
    ).then((res: any) => {
      setCount(res?.payload?.data?.followCounts[0]?.followerCount);
    });
  }, []);
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  return (
    <View style={styles.CardContainer}>
      <View style={styles.secContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            right: 10,
            top: 10,
          }}>
          <RenderSvgIcon
            icon="SEND"
            width={20}
            height={20}
            color={appColors.white}
            // style={styles.SENDIcon}
          />
          <TouchableOpacity
            style={{
              marginLeft: 15,
              height: 30,
              width: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('UpdateCompanyInfo')}>
            <RenderSvgIcon
              icon="PEN"
              width={20}
              height={20}
              color={appColors.white}
              // style={styles.PENIcon}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 96,
            height: 96,
            borderRadius: 96,
            // borderWidth: 1,
            // borderColor: '#DDD',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: appColors.bg,
          }}>
          {data?.data?.avatar == null ? (
            <CompanyLogo height={48} width={48} />
          ) : (
            <Image
              source={{uri: data?.data?.avatar}}
              style={{width: 96, height: 96, borderRadius: 96}}
              resizeMode="cover"
            />
          )}
          <View
            style={{
              width: 15,
              height: 15,
              borderRadius: 15,
              // borderWidth: 1,
              // borderColor: '#DDD',
              justifyContent: 'center',
              position: 'absolute',
              bottom: 2,
              right: 12,
              alignItems: 'center',
              backgroundColor: appColors.primary,
            }}>
            <RenderSvgIcon
              icon="PLUSFOLLOW"
              // style={{marginRight: 10}}
              width={10}
              height={10}
              color={appColors.white}
            />
          </View>
        </View>

        <View style={styles.Row}>
          <Text style={styles.Name}>{data?.data?.name}</Text>
          <RenderSvgIcon
            icon="RIGHTACCOUNT"
            width={20}
            height={20}
            color={appColors.white}
          />
        </View>
        {data?.data?.job_title == null ? null : (
          <Text style={styles.Description}>{data?.data?.job_title}</Text>
        )}
          <View style={[styles.Row, { marginTop: 10 }]}>
          <View style={styles.subContainer}>
            <Text style={styles.subText}>{t('premium')}</Text>
          </View>
          <View style={styles.statuesContainer}>
            <Text style={styles.statuesText}>{t('online')}</Text>
          </View>
          <View style={styles.FollowersContainer}>
            <Text style={styles.FollowersText}>
              {count >= 1000 ? `${count / 1000}k` : count} {t('Followers')}
            </Text>
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
              data?.data?.area == null ? '' : `${data?.data?.area} ، `
            } ${data?.data?.city == null ? '' : data?.data?.city}  ${
              data?.data?.country == null ? '' : data?.data?.country
            }`}</Text>
          </View>
        )}
         {!data?.current && <View style={styles.Row}>
          <RenderSvgIcon
            icon="EMAIL"
            width={20}
            height={20}
            color={appColors.white}
          />
          <Text style={styles.InfoText}>{data?.data?.email}</Text>
        </View>}
        {data.current ? null : (
          <View style={styles.Row}>
            <RenderSvgIcon
              icon="PHONE"
              width={20}
              height={20}
              color={appColors.white}
            />
            <Text style={styles.InfoText}>{data?.data?.phone_number}</Text>
          </View>
        )}
        {CurrentUserData?.website == null ? null : (
          <TouchableOpacity
            onPress={() => Linking.openURL(CurrentUserData?.website)}
            style={styles.Row}>
            <RenderSvgIcon
              icon="WEBSITE"
              width={20}
              height={20}
              color={appColors.white}
            />
            <Text style={styles.InfoText}>Http/www.exa.com</Text>
          </TouchableOpacity>
        )}
        <View style={styles.Row}>
          {CurrentUserData?.instagram == null ? null : (
            <TouchableOpacity
              onPress={() => Linking.openURL(CurrentUserData?.instagram)}>
              <RenderSvgIcon
                icon="INSTA"
                width={20}
                height={20}
                color={appColors.white}
                style={{marginRight: 20}}
              />
            </TouchableOpacity>
          )}
          {CurrentUserData?.facebook == null ? null : (
            <TouchableOpacity
              onPress={() => Linking.openURL(CurrentUserData?.facebook)}>
              <RenderSvgIcon
                icon="FACE"
                width={20}
                height={20}
                color={appColors.white}
                style={{marginRight: 20}}
              />
            </TouchableOpacity>
          )}
          {CurrentUserData?.linkedin == null ? null : (
            <TouchableOpacity
              onPress={() => Linking.openURL(CurrentUserData?.linkedin)}>
              <RenderSvgIcon
                icon="LINKED"
                width={20}
                height={20}
                color={appColors.white}
                style={{marginRight: 20}}
              />
            </TouchableOpacity>
          )}
        </View>
       
      </View>
    </View>
  );
};

export default InfoCardCompany;

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
    textAlign: 'left',
  },
  Description: {
    fontSize: 14,
    fontWeight: '400',
    color: appColors.black,
    marginRight: 7,
    marginTop: 2,
    textAlign: 'left',
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
    textAlign: 'left',
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
    textAlign: 'left',
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
    textAlign: 'left',
  },
  InfoText: {
    fontWeight: '600',
    color: appColors.black,
    marginLeft: 7,
    textAlign: 'left',
  },
  Title: {
    fontSize: 16,
    fontWeight: '700',
    color: appColors.black,
    textAlign: 'left',
  },
  Des: {
    fontSize: 12,
    fontWeight: '400',
    color: appColors.black,
    textAlign: 'left',
  },
  PlusContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: appColors.primary,
    borderRadius: 20,
  },
});
function setCount(followerCount: any) {
  throw new Error('Function not implemented.');
}
