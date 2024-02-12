import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styles';
import {RenderSvgIcon} from 'components/atoms/svg';
import {appColors} from 'theme';
import {useNavigation} from '@react-navigation/native';

const ContainerHeader = ({
  multiSelect,
  setMultiSelect,
  setTypeSelect,
  typeSelect,
  data,
}: {
  multiSelect: boolean;
  setMultiSelect: (str: any) => void;
  data: any;

  typeSelect: 'Gallery' | 'Camera';
  setTypeSelect: (str: 'Gallery' | 'Camera') => void;
}) => {
  const [opened, setOpened] = useState(false);
  const navigation = useNavigation<any>();
  return (
    <View style={styles.containerHeader}>
      {!multiSelect && (
        <TouchableOpacity
          style={[
            styles.leftSide,
            {
              borderBottomLeftRadius: opened ? 0 : 20,
              borderBottomRightRadius: opened ? 0 : 20,
            },
          ]}
          onPress={() => {
            setOpened((prev: boolean) => !prev);
          }}>
          <Text style={styles.text1}>{typeSelect}</Text>
          <View style={{transform: [{rotate: opened ? '90deg' : '-90deg'}]}}>
            <RenderSvgIcon icon="ARROWBACK" color={appColors.primary} />
          </View>
          {opened && (
            <TouchableOpacity
              style={styles.absItems}
              onPress={() => {
                setOpened((prev: boolean) => false);
                setTypeSelect((str: any) =>
                  str == 'Gallery' ? 'Camera' : 'Gallery',
                );
              }}>
              <Text style={styles.text1}>
                {typeSelect != 'Camera' ? 'Camera' : 'Gallery'}
              </Text>
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      )}

      {multiSelect && (
        <TouchableOpacity
          style={[
            styles.leftSide,
            {
              borderBottomLeftRadius: opened ? 0 : 20,
              borderBottomRightRadius: opened ? 0 : 20,
              backgroundColor: appColors.primary,
            },
          ]}
          onPress={() =>
            navigation.navigate('CreatePhoto2', {
              item: data,
              key: '3',
            })
          }>
          <Text style={[styles.text1, {color: '#FFF'}]}>Save</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.rightSide}
        onPress={() => {
          setMultiSelect((prev: boolean) => !prev);
        }}>
        <RenderSvgIcon icon="PIC" color={appColors.primary} />
        <Text style={styles.text1}>
          Select {multiSelect ? 'multiple' : 'single'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContainerHeader;
