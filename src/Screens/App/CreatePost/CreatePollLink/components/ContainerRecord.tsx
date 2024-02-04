import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import Polls from 'screens/App/BottomTab/Home/components/Polls'
import Poll from './Poll'

const ContainerRecord = () => {
    return ( 
        <ImageBackground   
            source={require('src/assets/images/ReelImage.png')}
            style={[styles.bgContainer,{width:320,height:400,alignSelf:'center',alignItems:'center'}]}
            resizeMode='cover'
        >
        
             <Poll/>
        </ImageBackground>
    )
}

export default ContainerRecord