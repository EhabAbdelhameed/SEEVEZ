import React from 'react';
import { View, Text, FlatList, } from 'react-native';
import { styles } from '../styles';
import UserSection from './User';
import { useSelector } from 'react-redux';
import { selectLang } from 'src/redux/lang';
import { useTranslation } from 'react-i18next';

const FooterSectionUsers = () => {
    const lang = useSelector(selectLang);
  
    const {t, i18n} = useTranslation();
    return (
        <View style={styles.containerFooterUsers}>
            <Text style={styles.titleFooterUsers}>{t("seeAll")}</Text>
        </View>
    )
}



export default FooterSectionUsers;
