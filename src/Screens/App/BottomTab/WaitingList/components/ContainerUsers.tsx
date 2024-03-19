import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {styles} from '../styles';

import Users from './Users';
import {appColors} from 'theme';
const data1 = [1, 2, 3, 4, 5, 6, 7, 8];

const ContainerUsers = ({setLoad,data}: {setLoad?: any,data:any}) => {
  const [seeAll, setSeeAll] = useState(false);
  return (
    <View style={{width:'100%'}}>
      <Text
        style={{
          fontSize: 20,
          color: '#000',
          fontWeight: '500',
          fontFamily: 'Noto Sans',
          marginBottom: 5,
          marginLeft: 5,
        }}>
        Waiting list
      </Text>
      <View style={[styles.containerUsers]}>
        {data?.length!=0?
        data?.map((Exp: any, index: any) =>
          seeAll ? <Users item={Exp}/> : index < 5 ? <Users item={Exp} /> : null,
        ):<View style={{width:'100%',height:480,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:24,color:'#000'}}>No People in this list</Text>
          </View>}
           {data?.length!=0?
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
        </View>:null}
        {data?.length!=0?
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
        </TouchableOpacity>:null}

        {/* </View> */}
      </View>
    </View>
  );
};

export default ContainerUsers;
