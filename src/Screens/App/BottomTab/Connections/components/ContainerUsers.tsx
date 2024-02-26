import React, {useState} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {styles} from '../styles';
import UserSection from './User';
import FooterSection from './footerPagaination';
import {appColors} from 'theme';

const ContainerUsers = ({
  title,
  data,
  loading,
  totalPages,
  currentPage,
  onPageChange
}: {
  title: string;
  data: any[];
  loading: boolean;
  totalPages:any,
  currentPage:any,
  onPageChange:(page: number) => void;
}) => {
 
  return (
    <View style={styles.containerUsers}>
      <Text style={styles.titleSection}>{title}</Text>
     
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
          <FlatList
            data={data}
            contentContainerStyle={{rowGap: 10}}
            scrollEnabled={false}
            renderItem={({item}) => (
              <UserSection  item={item} />
            )}
          />)}
          <View style={{width:'100%',height:2,backgroundColor:'#E8E8E8',marginTop:10,marginBottom:5}}/>
           <FooterSection
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </View>
  
    </View>
  );
};

export default ContainerUsers;
