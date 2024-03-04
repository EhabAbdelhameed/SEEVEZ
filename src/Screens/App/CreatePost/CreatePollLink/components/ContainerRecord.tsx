import {View, Text, ImageBackground, Image, FlatList} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import Polls from 'screens/App/BottomTab/Home/components/Polls';
import Poll from './Poll';
import CV from './CV';
import {selectPhotoData} from 'src/redux/app';
import {useSelector} from 'react-redux';
import Swiper from 'react-native-swiper';
import Video from 'react-native-fast-video';
import ExternalLinks from './ExternalLink';
import Market from './Market';
import {RenderSvgIcon} from 'components/atoms/svg';
import {appColors} from 'theme';
import { LOCATION } from 'assets/Svgs';
import JopOppertunity from './JobOppertienty';

const ContainerRecord = () => {
  const photoData = useSelector(selectPhotoData);
 

  return photoData.key == '3' ? (
    <View
      style={[
        styles.bgContainer,
        {
          width: 320,
          height: 350,
          alignSelf: 'center',
          alignItems: 'center',
        },
      ]}>
      <Swiper showsPagination={false} loop={false}>
        {photoData?.image?.map((asset: any, index: number) => (
          <ImageBackground
            source={{
              uri: asset?.node?.image?.uri,
            }}
            style={[
              styles.bgContainer,
              {
                width: 320,
                height: 400,
                alignSelf: 'center',
                alignItems: 'center',
              },
            ]}
            resizeMode="cover"></ImageBackground>
        ))}
      </Swiper>
      {photoData?.pdf == null || photoData?.pdf?.length == 0 ? null : <CV />}
      {photoData?.JobOpportunity == null || photoData?.JobOpportunity?.length == 0 ? null : <JopOppertunity />}
      {photoData?.exterinalLinks == null ||
      photoData?.exterinalLinks?.length == 0 ? null : (
        <ExternalLinks />
      )}
      {photoData?.market == null || photoData?.market?.length == 0 ? null : (
        <Market />
      )}
      {photoData?.names == null || photoData?.names?.length == 0 ? null : (
        <View style={styles.taggedPeopleContainer}>
          <FlatList
            scrollEnabled={false}
            data={photoData?.names}
            numColumns={2}
            renderItem={({item, index}) => (
              <View key={index} style={styles.taggedPerson}>
                <Text
                  style={{
                    color: '#10347A',
                    fontFamily: 'Noto Sans',
                    fontSize: 8,
                    fontWeight: '400',
                  }}>{`@${item}`}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
       {photoData?.location == null || photoData?.location == '' ? null : (
        <View
          style={{
            position: 'absolute',
            top: 20,
            left: 10,
            flexDirection: 'row',
            columnGap: 10,
            backgroundColor:'#FFF',
            borderRadius:16,
            width:180,
            paddingHorizontal:10,
            paddingVertical:6

          }}>
            <LOCATION/>
          <Text
            style={{
              color: '#10347A',
              fontFamily: 'Noto Sans',
              fontSize: 12,
              fontWeight: '400',
            }}>
            {photoData?.location}
          </Text>
        </View>
      )}
    </View>
  ) : photoData.key == '4' || photoData.key == '5' ? (
    <View
      style={[
        styles.bgContainer,
        {
          width: '100%',
          height: 350,
          alignSelf: 'center',
          alignItems: 'center',
        },
      ]}>
      <Video
        resizeMode="cover"
        //   controls={true}
        repeat
        source={{
          uri:
            photoData.key == '4'
              ? photoData?.image
              : photoData?.image?.assets[0].uri,
        }}
        style={{
          width: '100%',
          height: 350,
          borderRadius: 16,
        }}
      />
      {photoData?.pdf == null || photoData?.pdf?.length == 0 ? null : <CV />}
      {photoData?.JobOpportunity == null || photoData?.JobOpportunity?.length == 0 ? null : <JopOppertunity />}
      {photoData?.exterinalLinks == null ||
      photoData?.exterinalLinks?.length == 0 ? null : (
        <ExternalLinks />
      )}
      {photoData?.market == null || photoData?.market?.length == 0 ? null : (
        <Market />
      )}
      {photoData?.names == null || photoData?.names?.length == 0 ? null : (
        <View style={styles.taggedPeopleContainer}>
          <FlatList
            scrollEnabled={false}
            data={photoData?.names}
            numColumns={2}
            renderItem={({item, index}) => (
              <View key={index} style={styles.taggedPerson}>
                <Text
                  style={{
                    color: '#10347A',
                    fontFamily: 'Noto Sans',
                    fontSize: 8,
                    fontWeight: '400',
                  }}>{`@${item}`}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
       {photoData?.location == null || photoData?.location == '' ? null : (
        <View
          style={{
            position: 'absolute',
            top: 20,
            left: 10,
            flexDirection: 'row',
            columnGap: 10,
            backgroundColor:'#FFF',
            borderRadius:16,
            width:180,
            paddingHorizontal:10,
            paddingVertical:6

          }}>
            <LOCATION/>
          <Text
            style={{
              color: '#10347A',
              fontFamily: 'Noto Sans',
              fontSize: 12,
              fontWeight: '400',
            }}>
            {photoData?.location}
          </Text>
        </View>
      )}
    </View>
  ) : (
    <ImageBackground
      source={{
        uri:
          photoData.key == '1'
            ? photoData?.image?.node?.image?.uri
            : photoData.key == 2
            ? photoData?.image?.assets[0]?.uri
            : 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
      }}
      style={[
        styles.bgContainer,
        {width: 320, height: 350, alignSelf: 'center', alignItems: 'center'},
      ]}
      resizeMode="cover">
      {/*         
             <Poll/> */}
      {photoData?.pdf == null || photoData?.pdf?.length == 0 ? null : <CV />}
      {photoData?.exterinalLinks == null ||
      photoData?.exterinalLinks?.length == 0 ? null : (
        <ExternalLinks />
      )}
      {photoData?.market == null || photoData?.market?.length == 0 ? null : (
        <Market />
      )}
      {photoData?.JobOpportunity == null || photoData?.JobOpportunity?.length == 0 ? null : <JopOppertunity />}
      {photoData?.names == null || photoData?.names?.length == 0 ? null : (
        <View style={styles.taggedPeopleContainer}>
          <FlatList
            scrollEnabled={false}
            data={photoData?.names}
            numColumns={2}
            renderItem={({item, index}) => (
              <View key={index} style={styles.taggedPerson}>
                <Text
                  style={{
                    color: '#10347A',
                    fontFamily: 'Noto Sans',
                    fontSize: 8,
                    fontWeight: '400',
                  }}>{`@${item}`}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
      {photoData?.location == null || photoData?.location == '' ? null : (
        <View
          style={{
            position: 'absolute',
            top: 20,
            left: 10,
            flexDirection: 'row',
            columnGap: 10,
            backgroundColor:'#FFF',
            borderRadius:16,
            width:180,
            paddingHorizontal:10,
            paddingVertical:6

          }}>
            <LOCATION/>
          <Text
            style={{
              color: '#10347A',
              fontFamily: 'Noto Sans',
              fontSize: 12,
              fontWeight: '400',
            }}>
            {photoData?.location}
          </Text>
        </View>
      )}
    </ImageBackground>
  );
};

export default ContainerRecord;
