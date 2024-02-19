import {View, Text, Alert, Platform} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styles';
import {Formik} from 'formik';
import Button from 'components/molecules/Button';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomInput from 'components/molecules/Input/CustomInput';
import {appColors, appSizes} from 'theme';
import {ADDONTHEROPTION, UploadYourCv} from 'assets/Svgs';
import {useAppDispatch} from 'src/redux/store';
import DocumentPicker from 'react-native-document-picker';
import AppThunks from 'src/redux/app/thunks';
import { useNavigation, useRoute } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import AppSlice from 'src/redux/app';
import { Input } from 'react-native-elements';
const Form = () => {
  const[source,setSource]=useState<any>([])
  const dispatch = useAppDispatch();
  const navigation=useNavigation<any>()
  const [ExterinalLinks, setExterinalLinks] = useState<any>([
    { link: '' } // Initial single input field for one option
  ]);
 
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
      <Text style={styles.textHeaderForm}>Create external link</Text>
      <Formik
        initialValues={{description: '',exterinalLinks: [{link: ''}]}}
        onSubmit={values => {
          if(values.description!=''&&values.exterinalLinks[0].link!=''){
            dispatch(AppSlice.changeAddonesCaption(values.description));
            dispatch(AppSlice.changeExterinalLinks(values.exterinalLinks));

          
            navigation.navigate('CreatePollLink');
          }else{
            Toast.show({
              type: 'error',
              text1: 'Please fill all the data',
            });
          }
        
        }}>
        {(props: any) => (
          <View style={{height: '100%'}}>
            <View>
              <Text style={styles.label}>Add caption</Text>

              <CustomInput
                {...props}
                Label={'description'}
                placeholder="Write here.."
              />
            </View>
            <View>
              <Text
                style={{fontSize: 14, color: '#000', fontFamily: 'Noto Sans'}}>
                Adding a title helps your document get discovered more easily {' '}
                <Text style={{color: 'blue'}}>learn more</Text>
              </Text>
            </View>
            {ExterinalLinks.map((Exp: any, index: any) => (
              <View key={index}>
                <Text style={styles.label}>{`Link 0${index + 1}`}</Text>
                <Input
                  {...props}
                  name={`exterinalLinks[${index}][link]`}
                  inputContainerStyle={styles.inputContainer}
                  onChangeText={e => props?.setFieldValue(`exterinalLinks[${index}][link]`, e)}
                  placeholderTextColor={'#B9B9B9'}
                  containerStyle={styles.containerStyle}
                  inputStyle={styles.inputStyle}
                  placeholder={`Write here..`}
                />
              </View>
            ))}
              <TouchableOpacity
            onPress={() => {
              setExterinalLinks((prevOptions:any) => [...prevOptions, { link: '' }]);
            }}
              style={styles.AddOptionContainer}>
              <ADDONTHEROPTION />
              <Text style={styles.text2}>Add another link</Text>
            </TouchableOpacity>
           
           <View style={{height:appSizes.height*.25}}/>
            <Button
              style={{ width: '100%'}}
              text="Done"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Form;
