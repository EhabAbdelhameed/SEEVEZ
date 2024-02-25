import {
  View,
  Text,
  Image,
  ImageRequireSource,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from '../styles';
import {Modalize} from 'react-native-modalize';
import JumpModal from './JumpModal';
import {appColors} from 'theme/appColors';
import { useTranslation } from 'react-i18next';
import { selectLang } from 'src/redux/lang';
import { useAppSelector } from 'src/redux/store';

const jobSeeker = {
  title: 'Sign up as a job seeker',
  question: '',
  answers: [
    {
      answer: 'Employed',
      selected: false,
    },
    {
      answer: 'Unemployed',
      selected: true,
    },
    {
      answer: 'Internship',
      selected: false,
    },
    {
      answer: 'Freelancer',
      selected: false,
    },
  ],
};
const creator = {
  title: 'Sign up as a recruiter',
  question: 'Are you a company or a freelance recruiter ?',
  answers: [
    {
      answer: 'Company', 
      selected: false,
    },
    {
      answer: 'Freelance recruiter',
      selected: true,
    },
  ],
};

const RectangleBtn = ({
  img,
  title1,
  title2,
  nav,
}: {
  img: any;
  title1: string;
  title2: string;
  nav?: any;
}) => {
  const {width, height} = useWindowDimensions();
  const lang = useAppSelector(selectLang);
  const {t, i18n} = useTranslation();
  const ModalRef = useRef<Modalize>(null);
  const [data, setData] = useState(creator);
  return (
    <>
      <TouchableOpacity
        style={[styles.rectangleContainer,{direction: lang == 'en' ? 'ltr' : 'rtl'}]}
        onPress={() => {
          title2.toLowerCase().includes(lang == 'en'?'recruiter':'موظف التوظيف')
            ? setData(creator)
            : setData(jobSeeker);
          setTimeout(() => {
            ModalRef.current?.open();
          }, 100);
        }}>
            {/* <View style={styles.imgRectangle}></View> */}
        <Image source={img} style={styles.imgRectangle} resizeMode="cover" />
        <View
          style={{
        
            
          }}>
          <Text style={styles.rectangleText}>{t(title1)}</Text>
          <Text style={[styles.rectangleText1]}>{t(title2)}</Text>
        </View>    
      </TouchableOpacity>
      <JumpModal ModalRef={ModalRef} setData={setData} data={data} />
    </>
  );
};

export default RectangleBtn;
