import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { appColors } from 'theme'
import { ArrowDown } from 'assets/Svgs'
import { useAppSelector } from 'src/redux/store'
import { selectIndstruy } from 'src/redux/app'

const IndustriesList = ({
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
    const Indstries = useAppSelector(selectIndstruy)
    return (
        <>
            <TouchableOpacity activeOpacity={.8} onPress={() => setIndustryVaisable((v: any) => !v)} style={{
                flexDirection: 'row-reverse',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                height: 45,
                width: '100%',
                borderBottomColor: industryVisable ? appColors.textColor : appColors.lightGrey3,
                marginBottom: industryVisable ? 0 : 10
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: '500',
                    color: appColors.textColor,
                }}>Industry</Text>
                <ArrowDown height={20} />
            </TouchableOpacity>
            {industryVisable && <FlatList
                scrollEnabled={false}
                data={Indstries}
                style={{ marginTop: 10 }}
                renderItem={({ item, index }) => (
                    <>
                        <TouchableOpacity activeOpacity={.8} onPress={() => {
                            setIndustry(index)
                            setIndustryVaisable(false)
                        }} style={{
                            flexDirection: 'row-reverse',
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
                                {index == industry && <View style={{
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
                                marginRight: 10
                            }}>{item?.name}</Text>

                        </TouchableOpacity>

                    </>
                )}
            />}
        </>
    )
}

export default IndustriesList