import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from 'components/molecules/Header';

import {useNavigation, useRoute} from '@react-navigation/native';

import {useAppDispatch} from 'src/redux/store';
import {useSelector} from 'react-redux';
import AuthSlice, {selectUser} from 'src/redux/auth';
import AppSlice, {
  selectAccessToken,
  selectAssessmentQuestions,
  selectDone,
} from 'src/redux/app';
import AppThunks from 'src/redux/app/thunks';
import ApplayHeader from './Header';
import {StatusBar} from 'react-native';
import {RenderSvgIcon} from 'components/atoms/svg';
import {FifthApplay, RecordAudio} from 'assets/Svgs';

import {appColors, appSizes} from 'theme';
import Button from 'components/molecules/Button';
import {Formik} from 'formik';
import CustomInput from 'components/molecules/Input/CustomInput';
import {styles} from '../styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DocumentPicker from 'react-native-document-picker';
import {SecondApplay, UploadYourCv} from 'assets/Svgs';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
  OutputFormatAndroidType,
} from 'react-native-audio-recorder-player';
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
    // Ensure answer is initialized properly
    if (!answer || !Array.isArray(answer)) {
        console.error("Answer is not properly initialized");
        return;
    }

    const arr = [...answer];

    // Ensure currentQuestionIndex is within bounds
    if (currentQuestionIndex < 0 || currentQuestionIndex >= arr.length) {
        console.error("Invalid currentQuestionIndex");
        return;
    }

    // Ensure arr[currentQuestionIndex] is defined and initialized properly
    if (!arr[currentQuestionIndex] || typeof arr[currentQuestionIndex] !== 'object') {
        console.error("Invalid answer object at currentQuestionIndex");
        return;
    }

    // Update the answer
    arr[currentQuestionIndex].answer = text;

    // Update the state
    setAnswer(arr);
};

  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'Noto Sans',
          color: '#000',
          fontWeight: '500',
          marginBottom: 10,
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
    <View style={{marginTop: 10}}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'Noto Sans',
          color: '#000',
          fontWeight: '500',
          marginBottom: 10,
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
  // console.log("answer1235",question)
  // const [smoker, setSmoker] = useState(false);

  // Logic for file upload
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'Noto Sans',
          color: '#000',
          fontWeight: '500',
        }}>
        {question?.question}
      </Text>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          // marginTop: 5,
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
                marginTop: 13,
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
  const [audioData, setAudioData] = useState<any>(null);
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
              fontSize: 18,
              fontFamily: 'Noto Sans',
              color: '#000',
              fontWeight: '700',
            }}>
            {questions?.question}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Noto Sans',
              color: '#000',
              fontWeight: '400',
              marginBottom: 10,
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
const Assignment = () => {
  // console.log(CurrentUserData)
  const {job_id}: any = useRoute().params;
  const User = useSelector(selectUser);
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const data = ['Yes', 'No'];
  const [buttonIndexSmoker, setButtonIndexSmoker] = React.useState(0);
  const [smoker, setSmoker] = useState(false);
  const [load, setLoad] = useState(false);
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const Questions = useSelector(selectAssessmentQuestions);
  React.useEffect(() => {
    setLoad(true);

    dispatch(AppThunks.doGetAssessmentQuestions(job_id)).then(() =>
      setLoad(false),
    );
  }, []);
  // console.log(Questions, 'assessments');

  const [answer, setAnswer] = useState<any>([]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // console.log("Hi",JSON.stringify(questions))
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(3);

  React.useEffect(() => {
    for (let i = 0; i < Questions.length; i++) {
      setAnswer((prev: any) => [
        ...prev,
        {
          question_id: Questions[i]?.id,
          type: Questions[i]?.type,
          answer: Questions[i]?.answer,
        },
      ]);
    }
  }, []);
  // console.log("answer",answer);

  const renderQuestion = (questions: any, index: number) => {
    // console.log('currentQuestionIndex', currentQuestionIndex);
    // console.log("questions",questions)
    const currentQuestion = Questions[index];
    switch (questions.type) {
      case 1:
        return (
          <TextInputQuestion
            question={currentQuestion}
            currentQuestionIndex={index}
            answer={answer}
            setAnswer={setAnswer}
          />
        );
      case 2:
        return (
          <ThirdApplayPageaudio
            questions={currentQuestion}
            currentQuestionIndex={index}
            answer={answer}
            setAnswer={setAnswer}
          />
        );
      case 3:
        return (
          <OptionsQuestion
            question={currentQuestion}
            currentQuestionIndex={index}
            answer={answer}
            setAnswer={setAnswer}
          />
        );
      case 4:
        return (
          <UploadFileQuestion
            question={currentQuestion}
            currentQuestionIndex={index}
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
  const changeDone = useSelector(selectDone);
  // console.log(changeDone)
  useEffect(() => {
    changeDone ? navigation.navigate('ApplicationsJob') : null;
  }, [changeDone]);

  const handleSubmit = () => {
    setIsSubmitting(true);
    // console.log("12346",JSON.stringify(answer))

    const formdata = new FormData();
    formdata.append('job_id', job_id);
    for (let i = 0; i < answer?.length; i++) {
      formdata.append(`array[${i}][assessment_id]`, answer[i].question_id);
      formdata.append(`array[${i}][type]`, answer[i].type);
      if (answer[i].type == 2) {
        formdata.append(`array[${i}][answer]`, {
          uri: answer[i].answer,
          type: 'audio/mp3',
          name: 'audio.mp3',
        });
      } else if (answer[i].type == 3 || answer[i].type == 1) {
        formdata.append(`array[${i}][answer]`, answer[i].answer);
      } else if (answer[i].type == 4) {
        formdata.append(`array[${i}][answer]`, {
          uri: answer[i]?.answer[0]?.uri,
          type: answer[i]?.answer[0]?.type,
          name: answer[i]?.answer[0]?.name,
        });
      }
    }
    console.log(JSON.stringify(formdata));
    dispatch(AppThunks.doPostAssessmentQuestions(formdata)).then((res: any) => {
      setIsSubmitting(false);
    });
  };
  return (
    <SafeAreaView edges={['top']} style={[styles.Container]}>
      <Header Title="Assessment" onPress={_handleNavigate} />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          alignItems: 'center',

          // flex:1
          // paddingBottom: 140,
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />

        <View style={{paddingHorizontal: 15, width: '100%'}}>
          <View style={styles.bottomSection}>
            {load ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 600,
                  width: '100%',
                }}>
                <ActivityIndicator size="large" color={appColors.primary} />
              </View>
            ) : (
              <>
                <View style={{marginTop: 10}}>
                  <View style={{marginBottom: 30}}>
                    <Text
                      style={{
                        fontSize: 22,
                        fontFamily: 'Noto Sans',
                        color: '#000',
                        fontWeight: '700',
                        marginBottom: 10,
                      }}>
                      Answer the questions
                    </Text>

                    {Questions.map((question: any, index: any) =>
                      renderQuestion(question, index),
                    )}
                    {/* <View style={{marginTop: 30}}>{renderQuestion()}</View> */}
                    {/* <View style={{height: appSizes.height * 0.05}} /> */}
                    <View
                      style={{
                        flexDirection: 'row',
                        columnGap: 10,
                        marginTop: 20,
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
                          onPress={() => {}}>
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
                          onPress={handleSubmit}
                          text={'Submit'}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Assignment;
