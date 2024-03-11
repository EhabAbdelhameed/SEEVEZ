import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Platform,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {styles} from '../styles';
import {RenderSvgIcon} from 'components/atoms/svg';
import {appColors} from 'theme';
import {useNavigation} from '@react-navigation/native';
import {AVATAR, FlatListImage} from 'assets/Svgs';
import {Input} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch} from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import {useSelector} from 'react-redux';
import AppSlice, { selectSearchData} from 'src/redux/app';

const Flatlist = () => {
  const [choicePeople, setChoicePeople] = useState(false);
  const searchData = useSelector(selectSearchData);
  const [Load, setLoad] = React.useState(false);
  // const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndices, setSelectedIndices] = useState<any>([]);
  const [selectedIds, setSelectedIds] = useState<any>([]);
  const [selectedNames, setSelectedNames] = useState<any>([]);
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const [searchIndex, setSearchIndex] = useState<any>('');
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  useEffect(() => {
  
    dispatch(AppSlice.changeTagPeopel(selectedItems));
    dispatch(AppSlice.changeTagNames(selectedNames));
  }, [selectedIds, selectedNames]);
  React.useEffect(() => {
    dispatch(AppThunks.GetProfileInfo())
    dispatch(AppSlice.changeSearchPeopelData([]))
    const timer = setTimeout(() => {
      
      searchTerm &&
         setLoad(true)
        dispatch(AppThunks?.searchForTagPeopel(searchTerm)).then(() => {
          setLoad(false)
        });
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

 
  const filteredData = (data: any) =>
    data?.name?.toLowerCase().includes(searchTerm?.toLowerCase());
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
       {Load ? (
          <ActivityIndicator size={30} style={{marginTop: 15}} />
        ) :(
      <View style={{marginTop: 20}}>
        <FlatList
          scrollEnabled={false}
          data={searchData?.data?.filter(filteredData)}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                const itemId = searchData?.data[index]?.id; // Assuming you have an 'id' field in your data
                const Name = searchData?.data[index]?.name;
               
                const selectedItem = { id: itemId, name: Name };
                if (selectedIndices.includes(index)) {
                  setSelectedIndices(
                    selectedIndices.filter((idx: any) => idx !== index),
                  );
                  setSelectedIds(
                    selectedIds.filter((id: any) => id !== itemId),
                  );
                  setSelectedNames(
                    selectedNames.filter((name: any) => name !== Name),
                  );
                  setSelectedItems(
                    selectedItems.filter((item: any) => item.id !== itemId),
                  );

                  // dispatch(AppSlice.changeTagPeopel(selectedIds))
                } else {
                  setSelectedIndices([...selectedIndices, index]);
                  setSelectedIds([...selectedIds, itemId]);
                  setSelectedNames([...selectedNames, Name]);
                  setSelectedItems([...selectedItems, selectedItem]);

                  // dispatch(AppSlice.changeTagPeopel(selectedIds))
                }
              }}
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
                <View
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 48,
                    // borderWidth: 1,
                    // borderColor: '#DDD',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: appColors.bg,
                  }}>
                  {item?.avatar == null ? (
                    <AVATAR height={32} width={32} />
                  ) : (
                    <Image
                      source={{uri: item?.avatar}}
                      style={{width: 48, height: 48, borderRadius: 48}}
                      resizeMode="cover"
                    />
                  )}
                </View>

                <Text
                  style={{
                    color: '#000',

                    fontFamily: 'Noto Sans',
                    fontSize: 18,

                    fontWeight: '500',
                  }}>
                  {item?.name}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  const itemId = searchData?.data[index]?.id; // Assuming you have an 'id' field in your data
                  const Name = searchData?.data[index]?.name;
                  if (selectedIndices.includes(index)) {
                    setSelectedIndices(
                      selectedIndices.filter((idx: any) => idx !== index),
                    );
                    setSelectedIds(
                      selectedIds.filter((id: any) => id !== itemId),
                    );
                    setSelectedNames(
                      selectedNames.filter((name: any) => name !== Name),
                    );

                    // dispatch(AppSlice.changeTagPeopel(selectedIds))
                  } else {
                    setSelectedIndices([...selectedIndices, index]);
                    setSelectedIds([...selectedIds, itemId]);
                    setSelectedNames([...selectedNames, Name]);

                    // dispatch(AppSlice.changeTagPeopel(selectedIds))
                  }
                }}
                style={styles.Circle}>
                <View
                  style={
                    selectedIndices.includes(index) ? styles.innerCircle : null
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>)}
    </SafeAreaView>
  );
};

export default Flatlist;
