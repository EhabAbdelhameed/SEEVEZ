import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../../../globalStyle';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {appColors} from '../../../../../theme/appColors';
import {dummyAvatar} from '../../../../../Dummy';
import {styles} from '../styles';
import AvatarIcon from '../../../../../Components/molecules/Avatar';
import {DropDownIcon, LogoWithName} from 'assets/Svgs';
import {useAppDispatch} from 'src/redux/store';
import AuthSlice from 'src/redux/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
const Header = (props: any) => {
  const navigation = useNavigation<any>();

  return (
    <View style={globalStyles.header}>
      <View style={globalStyles.leftHeaderContainer}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              columnGap: 15,
            }}>
            {/* <View
              style={{
                maxWidth: '85%',
              }}></View> */}
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <DropDownIcon />
            </TouchableOpacity>

            <Image
              source={require('../../../../../assets/images/seevezlogo.png')}
              style={{width: 100, height: 30}}
            />
            {/* <LogoWithName /> */}
          </View>
        </View>
      </View>
      <View style={globalStyles.rightHeaderContainer}>
        <RenderSvgIcon icon="SEARCH" color={appColors.primary} />
        <RenderSvgIcon icon="COMMENT" color={appColors.primary} />

        <RenderSvgIcon icon="NOTIFICATION" color={appColors.primary} />
      </View>
    </View>
  );
};

export default Header;
