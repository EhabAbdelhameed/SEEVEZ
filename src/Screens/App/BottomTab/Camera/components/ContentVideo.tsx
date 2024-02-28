import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Share,
  Platform,
  BackHandler
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import Bolls from './Bolls';
import TextLinks from './TextLinks';
import { useNavigation } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
import { useSelector } from 'react-redux';
import AuthSlice, { selectUser } from 'src/redux/auth';
import { AVATAR, LOVE, LikeHand, SAD, WOW } from 'assets/Svgs';
import { appColors } from 'theme/appColors';
import AppThunks from 'src/redux/app/thunks';
import { useAppDispatch } from 'src/redux/store';
import { selectAccessToken } from 'src/redux/app';
import { RenderSvgIcon } from 'components/atoms/svg';
// import Share from 'react-native-share';
const ContentVideo = (item: any) => {
  const navigation = useNavigation<any>();
  const CurrentUserData = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const [showReactionsModal, setShowReactionsModal] = useState(false);

  let count = 0;

  const Like = () => {
    const formdata = new FormData();
    formdata.append('referenceId', item?.data?.postId);
    formdata.append('referenceType', 'post');
    formdata.append('reactionName', 'like');
    console.log(formdata);
    dispatch(AppThunks.doAddLike(formdata)).then((response: any) => {
      dispatch(AppThunks.GetMyReels(CurrentUserData?.user_data?.id));
      dispatch(AppThunks.GetProfileInfo());
    });
  };

  const disLike = (data: any) => {
    const formdata = new FormData();
    formdata.append('referenceId', item?.data?.postId);
    formdata.append('referenceType', 'post');
    formdata.append('reactionName', data);
    dispatch(AppThunks.doRemoveLike(formdata)).then((response: any) => {
      dispatch(AppThunks.GetMyReels(CurrentUserData?.user_data?.id));
      dispatch(AppThunks.GetProfileInfo());
    });
  };
  const AccessToken = useSelector(selectAccessToken);
  React.useEffect(() => {
    AccessToken ? dispatch(AuthSlice.chnageisAuth(false)) : null;
  }, [AccessToken]);
  const toggleReactionsModal = () => {
    setShowReactionsModal(!showReactionsModal);
  };

  const handleReaction = (reaction: string) => {
    // Handle reaction selection here
    console.log('Selected reaction:', reaction);
    const formdata = new FormData();
    formdata.append('referenceId', item?.data?.postId);
    formdata.append('referenceType', 'post');
    formdata.append('reactionName', reaction);
    console.log(formdata);
    dispatch(AppThunks.doAddLike(formdata)).then((response: any) => {
      dispatch(AppThunks.GetMyReels(CurrentUserData?.user_data?.id));
      dispatch(AppThunks.GetProfileInfo());
    });
    toggleReactionsModal();
  };
  const handleRepost = () => {
    // Implement repost logic here
    console.log('Repost icon pressed');
    // Dispatch an action, navigate to a screen, etc.
  };
  const shareReel = (reelId: any) => {
    // Replace `reelLink` with the actual link to the reel
    const reelLink = `app://seveezapp/${reelId}`;
    Share.share({
      message: `${reelLink}`,
    })
      .then(result => console.log(result))
      .catch(errorMsg => console.error(errorMsg));
  };

  // const handleShare = async () => {
  //   //item?.data?.metadata?.attachments?.file?.fileUrl
  //   // console.log(item?.data?.metadata?.attachments[0]?.file?.fileUrl);
  //   const shareOptions = {
  //     title: 'Share file',
  //     message:
  //       item?.data?.metadata?.attachments[0]?.file?.fileUrl + '?size=full',
  //     // url: 'https://google.com',
  //   };

  //   try {
  //     const ShareResponse = await Share.open(shareOptions);
  //     console.log('Result =>', ShareResponse);
  //     // setResult(JSON.stringify(ShareResponse, null, 2));
  //   } catch (error) {
  //     console.log('Error =>', error);
  //     // setResult('error: '.concat(getErrorString(error)));
  //   }
  // };
  const hasNotch = DeviceInfo.hasNotch()

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      backHandler.remove();
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const handleBackPress = () => {
    navigation.navigate('Home');
    return true; // Prevent default behavior (exit the app)
  };
  // console.log(item?.data?.metadata?.user_data?.name)
  return (
    <View style={[styles.container]}>
      <View style={[styles.header, { marginTop: hasNotch ? 60 : 15 }]}>
        <TouchableOpacity
          style={[styles.leftHeader,]}
          onPress={() => {
            // navigation.navigate('Home');
          }}>
          {/* <RenderSvgIcon icon="ARROWBACK" width={25} height={25} /> */}
          {/* <Text style={styles.textLeftHeader}>My reels</Text> */}
        </TouchableOpacity>
        <View style={styles.rightHeader}>
          {/* <TouchableOpacity activeOpacity={.8} onPress={() => { navigation.navigate('Search') }}>
            <RenderSvgIcon icon="SEARCH" width={25} height={25} />
          </TouchableOpacity> */}
          {/* <RenderSvgIcon icon="COMMENT" width={25} height={25} /> */}
          {/* <RenderSvgIcon icon="NOTIFICATION" width={25} height={25} /> */}
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity activeOpacity={.8} onPress={()=>{navigation.navigate('UserProfile',{id:item?.data?.postedUserId})}} style={styles.leftFooter}>
          <View
            style={{
              width: 56,
              height: 56,
              borderRadius: 56,
              marginTop: 12,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: appColors.bg,
            }}>
            {item?.data?.metadata?.user_data?.avatar == null ? (
              <AVATAR height={48} width={48} />
            ) : (
              <Image
                source={{ uri: item?.data?.metadata?.user_data?.avatar }}
                style={{ width: 56, height: 56, borderRadius: 56 }}
                resizeMode="cover"
              />
            )}
          </View>
          <View
            style={{
              marginLeft: 8,
            }}>
            <Text style={styles.name}>{item?.data?.metadata?.user_data?.name}</Text>
            {item?.data?.metadata?.user_data?.job_title != null && <Text style={styles.text2}>{item?.data?.metadata?.user_data?.job_title}</Text>}

          </View>
        </TouchableOpacity>
        <View style={styles.rightFooter}>
          <View style={styles.containerIconText}>
            {CurrentUserData?.user_data?.reactions?.map(
              (asst: any, index: any) => {
                if (asst?.post_id === item?.data?.postId) {
                  switch (asst?.react) {
                    case 'like':
                      return (
                        <TouchableOpacity
                          onPress={() => disLike('like')}
                          key={index}>
                          <LikeHand width={20} height={20} />
                        </TouchableOpacity>
                      );
                    case 'love':
                      return (
                        <TouchableOpacity
                          onPress={() => disLike('love')}
                          key={index}>
                          <LOVE width={20} height={20} />
                        </TouchableOpacity>
                      );
                    case 'wow':
                      return (
                        <TouchableOpacity
                          onPress={() => disLike('wow')}
                          key={index}>
                          <WOW width={20} height={20} />
                        </TouchableOpacity>
                      );
                    case 'sad':
                      return (
                        <TouchableOpacity
                          onPress={() => disLike('sad')}
                          key={index}>
                          <SAD width={20} height={20} />
                        </TouchableOpacity>
                      );
                    default:
                      return null; // No reaction found
                  }
                } else {
                  return null; // Post not reacted, skip rendering reactions
                }
              },
            )}
            {/* Render the default reaction icon only if no reaction is found */}
            {!CurrentUserData?.user_data?.reactions?.some(
              (asst: any) => asst?.post_id === item?.data?.postId,
            ) && (
                <TouchableOpacity
                  onLongPress={toggleReactionsModal}
                  onPress={Like}>
                  <RenderSvgIcon icon="DisLike" width={23} height={23} />
                </TouchableOpacity>
              )}

            <Text style={styles.textIcon}>
              {item?.data?.reactionsCount >= 1000
                ? `${item?.data?.reactionsCount / 1000}k`
                : item?.data?.reactionsCount}
            </Text>
          </View>
          <View style={styles.containerIconText}>
            <TouchableOpacity onPress={handleRepost}>
              <RenderSvgIcon icon="REPOST" width={20} height={20} />
            </TouchableOpacity>
            <Text style={styles.textIcon}>0</Text>
          </View>
          <View style={styles.containerIconText}>
            <TouchableOpacity onPress={() => shareReel(item?.data?.postId)}>
              <RenderSvgIcon icon="SHARE" width={20} height={20} />
            </TouchableOpacity>
            <Text style={styles.textIcon}>0</Text>
          </View>
          <View style={styles.containerIconText}>
            <RenderSvgIcon icon="THREEDOTS" width={20} height={20} />
          </View>
        </View>
      </View>
      <Modal
        visible={showReactionsModal}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleReactionsModal}>
        <View style={styles.modalContainer}>
          <View
            style={{
              flexDirection: 'row',
              columnGap: 20,
              width: '100%',
              backgroundColor: 'white',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => handleReaction('like')}>
              <LikeHand />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleReaction('love')}>
              <LOVE />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleReaction('sad')}>
              <SAD />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleReaction('wow')}>
              <WOW />
            </TouchableOpacity>
          </View>
          {/* Add more reaction options as needed */}
        </View>
      </Modal>
    </View>
  );
};

export default ContentVideo;
