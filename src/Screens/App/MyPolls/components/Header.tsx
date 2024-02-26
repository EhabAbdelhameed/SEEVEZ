import {View, Text} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../../globalStyle';
import {RenderSvgIcon} from '../../../../Components/atoms/svg';
import {appColors} from '../../../../theme/appColors';

import {styles} from '../style';
import AvatarIcon from '../../../../Components/molecules/Avatar';
import {useAppSelector} from 'src/redux/store';
import {selectUser} from 'src/redux/auth';
import {AVATAR, ThreeDots, Time} from 'assets/Svgs';
import { selectLang } from 'src/redux/lang';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const PollHeader = () => {
  const User = useAppSelector(selectUser);
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  return (
    <View style={{backgroundColor: '#fff'}}>
      <View style={[globalStyles.leftHeaderContainer,{width:'100%'}]}>
        <View
          style={{
            width: 64,
            height: 64,
            borderRadius: 64,
            // borderWidth: 1,
            // borderColor: '#DDD',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: appColors.bg,
          }}>
          {User?.avatar == null ? (
            <AVATAR height={48} width={48} />
          ) : (
            <AvatarIcon
              imgUrl={User?.avatar}
              style={{width: 64, height: 64, borderRadius: 64}}
            />
          )}
        </View>
               <View>
               <View
            style={{flexDirection:'row',columnGap:10}}>
            <View style={{}}>
              <Text
                style={{
                  fontFamily: 'Noto Sans',
                  fontSize: 14,
                  fontWeight: '700',
                  color: '#000',
                }}>
                {User?.name}
              </Text>
            </View>
            <RenderSvgIcon icon="RIGHTACCOUNT" width={15} />
            <Text
              style={{
                fontFamily: 'Noto Sans',
                fontSize: 12,
                fontWeight: '400',
                color: '#1C1C1C',
              }}>
              -2 nd
            </Text>
          </View>
          <View style={{flexDirection:'row',columnGap:35}}>
            <Text
              style={{
                fontFamily: 'Noto Sans',
                fontSize: 10,
                fontWeight: '400',
                color: '#1C1C1C',
              }}>
              {User?.job_title}{' '}
            </Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                // width: '30%',
              }}>
              <Time />
              <Text
                style={{
                  fontFamily: 'Noto Sans',
                  fontSize: 10,
                  fontWeight: '400',
                  color: '#1C1C1C',
                }}>
                38 min
              </Text>
            </View>
            <View >
            <ThreeDots/>
          </View>
          </View>
          <View style={{flexDirection: 'row', columnGap: 15}}>
            <View style={styles.containerType}>
              <Text style={styles.text3}>{t("premium")}</Text>
            </View>
          </View>
         </View>
        
        
        
        <View>
          
          
          
        </View>
      </View>
    </View>
  );
};

export default PollHeader;
