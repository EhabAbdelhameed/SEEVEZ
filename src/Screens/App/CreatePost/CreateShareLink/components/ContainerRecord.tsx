import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { styles } from '../styles'

const ContainerRecord = () => {
    return (
        <ImageBackground
            source={require("assets/images/bgGrediant.png")}
            style={styles.bgContainer}
            resizeMode='stretch'
        >
        
                <Image
                    source={require("assets/images/Record.png")}
                    style={{width:"60%"}}
                    resizeMode='contain'
                />
         
        </ImageBackground>
    )
}

export default ContainerRecord