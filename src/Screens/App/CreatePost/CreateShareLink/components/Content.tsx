import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles'
import ContainerRecord from './ContainerRecord'
import Templetes from './Templetes'
import AddCaption from './AddCaption'
import Option from './Option'
import { SaveCircle } from 'assets/Svgs'
import Footer from './Footer'
const Content = (data:any) => {
  const [caption,setCaption]=useState('')
  const [key,setKey]=useState<any>(0)
  const [imgUrl,setImageURL]=useState<any>([])
    console.log(data)
  return (
    <View style={styles.ContentCotainer}>
      <ContainerRecord data={[key,imgUrl]} audioData={data}   />
      <Templetes onPress={setKey} onPressImg={setImageURL} />
      <AddCaption caption={caption} setCaption={setCaption}/>
      <Option onPress={setImageURL} />
      <Footer data={imgUrl} audioData={data} />
    </View>
  )
}

export default Content