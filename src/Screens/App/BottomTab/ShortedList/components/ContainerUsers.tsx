import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {styles} from '../styles';

import Users from './Users';
import {appColors} from 'theme';
const data = [1, 2, 3, 4, 5, 6, 7, 8];

const ContainerUsers = ({setLoad}: {setLoad?: any}) => {
  const [seeAll, setSeeAll] = useState(false);
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          color: '#000',
          fontWeight: '500',
          fontFamily: 'Noto Sans',
          marginBottom: 5,
          marginLeft: 5,
        }}>
        Shortlisted
      </Text>
      <View style={[styles.containerUsers]}>
        {data?.map((Exp: any, index: any) =>
          seeAll ? <Users /> : index < 5 ? <Users /> : null,
        )}
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '100%',
              height: 2,
              backgroundColor: '#E8E8E8',

              marginTop: 10,
              // marginBottom: 5,
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => setSeeAll(!seeAll)}
          disabled={data?.length <= 5}
          style={{
            // paddingVertical: 6,
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

        {/* </View> */}
      </View>
    </View>
  );
};

export default ContainerUsers;
