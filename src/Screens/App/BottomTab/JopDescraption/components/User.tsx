import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles';
import {globalStyles} from '../../../../../globalStyle';
import {dummyAvatar} from '../../../../../Dummy';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {appColors} from '../../../../../theme/appColors';
import AvatarIcon from '../../../../../Components/molecules/Avatar';
import {useAppDispatch, useAppSelector} from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import {selectFollowingList} from 'src/redux/app';
import {useNavigation} from '@react-navigation/native';
import {AVATAR, SaveJob} from 'assets/Svgs';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
import {selectUser} from 'src/redux/auth';
import TopHeader from './TopHeader';
import HeaderAfter from './HeaderAfterMeet';
import JobDetails from './JobDetails';
import JobSkills from './skills';
import ReadMore from '@fawazahmed/react-native-read-more';
import {appSizes} from 'theme';
import Button from 'components/molecules/Button';

const UserSection = ({item, setLoad}: {item?: any; setLoad?: any}) => {
  const [count, setCount] = React.useState(0);
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<any>();
  const lang = useSelector(selectLang);
  const User = useSelector(selectUser);

  const {t, i18n} = useTranslation();

  const getdate = () => {
    const startDate: Date = new Date('2024-02-27T10:39:21.000000Z');
    const currentDate: Date = new Date();

    const timeDifferenceInMilliseconds: number =
      currentDate.getTime() - startDate.getTime();

    // Calculate total hours
    let totalHours: number = timeDifferenceInMilliseconds / (1000 * 60 * 60);
    let totalDays: number = totalHours / 24;
    let totalMonths: number = totalDays / 30;
    let totalYears: number = totalMonths / 12;
    if (totalHours < 24) {
      return parseInt(totalHours.toString()) + ' hours ago';
    }
    // Calculate total days
    if (totalHours >= 24 && totalDays < 30) {
      totalDays = totalHours / 24;
      if (totalDays < 2) {
        return parseInt(totalDays.toString()) + ' day ago';
      } else {
        return parseInt(totalDays.toString()) + ' days ago';
      }
    }

    // Calculate total months
    if (totalDays > 30 && totalMonths < 12) {
      totalMonths = totalDays / 30;

      if (totalMonths < 2) {
        return parseInt(totalMonths.toString()) + ' month ago';
      } else {
        return parseInt(totalMonths.toString()) + ' months ago';
      }
    }

    // Calculate total years
    if (totalMonths >= 12) {
      totalYears = totalMonths / 12;

      if (totalYears < 2) {
        return parseInt(totalYears.toString()) + ' year ago';
      } else {
        return parseInt(totalYears.toString()) + ' years ago';
      }
    }
  };

  // console.log("USERS",item?.avatarCustomUrl)
  return (
    <View style={{paddingHorizontal: 10}}>
      <TopHeader />
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          fontFamily: 'Noto Sans',
          color: '#000',
        }}>
        Meet our recruiter
      </Text>
      <HeaderAfter />
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          fontFamily: 'Noto Sans',
          color: '#000',
        }}>
        About the job
      </Text>
      <JobDetails />
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          fontFamily: 'Noto Sans',
          color: '#000',
        }}>
        Skills
      </Text>
      <JobSkills />
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          fontFamily: 'Noto Sans',
          color: '#000',
        }}>
        About the company
      </Text>
      <HeaderAfter />
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          fontFamily: 'Noto Sans',
          color: '#000',
          marginTop: -15,
        }}>
        About
      </Text>
      <ReadMore
        style={styles.PostText}
        animate={true}
        seeMoreStyle={{
          color: appColors.primary,
          textDecorationLine: 'underline',
        }}
        seeLessStyle={{
          color: appColors.primary,
          textDecorationLine: 'underline',
        }}
        seeLessText={t('Less')}
        seeMoreText={t('Learn more')}
        numberOfLines={3}>
        A problem isn't truly solved until it's solved for all. Googlers build
        products that help create opportunities for everyone, whether down the
        street or across the globe. Bring your insight, imagination and a
        healthy disregard for the impossible. Bring everything that makes you
        unique. Together, we can build
      </ReadMore>
      <View style={{height: appSizes.height * 0.04}} />
      <View style={{flexDirection: 'row', width: '100%',columnGap:10}}>
        <View style={{width:'80%'}}>
          <Button style={{height:62}} text={"Apply for job"} onPress={() => console.log('Job')} />
        </View>
        <View
          style={{
            backgroundColor: appColors.bg,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 15,
            paddingVertical:15,
            borderRadius:16,
            borderWidth:1,
            borderColor:appColors.primary
          }}>
          <SaveJob width={30} height={30} />
        </View>
      </View>
    </View>
  );
};

export default UserSection;