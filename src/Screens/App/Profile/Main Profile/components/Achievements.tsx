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
import {useNavigation} from '@react-navigation/native';
import {PDF} from 'assets/Svgs';

const AchievementsProfileCard = (data: any) => {
  const navigation = useNavigation();
  console.log('HELLO FROM ACHIEV', data);
  const [seeAllExperiences, setSeeAllExperiences] = useState(false);
  return (
    <View style={styles.CardContainer}>
      <View style={styles.secContainer}>
        <View style={styles.Row}>
          <Text style={styles.Title}>Achievements</Text>
          <View style={styles.Row2}>
            <TouchableOpacity
              onPress={() => navigation.navigate('UpdateAchievements')}>
              <RenderSvgIcon
                icon="PLUSFOLLOW"
                style={{marginRight: 10}}
                width={20}
                height={20}
                color={appColors.primary}
              />
            </TouchableOpacity>
            {data?.data?.length == 0 ? null : (
              <TouchableOpacity
                style={{
                  height: 30,
                  width: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                disabled={data?.data == null ? true : false}
                onPress={() => navigation.navigate('UpdateAchievementCard')}>
                <RenderSvgIcon
                  icon="PEN"
                  width={20}
                  height={20}
                  color={appColors.primary}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {data?.data?.length == 0
          ? null
          : seeAllExperiences
          ? data?.data?.map((item: any, index: any) => (
              <View
                style={{
                  marginBottom: 15,
                  paddingHorizontal: 10,
                  flexDirection: 'row',
                }}>
                <View style={{width: '85%'}}>
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
                    {item?.text}
                  </ReadMore>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '120%',
                    }}>
                    {item?.certificate == null ? null : item?.object_info
                        ?.extension == 'pdf' ||
                      item?.object_info?.extension == 'zip' ? (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => Linking.openURL(item?.certificate)}
                        style={styles.PDFContainer}>
                        <PDF height={70} width={70} />
                      </TouchableOpacity>
                    ) : (
                      <Image
                        style={styles.Certificate}
                        source={{uri: item?.certificate}}
                      />
                    )}
                  </View>
                </View>
              </View>
            ))
          : data?.data?.map((item: any, index: any) =>
              index == 0 ? (
                <View
                  style={{
                    marginBottom: 15,
                    paddingHorizontal: 10,
                    flexDirection: 'row',
                  }}>
                  <View style={{width: '85%'}}>
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
                      {item?.text}
                    </ReadMore>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '120%',
                      }}>
                      {item?.certificate == null ? null : item?.object_info
                          ?.extension == 'pdf' ||
                        item?.object_info?.extension == 'zip' ? (
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => Linking.openURL(item?.certificate)}
                          style={styles.PDFContainer}>
                          <PDF height={70} width={70} />
                        </TouchableOpacity>
                      ) : (
                        <Image
                          style={styles.Certificate}
                          source={{uri: item?.certificate}}
                        />
                      )}
                    </View>
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

export default AchievementsProfileCard;

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
  },
  Certificate: {
    width: 100,
    height: 150,
    alignSelf: 'flex-start',
    resizeMode: 'contain',
    marginVertical: 10,
  },
});
