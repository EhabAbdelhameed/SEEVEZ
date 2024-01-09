import { View, Text, TouchableOpacity, StyleSheet, Alert, Pressable } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { globalStyles } from 'src/globalStyle'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Camera, CameraProps, VideoFile, useCameraDevices, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import { styles } from './styles';
import Video from 'react-native-fast-video';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { RenderSvgIcon } from 'components/atoms/svg';
import { CreateVideoIcon, ImagePicker, PauseVideoIcon } from 'assets/Svgs';
import { useNavigation } from '@react-navigation/native';
import { appColors } from 'theme';

const CreateVideo = () => {
    const navigation = useNavigation()
    const _handleNavigate = useCallback(
        () => {
            navigation.goBack();
        },
        [],
    )
    const [isRecording, setIsRecording] = useState(false);
    const [videoPath, setVideoPath] = useState('');
    const cameraRef: Camera | any = useRef<Camera>();
    const [cameraPosition, setCameraPosition] = React.useState<'front' | 'back'>('back');
    const [torch, setTorch] = React.useState<'on' | 'off'>('off');
    const startRecording = async () => {
        setVideoPath('')
        const checkMicrophonePermission = async () => {
            const result = await request(PERMISSIONS.IOS.MICROPHONE);
            if (result === RESULTS.GRANTED) {
                // Microphone permission granted, proceed with camera setup
                // For Android, use PERMISSIONS.ANDROID.RECORD_AUDIO
                setIsRecording(true);
                cameraRef.current.startRecording(
                    {
                        quality: '720p',
                        videoBitrate: 2000000,
                        maxDuration: 10, // Set the maximum duration in seconds (optional)
                        maxFileSize: 100 * 1024 * 1024, // Set the maximum file size in bytes (optional)
                        onRecordingError: () => {
                            // alert("error")
                        },
                        // outputPath: videoPath,
                        onRecordingFinished: async (video: any) => {
                            setVideoPath(video?.path)
                        },
                    }
                );
            } else {
                // Microphone permission denied, handle accordingly
                console.warn('Microphone permission denied');
                Alert.alert('Microphone permission denied');
            }
        };
        checkMicrophonePermission()
    }


    const stopRecording = async () => {
        setIsRecording(false);
        await cameraRef.current.stopRecording();
    };


    const device = useCameraDevice(cameraPosition)

    if (device == null) return (
        <>
            <SafeAreaView edges={['top']} style={globalStyles.screen}>

                <TouchableOpacity style={styles.skipContainer}
                    onPress={() => {
                        navigation.navigate("CreateVideo2", {
                            video: videoPath
                        })
                    }}
                >
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
    return (
        <SafeAreaView edges={['top']} style={[globalStyles.screen,{
    
        }]}>
            {videoPath.length ?
                <Video
                    resizeMode="cover"
                    repeat
                    source={{ uri: videoPath }}
                    style={styles.video}
                /> 
              
                :
                <Camera
                    style={styles.camera}
                    ref={cameraRef}
                    video={true}
                    // style={StyleSheet.absoluteFill}
                    audio={true}
                    device={device}
                    isActive={true}
                    torch={torch}
                    onError={(error) => {

                    }}
                />}
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.skipContainer}
                    onPress={_handleNavigate}
                >
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
                <Pressable
                    onPress={() => {
                        torch == "off" ? setTorch('on') : setTorch("off")
                    }}
                >
                    <RenderSvgIcon
                        icon='FLASH'
                    />
                </Pressable>
                <Pressable
                    onPress={() => {
                        navigation.navigate("CreateVideo2", {
                            video: videoPath
                        })
                    }}
                >
                    <RenderSvgIcon
                        icon='SETTING'
                    />
                </Pressable>
            </View>
            <View style={styles.bottomContainer}>
                <ImagePicker />
                <TouchableOpacity
                    onPress={() => {
                        isRecording ? stopRecording() : startRecording()
                    }}
                    style={{
                        zIndex: 100000
                    }}
                >
                    {isRecording ?
                        <PauseVideoIcon
                            onPress={() => {
                                isRecording ? stopRecording() : startRecording()
                            }}
                        />
                        : <CreateVideoIcon
                            onPress={() => {
                                isRecording ? stopRecording() : startRecording()
                            }}
                        />}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        cameraPosition == 'front' ?
                            setCameraPosition('back') :
                            setCameraPosition('front')
                    }}
                >

                    <RenderSvgIcon
                        icon='CAMERARECORD'
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default CreateVideo