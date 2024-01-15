import { ScrollView, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from 'components/molecules/Header'
import { styles } from './styles'
import Complete from './components/Complete/Complete'
import InfoCard from './components/Info/Info'
import AboutCard from './components/About/About'
import ExperienceCard from './components/Experience/Experience'
import { useNavigation } from '@react-navigation/native'
import EducationCard from './components/Education/Education'
import TrainingCard from './components/Training/Training'
import SkillsCard from './components/Skills/Skills'
import LanguagesCard from './components/Languages/Languages'
import ReferenceCheckCard from './components/RefernceCheck/RefernceCheck'

import AchievementsCard from './components/Achievements/Achievements'


const CompleteProfileScreen = () => {
    const navigation = useNavigation()
    const data = ['Ux design', 'Research', 'Figma', 'XD', 'Web', 'User flow', 'Ui design',]
    const data2 = ['Creative/Design/Art', 'Human ', 'IT/Software Development']
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <Header Title='My profile' onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.PaddingContainer}>
                <Complete  pers ={0} />
                <InfoCard />
                <AboutCard />
                <ExperienceCard />
                <EducationCard />
                <TrainingCard />
                <SkillsCard title={'Skills'} data={data} />
                <SkillsCard title={'Interests'} data={data2} />
                <LanguagesCard />
                <AchievementsCard />
                <ReferenceCheckCard />
                <View style={{ height: 20 }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default CompleteProfileScreen