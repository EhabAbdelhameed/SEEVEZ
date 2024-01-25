import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {VIDEOICON} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';

const RecordVideo = (data: any) => {
  const navigation = useNavigation<any>();

  const saveReferenceCheckSection = () => {
    //   navigation.navigate('UpdateRefernceCheck');
  };
  return (
    <View style={styles.CardContainer}>
      <TouchableOpacity onPress={()=>navigation.navigate('UpdateRecordVideo')}
       style={styles.secContainer}>
        {/* <TouchableOpacity onPress={saveReferenceCheckSection}> */}
          <VIDEOICON />
        {/* </TouchableOpacity> */}
      </TouchableOpacity>
      <Text style={styles.RecordText}>Record video cv</Text>
    </View>
  );
};

export default RecordVideo;

const styles = StyleSheet.create({
  CardContainer: {
    // paddingHorizontal: 20,
    // paddingVertical: 15,
    width: '100%',
    backgroundColor: appColors.bg,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,

    // marginTop: 15,
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: appColors.primary,
  },
  secContainer: {
    width: 96,
    height: 96,
    // backgroundColor: appColors.bg,
    borderRadius: 96,
    borderWidth: 0.5,
    marginBottom:10,
    borderColor: appColors.primary,

    padding: 5,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RecordText: {
    fontFamily: ' Noto Sans',
    fontSize: 24,
    color:appColors.primary,
    fontWeight: '700',
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  Row2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Title: {
    fontSize: 20,
    fontWeight: '700',
    color: appColors.black,
  },

  Des: {
    fontWeight: '400',
    color: appColors.black,
  },
  EditDes: {
    fontWeight: '400',
    color: appColors.black,
    textAlignVertical: 'top',
    marginBottom: 10,
  },
});
