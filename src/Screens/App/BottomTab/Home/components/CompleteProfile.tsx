import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {appColors} from '../../../../../theme/appColors';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectUser} from 'src/redux/auth';

const CompleteProfile = ({pers = 0}: {pers: number}) => {
  const CurrentUserData = useSelector(selectUser);

  const navigation = useNavigation();
  const Slider = () => {
    return (
      <View style={styles.rowItemSlide}>
        <View style={{width: '85%'}}>
          <View
            style={[
              styles.slider,
              {
                opacity: 0.4,
              },
            ]}
          />
          <View
            style={[
              styles.slider,
              {
                // backgroundColor: color,
                position: 'absolute',
                left: 0,
                width: `${pers}%`,
              },
            ]}
          />
          <View
            style={[
              styles.circleSlider,
              {
                left: `${pers - 1}%`,
                bottom: -5,
              },
            ]}>
            <RenderSvgIcon icon="RIGHTSLIDER" width={10} height={10} />
          </View>
        </View>
        <Text style={styles.text2}>{pers}%</Text>
      </View>
    );
  };

  return (
    <>
      <TouchableOpacity
        onPress={() =>
          CurrentUserData?.user_data?.user_type == 'company'||CurrentUserData?.user_data?.user_type == 'company_admin'
            ? navigation.navigate('CompleteCompanyProfileScreen')
            : navigation.navigate('CompleteProfileScreen')
        }
        style={styles.containerCompleteProfile}>
        <View style={styles.rowContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.text1}>Complete your profile</Text>
            <Text style={styles.text2}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </View>
          <View style={{transform: [{rotate: '180deg'}]}}>
            <RenderSvgIcon icon="ARROWBACK" color={appColors.primary} />
          </View>
        </View>
        <Slider />
      </TouchableOpacity>
    </>
  );
};

export default CompleteProfile;
