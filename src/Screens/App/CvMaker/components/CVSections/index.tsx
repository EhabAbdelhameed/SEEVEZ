import React, { useState } from 'react'
import Profile from './Profile'
import Objective from './Objective'
import Education from './Education'
import Experience from './Experience'
import Achievements from './Achievements'
import Courses from './Courses'
import Skills from './Skills'
import AdditionalData from './AdditionalData'
import FooterSection from './FooterSection'
import DraggableFlatList, {
    ScaleDecorator,
} from "react-native-draggable-flatlist";
import { useAppSelector } from 'src/redux/store'
import { selectUser } from 'src/redux/auth'

const Arr = [Objective, Education, Experience, Achievements, Courses, Skills, AdditionalData]
const CVRN = () => {
    const [data, setData] = useState(Arr)
    const User: any = useAppSelector(selectUser);
    return (
        <>
            <DraggableFlatList
                data={data}
                contentContainerStyle={{
                    // backgroundColor:"#a87",
                    paddingBottom: 140
                }}
                onDragEnd={({ data }) => setData(data)}
                // nestedScrollEnabled
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={() => {
                    return (
                        <Profile />
                    )
                }}
                renderItem={({ item: Item, drag, isActive }) => (
                    <ScaleDecorator>
                        <Item drag={drag} isActive={isActive} User={User} />
                    </ScaleDecorator>

                )}
                ListFooterComponent={() => {
                    return <FooterSection />
                }}
            />

        </>
    )
}

export default CVRN