import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {Close} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
const SkillsCard = ({title, data}: {title?: string; data?: any[]}) => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.CardContainer}>
      <View style={styles.secContainer}>
        <View style={styles.Row}>
          <Text style={styles.Title}>{title}</Text>
          <View style={styles.Row2}>
            {/* <RenderSvgIcon icon='PLUSFOLLOW' style={{ marginRight: 10 }} width={20} height={20} color={appColors.primary} /> */}
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('UpdateSkills', {
                  title: title == 'Interests' ? 'Interests' : 'Skills',
                })
              }>
              <RenderSvgIcon
                icon="PLUSFOLLOW"
                width={20}
                height={20}
                color={appColors.primary}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.con}>
          {data?.map(item => (
            <View style={styles.smallCardContainer}>
              <Text style={styles.smallCardText}>{item.name}</Text>
              <RenderSvgIcon
                icon="PLUSFOLLOW"
                width={20}
                height={20}
                color={'#8AE8E6'}
              />
            </View>
          ))}
        </View>
      </View>

      {/* <View style={styles.devider} />
            <Text style={styles.seeAll}>See all</Text> */}
    </View>
  );
};

export default SkillsCard;


