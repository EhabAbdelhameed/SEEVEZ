import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import React, {useCallback} from 'react';
import styles from './styles';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import DonotHaveAccountSection from '../../../../../Components/molecules/DonotHaveAccountSection';
import AuthTopSection from '../../../../../Components/molecules/AuthTopSection';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../../../theme/appColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../../../../../Components/molecules/Button';
import DocumentPicker from 'react-native-document-picker';
import {BigLogo, PHOTO} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {Formik} from 'formik';
import {appSizes} from 'theme/appSizes';
import { useAppDispatch } from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import {launchImageLibrary} from 'react-native-image-picker'
const UpdateAchievements = () => {
  const [loading, setLoading] = React.useState(false);
  const dispatch = useAppDispatch();
  // const navigation = useNavigation<any>();
  const navigation = useNavigation();
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const uploadImage = () => {
    
    launchImageLibrary({ quality: 0.5, mediaType: 'photo' }).then(res =>
      console.log(res),
    );
  };

  const uploadFile = async (type: any) => {
    try {
      const res: any = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      console.log(res);
      // setExperienceLetter(res);
      // setFieldValue(name.replace(/\s/g, ''), {
      //   uri: res[0]?.uri,
      //   type: res[0]?.type,
      //   name: res[0]?.name,
      // });
    } catch (err) {
      // setFieldValue(name.replace(/\s/g, ''), '');
      if (DocumentPicker.isCancel(err)) {
        console.log('Canceled');
      } else {
        console.log('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          backgroundColor: appColors.bg,
          marginTop: 40,
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <TouchableOpacity
            style={styles.skipContainer}
            onPress={_handleNavigate}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <BigLogo height={30} width={96} style={{marginLeft:70 }} />
        </View>
        <View style={styles.circles}>
          <RenderSvgIcon icon="CIRCLELOGIN" width={240} height={220} />
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.blueCircle}>
            <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
          </View>
          <View style={styles.loginTextContainer}>
            <View>
              <RenderSvgIcon icon="ICON2CV" width={32} height={48} />
            </View>
            <View style={[{alignItems: 'center'}]}>
              <Text style={[styles.loginText, {fontSize: 24}]}>
                Complete Profile
              </Text>
              <Text style={[styles.loginTextSub, {fontSize: 13}]}>
                Finish setting up your profile to get noticed by recruiters
              </Text>
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
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: '#000',
              marginLeft: 8,
            }}>
            Achievements
          </Text>
          <Formik
            initialValues={{Achievements: ''}}
            onSubmit={values => {
              setLoading(true);
              const formdata = new FormData();

              formdata.append('text', values.Achievements);
              formdata.append('user_id', 3);
              formdata.append('rate',5 );
              dispatch(AppThunks.doAddAchievement(formdata)).then((res: any) => {
                setLoading(false);
              });
              // navigation.navigate("ResetPassword")
            }}>
            {(props: any) => (
              <View>
                <TextInput
                  multiline
                  numberOfLines={8} // Set the number of lines you want to display
                  style={styles.textArea} // Define your own styles for the text area
                  placeholder="Write here.."
                  onChangeText={props.handleChange('About')}
                  onBlur={props.handleBlur('About')}
                  value={props.values.About}
                />
                <Text style={{marginBottom: 20}}>1500 characters</Text>
                <View
                  style={{
                    borderRadius: 16,
                    borderColor: '#1D5EDD',
                    borderWidth: 1,
                    paddingHorizontal: 15,
                    paddingVertical: 4,
                    borderBottomWidth: 0.5,
                    marginBottom: 30,
                    marginTop: 10,
                    height: 54,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <PHOTO style={{marginRight: 20}} />
                  <Text style={{fontSize:20,color:appColors.primary}}>Upload certificate image</Text>
                </View>

                <Button text={'Done'} onPress={props.handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdateAchievements;
