import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AvatarIcon from '../../../../../Components/molecules/Avatar';
import {dummyAvatar} from '../../../../../Dummy';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {useSelector} from 'react-redux';
import {selectUser} from 'src/redux/auth';
import {AVATAR} from 'assets/Svgs';

const Profile = () => {
  const CurrentUserData = useSelector(selectUser);
  return (
    <View style={styles.containerProfile}>
      <View style={{marginBottom: 10}}>
        {CurrentUserData?.avatar == null ? (
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 70,
              // borderWidth: 1,
              // borderColor: '#DDD',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#E8EFFC',
            }}>
            <AVATAR height={48} width={48} />
          </View>
        ) : (
          <AvatarIcon imgUrl={CurrentUserData?.avatar} noActive />
        )}
        <View style={styles.absIconProfile}>
          <RenderSvgIcon icon="RIGHTACCOUNT" width={16} />
        </View>
      </View>
      <Text style={styles.text1}>{CurrentUserData?.name}</Text>
      <Text style={styles.text2}>
        {CurrentUserData?.job_title == null ? null : CurrentUserData?.job_title}
      </Text>
    </View>
  );
};

export default Profile;
