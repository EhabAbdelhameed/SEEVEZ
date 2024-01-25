import {ScrollView, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from 'components/molecules/Header';
import {styles} from './styles';

import InfoCard from './components/Info/Info';
import AboutCard from './components/About/About';

import {useNavigation} from '@react-navigation/native';

import RecordVideo from './components/RecordVideo/RecordVideo';

import {useAppDispatch} from 'src/redux/store';
import {useSelector} from 'react-redux';
import {selectUser} from 'src/redux/auth';
import AppSlice from 'src/redux/app';

const CompleteCompanyProfileScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const CurrentUserData = useSelector(selectUser);
  useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      dispatch(AppSlice.changeDone(false));
    });
    return RenderFunction;
  }, [navigation]);

  return (
    <SafeAreaView edges={['top']} style={styles.Container}>
      <Header Title="My profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RecordVideo user_data={CurrentUserData} />
        <View style={styles.PaddingContainer}>
          <InfoCard user_data={CurrentUserData} />
          <AboutCard About={CurrentUserData} />
        </View>

        {/* <View style={{ height: 20 }} /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompleteCompanyProfileScreen;
