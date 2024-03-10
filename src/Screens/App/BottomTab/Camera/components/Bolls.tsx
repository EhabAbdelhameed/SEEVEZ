import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {RenderSvgIcon} from 'components/atoms/svg';
import {useSelector} from 'react-redux';
import {selectAccessToken, selectPhotoData} from 'src/redux/app';
import AuthSlice, {selectUser} from 'src/redux/auth';
import AppThunks from 'src/redux/app/thunks';
import {useAppDispatch} from 'src/redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Boll = (data: any) => {
  const dispatch = useAppDispatch();
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null,
  );
  const [disableVoted, setDisableVoted] = useState(false);
  const [count, setcount] = useState(0);

  
  const handleAnswerSelection = (index: number,pers:any) => {
    const formdata = new FormData();
    formdata.append('pollId', data?.data?.pollId);

    formdata.append('answerIds', data?.data?.answers[index]?.id);
    dispatch(AppThunks.doVotePoll(formdata)).then((response: any) => {
      setSelectedAnswerIndex(index);
      AsyncStorage.setItem('selectedAnswerIndex', JSON.stringify(index));
      AsyncStorage.setItem('count', JSON.stringify(pers + 1));
    });
  };
  const loadStoredIndex = async () => {
    try {
      const storedIndex = await AsyncStorage.getItem('selectedAnswerIndex');
      const storedCount = await AsyncStorage.getItem('count');
      if (storedIndex !== null) {
        setSelectedAnswerIndex(JSON.parse(storedIndex));
        setDisableVoted(true)
      }
      if (storedCount !== null) {
        setcount(JSON.parse(storedCount));
        setDisableVoted(true)
      }
    } catch (error) {
      console.error('Error loading stored index:', error);
    }
  };
  React.useEffect(() => {
    loadStoredIndex();
    for (let i = 0; i < data?.data?.answers?.length; i++) {
      if (data?.data?.answers[i]?.isVotedByUser == true) {
        setDisableVoted(true);
        AsyncStorage.setItem('selectedAnswerIndex', '');
        AsyncStorage.setItem('count', '');
        setSelectedAnswerIndex(null)
        setcount(0)
      }
    }
  }, [selectedAnswerIndex]);

  const Item = ({
    pers,
    name,
    color,
    index,
    selected,
  }: {
    pers: number;
    name: string;
    color: string;
    index: number;
    selected: boolean;
  }) => {
    return (
      <>
        <TouchableOpacity
          style={{zIndex: 100}}
          disabled={disableVoted}
          onPress={() => handleAnswerSelection(index,pers)}>
          <View style={{marginTop: 5}}>
            <Text style={styles.text13}>{name}</Text>
            <View style={[styles.rowItemSlide, {columnGap: 5}]}>
              <Text style={[styles.text12, {width: '14%'}]}>{pers}%</Text>
              <View style={{width: '72%'}}>
                <View
                  style={[
                    styles.slider,
                    {
                      backgroundColor: color,
                      opacity: 0.4,
                    },
                  ]}
                />
                <View
                  style={[
                    styles.slider,
                    {
                      backgroundColor: color,
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
                      left: `${pers - 9}%`,
                      borderColor: color,
                      backgroundColor: color,
                      width: 15,
                      height: 15,
                      bottom: -5,
                    },
                  ]}>
                  <RenderSvgIcon icon="RIGHTSLIDER" width={10} height={10} />
                </View>
              </View>
              <View style={[styles.circle11, {marginLeft: 5}]}>
                {selected ? <View style={styles.filledInnerCircle} /> : null}
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View
      style={[
        styles.bollsContainer,
        {width: '65%', left: -20, paddingHorizontal: 10,zIndex:3},
      ]}>
      <Text style={styles.text11}>{data?.data?.question}</Text>
      {data?.data?.answers?.map((Exp: any, index: any) => (
        <Item
          pers={Exp?.isVotedByUser==false&&selectedAnswerIndex==index?count:Exp?.voteCount}
          name={Exp?.data}
          color={
            index == 0
              ? 'rgba(0, 206, 200, 1)'
              : index == 1
              ? '#1D5EDD'
              : '#E8AB00'
          }
          index={index}
          selected={
            Exp?.isVotedByUser == false
              ? selectedAnswerIndex === index
              : Exp?.isVotedByUser
          }
        />
      ))}
    </View>
  );
};

export default Boll;
