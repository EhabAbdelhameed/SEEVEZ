import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {AVATAR} from 'assets/Svgs';
import ReadMore from '@fawazahmed/react-native-read-more';
import {useNavigation} from '@react-navigation/native';

const ExperienceCard = (data: any) => {
  const navigation = useNavigation<any>();

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
              <Text style={styles.Title2}>Job Title</Text>
              <Text style={styles.CompanyName}>Company Name</Text>
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
               <Text style={styles.Title2}>{item?.job_title}</Text>
               <Text style={styles.CompanyName}>{item?.company_name==null?item?.company_id?.name:item?.company_name}</Text>
             </View>
           </View>
          ))
        )}
      </View>
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
    fontFamily: 'Noto Sans'
  },
  Title2: {
    fontSize: 20,
    fontWeight: '700',
    color: appColors.black,
    fontFamily: 'Noto Sans'
  },
  Image: {
    height: 30,
    width: 30,
    // borderRadius: 65
  },
  CompanyName: {
    fontSize: 16,
    fontWeight: '400',
    color: appColors.black,
    marginTop: 3,
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
    marginTop: 15,
    fontFamily: 'Noto Sans'
  },
  PostText: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: 15,
    color: appColors.black,
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
