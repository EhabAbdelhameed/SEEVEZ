import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Pressable,
  Linking,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
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
import {appColors} from 'theme';
import { launchImageLibrary } from 'react-native-image-picker';
import Imagepicker from 'react-native-image-crop-picker';
const CreateVideo = () => {
  const navigation = useNavigation<any>();
  const [videoSource, setSourceVideo] = useState<any>([])
 
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [videoPath, setVideoPath] = useState('');
  const [isCameraInitialized, setIsCameraInitialized] = useState(false)
  const cameraRef: Camera | any = useRef<Camera>();
  const [cameraPosition, setCameraPosition] = React.useState<'front' | 'back'>(
    'back',
  );
  const device1 = useCameraDevice(cameraPosition);
  const { hasPermission, requestPermission } = useCameraPermission()
  const videoRef=useRef(null)
  useEffect(() => {
 
      // Start recording if necessary
      if (shouldNavigate && videoPath) {
        navigation.navigate('CreateVideo2', {
          videoPath: videoPath,
          key: 4,
        });
        setShouldNavigate(false); // Reset the flag
      }
  
  }, [navigation, shouldNavigate, videoPath]);
  const [torch, setTorch] = React.useState<'on' | 'off'>('off');
  const [stopVideo, setStopVideo] = useState(false);
  const requestMicrophonePermission = useCallback(async () => {
    console.log('Requesting microphone permission...')
    const permission = await Camera.requestMicrophonePermission()
    console.log(`Microphone permission status: ${permission}`)

    if (permission === 'denied') await Linking.openSettings()

  }, [])

  requestMicrophonePermission()
  const startRecording = async () => {
    Imagepicker.openCamera({
      mediaType: 'video',
    }).then(image => {
      console.log(image);
      setVideoPath(image?.path);
      setShouldNavigate(true);
    });
  };

  const pick = () => {
    launchImageLibrary({ quality: 0.5, mediaType: 'video' }).then((res: any) => {
      setSourceVideo(res?.assets);
      setVideoPath(res?.assets[0].uri)
      setTimeout(() => {
        navigation.navigate("CreateVideo2", {
          videoPath: res?.assets[0].uri,
          source: res,
          key: 5
        })
        setStopVideo(true)

      }, 1000);
      // setSource(res)
      // console.log("sdasdas "+JSON.stringify(res?.assets[0].uri))
    }

    );
  };

  const stopRecording = async () => {
    setIsRecording(false);
    setIsPlaying(true);
    await cameraRef.current.stopRecording();

    setShouldNavigate(true);
  };
  const onInitialized = useCallback(() => {
    console.log('Camera initialized!')
    setIsCameraInitialized(true)
  }, [])

  const device = useCameraDevice(cameraPosition);


  if (device == null) return console.log("hdhsdasas")
   
  return (
    <SafeAreaView edges={['top']} style={[globalStyles.screen, {}]}>
      {
        videoPath.length ? (
          <Video
            resizeMode="cover"
            repeat
             paused={stopVideo}
            source={{uri: videoPath}}
            style={styles.video}
          />
        ) : (
          <View
            style={styles.camera}
       
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
        <Pressable>
          <RenderSvgIcon icon="SETTING" />
        </Pressable>
      </View>
      <View style={styles.bottomContainer}>
      <ImagePicker onPress={pick} />
        <TouchableOpacity
          onPress={() => {
            isRecording ? stopRecording() : startRecording();
          }}
          style={{
            zIndex: 100000,
          }}>
          {isRecording ? (
            <PauseVideoIcon
              // onPress={() => {
              //   isRecording ? stopRecording() : startRecording();
              // }}
            />
          ) : (
            <CreateVideoIcon
             
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

export default CreateVideo;
