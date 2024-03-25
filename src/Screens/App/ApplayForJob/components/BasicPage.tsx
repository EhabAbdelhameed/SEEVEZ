import CustomInput from 'components/molecules/Input/CustomInput';
import {Formik} from 'formik';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ThirdApplayPage from './ThirdJob';
import FourthApplayPage from './FourthJob';
import {SafeAreaView} from 'react-native-safe-area-context';
import ApplayHeader from './Header';
import styles from '../styles';
import {appColors, appSizes} from 'theme';
import Button from 'components/molecules/Button';
import {useNavigation, useRoute} from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import {RecordAudio, SecondApplay, UploadYourCv} from 'assets/Svgs';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
  OutputFormatAndroidType,
} from 'react-native-audio-recorder-player';
import Content from 'screens/App/CreatePost/CreateVoice/components/Content';
import AppThunks from 'src/redux/app/thunks';
import {useAppDispatch} from 'src/redux/store';
import { current } from '@reduxjs/toolkit';
import ApplySteps from './ApplaySteps';
const audioRecorderPlayer = new AudioRecorderPlayer();
// Component for text input question
const TextInputQuestion = ({
  question,
  currentQuestionIndex,
  answer,
  setAnswer,
}: {
  question: any;
  currentQuestionIndex: any;
  answer: any;
  setAnswer: React.Dispatch<React.SetStateAction<any>>;
}) => {
  // console.log(question)
  const handleTextInputChange = (text: any) => {
    const arr = [...answer];
    arr[currentQuestionIndex].answer = text;

    setAnswer(arr);
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
        {question?.question}
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
          value={answer[currentQuestionIndex]?.answer}
          onChangeText={e => handleTextInputChange(e)}
        />
      </View>
    </View>
  );
};
//
const UploadFileQuestion = ({
  question,
  currentQuestionIndex,
  answer,
  setAnswer,
}: {
  question: any;
  currentQuestionIndex: any;
  answer: any;
  setAnswer: React.Dispatch<React.SetStateAction<any>>;
}) => {
  // console.log(question)

  const [source, setSource] = useState<any>([]);

  const uploadFile = async () => {
    try {
      const res: any = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });

      setSource(res);
      const arr = [...answer];
      arr[currentQuestionIndex].answer = res;
      setAnswer(arr);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Canceled');
      } else {
        console.log('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
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
        {question?.question}
      </Text>
      <TouchableOpacity onPress={uploadFile} style={styles.InputStyleNoWidth1}>
        <UploadYourCv width={24} height={24} />
        <View>
          {source?.length == 0 ? (
            <Text
              numberOfLines={1}
              style={{fontSize: 20, color: appColors.primary}}>
              Upload file
            </Text>
          ) : (
            <Text
              numberOfLines={1}
              style={{fontSize: 20, color: appColors.primary}}>
              {source[0].name}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

// Component for file upload question
const OptionsQuestion = ({
  question,
  currentQuestionIndex,
  answer,
  setAnswer,
}: {
  question: any;
  currentQuestionIndex: any;
  answer: any;
  setAnswer: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [buttonIndexSmoker, setButtonIndexSmoker] = React.useState(20);
  const arr = [...answer];
  // const [smoker, setSmoker] = useState(false);

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
        {question?.question}
      </Text>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginTop: 10,
        }}>
        {question?.options?.map((item: any, index: any) => (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              setButtonIndexSmoker(index),
                (arr[currentQuestionIndex].answer = item);
              setAnswer(arr);
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

const ThirdApplayPageaudio = ({
  questions,
  currentQuestionIndex,
  answer,
  setAnswer,
}: {
  questions: any;
  currentQuestionIndex: any;
  answer: any;
  setAnswer: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStoped, setIsStoped] = useState(false);
  const [audioData, setAudioData] = useState<any>(answer[currentQuestionIndex]?.answer);
  const [recordData, setRecordData] = useState<any>('');
  const [milliseconds, setMilliseconds] = useState(0);
  const [answers, setAnswers] = useState([]);

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    let timerInterval: any;

    if (isRecording) {
      timerInterval = setInterval(() => {
        setMilliseconds(prevMilliseconds => (prevMilliseconds + 100) % 1000);
        setSeconds(prevSeconds =>
          Math.floor((prevSeconds + (milliseconds + 100) / 1000) % 60),
        );
        setMinutes(prevMinutes =>
          Math.floor((prevMinutes + (seconds + 1) / 60) % 60),
        );
        setHours(prevHours =>
          Math.floor((prevHours + (minutes + 1) / 60) % 24),
        );
      }, 100);
    }

    return () => clearInterval(timerInterval);
  }, [isRecording, milliseconds, seconds, minutes, hours]);
  useEffect(() => {
    return () => {
      // Clean up when the component unmounts
      audioRecorderPlayer.stopPlayer();
      // const arr=[...answer]
    };
  }, []);
  useEffect(() => {
    if (audioData !== null) {
      const arr = [...answer];
      arr[currentQuestionIndex].answer = audioData;

      setAnswer(arr);
    }
  }, [audioData]);
  const startRecording = async () => {
    try {
      setIsRecording(true);
      await audioRecorderPlayer.startRecorder();
    } catch (error) {
      console.error('Error starting recording: ', error);
    }
  };
  const stopRecording = async () => {
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      setIsRecording(false);
      setIsStoped(true);

      const audioDataArray: any = Array.isArray(result)
        ? result
        : Array.from(result);
      setAudioData(result);
      setRecordData(result);

      // console.log('Recording stopped. Audio data:123', result);
    } catch (error) {
      console.error('Error stopping recording: ', error);
    }
  };

  const resetTimer = () => {
    setMilliseconds(0);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setIsStoped(false);
    setIsRecording(false);
    setAudioData(null);
  };
  const startPlayback = async () => {
    try {
      await audioRecorderPlayer.startPlayer();
      setIsPlaying(true);
    } catch (error) {
      console.error('Error starting playback: ', error);
    }
  };

  const stopPlayback = async () => {
    try {
      await audioRecorderPlayer.stopPlayer();
      setIsPlaying(false);
    } catch (error) {
      console.error('Error stopping playback: ', error);
    }
  };

  // Logic for file upload
  return (
    <View>
      <View style={{marginTop: 10}}>
        <View style={{marginTop: 10, marginBottom: 30}}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: 'Noto Sans',
              color: '#000',
              fontWeight: '700',
            }}>
            {questions?.question}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Noto Sans',
              color: '#000',
              fontWeight: '400',
            }}>
            Max duration is 3 minutes
          </Text>
          {isRecording ? (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: appColors.black,
                  fontSize: appSizes.font_xxxxl,
                  fontWeight: '600',
                }}>{`${hours.toString().padStart(2, '0')}:${minutes
                .toString()
                .padStart(2, '0')}:${seconds
                .toString()
                .padStart(2, '0')}.${milliseconds
                .toString()
                .padStart(2, '0')}`}</Text>
            </View>
          ) : null}

          <TouchableOpacity
            onPress={() => (isRecording ? stopRecording() : startRecording())}
            style={styles.InputStyleNoWidth1}>
            <RecordAudio width={30} height={30} />
            <View>
              <Text
                numberOfLines={1}
                style={{fontSize: 20, color: appColors.primary}}>
                record
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {isRecording ? (
        <></>
      ) : audioData != null ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 10,
              width: '100%',
              backgroundColor: appColors.primary,
              paddingHorizontal: 20,
              paddingVertical: 16,
              borderRadius: 16,
            }}
            onPress={startPlayback}>
            <Text style={{color: appColors.white, fontSize: 18}}>
              Start Playback
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 10,
              width: '100%',
              backgroundColor: appColors.primary,
              paddingHorizontal: 20,
              paddingVertical: 16,
              borderRadius: 16,
            }}
            onPress={stopPlayback}
            // disabled={isPlaying}
          >
            <Text style={{color: appColors.white, fontSize: 18}}>
              Stop Playback
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 10,
              width: '100%',
              backgroundColor: appColors.bink,
              paddingHorizontal: 20,
              paddingVertical: 16,
              borderRadius: 16,
            }}
            onPress={resetTimer}
            // disabled={isPlaying}
          >
            <Text style={{color: appColors.white, fontSize: 18}}>Remove</Text>
          </TouchableOpacity>
          {/* {audioData && (
            <View style={{ marginTop: 20 }}>
              <Button title="Start Playback" onPress={startPlayback} disabled={isRecording} />
            </View>
          )} */}
        </View>
      ) : null}
    </View>
  );
};

const DynamicQuestionsComponent = () => {
  const [answer, setAnswer] = useState<any>([]);
  const {data, questions}: any = useRoute().params;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useAppDispatch();
  // console.log("Hi",JSON.stringify(questions))
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(3);
  const navigation = useNavigation<any>();
  const handleNext = () => {
    if (currentQuestionIndex < data?.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
    }
  };
  React.useEffect(() => {
    for (let i = 0; i < data?.questions.length; i++) {
      setAnswer((prev: any) => [
        ...prev,
        {
          question_id: data?.questions[i].id,
          type: data?.questions[i].type,
          answer:
            i == 0
              ? data.email
              : i == 1
              ? data.phone
              : i == 2
              ? data.cv_pdf
              : null,
        },
      ]);
    }
  }, []);
  // console.log("answer",answer);

  const renderQuestion = () => {
    // console.log('currentQuestionIndex', currentQuestionIndex);
    const currentQuestion = data?.questions[currentQuestionIndex];
    switch (currentQuestion.type) {
      case 1:
        return (
          <TextInputQuestion
            question={currentQuestion}
            currentQuestionIndex={currentQuestionIndex}
            answer={answer}
            setAnswer={setAnswer}
          />
        );
      case 2:
        return (
          <ThirdApplayPageaudio
            questions={currentQuestion}
            currentQuestionIndex={currentQuestionIndex}
            answer={answer}
            setAnswer={setAnswer}
          />
        );
      case 3:
        return (
          <OptionsQuestion
            question={currentQuestion}
            currentQuestionIndex={currentQuestionIndex}
            answer={answer}
            setAnswer={setAnswer}
          />
        );
      case 4:
        return (
          <UploadFileQuestion
            question={currentQuestion}
            currentQuestionIndex={currentQuestionIndex}
            answer={answer}
            setAnswer={setAnswer}
          />
        );

      default:
        return null;
    }
  };
  const handleCancel = () => {
    if (currentQuestionIndex > 3) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      setAnswer([]);
      navigation.goBack();
      // Handle if user is on the first question
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    const formdata = new FormData();
    formdata.append('job_id', data?.job_id);
    for (let i = 0; i < answer?.length; i++) {
      formdata.append(`array[${i}][question_id]`, answer[i].question_id);
      formdata.append(`array[${i}][type]`, answer[i].type);

      if (Array.isArray(answer[i].answer)) {
        formdata.append(`array[${i}][answer]`, {
          uri: answer[i].answer[0]?.uri,
          type: answer[i].answer[0]?.type,
          name: answer[i].answer[0]?.name,
        });
      } else {
        formdata.append(`array[${i}][answer]`, answer[i].answer);
      }
    }
    console.log(JSON.stringify(formdata));
    dispatch(AppThunks.doApplayQuestion(formdata)).then((res: any) => {
      setIsSubmitting(false);
    });
  };
  return (
    <SafeAreaView edges={['top']} style={[styles.Container]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <ApplayHeader />

      <View style={styles.bottomSection}>
        <View style={{}}>
        <ApplySteps question={data?.questions} CurrentIndex={currentQuestionIndex-1}/>
          <View style={{marginTop: 30}}>{renderQuestion()}</View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            columnGap: 10,
            position: 'absolute',
            bottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
            left: 20,
          }}>
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
            <Button
            loading={isSubmitting}
              onPress={
                data?.questions?.length - 1 == currentQuestionIndex
                  ? handleSubmit
                  : handleNext
              }
              text={
                data?.questions?.length - 1 == currentQuestionIndex
                  ? 'Submit'
                  : 'Next'
              }
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DynamicQuestionsComponent;
