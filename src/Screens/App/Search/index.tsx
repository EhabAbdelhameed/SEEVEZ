import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './components/Header'
import { SEARCH } from 'components/atoms/svgs/Svgs'
import { RenderSvgIcon } from 'components/atoms/svg'
import { appColors } from 'theme'
import { useAppDispatch, useAppSelector } from 'src/redux/store'
import AppThunks from 'src/redux/app/thunks'
import { ActivityIndicator } from 'react-native'
import AppSlice, { selectSearchingList } from 'src/redux/app'
import { ScreenWidth } from 'react-native-elements/dist/helpers'
import { AVATAR } from 'assets/Svgs'
import { useNavigation } from '@react-navigation/native'

const SearchScreen = () => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation<any>()
    const inputRef = React.useRef(null)
    const [search, setSearch] = React.useState('')
    const [Load, setLoad] = React.useState(false)
    const searchList = useAppSelector(selectSearchingList)

    React.useEffect(() => {
        const RenderFunction = navigation.addListener('focus', () => {
            dispatch(AppSlice.changeSearch([]))
        })
        return RenderFunction
    }, [navigation])

    React.useEffect(() => {
        const timer = setTimeout(() => {
            search != '' && (
                setLoad(true),
                dispatch(AppThunks?.doSearch(search)).then(() => {
                    setLoad(false)
                }))
        }, 500)
        return () => clearTimeout(timer)
    }, [search])
    return (
        <SafeAreaView edges={['top']} style={{
            flex: 1,
            alignItems: 'center'
        }}>
            <Header />
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 55,
                width: '90%',
                borderWidth: 1,
                paddingHorizontal: 15,
                borderRadius: 15,
                borderColor: appColors.primary,
                marginTop: 25
            }}>
                <RenderSvgIcon icon='SEARCH' width={15} height={15} color={appColors.grey} />
                <TextInput
                    ref={inputRef}
                    value={search}
                    onChangeText={(val: any) => setSearch(val)}
                    placeholder='Write here'
                    style={{ width: '90%', paddingHorizontal: 10, color: appColors.black }}
                />
            </View>
            {Load ?
                <ActivityIndicator size={30} style={{ marginTop: 15 }} />
                :
                <FlatList
                    data={searchList}
                    style={{ marginTop: 20 }}
                    ItemSeparatorComponent={() => <View style={{ width: ScreenWidth * .9, alignSelf: 'center', height: 1, backgroundColor: appColors.transparentBlack10, marginVertical: 10 }} />}
                    contentContainerStyle={{ alignItems: 'center', width: ScreenWidth }}
                    renderItem={({ item }) => (
                        <>
                            <TouchableOpacity activeOpacity={.8} onPress={() => {
                                navigation.navigate('UserProfile', { id: item?.id });
                            }} style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                width: ScreenWidth,
                                justifyContent: 'flex-start',
                                paddingHorizontal: 25,
                            }}>
                                {item?.avatar == null ? (
                                    <View
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 50,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: appColors.bg,
                                            marginRight: 15
                                        }}>
                                        <AVATAR height={50} width={40} />
                                    </View>
                                ) : (
                                    <Image source={{ uri: item?.avatar }} style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 25,
                                        marginRight: 15
                                    }} />
                                )}
                                <View>
                                    <Text style={{
                                        fontSize: 16,
                                        color: appColors.dark,
                                        fontWeight: '500'
                                    }}>{item?.name}</Text>
                                    <Text style={{
                                        fontSize: 11,
                                        fontWeight: "400",
                                        color: appColors.dark,
                                        marginTop: 4
                                    }}>{item?.job_title}</Text>
                                </View>

                            </TouchableOpacity>
                        </>
                    )}
                />
            }
            {/* <Text style={{
                width: '90%',
                marginTop: 10,
                fontSize: 20,
                fontWeight: '400',
                marginBottom:20
            }}>Recent search</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '90%',
            }}>
                <Text>ahmed</Text>
                <Text>X</Text>
            </View> */}
        </SafeAreaView>
    )
}

export default SearchScreen