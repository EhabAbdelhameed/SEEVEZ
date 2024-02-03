import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  FlatList,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import {RenderSvgIcon} from '../../../../../../Components/atoms/svg';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../../../../theme/appColors';

import {BigLogo, CALANDER, CompanyLogo, DELETE, PHOTO} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import moment from 'moment';
import {useAppDispatch} from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import AppSlice, { selectDone } from 'src/redux/app';
import {useSelector} from 'react-redux';
import {selectUser} from 'src/redux/auth';

const UpdateSkillsCard = () => {
  const {title}: any = useRoute().params;

  const CurrentUserData = useSelector(selectUser);

  let data: any =
    title != 'Interests'
      ? CurrentUserData?.user_data?.skills
      : CurrentUserData?.user_data?.interests;


  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const [refreshPage, setRefreshPage] = useState(false);
    const changeDone = useSelector(selectDone);
    useEffect(() => {
      if (data?.length === 0 && changeDone) {
        setRefreshPage(true);
      }
    }, [data, changeDone]);
  
    useEffect(() => {
      if (refreshPage) {
        navigation.goBack();
        setRefreshPage(false);
      }
    }, [refreshPage, navigation]);
  React.useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      dispatch(AppThunks.GetProfileInfo());
      dispatch(AppSlice.changeDone(false));
    });
    return RenderFunction;
  }, [navigation]);
  // console.log('FromUpdated ', data);
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);


  const handleDeleteSkills = (RefernceCheckId: any) => {
    // Show confirmation dialog
    Alert.alert(
      'Seevez',
      `Are you sure you want to delete this ${title}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            if(title=="Interests"){
                dispatch(AppThunks.doDeleteIntersts(RefernceCheckId)).then(
                    (res: any) => {
                      dispatch(AppThunks.GetProfileInfo());
                    },
                  );
            }else{
                dispatch(AppThunks.doDeleteSkills(RefernceCheckId)).then(
                    (res: any) => {
                      dispatch(AppThunks.GetProfileInfo());
                    },
                  ); 
            }
            // Dispatch the action to delete the experience
         
          },
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          backgroundColor: appColors.bg,
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <TouchableOpacity onPress={_handleNavigate} activeOpacity={0.8}>
            <RenderSvgIcon
              icon="ARROWBACK"
              width={30}
              height={30}
              color={appColors.primary}
            />
          </TouchableOpacity>
          {/* <BigLogo height={30} width={96} style={{marginLeft: 70}} />
           */}
          <Image
            source={require('../../../../../../assets/images/seevezlogo.png')}
            style={{width: 100, height: 30}}
          />
        </View>
        <View style={styles.circles}>
          <RenderSvgIcon icon="CIRCLELOGIN" width={220} height={160} />
        </View>

        <View style={styles.bottomSection}>
          <View style={styles.blueCircle}>
            <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
          </View>
          <View style={styles.loginTextContainer}>
            <View style={{width: 32}}>
              {/* <RenderSvgIcon icon="ICON2CV" width={32} height={48} /> */}
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
          <View style={{marginBottom: 30}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: '#000',
                marginLeft: 8,
                fontFamily: 'Noto Sans',
              }}>
              {title == 'Interests' ? 'Interests' : 'skills and tools'}
            </Text>
          </View>

          <FlatList
            scrollEnabled={false}
            data={data}
            renderItem={({item}) => (
              <View
                style={{
                  marginBottom: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 6,
                }}>
                <View style={styles.Row1}>
                  <Text style={styles.InfoText}>{item?.name}</Text>
                </View>
                <View
                  style={{flexDirection: 'row', columnGap: 15, marginLeft: 5}}>
                  <TouchableOpacity
                    onPress={() => handleDeleteSkills(item?.id)}>
                    <DELETE />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('UpdateOneSkills', {
                        data: item,
                        title:title,
                      })
                    }>
                    <RenderSvgIcon
                      icon="PEN"
                      width={20}
                      height={20}
                      color={appColors.primary}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdateSkillsCard;
