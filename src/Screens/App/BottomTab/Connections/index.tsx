import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './styles';
import Header from './components/Header';
import CommonStatusBar from '../../../../ui/StatusBar';
import ContainerUsers from './components/ContainerUsers';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../../../globalStyle';

const Connections = (props: any) => {
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
                        data={[1, 2, 3, 4, 5]}
                    />
                    <ContainerUsers
                        title='Popular pages'
                        data={[1, 2, 3, 4, 5]}
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
