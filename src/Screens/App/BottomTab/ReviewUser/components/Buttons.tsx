import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback} from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {DownloadIcon, PDF, Star, Upload, UploadYourCv} from 'assets/Svgs';
import {useNavigation, useRoute} from '@react-navigation/native';

import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
import {useAppDispatch} from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
const Buttons = () => {
  const {apply_id, job_id, user_id}: any = useRoute().params;
  const navigation = useNavigation<any>();
  const [shortedListLoading, setShortedListLoading] = React.useState(false);
  const [rejectedListLoading, setRejectedListLoading] = React.useState(false);
  const [waitingListLoading, setWaitingListLoading] = React.useState(false);
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const dispatch = useAppDispatch();
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  //add user to shortlist
  const _handleAddToShortList = () => {
    setShortedListLoading(true);
    const formdata = new FormData();
    formdata.append('apply_id', apply_id);
    formdata.append('status', '4');
    dispatch(AppThunks.doChangeStatusUser(formdata)).then((res:any) => {
      if (res?.meta?.requestStatus == 'fulfilled') {
        navigation.navigate("ShortedList",{id:job_id})
        dispatch(AppThunks.doGetJobDescraption(job_id))
      }
      setShortedListLoading(false);
    });
  };
  //add user to rejected list
  const _handleAddToRejectedList = () => {
    setRejectedListLoading(true);
    const formdata = new FormData();
    formdata.append('apply_id', apply_id);
    formdata.append('status', '2');
    dispatch(AppThunks.doChangeStatusUser(formdata)).then((res:any) => {
      if (res?.meta?.requestStatus == 'fulfilled') {
        navigation.navigate("RejectedList",{id:job_id})
        dispatch(AppThunks.doGetJobDescraption(job_id))
      }
      setRejectedListLoading(false);
    });
  };
  //add user to waiting list
  const _handleAddToWaitingList = () => {
    setWaitingListLoading(true);
    const formdata = new FormData();
    formdata.append('apply_id', apply_id);
    formdata.append('status', '3');
    dispatch(AppThunks.doChangeStatusUser(formdata)).then((res: any) => {
      console.log(JSON.stringify(res), 'res');
      if (res?.meta?.requestStatus == 'fulfilled') {
        navigation.navigate('WatingList', {id: job_id});
        dispatch(AppThunks.doGetJobDescraption(job_id))
      }
      setWaitingListLoading(false);
    });
  };

  return (
    <View style={{paddingBottom: 40}}>
      <TouchableOpacity
        onPress={_handleAddToShortList}
        style={[styles.buttonStyle]}>
        {shortedListLoading ? (
          <ActivityIndicator size={20} color={'#00928E'} />
        ) : (
          <Text style={[styles.textStyle]}>Shortlised</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={_handleAddToRejectedList}
        style={[
          styles.buttonStyle,
          {borderColor: '#ED3C3C', backgroundColor: '#FBE8E8'},
        ]}>
        {rejectedListLoading ? (
          <ActivityIndicator size={20} color={'#ED3C3C'} />
        ) : (
          <Text style={[styles.textStyle, {color: '#ED3C3C'}]}>Rejected</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={_handleAddToWaitingList}
        style={[
          styles.buttonStyle,
          {borderColor: '#1D5EDD', backgroundColor: appColors.bg},
        ]}>
        {waitingListLoading ? (
          <ActivityIndicator size={20} color={'#1A56C9'} />
        ) : (
          <Text style={[styles.textStyle, {color: '#1A56C9'}]}>
            Waiting list
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#E6FAFA',
    borderWidth: 1,
    borderColor: '#00BBB6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 20,
  },
  textStyle: {
    fontSize: 20,
    fontFamily: 'Noto Sans',
    color: '#00928E',
    fontWeight: '500',
  },
});
