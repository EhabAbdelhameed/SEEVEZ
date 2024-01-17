import React from 'react';
import {
  SafeAreaView,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  Settings,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
// import { Back, ContactUs, LogOut, Privcy } from 'assets/svgs';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {useAppDispatch} from 'src/redux/store';
import AuthSlice, {selectUser} from 'src/redux/auth';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {ArrowDown, ImageDrawer, LogOut, Packages, Setting} from 'assets/Svgs';
import {RenderSvgIcon} from 'components/atoms/svg';
import {appColors} from 'theme/appColors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height} = Dimensions.get('window');

const CustomSidebarMenu = (props: any) => {
  const dispatch = useAppDispatch();
  const LogOutFun = () => {
    dispatch(AuthSlice.chnageisAuth(false));
    AsyncStorage.setItem('USER_TOKEN', '');
  };
  const navigation = useNavigation<any>();
  //   const dispatch = useAppDispatch();
    const USER = useSelector(selectUser);
    console.log(USER.name)
  return (
    <SafeAreaView style={styles.Container}>
      <DrawerContentScrollView {...props}>
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          colors={['#EDBC33', '#1D5EDD', '#00CEC8']}
          style={{
            width: '100%',
            height: 100,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            marginTop: -10,
          }}></LinearGradient>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <ImageDrawer
            width={96}
            height={96}
            style={{position: 'absolute', top: -20}}
          />
          <View style={{marginTop: 75, flexDirection: 'row', columnGap: 5}}>
            <Text
              style={{
                fontSize: 22,
                color: '#000',
                fontWeight: '600',
                fontFamily: 'Noto Sans',
              }}>
             {USER.name}
            </Text>
            <RenderSvgIcon
              icon="RIGHTACCOUNT"
              width={20}
              height={20}
              color={appColors.white}
              style={{marginTop: 5}}
            />
          </View>
          <Text
            style={{fontSize: 16, fontWeight: '400', fontFamily: 'Noto Sans'}}>
            Ui Ux designer at O-Project
          </Text>
          <View style={{flexDirection: 'row', marginTop: 20, columnGap: 10}}>
            <View style={styles.subContainer}>
              <Text style={styles.subText}>Premium</Text>
            </View>
            <View style={styles.statuesContainer}>
              <Text style={styles.statuesText}>Online</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileScreen')}
            style={{
              width: '80%',
              height: 50,
              backgroundColor: appColors.primary,
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
              backgroundColor: appColors.bg,
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
                color: appColors.primary,
              }}>
              Switch profile
            </Text>
            <ArrowDown />
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>

      <View style={{position: 'absolute', bottom: 10, marginLeft: 20}}>
        <TouchableOpacity
          style={{flexDirection: 'row', columnGap: 10, marginBottom: 15}}>
          <Packages />
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Noto Sans',
              fontWeight: '500',
              color: '#0C275D',
            }}>
            Packages
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row', columnGap: 10, marginBottom: 15}}>
          <Setting />
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Noto Sans',
              fontWeight: '500',
              color: '#0C275D',
            }}>
            Settings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={LogOutFun}
          style={{flexDirection: 'row', columnGap: 10, marginBottom: 15}}>
          <LogOut />
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Noto Sans',
              fontWeight: '500',
              color: '#0C275D',
            }}>
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomSidebarMenu;
