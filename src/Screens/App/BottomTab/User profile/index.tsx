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

const UserProfile = (props: any) => {
    const { id }: any = useRoute().params
    const dispatch = useAppDispatch()
    const navigation = useNavigation()
    const CurrentUserData: any = useSelector(selectUserProfile);

    React.useEffect(() => {
        dispatch(AuthThunks.doGetUserProfile(id))
    }, [id])

    return (
        <SafeAreaView edges={['top']} style={globalStyles.screen}>
            <View style={styles.screen}>
                <Header Title="Profile" onPress={() => navigation.goBack()} />
                <ScrollView showsVerticalScrollIndicator={false} style={{
                    height: '100%',
                    width: '90%',
                    alignSelf: 'center',
                    // backgroundColor: '#fff',
                    // borderRadius: 20
                }}>
                    <RecordVideo user_data={CurrentUserData?.cv_media} current={true} />
                    <InfoProfileCard data={CurrentUserData} current={true} />
                    <AboutProfileCard data={CurrentUserData?.about} current={true} />
                    <ExperienceProfileCard data={CurrentUserData?.experiences} current={true} />
                    <EducationProfileCard data={CurrentUserData?.educations} current={true} />
                    <TrainingProfileCard data={CurrentUserData?.training_courses} current={true} />
                    <SkillsProfileCard title={'Skills'} data={CurrentUserData?.skills} current={true} />
                    <SkillsProfileCard title={'Interests'} data={CurrentUserData?.interests} current={true} />
                    <LanguagesProfileCard data={CurrentUserData?.languages} current={true} />
                    <AchievementsProfileCard data={CurrentUserData?.achievement} current={true} />
                    {CurrentUserData?.reference_check?.length != 0 && <ReferenceProfileCheck data={CurrentUserData?.reference_check} current={true} />}
                    <View style={{ height: 30 }} />
                </ScrollView>
            </View>
        </SafeAreaView >
    )
}



export default UserProfile;
