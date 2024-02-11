import {ScrollView, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from 'components/molecules/Header';
import {styles} from './styles';



import {useNavigation} from '@react-navigation/native';



import {useAppDispatch} from 'src/redux/store';
import {useSelector} from 'react-redux';
import {selectUser} from 'src/redux/auth';
import AppSlice from 'src/redux/app';
import AppThunks from 'src/redux/app/thunks';
import RecordVideoCompany from './components/RecordVideo/RecordVideoCompany';
import AboutCompanyCard from './components/About/About';
import InfoCompanyCard from './components/Info/Info';
import InfoCardCompany from '../Profile/Main Company Profile/components/InfoCompany';
import Complete from './components/Complete/Complete';


const CompleteCompanyProfileScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const CurrentUserData = useSelector(selectUser);
  console.log(JSON.stringify(CurrentUserData))

  React.useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      dispatch(AppThunks.GetProfileInfo()).then(
        (res: any) => {
           
        },
      );;
      dispatch(AppSlice.changeDone(false));
    });
    return RenderFunction;
  }, [navigation]);

  return (
    <SafeAreaView edges={['top']} style={styles.Container}>
      <Header Title="My profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RecordVideoCompany user_data={CurrentUserData?.user_data?.cv_media} />
        <View style={styles.PaddingContainer}>
        {parseInt(CurrentUserData?.user_data?.complete_progress)==100?null:
          <Complete
            pers={parseInt(CurrentUserData?.user_data?.complete_progress)}
          />}
        
          <InfoCardCompany data={CurrentUserData} />
          <AboutCompanyCard data={CurrentUserData?.about} />
        </View>
       

        {/* <View style={{ height: 20 }} /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompleteCompanyProfileScreen;
