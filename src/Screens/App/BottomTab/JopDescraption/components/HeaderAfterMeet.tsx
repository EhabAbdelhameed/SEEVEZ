import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import {appColors} from 'theme/appColors';
import {selectLang} from 'src/redux/lang';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {RenderSvgIcon} from 'components/atoms/svg';
import {styles} from '../styles';
import {globalStyles} from 'src/globalStyle';
import {AVATAR, SaveJob} from 'assets/Svgs';
import AvatarIcon from 'components/molecules/Avatar';

const HeaderAfter = ({
  Title,
  onPress = () => {},
}: {
  Title?: string;
  onPress?: () => void;
}) => {
  const lang = useSelector(selectLang);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        // navigate('UserProfile', { id: item?.userId });
      }}
      style={[
        styles.containerUserSection,
        {backgroundColor: '#FFF', marginTop: 15, marginBottom: 15},
      ]}>
      <View style={globalStyles.leftHeaderContainer}>
        {/* {(item?.avatarCustomUrl == null || item?.avatarCustomUrl == 'null' || item?.avatarCustomUrl == undefined) ? ( */}
        <View
          style={{
            width: 65,
            height: 65,
            borderRadius: 65,
            // borderWidth: 1,
            // borderColor: '#DDD',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: appColors.bg,
          }}>
          <AVATAR height={48} width={48} />
        </View>
        {/* ) : ( */}
        {/* <AvatarIcon
            imgUrl={item?.avatarCustomUrl}
            style={{ height: 65, width: 65 }}
          /> */}
        {/* )} */}
        <View style={{rowGap: 3}}>
          <View style={[globalStyles.leftHeaderContainer, {width: '100%'}]}>
            <Text style={styles.UserName} numberOfLines={1}>
              Charlie ekstrom
            </Text>
          </View>
          <Text style={styles.work}>Hr recruiter at microssoft</Text>
          <View style={styles.followersContainer}>
            <Text style={[styles.text3, {color: appColors.blue2}]}>
              12K {'Followers'}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        // onPress={() => doFollowingOperation()}
        style={styles.folowCotainer}>
        <Text style={[styles.text3, {color: appColors.darkGreen1}]}>
          {/* {exist ? t('unfollow') : t('follow')}
           */}
          Follow
        </Text>
        <RenderSvgIcon icon="PLUSFOLLOW" width={15} height={15} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default HeaderAfter;
