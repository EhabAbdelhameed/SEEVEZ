import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from 'src/redux/store';
import {useSelector} from 'react-redux';
import AuthSlice, {selectUser} from 'src/redux/auth';
import AppThunks from 'src/redux/app/thunks';
import {selectAccessToken, selectPolls} from 'src/redux/app';

const Polls = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const CurrentUserData = useSelector(selectUser);
  const [loader, setLoader] = React.useState(false);
  React.useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      setLoader(true);
      dispatch(AppThunks.GetMyReels(CurrentUserData?.user_data?.id)).then(
        (res: any) => {
          setLoader(false);
        },
      );
    });
    return RenderFunction;
  }, [navigation]);
  const polls = useSelector(selectPolls);
  const AccessToken = useSelector(selectAccessToken);
  React.useEffect(() => {
    AccessToken ? dispatch(AuthSlice.chnageisAuth(false)) : null;
  }, [AccessToken]);
  const Slider = ({pers, title}: {pers: number; title: string}) => {
    return (
      <>
        <View style={{marginTop: 4}}>
          <Text style={[styles.text2, {fontWeight: '700'}]}>{title}</Text>
          <View
            style={[
              styles.rowItemSlide,
              {width: '85%', columnGap: 5, marginTop: 3.5},
            ]}>
            <Text style={styles.text2}>{pers}%</Text>
            <View style={{width: '85%'}}>
              <View
                style={[
                  styles.slider,
                  {
                    opacity: 0.4,
                  },
                ]}
              />
              <View
                style={[
                  styles.slider,
                  {
                    // backgroundColor: color,
                    position: 'absolute',
                    left: 0,
                    width: `${pers}%`,
                  },
                ]}
              />
              <View
                style={[
                  styles.circleSlider,
                  {
                    left: `${pers - 1}%`,
                    bottom: -5,
                  },
                ]}>
                <RenderSvgIcon icon="RIGHTSLIDER" width={10} height={10} />
              </View>
            </View>
          </View>
        </View>
      </>
    );
  };
  return (
    <View
      style={[
        styles.PollsContainer,
        {
          justifyContent: polls[0]?.pollId == null ? 'center' : 'flex-start',
          alignItems: polls[0]?.pollId == null ? 'center' : 'flex-start',
        },
      ]}>
      {polls[0]?.pollId == null ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text1}>No Polls</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.text1}>{polls[0]?.question}</Text>
          <View>
            {polls[0]?.answers?.map((Exp: any, index: any) => (
              <Slider pers={Exp?.voteCount} title={Exp?.data} />
            ))}

            <View style={{height: 2}} />
          </View>
        </View>
      )}
    </View>
  );
};

export default Polls;
