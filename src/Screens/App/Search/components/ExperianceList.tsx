import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { appColors } from 'theme'
import { ArrowDown } from 'assets/Svgs'
import { useAppSelector } from 'src/redux/store'
import { selectIndstruy, selectYears } from 'src/redux/app'

const ExperianceList = ({
    industryVisable,
    setIndustryVaisable,
    industry,
    setIndustry
}: {
    industryVisable?: boolean;
    setIndustryVaisable?: any;
    industry?: any
    setIndustry?: any;
}) => {
    const Years = useAppSelector(selectYears)
    return (
        <>
            <TouchableOpacity activeOpacity={.8} onPress={() => setIndustryVaisable((v: any) => !v)} style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderBottomColor: industryVisable ? appColors.textColor : appColors.lightGrey3,
                height: 45,
                width: '100%',
                marginBottom: industryVisable ? 0 : 10
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: '500',
                    color: appColors.textColor,
                }}>Years of experience</Text>
                <ArrowDown height={20} />
            </TouchableOpacity>
            {industryVisable && <FlatList
                scrollEnabled={false}
                data={Years}
                style={{ marginTop: 10 }}
                renderItem={({ item, index }) => (
                    <>
                        <TouchableOpacity activeOpacity={.8} onPress={() => {
                           const arr = [...industry]
                           const ind = arr?.indexOf(item?.name)
                           if (ind !== -1) {
                               arr.splice(ind, 1);
                           } else {
                               arr?.push(item?.name)
                           }
                           setIndustry(arr)
                        }} style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '100%',
                            marginBottom: 15
                        }}>
                            <View style={{
                                width: 20,
                                height: 20,
                                borderRadius: 20,
                                borderColor: appColors.primary,
                                borderWidth: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                {industry?.indexOf(item?.name) != -1 && <View style={{
                                    width: 14,
                                    height: 14,
                                    borderRadius: 15,
                                    backgroundColor: appColors.primary
                                }} />}
                            </View>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: '400',
                                color: appColors.textColor,
                                marginLeft: 7,
                            }}>{item?.name}</Text>

                        </TouchableOpacity>

                    </>
                )}
            />}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}>
                {
                    industry?.map((item: any) => (
                        <>
                            <View style={{
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                borderWidth: 1,
                                borderColor: appColors.primary,
                                borderRadius: 20,
                                marginLeft: 5,
                                marginBottom: 5
                            }}>
                                <Text style={{
                                    fontSize: 13,
                                    color: appColors.primary,
                                    fontWeight: '500'
                                }}>{item}</Text>
                            </View>
                        </>
                    ))
                }
            </View>
        </>
    )
}

export default ExperianceList