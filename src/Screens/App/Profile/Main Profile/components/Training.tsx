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
import moment from 'moment';
import {AVATAR, PDF} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';

const TrainingProfileCard = (data: any) => {
 
  const navigation = useNavigation();
  const [seeAllExperiences, setSeeAllExperiences] = useState(false);
  const differenceInYears = (date1: any, date2: any) => {
    let start_date = moment(date1).format('yyyy-MM-DD');
    let end_date = moment(date2).format('yyyy-MM-DD');
    let years =
      parseInt(end_date.substring(0, 4)) - parseInt(start_date.substring(0, 4));

    Math.abs(years);

    return years;
  };
  return (
    <View style={styles.CardContainer}>
      <View style={styles.secContainer}>
        <View style={styles.Row}>
          <Text style={styles.Title}>Training courses</Text>
          <View style={styles.Row2}>
            <TouchableOpacity
              onPress={() => navigation.navigate('UpdateTraining')}>
              <RenderSvgIcon
                icon="PLUSFOLLOW"
                style={{marginRight: 10}}
                width={20}
                height={20}
                color={appColors.primary}
              />
            </TouchableOpacity>
            {data?.data?.length == 0 ? null:
            <TouchableOpacity style={{ height: 30, width: 30, alignItems: 'center', justifyContent: 'center' }} 
              disabled={data?.data?.length == 0 ? true : false}
              onPress={() => navigation.navigate('UpdateTrainingCard')}>
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
              <AVATAR height={32} width={32} />
            </View>
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: '600',
                  color: appColors.black,
                }}>
                Course name
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  color: appColors.black,
                  marginTop: 3,
                }}>
                Company name
              </Text>
            </View>
          </View>
        ) : seeAllExperiences ? (
          data?.data?.map((item: any) => (
            <View style={{paddingVertical:10}}>
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
                  <Text style={styles.Title2}>{item?.institute}</Text>
                  <Text style={styles.CompanyName}>{item?.field_of_study}</Text>
                  <Text style={styles.des}>
                    {moment(item.start_date).format('yyyy')} -{' '}
                    {moment(item.end_date).format('yyyy')} ·
                    {' '}{differenceInYears(item.start_date, item.end_date)} years ·
                    Cairo, Egypt
                  </Text>
                  <View style={styles.Row2}>
                    <Text style={styles.Title3}>Grade : </Text>
                    <Text style={styles.Title4}>{item.grade}</Text>
                  </View>
                </View>
              </View>
              {item?.certificate_image==null?null:
              item?.object_info?.extension == 'pdf' ? (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => Linking.openURL(item?.certificate_image)}
                  style={styles.PDFContainer}>
                  <PDF height={70} width={70} />
                </TouchableOpacity>
              ) : (
                <Image
                  style={styles.Certificate}
                  source={{
                    uri: item?.certificate_image,
                  }}
                />
              )}
            </View>
          ))
        ) : (
          data?.data?.map((item: any, index: any) =>
            index == 0 ? (
              <View style={{paddingVertical:10}}>
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
                    <Text style={styles.Title2}>{item?.institute}</Text>
                    <Text style={styles.CompanyName}>
                      {item?.field_of_study}
                    </Text>
                    <Text style={styles.des}>
                      {moment(item.start_date).format('yyyy')} -{' '}
                      {moment(item.end_date).format('yyyy')} ·
                     {' '}{differenceInYears(item.start_date, item.end_date)} years
                      · Cairo, Egypt
                    </Text>
                    <View style={styles.Row2}>
                      <Text style={styles.Title3}>Grade : </Text>
                      <Text style={styles.Title4}>{item.grade}</Text>
                    </View>
                  </View>
                </View>
                {item?.certificate_image==null?null:
                item?.object_info?.extension == 'pdf'||item?.object_info?.extension == 'zip' ? (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => Linking.openURL(item?.certificate_image)}
                    style={styles.PDFContainer}>
                    <PDF height={70} width={70} />
                  </TouchableOpacity>
                ) : (
                  <Image
                    style={styles.Certificate}
                    source={{
                      uri: item?.certificate_image,
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

export default TrainingProfileCard;

const styles = StyleSheet.create({
  CardContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '100%',
    backgroundColor: appColors.white,
    borderRadius: 25,
    marginTop: 15,
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
    width: '90%',
  },
  Image: {
    height: 50,
    width: 50,
    borderRadius: 65,
    marginRight: 10,
  },
  CompanyName: {
    fontSize: 16,
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
  Certificate: {
    width: 200,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 10,
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
