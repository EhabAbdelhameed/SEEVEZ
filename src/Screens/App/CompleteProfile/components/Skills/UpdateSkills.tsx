import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import React, {useCallback, useEffect} from 'react';
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
import InputView from 'components/molecules/Input';
import {appSizes} from 'theme/appSizes';
import AppThunks from 'src/redux/app/thunks';
import {useAppDispatch} from 'src/redux/store';
import {useSelector} from 'react-redux';
import {selectUser} from 'src/redux/auth';
import {selectDone} from 'src/redux/app';
import TopHeader from '../Header/TopHeader';
import BottomHeader from '../Header/BottomHeader';

const UpdateSkills = () => {
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();
  const CurrentUserData = useSelector(selectUser);
  const changeDone = useSelector(selectDone);

  useEffect(() => {
    changeDone ? navigation.goBack() : null;
  }, [changeDone]);
  const dispatch = useAppDispatch();
  const {title}: any = useRoute().params;

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
        <TopHeader />
        <View style={styles.bottomSection}>
          <BottomHeader />
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: '#000',
              marginLeft: 8,
              marginBottom: 10,
              fontFamily: 'Noto Sans',
            }}>
            {title}
          </Text>
          <Formik
            initialValues={{Skills: ''}}
            onSubmit={values => {
              setLoading(true);
              const formdata = new FormData();
              formdata.append('user_id', CurrentUserData.id);

              formdata.append('name', values.Skills);
              if (title == 'Skills') {
                dispatch(AppThunks.doAddSkills(formdata)).then((res: any) => {
                  dispatch(AppThunks.GetProfileInfo());
                  setLoading(false);
                });
              } else {
                dispatch(AppThunks.doAddIntersts(formdata)).then((res: any) => {
                  dispatch(AppThunks.GetProfileInfo());
                  setLoading(false);
                });
              }
            }}>
            {(props: any) => (
              <View>
                <InputView
                  name="Skills"
                  placeholder="Write here.."
                  // props={props}
                  {...props}
                />

                <View style={{height: appSizes.height * 0.28}} />

                <Button
                  loading={loading}
                  text={'Done'}
                  onPress={props.handleSubmit}
                />
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdateSkills;
