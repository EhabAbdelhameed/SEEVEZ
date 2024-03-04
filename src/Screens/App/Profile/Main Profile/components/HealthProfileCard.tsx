import {
  FlatList,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {useNavigation} from '@react-navigation/native';
import {PDF} from 'assets/Svgs';
import {selectUser} from 'src/redux/auth';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';

const HealthProfileCard = (data: any) => {
  const CurrentUserData = useSelector(selectUser);

  const navigation = useNavigation();
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();

  return (
    <View style={styles.CardContainer}>
      <View style={styles.secContainer}>
        <View style={styles.Row}>
          <Text style={styles.Title}>Health profile</Text>
          <TouchableOpacity
            style={{
              height: 30,
              width: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('HealthProfile')}>
            <RenderSvgIcon
              icon="PEN"
              width={20}
              height={20}
              color={appColors.primary}
            />
          </TouchableOpacity>
        </View>
        {CurrentUserData?.special_needs!=null?
        <View>
          <Text
            style={{
              fontFamily: 'Noto Sans',
              fontSize: 16,
              color: '#1C1C1C',
              fontWeight: '700',
            }}>
            Special Needs
          </Text>
          <Text
            style={{
              fontFamily: 'Noto Sans',
              fontSize: 14,
              color: '#1C1C1C',
              fontWeight: '400',
              marginLeft:10,
              marginTop:3
            }}>
            {CurrentUserData?.special_needs}
          </Text>
        </View>:null}
        {CurrentUserData?.disabilities!=null?
        <View>
          <Text
            style={{
              fontFamily: 'Noto Sans',
              fontSize: 16,
              color: '#1C1C1C',
              fontWeight: '700',
            }}>
            Disabilities
          </Text>
          <Text
            style={{
              fontFamily: 'Noto Sans',
              fontSize: 14,
              color: '#1C1C1C',
              fontWeight: '400',
              marginLeft:10,
              marginTop:3
            }}>
            {CurrentUserData?.disabilities}
          </Text>
        </View>:null}
        {CurrentUserData?.height!=null&&CurrentUserData?.weight!=null?
        <View style={{flexDirection:'row'}}>
          <View style={{width:'50%'}}>
          <Text
            style={{
              fontFamily: 'Noto Sans',
              fontSize: 16,
              color: '#1C1C1C',
              fontWeight: '700',
            }}>
            Height
          </Text>
          <Text style={{
              fontFamily: 'Noto Sans',
              fontSize: 14,
              color: '#1C1C1C',
              fontWeight: '400',
              marginLeft:10,
              marginTop:3
            }}>{CurrentUserData?.height} cm</Text>
          </View>
          <View>
          <Text
             style={{
              fontFamily: 'Noto Sans',
              fontSize: 16,
              color: '#1C1C1C',
              fontWeight: '700',
            }}>
            Weight
          </Text>
          <Text style={{
              fontFamily: 'Noto Sans',
              fontSize: 14,
              color: '#1C1C1C',
              fontWeight: '400',
              marginLeft:10,
              marginTop:3
            }}>{CurrentUserData?.weight} Kg</Text>
          </View>
        </View>
           :null} 
        {CurrentUserData?.smoker!=null?
        <View style={{marginTop:10}}>
          <Text
            style={{
              fontFamily: 'Noto Sans',
              fontSize: 16,
              color: '#1C1C1C',
              fontWeight: '700',
            }}>
           Smoker
          </Text>
          <Text
            style={{
              fontFamily: 'Noto Sans',
              fontSize: 14,
              color: '#1C1C1C',
              fontWeight: '400',
              marginLeft:10,
              marginTop:3
            }}>
          {CurrentUserData?.smoker==0?"No":"Yes"}
          </Text>
        </View>:null}
        
      </View>
    </View>
  );
};

export default HealthProfileCard;

const styles = StyleSheet.create({
  CardContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '100%',
    backgroundColor: appColors.white,
    borderRadius: 25,
    marginTop: 15,
  },
  InfoText: {
    fontWeight: '600',
    color: appColors.black,
    marginLeft: 7,
    textAlign: 'left',
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
  Row1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
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
  Title2: {
    fontSize: 19,
    fontWeight: '600',
    color: appColors.black,
    textAlign: 'left',
  },
  Image: {
    height: 65,
    width: 65,
    borderRadius: 65,
  },
  CompanyName: {
    fontSize: 15,
    fontWeight: '400',
    color: appColors.black,
    marginTop: 3,
  },
  des: {
    fontSize: 11,
    fontWeight: '400',
    color: appColors.black,
    marginTop: 3,
  },
  Title3: {
    fontWeight: '600',
    color: appColors.black,
    marginTop: 15,
    textAlign: 'left',
  },
  PostText: {
    fontSize: 12,
    fontWeight: '400',
    color: appColors.black,
    textAlign: 'left',
  },
  PDFContainer: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.lightGrey3,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center',
  },
});
