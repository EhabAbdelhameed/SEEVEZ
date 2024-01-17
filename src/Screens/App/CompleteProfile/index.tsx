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
import RecordVideo from './components/RecordVideo/RecordVideo'

import LanguagesCard from './components/Languages/Languages'
import ReferenceCheckCard from './components/RefernceCheck/RefernceCheck'

import AchievementsCard from './components/Achievements/Achievements'
import { useAppDispatch } from 'src/redux/store'
import { useSelector } from 'react-redux'
import { selectUser } from 'src/redux/auth'


const CompleteProfileScreen = () => {
    const dispatch = useAppDispatch();
    const CurrentUserData = useSelector(selectUser);

    const navigation = useNavigation()
    const data = ['Ux design', 'Research', 'Figma', 'XD', 'Web', 'User flow', 'Ui design',]
    const data2 = ['Creative/Design/Art', 'Human ', 'IT/Software Development']
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <Header Title='My profile' onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false} >
                 <RecordVideo user_data={CurrentUserData}/>
                 <View style={styles.PaddingContainer}>
                <Complete  pers ={10} />
                <InfoCard user_data={CurrentUserData}/>
                <AboutCard About={CurrentUserData}/>
                <ExperienceCard data={CurrentUserData.user_data.experiences}/>
                <EducationCard data={CurrentUserData.user_data.educations}/>
                <TrainingCard data={CurrentUserData.user_data.training_courses}/>
                <SkillsCard title={'Skills'} data={CurrentUserData.user_data.skills} />
                <SkillsCard title={'Interests'} data={CurrentUserData.user_data.skills} />
                <LanguagesCard data={CurrentUserData.user_data.languages} />
                <AchievementsCard data={CurrentUserData.user_data.achievement}/>
                <ReferenceCheckCard data={CurrentUserData.user_data.reference_check}/> 
                </View>
                
                
                
               
            
                {/* <View style={{ height: 20 }} /> */}
            </ScrollView>
        </SafeAreaView>
    )
}

export default CompleteProfileScreen