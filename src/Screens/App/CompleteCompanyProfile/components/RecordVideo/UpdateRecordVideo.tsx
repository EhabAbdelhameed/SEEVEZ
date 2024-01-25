import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Pressable,
  } from 'react-native';
  import React, {useCallback, useRef, useState} from 'react';
  import {globalStyles} from 'src/globalStyle';
  import {SafeAreaView} from 'react-native-safe-area-context';
  import {
    Camera,
    CameraProps,
    VideoFile,
    useCameraDevices,
    useCameraDevice,
    useCameraPermission,
  } from 'react-native-vision-camera';
  import {styles} from './styles';
  import Video from 'react-native-fast-video';
  import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
  import {RenderSvgIcon} from 'components/atoms/svg';
  import {CreateVideoIcon, ImagePicker, PauseVideoIcon} from 'assets/Svgs';
  import {useNavigation} from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import {appColors} from 'theme';
  
  const UpdateRecordVideo = () => {
    const navigation = useNavigation<any>();
    const _handleNavigate = useCallback(() => {
      navigation.goBack();
    }, []);
    const [isRecording, setIsRecording] = useState(false);
    const [videoSource,setSourceVideo]=useState<any>([])
    const [videoPath, setVideoPath] = useState('');
    const cameraRef: Camera | any = useRef<Camera>();
    const [isPlaying, setIsPlaying] = useState(false);
    const [cameraPosition, setCameraPosition] = React.useState<'front' | 'back'>(
      'back',
    );
    const [torch, setTorch] = React.useState<'on' | 'off'>('off');
    const UploadVideoProfile = async () => {
        try {
          const result = await DocumentPicker.pick({
            type: [DocumentPicker.types.video],
          });
    
          // The selected media is available in the result.uri
          // dispatch(setImageURL(result[0].uri));
    
          setSourceVideo(result);
          setVideoPath(result[0].uri)
          setTimeout(() => {
            navigation.navigate("SaveVideo",{
                videoPath:result[0].uri
            })
         }, 1000);
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
            console.log('User cancelled document picker');
          } else {
            console.error('DocumentPicker Error:', err);
          }
        }
      };
      const startRecording = async () => {
        setVideoPath('');
        const checkMicrophonePermission = async () => {
          const microphonePermission = await request(PERMISSIONS.IOS.MICROPHONE);
          const cameraPermission = await request(PERMISSIONS.IOS.CAMERA);
          const cameraPermission1 = await request(PERMISSIONS.ANDROID.CAMERA);
  
          const microphonePermission1 = await request(
            PERMISSIONS.ANDROID.RECORD_AUDIO,
          ); //
  
          //
          if (
            (cameraPermission === RESULTS.GRANTED &&
              microphonePermission === RESULTS.GRANTED) ||
            (cameraPermission1 === 'granted' && microphonePermission1 === 'granted')
          ) {
            // Microphone permission granted, proceed with camera setup
  
            setIsRecording(true);
            cameraRef.current.startRecording({
              quality: '720p',
            
              // videoBitrate: 2000000,
              maxDuration: 10, // Set the maximum duration in seconds (optional)
              // maxFileSize: 100 * 1024 * 1024, // Set the maximum file size in bytes (optional)
              onRecordingError: () => {
                // alert("error")
              },
              // outputPath: videoPath,
              onRecordingFinished: async (video: any) => {
                setVideoPath(video?.path);
                console.log(video)
              },
            });
          } else {
            // Microphone permission denied, handle accordingly
            console.warn('Microphone permission denied');
            Alert.alert('Microphone permission denied');
          }
        };
        checkMicrophonePermission();
      };
  
  
    const stopRecording = async () => {
      setIsRecording(false);
      setIsPlaying(true);
      await cameraRef.current.stopRecording();
     setTimeout(() => {
        navigation.navigate("SaveVideo",{
            videoPath:videoPath
        })
     }, 1000);

    };
    
  
    const device = useCameraDevice(cameraPosition);
  
    if (device == null)
      return (
        <>
          {console.log('jfhhdsfh')}
          <SafeAreaView edges={['top']} style={globalStyles.screen}>
            <TouchableOpacity
              style={styles.skipContainer}
              onPress={() => {
                navigation.navigate('CreateVideo2', {
                  video: videoPath,
                });
              }}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </>
      );
    return (
      <SafeAreaView edges={['top']} style={[globalStyles.screen, {}]}>
        {
          videoPath.length ? (
            <Video
              resizeMode="cover"
            //   controls={true}
              source={{uri: videoPath}}
              style={styles.video}
            
            />
          ) : (
            <Camera
              style={styles.camera}
              ref={cameraRef}
              video={true}
              // style={StyleSheet.absoluteFill}
              audio={true}
              device={device}
              isActive={true}
              torch={torch}
              onError={error => {}}
            />
          )
          // <Text>dfnfkseah</Text>
        }
        <View style={styles.topContainer}>
          <TouchableOpacity
            style={styles.skipContainer}
            onPress={_handleNavigate}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <Pressable
            onPress={() => {
              torch == 'off' ? setTorch('on') : setTorch('off');
            }}>
            <RenderSvgIcon icon="FLASH" />
          </Pressable>
          {/* <Pressable
            onPress={() => {
              navigation.navigate('CreateVideo2', {
                video: videoPath,
              });
            }}>
            <RenderSvgIcon icon="SETTING" />
          </Pressable> */}
        </View>
        <View style={styles.bottomContainer}>
          <ImagePicker onPress={UploadVideoProfile}/>
          <TouchableOpacity
            onPress={() => {
              isRecording ? stopRecording() : startRecording();
            }}
            style={{
              zIndex: 100000,
            }}>
            {isRecording ? (
              <PauseVideoIcon
                onPress={() => {
                  isRecording ? stopRecording() : startRecording();
                }}
              />
            ) : (
              <CreateVideoIcon
                onPress={() => {
                  isRecording ? stopRecording() : startRecording();
                }}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              cameraPosition == 'front'
                ? setCameraPosition('back')
                : setCameraPosition('front');
            }}>
            <RenderSvgIcon icon="CAMERARECORD" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default UpdateRecordVideo;
  