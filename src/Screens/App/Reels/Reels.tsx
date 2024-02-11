// ReelsScreen.js
import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, TouchableOpacity, Text, Dimensions, TouchableWithoutFeedback, Alert, Image, Platform, TouchableNativeFeedback, Pressable } from 'react-native';
import { styles } from './styles';
import { data, getTime } from './fucntions/helper';
import ContentVideo from './components/ContentVideo';
import RenderVideo from './components/Video';
import { appColors } from 'theme/appColors';
import { appSizes } from 'theme/appSizes';

import { globalStyles } from 'src/globalStyle';
import { useAppDispatch } from 'src/redux/store';
import { useNavigation } from '@react-navigation/native';
import AppSlice from 'src/redux/app';


const ReelsScreen = () => {
    const dispatch=useAppDispatch()
    const navigation=useNavigation()
    React.useEffect(() => {
        const RenderFunction = navigation.addListener('focus', () => {
        
          dispatch(AppSlice.changeDone(false));
        });
        return RenderFunction;
      }, [navigation]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState<any>(0);
    const videoRef: any = useRef(null);
    const flatListRef: any = useRef(null);
    const [loading, setLoading] = useState(true);

    const [video, setVideo] = React.useState({
        currentTime: 0,
        duration: 0.1,
        paused: false,
        overlay: true,
        fulltime: 0.1,
    });
    const [isMuted, setIsMuted] = React.useState(false);
    // const [screenType, setScreenType] = React.useState('cover');
    const scrollToTop = () => {
        if (flatListRef.current) {
            flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
        }
    };
    const togglePlay = () => {
        setVideo(prev => ({ ...prev, paused: !prev.paused }));
    };
    const toggleOverLay = () => {
        setVideo(prev => ({ ...prev, overlay: !prev.overlay }));
        togglePlay()
    };
    const youTubeSeekLeft = () => {
        videoRef.current.seek(video.currentTime - 5);
    };
    const youTubeSeekRight = () => {
        videoRef.current.seek(video.currentTime + 5);
    };
    const setSlide = (value: any) => {
        videoRef.current.seek(value * video.duration);
    };
    const load = ({ duration }: any) => {
        setVideo(prev => ({ ...prev, duration }));
        setLoading(false)
    };

    const progress = ({ currentTime }: any) => {
        setVideo(prev => ({ ...prev, currentTime }));
    };

    const onMute = () => {
        setIsMuted(prev => !prev);
    };
    const renderVideoItem = ({ item, index }: any) => {
        return (
            <>
                <TouchableOpacity
                    onPress={toggleOverLay}
                    activeOpacity={1}
                    style={{
                        zIndex: 1000,
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('screen').height,
                        // height:"100%",
                        backgroundColor: appColors.black
                    }}
                    touchSoundDisabled
                >
                    <>
                        {currentVideoIndex == index ?
                            <RenderVideo
                                video={video}
                                isMuted={isMuted}
                                index={index}
                                currentVideoIndex={currentVideoIndex}
                                load={load}
                                progress={progress}
                                uri={item?.uri}
                                videoRef={videoRef}
                                key={index}
                            />
                            :
                            <View
                            >
                                <Image
                                    source={require("../../../assets/images/loading.gif")}
                                    style={{
                                        width: 100,
                                        height: 100,
                                        // backgroundColor: "#589",
                                        zIndex: 100,
                                        alignSelf: "center",
                                        marginTop: appSizes.height / 2.5
                                    }}
                                    resizeMode='contain'
                                />
                            </View>
                        }
                        <View
                            style={[
                                styles.overlay,
                                {
                                    backgroundColor:
                                        !video.overlay ?
                                            '#0006'
                                            : 'transparent'
                                },
                            ]}>
                            <ContentVideo overlay={video.overlay} type={item?.type} />

                            {/* {!video.overlay ? (
                                <View
                                    style={[
                                        styles.overlaySet,
                                        { marginTop: appSizes.with },
                                    ]}>
                                    <Icon
                                        name={video.paused ? 'play' : 'pause'}
                                        style={styles.icon}
                                        onPress={togglePlay}
                                        size={45}
                                        color={appColors.white}
                                    />

                                </View>
                            ) : (
                                <View style={styles.overlaySet}>
                                    <TouchableNativeFeedback onPress={youTubeSeekLeft}>
                                        <View style={{ flex: 1, backgroundColor: "#890" }}></View>
                                    </TouchableNativeFeedback>
                                    <TouchableNativeFeedback onPress={youTubeSeekRight}>
                                        <View style={{ flex: 1, backgroundColor: "#890" }}></View>

                                    </TouchableNativeFeedback>
                                </View>
                            )} */}
                            {/* {!video.overlay ? (
                                <>
                                    <View style={styles.timer}>
                                        <View style={styles.containerTimeText}>
                                            <Text style={styles.timeText}>
                                                {getTime(video.currentTime)}
                                            </Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={[styles.timeText]}>
                                                    {getTime(video.duration)}
                                                    {'   '}
                                                </Text>

                                                <Icon
                                                    name={isMuted ? 'volume-mute' : 'volume-down'}
                                                    style={{ marginLeft: 10 }}
                                                    onPress={onMute}
                                                    color={appColors.white}
                                                    size={20}
                                                />
                                            </View>
                                        </View>

                                        <Slider
                                            style={{ width: '100%', height: 20, marginTop: 10 }}
                                            thumbTintColor={appColors.blue}
                                            thumbStyle={{ width: 15, height: 15 }}
                                            maximumTrackTintColor={appColors.placeholder}
                                            minimumTrackTintColor={appColors.whiteBlue}
                                            value={video.currentTime / video.duration}
                                            onValueChange={setSlide}
                                        />
                                    </View>
                                </>
                            ) : (
                                <></>
                            )} */}
                        </View>

                    </>
                </TouchableOpacity>
            </>

        )
    }

    return (
        // <SafeAreaView style={globalStyles.screen} edges={['top']}>
             <View style={globalStyles.screen}>
            <FlatList
                ref={flatListRef}
                data={data}
                renderItem={renderVideoItem}
                pagingEnabled
                onMomentumScrollEnd={(event) => {
                    const index = Math.floor(event.nativeEvent.contentOffset.y / event.nativeEvent.layoutMeasurement.height);
                    setVideo({
                        currentTime: 0,
                        duration: 0.1,
                        paused: false,
                        overlay: true,
                        fulltime: 0.1,
                    })
                    setCurrentVideoIndex(index);
                    setLoading(true)
                }}
                keyExtractor={(item) => item.id.toString()}
                scrollEventThrottle={16} // Adjust this value for smoother scrolling events
                showsVerticalScrollIndicator={false}
            />
        </View>
        // </SafeAreaView>
       
    );

};

export default ReelsScreen;