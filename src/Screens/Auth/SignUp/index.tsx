import React from 'react';
import {View, Text, Image,useWindowDimensions,StatusBar} from 'react-native';
import Video from 'react-native-fast-video';
import {RenderSvgIcon} from '../../../Components/atoms/svg';
import styles from './styles';
import DonotHaveAccountSection from '../../../Components/molecules/DonotHaveAccountSection';
import RectangleBtn from './components/RectangleBtn';
import Rectangle1Img from './../../../assets/images/Rectangle1.jpg';
import Rectangle1Img2 from './../../../assets/images/Rectangle4.jpg';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../theme/appColors';
import {BigLogo} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
const SignUp = () => {
  const{width,height}=useWindowDimensions()
  // console.log(height/3)
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'}/>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingBottom: 0,
          backgroundColor: appColors.bg,
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}>
        <Video
          resizeMode="cover"
          repeat
          source={require('../../../assets/images/signUpVideo.mp4')}
          style={[styles.video,{height:height/3.5}]}
        />
        <View>
          <View style={styles.bottomSection}>
            <View style={styles.circles}>
              <RenderSvgIcon icon="CIRCLELOGIN" width={150} height={200} />
            </View>
            <View style={styles.blueCircle}>
              <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
            </View>
            <View style={styles.loginTextContainer}>
              <View style={{width: 32}}>
                {/* <RenderSvgIcon icon="ICON2CV" width={32} height={48} /> */}
              </View>
              <View>
                <Image
                  source={require('../../../assets/images/seevezlogo.png')}
                  style={{width: 135, height: 40}}
                />
              </View>
              <View>
                <RenderSvgIcon
                  icon="ICONCV"
                  width={40}
                  height={48}
                  style={styles.yellowIcon}
                />
              </View>
            </View>
            <View>
              <Text style={styles.signup}>Sign up</Text>
              <Text style={styles.letsJumpIn}>Let‘s jump in</Text>
            </View>
            <View style={styles.rowRectangles}>
              <RectangleBtn
                img={Rectangle1Img}
                title1="As a"
                title2="recruiter"
              />
              <RectangleBtn
                img={Rectangle1Img2}
                title1="As a "
                title2="job seeker"
              />
            </View>
            <View style={{marginTop: 10}}>
              <DonotHaveAccountSection type="Log in" />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
