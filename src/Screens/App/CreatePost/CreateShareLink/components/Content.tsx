import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles'
import ContainerRecord from './ContainerRecord'
import Templetes from './Templetes'
import AddCaption from './AddCaption'
import Option from './Option'
import { SaveCircle } from 'assets/Svgs'
import Footer from './Footer'
import { selectPhotoData } from 'src/redux/app'
import { useSelector } from 'react-redux'
import { RenderSvgIcon } from 'components/atoms/svg'
import { appColors } from 'theme'
const Content = () => {
  const [caption,setCaption]=useState('')
  const [imgUrl,setImageURL]=useState<any>([])
  const searchPeople = useSelector(selectPhotoData);
  const [key,setKey]=useState<any>(0)  

  return (
    <View style={styles.ContentCotainer}>
      
      <ContainerRecord data={key}    />
      <Templetes onPress={setKey} onPressImg={setImageURL} />
   
      <AddCaption caption={caption} setCaption={setCaption}/>
      <Option onPress={setImageURL} imgUrl={imgUrl} />
      <Footer data={[key,imgUrl,caption]}  />
    </View>
  )
}

export default Content