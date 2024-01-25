import { ScrollView, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from 'components/molecules/Header'
import { styles } from './styles'
import Complete from './components/Complete'
import InfoCard from './components/Info'
import AboutCard from './components/About'
import ExperienceCard from './components/Experience'
import { useNavigation } from '@react-navigation/native'
import EducationCard from './components/Education'
import TrainingCard from './components/Training'
import SkillsCard from './components/Skills'
import LanguagesCard from './components/Languages'
import AchievementsCard from './components/Achievements'
import RecommendationsCard from './components/Recommendations'
import RecordVideoCard from './components/RecordVideo'
import { selectUser } from 'src/redux/auth'
import { useSelector } from 'react-redux'

const ProfileScreen = () => {
    const navigation = useNavigation()
    const data = ['Ux design', 'Research', 'Figma', 'XD', 'Web', 'User flow', 'Ui design',]
    const data2 = ['Creative/Design/Art', 'Human ', 'IT/Software Development']
    const CurrentUserData = useSelector(selectUser);
    return (

        <SafeAreaView edges={['top']} style={styles.Container}>
            <Header Title='My profile' onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false} >
                <RecordVideoCard data={CurrentUserData?.user_data?.cv_media}/>
                <View style={styles.PaddingContainer}>
                <Complete pers={parseInt(CurrentUserData?.user_data?.complete_progress)} />
                <InfoCard data={CurrentUserData}/>
                <AboutCard />
                <ExperienceCard />
                <EducationCard />
                <TrainingCard />
                <SkillsCard title={'Skills and tools'} data={data} />
                <SkillsCard title={'Interests'} data={data2} />
                <LanguagesCard />
                <AchievementsCard />
                <RecommendationsCard />
                <View style={{ height: 20 }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen