import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AvatarIcon from '../../../../../Components/molecules/Avatar';
import {Vod, dummyAvatar} from '../../../../../Dummy';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {appSizes} from '../../../../../theme/appSizes';
import {appColors} from '../../../../../theme/appColors';
import {useSelector} from 'react-redux';
import {selectUser} from 'src/redux/auth';

const CompanySection = (title?:any) => {
  
  const CurrentUserData = useSelector(selectUser);
  return (
    <View
      style={[
        styles.rowContainer,
        {
          width: '100%',
          justifyContent: 'flex-start',
          marginBottom: 15,
        },
      ]}>
      <AvatarIcon style={styles.avatar} imgUrl={Vod} noActive={true} />
      <View style={styles.textSection2}>
        <View
          style={
            CurrentUserData?.user_data?.user_type == 'company'
              ? styles.rowContainer1
              : styles.rowContainer
          }>
          <Text
            style={[
              styles.text1,
              {
                marginBottom: 0,
                fontSize: appSizes.font_m,
              },
            ]}>
            Senior ui ux designer
          </Text>
         {CurrentUserData?.user_data?.user_type=='company'? <Text
            style={[
              styles.text1,
              {
                marginBottom: 0,
                fontSize: appSizes.font_m,
              },
            ]}>
            25
          </Text>:null}
        </View>
        <View
          style={[
            styles.rowContainer,
            {
              marginTop: 4,
            },
          ]}>
          <Text style={[styles.text3]} numberOfLines={2}>
            Vodafone
          </Text>
          <Text style={[styles.text3]} numberOfLines={2}>
            cairo, egypt
          </Text>
          {CurrentUserData?.user_data?.user_type == 'company' ? null : (
            <Text
              style={[styles.text3, {color: appColors.Orange}]}
              numberOfLines={2}>
              Internship
            </Text>
          )}
          <Text
            style={[styles.text3, {color:CurrentUserData?.user_data?.user_type=='company'&&title?.title!='My internship'?appColors.primary: appColors.Orange}]}
            numberOfLines={2}>
            3 hours ago
          </Text>
         {CurrentUserData?.user_data?.user_type=='company'?<Text style={[styles.text3]}>Applied</Text>:null}
        </View>
      </View>
    </View>
  );
};

export default CompanySection;
