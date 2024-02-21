import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles'
import { RenderSvgIcon } from 'components/atoms/svg'
import { useSelector } from 'react-redux'
import { selectPhotoData } from 'src/redux/app'
import { selectUser } from 'src/redux/auth'


const PollComponent = () => {
    const PollData = useSelector(selectPhotoData);
    const CurrentUserData = useSelector(selectUser);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>(-1);
    console.log(JSON.stringify(PollData))
    const Item = ({ pers, name, color ,index}: { pers: number; name: string; color: string; index:number;}) => {
        return (
            <>
             <TouchableOpacity onPress={() => handleAnswerSelection(index)}>
                <View style={{ marginTop: 5 }}>
                    <Text style={styles.text13}>{name}</Text>
                    <View style={[styles.rowItemSlide,{columnGap:5}]}>
                     
                        <Text style={[styles.text12,{width:'14%'}]}>{pers}%</Text>
                       
                        <View style={{ width: "72%" }}>
                            <View style={[styles.slider1, {
                                backgroundColor: color,
                                opacity: .4
                            }]} />
                            <View style={[styles.slider1, {
                                backgroundColor:color,
                                position: "absolute",
                                left: 0,
                                width: `${pers}%`
                            }]} />
                            <View style={[styles.circleSlider, {
                                left: `${pers-9}%`,
                                borderColor: color,
                                backgroundColor: color,
                                width:15,
                                height:15,

                                bottom: -5
                            }]} >  
                                <RenderSvgIcon icon='RIGHTSLIDER' width={10} height={10} />
                            </View>
                        </View>
                        <View style={[styles.circle11, { marginLeft: 5 }]}>
                                {selectedAnswerIndex==index  ? <View style={styles.filledInnerCircle} /> : null}
                            </View>
                    </View>
                </View>
                </TouchableOpacity>
            </>
        )
    }
    const handleAnswerSelection = (index: number) => {
       setSelectedAnswerIndex(index)
       
    }
    return (   
        <View style={[styles.bollsContainer,{width:'80%',paddingHorizontal:10,position:'absolute',bottom:20}]}>
            <Text style={styles.text11}>{PollData?.pdf?.question}</Text>
            {/* <Text style={styles.text12}>Lorem ipsum dolor sit amet consectetur.</Text> */}
            {PollData?.pdf?.options?.map((Exp: any, index: any) => (
            <Item
                pers={0}
                name={Exp?.answer}
                color={index==0?"rgba(0, 206, 200, 1)":index==1?'#1D5EDD':'#E8AB00'}
                index={index}
             
            />))}
          
        </View>
    )
}

export default PollComponent