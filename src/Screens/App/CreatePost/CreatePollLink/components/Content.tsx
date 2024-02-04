import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles'
import ContainerRecord from './ContainerRecord'
import Templetes from './Templetes'
import AddCaption from './AddCaption'
import Option from './Option'
import { SaveCircle } from 'assets/Svgs'
import Footer from './Footer'

const Content = () => {
  const [caption,setCaption]=useState('')

  return (
    <View style={styles.ContentCotainer}>
      <ContainerRecord />
      {/* <Templetes />  */}
      <AddCaption caption={caption} setCaption={setCaption}/>
      <Option />
      <Footer/>
    </View>
  )
}

export default Content