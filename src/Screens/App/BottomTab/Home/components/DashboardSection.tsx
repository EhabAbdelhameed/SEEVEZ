import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AvatarIcon from '../../../../../Components/molecules/Avatar';
import {dummyAvatar} from '../../../../../Dummy';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {AVATAR, LayerDashboard} from '../../../../../assets/Svgs';
import {appSizes} from '../../../../../theme/appSizes';
import {appColors} from '../../../../../theme/appColors';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/redux/store';
import { selectUser } from 'src/redux/auth';
import { withDecay } from 'react-native-reanimated';
import { selectLang } from 'src/redux/lang';
import { useTranslation } from 'react-i18next';

const DashboardSection = () => {
    const dispatch = useAppDispatch();
  const CurrentUserData = useSelector(selectUser);
  const lang = useSelector(selectLang);
   const {t, i18n} = useTranslation();
  return (
    <View style={styles.containerDashboard}>
      <View
        style={[
          styles.rowContainer,
          {width: '100%', justifyContent: 'space-between'},
        ]}>
        <View style={styles.rowContainer}>
        {CurrentUserData?.avatar==null?
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              // borderWidth: 1,
              // borderColor: '#DDD',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#E8EFFC',
            }}>
            <AVATAR height={32} width={32} />
          </View>:
            <Image
            source={{uri:CurrentUserData?.avatar}}
           style={{width:40,height:40,borderRadius:40,resizeMode:'cover'}}
           
        />}
          <Text
            style={[
              styles.text1,
              {
                marginBottom: 0,
              },   
            ]}>
            {t("totalEngagement")}
          </Text>
        </View>
        <RenderSvgIcon icon="LAYER" />
      </View>
      <View
        style={[
          styles.rowContainer,
          {
            width: '100%',
            justifyContent: 'space-between',
            marginTop: 15,
          },
        ]}>
        <View style={styles.textSection}>
          <Text
            style={[
              styles.text1,
              {
                fontSize: appSizes.font_xxl,
              },
            ]}>
            10%
          </Text>
          <Text style={styles.text3}>{t("Engagement rate")}</Text>
        </View>
        <View style={styles.textSection}>
          <Text
            style={[
              styles.text1,
              {
                fontSize: appSizes.font_xxl,
              },
            ]}>
            100
          </Text>
          <Text style={styles.text3}>{t("Post counts")}</Text>
        </View>
        <View style={styles.textSection}>
          <LayerDashboard width={95} />
        </View>
      </View>
      <View
        style={[
          styles.rowContainer,
          {
            width: '100%',
            justifyContent: 'space-between',
            marginTop: 20,
          },
        ]}>
        <View style={styles.textIconSection}>
          <RenderSvgIcon icon="HEART" color={appColors.primary} />
          <View style={styles.textSection2}>
            <Text
              style={[
                styles.text1,
                {
                  fontSize: appSizes.font_xxl - 1,
                },
              ]}>
              100
            </Text>
            <Text style={styles.text2}>{t("Likes")}</Text>
          </View>
        </View>
        <View style={styles.textIconSection}>
          <RenderSvgIcon icon="REPOST" color={appColors.green2} />
          <View style={styles.textSection2}>
            <Text
              style={[
                styles.text1,
                {
                  fontSize: appSizes.font_xxl - 1,
                },
              ]}>
              250
            </Text>
            <Text style={styles.text2}>{t("Repost")}</Text>
          </View>
        </View>
        <View style={styles.textIconSection}>
          <RenderSvgIcon icon="SHARE" color={appColors.Orange} />
          <View style={styles.textSection2}>
            <Text
              style={[
                styles.text1,
                {
                  fontSize: appSizes.font_xxl - 1,
                },
              ]}>
              10
            </Text>
            <Text style={styles.text2}>{t("Share")}</Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.rowContainer,
          {
            width: '100%',
            justifyContent: 'space-between',
            marginTop: 20,
            marginBottom: 10,
          },
        ]}>
        <View style={[styles.textIconSection2]}>
          <View style={styles.textSection2}>
            <Text
              style={[
                styles.text1,
                {
                  fontSize: appSizes.font_xxl - 1,
                },
              ]}>
              1200
            </Text>
            <Text style={styles.text2}>{t("Followers")}</Text>
          </View>
          <View style={styles.dot} />
        </View>
        <View style={[styles.textIconSection2]}>
          <View style={styles.textSection2}>
            <Text
              style={[
                styles.text1,
                {
                  fontSize: appSizes.font_xxl - 1,
                },
              ]}>
              200
            </Text>
            <Text style={styles.text2}>{t("Jobs applied")}</Text>
          </View>
          <View
            style={[
              styles.dot,
              {
                backgroundColor: appColors.green2,
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default DashboardSection;
