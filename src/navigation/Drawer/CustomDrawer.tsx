import React from 'react';
import {
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  Settings,
  Image,
  Platform,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
// import { Back, ContactUs, LogOut, Privcy } from 'assets/svgs';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {useAppDispatch} from 'src/redux/store';
import AuthSlice, {selectUser} from 'src/redux/auth';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {
  AVATAR,
  ArrowDown,
  ImageDrawer,
  LogOut,
  Packages,
  Setting,
} from 'assets/Svgs';
import {RenderSvgIcon} from 'components/atoms/svg';
// import {appColors} from 'theme/appColors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppThunks from 'src/redux/app/thunks';
import {SafeAreaView} from 'react-native-safe-area-context';

const {height} = Dimensions.get('window');

const CustomSidebarMenu = (props: any) => {
  const dispatch = useAppDispatch();
  const LogOutFun = () => {
    dispatch(AuthSlice.chnageisAuth(false));
    AsyncStorage.setItem('USER_TOKEN', '');
    AsyncStorage.setItem('USER_ACCESS_TOKEN', '');

    dispatch(AuthSlice.changeCurentData([]));
  };
  const navigation = useNavigation<any>();
  //   const dispatch = useAppDispatch();
  const USER = useSelector(selectUser);

  return (
    <SafeAreaView edges={['']} style={styles.Container}>
      <DrawerContentScrollView {...props}>
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          colors={['#EDBC33', '#1D5EDD', '#00CEC8']}
          style={{
            width: '100%',
            height: 120,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            marginTop: Platform.OS == 'ios' ? -30 : -10,
            // position: 'absolute',
            // top: 0,
          }}></LinearGradient>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: Platform.OS == 'ios' ? -50 : -50,
          }}>
          {USER?.avatar == null ? (
            <View
              style={{
                width: 96,
                height: 96,
                borderRadius: 96,
                // borderWidth: 1,
                // borderColor: '#DDD',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#E8EFFC',
              }}>
              <AVATAR height={48} width={48} />
            </View>
          ) : (
            <Image
              source={{uri: USER?.avatar}}
              style={{width: 96, height: 96, borderRadius: 96}}
              resizeMode="cover"
            />
          )}

          <View style={{marginTop: 10, flexDirection: 'row', columnGap: 5}}>
            <Text
              style={{
                fontSize: 22,
                color: '#000',
                fontWeight: '600',
                fontFamily: 'Noto Sans',
              }}>
              {USER?.name}
            </Text>
            <RenderSvgIcon
              icon="RIGHTACCOUNT"
              width={20}
              height={20}
              color={'#FFF'}
              style={{marginTop: 5}}
            />
          </View>
          {USER?.job_title == null ? null : (
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'Noto Sans',
              }}>
              {USER?.job_title}
            </Text>
          )}
          <View style={{flexDirection: 'row', marginTop: 20, columnGap: 10}}>
            <View style={styles.subContainer}>
              <Text style={styles.subText}>Premium</Text>
            </View>
            <View style={styles.statuesContainer}>
              <Text style={styles.statuesText}>Online</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              USER?.user_data?.user_type == 'company'||USER?.user_data?.user_type == 'company_admin'
                ? navigation.navigate('ProfileCompanyScreen')
                : navigation.navigate('ProfileScreen')
            }
            style={{
              width: '80%',
              height: 50,
              backgroundColor: '#1D5EDD',
              marginTop: 20,
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{fontFamily: 'Noto Sans', fontSize: 18, color: '#FFF'}}>
              View profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '80%',
              height: 50,
              backgroundColor: '#E8EFFC',
              marginTop: 20,
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              columnGap: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Noto Sans',
                fontSize: 18,
                color: '#1D5EDD',
              }}>
              Switch profile
            </Text>
            <ArrowDown />
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>

      <View style={{position: 'absolute', bottom: 10}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            columnGap: 10,
            marginBottom: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Packages width={30} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Noto Sans',
              fontWeight: '500',
              color: '#0C275D',
              width:'50%'
            }}>
            Packages
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            columnGap: 10,
            marginBottom: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Setting width={30} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Noto Sans',
              fontWeight: '500',
              color: '#0C275D',
              width:'50%'
            }}>
            Settings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={LogOutFun}
          style={{
            flexDirection: 'row',
            columnGap: 10,
            marginBottom: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LogOut width={30} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Noto Sans',
              fontWeight: '500',
              color: '#0C275D',
              width:'50%'
            }}>
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomSidebarMenu;
