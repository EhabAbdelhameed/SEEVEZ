import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import { RenderSvgIcon } from 'components/atoms/svg'


const Poll = () => {
    const Item = ({ pers, name, color ,selected}: { pers: number; name: string; color: string; selected:boolean;}) => {
        return (
            <>
                <View style={{ marginTop: 5 }}>
                    <Text style={styles.text13}>{name}</Text>
                    <View style={styles.rowItemSlide}>
                        <Text style={styles.text12}>{pers}%</Text>
                        <View style={{ width: "78%" }}>
                            <View style={[styles.slider, {
                                backgroundColor: color,
                                opacity: .4
                            }]} />
                            <View style={[styles.slider, {
                                backgroundColor: color,
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
            <Text style={styles.text11}>Which is better ?</Text>
            <Text style={styles.text12}>Lorem ipsum dolor sit amet consectetur.</Text>
            <Item
                pers={25}
                name="Python"
                color="rgba(0, 206, 200, 1)"
                selected={true}
            />
            <Item 
            pers={35}
             name="Css"
                color='#1D5EDD'
                selected={false}

            />
            <Item pers={40} name="JS"
                color="#E8AB00"
                selected={false}

            />
        </View>
    )
}

export default Poll