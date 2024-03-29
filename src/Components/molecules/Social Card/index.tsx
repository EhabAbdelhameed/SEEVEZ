import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const SocialCard = ({ Icon, text }: { Icon: any; text: string }) => {
    return (
        <View style={styles.container}>
            {Icon}
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

export default SocialCard;
