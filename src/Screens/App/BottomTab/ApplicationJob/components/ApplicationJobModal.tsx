import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  Share,
} from 'react-native';
import React from 'react';
import {RNModal} from '../../../../../ui';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {styles} from '../styles';
import {appColors} from '../../../../../theme/appColors';
import {appSizes} from '../../../../../theme/appSizes';
import Button from '../../../../../Components/molecules/Button';
import {useNavigation} from '@react-navigation/native';
import ReactNativeModal from 'react-native-modal';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
import {DELETE, JOBOP, RecommandedJob, ShareJob, YallowBag} from 'assets/Svgs';
import dynamicLinks from '@react-native-firebase/dynamic-links';

const ApplicationModal = ({
  setVisable,
  data,

  visable,
}: {
  setVisable: any;
  data?: any;

  visable: boolean;
}) => {
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  const [buttonIndex, setButtonIndex] = React.useState(0);
  const navigation = useNavigation<any>();
  const generateLink = async () => {
    try {
      const link = await dynamicLinks().buildShortLink(
        {
          link: `https://seveezapp.page.link/Zi7X?job_id=${data?.job_id}`,
          domainUriPrefix: 'https://seveezapp.page.link',
          android: {
            packageName: 'com.seveezapp',
          },
          ios: {
            appStoreId: '6474092434',
            bundleId: 'com.sevees',
          },
        },
        dynamicLinks.ShortLinkType.DEFAULT,
      );
      console.log(link, 'link');
      return link;
    } catch (error) {
      console.log('error', error);
    }
  };
  const ShareJobs = async () => {
    const link = await generateLink();
    console.log(link, 'link');
    Share.share({
      message: `${link}`,
    })
      .then(result => console.log(result))
      .catch(errorMsg => console.error(errorMsg));
  };
  return (
    <ReactNativeModal
      isVisible={visable}
      onBackButtonPress={() => setVisable(false)}
      onBackdropPress={() => setVisable(false)}
      style={{justifyContent: 'flex-end', paddingBottom: 30}}>
      <KeyboardAvoidingView behavior="position" enabled>
        <View style={styles.ModalContanier}>
          <View style={styles.ModalHeaderContanier}>
            <RenderSvgIcon icon="HEADERMODALLINE" width={90} />
          </View>

          <View style={{}}>
            <TouchableOpacity onPress={ShareJobs} style={[styles.rowAnswer, {marginBottom: 10}]}>
              <View
                style={{
                  flexDirection: 'row',
                  columnGap: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ShareJob />
                <Text
                  style={[
                    styles.questionText,
                    {
                      marginTop: 0,
                      fontSize: 18,
                    },
                  ]}>
                  Share job via
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.rowAnswer, {marginBottom: 10}]}>
              <View
                style={{
                  flexDirection: 'row',
                  columnGap: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <RecommandedJob />
                <Text
                  style={[
                    styles.questionText,
                    {
                      marginTop: 0,
                      fontSize: 18,
                    },
                  ]}>
                  Recommend
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.rowAnswer, {marginBottom: 10}]}>
              <View
                style={{
                  flexDirection: 'row',
                  columnGap: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <DELETE width={32} height={32} />
                <Text
                  style={[
                    styles.questionText,
                    {
                      marginTop: 0,
                      fontSize: 18,
                    },
                  ]}>
                  Withdraw
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ReactNativeModal>
  );
};

export default ApplicationModal;
