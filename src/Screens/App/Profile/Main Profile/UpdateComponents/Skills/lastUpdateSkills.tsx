import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  Platform,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import {RenderSvgIcon} from '../../../../../../Components/atoms/svg';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../../../../theme/appColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../../../../../../Components/molecules/Button';

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
import {selectDone, selectSkills} from 'src/redux/app';
import {Input} from 'react-native-elements';
import TopHeader from 'screens/App/CompleteProfile/components/Header/TopHeader';
import BottomHeader from 'screens/App/CompleteProfile/components/Header/BottomHeader';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
import CustomInput from 'components/molecules/Input/CustomInput';
import {Dropdown} from 'react-native-element-dropdown';

const UpdateOneSkills = () => {
  const [loading, setLoading] = React.useState(false);
  // const navigation = useNavigation<any>();
  const navigation = useNavigation();
  const CurrentUserData = useSelector(selectUser);
  const changeDone = useSelector(selectDone);
  const skills = useSelector(selectSkills);
  const [value, setValue] = useState(null);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // console.log(changeDone)
  useEffect(() => {
    changeDone ? navigation.goBack() : null;
  }, [changeDone]);
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      dispatch(AppThunks.GetSkills());
    });
    return RenderFunction;
  }, []);
  const dispatch = useAppDispatch();
  const {title, data,index}: any = useRoute().params;
  const lang = useSelector(selectLang);
  const {t, i18n} = useTranslation();

  return (
    <SafeAreaView
      edges={['top']}
      style={[styles.container, {direction: lang == 'ar' ? 'rtl' : 'ltr'}]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          backgroundColor: appColors.bg,
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
            {t(title.toLowerCase())}
          </Text>
          <Formik
            initialValues={{Skills: data?.name || ''}}
            onSubmit={values => {
              setLoading(true);
              const formdata = new FormData();
              formdata.append('id', data?.id);
          
              if (title != 'Interests') {
                
                if (CurrentUserData?.user_data?.skills?.length!=0) {
                  // console.log(CurrentUserData?.user_data?.skills)
                  let array=CurrentUserData?.user_data?.skills;
                  // array.push(values.Skills)
                  console.log(values.Skills)
                  for (
                    let i = 0;
                    i < array?.length;
                    i++
                  ) {
                    if(i!=index){
                      formdata.append(
                        `skills[${i}]`,
                        array[i].id,
                      );
                    }else{
                      formdata.append(
                        `skills[${i}]`,
                        values.Skills,
                      );
                    }
                  
                  }
                 
                  dispatch(AppThunks.doUpdateSkills(formdata)).then(
                    (res: any) => {
                      dispatch(AppThunks.GetProfileInfo());
                      setLoading(false);
                    },
                  );
                }
              
              } else {
                formdata.append('name', values.Skills);
                dispatch(AppThunks.doUpdateIntersts(formdata)).then(
                  (res: any) => {
                    dispatch(AppThunks.GetProfileInfo());
                    setLoading(false);
                  },
                );
              }

              // navigation.navigate("ResetPassword")
            }}>
            {(props: any) => (
              <View>
                {title != 'Interests' ? (
                  <Dropdown
                    style={[styles.uploadContainer1]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    activeColor='#DDD'
                    itemTextStyle={{color: '#000'}}
                    data={skills}
                    search
                    // maxHeight={300}
                    labelField="name"
                    valueField="id"
                    placeholder={data?.name}
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={(item: any) => {
                      props?.setFieldValue(`Skills`, item?.id);
                    }}
                    renderRightIcon={() =>
                      lang == 'en' ? (
                        <RenderSvgIcon
                          icon={dropdownOpen ? 'ArrowUp' : 'ArrowDown'} // Choose the icon based on the dropdown state
                          width={16}
                          height={16}
                        />
                      ) : null
                    }
                    renderLeftIcon={() =>
                      lang == 'ar' ? (
                        <RenderSvgIcon
                          icon={dropdownOpen ? 'ArrowUp' : 'ArrowDown'} // Choose the icon based on the dropdown state
                          width={16}
                          height={16}
                        />
                      ) : null
                    }
                    onFocus={() => setDropdownOpen(true)} // Set the state to open when the dropdown is focused
                    onBlur={() => setDropdownOpen(false)}
                  />
                ) : (
                  <CustomInput
                    {...props}
                    Label={'Skills'}
                    placeholder={t('writeHere')}
                  />
                )}
                <View style={{height: appSizes.height * 0.28}} />

                <Button
                  loading={loading}
                  text={t('Done')}
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

export default UpdateOneSkills;
