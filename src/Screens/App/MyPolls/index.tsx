import {ActivityIndicator, ScrollView, View} from 'react-native';
import React, { useEffect } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from 'components/molecules/Header';
import {styles} from './style';

import AuthSlice, {selectUser} from 'src/redux/auth';
import {useSelector} from 'react-redux';
import AppSlice, { selectAccessToken, selectPolls } from 'src/redux/app';
import {useAppDispatch} from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import { useNavigation } from '@react-navigation/native';
import PollHeader from './components/Header';
import Polls from './components/Polls';
import { FlatList } from 'react-native-gesture-handler';
import Footer from './components/footer';


const MYPolls = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const [loader, setLoader] = React.useState(false)
  React.useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      setLoader(true)
      dispatch(AppThunks.GetMyReels(CurrentUserData?.user_data?.id)).then(
        (res: any) => {
          setLoader(false)
        },
      );

    
    });
    return RenderFunction;
  }, [navigation]);
  const polls = useSelector(selectPolls);
   
  const CurrentUserData = useSelector(selectUser);
  
  // console.log("This Data From Hossam ",JSON.stringify(CurrentUserData))
  return (
    <SafeAreaView edges={['top']} style={styles.Container}>
      <Header Title="My poll" onPress={() => navigation.goBack()} />
      <View style={styles.PaddingContainer}>
      {loader ?
    <ActivityIndicator size={50} style={{marginTop:300}}/>:

      <FlatList
            // scrollEnabled={false}
            data={polls}
            // style={{flex:1}}
            // numColumns={2}
            contentContainerStyle={{ paddingBottom: 90 }} 
            renderItem={({item, index}) => (
                <View key={index} style={styles.bigContainer}>
                <PollHeader/>
                {polls[index]?.pollId==null?null:<Polls data={item}/> }
                <Footer/>
                </View>
            )}
            keyExtractor={(item) => item?.pollId?.toString()}
          />
            }
      </View>
      
    </SafeAreaView>
  );
};

export default MYPolls;
