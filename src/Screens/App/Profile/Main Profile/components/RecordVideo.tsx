import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {VIDEOICON} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import Video from 'react-native-fast-video';

const RecordVideoCard = (data: any) => {
  const navigation = useNavigation<any>();
  const [isPaused, setPaused] = useState(false);

  const handleVideoLoad = () => {
    setTimeout(() => {
      setPaused(true);
    }, 20);
  };

  return (
    <View style={styles.CardContainer}>
      {Object.keys(data?.data)?.length === 0 ? (
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdateRecordVideo')}
            style={styles.secContainer}>
            <VIDEOICON />
          </TouchableOpacity>
       
        </View>
  ) : ( 
        <Video
          resizeMode="cover"
          paused={isPaused}
          source={{uri: data?.data?.media}}
          style={styles.videoContainer}
          onLoad={handleVideoLoad}
        /> 
   )} 
      <View style={styles.topContainer1}>
        <TouchableOpacity
          onPress={() => setPaused(!isPaused)}
          style={[
            styles.secContainer,
            {
              backgroundColor: appColors.bg,
            },
          ]}>
          <VIDEOICON />
          
        </TouchableOpacity>
       {Object.keys(data?.data)?.length === 0?<Text style={styles.RecordText}>Record video cv</Text>:null}
      </View>
    </View>
  );
};

export default RecordVideoCard;
const styles = StyleSheet.create({
  CardContainer: {
    // paddingHorizontal: 20,
    // paddingVertical: 15,
    width: '100%',
    backgroundColor: appColors.bg,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    marginBottom:15,

    // marginTop: 15,
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: appColors.primary,
  },

  secContainer: {
    width: 96,
    height: 96,
    // backgroundColor: appColors.bg,
    borderRadius: 96,
    borderWidth: 0.5,
    marginBottom: 10,
    borderColor: appColors.primary,

    padding: 5,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RecordText: {
    fontFamily: ' Noto Sans',
    fontSize: 24,
    color: appColors.primary,
    fontWeight: '700',
  },
  topContainer1: {
    width: '100%',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,

    position: 'absolute',
    zIndex: 100,
    // top: 50,
    height: 60,
  },
  videoContainer: {
    width: '100%',
    height: 600,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,

    // Ensure that the video appears above other components
  },
});
