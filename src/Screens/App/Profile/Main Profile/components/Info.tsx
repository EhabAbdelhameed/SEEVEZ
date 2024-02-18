import {
  ActivityIndicator,
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
import {ImageBackground} from 'react-native';
import {
  AVATAR,
  Analytic,
  Analytics,
  PDF,
  ReviewCV,
} from '../../../../../assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectUser} from 'src/redux/auth';
import AppThunks from 'src/redux/app/thunks';
import {useAppDispatch} from 'src/redux/store';
import DocumentPicker from 'react-native-document-picker';
import AppSlice from 'src/redux/app';
const InfoProfileCard = (data: any) => {
  const [name, setName] = useState<any>('');
  const [count, setCount] = React.useState(0)
  const [loading, setLoading] = useState<any>(false);
  const dispatch = useAppDispatch();
  console.log('====================================');
  console.log(data?.data);
  console.log('====================================');
  React.useEffect(() => {
    dispatch(AppThunks.doGetFollowers(data?.current? data?.data?.id:data?.data?.user_id)).then((res: any) => {
        setCount(res?.payload?.data?.followCounts[0]?.followerCount)
    })
}, [])
  const uploadFile = async (type: any) => {
    try {
      const res: any = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });

      setLoading(true);
      const formdata = new FormData();
      formdata.append('name', data?.data?.name);
      formdata.append('cv_pdf', {
        uri: res[0]?.uri,
        type: res[0]?.type,
        name: res[0]?.name,
      });
      console.log(formdata);

      dispatch(AppThunks.doAddPersonalInfo(formdata)).then((response: any) => {
        setLoading(false);
        dispatch(AppThunks.GetProfileInfo());
        dispatch(AppSlice.changeDone(false));
        setName(res[0].name);
      });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Canceled');
      } else {
        console.log('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  const navigation = useNavigation();
  return (
    <View style={styles.CardContainer}>
      <View style={styles.secContainer}>
        {!data?.current && (
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
              onPress={() => navigation.navigate('UpdateInfo')}>
              <RenderSvgIcon
                icon="PEN"
                width={20}
                height={20}
                color={appColors.white}
                // style={styles.PENIcon}
              />
            </TouchableOpacity>
          </View>
        )}

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
            <AVATAR height={48} width={48} />
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
        <View style={[styles.Row, {marginTop: 10}]}>
          <View style={styles.subContainer}>
            <Text style={styles.subText}>Premium</Text>
          </View>
          <View style={styles.statuesContainer}>
            <Text style={styles.statuesText}>Online</Text>
          </View>
          <View style={styles.FollowersContainer}>
            <Text style={styles.FollowersText}>{count >= 1000 ? `${count / 1000}k` : count} Followers</Text>
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
              data?.data?.area == null ? ' ' : `${data?.data?.area} `
            } ${data?.data?.city == null ? ' ' : '، ' + data?.data?.city}${
              data?.data?.country == null ? ' ' : '  ' + data?.data?.country
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
        {data.current?
        null:<View style={styles.Row}>
          <RenderSvgIcon
            icon="PHONE"
            width={20}
            height={20}
            color={appColors.white}
          />
          <Text style={styles.InfoText}>{data?.data?.phone_number}</Text>
        </View>}
        {data?.data?.website == null ? null : (
          <TouchableOpacity
            onPress={() => Linking.openURL(data?.data?.website)}
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
          {data?.data?.instagram == null ? null : (
            <TouchableOpacity
              onPress={() => Linking.openURL(data?.data?.instagram)}>
              <RenderSvgIcon
                icon="INSTA"
                width={20}
                height={20}
                color={appColors.white}
                style={{marginRight: 20}}
              />
            </TouchableOpacity>
          )}
          {data?.data?.facebook == null ? null : (
            <TouchableOpacity
              onPress={() => Linking.openURL(data?.data?.facebook)}>
              <RenderSvgIcon
                icon="FACE"
                width={20}
                height={20}
                color={appColors.white}
                style={{marginRight: 20}}
              />
            </TouchableOpacity>
          )}
          {data?.data?.linkedin == null ? null : (
            <TouchableOpacity
              onPress={() => Linking.openURL(data?.data?.linkedin)}>
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
        {data?.data?.work_type == 'freelancer' ||
        data?.data?.user_data?.user_type == 'recruiter' ? (
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
            {(data?.data?.cv_pdf == null&&!data.current) ? (
              <TouchableOpacity
                onPress={uploadFile}
                style={{
                  // width: 140,
                  height: 40,
                  backgroundColor: appColors.bg,
                  paddingHorizontal: 10,
                  borderRadius: 50,
                  width: 130,
                  borderWidth: 1,
                  borderColor: appColors.primary,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  columnGap: 10,
                }}>
                <PDF width={20} height={20} />
                <Text style={{color: appColors.primary}}>
                  {name == '' ? (
                    loading ? (
                      <ActivityIndicator
                        size={'small'}
                        color={appColors.primary}
                      />
                    ) : (
                      'Upload CV'
                    )
                  ) : (
                    name.slice(9)
                  )}
                </Text>
              </TouchableOpacity>
            ) : (
              !data?.current && (
                <TouchableOpacity
                  onPress={() => Linking.openURL(data?.data?.cv_pdf?.fileUrl)}>
                  <ReviewCV width={140} />
                </TouchableOpacity>
              )
            )}
            { !data?.current && <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('Analytics');
              }}>
              <Analytics width={140} style={{marginLeft: 10}} />
            </TouchableOpacity>}
          </View>
        )}
      </View>
    </View>
  );
};

export default InfoProfileCard;

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
