import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../styles';
import UserSection from './User';
import FooterSection from './footerPagaination';
import {appColors} from 'theme';

const ContainerUsers = ({data, loading}: {data: any[]; loading: boolean}) => {
 
  const renderItem = ({item}: any) => <UserSection item={item} />;
  return (
    <View style={styles.containerUsers}>
      <View style={styles.container2Users}>
        {loading ? (
          <View
            style={[
              styles.container2Users,
              {height: 560, justifyContent: 'center', alignItems: 'center'},
            ]}>
            <ActivityIndicator size={'large'} color={appColors.primary} />
          </View>
        ) : (
          <View
            style={{height:'100%'}}>
          <FlatList
            data={data.slice(0, 3)}
            contentContainerStyle={{rowGap: 10}}
            renderItem={renderItem}
          />
          </View>
        )}
      </View>
    </View>
  );
};

export default ContainerUsers;
