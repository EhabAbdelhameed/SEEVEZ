import {View, Text, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import {RenderSvgIcon} from 'components/atoms/svg';
import {AVATAR, PDF, UploadYourCv} from 'assets/Svgs';
import {appColors, appSizes} from 'theme';
import {useSelector} from 'react-redux';
import {selectPhotoData} from 'src/redux/app';
import {selectUser} from 'src/redux/auth';
import {globalStyles} from 'src/globalStyle';
import AvatarIcon from 'components/molecules/Avatar';
import {Logo} from 'assets/images';

const JopOppertunity = () => {
  const photoData = useSelector(selectPhotoData);
  const User = useSelector(selectUser);

  return (
    <View
      style={[
        styles.CVContainer,{
            
        }
      
      ]}>
      <View style={[globalStyles.leftHeaderContainer, {width: '100%'}]}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 40,
            // borderWidth: 1,
            // borderColor: '#DDD',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: appColors.bg,
          }}>
          {User?.avatar == null ? (
            <AVATAR height={32} width={32} />
          ) : (
            <AvatarIcon
              imgUrl={User?.avatar}
              style={{width: 40, height: 40, borderRadius: 40}}
            />
          )}
        </View>
        <View>
          <View style={{flexDirection: 'row', columnGap: 10}}>
            <View style={{}}>
              <Text
                style={{
                  fontFamily: 'Noto Sans',
                  fontSize: 14,
                  fontWeight: '700',
                  color: '#000',
                }}>
                {photoData?.JobOpportunity?.job_title}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', columnGap: 35}}>
            <Text
              style={{
                fontFamily: 'Noto Sans',
                fontSize: 10,
                fontWeight: '400',
                color: '#1C1C1C',
              }}>
              {User?.name}
            </Text>
          </View>
          <View style={{flexDirection: 'row', columnGap: 10}}>
            <Text
              style={{
                fontFamily: 'Noto Sans',
                fontSize: 10,
                fontWeight: '400',
                color: '#1C1C1C',
              }}>
              {photoData?.JobOpportunity?.job_location}
            </Text>
            <Text
              style={{
                fontFamily: 'Noto Sans',
                fontSize: 10,
                fontWeight: '400',
                color: '#1C1C1C',
              }}>
              {photoData?.addonesCaption}
            </Text>
            <Text
              style={{
                fontFamily: 'Noto Sans',
                fontSize: 10,
                fontWeight: '400',
                color: '#1C1C1C',
              }}>
              Easy apply
            </Text>
            {/* <Logo/> */}
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.containerHire, {width: '90%', paddingVertical: 15}]}>
        <Text
          style={[
            styles.text3,
            {
              color: appColors.white,
            },
          ]}>
          Apply for job
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default JopOppertunity;
