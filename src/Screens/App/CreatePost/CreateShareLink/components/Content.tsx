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
const Content = (data:any) => {
  const [caption,setCaption]=useState('')
  const [key,setKey]=useState<any>(0)
  const [imgUrl,setImageURL]=useState<any>([])
  const searchPeople = useSelector(selectPhotoData);
  return (
    <View style={styles.ContentCotainer}>
        {searchPeople?.location==null||searchPeople?.location==''?null:
        <View style={{position:'absolute',top:20,left:20,flexDirection:'row',columnGap:5}} >
            <RenderSvgIcon
              icon="LOCATION"
              width={20}
              height={20}
              color={appColors.white}
            />
            <Text>{searchPeople?.location}</Text>
          </View>}
      <ContainerRecord data={[key,imgUrl]} audioData={data}   />
      <Templetes onPress={setKey} onPressImg={setImageURL} />
      {searchPeople?.names==null||searchPeople?.names?.length==0?null:
      <View style={styles.taggedPeopleContainer}>
        <Text style={styles.taggedPeopleTitle}>Tagged People:</Text>
        <View style={styles.taggedPeopleList}>
          {searchPeople?.names.map((person: any, index: any) => (
            <View key={index} style={styles.taggedPerson}>
              <Text>{person}</Text>
            </View>
          ))}
        </View>
      </View>}
      <AddCaption caption={caption} setCaption={setCaption}/>
      <Option onPress={setImageURL} />
      <Footer data={imgUrl}  />
    </View>
  )
}

export default Content