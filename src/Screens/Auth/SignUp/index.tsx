import React from 'react';
import { View, Text, Image } from 'react-native';
import Video from 'react-native-fast-video';
import { RenderSvgIcon } from '../../../Components/atoms/svg';
import styles from './styles';
import DonotHaveAccountSection from '../../../Components/molecules/DonotHaveAccountSection';
import RectangleBtn from './components/RectangleBtn';
import Rectangle1Img from './../../../assets/images/Rectangle1.png';
import Rectangle1Img2 from './../../../assets/images/Rectangle2.png';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { appColors } from '../../../theme/appColors';
import { BigLogo } from 'assets/Svgs';
import { SafeAreaView } from 'react-native-safe-area-context';
const SignUp = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>

      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingBottom: 0,
          backgroundColor: appColors.bg,
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={"handled"}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}
      >
        <Video
          resizeMode="cover"
          repeat
          source={require('../../../assets/images/signUpVideo.mp4')}
          style={styles.video}
        />
        <View>
          <View style={styles.bottomSection}>
            <View style={styles.circles}>
              <RenderSvgIcon icon="CIRCLELOGIN" width={233} height={237} />
            </View>
            <View style={styles.blueCircle}>
              <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
            </View>
            <View style={styles.loginTextContainer}>
              <View>
                <RenderSvgIcon icon="ICON2CV" width={32} height={48} />
              </View>
              <View>
                {/* <Image
                  source={require('../../../assets/images/logoWithName.png')}
                /> */}
                <BigLogo/>
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
                title1='As a'
                title2='recruiter'
              />
              <RectangleBtn
                img={Rectangle1Img2}
                title1='As a job'
                title2='seeker'
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <DonotHaveAccountSection type='Log in' />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
</SafeAreaView>
  );
};

export default SignUp;
