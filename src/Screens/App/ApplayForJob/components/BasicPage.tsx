import CustomInput from 'components/molecules/Input/CustomInput';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {View, Text, TextInput, StatusBar, TouchableOpacity} from 'react-native';
import ThirdApplayPage from './ThirdJob';
import FourthApplayPage from './FourthJob';
import {SafeAreaView} from 'react-native-safe-area-context';
import ApplayHeader from './Header';
import styles from '../styles';
import {appColors, appSizes} from 'theme';
import Button from 'components/molecules/Button';
import {useRoute} from '@react-navigation/native';
import {SecondApplay} from 'assets/Svgs';
// Component for text input question
const TextInputQuestion = (question: any) => {
  // console.log(question)
  const handleTextInputChange = (text: any) => {
    // setAnswer(text);
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'Noto Sans',
          color: '#000',
          fontWeight: '500',
          marginBottom: 15,
        }}>
        {question?.question?.question}
      </Text>
      <View
        style={{
          width: '100%',
          height: 50,
          borderWidth: 1,
          borderRadius: 16,
          borderColor: appColors.primary,
          alignContent: 'center',
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 15,
        }}>
        <TextInput
          placeholder={'Write here'}
          style={{
            height: '100%',
            fontSize: 14,
            width: '92%',
          }}
          placeholderTextColor={'#B9B9B9'}
          onChangeText={e => handleTextInputChange(e)}
        />
      </View>
    </View>
  );
};

// Component for file upload question
const OptionsQuestion = (question: any) => {
  const data = ['Yes', 'No'];
  const [buttonIndexSmoker, setButtonIndexSmoker] = React.useState(0);
  const [smoker, setSmoker] = useState(false);
  // Logic for file upload
  return (
    <View>
      <Text
        style={{
          fontSize: 22,
          fontFamily: 'Noto Sans',
          color: '#000',
          fontWeight: '700',
        }}>
        {question}
      </Text>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginTop: 10,
        }}>
        {data?.map((item: any, index: any) => (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              setButtonIndexSmoker(index), setSmoker(!smoker);
            }}>
            <View style={[styles.Circle, {marginTop: 15}]}>
              {buttonIndexSmoker == index ? (
                <View style={styles?.innerCircle} />
              ) : null}
            </View>

            <Text
              style={{
                color: '#000',
                marginLeft: 8,
                fontFamily: 'Noto Sans',
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const DynamicQuestionsComponent = () => {
  const [answer, setAnswer] = useState('');
  const {data, questions}: any = useRoute().params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
    }
  };

  const renderQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    switch (currentQuestion.type) {
      case 1:
        return <TextInputQuestion question={currentQuestion} />;
      case 2:
        return <ThirdApplayPage question={currentQuestion} />;
      case 3:
        return <OptionsQuestion question={currentQuestion} />;

      default:
        return null;
    }
  };
  const handleCancel = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      // Handle if user is on the first question
    }
  };

  return (
    <SafeAreaView edges={['top']} style={[styles.Container]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <ApplayHeader />

      <View style={styles.bottomSection}>
        <View style={{marginTop: 40}}>
          <SecondApplay width={'100%'} height={20} />
          <View style={{marginTop: 30}}>
            {renderQuestion()}
            <View style={{height: appSizes.height * 0.48}} />
            <View style={{flexDirection: 'row', columnGap: 10}}>
              <View style={{width: '49%'}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: appColors.bg,
                    borderWidth: 1,
                    borderColor: appColors.primary,
                    paddingVertical: 10,
                    borderRadius: 16,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={handleCancel}>
                  <Text
                    style={{
                      color: appColors.primary,
                      fontSize: 18,
                      fontWeight: '500',
                      textAlign: 'center',
                      fontFamily: 'Noto Sans',
                    }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{width: '49%'}}>
                <Button onPress={handleNext} text={'Next'} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DynamicQuestionsComponent;
