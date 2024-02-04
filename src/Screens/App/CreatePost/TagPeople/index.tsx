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
import Header from './Header';
import { appColors } from 'theme';

const TagPeople = () => {
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
        <View style={{paddingHorizontal:20,width:'100%',justifyContent:'center',alignItems:'center'}}>
        <ImageBackground
          source={require('src/assets/images/ReelImage.png')}
          style={[
            styles.bgContainer,
            {
              width: '100%',
              height: 480,
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: 50,
              borderWidth:2,borderColor:appColors.primary
            },
          ]}
          resizeMode="cover"
        />

        <TouchableOpacity style={styles.AddOptionContainer}>
          <ADDONTHEROPTION />
          <Text style={styles.text2}>Tap to tag people</Text>
        </TouchableOpacity>
        <Button
          text="Done"
          onPress={_handleNavigation}
          style={{width: '100%'}}
        />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default TagPeople;
