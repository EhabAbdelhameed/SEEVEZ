import {View, Text, TouchableOpacity, TextInput, Alert, Image} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import styles from './styles';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import DonotHaveAccountSection from '../../../../../Components/molecules/DonotHaveAccountSection';
import AuthTopSection from '../../../../../Components/molecules/AuthTopSection';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../../../theme/appColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../../../../../Components/molecules/Button';

import {BigLogo} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {Formik} from 'formik';
import { appSizes } from 'theme/appSizes';
import { useAppDispatch } from 'src/redux/store';
import { useSelector } from 'react-redux';
import { selectDone } from 'src/redux/app';
import AppThunks from 'src/redux/app/thunks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { selectUser } from 'src/redux/auth';
import TopHeader from '../Header/TopHeader';
import BottomHeader from '../Header/BottomHeader';
import CustomButton from 'components/molecules/Button/CustomButton';

const UpdateAbout = () => {
  // const navigation = useNavigation<any>();
  const CurrentUserData = useSelector(selectUser);
  const navigation = useNavigation()
  const [about,setAbout]=useState('')
  const _handleNavigate = useCallback(
      () => {
          navigation.goBack();
      },
      [],
  )
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const changeDone = useSelector(selectDone);
  // console.log(changeDone)
  useEffect(() => {

    changeDone ? navigation.goBack() : null;
  }, [changeDone]);
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          backgroundColor: appColors.bg,
          marginTop:40,
          
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}>
        <TopHeader />
        <View style={styles.bottomSection}>
          <BottomHeader />
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: '#000',
              marginLeft: 8,
              fontFamily: 'Noto Sans',
            }}>
            About
          </Text>
          <Formik
            initialValues={{About:CurrentUserData?.about|| ''}}
            onSubmit={values => {
              setLoading(true);
              const formdata = new FormData();
              formdata.append('name',CurrentUserData?.name);
              values.About==''||!values.About?formdata.append('about',''):formdata.append('about',values.About);
             

              // console.log(formdata);
              dispatch(AppThunks.doAddAbout(formdata)).then(
                (res: any) => {
                  dispatch(AppThunks.GetProfileInfo())
                  

                  setLoading(false);
                },
              );
              // navigation.navigate("ResetPassword")
            }}>
            {(props: any) => (
              <View>
                <TextInput
                  multiline
                  numberOfLines={10} // Set the number of lines you want to display
                  style={styles.textArea} // Define your own styles for the text area
                  placeholder="Write here.."
                  placeholderTextColor={'#B9B9B9'}
                  onChangeText={value =>
                    props?.setFieldValue(`About`, value)
                  }
                  value={props.values.About}
                  
                  onBlur={props.handleBlur('About')}
                  
                  textAlignVertical="top"
                />
                <View style={{height:appSizes.height * 0.09}}/>
                <CustomButton loading={loading} text={'Done'} onPress={props.handleSubmit} />
                {/* <Button loading={loading} text={'Done'} onPress={props.handleSubmit} /> */}
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdateAbout;
