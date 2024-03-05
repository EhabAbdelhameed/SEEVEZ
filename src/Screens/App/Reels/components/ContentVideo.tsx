import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Share,
  Platform,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {RenderSvgIcon} from '../../../../Components/atoms/svg';
import Bolls from './Bolls';
import TextLinks from './TextLinks';
import {useNavigation} from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
import {useSelector} from 'react-redux';
import AuthSlice, {selectUser} from 'src/redux/auth';
import {
  AVATAR,
  DELETE,
  LOVE,
  LikeHand,
  RepostIcon,
  SAD,
  WOW,
} from 'assets/Svgs';
import {appColors} from 'theme/appColors';
import AppThunks from 'src/redux/app/thunks';
import {useAppDispatch} from 'src/redux/store';
import {selectAccessToken} from 'src/redux/app';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
import Modal from 'react-native-modal';
// import Share from 'react-native-share';
const ContentVideo = (item: any) => {
  const navigation = useNavigation<any>();
  const CurrentUserData = useSelector(selectUser);

  const dispatch = useAppDispatch();
  const [showReactionsModal, setShowReactionsModal] = useState(false);
  const [showEditPostModal, setShowEditPostModal] = useState(false);

  let count = 0;

  const Like = () => {
    const formdata = new FormData();
    formdata.append('referenceId', item?.data[0]?.postId);
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
    formdata.append('referenceId', item?.data[0]?.postId);
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

    const formdata = new FormData();
    formdata.append('referenceId', item?.data[0]?.postId);
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

    const formdata = new FormData();
    formdata.append('originalPostId', item?.data[0]?.postId);
    dispatch(AppThunks.doRepost(formdata)).then((response: any) => {
      dispatch(AppThunks.GetMyReels(CurrentUserData?.user_data?.id));
    });
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
  const toggleEditPostModal = () => {
    setShowEditPostModal(!showEditPostModal);
  };
  const lang = useSelector(selectLang);
  const {t, i18n} = useTranslation();
  const handleEditPost = () => {
    toggleEditPostModal();
  };
  const handleDeletePost = (postId: any) => {
    Alert.alert(
      t('SEEVEZ'),
      'Are you sure you want to delete this post?',
      [
        {
          text: t('cancel'),
          style: 'cancel',
        },
        {
          text: t('OK'),
          onPress: () => {
            // Dispatch the action to delete the experience
            dispatch(AppThunks.doDeletePost(postId)).then((res: any) => {
              dispatch(AppThunks.GetMyReels(CurrentUserData?.user_data?.id));
            });
          },
        },
      ],
      {cancelable: false},
    );

    toggleEditPostModal();
  };
  const hasNotch = DeviceInfo.hasNotch();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );

    return () => {
      backHandler.remove();
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const handleBackPress = () => {
    navigation.navigate('Home');
    return true; // Prevent default behavior (exit the app)
  };
  return (
    <View style={[styles.container]}>
      <View style={styles.footer}>
        <View style={styles.leftFooter}>
          <View
            style={{
              width: 56,
              height: 56,
              borderRadius: 56,
              marginTop: 12,
              // borderWidth: 1,
              // borderColor: '#DDD',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: appColors.bg,
            }}>
            {CurrentUserData?.avatar == null ? (
              <AVATAR height={48} width={48} />
            ) : (
              <Image
                source={{uri: CurrentUserData?.avatar}}
                style={{width: 56, height: 56, borderRadius: 56}}
                resizeMode="cover"
              />
            )}
          </View>
          <View
            style={{
              marginLeft: 8,
              rowGap: 4,
            }}>
            <View style={styles.nameIcon}>
              <Text style={styles.name}>{CurrentUserData?.name}</Text>
              {/* <RenderSvgIcon icon="RIGHTACCOUNT" />
              <Text style={styles.text2}>-2 nd</Text> */}
            </View>
            <Text style={styles.text2}>{CurrentUserData?.job_title}</Text>
            {/* <View style={styles.containerType}>
              <Text style={styles.text3}>Premium</Text>
            </View> */}
          </View>
        </View>
        <View style={styles.rightFooter}>
          <View style={styles.containerIconText}>
            {CurrentUserData?.user_data?.reactions?.map(
              (asst: any, index: any) => {
                if (asst?.post_id === item?.data[0]?.postId) {
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
              (asst: any) => asst?.post_id === item?.data[0]?.postId,
            ) && (
              <TouchableOpacity
                onLongPress={toggleReactionsModal}
                onPress={Like}>
                <RenderSvgIcon icon="DisLike" width={23} height={23} />
              </TouchableOpacity>
            )}

            <Text style={styles.textIcon}>
              {item?.data[0]?.reactionsCount >= 1000
                ? `${item?.data[0]?.reactionsCount / 1000}k`
                : item?.data[0]?.reactionsCount}
            </Text>
          </View>
          <View style={styles.containerIconText}>
            <TouchableOpacity onPress={handleRepost}>
              {item?.data[1] == 1 ? (
                <RenderSvgIcon icon="REPOST" width={20} height={20} />
              ) : (
                <RepostIcon width={20} height={20} />
              )}
            </TouchableOpacity>
            <Text style={styles.textIcon}>0</Text>
          </View>
          <View style={styles.containerIconText}>
            <TouchableOpacity onPress={() => shareReel(item?.data[0]?.postId)}>
              <RenderSvgIcon icon="SHARE" width={20} height={20} />
            </TouchableOpacity>
            <Text style={styles.textIcon}>0</Text>
          </View>
          <TouchableOpacity
            onPress={toggleEditPostModal}
            style={styles.containerIconText}>
            <RenderSvgIcon icon="THREEDOTS" width={20} height={20} />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        isVisible={showReactionsModal}
        onBackButtonPress={() => setShowReactionsModal(false)}
        onBackdropPress={() => setShowReactionsModal(false)}>
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
      <Modal
        isVisible={showEditPostModal}
        onBackButtonPress={() => setShowEditPostModal(false)}
        onBackdropPress={() => setShowEditPostModal(false)}>
        <View style={styles.modalContainer1}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              borderRadius: 16,
              flexDirection: 'row',
              columnGap: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
            }}
            onPress={() => {
              item?.data[2] == 'Links'
                ? navigation.navigate('UpdateExterinalLinks', {
                    item: item?.data[0],
                  })
                :item?.data[2] == 'Pdf'?navigation.navigate('UpdateCV', {
                  item: item?.data[0],
                }) :null;
            }}>
            <RenderSvgIcon
              icon="PEN"
              width={20}
              height={20}
              color={appColors.white}
            />
            <Text
              style={{
                fontSize: 20,
                color: '#191919',
                fontFamily: 'Noto Sans',
                fontWeight: '500',
              }}>
              Update post
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              borderRadius: 16,
              flexDirection: 'row',
              columnGap: 10,
              justifyContent: 'center',
              alignItems: 'center',
              // marginTop: 20,
            }}
            onPress={() => {
              handleDeletePost(item?.data[0]?.postId);
            }}>
            <DELETE />
            <Text
              style={{
                fontSize: 20,
                color: '#191919',
                fontFamily: 'Noto Sans',
                fontWeight: '500',
              }}>
              delete post
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ContentVideo;
