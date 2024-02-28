import React from 'react';
import { View, Text, FlatList, } from 'react-native';
import { styles } from '../styles';
import UserSection from './User';
import FooterSectionUsers from './FooterSectionUsers';
import { useSelector } from 'react-redux';
import { selectLang } from 'src/redux/lang';
import { useTranslation } from 'react-i18next';

const ContainerUsers = ({
    data,
    setLoad
}: {
    data?: any[];
    setLoad?: any
}) => {
   
    return (
        <View style={styles.containerUsers}>
            <View style={styles.container2Users}>
            <UserSection />

            </View>
        </View>
    )
}



export default ContainerUsers;
