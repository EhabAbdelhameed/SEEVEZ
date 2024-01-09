import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from 'src/globalStyle';
import { PhotoIdentifiersPage } from "@react-native-camera-roll/camera-roll";
import ContainerImgs from './components/ContainerImgs';
import Header from './components/Header';
const AddPhoto = () => {

  const [imageData, setImageData] = useState<PhotoIdentifiersPage | any>();
  const [selected, setSelected] = useState()
  const [multiSelect, setMultiSelect] = useState(false)
  const [typeSelect, setTypeSelect] = useState<"Gallery"|"Camera">('Gallery')


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