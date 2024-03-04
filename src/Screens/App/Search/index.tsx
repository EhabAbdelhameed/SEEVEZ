import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from './components/Header';
import {SEARCH} from 'components/atoms/svgs/Svgs';
import {RenderSvgIcon} from 'components/atoms/svg';
import {appColors} from 'theme';
import {useAppDispatch, useAppSelector} from 'src/redux/store';
import AppThunks from 'src/redux/app/thunks';
import {ActivityIndicator} from 'react-native';
import AppSlice, {
  selectEducation,
  selectFollowingList,
  selectIndstruy,
  selectJobtype,
  selectSearchingJobList,
  selectSearchingList,
  selectYears,
} from 'src/redux/app';
import {ScreenWidth} from 'react-native-elements/dist/helpers';
import {AVATAR, ArrowDown, Close, Filter, PlaceHolderSearch} from 'assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import ReactNativeModal from 'react-native-modal';
import DeviceInfo from 'react-native-device-info';
import Button from 'components/molecules/Button';
import IndustriesList from './components/IndustriesList';
import ExperianceList from './components/ExperianceList';
import JobTypeList from './components/JobTypeList';
import EducationList from './components/EducationList';
import {t} from 'i18next';
import User from './components/User';
import UserJobs from './components/UserJob';

const SearchScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const inputRef = React.useRef(null);
  const [FilterVisable, setFilterVisable] = React.useState(false);
  const [Filtered, setFiltered] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const [industryVisable, setIndustryVaisable] = React.useState(false);
  const [industry, setIndustry] = React.useState<any>([]);

  const [experianceVisable, setExperianceVaisable] = React.useState(false);
  const [experiance, setExperiance] = React.useState<any>([]);

  const [jobTypeVisable, setJobTypeVaisable] = React.useState(false);
  const [jobType, setJobTypee] = React.useState<any>([]);

  const [educationVisable, setEducationVisable] = React.useState(false);
  const [education, setEducation] = React.useState<any>([]);

  const [Load, setLoad] = React.useState(false);
  const searchList = useAppSelector(selectSearchingList);
  const searchJobList = useAppSelector(selectSearchingJobList);


  React.useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      dispatch(AppSlice.changeSearch([]));
      dispatch(AppSlice.changeJobSearch([]));
      dispatch(AppThunks.GetIndustry());
      dispatch(AppThunks.GetEducationLevel());
      dispatch(AppThunks.GetYearsOfExperience());
      dispatch(AppThunks.GetJobType());
      setSearch('');
    });
    return RenderFunction;
  }, [navigation]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      search != '' &&
        (setLoad(true),
        dispatch(AppThunks?.doSearch(`filter[global]=${search}`)).then(() => {
          setLoad(false);
        }));
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  const hasNotch = DeviceInfo.hasNotch();
  return (
    <>
      <SafeAreaView edges={['top']} style={styles.Container}>
        <Header />
        <View style={styles.SearchContainer}>
          <RenderSvgIcon
            icon="SEARCH"
            width={15}
            height={15}
            color={appColors.grey}
          />
          <TextInput
            ref={inputRef}
            value={search}
            onChangeText={(val: any) => setSearch(val)}
            placeholder="Write here"
            style={{
              width: '83%',
              paddingHorizontal: 10,
              color: appColors.black,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              !Filtered
                ? setFilterVisable(true)
                : (dispatch(AppSlice.changeSearch([])),
                  setIndustry([]),
                  setEducation([]),
                  setJobTypee([]),
                  setExperiance([]),
                  setFiltered(false));
            }}
            activeOpacity={0.8}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: appColors.primary,
              height: 35,
              width: 35,
              borderRadius: 40,
              position: 'absolute',
              right: 10,
              zIndex: 100,
            }}>
            {!Filtered ? <Filter /> : <Close height={22} width={22} />}
          </TouchableOpacity>
        </View>
        {searchList?.length == 0 && searchJobList?.length == 0&&!Load ? (
            <View style={{justifyContent:'center',alignItems:'center',marginTop:100}}>
          <PlaceHolderSearch />
          <Text style={{fontSize:24,fontWeight:'400',color:'#1C1C1C'}}>No result</Text>
          </View>
        ) : null}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: 10,
            justifyContent: 'flex-start',
            width: '100%',
            paddingHorizontal: 15,
          }}>
          {industry
            ?.concat(education)
            ?.concat(experiance)
            ?.concat(jobType)
            ?.map((item: any) => (
              <>
                <View
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderWidth: 1,
                    borderColor: appColors.primary,
                    borderRadius: 20,
                    marginLeft: 5,
                    marginBottom: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: appColors.primary,
                      fontWeight: '500',
                    }}>
                    {item}
                  </Text>
                </View>
              </>
            ))}
        </View>

        {Load ? (
          <ActivityIndicator size={30} style={{marginTop: 15}} />
        ) : (
          <ScrollView>
            {searchList?.length != 0 ? (
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    marginLeft: 20,
                    fontWeight: '700',
                    color: '#000',
                    marginTop: 10,
                  }}>
                  Users
                </Text>
                <FlatList
                  scrollEnabled={false}
                  data={searchList}
                  style={{marginTop: 5}}
                  ItemSeparatorComponent={() => (
                    <View
                      style={{
                        width: ScreenWidth * 0.9,
                        alignSelf: 'center',
                        height: 1,
                        backgroundColor: appColors.transparentBlack10,
                        marginVertical: 10,
                      }}
                    />
                  )}
                  contentContainerStyle={{
                    alignItems: 'center',
                    width: ScreenWidth,
                  }}
                  renderItem={({item}) => <User item={item} />}
                />
              </View>
            ) : null}
            {searchJobList?.length != 0 ? (
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    marginLeft: 20,
                    fontWeight: '700',
                    color: '#000',
                    marginTop: 10,
                  }}>
                  Jobs
                </Text>
                <FlatList
                  data={searchJobList}
                  scrollEnabled={false}
                  style={{marginTop: 5}}
                  ItemSeparatorComponent={() => (
                    <View
                      style={{
                        width: ScreenWidth * 0.9,
                        alignSelf: 'center',
                        height: 1,
                        backgroundColor: appColors.transparentBlack10,
                        marginVertical: 10,
                      }}
                    />
                  )}
                  contentContainerStyle={{
                    alignItems: 'center',
                    width: ScreenWidth,
                  }}
                  renderItem={({item}) => <UserJobs item={item} />}
                />
              </View>
            ) : null}
          </ScrollView>
        )}
      
      </SafeAreaView>
      <ReactNativeModal
        onBackdropPress={() => setFilterVisable(false)}
        onBackButtonPress={() => setFilterVisable(false)}
        style={{
          justifyContent: 'flex-end',
        }}
        isVisible={FilterVisable}>
        <View
          style={{
            height: '70%',
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: 20,
            padding: 10,
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
          text="Filter"
          style={{marginTop: 30}}
          onPress={() => {
            let str =
              (jobType?.length != 0 ? 'filter[jobTypes.name]=' + jobType : '') +
              (experiance?.length != 0 ? '&' : '') +
              (experiance?.length != 0
                ? 'filter[yearsOfExperiences.name]=' + experiance
                : '') +
              (education?.length != 0 ? '&' : '') +
              (education?.length != 0
                ? 'filter[educationLevel.name]=' + education
                : '') +
              (industry?.length != 0 ? '&' : '') +
              (industry?.length != 0
                ? 'filter[industries.name]=' + industry
                : '');
            // console.log(str)
            setLoad(true);
            setFiltered(true);
            dispatch(
              AppThunks?.doSearch(str[0] == '&' ? str?.substring(1) : str),
            ).then(() => {
              setLoad(false);
              setFilterVisable(false);
            });
          }}
        />
      </ReactNativeModal>
    </>
  );
};

export default SearchScreen;
