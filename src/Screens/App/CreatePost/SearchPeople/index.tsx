import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback} from 'react';
import {styles} from './styles';
import Polls from 'screens/App/BottomTab/Home/components/Polls';
import {ADDONTHEROPTION} from 'assets/Svgs';
import Button from 'components/molecules/Button';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Header from './components/Header';
import {appColors} from 'theme';
import {FlatList} from 'react-native-gesture-handler';
import Flatlist from './components/FlatList';

const SearchPeople = () => {
  const navigation = useNavigation();
  const _handleNavigation = useCallback(() => {
    navigation.navigate('CreatePollLink');
  }, []);
  return (
    <SafeAreaView edges={['top']} style={{flex: 1}}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          alignItems: 'center',
          // paddingBottom: 20,
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}>
        <Header />
        <View style={{ marginTop: 20}}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Noto Sans',
              fontSize: 23,
              fontWeight: '700',
            }}>
            Search for people
          </Text>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Noto Sans',
              fontSize: 18,
              fontWeight: '500',
            }}>
            Only people on your list can see this reel
          </Text>
        </View>

        <Flatlist />
        <Button
          text="Done"
          onPress={_handleNavigation}
          style={{width: '90%'}}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SearchPeople;
