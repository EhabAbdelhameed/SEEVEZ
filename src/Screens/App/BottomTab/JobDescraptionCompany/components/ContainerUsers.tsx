import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {styles} from '../styles';
import UserSection from './User';
import FooterSectionUsers from './FooterSectionUsers';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
import JobAnaltics from './JobAnaltics';
import Users from './Users';
import {appColors} from 'theme';
const data = [1, 2, 3, 4, 5, 6];

const ContainerUsers = ({setLoad}: {setLoad?: any}) => {
  const [seeAll, setSeeAll] = useState(false);
  return (
    <View>
      <JobAnaltics />

      <View style={[styles.containerUsers]}>
        <View
          style={[styles.container2Users, {paddingBottom: 20, width: '100%'}]}>
          <View style={{paddingHorizontal: 20, paddingVertical: 8}}>
            <Text
              style={{
                fontSize: 16,
                color: '#1C1C1C',
                fontWeight: '700',
                fontFamily: 'Noto Sans',
              }}>
              Employee applied for this job
            </Text>
          </View>
          {data?.map((Exp: any, index: any) =>
            seeAll ? <Users /> : index < 3 ? <Users /> : null,
          )}
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '90%',
                height: 2,
                backgroundColor: '#E8E8E8',

                marginTop: 10,
                marginBottom: 5,
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => setSeeAll(!seeAll)}
            disabled={data?.length <= 3}
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

          {/* </View> */}
        </View>
      </View>
      <View style={styles.containerUsers}>
        <View style={styles.container2Users}>
          <UserSection />
        </View>
      </View>
    </View>
  );
};

export default ContainerUsers;
