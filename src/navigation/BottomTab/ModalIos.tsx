import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  Share,
  Image,
} from 'react-native';
import React from 'react';

import ReactNativeModal from 'react-native-modal';

import {RenderSvgIcon} from 'components/atoms/svg';
import {appColors, appSizes} from 'theme';
import Button from 'components/molecules/Button';
import { useNavigation } from '@react-navigation/native';

const PopUp = ({
  setVisable,
  data,

  visable,
}: {
  setVisable: any;
  data?: any;

  visable: boolean;
}) => {
    const navigation = useNavigation<any>();
  return (
    <ReactNativeModal
      isVisible={visable}
      onBackButtonPress={() => setVisable(false)}
      onBackdropPress={() => setVisable(false)}
      style={{justifyContent: 'flex-end', paddingBottom: 30}}>
      <KeyboardAvoidingView behavior="position" enabled>
        <View
          style={{
            width: '100%',
            paddingVertical: 20,
            backgroundColor: '#ffff',
            // alignItems: "center",
            paddingHorizontal: 10,
            marginTop: 2,
            borderRadius: 15,
          }}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              paddingHorizontal: appSizes.padding_m,
            }}>
            <RenderSvgIcon icon="HEADERMODALLINE" width={90} />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../../assets/images/seevezlogo.png')}
                style={{width: 148, height: 40}}
              />
              <View style={{marginTop: 10}}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      marginRight: 5,
                      marginTop: 5,
                      color: '#000',
                      fontSize: 16,
                    }}>
                    •
                  </Text>
                  <Text
                    style={{
                      marginRight: 5,
                      marginTop: 5,
                      color: '#000',
                      fontSize: 16,
                    }}>
                    Only upload images or designs that are appropriate and
                    comply with our community guidelines. Avoid explicit,
                    offensive, or illegal content.
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      marginRight: 5,
                      marginTop: 5,
                      color: '#000',
                      fontSize: 16,
                    }}>
                    •
                  </Text>
                  <Text
                    style={{
                      marginRight: 5,
                      marginTop: 5,
                      color: '#000',
                      fontSize: 16,
                    }}>
                    Respect the privacy and rights of others. Do not upload
                    content that reveals personal information without consent.
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      marginRight: 5,
                      marginTop: 5,
                      color: '#000',
                      fontSize: 16,
                    }}>
                    •
                  </Text>
                  <Text
                    style={{
                      marginRight: 5,
                      marginTop: 5,
                      color: '#000',
                      fontSize: 16,
                    }}>
                    You must have the legal right to upload the images or
                    designs. Do not upload content that infringes upon
                    copyrights, trademarks, or intellectual property rights.
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      marginRight: 5,
                      marginTop: 5,
                      color: '#000',
                      fontSize: 16,
                    }}>
                    •
                  </Text>
                  <Text
                    style={{
                      marginRight: 5,
                      marginTop: 5,
                      color: '#000',
                      fontSize: 16,
                    }}>
                    By uploading content, you grant our app a non-exclusive,
                    royalty-free license to use, modify, and display the
                    content within the app.
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', columnGap: 10, width: '100%',marginTop:20}}>
                  <View style={{width: '50%'}}>
                    <Button text={'Done'} onPress={() =>  navigation.navigate(data)} />
                  </View>
                  <View style={{width: '50%'}}>
                    <Button
                      text="Cancel"
                      style={{backgroundColor: '#DDD'}}
                      textStyle={{color:'#000'}}
                      onPress={() => setVisable(false)}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ReactNativeModal>
  );
};

export default PopUp;
