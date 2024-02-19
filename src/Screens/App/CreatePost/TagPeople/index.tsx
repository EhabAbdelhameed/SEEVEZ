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
import {ADDONTHEROPTION, AVATAR, PAUSE, VOICE, WAVE} from 'assets/Svgs';
import Button from 'components/molecules/Button';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Header from './Header';
import {appColors, appSizes} from 'theme';
import {useSelector} from 'react-redux';
import {selectPhotoData} from 'src/redux/app';
import Swiper from 'react-native-swiper';
import CV from '../CreatePollLink/components/CV';
import Video from 'react-native-fast-video';
import {selectUser} from 'src/redux/auth';
import AudioComponent from '../CreateShareLink/components/Audio';
import PollComponent from '../CreateShareLink/components/Poll';
import LinearGradient from 'react-native-linear-gradient';
import ExternalLinks from '../CreatePollLink/components/ExternalLink';
import Market from '../CreatePollLink/components/Market';

const TagPeople = () => {
  const navigation = useNavigation<any>();
  const CurrentUserData = useSelector(selectUser);
  const _handleNavigation = useCallback(() => {
    navigation.goBack();
  }, []);
  const photoData = useSelector(selectPhotoData);
  console.log('EHAB', photoData?.image);
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
        <View
          style={{
            paddingHorizontal: 20,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {photoData.key == '3' ? (
            <View
              style={[
                styles.bgContainer,
                {
                  width: '100%',
                  height: 450,
                  alignSelf: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Swiper showsPagination={false} loop={false}>
                {photoData?.image?.map((asset: any, index: number) => (
                  <ImageBackground
                    source={{
                      uri: asset?.node?.image?.uri,
                    }}
                    style={[
                      styles.bgContainer,
                      {
                        width: 320,
                        height: 400,
                        alignSelf: 'center',
                        alignItems: 'center',
                      },
                    ]}
                    resizeMode="cover"></ImageBackground>
                ))}
              </Swiper>
              {photoData?.pdf == null || photoData?.pdf?.length == 0 ? null : (
                <CV />
              )}
              {photoData?.exterinalLinks == null ||
              photoData?.exterinalLinks?.length == 0 ? null : (
                <ExternalLinks />
              )}
              {photoData?.market == null ||
              photoData?.market?.length == 0 ? null : (
                <Market />
              )}
            </View>
          ) : photoData.key == '4' || photoData.key == '5' ? (
            <View
              style={[
                styles.bgContainer,
                {
                  width: '100%',
                  height: 400,
                  alignSelf: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Video
                resizeMode="cover"
                //   controls={true}
                repeat
                source={{
                  uri:
                    photoData.key == '4'
                      ? photoData?.image
                      : photoData?.image?.assets[0].uri,
                }}
                style={{
                  width: '100%',
                  height: 400,
                  borderRadius: 16,
                }}
              />
              {photoData?.pdf == null || photoData?.pdf?.length == 0 ? null : (
                <CV />
              )}
              {photoData?.exterinalLinks == null ||
              photoData?.exterinalLinks?.length == 0 ? null : (
                <ExternalLinks />
              )}
              {photoData?.market == null ||
              photoData?.market?.length == 0 ? null : (
                <Market />
              )}
            </View>
          ) : photoData.key == '6' ? (
            photoData?.image == '#0f0' ? (
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#EDBC33', '#1D5EDD', '#00CEC8']}
                style={[
                  styles.bgContainer,
                  {
                    height: 420,
                    // backgroundColor: audioData?.image,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}>
                <AudioComponent />
              </LinearGradient>
            ) : (
              <View
                style={[
                  styles.bgContainer,
                  {
                    height: 420,
                    backgroundColor:
                      photoData?.image == '#0f0' ? null : photoData?.image,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}>
                <AudioComponent />
              </View>
            )
          ) : photoData.key == '7' ? (
            photoData?.image == '#0f0' ? (
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#EDBC33', '#1D5EDD', '#00CEC8']}
                style={[
                  styles.bgContainer,
                  {
                    height: 420,
                    // backgroundColor: audioData?.image,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}>
                <PollComponent />
              </LinearGradient>
            ) : (
              <View
                style={[
                  styles.bgContainer,
                  {
                    height: 420,
                    backgroundColor:
                      photoData?.image == '#0f0' ? null : photoData?.image,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}>
                <PollComponent />
              </View>
            )
          ) : (
            <ImageBackground
              source={{
                uri:
                  photoData.key == '1'
                    ? photoData?.image?.node?.image?.uri
                    : photoData.key == 2
                    ? photoData?.image?.assets[0]?.uri
                    : 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
              }}
              style={[
                styles.bgContainer,
                {
                  width: '100%',
                  height: 450,
                  alignSelf: 'center',
                  alignItems: 'center',
                },
              ]}
              resizeMode="cover">
              {photoData?.pdf == null || photoData?.pdf?.length == 0 ? null : (
                <CV />
              )}
              {photoData?.exterinalLinks == null ||
              photoData?.exterinalLinks?.length == 0 ? null : (
                <ExternalLinks />
              )}
              {photoData?.market == null ||
              photoData?.market?.length == 0 ? null : (
                <Market />
              )}
            </ImageBackground>
          )}
          {/* <View style={{height:appSizes.height*}}/> */}
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchPeople')}
            style={styles.AddOptionContainer}>
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