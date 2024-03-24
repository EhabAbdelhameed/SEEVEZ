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

import {DropDownIcon, LogoWithName} from 'assets/Svgs';

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

            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: appColors.black,
                fontFamily: 'Noto Sans',
              }}>
              My schedule
            </Text>
            {/* <LogoWithName /> */}
          </View>
        </View>
      </View>
      <View style={globalStyles.rightHeaderContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <RenderSvgIcon icon="SEARCH" color={appColors.primary} />
        </TouchableOpacity>
        {/* <RenderSvgIcon icon="COMMENT" color={appColors.primary} /> */}

        <RenderSvgIcon icon="NOTIFICATION" color={appColors.primary} />
      </View>
    </View>
  );
};

export default Header;
