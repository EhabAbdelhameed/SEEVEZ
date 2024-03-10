import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import DonotHaveAccountSection from '../../../../../Components/molecules/DonotHaveAccountSection';
import AuthTopSection from '../../../../../Components/molecules/AuthTopSection';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../../../theme/appColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../../../../../Components/molecules/Button';
import {MultiSelect} from 'react-native-element-dropdown';
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
import TopHeader from '../Header/TopHeader';
import BottomHeader from '../Header/BottomHeader';
import { selectLang } from 'src/redux/lang';
import { useTranslation } from 'react-i18next';

const UpdateSkills = () => {
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();
  const CurrentUserData = useSelector(selectUser);
  const changeDone = useSelector(selectDone);
  const [selected, setSelected] = useState([]);
  const skills=useSelector(selectSkills)
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    changeDone ? navigation.goBack() : null;
  }, [changeDone]);
  useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      dispatch(AppThunks.GetSkills());
    
    
    });
    return RenderFunction;
  }, []);
  const dispatch = useAppDispatch();
  const {title}: any = useRoute().params;
  const lang = useSelector(selectLang);
  
  const {t, i18n} = useTranslation();
  return (
    <SafeAreaView edges={['top']} style={[styles.container,{direction:lang=='ar'?'rtl':'ltr'}]}>
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
            {t(title.toLowerCase())}
          </Text>
          <Formik
            initialValues={{Skills: ''}}
            onSubmit={values => {
              setLoading(true);
              const formdata = new FormData();
              formdata.append('user_id', CurrentUserData.id);

             
              if (title == 'Skills') {
                for(let i=0;i<selected?.length;i++){
                  formdata.append('array[1][skill_id]', selected[i]);
                }
                

                dispatch(AppThunks.doAddSkills(formdata)).then((res: any) => {
                  dispatch(AppThunks.GetProfileInfo());
                  setLoading(false);
                });
              } else { 
                formdata.append('name', values.Skills);
                dispatch(AppThunks.doAddIntersts(formdata)).then((res: any) => {
                  dispatch(AppThunks.GetProfileInfo());
                  setLoading(false);
                });
              }
            }}>
            {(props: any) => (
              <View>
                {title=='Skills'?
                   <MultiSelect
                   style={styles.uploadContainer1}
                   placeholderStyle={styles.placeholderStyle}
                   selectedTextStyle={styles.selectedTextStyle}
                   inputSearchStyle={styles.inputSearchStyle}
                   iconStyle={styles.iconStyle}
                   data={skills}
                   search
                   labelField="name"
                   valueField="name"
                   placeholder={'Select one or more Nationality'}
                   searchPlaceholder="Search..."
                   value={selected}
                   onChange={(items: any) => {
                     setSelected(items)
                     console.log(items)
                    
                   }}
                   renderRightIcon={() =>
                     lang == 'en' ? (
                       <RenderSvgIcon
                         icon={dropdownOpen ? 'ArrowUp' : 'ArrowDown'}
                         width={16}
                         height={16}
                       />
                     ) : null
                   }
                   maxSelect={7}
                   renderLeftIcon={() =>
                     lang == 'ar' ? (
                       <RenderSvgIcon
                         icon={dropdownOpen ? 'ArrowUp' : 'ArrowDown'}
                         width={16}
                         height={16}
                       />
                     ) : null
                   }
                   onFocus={() => setDropdownOpen2(true)}
                   onBlur={() => setDropdownOpen2(false)}
                   // Customizing the style of selected items
                   selectedStyle={{
                     backgroundColor: appColors.bg, // Change the background color of selected items
                     borderRadius: 10, // Add border radius to the selected items
                     paddingHorizontal: 20,
                     paddingVertical: 10,
                     borderColor: appColors.bg,
                     // Adjust padding for selected items
                     // margin: 2,
                     columnGap: 10,
                     justifyContent: 'center',
                     alignItems: 'center',
                     flexDirection: 'row', // Adjust margin for selected items
                   }}
                   dropdownPosition={'top'}
                   // Customizing the rendering of selected items
                 />:
                <InputView
                  name="Skills"
                  placeholder={t("writeHere")}
                  // props={props}
                  {...props}
                />}

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

export default UpdateSkills;
