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

  const [stopVideo, setStopVideo] = useState(false);
  return (
    <View style={styles.ContentCotainer}>

      <ContainerRecord  stopVideo={stopVideo}/>
   
      <AddCaption caption={caption} setCaption={setCaption} />
      <Option />
      <Footer data={caption} setStopVideo={setStopVideo}  />
    </View>
  );
};

export default Content;
