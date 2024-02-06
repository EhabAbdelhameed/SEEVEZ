import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {ImageBackground} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

import {useNavigation} from '@react-navigation/native';
import {AVATAR, PDF} from 'assets/Svgs';
import AppThunks from 'src/redux/app/thunks';
import {useAppDispatch} from 'src/redux/store';
import { useSelector } from 'react-redux';
import { selectDone } from 'src/redux/app';
import { selectUser } from 'src/redux/auth';

const InfoCard = (user_data: any) => {
  const [name, setName] = useState<any>('');
  const [loading, setLoading] = useState<any>(false);
  const dispatch = useAppDispatch();

  const CurrentUserData = useSelector(selectUser);
  console.log("fffff "+CurrentUserData?.name)
  const uploadFile = async (type: any) => {
   
    try {
      const res: any = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });

    
      setLoading(true);
      const formdata = new FormData();
      formdata.append('name',CurrentUserData?.name);
      formdata.append('cv_pdf', {
        uri: res[0]?.uri,
        type: res[0]?.type,
        name: res[0]?.name,
      });

   
      dispatch(AppThunks.doAddPersonalInfo(formdata)).then((response: any) => {

        setLoading(false);
        setName(res[0].name);
      });
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
  const navigation = useNavigation();
  return (
    <View style={styles.CardContainer}>
      <View style={styles.secContainer}>
        <View style={styles.Row1}>
          <View style={styles.Row2}>
            <TouchableOpacity onPress={() => navigation.navigate('UpdateInfo')}>
              <RenderSvgIcon
                icon="PEN"
                width={20}
                height={20}
                color={appColors.primary}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: 96,
            height: 96,
            borderRadius: 96,
            // borderWidth: 1,
            // borderColor: '#DDD',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: appColors.bg,
          }}>
          {user_data?.user_data?.avatar == null ? (
            <AVATAR height={48} width={48} />
          ) : (
            <Image
              source={{uri:user_data?.user_data?.avatar }}
              style={{width: 96, height: 96, borderRadius: 96}}
              resizeMode="cover"
            />
          )}
          <View
            style={{
              width: 15,
              height: 15,
              borderRadius: 15,
              // borderWidth: 1,
              // borderColor: '#DDD',
              justifyContent: 'center',
              position: 'absolute',
              bottom: 2,
              right: 12,
              alignItems: 'center',
              backgroundColor: appColors.primary,
            }}>
            <RenderSvgIcon
              icon="PLUSFOLLOW"
              // style={{marginRight: 10}}
              width={10}
              height={10}
              color={appColors.white}
            />
          </View>
        </View>

        <View>
          <View style={styles.Row}>
            <Text style={styles.Name}>{user_data?.user_data?.name}</Text>
            <RenderSvgIcon
              icon="RIGHTACCOUNT"
              width={20}
              height={20}
              color={appColors.white}
            />
          </View>
          {user_data?.user_data?.job_title == null ? (
         null
          ) : (
            <Text style={styles.Description}>
              {user_data?.user_data?.job_title}
            </Text>
          )}
          <View style={[styles.Row, {marginTop: 10}]}>
            <View style={styles.subContainer}>
              <Text style={styles.subText}>Free account</Text>
            </View>
            <View style={styles.statuesContainer}>
              <Text style={styles.statuesText}>Online</Text>
            </View>
            <View style={styles.FollowersContainer}>
              <Text style={styles.FollowersText}>0 Followers</Text>
            </View>
          </View>
          <View style={[styles.Row, {marginTop: 15}]}>
            {/* <ReviewCV width={140} /> */}
            <TouchableOpacity
              onPress={uploadFile}
              style={{
                // width: 140,
                height: 40,
                backgroundColor: appColors.bg,
                paddingHorizontal: 20,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: appColors.primary,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                columnGap: 10,
              }}>
              <PDF width={20} height={20} />
              <Text style={{color: appColors.primary}}>
                {name == '' ? 'Upload CV' : name.slice(0,9)}
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('Analytics');
            }}>
            <Analytics width={140} style={{marginLeft: 10}} />
          </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  CardContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '100%',
    backgroundColor: appColors.white,
    borderRadius: 25,
    marginTop: 15,
  },
  secContainer: {
    width: '100%',

    backgroundColor: appColors.lightGrey2,
    borderRadius: 25,
    padding: 5,
    paddingTop: 10,
  },
  ImageBackground: {
    height: 95,
    width: 95,
  },
  imageStyle: {
    borderRadius: 95,
    resizeMode: 'contain',
    backgroundColor: appColors.six,
  },
  SENDIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  PENIcon: {
    position: 'absolute',
    right: 40,
    top: 10,
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:'flex-end',
    marginVertical: 5,
  },
  Row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 5,
  },
  Row2: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  Name: {
    fontSize: 23,
    fontWeight: '700',
    color: appColors.black,
    marginRight: 7,
  },
  Description: {
    fontSize: 14,
    fontWeight: '400',
    color: appColors.black,
    marginRight: 7,
    marginTop: 2,
  },
  subContainer: {
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 30,
    backgroundColor: appColors.bg,
    borderColor: '#B9CDF4',
    borderWidth: 1,
    marginRight: 10,
  },
  subText: {
    fontSize: 12,
    fontWeight: '500',
    color: appColors.primary,
    fontFamily: 'Noto Sans',
  },
  statuesContainer: {
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 30,
    backgroundColor: 'rgba(176,240,238,.5)',
    borderColor: '#B0F0EE',
    borderWidth: 1,
    marginRight: 10,
  },
  statuesText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#00928E',
    fontFamily: 'Noto Sans',
  },
  FollowersContainer: {
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 30,
    backgroundColor: appColors.bg,
    borderColor: '#B9CDF4',
    borderWidth: 1,
  },
  FollowersText: {
    fontSize: 12,
    fontWeight: '500',
    color: appColors.primary,
    fontFamily: 'Noto Sans',
  },
  InfoText: {
    fontWeight: '600',
    color: appColors.black,
    marginLeft: 7,
  },
  Title: {
    fontSize: 16,
    fontWeight: '700',
    color: appColors.black,
  },
  Des: {
    fontSize: 12,
    fontWeight: '400',
    color: appColors.black,
  },
  PlusContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: appColors.primary,
    borderRadius: 20,
  },
});
