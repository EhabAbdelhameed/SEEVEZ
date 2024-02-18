import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from 'src/globalStyle';
import {useNavigation, useRoute} from '@react-navigation/native';
import Video from 'react-native-fast-video';
import {styles} from './styles';
import {videoSource} from 'screens/App/Reels/fucntions/helper';
import {appColors} from 'theme';
import {RenderSvgIcon} from 'components/atoms/svg';
import {CV, PULL} from 'assets/Svgs';
import Footer from './components/Footer';
import {useAppDispatch} from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import AppSlice, {selectDone} from 'src/redux/app';
import {useSelector} from 'react-redux';
import Swiper from 'react-native-swiper';
const CreatePhoto2 = () => {
  const {key,item}: any = useRoute().params;

  console.log("Photo123 ",item,key)
  const navigation = useNavigation<any>();


  const [loading, setLoading] = React.useState(false);
  
  const dispatch = useAppDispatch();
  const changeDone = useSelector(selectDone);
 
  // console.log(changeDone)
  useEffect(() => {

    changeDone ? navigation.replace('Reels') : null;
  }, [changeDone]);

  React.useEffect(() => {
    // accessTocken();
    const RenderFunction = navigation.addListener('focus', () => {
     
      dispatch(AppSlice.changeImage(item));
      dispatch(AppSlice.changeKey(key));

    });
    return RenderFunction;
  }, [navigation]);
  const saveVideoFun = () => {
    if (key == 1) {
      setLoading(true);
      const formdata = new FormData();
      //  console.log(source) item?.node?.image?.uri
      formdata.append(`photo[0][files]`, {
        uri: item?.node?.image?.uri,
        type: item?.node?.type,
        name: `image.${item?.node?.type?.slice(6)}`,
      });

      console.log("Photo123 ",JSON.stringify(formdata))
      dispatch(AppThunks.doUploadPhotoReel(formdata)).then((res: any) => {
       
        setLoading(false);
      });
    } else if(key==2){
    
     
      setLoading(true);
      const formdata = new FormData();
      //  console.log(source) item?.node?.image?.uri
      formdata.append(`photo[0][files]`, {
        uri: item?.assets[0]?.uri,
        type:item?.assets[0]?.type,
        name: item?.assets[0]?.fileName,
      });

      console.log("Photo123 ",JSON.stringify(formdata))
      dispatch(AppThunks.doUploadPhotoReel(formdata)).then((res: any) => {
       
        setLoading(false);
      });
    }else{
      setLoading(true);
      const formdata = new FormData();
      //  console.log(source) item?.node?.image?.uri

      for(let i=0;i<item?.length;i++){
        //array[${index}][end_date]
        formdata.append(`photo[${i}][files]`, {
          uri: item[i]?.node?.image?.uri,
          type: item[i]?.node?.type,
          name: `image.${item[i]?.node?.type?.slice(6)}`,
        });
      }
   

      console.log("Photo123 ",JSON.stringify(formdata))
      dispatch(AppThunks.doUploadPhotoReel(formdata)).then((res: any) => {
       
        setLoading(false);
      });





    }
  };
  // useEffect(() => {
  //   changeDone ? navigation.replace('app') : null;
  // }, [changeDone]);
  return (
    <SafeAreaView
      edges={['top']}
      style={[
        globalStyles.screen,
        {
          backgroundColor: appColors.black,
        },
      ]}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity
            style={styles.skipContainer}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <View style={styles.rightContainer}>
            <RenderSvgIcon icon="WHO" />
            <Text style={styles.skipText}>Anyone</Text>
            <View
              style={{
                transform: [
                  {
                    rotate: '-90deg',
                  },
                ],
              }}>
              <RenderSvgIcon icon="ARROWBACK" />
            </View>
          </View>   
        </View>
        {key=='3'? <Swiper  showsButtons loop={false}>
       
          
            {item?.map((asset: any, index: number) => (
              <Image
                key={index}
                source={{ uri: asset?.node?.image?.uri }}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
            ))}
        
        </Swiper>:null}
        
      
      
    
             {key=='1'||key=='2'?<Image
                  source={{
                    uri:key=='1'?item?.node?.image?.uri:key=='2'?item?.assets[0]?.uri:null ,
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    // borderRadius: 16,
                  }}
                  resizeMode="cover"
                />:null}
      
        <View style={styles.bottomContainer}>
          <View style={styles.bottomStartContainer}>
            {/* <TouchableOpacity
              style={[
                styles.leftBtn,
                {
                  backgroundColor: appColors.lightGreen3,
                },
              ]}
              onPress={() => {
                navigation.navigate('CreatePull',{videoData:source,key:key});
              }}>
              <PULL />
              <Text style={styles.text1}>Poll</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CV');
              }}
              style={styles.leftBtn}>
              <CV />
              <Text style={styles.text1}>CV</Text>
            </TouchableOpacity>
          </View>
          <Footer saveVideo={saveVideoFun} loading={loading} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreatePhoto2;
