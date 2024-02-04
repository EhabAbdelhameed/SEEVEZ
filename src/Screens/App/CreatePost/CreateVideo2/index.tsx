import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
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

const CreateVideo2 = () => {
  const {videoPath, key, source}: any = useRoute().params;

  const navigation = useNavigation();
  console.log('Ehab', videoPath);
  // useEffect(() => {
  //     console.log('0000', videoPath);
  //     // console.log(source[0]?.uri)
  //     changeDone ? navigation.navigate('CompleteProfileScreen') : null;
  //   }, [changeDone]);
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
                navigation.navigate('CreatePull');
              }}>
              <PULL />
              <Text style={styles.text1}>Poll</Text>
            </TouchableOpacity>
            <TouchableOpacity   onPress={() => {
                navigation.navigate('CV');
              }} style={styles.leftBtn}>
              <CV />
              <Text style={styles.text1}>CV</Text>
            </TouchableOpacity>
          </View>
          <Footer />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateVideo2;
