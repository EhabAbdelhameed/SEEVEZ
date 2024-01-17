import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import { RenderSvgIcon } from '../../../Components/atoms/svg';
import DonotHaveAccountSection from '../../../Components/molecules/DonotHaveAccountSection';
import AuthTopSection from '../../../Components/molecules/AuthTopSection';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { appColors } from '../../../theme/appColors';
import { useNavigation,useRoute } from '@react-navigation/native';
import SocailBtn from './components/SocailBtn';
import Button from '../../../Components/molecules/Button';
import { BigLogo } from 'assets/Svgs';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignupWithSocail = () => {
  const{work_type,title}:any=useRoute().params

  const navigation = useNavigation<any>()
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          // alignItems: "center",
          // paddingBottom: 30,
          backgroundColor: appColors.bg,
          // paddingTop: 40
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={"handled"}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoContainer}>
          {/* <Image source={require('../../../assets/images/logoWithName.png')} /> */}
          <Image
                  source={require('../../../assets/images/seevezlogo.png')}
                  style={{width: 148, height: 47}}
                />
        </View>
        <View style={styles.circles}>
          <RenderSvgIcon icon="CIRCLELOGIN" width={240} height={220} />
        </View>
        <View style={styles.bottomSection}>

          <View style={styles.blueCircle}>
            <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
          </View>
          <AuthTopSection
            title="Sign up"
            subtitle=""
          />
          <SocailBtn title="Facebook" icon='FACEBOOK' />
          <SocailBtn title="Linkedin" icon='LINKEDIN' />

          <SocailBtn title="Google" icon='GOOGLE' />
          <SocailBtn title="Apple" icon='APPLE' />
          <View style={styles.orContainer}>
            <View style={styles.line}></View>
            <Text style={styles.orText}>Or sign up by</Text>
            <View style={styles.line}></View>
          </View>
          <Button text="Continue with email" onPress={() => { navigation.navigate("signup2",{work_type:work_type,title:title}) }}
            style={styles.btn}
            textStyle={{
              color: appColors.primary
            }}
          />

          <DonotHaveAccountSection noLang type='Log in' />

          <View style={{ height: 50 }} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignupWithSocail;
