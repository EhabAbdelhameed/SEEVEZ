import {View, Text, Alert, Platform, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styles';
import {Formik} from 'formik';
import Button from 'components/molecules/Button';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomInput from 'components/molecules/Input/CustomInput';
import {appColors, appSizes} from 'theme';
import {UploadYourCv} from 'assets/Svgs';
import {useAppDispatch} from 'src/redux/store';
import DocumentPicker from 'react-native-document-picker';
import AppThunks from 'src/redux/app/thunks';
import { useNavigation, useRoute } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import AppSlice from 'src/redux/app';
import CustomButton from 'components/molecules/Button/CustomButton';
const Form = () => {
  const {item}: any = useRoute().params;

  const[source,setSource]=useState<any>([])
  const dispatch = useAppDispatch();
  const navigation=useNavigation<any>()
  const [loading, setLoading] = useState(false);

 
  const uploadFile = async () => {
    try {
      const res: any = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
// const formdata = new FormData();
 // formdata.append('cv_pdf', {
      //   uri: res[0]?.uri,
      //   type: res[0]?.type,
      //   name: res[0]?.name,
      // });
      setSource(res)

     
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Canceled');
      } else {
        console.log('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  return (
    <View style={styles.formContainer}>
      <Text style={styles.textHeaderForm}>Update your CV</Text>
      <Formik
        initialValues={{description:item?.metadata?.addonCaption || ''}}
        onSubmit={values => {
          setLoading(true);

          const formdata = new FormData();
          formdata.append('postId', item?.postId);
          formdata.append('metadata', item?.metadata);
          if (values.description != item?.metadata?.addonCaption) {
            formdata.append('addons_caption', values.description);
          }
          source?.length!=0?
          formdata.append('media', {
            uri: source[0]?.uri,
            type: source[0]?.type,
            name: source[0]?.name,
          })
        : null;
        

          console.log('Exterinal', JSON.stringify(formdata));
          dispatch(AppThunks.doUpdatePost(formdata)).then((res: any) => {
            dispatch(AppThunks.GetProfileInfo());
            setLoading(false);
          });
        
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
            <View>
              <Text
                style={{fontSize: 14, color: '#000', fontFamily: 'Noto Sans'}}>
                Adding a title helps your document get discovered more easily{' '}
                <Text style={{color: 'blue'}}>learn more</Text>
              </Text>
            </View>
            <TouchableOpacity onPress={uploadFile} style={styles.uploadPDF}>
              <UploadYourCv />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  fontFamily: 'Noto Sans',
                  color: appColors.primary,
                }}>
                {source?.length!=0?`${source[0]?.name?.slice(0,14)}...`:"Update file"}
              </Text>
            </TouchableOpacity>
           <View style={{height:appSizes.height*.35}}/>
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
