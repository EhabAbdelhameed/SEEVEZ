import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {RNModal} from '../../../../../../ui';
import {RenderSvgIcon} from '../../../../../../Components/atoms/svg';
import styles from './styles';
import {appColors} from '../../../../../../theme/appColors';
import {appSizes} from '../../../../../../theme/appSizes';
import Button from '../../../../../../Components/molecules/Button';
import {useNavigation} from '@react-navigation/native';

const BottomModal = ({
  ModalRef,
  data,
  setData
}: {
  ModalRef: any;
  data: {
    title: string;
    subTitle: string;
  };
  setData: (str: any) => void;
}) => {
  const [modalHeight, setmodalHeight] = React.useState<any>('');
//   console.log(appSizes.height * 0.35)
  const navigation = useNavigation<any>();
  const header = () => {
    return (
      <>
        <View style={styles.ModalHeaderContanier}>
          <RenderSvgIcon icon="HEADERMODALLINE" width={90} />
          <Text
            style={[
              styles.rectangleText,
              {
                marginTop: 0,
                color: appColors.black,
                alignSelf: 'flex-start',
                marginLeft: 12,
              },
            ]}>
            {data?.title}
          </Text>
        </View>
      </>
    );
  };
  return (
    <RNModal
      ref={ModalRef}
      renderModalHeader={header}
      height={modalHeight==''?appSizes.height * 0.35:modalHeight}>
   
      <View style={styles.ModalContanier}>
        <View style={{paddingHorizontal: appSizes.padding_m,}}>
        <Text style={{fontSize:14,fontWeight:'400',color:'#000'}}>{data?.subTitle}</Text>
        </View>
        <TextInput
          placeholder="Write here.."
          placeholderTextColor={'#B9B9B9'}
          onChangeText={e => {setData(e)}}
          onEndEditing={()=>setmodalHeight('')}
        onFocus={()=>setmodalHeight(appSizes.height * 0.6)}  
        
          style={[
            styles.InputStyleWithOutWidth,
            {marginTop: 20, marginBottom: 20},
          ]}

        />

        <Button
          textStyle={{fontSize: 16}}
          text="Done"
          onPress={() => {
            ModalRef.current?.close();
            
          }}
          style={styles.btn}
        />
      </View>
    </RNModal>
  );
};

export default BottomModal;
