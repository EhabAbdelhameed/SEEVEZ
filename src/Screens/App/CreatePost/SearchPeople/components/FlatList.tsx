import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import {styles} from '../styles';
import {RenderSvgIcon} from 'components/atoms/svg';
import {appColors} from 'theme';
import {useNavigation} from '@react-navigation/native';
import {FlatListImage} from 'assets/Svgs';
import {Input} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

const Flatlist = () => {
  const [choicePeople, setChoicePeople] = useState(false);
  const [data, setData] = useState([
    {
      image: '',
      text: 'Hanna Siphron',
      choice: false,
    },
    {
      image: '',
      text: 'Kaiya George',
      choice: false,
    },
    {
      image: '',
      text: 'Erin Herwitz',
      choice: false,
    },
    {
      image: '',
      text: 'Jaylon Donin',
      choice: false,
    },
    {
      image: '',
      text: 'Alfonso Dorwart',
      choice: false,
    },
    {
      image: '',
      text: 'Roger George',
      choice: false,
    },
    {
      image: '',
      text: 'Carter Kenter',
      choice: false,
    },
    {
      image: '',
      text: 'Tatiana Rosser',
      choice: false,
    },
    {
      image: '',
      text: 'Tiana Ekstrom Bothman',
      choice: false,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = useMemo(() => {
    return data.filter(item =>
      item.text.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);
  return (
    <SafeAreaView edges={['top']} style={{flex: 1, marginTop: 20}}>
      <Input
        inputContainerStyle={{
          borderRadius: 16,
          borderColor: '#1D5EDD',
          borderWidth: 1,
          paddingHorizontal: 15,
          height: Platform.OS == 'android' ? null : 50,
          width: '90%',
        }}
        onChangeText={e => setSearchTerm(e)}
        placeholderTextColor={'#B9B9B9'}
        containerStyle={{
          paddingHorizontal: 0,
          marginVertical: 1,
          height: 50,
          marginBottom: 15,
        }}
        inputStyle={{
          fontSize: 14,
          //  color: 'red'
        }}
        placeholder={`Write here..`}
      />
      <View style={{marginTop: 20}}>
        <FlatList
          scrollEnabled={false}
          data={filteredData}
          renderItem={({item, index}) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  columnGap: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FlatListImage />
                <Text
                  style={{
                    color: '#000',

                    fontFamily: 'Noto Sans',
                    fontSize: 18,

                    fontWeight: '500',
                  }}>
                  {item?.text}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  let data1 = data;
                  data1[index].choice == true;
                  console.log(data1[index].choice)
                   setData(data1)

                  //   props?.setFieldValue(`still_work_here`, choicePeople ? 0 : 1);
                }}
                style={styles.Circle}>
                <View style={item.choice == true ? styles.innerCircle : null} />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Flatlist;
