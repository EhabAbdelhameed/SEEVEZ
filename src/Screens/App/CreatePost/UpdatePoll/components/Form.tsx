import {View, Text, Alert, Platform} from 'react-native';
import React, {useCallback, useState} from 'react';
import {styles} from '../styles';
import {Formik} from 'formik';
import InputView from 'components/molecules/Input';
import Button from 'components/molecules/Button';
import {ADDONTHEROPTION, DELETE} from 'assets/Svgs';
import DropDown from './DropDown';
import {Input} from 'react-native-elements';
import {RenderSvgIcon} from 'components/atoms/svg';
import {Dropdown} from 'react-native-element-dropdown';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {duration} from 'moment';
import Toast from 'react-native-toast-message';
import CustomInput from 'components/molecules/Input/CustomInput';
import AppSlice from 'src/redux/app';
import {useAppDispatch} from 'src/redux/store';
import {appSizes} from 'theme';
import {useSelector} from 'react-redux';
import {selectLang} from 'src/redux/lang';
import {useTranslation} from 'react-i18next';
const data = [
  {label: '1 day', id: 1},
  {label: '3 days', id: 2},
  {label: '7 days', id: 3},
  {label: '2 weeks', id: 4},
];
const data1 = [
  {label: 'يوم', id: 1},
  {label: '3 أيام', id: 2},
  {label: '7 أيام', id: 3},
  {label: 'أسبوعين', id: 4},
];
const Form = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
  const _handleNavigation = useCallback(() => {
    // navigation.navigate('cre');
  }, []);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [value, setValue] = useState(null);
  // const [options, setOptions] = useState<any>([1]);
  const [options, setOptions] = useState<any>([
    {answer: ''},
    {answer: ''}, // Initial single input field for one option
  ]);
  const removeLastOption = () => {
    setOptions((prevOptions: any) => prevOptions.slice(0, -1));
  };
  return (
    <View style={styles.formContainer}>
      <Text style={styles.textHeaderForm}>{t('Create a poll')}</Text>
      <Formik
        initialValues={{question: '', duration: '', options: [{answer: ''}]}}
        onSubmit={values => {
         
        }}>
        {(props: any) => (
          <View>
            <View>
              <Text style={styles.label}>{t('yourQuestion')}</Text>
              <CustomInput
                {...props}
                Label={'question'}
                placeholder={t('writeHere')}
              />
            </View>
            {options.map((Exp: any, index: any) => (
              <View key={index} >
                <Text style={styles.label}>{t('Option')}</Text>
                <View style={{flexDirection: 'row'}}>
                <Input
                  {...props}
                  name={`options[${index}][answer]`}
                  inputContainerStyle={[styles.inputContainer,{width:index>1?'95%':'100%'}]}
                  onChangeText={e =>
                    props?.setFieldValue(`options[${index}][answer]`, e)
                  }
                  placeholderTextColor={'#B9B9B9'}
                  containerStyle={styles.containerStyle}
                  inputStyle={[
                    styles.inputStyle,
                    {textAlign: lang == 'ar' ? 'right' : 'left'},
                  ]}
                  placeholder={t('writeHere')}
                />
                
                {index > 1 && (
                  <TouchableOpacity onPress={() => removeLastOption()}>
                    <DELETE width={30} height={30} />
                  </TouchableOpacity>
                )}
                </View>
               
              </View>
            ))}

            <TouchableOpacity
              onPress={() => {
                setOptions((prevOptions: any) => [
                  ...prevOptions,
                  {answer: ''},
                ]);
              }}
              style={styles.AddOptionContainer}>
              <ADDONTHEROPTION />
              <Text style={styles.text2}>{t('addAnotherOption')}</Text>
            </TouchableOpacity>
          

            <View>
              <Text style={styles.label}>{t('pollDuration')}</Text>
              <Dropdown
                style={styles.uploadContainer}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={lang == 'en' ? data : data1}
                search
                // maxHeight={300}
                labelField="label"
                valueField="id"
                placeholder={t('Duration')}
                searchPlaceholder={t('search')}
                value={value}
                onChange={(item: any) => {
                  props?.setFieldValue(`duration`, item?.id);
                }}
                renderRightIcon={() =>
                  lang == 'en' ? (
                    <RenderSvgIcon
                      icon={dropdownOpen ? 'ArrowUp' : 'ArrowDown'} // Choose the icon based on the dropdown state
                      width={16}
                      height={16}
                    />
                  ) : null
                }
                renderLeftIcon={() =>
                  lang == 'ar' ? (
                    <RenderSvgIcon
                      icon={dropdownOpen ? 'ArrowUp' : 'ArrowDown'} // Choose the icon based on the dropdown state
                      width={16}
                      height={16}
                    />
                  ) : null
                }
                onFocus={() => setDropdownOpen(true)} // Set the state to open when the dropdown is focused
                onBlur={() => setDropdownOpen(false)}
              />
            </View>
            {/* <View style={{marginVertical: 10, marginBottom: 20}}>
              <Text style={[styles.text1]}>
                Lorem ipsum dolor sit amet consectetur. Ac orci congue a
                sagittis nunc nibh. Vulputate id a posuere tortor tellus dis
                vulputate auctor.
              </Text>
            </View> */}
            <View style={{height: appSizes.height * 0.05}} />
            <Button text={t('Done')} onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Form;
