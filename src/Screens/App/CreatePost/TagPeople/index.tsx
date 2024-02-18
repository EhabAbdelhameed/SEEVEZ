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
import {appColors} from 'theme';
import {useSelector} from 'react-redux';
import {selectPhotoData} from 'src/redux/app';
import Swiper from 'react-native-swiper';
import CV from '../CreatePollLink/components/CV';
import Video from 'react-native-fast-video';
import { selectUser } from 'src/redux/auth';

const TagPeople = () => {
  const navigation = useNavigation<any>();
  const CurrentUserData = useSelector(selectUser);
  const _handleNavigation = useCallback(() => {
 navigation.goBack()
;
  }, []);
  const photoData = useSelector(selectPhotoData);
  console.log("EHAB",photoData?.image)
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
              <CV />
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
              <CV />
            </View>
          ) : photoData.key == '6' ? (
            <ImageBackground
            source={photoData?.image}
            
            style={[
              styles.bgContainer,
              {
                width: '100%',
                height: 450,
                alignSelf: 'center',
                alignItems: 'center',
              },
            ]}
            resizeMode="stretch">
            {/* <TouchableOpacity style={{width:'100%',justifyContent:'center',alignItems:'center'}} onPress={isPlaying ? startPlayback : stopPlayback}> */}
      
            <View
              style={{
                backgroundColor: '#FFF',
                width: '80%',
                paddingHorizontal: 20,
                borderRadius: 20,
                paddingVertical: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  columnGap: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 20,
                }}>
                <TouchableOpacity
                >
                  <PAUSE />
                </TouchableOpacity>
                {/* <Svg height="40" width="80%">
                  <Path
                    d={`M${waveformPoints
                      .map((point: any) => `${point.x},${point.y}`)
                      .join(' ')}`}
                    fill="none"
                    stroke="blue"
                    strokeWidth="2"
                  />
                </Svg> */}
                <WAVE/>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40,
                    // borderWidth: 1,
                    // borderColor: '#DDD',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: appColors.bg,
                  }}>
                  {CurrentUserData?.avatar == null ? (
                    <AVATAR height={32} width={32} />
                  ) : (
                    <Image
                      source={{uri: CurrentUserData?.avatar}}
                      style={{width: 40, height: 40, borderRadius: 40}}
                      resizeMode="cover"
                    />
                  )}
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 10,
                      // borderWidth: 1,
                      // borderColor: '#DDD',
                      justifyContent: 'center',
                      position: 'absolute',
                      bottom: 2,
                      right: 2,
                      alignItems: 'center',
                      backgroundColor: '#FFF',
                    }}>
                    <VOICE height={10} width={10} />
                  </View>
                </View>
              </View>
          
            </View>
            {/* </TouchableOpacity>  */}
          </ImageBackground> //'#1
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
              {/*         
             <Poll/> */}
              <CV />
            </ImageBackground>
          )}

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
