import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {Star} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
const QuestionReview = ({data}:{data:any}) => {
  const navigation = useNavigation<any>();
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  // const data = [
  //   {
  //     question:
  //       "Have you completed the following level of education: Bachelor's Degree?",
  //     answer: 'Yes',
  //     id: '1',
  //   },
  //   {
  //     question:
  //       'How many years of work experience do you have with Prototyping?',
  //     answer: '3',
  //     id: '2',
  //   },
  //   {
  //     question:
  //       'How many years of work experience do you have with User Flows?',
  //     answer: '3',
  //     id: '3',
  //   },
  //   {
  //     question:
  //       'How many years of work experience do you have with Figma (Software)?',
  //     answer: '3',
  //     id: '4',
  //   },
  //   {
  //     question: 'What are your salary expectations?',
  //     answer: '2000',
  //     id: '5',
  //   },
  // ];
  return (
    <View style={{}}>
    
        <View >
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Noto Sans',
              color: '#000',
              fontWeight: '700',
              marginTop: 10,
            }}>
            {data?.question?.question}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Noto Sans',
              color: '#000',
              fontWeight: '400',
              marginTop: 10,
            }}>
            {data?.answer?.answer}
          </Text>
        </View>
  
    </View>
  );
};

export default QuestionReview;