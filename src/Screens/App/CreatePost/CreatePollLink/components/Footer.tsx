import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styles';
import {SaveCircle} from 'assets/Svgs';
import {appColors} from 'theme';
import {useSelector} from 'react-redux';
import AppSlice, {selectPhotoData} from 'src/redux/app';
import AppThunks from 'src/redux/app/thunks';
import {useAppDispatch} from 'src/redux/store';

const Footer = (data: any) => {
  const photoData = useSelector(selectPhotoData);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const sharePhotoData = () => {
    if (photoData.key == '1') {
      setLoading(true);
      const formdata = new FormData();
      photoData.addonesCaption != null && photoData.addonesCaption != ''
        ? formdata.append('addons_caption', photoData.addonesCaption)
        : null;
      data?.caption != '' ? formdata.append('caption', data?.caption) : null;
      photoData.pdf != null && photoData.pdf?.length != 0
        ? formdata.append('media', {
            uri: photoData?.pdf[0]?.uri,
            type: photoData?.pdf[0]?.type,
            name: photoData?.pdf[0]?.name,
          })
        : null;
      photoData.location != null && photoData.location != ''
        ? formdata.append('location', photoData.location)
        : null;
      if (photoData?.tagPepoles != null && photoData?.tagPepoles?.length != 0) {
        for (let i = 0; i < photoData?.tagPepoles?.length; i++) {
          formdata.append(`mention[${i}][id]`, photoData?.tagPepoles[i]);
        }
      }
      //  console.log(source) item?.node?.image?.uri
      formdata.append(`photo[0][files]`, {
        uri: photoData?.image?.node?.image?.uri,
        type: photoData?.image?.node?.type,
        name: `image.${photoData?.image?.node?.type?.slice(6)}`,
      });

      console.log('Photo123 ', JSON.stringify(formdata));
      dispatch(AppThunks.doUploadPhotoReel(formdata)).then((res: any) => {
        dispatch(
          AppSlice.changePhotoData({
            image: {},
            addonesCaption: '',
            location: '',
            pdf: [],
            tagPepoles: [],
            key: '',
            names: [],
          }),
        );
        setLoading(false);
      });
    } else if (photoData.key == '2') {
      setLoading(true);
      const formdata = new FormData();
      photoData.addonesCaption != null && photoData.addonesCaption != ''
        ? formdata.append('addons_caption', photoData.addonesCaption)
        : null;
      data?.caption != '' ? formdata.append('caption', data?.caption) : null;
      photoData.pdf != null && photoData.pdf?.length != 0
        ? formdata.append('media', {
            uri: photoData?.pdf[0]?.uri,
            type: photoData?.pdf[0]?.type,
            name: photoData?.pdf[0]?.name,
          })
        : null;
      photoData.location != null && photoData.location != ''
        ? formdata.append('location', photoData.location)
        : null;
      if (photoData?.tagPepoles != null && photoData?.tagPepoles?.length != 0) {
        for (let i = 0; i < photoData?.tagPepoles?.length; i++) {
          formdata.append(`mention[${i}][id]`, photoData?.tagPepoles[i]);
        }
      }
      formdata.append(`photo[0][files]`, {
        uri: photoData?.image?.assets[0]?.uri,
        type: photoData?.image?.assets[0]?.type,
        name: photoData?.image?.assets[0]?.fileName,
      });

      console.log('Photo123 ', JSON.stringify(formdata));
      dispatch(AppThunks.doUploadPhotoReel(formdata)).then((res: any) => {
        dispatch(
          AppSlice.changePhotoData({
            image: {},
            addonesCaption: '',
            location: '',
            pdf: [],
            tagPepoles: [],
            key: '',
            names: [],
          }),
        );
        setLoading(false);
      });
    } else if(photoData.key == '3') {
      setLoading(true);
      const formdata = new FormData();
      photoData.addonesCaption != null && photoData.addonesCaption != ''
        ? formdata.append('addons_caption', photoData.addonesCaption)
        : null;
      data?.caption != '' ? formdata.append('caption', data?.caption) : null;
      photoData.pdf != null && photoData.pdf?.length != 0
        ? formdata.append('media', {
            uri: photoData?.pdf[0]?.uri,
            type: photoData?.pdf[0]?.type,
            name: photoData?.pdf[0]?.name,
          })
        : null;
      photoData.location != null && photoData.location != ''
        ? formdata.append('location', photoData.location)
        : null;
      if (photoData?.tagPepoles != null && photoData?.tagPepoles?.length != 0) {
        for (let i = 0; i < photoData?.tagPepoles?.length; i++) {
          formdata.append(`mention[${i}][id]`, photoData?.tagPepoles[i]);
        }
      }

      for (let i = 0; i < photoData?.image?.length; i++) {
        formdata.append(`photo[${i}][files]`, {
          uri: photoData?.image[i]?.node?.image?.uri,
          type: photoData?.image[i]?.node?.type,
          name: `image.${photoData?.image[i]?.type?.slice(6)}`,
        });
      }

      console.log('Photo123 ', JSON.stringify(formdata));
      dispatch(AppThunks.doUploadPhotoReel(formdata)).then((res: any) => {
        dispatch(
          AppSlice.changePhotoData({
            image: {},
            addonesCaption: '',
            location: '',
            pdf: [],
            tagPepoles: [],
            key: '',
            names: [],
          }),
        );
        setLoading(false);
      });
    }else if(photoData.key == '4'){
      setLoading(true);
      const formdata = new FormData();
      photoData.addonesCaption != null && photoData.addonesCaption != ''
        ? formdata.append('addons_caption', photoData.addonesCaption)
        : null;
      data?.caption != '' ? formdata.append('caption', data?.caption) : null;
      photoData.pdf != null && photoData.pdf?.length != 0
        ? formdata.append('media', {
            uri: photoData?.pdf[0]?.uri,
            type: photoData?.pdf[0]?.type,
            name: photoData?.pdf[0]?.name,
          })
        : null;
      photoData.location != null && photoData.location != ''
        ? formdata.append('location', photoData.location)
        : null;
      if (photoData?.tagPepoles != null && photoData?.tagPepoles?.length != 0) {
        for (let i = 0; i < photoData?.tagPepoles?.length; i++) {
          formdata.append(`mention[${i}][id]`, photoData?.tagPepoles[i]);
        }
      }
      //  console.log(source) item?.node?.image?.uri
      formdata.append('files', {
        uri: 'file://' + photoData?.image,
        type: 'video/mp4',
        name: 'video.mp4',
      });

      console.log('Video123 ', JSON.stringify(formdata));
      dispatch(AppThunks.doUploadVideoReel(formdata)).then((res: any) => {
        dispatch(
          AppSlice.changePhotoData({
            image: {},
            addonesCaption: '',
            location: '',
            pdf: [],
            tagPepoles: [],
            key: '',
            names: [],
          }),
        );
        setLoading(false);
      });


    }else if(photoData.key == '5'){
      setLoading(true);
      const formdata = new FormData();
      photoData.addonesCaption != null && photoData.addonesCaption != ''
        ? formdata.append('addons_caption', photoData.addonesCaption)
        : null;
      data?.caption != '' ? formdata.append('caption', data?.caption) : null;
      photoData.pdf != null && photoData.pdf?.length != 0
        ? formdata.append('media', {
            uri: photoData?.pdf[0]?.uri,
            type: photoData?.pdf[0]?.type,
            name: photoData?.pdf[0]?.name,
          })
        : null;
      photoData.location != null && photoData.location != ''
        ? formdata.append('location', photoData.location)
        : null;
      if (photoData?.tagPepoles != null && photoData?.tagPepoles?.length != 0) {
        for (let i = 0; i < photoData?.tagPepoles?.length; i++) {
          formdata.append(`mention[${i}][id]`, photoData?.tagPepoles[i]);
        }
      }
      //  console.log(source) item?.node?.image?.uri
      formdata.append('files', {
        uri: photoData?.image?.assets[0]?.uri,
        type: photoData?.image?.assets[0]?.type,
        name:photoData?.image?.assets[0]?.fileName,
      });

      console.log('Video123 ', JSON.stringify(formdata));
      dispatch(AppThunks.doUploadVideoReel(formdata)).then((res: any) => {
        dispatch(
          AppSlice.changePhotoData({
            image: {},
            addonesCaption: '',
            location: '',
            pdf: [],
            tagPepoles: [],
            key: '',
            names: [],
          }),
        );
        setLoading(false);
      });
    }else{

    }

  };
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerLeftSide}>
        <SaveCircle />
        <Text style={styles.textOption}>Save</Text>
      </View>
      <TouchableOpacity onPress={sharePhotoData} style={styles.btnShare}>
        {isLoading ? (
          <ActivityIndicator color={'#FFF'} size={'small'} />
        ) : (
          <Text
            style={[
              styles.textOption,
              {
                color: appColors.white,
              },
            ]}>
            Share
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
