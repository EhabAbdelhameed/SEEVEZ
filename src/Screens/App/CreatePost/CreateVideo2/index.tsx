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
import {CV, ExterinalLinks, MARKET, PULL} from 'assets/Svgs';
import Footer from './components/Footer';
import {useAppDispatch} from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import AppSlice, {selectDone} from 'src/redux/app';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

const CreateVideo2 = () => {
  const {videoPath, key, source}: any = useRoute().params;

  const navigation = useNavigation<any>();

  const [loading, setLoading] = React.useState(false);
  const [isPaused, setPaused] = useState(false);
  const dispatch = useAppDispatch();
  dispatch(AppSlice.changeKey(key));
  dispatch(AppSlice.changeImage(key == '4' ? videoPath : source));

  const changeDone = useSelector(selectDone);
  useEffect(() => {
    changeDone ? navigation.navigate('Reels') : null;
  }, [changeDone]);

  const saveVideoFun = () => {
    navigation.navigate('CreatePollLink');
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
          <View style={styles.rightContainer}/>
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

        <LinearGradient
          // start={{x: 1, y: 0}}
          // end={{x: 0, y: 0}}
          colors={[
            '#919191',
            'rgba(170, 170, 170, 0.56)',
            'rgba(203, 203, 203, 0.00)',
          ]}
          style={styles.bottomContainer}>
          <View style={styles.bottomStartContainer}>
            <TouchableOpacity
              style={[
                styles.leftBtn,
                {
                  backgroundColor: '#E8E8E8',
                },
              ]}
              onPress={() => {
                navigation.navigate('ExterinalLinks');
              }}>
              <ExterinalLinks />
              <Text style={styles.text1}>External link</Text>
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
          <View style={[styles.bottomStartContainer, {marginTop: 20}]}>
            <TouchableOpacity
              style={[
                styles.leftBtn,
                {
                  backgroundColor: '#FDF7E6',
                },
              ]}
              onPress={() => {
                navigation.navigate('Market');
              }}>
              <MARKET />
              <Text style={styles.text1}>Market</Text>
            </TouchableOpacity>
            <View
              style={[
                styles.leftBtn,
                {
                  backgroundColor: 'transparent',
                },
              ]}
            />
          </View>

          <Footer saveVideo={saveVideoFun} loading={loading} />
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default CreateVideo2;
