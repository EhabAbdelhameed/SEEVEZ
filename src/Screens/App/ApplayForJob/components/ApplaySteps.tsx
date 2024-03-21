import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {appColors} from '../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../Components/atoms/svg';
import {Star} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
const ApplySteps = ({
  question,
  CurrentIndex,
}: {
  question: any;
  CurrentIndex: any;
}) => {
  const navigation = useNavigation<any>();
  const _handleNavigate = useCallback(() => {
    navigation.goBack();
  }, []);
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%'
        // justifyContent: 'space-around',
      }}>
      {question?.map((item: any, index: any) => {
        return (
            index<question?.length-1?
          <View
            key={index}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {index<=CurrentIndex ? (
                  <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
    
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: '#00CEC8',
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      fontFamily: 'Noto Sans',
                      color: '#fff',
                    }}>
                    {index + 1}
                  </Text>
                </View>
            ):(
                <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
  
                  width: 20,
                  height: 20,
                  borderRadius: 20,
                  backgroundColor: '#E6FAFA',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    fontFamily: 'Noto Sans',
                    color: '#8AE8E6',
                  }}>
                  {index + 1}
                </Text>
              </View> 
            )}
          
            {question?.length - 2 == index ? null : (
              <View
                style={{
                  width:question?.length<=4?200:question?.length>4&&question?.length<7? 35:20,
                  height: 2,

                  backgroundColor: '#00CEC8',
                }}
              />
            )}
          </View>:null
        );
      })}
    </View>
  );
};

export default ApplySteps;
