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
import {CV, ExterinalLinks, JOBOP, MARKET, PULL} from 'assets/Svgs';
import Footer from './components/Footer';
import {useAppDispatch} from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import AppSlice, {selectDone} from 'src/redux/app';
import {useSelector} from 'react-redux';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import { selectUser } from 'src/redux/auth';
const CreatePhoto2 = () => {
  const {key,item}: any = useRoute().params;

  console.log("Photo123 ",item,key)
  const navigation = useNavigation<any>();
  const CurrentUserData = useSelector(selectUser);

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
      
        <LinearGradient 
          // start={{x: 1, y: 0}}
          // end={{x: 0, y: 0}}
          colors={['#919191', 'rgba(170, 170, 170, 0.56)', 'rgba(203, 203, 203, 0.00)']}
        style={styles.bottomContainer}>
         
         {CurrentUserData?.user_data?.user_type == 'company' ||
          CurrentUserData?.user_data?.user_type == 'company_admin' ||
          CurrentUserData?.user_data?.user_type == 'recruiter' ? (
            <View>
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

                <TouchableOpacity
                  style={[
                    styles.leftBtn,
                    {
                      backgroundColor: '#E8EFFC',
                    },
                  ]}
                  onPress={() => {
                    navigation.navigate('JobOpportunity');
                  }}>
                  <JOBOP />
                  <Text style={styles.text1}>Job opportunity</Text>
                </TouchableOpacity>
              </View>
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
                <View
                  style={[
                    styles.leftBtn,
                    {
                      backgroundColor: '#transparent',
                    },
                  ]}
                />
              </View>
            </View>
          ) : (
            <View style={styles.bottomStartContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CV');
                }}
                style={styles.leftBtn}>
                <CV />
                <Text style={styles.text1}>CV</Text>
              </TouchableOpacity>
              {CurrentUserData?.work_type != 'freelancer' ? (
                <View
                  style={[
                    styles.leftBtn,
                    {
                      backgroundColor: '#transparent',
                    },
                  ]}
                />
              ) : (
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
              )}
            </View>
          )}
       
          <Footer saveVideo={saveVideoFun} loading={loading} />
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default CreatePhoto2;
