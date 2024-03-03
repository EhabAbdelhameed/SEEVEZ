import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import CommonStatusBar from '../../../../ui/StatusBar';
import ContainerUsers from './components/ContainerUsers';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../../../globalStyle';
import AppThunks from 'src/redux/app/thunks';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { selectAccessToken, selectFollowingList, selectListUsers } from 'src/redux/app';
import Header from 'components/molecules/Header';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthSlice from 'src/redux/auth';
import { useTranslation } from 'react-i18next';
import { selectLang } from 'src/redux/lang';

const MyConnection = (props: any) => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation()
    const ListUsers = useAppSelector(selectListUsers)
    const [load, setLoad] = React.useState(false)
    const ListFollowing = useAppSelector(selectFollowingList)
    const lang = useSelector(selectLang);

    const {t, i18n} = useTranslation();
    React.useEffect(() => {
        setLoad(true)
        dispatch(AppThunks.doGetFollowingList()).then(() =>setLoad(false))
        dispatch(AppThunks.doGetListUsers())
    }, [])

    return (
        <SafeAreaView edges={['top']} style={[globalStyles.screen,{direction: lang == 'en' ? 'ltr' : 'rtl'}]}>
            <View style={styles.screen}>
                <Header Title={t("myConnections")} onPress={() => navigation.goBack()} />
                <ScrollView showsVerticalScrollIndicator={false} style={{
                    height: '100%',
                    width: '90%',
                    alignSelf: 'center',
                    backgroundColor: '#fff',
                    borderRadius: 20
                }}>
                    {
                        load ?
                            <ActivityIndicator size={50} style={{marginTop:300}}/>
                            :
                            <ContainerUsers
                                data={ListFollowing}
                            />
                    }

                </ScrollView>
            </View>
        </SafeAreaView >
    )
}



export default MyConnection;
