import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../style'
import { RenderSvgIcon } from 'components/atoms/svg'
import { useSelector } from 'react-redux'
import { selectPhotoData } from 'src/redux/app'
import { selectUser } from 'src/redux/auth'
import AppThunks from 'src/redux/app/thunks'
import { useAppDispatch } from 'src/redux/store'


const Polls = (data:any) => {
    const Item = ({ pers, name, color ,index,selected}: { pers: number; name: string; color: string; index:number;selected:boolean}) => {
        return (
            <>
            
                <View style={{ marginTop: 5 }}>
                    <Text style={styles.text13}>{name}</Text>
                    <View style={[styles.rowItemSlide,{columnGap:5}]}>
                     
                        <Text style={[styles.text12,{width:'14%'}]}>{pers}%</Text>
                       
                        <View style={{ width: "90%" }}>
                            <View style={[styles.slider, {
                                backgroundColor: color,
                                opacity: .4
                            }]} />
                            <View style={[styles.slider, {
                                backgroundColor:color,
                                position: "absolute",
                                left: 0,
                                width: `${pers}%`
                            }]} />
                            <View style={[styles.circleSlider, {
                                left: `${pers-9}%`,
                                borderColor: color,
                                backgroundColor: color,
                                width:21,
                                height:21,

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
        <View style={[styles.bollsContainer,{width:'100%',paddingHorizontal:20,marginTop:10}]}>
            <Text style={styles.text11}>{data?.data?.question}</Text>
            {/* <Text style={styles.text12}>Lorem ipsum dolor sit amet consectetur.</Text> */}
            {data?.data?.answers?.map((Exp: any, index: any) => (
            <Item
                pers={Exp?.voteCount}
                name={Exp?.data}
                color={index==0?"rgba(0, 206, 200, 1)":index==1?'#1D5EDD':'#E8AB00'}
                index={index}
                selected={Exp?.isVotedByUser}
            />))}
          
        </View>
    )
}

export default Polls