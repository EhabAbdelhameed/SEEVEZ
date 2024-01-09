import { View, Text, Dimensions, Alert } from 'react-native'
import React from 'react'
import Video from 'react-native-fast-video';
import { appSizes } from '../../../../theme/appSizes';
/* to solve error on android (follow this >>>)
1-open nodemodules 
2-open react-native-fast-video 
3-open build.gradlew 
change line impelement scalablevideoview to the 
implementation 'com.github.MatrixFrog:android-scalablevideoview:v1.0.4-jitpack'
*/
const RenderVideo = ({
    videoRef,
    load,
    progress,
    isMuted,
    uri,
    currentVideoIndex,
    index,
    video,
}: {
    videoRef: any;
    load: (str: any) => void;
    progress: any;
    isMuted: boolean;
    uri: string;
    currentVideoIndex: number;
    index: number;
    video: any
}) => {
    return (
        <Video
            ref={player => {
                videoRef.current = player;
            }}
            source={{ uri: uri }}
            onLoad={load}
            //   fullscreenOrientation={'portrait'}
            onProgress={progress}
            muted={isMuted}
            // paused={video.paused}
            paused={currentVideoIndex != index ? false : video.paused}
            style={{
                width: "100%",
                // height: appSizes.height ,

                height:"100%",
                // backgroundColor:"#a00"
            }}
            resizeMode='contain'
            onEnd={() => {
                videoRef.current.seek(0);
            }}
            onError={(err) => {
                Alert.alert(JSON.stringify(err))
            }}
            bufferConfig={{
                minBufferMs: 15000,
                maxBufferMs: 50000,
                bufferForPlaybackMs: 2500,
                bufferForPlaybackAfterRebufferMs: 5000,
            }}
            selectedVideoTrack={{
                type: "auto",
                value: '180'
            }}
        />
    )
}

export default RenderVideo