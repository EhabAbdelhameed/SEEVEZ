import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image ,TouchableOpacity} from 'react-native';
import { styles } from '../styles';
import { CameraRoll, PhotoIdentifiersPage } from '@react-native-camera-roll/camera-roll';
import ContainerHeader from './ContainerHeader';
import { useNavigation } from '@react-navigation/native';

const ContainerImgs = ({
    imageData,
    setImageData,
    multiSelect,
    setMultiSelect,
    typeSelect,
    setTypeSelect,
}: {
    imageData: any[];
    setImageData: (str: any) => void;
    multiSelect: boolean;
    setMultiSelect: (str: boolean) => void;
    typeSelect: "Gallery" | "Camera";
    setTypeSelect: (str: "Gallery" | "Camera") => void;

}) => {
    const navigation=useNavigation<any>();
    useEffect(() => {
        fetchImages();
    }, []);
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const fetchImages = () => {
        CameraRoll.getAlbums({
            assetType: "Photos"
        }).then((res) => {
          
        }).catch((error) => {
       
        })
        CameraRoll.getPhotos({
            first: 100000,
            groupTypes: "All",
        }).then((res: PhotoIdentifiersPage) => {
            // console.log('res', res);
            setImageData(res.edges)
        })
    };
    const toggleImageSelection = (imageUri: string) => {
        if (selectedImages.includes(imageUri)) {
            setSelectedImages(selectedImages.filter(uri => uri !== imageUri));
        } else {
            setSelectedImages([...selectedImages, imageUri]);
        }
    };
    const renderImageItem = ({ item }: any) => (
        <TouchableOpacity 
            onPress={() => {
                if (multiSelect) {
                    toggleImageSelection(item);
                } else {
                    navigation.navigate("CreatePhoto2", {
                        item: item,
                        key: '1'
                    });
                }
            }} 
            style={[styles.imageContainer, selectedImages.includes(item) && styles.selectedImageContainer]}
        >
            <Image source={{ uri: item?.node?.image?.uri }} style={styles.image} />
        </TouchableOpacity>
    );
    return (
        <View style={styles.containerContent}>
            <ContainerHeader
                multiSelect={multiSelect}
                setMultiSelect={setMultiSelect}
                typeSelect={typeSelect}
                setTypeSelect={setTypeSelect}
                data={selectedImages}
            />
             <FlatList
                data={imageData}
                columnWrapperStyle={{
                    rowGap: 10,
                    columnGap: 10
                }}
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderImageItem}
                contentContainerStyle={styles.container}
            />
        </View>
    );
}

export default ContainerImgs;
