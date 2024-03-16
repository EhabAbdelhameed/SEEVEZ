import React from 'react';
import { View, Text, FlatList, } from 'react-native';
import { styles } from '../styles';
import UserSection from './User';

const FooterSectionUsers = () => {
    return (
        <View style={styles.containerFooterUsers}>
            <Text style={styles.titleFooterUsers}>See all</Text>
        </View>
    )
}



export default FooterSectionUsers;
