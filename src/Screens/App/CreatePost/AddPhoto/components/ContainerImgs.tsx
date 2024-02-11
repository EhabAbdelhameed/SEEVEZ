import React, { useEffect } from 'react';
import { View, Text, FlatList, Image ,TouchableOpacity} from 'react-native';
import { styles } from '../styles';
import { CameraRoll, PhotoIdentifiersPage } from '@react-native-camera-roll/camera-roll';
import ContainerHeader from './ContainerHeader';

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
    useEffect(() => {
        fetchImages();
    }, []);

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

    const renderImageItem = ({ item }: any) => (
        <TouchableOpacity onPress={()=>console.log(item)} style={styles.imageContainer}>
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
            />
            <FlatList
                data={imageData}
                columnWrapperStyle={{
                    rowGap: 10,
                    columnGap: 10
                }}
                // stickyHeaderHiddenOnScroll={false}
                // ListHeaderComponent={() => {
                //     return <ContainerHeader
                //         multiSelect={multiSelect}
                //         setMultiSelect={setMultiSelect}
                //         typeSelect={typeSelect}
                //         setTypeSelect={setTypeSelect}
                //     />
                // }}
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderImageItem}
                contentContainerStyle={styles.container}
            />
        </View>
    );
}

export default ContainerImgs;
