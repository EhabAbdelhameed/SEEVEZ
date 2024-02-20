import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from 'src/globalStyle';
import { PhotoIdentifiersPage } from "@react-native-camera-roll/camera-roll";
import ContainerImgs from './components/ContainerImgs';
import Header from './components/Header';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { Alert, PermissionsAndroid } from 'react-native';
const AddPhoto = () => {

  const [imageData, setImageData] = useState<PhotoIdentifiersPage | any>();
  const [selected, setSelected] = useState()
  const [multiSelect, setMultiSelect] = useState(false)
  const [typeSelect, setTypeSelect] = useState<"Gallery"|"Camera">('Gallery')
  useEffect(() => {
    requestStoragePermission();
  }, []);
  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'Seevez needs permission to access your storage to upload photos.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Permission Denied!', 'You need to grant storage permission to upload photos.');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <SafeAreaView edges={['top']} style={[globalStyles.screen]}>
      <Header />
      <ContainerImgs
        imageData={imageData}
        setImageData={setImageData}
        multiSelect={multiSelect}
        setMultiSelect={setMultiSelect}
        typeSelect={typeSelect}
        setTypeSelect={setTypeSelect}
      />
    </SafeAreaView>
  );


}

export default AddPhoto