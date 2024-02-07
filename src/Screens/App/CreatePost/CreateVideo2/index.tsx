import {View, Text, TouchableOpacity} from 'react-native';
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
import {selectDone} from 'src/redux/app';
import {useSelector} from 'react-redux';

const CreateVideo2 = () => {
  const {videoPath, key, source}: any = useRoute().params;


  const navigation = useNavigation<any>();
  console.log('Ehab', JSON.stringify(useRoute().params));

  const [loading, setLoading] = React.useState(false);
  const [isPaused, setPaused] = useState(false);
  const dispatch = useAppDispatch();
  const changeDone = useSelector(selectDone);
  const saveVideoFun = () => {
    if (key == 1) {
      setLoading(true);
      const formdata = new FormData();
      formdata.append('files', {
        uri: 'file://' + videoPath,
        type: 'video/mp4',
        name: 'video.mp4',
      });

      console.log("Video123 ",formdata)
      dispatch(AppThunks.doUploadVideoReel(formdata)).then((res: any) => {
       
        setLoading(false);
      });
    } else {
      setLoading(true);
      const formdata = new FormData();
      //  console.log(source)
      formdata.append('files', {
        uri: source?.assets[0]?.uri,
        type: source?.assets[0]?.type,
        name: source?.assets[0]?.fileName,
      });
      console.log('2222', JSON.stringify(formdata));
      dispatch(AppThunks.doUploadVideoReel(formdata)).then((res: any) => {
      
        setLoading(false);
      });
    }
  };
  useEffect(() => {
    changeDone ? navigation.replace('app') : null;
  }, [changeDone]);
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
        <Video
          resizeMode="cover"
          //   controls={true}
          repeat
          source={{uri: videoPath}}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 16,
          }}
        />

        <View style={styles.bottomContainer}>
          <View style={styles.bottomStartContainer}>
            <TouchableOpacity
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
            </TouchableOpacity>
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

export default CreateVideo2;
