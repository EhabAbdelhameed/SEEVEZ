import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  KeyboardAvoidingView,

} from 'react-native';
import React from 'react';
import {RNModal} from '../../../../../ui';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import styles from './styles';
import {appColors} from '../../../../../theme/appColors';
import {appSizes} from '../../../../../theme/appSizes';
import Button from '../../../../../Components/molecules/Button';
import {useNavigation} from '@react-navigation/native';
import ReactNativeModal from 'react-native-modal';

const BottomModalIos = ({
  setVisable,
  data,
  setData,
  visable,
}: {
  setVisable: any;
  data: {
    title: string;
    subTitle: string;
  };
  setData: (str: any) => void;
  visable: boolean;
}) => {
  return (
    <ReactNativeModal
      isVisible={visable}
      onBackButtonPress={() => setVisable(false)}
      onBackdropPress={() => setVisable(false)}
      style={{justifyContent: 'flex-end', paddingBottom: 30}}>
   
          <KeyboardAvoidingView behavior="position" enabled>
            <View style={styles.ModalContanier}>
              <View style={{paddingHorizontal: appSizes.padding_m}}>
                <Text style={{fontSize: 14, fontWeight: '400', color: '#000'}}>
                  {data?.subTitle}
                </Text>
              </View>
              <TextInput
                placeholder="Write here.."
                placeholderTextColor={'#B9B9B9'}
                onChangeText={e => {
                  setData(e);
                }}
                style={[
                  styles.InputStyleWithOutWidth,
                  {marginTop: 20, marginBottom: 20},
                ]}
              />

              <Button
                textStyle={{fontSize: 16}}
                text="Done"
                onPress={() => {
                  setVisable(false);
                }}
                style={styles.btn}
              />
            </View>
          </KeyboardAvoidingView>
   
    </ReactNativeModal>
  );
};

export default BottomModalIos;
