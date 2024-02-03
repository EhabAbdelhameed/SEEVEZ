import { View, Text, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Header from './components/Header'
import CompleteProfile from './components/CompleteProfile'
import BoxContentTitle from './components/BoxContentTitle'
import DashboardSection from './components/DashboardSection'
import User from './components/User'
import CompanySection from './components/CompanySection'
import Profile from './components/Profile'
import Polls from './components/Polls'
import Hashtags from './components/Hashtags'
import Communities from './components/Communities'
import Schedule from './components/Schedule'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from 'src/globalStyle'
import { appSizes } from 'theme'
import { PlayVideo, Trending } from 'assets/Svgs'
import { useAppDispatch } from 'src/redux/store'
import AuthSlice, { selectUser } from 'src/redux/auth'
import { useSelector } from 'react-redux'
import AppThunks from 'src/redux/app/thunks'

const Home = () => {
    const navigation = useNavigation()
    const dispatch = useAppDispatch();
    const CurrentUserData = useSelector(selectUser);
    React.useEffect(() => {
        const RenderFunction = navigation.addListener('focus', () => {
             dispatch(AppThunks.GetProfileInfo())
          
         })
         return RenderFunction
     }, [navigation])
    useEffect(() => {
        dispatch(AuthSlice.chnageVerified(false));
        dispatch(AuthSlice.chnageIsSignedUp(false))
        dispatch(AuthSlice.chnageReseted(false))
      }, []);
    return (
        <SafeAreaView edges={['top']} style={globalStyles.screen}>
            <View style={globalStyles.screen}>
                <Header />   
                <KeyboardAwareScrollView
                    contentContainerStyle={{
                        alignItems: "center",
                        paddingBottom: 130,
                        paddingHorizontal: appSizes.padding_m
                    }}
                    enableOnAndroid={true}
                    keyboardShouldPersistTaps={"handled"}
                    enableResetScrollToCoords={false}
                    showsVerticalScrollIndicator={false}
                >
                    
                    <CompleteProfile pers={parseInt(CurrentUserData?.user_data?.complete_progress)} />
                    <View style={styles.rowContainer}>
                        <BoxContentTitle
                            title='My video CV'
                        >
                            <ImageBackground
                                source={require('src/assets/images/Rectangle17.png')}
                                style={styles.imgBg}
                                resizeMode='contain'
                            >
                                <PlayVideo />
                            </ImageBackground>
                        </BoxContentTitle>
                        <BoxContentTitle
                            title='My reels'
                            onPress={() => {
                                navigation.navigate("Reels")
                            }}
                        >
                            <ImageBackground
                                source={require('src/assets/images/Rectangle18.png')}
                                style={styles.imgBg}
                                resizeMode='contain'
                            >
                                <PlayVideo />
                            </ImageBackground>
                        </BoxContentTitle>
                    </View>
                    <View style={styles.rowContainer}>
                        <BoxContentTitle
                            title='My analytics'
                        >
                            <DashboardSection />
                        </BoxContentTitle>
                    </View>
                    <View style={styles.rowContainer}>
                        <BoxContentTitle
                            title='CV maker'
                            onPress={() => {
                                navigation.navigate("Cv")
                            }}
                        >
                            <ImageBackground
                                source={require('../../../../assets/images/cv.png')}
                                style={styles.imgBg2}
                                resizeMode='contain'
                            >
                            </ImageBackground>
                        </BoxContentTitle>
                        <BoxContentTitle
                            title='My connections'
                            onPress={() => {
                                navigation.navigate("Connections")
                            }}
                        >
                            <User />
                            <User />
                            <User />
                        </BoxContentTitle>
                    </View>
                    <View style={styles.rowContainer}>
                        <BoxContentTitle
                            title='My jobs'
                        >
                            <CompanySection />
                            <CompanySection />
                            <CompanySection />
                        </BoxContentTitle>
                    </View>
                    <View style={styles.rowContainer}>
                        <BoxContentTitle
                            title='My polls'
                        >
                            <Polls />
                        </BoxContentTitle>
                        <BoxContentTitle
                            title='My profile'
                            onPress={()=>navigation.navigate("ProfileScreen")}
                        >
                            <Profile />
                        </BoxContentTitle>
                    </View>
                    <View style={styles.rowContainer}>
                        <BoxContentTitle
                            title='My schedule'
                        >
                            <Schedule />
                        </BoxContentTitle>
                    </View>
                    <View style={styles.rowContainer}>
                        <BoxContentTitle
                            title='Hashtags'
                        >
                            <Hashtags />
                        </BoxContentTitle>
                        <BoxContentTitle
                            title='Trending now'
                        >
                            <View style={styles.rowContainer}>
                                <ImageBackground
                                    source={require('../../../../assets/images/Rectangle171.png')}
                                    style={[{
                                        height: 154,
                                        flex: 1
                                    }]}
                                    imageStyle={{
                                        borderRadius: 10,
                                    }}
                                    resizeMode='cover'
                                >
                                    <Trending style={styles.absIcon} />
                                </ImageBackground>
                                <ImageBackground
                                    source={require('src/assets/images/Rectangle172.png')}
                                    style={[{
                                        height: 154,
                                        flex: 1
                                    }]}
                                    imageStyle={{
                                        borderRadius: 10,
                                    }}
                                    resizeMode='cover'
                                >
                                    <Trending style={styles.absIcon} />
                                </ImageBackground>
                            </View>
                        </BoxContentTitle>
                    </View>
                    <View style={styles.rowContainer}>
                        <BoxContentTitle
                            title='My communities'
                        >
                            <Communities />
                        </BoxContentTitle>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Home