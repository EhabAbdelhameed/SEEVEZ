import { Text, View } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'

const Wave = ({
    milliseconds,
    isRecording,
}: {
    milliseconds: number;
    isRecording:any;
}) => {
    return (
        <View>
            {isRecording ?
                <Animated.Image
                    source={require('assets/images/Lines.png')}
                    entering={FadeIn}
                    exiting={FadeOut}
                /> :
                <Animated.Image
                    source={require('assets/images/Line.png')}
                    entering={FadeIn}
                    exiting={FadeOut}
                />}
        </View>
    )
}

export default Wave

