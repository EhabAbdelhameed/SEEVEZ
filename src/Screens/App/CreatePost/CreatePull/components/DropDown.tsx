import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from '../styles';
import { RenderSvgIcon } from 'components/atoms/svg';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { durations } from 'src/Dummy';
import { appColors } from 'theme';

const DropDown = () => {
    const [open, setOpen] = useState(false);
    const animation = useSharedValue({ height: 0, borderWidth: 0 });

    useEffect(() => {
        animation.value = open ? { height: 160, borderWidth: 1 } : { height: 0, borderWidth: 0 }
    }, [open]);
    const animationStyle = useAnimatedStyle(() => {
        return {
            height: withTiming(animation.value.height, {
                duration: 500,
            }),
            borderWidth: withTiming(animation.value.borderWidth, {
                duration: 500,
            })
        };
    });

    return (
        <View>
            <TouchableOpacity style={styles.DurationDropDown}
                onPress={() => {
                    setOpen(prev => !prev)
                }}
            >
                <Text style={styles.titleDuration}>Duration</Text>
                <View style={{
                    transform: [
                        {
                            rotate: "-90deg"
                        }
                    ]
                }}>
                    <RenderSvgIcon
                        icon='ARROWBACK'
                        color={"#B9B9B9"}
                    />
                </View>
            </TouchableOpacity>
            <View>
                <Animated.View
                    style={[animationStyle, {
                        width: "100%",
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor:appColors.primary
                    }]}
                >
                    <ScrollView
                        nestedScrollEnabled
                    >
                        {durations.map((item, index) => {
                            return (
                                <>
                                    <View style={[styles.durationItem, {
                                        borderTopWidth: index == 0 ? 0 : 1
                                    }]}>
                                        <Text style={styles.titleDuration}>
                                            {item}
                                        </Text>
                                    </View>
                                </>
                            )
                        })}
                    </ScrollView>
                </Animated.View>
            </View>
        </View>
    )

}

export default DropDown