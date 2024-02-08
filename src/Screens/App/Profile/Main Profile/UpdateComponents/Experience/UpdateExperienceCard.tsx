import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  FlatList,
  Linking,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import {RenderSvgIcon} from '../../../../../../Components/atoms/svg';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../../../../theme/appColors';

import {BigLogo, CALANDER, CompanyLogo, DELETE, PDF, PHOTO} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import moment from 'moment';
import {useAppDispatch} from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import AppSlice, {selectDone} from 'src/redux/app';
import {useSelector} from 'react-redux';
import {selectUser} from 'src/redux/auth';
import ReadMore from '@fawazahmed/react-native-read-more';

const UpdateExperienceCard = () => {
  const CurrentUserData = useSelector(selectUser);
  let data = CurrentUserData?.user_data?.experiences;
  console.log('11111111 ', data);
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
  const differenceInMonths = (date1: any, date2: any) => {
    let start_date = moment(date1).format('yyyy-MM-DD');
    let end_date = moment(date2).format('yyyy-MM-DD');
    let years =
      (parseInt(end_date.substring(0, 4)) -
        parseInt(start_date.substring(0, 4))) *
      12;
    let months =
      parseInt(end_date.substring(5, 7)) - parseInt(start_date.substring(5, 7));
    Math.abs(years);
    Math.abs(months);

    return years + months;
  };
  const handleDeleteExperience = (experienceId: any) => {
    // Show confirmation dialog
    Alert.alert(
      'Seevez',
      'Are you sure you want to delete this experience?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // Dispatch the action to delete the experience
            dispatch(AppThunks.doDeleteExperience(experienceId)).then(
              (res: any) => {
                dispatch(AppThunks.GetProfileInfo());
              },
            );
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

          {data?.map((item: any) => (
            <View style={{marginBottom: 15}}>
              <View style={{flexDirection: 'row'}}>
              <View>
                <View style={styles.Row2}>
                  <View
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 64,

                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: appColors.bg,
                    }}>
                    <CompanyLogo height={32} width={32} />
                  </View>
                  <View style={{marginLeft: 10}}>
                    <Text style={styles.Title2}>{item.job_title}</Text>
                    <Text style={styles.CompanyName}>
                      {item?.company_name == null
                        ? item?.company_id?.name
                        : item?.company_name}
                    </Text>
                    <Text style={styles.des}>
                      {moment(item.start_date).format('MMM yyyy')} - Present{' '}
                      {differenceInMonths(item?.start_date, item?.end_date)} mos
                      · Cairo, Egypt
                    </Text>
                  </View>
                </View>
                <View style={styles.Row3}>
                  <View style={styles.FollowersContainer}>
                    <Text style={styles.FollowersText}>
                      {item?.job_type_id?.name}
                    </Text>
                  </View>
                </View>
              
              </View>
              <View
                style={{flexDirection: 'row', columnGap: 15, marginLeft: 5}}>
                <TouchableOpacity
                  onPress={() => handleDeleteExperience(item.id)}>
                  <DELETE />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('UpdateOneExperience', {
                      data: item,
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
              <View style={{}}>
                <Text style={styles.Title3}>Description</Text>
              <ReadMore
                style={styles.PostText}
                animate={true}
                seeMoreStyle={{
                  color: appColors.primary,
                  textDecorationLine: 'underline',
                }}
                seeLessStyle={{
                  color: appColors.primary,
                  textDecorationLine: 'underline',
                }}
                seeLessText="less"
                seeMoreText="Read more"
                numberOfLines={3}>
                {item.description}
              </ReadMore>
              {item?.experience_letter==null?null:
                item?.object_info?.extension == 'pdf' ? (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => Linking.openURL(item?.experience_letter)}
                    style={styles.PDFContainer}>
                    <PDF height={70} width={70} />
                  </TouchableOpacity>
                ) : (
                  <Image
                    style={styles.Certificate}
                    source={{
                      uri: item?.experience_letter,
                    }}
                  />
                )}
                </View>
            </View>
          ))}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdateExperienceCard;
