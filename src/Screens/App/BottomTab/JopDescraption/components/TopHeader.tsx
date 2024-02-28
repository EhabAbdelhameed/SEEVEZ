import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import {appColors} from 'theme/appColors';
import {selectLang} from 'src/redux/lang';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {RenderSvgIcon} from 'components/atoms/svg';
import {styles} from '../styles';
import { globalStyles } from 'src/globalStyle';
import { SaveJob } from 'assets/Svgs';

const TopHeader = ({
  Title,
  onPress = () => {},
}: {
  Title?: string;
  onPress?: () => void;
}) => {
  const lang = useSelector(selectLang);
  const navigation = useNavigation();
  return (
    <View style={[globalStyles.leftHeaderContainer,{backgroundColor:'#FFF',paddingHorizontal:20,marginBottom:20}]}>
      
        <View style={{rowGap: 3}}>
          <View style={[globalStyles.leftHeaderContainer, {width: '100%',columnGap:70,marginLeft:3}]}>
            <Text style={styles.UserName} numberOfLines={1}>
            Senior ui ux designer
            </Text>
            <SaveJob />
          </View>
          <View style={{flexDirection: 'row', columnGap: 8, marginLeft: 3}}>
          <Text style={styles.work}>O-Project</Text>
          <Text style={styles.work}>cairo, egypt</Text>
          <Text style={[styles.work, {color: '#00BBB6'}]}>3 hours ago</Text>
        </View>
          <View style={{flexDirection:'row',columnGap:10}}>
          <View style={styles.followersContainer}>
            <Text style={[styles.text3, {color: appColors.blue2}]}>
              Full time 
            </Text>
          </View>
          <View style={[styles.followersContainer,{backgroundColor:'#E6FAFA'}]}>
            <Text style={[styles.text3, {color: '#00928E'}]}>
              On-site
            </Text>
          </View>
          <View style={[styles.followersContainer,{backgroundColor:'#FDF7E6'}]}>
            <Text style={[styles.text3, {color: '#A57900'}]}>
            23 applicants
            </Text>
          </View>
          </View>
        </View>
      </View>
  );
};

export default TopHeader;


