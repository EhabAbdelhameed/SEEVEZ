import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {Close} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';

const SkillsProfileCard = ({title, data}: {title?: any; data?: any}) => {
  const [seeAllExperiences, setSeeAllExperiences] = useState(false);
  const navigation = useNavigation<any>();

  return (
    <View style={styles.CardContainer}>
      <View style={styles.secContainer}>
        <View style={styles.Row}>
          <Text style={styles.Title}>{title}</Text>
          <View style={styles.Row2}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('UpdateSkills', {
                  title: title == 'Interests' ? 'Interests' : 'Skills',
                })
              }>
              <RenderSvgIcon
                icon="PLUSFOLLOW"
                style={{marginRight: 10}}
                width={20}
                height={20}
                color={appColors.primary}
              />
            </TouchableOpacity>
            {data?.length == 0 ?null:
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              disabled={data?.length == 0 ? true : false}
              onPress={() =>
                navigation.navigate('UpdateSkillsCard', {
                  title: title == 'Interests' ? 'Interests' : 'Skills',
                })
              }>
              <RenderSvgIcon
                icon="PEN"
                width={20}
                height={20}
                color={appColors.primary}
              />
            </TouchableOpacity>}
          </View>
        </View>
        {data?.length == 0 ? null : (
          <View style={styles.con}>
            {data?.map((item: any, index: any) =>
              seeAllExperiences ? (
                <View style={styles.smallCardContainer}>
                  <Text style={styles.smallCardText}>{item?.name}</Text>
                  <Close />
                </View>
              ) : index == 0 || index == 1 ? (
                <View style={styles.smallCardContainer}>
                  <Text style={styles.smallCardText}>{item?.name}</Text>
                  <Close />
                </View>
              ) : null,
            )}
          </View>
        )}
      </View>

      <View style={styles.devider} />
      <TouchableOpacity
        disabled={
          data?.length == 0 || data?.length == 1 || data?.length == 2
            ? true
            : false
        }
        onPress={() => setSeeAllExperiences(!seeAllExperiences)}>
        <Text style={styles.seeAll}>
          See {seeAllExperiences ? 'Less' : 'All'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SkillsProfileCard;

const styles = StyleSheet.create({
  CardContainer: {
    paddingHorizontal: 10,
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
  smallCardContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderColor: appColors.lightPurple,
    borderWidth: 1,
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: appColors.bg,
    marginRight: 10,
    marginBottom: 10,
  },
  con: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  smallCardText: {
    fontSize: 12,
    fontWeight: '400',
    color: appColors.blue2,
    marginRight: 5,
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
