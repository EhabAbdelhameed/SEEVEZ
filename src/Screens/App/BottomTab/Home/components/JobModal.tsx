import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {RNModal} from '../../../../../ui';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {styles} from './styles';
import {appColors} from '../../../../../theme/appColors';
import {appSizes} from '../../../../../theme/appSizes';
import Button from '../../../../../Components/molecules/Button';
import {useNavigation} from '@react-navigation/native';
import ReactNativeModal from 'react-native-modal';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
import {JOBOP, YallowBag} from 'assets/Svgs';

const JobModal = ({
  setVisable,
  data,

  visable,
}: {
  setVisable: any;
  data: {
    title: string;
    question: string;
    answers: {
      answer: string;
      selected: boolean;
    }[];
  };

  visable: boolean;
}) => {
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  const [buttonIndex, setButtonIndex] = React.useState(0);
  const navigation = useNavigation<any>();
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
            <Text
              style={[
                styles.rectangleText,
                {
                  marginTop: 0,
                  color: appColors.black,
                  alignSelf: 'flex-start',
                  marginLeft: 12,
                },
              ]}>
              {t(data?.title)}
            </Text>
          </View>
          <Text style={[styles.questionText]}>{data?.question}</Text>
          <View style={{marginTop: -25}}>
            {data?.answers.map(({answer, selected}, index) => (
              // <View >
              <TouchableOpacity
                style={styles.rowAnswer}
                onPress={() => {
                  setButtonIndex(index);
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    columnGap: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {index == 0 ? <JOBOP /> : <YallowBag />}
                  <Text
                    style={[
                      styles.questionText,
                      {
                        marginTop: 0,
                      },
                    ]}>
                    {t(answer)}
                  </Text>
                </View>

                <View style={styles.Circle}>
                  {buttonIndex == index ? (
                    <View style={styles?.innerCircle} />
                  ) : null}
                </View>
              </TouchableOpacity>
              // </View>
            ))}
          </View>
          <Button
            textStyle={{fontSize: 16}}
            text={'Create a vacancy'}
            onPress={() => {
              setVisable(false);
              buttonIndex != 0
                ? navigation.navigate('JobOpportunityCompany', {
                    color: '#E8AB00',
                  })
                : navigation.navigate('JobOpportunityCompany', {
                    color: '#FFF',
                  });
            }}
            style={styles.btn}
          />
        </View>
      </KeyboardAvoidingView>
    </ReactNativeModal>
  );
};

export default JobModal;
