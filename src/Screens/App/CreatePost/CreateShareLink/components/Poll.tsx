import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import { RenderSvgIcon } from 'components/atoms/svg'
import { useSelector } from 'react-redux'
import { selectPhotoData } from 'src/redux/app'
import { selectUser } from 'src/redux/auth'


const PollComponent = () => {
    const PollData = useSelector(selectPhotoData);
    const CurrentUserData = useSelector(selectUser);
    console.log("Poll Data",JSON.stringify(PollData?.pdf))
    const Item = ({ pers, name, color ,selected}: { pers: number; name: string; color: string; selected:boolean;}) => {
        return (
            <>
                <View style={{ marginTop: 5 }}>
                    <Text style={styles.text13}>{name}</Text>
                    <View style={styles.rowItemSlide}>
                        <Text style={styles.text12}>{pers}%</Text>
                        <View style={{ width: "78%" }}>
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
                                bottom: -5
                            }]} >  
                                <RenderSvgIcon icon='RIGHTSLIDER' width={10} height={10} />
                            </View>
                        </View>
                        <View style={styles.circle11}>

                            {selected?<View style={styles.filledInnerCircle} />:null}
                        </View>
                    </View>
                </View>
            </>
        )
    }
    return (
        <View style={styles.bollsContainer}>
            <Text style={styles.text11}>{PollData?.pdf?.question}</Text>
            <Text style={styles.text12}>Lorem ipsum dolor sit amet consectetur.</Text>
            {PollData?.pdf?.options.map((Exp: any, index: any) => (
            <Item
                pers={20}
                name={Exp?.answer}
                color={index==0?"rgba(0, 206, 200, 1)":index==1?'#1D5EDD':'#E8AB00'}
                selected={index==0?true:false}
            />))}
            {/* <Item 
            pers={35}
             name="Css"
                color='#1D5EDD'
                selected={false}

            />
            <Item pers={40} name="JS"
                color="#E8AB00"
                selected={false}

            /> */}
        </View>
    )
}

export default PollComponent