import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles'
import ContainerRecord from './ContainerRecord'
import Templetes from './Templetes'
import AddCaption from './AddCaption'
import Option from './Option'
import { SaveCircle } from 'assets/Svgs'
import Footer from './Footer'
import { useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectPhotoData, selectSearchData } from 'src/redux/app'

const Content = () => {
  const [caption,setCaption]=useState('')
 const searchPeople=useSelector(selectPhotoData)

 console.log("hello",searchPeople)
  return (
    <View style={styles.ContentCotainer}>
      <ContainerRecord />
      {/* <Templetes />  */}
      <AddCaption caption={caption} setCaption={setCaption}/>
      <Option />
      <Footer caption={caption}/>
    </View>
  )
}

export default Content