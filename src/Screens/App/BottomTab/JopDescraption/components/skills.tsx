import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {Close} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';

const JobSkills = () => {
  const [seeAllExperiences, setSeeAllExperiences] = useState(false);
  const navigation = useNavigation<any>();
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  const data = [
    {name: 'Design'},
    {name: 'Prototype'},
    {name: 'Research'},
    {name: 'Wireframe'},
    {name: 'Ui design'},
    {name: 'Figma'},
    {name: 'Adobe Adobe XD'},
  ];
  return (
    <View style={{marginTop:20,marginBottom:15}}>
     
        {data?.length == 0 ? null : (
        
            <FlatList
              data={data}
              contentContainerStyle={{rowGap: 10}}
              numColumns={2}
              scrollEnabled={false}
              renderItem={({item}) => (
                <View style={styles.smallCardContainer}>
                  <Text style={styles.smallCardText}>{item?.name}</Text>
                  <Close />
                </View>
              )}
              // ListFooterComponent={() => <FooterSectionUsers />}
            />
       
        )}

    </View>
  );
};

export default JobSkills;

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
    textAlign: 'left',
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
    textAlign: 'left',
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
