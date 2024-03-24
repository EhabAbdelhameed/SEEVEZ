import React, {useState} from 'react';
import {View, Text, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import {styles} from '../styles';
import UserSection from './User';
import FooterSection from './footerPagaination';
import {appColors} from 'theme';

const ContainerUsers = ({
  title,
  data,
  loading,
  load,
}: {
  title: string;
  data: any[];
  loading: boolean;
  load:React.Dispatch<React.SetStateAction<any>>
}) => {
  
  const [seeAll, setSeeAll] = useState(false);
  const renderItem = ({ item }:any) => <UserSection item={item} load={load} />;
  // console.log(JSON.stringify(data))
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
          <>
          {seeAll ? (
            <FlatList
              data={data}
              contentContainerStyle={{ rowGap: 10 }}
              renderItem={renderItem}
            />
          ) : (
            <FlatList
              data={data.slice(0, 3)} 
              contentContainerStyle={{ rowGap: 10 }}
              renderItem={renderItem}
            />
          )}
        </>
        )}
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: '#E8E8E8',
            marginTop: 10,
            marginBottom: 5,
          }}
        />
        <TouchableOpacity
          onPress={() => setSeeAll(!seeAll)}
          disabled={data?.length<=3}
          style={{
            paddingVertical: 6,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: appColors.primary,
              fontWeight: '500',
              fontFamily: 'Noto Sans',
            }}>
             {seeAll ? 'See Less' : 'See All'}
          </Text>
        </TouchableOpacity>

        {/* <FooterSection
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        /> */}
      </View>
    </View>
  );
};

export default ContainerUsers;
