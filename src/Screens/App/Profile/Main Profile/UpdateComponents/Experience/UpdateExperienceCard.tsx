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

const UpdateExperienceCard = () => {
  const {data}: any = useRoute().params;

  const navigation = useNavigation();
  console.log('FromUpdated ', data);
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
  const showConfirmDialog = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete this experience?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // Handle the confirm action
            console.log('Confirmed!');
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
          <TouchableOpacity
            style={styles.skipContainer}
            onPress={_handleNavigate}>
            <Text style={styles.skipText}>Skip</Text>
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

          {data?.data?.map((item: any) => (
            <View style={{marginBottom: 15, flexDirection: 'row'}}>
              <View>
                <View style={styles.Row2}>
                  <Image
                    source={require('../../../../../../assets/images/CompanyLogo.png')}
                    style={styles.Image}
                  />
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
                    <TouchableOpacity onPress={showConfirmDialog}>
                <DELETE />
                </TouchableOpacity>
                <TouchableOpacity>
                  <RenderSvgIcon
                    icon="PEN"
                    width={20}
                    height={20}
                    color={appColors.primary}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdateExperienceCard;
