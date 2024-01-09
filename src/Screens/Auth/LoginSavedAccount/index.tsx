import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { RenderSvgIcon } from '../../../Components/atoms/svg';
import { Form, Formik } from 'formik';
import { Input } from 'react-native-elements';
import InputView from '../../../Components/molecules/Input';
import Button from '../../../Components/molecules/Button';
import SocialCard from '../../../Components/molecules/SocialCard';
import DonotHaveAccountSection from '../../../Components/molecules/DonotHaveAccountSection';
import AuthTopSection from '../../../Components/molecules/AuthTopSection';
import styles from './styles';
import SavedEmailCard from './components/SavedEmailCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginSavedAccount = () => {
  const [checked, setchecked] = useState<number>(1);
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/images/logoWithName.png')} />
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.circles}>
            <RenderSvgIcon icon="CIRCLELOGIN" width={233} height={237} />
          </View>
          <View style={styles.blueCircle}>
            <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
          </View>
          <AuthTopSection
            title="Log in"
            subtitle="Choose between your different accounts to log in"
          />
          <TouchableOpacity onPress={() => setchecked(0)}>
            <SavedEmailCard checked={checked === 0 ? true : false} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setchecked(1)}>
            <SavedEmailCard checked={checked === 1 ? true : false} />
          </TouchableOpacity>
          <Button text="Log in" onPress={() => { }} />
          <View style={{ marginTop: 'auto' }}>
            <DonotHaveAccountSection />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginSavedAccount;
