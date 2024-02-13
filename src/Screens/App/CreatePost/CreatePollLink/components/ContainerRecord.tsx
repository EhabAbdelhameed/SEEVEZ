import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import Polls from 'screens/App/BottomTab/Home/components/Polls'
import Poll from './Poll'
import CV from './CV'
import { selectPhotoData } from 'src/redux/app'
import { useSelector } from 'react-redux'



const ContainerRecord = () => {
  const photoData=useSelector(selectPhotoData)

    return ( 
        <ImageBackground   
            source={{uri:photoData.key=='1'?photoData?.image?.node?.image?.uri:'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'}}
            style={[styles.bgContainer,{width:320,height:400,alignSelf:'center',alignItems:'center'}]}
            resizeMode='cover'
        >  
{/*         
             <Poll/> */}
             <CV />
        </ImageBackground>
    )
}

export default ContainerRecord