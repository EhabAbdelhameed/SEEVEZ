import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appColors } from '../../../../../theme/appColors'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'
import { useNavigation } from '@react-navigation/native'

const ReferenceProfileCheck = ( data:any) => {
   
    const navigation = useNavigation()
 
    return (
        <View style={styles.CardContainer}>
        <View style={styles.secContainer}>
          <View style={styles.Row}>
            <Text style={styles.Title}>Reference check</Text>
            <View style={styles.Row2}>
            <TouchableOpacity onPress={()=>navigation.navigate('UpdateRefernceCheck')} >
              <RenderSvgIcon
                icon="PLUSFOLLOW"
                style={{marginRight: 10}}
                width={20}
                height={20}
                color={appColors.primary}
              />
              </TouchableOpacity>
              <TouchableOpacity disabled={data?.data?.length == 0?true:false}
                onPress={() => navigation.navigate('UpdateReferenceCheckCard')}>
              <RenderSvgIcon
                icon="PEN"
                width={20}
                height={20}
                color={appColors.primary}
              />
              </TouchableOpacity>
            </View>
          </View>
          {data?.data==null?null:
          (
            <FlatList
            scrollEnabled={false}
            data={data?.data}
            numColumns={2}
            columnWrapperStyle={{columnGap:40}}
            renderItem={({item}) =>(
                <View style={{ marginBottom: 10, height: 40, width: '40%' }}>
                {/* Adjust the width value as needed */}
                <View style={styles.Row1}>
                  <RenderSvgIcon icon='PHONE' width={20} height={20} color={appColors.white} />
                  <Text style={styles.InfoText}>{item?.phone}</Text>
                </View>
              </View>
            )
            
            }
            keyExtractor={(item, index) => index.toString()}
          />
          )}
        </View>
      </View>
    )
}

export default ReferenceProfileCheck

const styles = StyleSheet.create({
    CardContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: '100%',
        backgroundColor: appColors.white,
        borderRadius: 25,
        marginTop: 15,
      },
      InfoText: {
        fontWeight: '600',
        color: appColors.black,
        marginLeft: 7
    },
      secContainer: {
        width: '100%',
        backgroundColor: appColors.lightGrey2,
        borderRadius: 25,
        padding: 5,
        paddingTop: 10,
      },
      Row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
      },
      Row1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
      
      },
      Row2: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      Title: {
        fontSize: 20,
        fontWeight: '700',
        color: appColors.black,
      },
      Title2: {
        fontSize: 19,
        fontWeight: '600',
        color: appColors.black,
      },
      Image: {
        height: 65,
        width: 65,
        borderRadius: 65,
      },
      CompanyName: {
        fontSize: 15,
        fontWeight: '400',
        color: appColors.black,
        marginTop: 3,
      },
      des: {
        fontSize: 11,
        fontWeight: '400',
        color: appColors.black,
        marginTop: 3,
      },
      Title3: {
        fontWeight: '600',
        color: appColors.black,
        marginTop: 15,
      },
      PostText: {
        fontSize: 12,
        fontWeight: '400',
        color: appColors.black,
      },
})