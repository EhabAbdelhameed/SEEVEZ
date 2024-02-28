import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { RenderSvgIcon } from 'components/atoms/svg'
import { useSelector } from 'react-redux'
import { selectAccessToken, selectPhotoData } from 'src/redux/app'
import AuthSlice, { selectUser } from 'src/redux/auth'
import AppThunks from 'src/redux/app/thunks'
import { useAppDispatch } from 'src/redux/store'


const Boll = (data: any) => {
    const dispatch = useAppDispatch()
    const CurrentUserData = useSelector(selectUser);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>(-1);
    const handleAnswerSelection = (index: number) => {

        const formdata = new FormData();
        formdata.append('pollId', data?.data?.pollId);

        formdata.append('answerIds', data?.data?.answers[index]?.id);
        dispatch(AppThunks.doVotePoll(formdata)).then((response: any) => {
            dispatch(AppThunks.GetMyReels(CurrentUserData?.user_data?.id));
        });
    }
    const Item = ({ pers, name, color, index, selected }: { pers: number; name: string; color: string; index: number; selected: boolean }) => {
        return (
            <>
                <TouchableOpacity onPress={() => handleAnswerSelection(index)}>
                    <View style={{ marginTop: 5 }}>
                        <Text style={styles.text13}>{name}</Text>
                        <View style={[styles.rowItemSlide, { columnGap: 5 }]}>

                            <Text style={[styles.text12, { width: '14%' }]}>{pers}%</Text>

                            <View style={{ width: "72%" }}>
                                <View style={[styles.slider, {
                                    backgroundColor: color,
                                    opacity: .4
                                }]} />
                                <View style={[styles.slider, {
                                    backgroundColor: color,
                                    position: "absolute",
                                    left: 0,
                                    width: `${pers}%`
                                }]} />
                                <View style={[styles.circleSlider, {
                                    left: `${pers - 9}%`,
                                    borderColor: color,
                                    backgroundColor: color,
                                    width: 15,
                                    height: 15,

                                    bottom: -5
                                }]} >
                                    <RenderSvgIcon icon='RIGHTSLIDER' width={10} height={10} />
                                </View>
                            </View>
                            <View style={[styles.circle11, { marginLeft: 5 }]}>
                                {selected ? <View style={styles.filledInnerCircle} /> : null}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </>
        )
    }
   
    const AccessToken = useSelector(selectAccessToken);
    React.useEffect(() => {
        AccessToken ? dispatch(AuthSlice.chnageisAuth(false)) : null;
    }, [AccessToken]);
    return (
        <View style={[styles.bollsContainer, { width: '65%', left: -20, paddingHorizontal: 10 }]}>
            <Text style={styles.text11}>{data?.data?.question}</Text>
            {/* <Text style={styles.text12}>Lorem ipsum dolor sit amet consectetur.</Text> */}
            {data?.data?.answers?.map((Exp: any, index: any) => (
                <Item
                    pers={Exp?.voteCount}
                    name={Exp?.data}
                    color={index == 0 ? "rgba(0, 206, 200, 1)" : index == 1 ? '#1D5EDD' : '#E8AB00'}
                    index={index}
                    selected={Exp?.isVotedByUser}
                />))}

        </View>
    )
}

export default Boll