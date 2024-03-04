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
  BackHandler,
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
import AppSlice, {
  selectAccessToken,
  selectPolls,
  selectPosts,
} from 'src/redux/app';

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
import JopOppertunity from './components/JobOppertienty';
import DeviceInfo from 'react-native-device-info';
import {RenderSvgIcon} from 'components/atoms/svg';
import {ScreenHeight} from 'react-native-elements/dist/helpers';
import {LOCATION, PlaceHolderReels} from 'assets/Svgs';
import Header from 'components/molecules/Header';
const ReelsScreen = () => {
  const CurrentUserData = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const postsData = useSelector(selectPosts);
  const polls = useSelector(selectPolls);

  // console.log('posts', JSON.stringify(postsData));

  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: any) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height - 100 + contentOffset.y >=
      ScreenHeight - paddingToBottom
    );
  };
  const ifCloseToTop = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: any) => {
    return contentOffset.y == 0;
  };
  // const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  React.useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      setLoader(true);
      dispatch(AppThunks.GetMyReels(CurrentUserData?.user_data?.id)).then(
        (res: any) => {
          setLoader(false);
        },
      );

      dispatch(AppSlice.changeDone(false));
    });
    return RenderFunction;
  }, [navigation]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );

    return () => {
      backHandler.remove();
    };
  }, []);
  const handleBackPress = () => {
    navigation.navigate('Home');
    return true; // Prevent default behavior (exit the app)
  };
  // console.log("Posts",JSON.stringify(postsData))
  const [currentVideoIndex, setCurrentVideoIndex] = useState<any>(0);
  const videoRef: any = useRef(null);
  const flatListRef: any = useRef(null);
  const [loader, setLoader] = React.useState(false);
  const [loading, setLoading] = useState(true);

  const [video, setVideo] = React.useState({
    currentTime: 0,
    duration: 0.1,
    paused: false,
    overlay: true,
    fulltime: 0.1,
  });
  const hasNotch = DeviceInfo.hasNotch();
  const renderSwiper = (item: any, key: any) => {
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
        {item?.metadata?.jobOpportunityData == null ||
        !item?.metadata?.jobOpportunityData ? null : (
          <JopOppertunity data={item?.metadata} />
        )}
          {item?.metadata?.location == null ||
        item?.metadata?.location == '' ? null : (
          <View
            style={{
              position: 'absolute',
              top: 100,
              left: 10,
              flexDirection: 'row',
              columnGap: 10,
              backgroundColor: '#FFF',
              borderRadius: 16,
              width: 180,
              paddingHorizontal: 10,
              paddingVertical: 6,
            }}>
            <LOCATION />
            <Text
              style={{
                color: '#10347A',
                fontFamily: 'Noto Sans',
                fontSize: 12,
                fontWeight: '400',
              }}>
              {item?.metadata?.location}
            </Text>
          </View>
        )}
        <ContentVideo data={key == 1 ? [item, 1] : [item, 2]} />
      </View>
    );
  };

  const renderAudio = (item: any, key: any) => {
    return item?.metadata?.color == '#0f0' ? (
      <>
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
          {item?.metadata?.location == null ||
        item?.metadata?.location == '' ? null : (
          <View
            style={{
              position: 'absolute',
              top: 100,
              left: 10,
              flexDirection: 'row',
              columnGap: 10,
              backgroundColor: '#FFF',
              borderRadius: 16,
              width: 180,
              paddingHorizontal: 10,
              paddingVertical: 6,
            }}>
            <LOCATION />
            <Text
              style={{
                color: '#10347A',
                fontFamily: 'Noto Sans',
                fontSize: 12,
                fontWeight: '400',
              }}>
              {item?.metadata?.location}
            </Text>
          </View>
        )}
        </LinearGradient>
        <ContentVideo data={key == 1 ? [item, 1] : [item, 2]} />
      </>
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
        {item?.metadata?.location == null ||
        item?.metadata?.location == '' ? null : (
          <View
            style={{
              position: 'absolute',
              top: 100,
              left: 10,
              flexDirection: 'row',
              columnGap: 10,
              backgroundColor: '#FFF',
              borderRadius: 16,
              width: 180,
              paddingHorizontal: 10,
              paddingVertical: 6,
            }}>
            <LOCATION />
            <Text
              style={{
                color: '#10347A',
                fontFamily: 'Noto Sans',
                fontSize: 12,
                fontWeight: '400',
              }}>
              {item?.metadata?.location}
            </Text>
          </View>
        )}
        <ContentVideo
          data={
            !item?.metadata?.originalPostId
              ? [item, 1]
              : [item?.metadata?.originalPostId?.posts[0], 2]
          }
        />
      </View>
    );
  };
  const renderPoll = (item: any) => {
    return polls?.map((attach: any) => (
      <>
        {attach?.pollId == item?.metadata?.poll ? (
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
              {item?.metadata?.location == null ||
        item?.metadata?.location == '' ? null : (
          <View
            style={{
              position: 'absolute',
              top: 100,
              left: 10,
              flexDirection: 'row',
              columnGap: 10,
              backgroundColor: '#FFF',
              borderRadius: 16,
              width: 180,
              paddingHorizontal: 10,
              paddingVertical: 6,
            }}>
            <LOCATION />
            <Text
              style={{
                color: '#10347A',
                fontFamily: 'Noto Sans',
                fontSize: 12,
                fontWeight: '400',
              }}>
              {item?.metadata?.location}
            </Text>
          </View>
        )}
            </View>
          )
        ) : null}
        <ContentVideo
          data={
            !item?.metadata?.originalPostId
              ? [item, 1]
              : [item?.metadata?.originalPostId?.posts[0], 2]
          }
        />
      </>
    ));
  };
  const renderImage = (attach: any, item: any, key: any) => {
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
        {item?.metadata?.jobOpportunityData == null ||
        !item?.metadata?.jobOpportunityData ? null : (
          <JopOppertunity data={item?.metadata} />
        )}

        {item?.metadata?.location == null ||
        item?.metadata?.location == '' ? null : (
          <View
            style={{
              position: 'absolute',
              top: 100,
              left: 10,
              flexDirection: 'row',
              columnGap: 10,
              backgroundColor: '#FFF',
              borderRadius: 16,
              width: 180,
              paddingHorizontal: 10,
              paddingVertical: 6,
            }}>
            <LOCATION />
            <Text
              style={{
                color: '#10347A',
                fontFamily: 'Noto Sans',
                fontSize: 12,
                fontWeight: '400',
              }}>
              {item?.metadata?.location}
            </Text>
          </View>
        )}
        <ContentVideo data={key == 1 ? [item, 1] : [item, 2]} />
      </ImageBackground>
    );
  };
  const renderVideo = (attach: any, item: any, key: any, index: any) => {
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
          paused={video.paused}
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
            console.warn(JSON.stringify(err));
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
          ignoreSilentSwitch="ignore"
        />
        {item?.metadata?.pdfData == null ? null : (
          <CVAddones data={item?.metadata} />
        )}
        {item?.metadata?.externalLinks == null ? null : (
          <TextLinks data={item?.metadata} />
        )}
        {item?.metadata?.jobOpportunityData == null ||
        !item?.metadata?.jobOpportunityData ? null : (
          <JopOppertunity data={item?.metadata} />
        )}
          {item?.metadata?.location == null ||
        item?.metadata?.location == '' ? null : (
          <View
            style={{
              position: 'absolute',
              top: 100,
              left: 10,
              flexDirection: 'row',
              columnGap: 10,
              backgroundColor: '#FFF',
              borderRadius: 16,
              width: 180,
              paddingHorizontal: 10,
              paddingVertical: 6,
            }}>
            <LOCATION />
            <Text
              style={{
                color: '#10347A',
                fontFamily: 'Noto Sans',
                fontSize: 12,
                fontWeight: '400',
              }}>
              {item?.metadata?.location}
            </Text>
          </View>
        )}
        <ContentVideo data={key == 1 ? [item, 1] : [item, 2]} />
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
      item?.metadata?.poll == null &&
      !item?.metadata?.originalPostId ? null : (
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
            item?.metadata?.attachments == null &&
            !item?.metadata?.originalPostId?.posts[0]?.metadata?.attachments ? (
              renderPoll(item)
            ) : !item?.metadata?.originalPostId ? (
              Array.isArray(item?.metadata?.attachments) ? (
                item?.metadata?.attachments?.length > 1 ? (
                  renderSwiper(item, 1)
                ) : (
                  item?.metadata?.attachments?.map((attach: any) =>
                    renderImage(attach, item, 1),
                  )
                )
              ) : item?.metadata?.attachments?.type == 'video' ? (
                renderVideo(item?.metadata?.attachments, item, 1, index)
              ) : (
                renderAudio(item, 1)
              )
            ) : Array.isArray(
                item?.metadata?.originalPostId?.posts[0]?.metadata?.attachments,
              ) ? (
              item?.metadata?.originalPostId?.posts[0]?.metadata?.attachments
                ?.length > 1 ? (
                renderSwiper(item?.metadata?.originalPostId?.posts[0], 2)
              ) : (
                item?.metadata?.originalPostId?.posts[0]?.metadata?.attachments?.map(
                  (attach: any) =>
                    renderImage(
                      attach,
                      item?.metadata?.originalPostId?.posts[0],
                      2,
                    ),
                )
              )
            ) : item?.metadata?.originalPostId?.posts[0]?.metradata?.attachments
                ?.type == 'video' ? (
              renderVideo(
                item?.metadata?.originalPostId?.posts[0]?.metadata?.attachments,
                item?.metadata?.originalPostId?.posts[0],
                2,
                index,
              )
            ) : (
              renderAudio(item?.metadata?.originalPostId?.posts[0], 2)
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
        </>
      </View>
    );
  };

  return (
    // <SafeAreaView style={globalStyles.screen} edges={['top']}>
    // <View style={globalStyles.screen}>
    loader ? (
      <ActivityIndicator size={50} style={{marginTop: 300}} />
    ) : (
      <>
        {!postsData || postsData[0]?.postId == null ? (
          <Header Title={'My reels'} onPress={() => navigation.goBack()} />
        ) : (
          <TouchableOpacity
            style={{
              position: 'absolute',
              zIndex: 1000,
              top: hasNotch ? 70 : 15,
              flexDirection: 'row',
              alignItems: 'center',
              left: 10,
            }}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <RenderSvgIcon icon="ARROWBACK" width={25} height={25} />
            <Text style={styles.textLeftHeader}>My reels</Text>
          </TouchableOpacity>
        )}
        {!postsData || postsData[0]?.postId == null ? (
          <View
            style={{
              height: '90%',
              justifyContent: 'center',
              alignItems: 'center',

              backgroundColor: appColors.bg,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                backgroundColor: '#FFF',
                paddingVertical: 16,
                paddingHorizontal: 20,
                borderRadius: 16,
              }}>
              <PlaceHolderReels />
              <Text
                style={{
                  color: '#1C1C1C',
                  fontSize: 24,
                  fontWeight: '400',
                  marginTop: 10,
                }}>
                {' '}
                No Reels Yet
              </Text>
              <View style={{width: '65%'}}>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 20,
                    fontWeight: '700',
                    textAlign: 'center',
                  }}>
                  {' '}
                  Make your first reel to get hired fast
                </Text>
              </View>
              {/* <View style={{width:'65%'}}>
            <Text style={{color: '#000', fontSize: 14,fontWeight:'400',textAlign:'center'}}>
              {' '}
              unlimited job search ، unlimited posts and unlimited videos
            </Text>
            </View> */}
            </View>
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
        )}
      </>
    )

    // {/* </View> */}
  );
};

export default ReelsScreen;
