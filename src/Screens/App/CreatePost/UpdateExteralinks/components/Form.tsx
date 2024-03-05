import {View, Text, Alert, Platform, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styles';
import {Formik} from 'formik';
import Button from 'components/molecules/Button';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomInput from 'components/molecules/Input/CustomInput';
import {appColors, appSizes} from 'theme';
import {ADDONTHEROPTION, DELETE, UploadYourCv} from 'assets/Svgs';
import {useAppDispatch} from 'src/redux/store';
import DocumentPicker from 'react-native-document-picker';
import AppThunks from 'src/redux/app/thunks';
import {useNavigation, useRoute} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import AppSlice from 'src/redux/app';
import {Input} from 'react-native-elements';
import * as Yup from 'yup';
import CustomButton from 'components/molecules/Button/CustomButton';
const Form = () => {
  const {item}: any = useRoute().params;
  const dispatch = useAppDispatch();
  //  console.log(item?.metadata)
  // const navigation = useNavigation<any>();
  // const [ExterinalLinks, setExterinalLinks] = useState<any>([
  //   item?.metadata?.externalLinks,
  // ]);
  // const removeLastOption = () => {
  //   setExterinalLinks((prevOptions: any) => prevOptions.slice(0, -1));
  // };
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.formContainer}>
      <Text style={styles.textHeaderForm}>Update external link</Text>
      <Formik
        initialValues={{
          description: item?.metadata?.addonCaption || '',
          exterinalLinks: [{link: ''}],
        }}
        validationSchema={Yup.object().shape({
          externalLinks: Yup.array().of(
            Yup.object().shape({
              link: Yup.string()
                .trim()
                .matches(urlPattern, 'Must be a valid URL'),
            }),
          ),
        })}
        onSubmit={async values => {
       
          const isValidLinks = await Promise.all(
            
            item?.metadata?.externalLinks.map((link:any) =>
              Yup.string()
                .trim()
                .matches(urlPattern, 'Must be a valid URL')
                .isValid(link.link),
            ),
          );
          if (
            values.description !== '' &&
            isValidLinks.every(isValid => isValid)
          ) {
            setLoading(true);

            const formdata = new FormData();
            formdata.append('postId', item?.postId);
            formdata.append('metadata',item?.metadata);
            if (values.description != item?.metadata?.addonCaption) {
              formdata.append('addons_caption', values.description);
            }
            for (let i = 0; i < item?.metadata?.exterinalLinks?.length; i++) {
              if (values?.exterinalLinks[i]?.link != '') {
                formdata.append(
                  `array[${i}][link]`,
                  values.exterinalLinks[i].link,
                );
              }
            }

            console.log('Exterinal Links : ', JSON.stringify(formdata));
            dispatch(AppThunks.doUpdatePost(formdata)).then((res: any) => {
              
              setLoading(false);
            });
          } else {
            Toast.show({
              type: 'error',
              text1: 'Please fill all the data with valid links',
            });
          }
        }}>
        {(props: any) => (
          <View style={{height: '100%'}}>
            <View>
              <Text style={styles.label}>Add caption</Text>

              <TextInput
                placeholder={'Write here..'}
                onChangeText={value =>
                  props?.setFieldValue(`description`, value)
                }
                value={props.values.description}
                style={{
                  borderRadius: 16,
                  borderColor: '#1D5EDD',
                  borderWidth: 1,
                  paddingHorizontal: 15,
                  height: 50,
                  fontSize: 14,
                  marginBottom: 10,
                  // textAlign: lang == 'ar' ? 'right' : 'left',
                }}
              />
            </View>

            {item?.metadata?.externalLinks.map((Exp: any, index: any) => (
              <View key={index}>
                <Text style={styles.label}>{`Link 0${index + 1}`}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Input
                    {...props}
                    name={`exterinalLinks[${index}][link]`}
                    inputContainerStyle={[
                      styles.inputContainer,

                      {
                        width: '100%',
                        borderColor:
                          props.errors?.exterinalLinks?.[index]?.link &&
                          props.touched?.exterinalLinks?.[index]?.link
                            ? 'red'
                            : '#1D5EDD',
                      },
                    ]}
                    onChangeText={e =>
                      props?.setFieldValue(`exterinalLinks[${index}][link]`, e)
                    }
                    placeholderTextColor={'#B9B9B9'}
                    containerStyle={styles.containerStyle}
                    inputStyle={styles.inputStyle}
                    placeholder={`Write here..`}
                    value={Exp?.link}
                  />
                </View>
                {props.errors?.exterinalLinks?.[index]?.link &&
                props.touched?.exterinalLinks?.[index]?.link ? (
                  <Text style={{color: 'red', marginLeft: 10, fontSize: 12}}>
                    {props.errors?.exterinalLinks?.[index]?.link}
                  </Text>
                ) : null}
              </View>
            ))}
            {/* <TouchableOpacity
              onPress={() => {
                setExterinalLinks((prevOptions: any) => [
                  ...prevOptions,
                  {link: ''},
                ]);
              }}
              style={styles.AddOptionContainer}>
              <ADDONTHEROPTION />
              <Text style={styles.text2}>Add another link</Text>
            </TouchableOpacity> */}

            <View style={{height: appSizes.height * 0.25}} />

            <CustomButton
              loading={loading}
              text="Update"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Form;
