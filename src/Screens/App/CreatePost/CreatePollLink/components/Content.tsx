import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styles';
import ContainerRecord from './ContainerRecord';
import Templetes from './Templetes';
import AddCaption from './AddCaption';
import Option from './Option';
import {SaveCircle} from 'assets/Svgs';
import Footer from './Footer';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectPhotoData, selectSearchData} from 'src/redux/app';
import { RenderSvgIcon } from 'components/atoms/svg';
import { appColors } from 'theme';

const Content = () => {
  const [caption, setCaption] = useState('');
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
      <ContainerRecord />
   
      <AddCaption caption={caption} setCaption={setCaption} />
      <Option />
      <Footer caption={caption} />
    </View>
  );
};

export default Content;
