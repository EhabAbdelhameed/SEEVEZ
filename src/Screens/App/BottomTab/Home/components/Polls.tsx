import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'

const Polls = () => {
    const Slider = ({ pers, title }: { pers: number; title: string }) => {
        return (
            <>
                <View style={{marginTop:4}}>
                    <Text style={[styles.text2,{fontWeight:'700'}]}>{title}</Text>
                    <View style={[styles.rowItemSlide, { width: "85%", 
                    columnGap: 5, marginTop: 3.5 }]}>
                        <Text style={styles.text2}>{pers}%</Text>
                        <View style={{ width: "85%" }}>
                            <View style={[styles.slider, {
                                opacity: .4,
                            }]} />
                            <View style={[styles.slider, {
                                // backgroundColor: color,
                                position: "absolute",
                                left: 0,
                                width: `${pers}%`
                            }]} />
                            <View style={[styles.circleSlider, {
                                left: `${pers - 1}%`,
                                bottom: -5
                            }]} >
                                <RenderSvgIcon icon='RIGHTSLIDER' width={10} height={10} />
                            </View>
                        </View>
                    </View>
                </View>
            </>
        )
    }
    return (
        <View style={styles.PollsContainer}>
            <Text style={styles.text1}>Which is better ?</Text>
            <View>

                <Slider pers={10} title='Python' />
                <Slider pers={50} title='Javascript' />
                <Slider pers={60} title='Css' />
                <View style={{height:2}}/>
            </View>
        </View>
    )
}

export default Polls