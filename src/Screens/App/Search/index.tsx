import { View, Text, TextInput, FlatList, Image, TouchableOpacity, Modal, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './components/Header'
import { SEARCH } from 'components/atoms/svgs/Svgs'
import { RenderSvgIcon } from 'components/atoms/svg'
import { appColors } from 'theme'
import { useAppDispatch, useAppSelector } from 'src/redux/store'
import AppThunks from 'src/redux/app/thunks'
import { ActivityIndicator } from 'react-native'
import AppSlice, { selectEducation, selectIndstruy, selectJobtype, selectSearchingList, selectYears } from 'src/redux/app'
import { ScreenWidth } from 'react-native-elements/dist/helpers'
import { AVATAR, ArrowDown, Close, Filter } from 'assets/Svgs'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import ReactNativeModal from 'react-native-modal'
import DeviceInfo from 'react-native-device-info'
import Button from 'components/molecules/Button'
import IndustriesList from './components/IndustriesList'
import ExperianceList from './components/ExperianceList'
import JobTypeList from './components/JobTypeList'
import EducationList from './components/EducationList'

const SearchScreen = () => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation<any>()
    const inputRef = React.useRef(null)
    const [FilterVisable, setFilterVisable] = React.useState(false)
    const [Filtered, setFiltered] = React.useState(false)
    const [search, setSearch] = React.useState('')

    const [industryVisable, setIndustryVaisable] = React.useState(false)
    const [industry, setIndustry] = React.useState<any>(null)

    const [experianceVisable, setExperianceVaisable] = React.useState(false)
    const [experiance, setExperiance] = React.useState<any>(null)

    const [jobTypeVisable, setJobTypeVaisable] = React.useState(false)
    const [jobType, setJobTypee] = React.useState<any>(null)

    const [educationVisable, setEducationVisable] = React.useState(false)
    const [education, setEducation] = React.useState<any>(null)

    const [Load, setLoad] = React.useState(false)
    const searchList = useAppSelector(selectSearchingList)
    const Indstries = useAppSelector(selectIndstruy)
    const Jobtype = useAppSelector(selectJobtype)
    const Years = useAppSelector(selectYears)
    const Education = useAppSelector(selectEducation)


    React.useEffect(() => {
        const RenderFunction = navigation.addListener('focus', () => {
            dispatch(AppSlice.changeSearch([]))
            dispatch(AppThunks.GetIndustry())
            dispatch(AppThunks.GetEducationLevel())
            dispatch(AppThunks.GetYearsOfExperience())
            dispatch(AppThunks.GetJobType())
            setSearch('')
        })
        return RenderFunction
    }, [navigation])

    React.useEffect(() => {
        const timer = setTimeout(() => {
            search != '' && (
                setLoad(true),
                dispatch(AppThunks?.doSearch(`filter[global]=${search}`)).then(() => {
                    setLoad(false)
                }))
        }, 500)
        return () => clearTimeout(timer)
    }, [search])
    const hasNotch = DeviceInfo.hasNotch()
    return (
        <>
            <SafeAreaView edges={['top']} style={styles.Container}>
                <Header />
                <View style={styles.SearchContainer}>
                    <RenderSvgIcon icon='SEARCH' width={15} height={15} color={appColors.grey} />
                    <TextInput
                        ref={inputRef}
                        value={search}
                        onChangeText={(val: any) => setSearch(val)}
                        placeholder='Write here'
                        style={{ width: '83%', paddingHorizontal: 10, color: appColors.black }}
                    />
                    <TouchableOpacity onPress={() => {
                        !Filtered ?
                            setFilterVisable(true)
                            :
                            (
                                dispatch(AppSlice.changeSearch([])),
                                setIndustry(null),
                                setEducation(null),
                                setJobTypee(null),
                                setExperiance(null),
                                setFiltered(false)
                            )
                    }} activeOpacity={.8} style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: appColors.primary,
                        height: 35,
                        width: 35,
                        borderRadius: 40,
                        position: 'absolute',
                        right: 10,
                        zIndex: 100
                    }}>
                        {!Filtered ?
                            <Filter />
                            :
                            <Close height={22} width={22} />
                        }
                    </TouchableOpacity>
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
                                    flexDirection: 'row-reverse',
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
                                                marginLeft: 15
                                            }}>
                                            <AVATAR height={50} width={40} />
                                        </View>
                                    ) : (
                                        <Image source={{ uri: item?.avatar }} style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 25,
                                            marginLeft: 15
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
            </SafeAreaView>
            <ReactNativeModal style={{
                justifyContent: 'flex-end'
            }} isVisible={FilterVisable}>
                <View style={{
                    height: '70%',
                    width: '100%',
                    backgroundColor: '#fff',
                    borderRadius: 20,
                    padding: 10
                }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <IndustriesList
                            industry={industry}
                            setIndustry={setIndustry}
                            setIndustryVaisable={setIndustryVaisable}
                            industryVisable={industryVisable}
                        />
                        <ExperianceList
                            industry={experiance}
                            setIndustry={setExperiance}
                            setIndustryVaisable={setExperianceVaisable}
                            industryVisable={experianceVisable}
                        />
                        <JobTypeList
                            industry={jobType}
                            setIndustry={setJobTypee}
                            setIndustryVaisable={setJobTypeVaisable}
                            industryVisable={jobTypeVisable}
                        />
                        <EducationList
                            industry={education}
                            setIndustry={setEducation}
                            setIndustryVaisable={setEducationVisable}
                            industryVisable={educationVisable}
                        />
                    </ScrollView>
                </View>

                <Button
                    loading={Load}
                    text='Filter'
                    style={{ marginTop: 30 }}
                    onPress={() => {
                        let str = ((jobType != null ? ('filter[jobTypes.name]=' + Jobtype[jobType]?.name) : '') + (experiance != null ? '&' : '') + (experiance != null ? ('filter[yearsOfExperiences.name]=' + Years[experiance]?.name) : '') + (education != null ? '&' : '') + (education != null ? ('filter[educationLevel.name]=' + Education[education]?.name) : '') + ((industry != null) ? '&' : '') + (industry != null ? ('filter[industries.name]=' + Indstries[industry]?.name) : ''))
                        setLoad(true)
                        setFiltered(true)
                        dispatch(AppThunks?.doSearch(str[0] == '&' ? str?.substring(1) : str)).then(() => {
                            setLoad(false)
                            setFilterVisable(false)
                        })
                    }}
                />
            </ReactNativeModal>
        </>

    )
}

export default SearchScreen