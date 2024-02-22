// ReelsScreen.js
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  Alert,
  Image,
  Platform,
  TouchableNativeFeedback,
  Pressable,
  ImageBackground,
  useWindowDimensions,
  Linking,
  ActivityIndicator,
  NativeModules,
} from 'react-native';
import {styles} from './styles';
import {data, getTime} from './fucntions/helper';
import ContentVideo from './components/ContentVideo';
import RenderVideo from './components/Video';
import {appColors} from 'theme/appColors';
import {appSizes} from 'theme/appSizes';

import {globalStyles} from 'src/globalStyle';
import {useAppDispatch} from 'src/redux/store';
import {useNavigation} from '@react-navigation/native';
import AppSlice, {selectAccessToken, selectPolls, selectPosts} from 'src/redux/app';
import AppThunks from 'src/redux/app/thunks';
import {useSelector} from 'react-redux';
import AuthSlice, {selectUser} from 'src/redux/auth';
import Video from 'react-native-fast-video';
import Swiper from 'react-native-swiper';
import CVAddones from './components/CVAddones';
import Audio from './components/Audio';
import Boll from './components/Bolls';
import LinearGradient from 'react-native-linear-gradient';
import TextLinks from './components/TextLinks';
const ReelsScreen = () => {
  const CurrentUserData = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const postsData = useSelector(selectPosts);
  const polls = useSelector(selectPolls);



  // console.log('posts', JSON.stringify(postsData));

  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  

  // const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  React.useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      setLoader(true)
      dispatch(AppThunks.GetMyReels(CurrentUserData?.user_data?.id)).then(
        (res: any) => {
          setLoader(false)
        },
      );

      dispatch(AppSlice.changeDone(false));
    });
    return RenderFunction;
  }, [navigation]);
  const AccessToken = useSelector(selectAccessToken);
  useEffect(() => {
    AccessToken ? dispatch(AuthSlice.chnageisAuth(false)) : null;
  }, [AccessToken]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState<any>(0);
  const videoRef: any = useRef(null);
  const flatListRef: any = useRef(null);
  const [loader, setLoader] = React.useState(false)
  const [loading, setLoading] = useState(true);

  const [video, setVideo] = React.useState({
    currentTime: 0,
    duration: 0.1,
    paused: false,
    overlay: true,
    fulltime: 0.1,
  });
  const renderSwiper = (item: any) => {
    return (
      <View
        style={[
          {
            width,
            height,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
        <Swiper
          ref={swiperRef}
          loop={false}
          // showsButtons
          // onIndexChanged={index => setCurrentIndex(index)}
          showsPagination={true}
          paginationStyle={{top: -500}}
          dotStyle={{
            backgroundColor: 'rgba(255,255,255,.3)',
            width: 8,
            height: 8,
          }}
          activeDotStyle={{
            backgroundColor: appColors.primary,
            width: 10,
            height: 10,
          }}>
          {item?.metadata?.attachments?.map((asset: any, index: any) => (
            <View key={index}>
              {/* <TouchableOpacity onPress={() => console.log('Swiper item pressed')}> */}
              <ImageBackground
                source={{uri: asset?.file?.fileUrl + '?size=full'}}
                style={{
                  width,
                  height,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                resizeMode="contain">
                {/* Render your content here */}
              </ImageBackground>
              {/* </TouchableOpacity> */}
            </View>
          ))}
        </Swiper>
        {item?.metadata?.pdfData == null ? null : (
          <CVAddones data={item?.metadata} />
        )}
         {item?.metadata?.externalLinks == null ? null : (
          <TextLinks data={item?.metadata} />
        )}
      </View>
    );
  };

  const renderAudio = (item: any) => {
    return item?.metadata?.color == '#0f0' ? (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#EDBC33', '#1D5EDD', '#00CEC8']}
        style={[
          {
            width: width,
            height: height,

            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
         <Audio data={item?.metadata} />
      </LinearGradient>
    ) : (
      <View
        style={[
          {
            width: width,
            height: height,
            backgroundColor: item?.metadata?.color,

            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
        <Audio data={item?.metadata} />
      </View>
    );
  };
  const renderPoll = (item: any) => {

    return polls?.map((attach: any)=>(
      attach?.pollId==item?.metadata?.poll?
      item?.metadata?.color == '#0f0' ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#EDBC33', '#1D5EDD', '#00CEC8']}
          style={[
            {
              width: width,
              height: height,
  
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}>
           <Boll data={attach} />
        </LinearGradient>
         ) : (
          <View
          style={[
            {
              width: width,
              height: height,
              backgroundColor: item?.metadata?.color,
    
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}>
            <Boll data={attach} />
          </View>
        ):null

    )) 
   
  };
  const renderImage = (attach: any, item: any) => {
    return (
      <ImageBackground
        source={{
          uri: attach?.file?.fileUrl + '?size=full',
        }}
        style={[
          {
            width: width,
            height: height,
            alignSelf: 'center',
            alignContent: 'center',

            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}
        resizeMode="contain">
        {item?.metadata?.pdfData == null ? null : (
          <CVAddones data={item?.metadata} />
        )}
          {item?.metadata?.externalLinks == null ? null : (
          <TextLinks data={item?.metadata} />
        )}
      </ImageBackground>
    );
  };
  const renderVideo = (attach: any,item:any) => {
    return (
      <View>
      <Video
        ref={player => {
          videoRef.current = player;
        }}
        source={{uri: attach?.fileUrl}}
        onLoad={load}
        //   fullscreenOrientation={'portrait'}
        // onProgress={progress}
        // muted={isMuted}
        // paused={video.paused}
        // paused={currentVideoIndex != index ? false : true}
        style={{
          width: width,
          // height: appSizes.height ,

          height: height,
          // backgroundColor:"#a00"
        }}
        resizeMode="contain"
        onEnd={() => {
          videoRef.current.seek(0);
        }}
        onError={err => {
          Alert.alert(JSON.stringify(err));
        }}
        bufferConfig={{
          minBufferMs: 15000,
          maxBufferMs: 50000,
          bufferForPlaybackMs: 2500,
          bufferForPlaybackAfterRebufferMs: 5000,
        }}
        selectedVideoTrack={{
          type: 'auto',
          value: '180',
        }}
      />
        {item?.metadata?.pdfData == null ? null : (
          <CVAddones data={item?.metadata} />
        )}
          {item?.metadata?.externalLinks == null ? null : (
          <TextLinks data={item?.metadata} />
        )}
      </View>
    );
  };

  const [isMuted, setIsMuted] = React.useState(false);
  // const [screenType, setScreenType] = React.useState('cover');
  const scrollToTop = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({animated: true, offset: 0});
    }
  };

  const load = ({duration}: any) => {
    setVideo(prev => ({...prev, duration}));
    setLoading(false);
  };

  const {height, width} = useWindowDimensions();
  const renderVideoItem = ({item, index}: any) => {
    return item?.metadata?.attachments == null &&
      item?.metadata?.poll == null ? null : (
      <View
        style={{
          flex: 1,
          zIndex: 1000,
          width: width,
          height: height,
          // height:"100%",
          backgroundColor: appColors.black,
        }}>
        <>
          {currentVideoIndex == index ? (
            item?.metadata?.attachments == null ? (
              renderPoll(item)
            ) : Array.isArray(item?.metadata?.attachments) ? (
              item?.metadata?.attachments?.length > 1 ? (
                renderSwiper(item)
              ) : (
                item?.metadata?.attachments?.map((attach: any) =>
                  renderImage(attach, item),
                )
              )
            ) : item?.metadata?.attachments?.type == 'video' ? (
              renderVideo(item?.metadata?.attachments,item)
            ) : (
              renderAudio(item)
            )
          ) : (
            <View>
              <Image
                source={require('../../../assets/images/loading.gif')}
                style={{
                  width: 100,
                  height: 100,
                  // backgroundColor: "#589",
                  zIndex: 100,
                  alignSelf: 'center',
                  marginTop: appSizes.height / 2.5,
                }}
                resizeMode="contain"
              />
            </View>
          )}

          <ContentVideo data={item} />
        </>
      </View>
    );
  };

  return (
    // <SafeAreaView style={globalStyles.screen} edges={['top']}>
    // <View style={globalStyles.screen}>
    loader ?
    <ActivityIndicator size={50} style={{marginTop:300}}/>:
    !postsData ||postsData[0]?.postId==null ? (
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFF',
        }}>
        <Text style={{color: '#000', fontSize: 20}}>
          {' '}
          No posts please create post
        </Text>
      </View>
    ) : (
      <FlatList
        ref={flatListRef}
        // style={{flex: 1}}
        // contentContainerStyle={{flex:1}}
        data={postsData}
        renderItem={renderVideoItem}
        pagingEnabled
        onMomentumScrollEnd={event => {
          const index = Math.floor(
            event.nativeEvent.contentOffset.y /
              event.nativeEvent.layoutMeasurement.height,
          );
          setVideo({
            currentTime: 0,
            duration: 0.1,
            paused: false,
            overlay: true,
            fulltime: 0.1,
          });
          setCurrentVideoIndex(index);
          setLoading(true);
        }}
        keyExtractor={item => item._id}
        // scrollEventThrottle={16} // Adjust this value for smoother scrolling events
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        snapToAlignment="start"
        decelerationRate={'fast'}
      />
    )
    // {/* </View> */}
  );
};

export default ReelsScreen;
