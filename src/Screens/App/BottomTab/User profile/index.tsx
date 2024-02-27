import React from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../../../globalStyle';
import { useAppDispatch } from 'src/redux/store';
import Header from 'components/molecules/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import RecordVideo from 'screens/App/CompleteProfile/components/RecordVideo/RecordVideo';
import Complete from 'screens/App/Profile/Main Profile/components/Complete';
import InfoProfileCard from 'screens/App/Profile/Main Profile/components/Info';
import AboutProfileCard from 'screens/App/Profile/Main Profile/components/About';
import ExperienceProfileCard from 'screens/App/Profile/Main Profile/components/Experience';
import EducationProfileCard from 'screens/App/Profile/Main Profile/components/Education';
import TrainingProfileCard from 'screens/App/Profile/Main Profile/components/Training';
import SkillsProfileCard from 'screens/App/Profile/Main Profile/components/Skills';
import LanguagesProfileCard from 'screens/App/Profile/Main Profile/components/Languages';
import AchievementsProfileCard from 'screens/App/Profile/Main Profile/components/Achievements';
import ReferenceProfileCheck from 'screens/App/Profile/Main Profile/components/ReferenceCheck';
import { useSelector } from 'react-redux';
import { selectUser, selectUserProfile } from 'src/redux/auth';
import AuthThunks from 'src/redux/auth/thunks';
import { ScreenHeight } from 'react-native-elements/dist/helpers';

const UserProfile = (props: any) => {
    const { id }: any = useRoute().params
    const dispatch = useAppDispatch()
    const navigation = useNavigation()
    const CurrentUserData: any = useSelector(selectUserProfile);
    const [Load, setLoad] = React.useState(false)
    const [stopVideo, setStopVideo] = React.useState(false);
    React.useEffect(() => {
        setLoad(true)
        dispatch(AuthThunks.doGetUserProfile(id)).then(() => setLoad(false))
    }, [id])
    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height - 100 + contentOffset.y >= ScreenHeight - paddingToBottom;
    };
    const ifCloseToTop = ({ layoutMeasurement, contentOffset, contentSize }) => {
        return contentOffset.y == 0;
    }
    return (
        <SafeAreaView edges={['top']} style={globalStyles.screen}>
            {
                Load ?
                    <ActivityIndicator
                        size={'large'}
                        style={{
                            marginTop: ScreenHeight / 2.4
                        }}
                    />
                    :
                    <View style={styles.screen}>
                        <Header Title="Profile" onPress={() => navigation.goBack()} />
                        <ScrollView
                            onScroll={({ nativeEvent }) => {
                                if (isCloseToBottom(nativeEvent)) {
                                    setStopVideo(true)
                                }
                                if (ifCloseToTop(nativeEvent)) {
                                    setStopVideo(false)
                                }
                            }}
                            showsVerticalScrollIndicator={false} style={{
                                height: '100%',
                                width: '90%',
                                alignSelf: 'center',
                                // backgroundColor: '#fff',
                                // borderRadius: 20
                            }}>
                            {CurrentUserData?.cv_media != null && <RecordVideo stopVideo={stopVideo} user_data={CurrentUserData?.cv_media} current={true} />}
                            <InfoProfileCard data={CurrentUserData} current={true} />
                            {CurrentUserData?.about && <AboutProfileCard data={CurrentUserData?.about} current={true} />}
                            {CurrentUserData?.experiences?.length != 0 && <ExperienceProfileCard data={CurrentUserData?.experiences} current={true} />}
                            {CurrentUserData?.educations?.length != 0 && <EducationProfileCard data={CurrentUserData?.educations} current={true} />}
                            {CurrentUserData?.training_courses?.length != 0 && < TrainingProfileCard data={CurrentUserData?.training_courses} current={true} />}
                            {CurrentUserData?.skills?.length != 0 && <SkillsProfileCard title={'Skills'} data={CurrentUserData?.skills} current={true} />}
                            {CurrentUserData?.interests?.length != 0 && <SkillsProfileCard title={'Interests'} data={CurrentUserData?.interests} current={true} />}
                            {CurrentUserData?.languages?.length != 0 && <LanguagesProfileCard data={CurrentUserData?.languages} current={true} />}
                            {CurrentUserData?.achievement?.length != 0 && <AchievementsProfileCard data={CurrentUserData?.achievement} current={true} />}
                            {CurrentUserData?.reference_check?.length != 0 && <ReferenceProfileCheck data={CurrentUserData?.reference_check} current={true} />}
                            <View style={{ height: 30 }} />
                        </ScrollView>
                    </View>
            }

        </SafeAreaView >
    )
}



export default UserProfile;
