import {ScrollView, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from 'components/molecules/Header';
import {styles} from './styles';
import Complete from './components/CompleteCompany';


import {useNavigation} from '@react-navigation/native';


import {selectUser} from 'src/redux/auth';
import {useSelector} from 'react-redux';
import AppSlice from 'src/redux/app';
import {useAppDispatch} from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import RecordVideoCardCompany from './components/RecordVideocompany';
import InfoCardCompany from './components/InfoCompany';
import AboutCardCompany from './components/AboutCompany';

const ProfileCompanyScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      dispatch(AppThunks.GetProfileInfo());
      dispatch(AppSlice.changeDone(false));
    });
    return RenderFunction;
  }, [navigation]);
  const CurrentUserData = useSelector(selectUser);
  return (
    <SafeAreaView edges={['top']} style={styles.Container}>
      <Header Title="My profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RecordVideoCardCompany data={CurrentUserData?.user_data?.cv_media} />
        <View style={styles.PaddingContainer}>
        {parseInt(CurrentUserData?.user_data?.complete_progress)==100?null:
          <Complete
            pers={parseInt(CurrentUserData?.user_data?.complete_progress)}
          />}
          <InfoCardCompany data={CurrentUserData} />
          <AboutCardCompany data={CurrentUserData?.about} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileCompanyScreen;
