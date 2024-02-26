import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './styles';
import Header from './components/Header';
import CommonStatusBar from '../../../../ui/StatusBar';
import ContainerUsers from './components/ContainerUsers';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../../../globalStyle';
import AppThunks from 'src/redux/app/thunks';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { selectFollowingList, selectListUsers } from 'src/redux/app';

const Connections = (props: any) => {
    const dispatch = useAppDispatch()
    const ListUsers = useAppSelector(selectListUsers)
    const [jobseekerIndex,setJobseekerIndex]=useState(1)
    const [recuriterIndex,setRecuriterIndex]=useState(1)
    const [companyIndex,setCompanyIndex]=useState(1)
    React.useEffect(() => {
        dispatch(AppThunks.doGetFollowingList())
        dispatch(AppThunks.doGetListUsers())
        dispatch(AppThunks.GetJobSeekers(jobseekerIndex))
        dispatch(AppThunks.GetRecruiterUsers(recuriterIndex))
        dispatch(AppThunks.GetCompanyUsers(companyIndex))

    }, [])
    return (
        <SafeAreaView edges={['top']} style={globalStyles.screen}>
            <View style={styles.screen}>
                <Header />
                <KeyboardAwareScrollView
                    contentContainerStyle={{
                        alignItems: "center",
                        paddingBottom: 140
                    }}
                    enableOnAndroid={true}
                    keyboardShouldPersistTaps={"handled"}
                    enableResetScrollToCoords={false}
                    showsVerticalScrollIndicator={false}
                >
                    <ContainerUsers
                        title='People you may know with similar roles'
                        data={ListUsers}
                    />
                    <ContainerUsers
                        title='Popular pages'
                        data={[1, 2]}
                    />
                    <ContainerUsers
                        title='Popular recruiters'
                        data={[1, 2, 3, 4, 5]}
                    />
                </KeyboardAwareScrollView>
            </View>
        </SafeAreaView>
    )
}



export default Connections;
