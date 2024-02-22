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
import {useNavigation, useRoute} from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import {appColors} from 'theme';
import {launchImageLibrary} from 'react-native-image-picker';
import Imagepicker from 'react-native-image-crop-picker';

const UpdateRecordVideo = () => {
  const {keys}: any = useRoute().params;
  console.log('This KEYS', keys);
  const navigation = useNavigation<any>();
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const [isRecording, setIsRecording] = useState(false);
  const [videoSource, setSourceVideo] = useState<any>([]);
  const [videoPath, setVideoPath] = useState('');
  const [path, setPath] = useState('');

  const cameraRef: Camera | any = useRef<Camera>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [cameraPosition, setCameraPosition] = React.useState<'front' | 'back'>(
    'front',
  );
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [torch, setTorch] = React.useState<'on' | 'off'>('off');

  const UploadVideoProfile = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.video],
      });

      // The selected media is available in the result.uri
      // dispatch(setImageURL(result[0].uri));

      setSourceVideo(result);
      setVideoPath(result[0].uri);
      setTimeout(() => {
        navigation.navigate('SaveVideo', {
          videoPath: result[0].uri,
          source: result,
          key: 2,
        });
      }, 1000);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled document picker');
      } else {
        console.error('DocumentPicker Error:', err);
      }
    }
  };

  const pick = () => {
    launchImageLibrary({quality: 0.5, mediaType: 'video'}).then((res: any) => {
      setSourceVideo(res?.assets);
      setVideoPath(res?.assets[0].uri);
      setTimeout(() => {
        navigation.navigate('SaveVideo', {
          videoPath: res?.assets[0].uri,
          source: res,
          key: keys == 5 ? 3 : 2,
        });
      }, 1000);
      // setSource(res)
      // console.log("sdasdas "+JSON.stringify(res?.assets[0].uri))
    });
  };
  useEffect(() => {
    requestMicrophonePermission();
  }, []);

  const requestMicrophonePermission = useCallback(async () => {
    console.log('Requesting microphone permission...');
    const permission = await Camera.requestMicrophonePermission();
    console.log(`Microphone permission status: ${permission}`);

    if (permission === 'denied') await Linking.openSettings();
  }, []);

  const startRecording = async () => {
    Imagepicker.openCamera({
      mediaType: 'video',
    }).then(image => {
      console.log(image);
      setVideoPath(image?.path);
      setShouldNavigate(true);
    });
  };

  const stopRecording = async () => {
    setIsRecording(false);
    setIsPlaying(true);
    await cameraRef.current.stopRecording();

    setShouldNavigate(true);
  };
  useEffect(() => {
    if (shouldNavigate && videoPath) {
      navigation.navigate('SaveVideo', {
        videoPath: videoPath,
        key: 1,
      });
      setShouldNavigate(false); // Reset the flag
    }
  }, [shouldNavigate, videoPath, navigation]);

  const device = useCameraDevice(cameraPosition);

  if (device == null)
    return (
      <>
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
          <View style={styles.camera} />
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
