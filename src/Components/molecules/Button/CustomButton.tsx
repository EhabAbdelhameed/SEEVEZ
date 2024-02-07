import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import LottieView from 'lottie-react-native';
import { ButtonLoader } from 'assets/lotties';

const CustomButton = ({
    text,
    onPress,
    loading
}: {
    text?: string;
    onPress?: () => void;
    loading?: boolean;
}) => {
    return (
        <TouchableOpacity activeOpacity={.8} disabled={loading} onPress={onPress} style={styles.Container}>
            {
                loading ?
                    <LottieView
                        autoPlay
                        source={ButtonLoader}
                        style={styles.Loader}
                    />
                    :
                    <Text style={styles.text}>{text}</Text>
            }
        </TouchableOpacity>

    )
}

export default CustomButton