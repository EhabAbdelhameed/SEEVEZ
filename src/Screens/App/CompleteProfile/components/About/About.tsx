import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';
import {useNavigation} from '@react-navigation/native';

const AboutCard = (About: any) => {
  const [aboutSection, setAboutSection] = useState('');
  const [editMode, setEditMode] = useState(true); // Added state to track edit mode
  const [SaveAboutSection, setSavedAboutSection] = useState(aboutSection); // Added state to track edited content
  const navigation = useNavigation<any>();
  // const updateAboutSection = () => {
  //   setEditMode(true);
  // };

  const saveAboutSection = () => {
    navigation.navigate('UpdateAbout');
    // setAboutSection(SaveAboutSection);
    // setEditMode(false);
  };
  return (
    <View style={styles.CardContainer}>
      <View style={styles.secContainer}>
        <View style={styles.Row}>
          <Text style={styles.Title}>About</Text>

          <TouchableOpacity onPress={saveAboutSection}>
            <RenderSvgIcon
              icon="PEN"
              width={20}
              height={20}
              color={appColors.white}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={saveAboutSection}>
              <RenderSvgIcon icon="HEART" width={20} height={20} color={appColors.black} />
            </TouchableOpacity> */}
        </View>
        {/*         
          <TextInput
            style={styles.EditDes}
            placeholder='Bio'
            multiline
            value={SaveAboutSection}
            onChangeText={(text) => setSavedAboutSection(text)}
          /> */}
        <View
          style={{
            borderWidth: 1,
            borderColor: '#E8E8E8',
            height: 100,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius:16
          }}>
          <Text numberOfLines={4} style={{color: '#B9B9B9',fontFamily: 'Noto Sans'}}>{About?.About?.about==null?"Bio":About?.About?.about}</Text>
        </View>
       
      </View>
    </View>
  );
};

export default AboutCard;

const styles = StyleSheet.create({
  CardContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '100%',
    backgroundColor: appColors.white,
    borderRadius: 25,
    marginTop: 15,
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
  Title: {
    fontSize: 20,
    fontWeight: '700',
    color: appColors.black,
    fontFamily: 'Noto Sans'
  },
  Des: {
    fontWeight: '400',
    color: appColors.black,
    fontFamily: 'Noto Sans'
  },
  EditDes: {
    fontWeight: '400',
    color: appColors.black,
    textAlignVertical: 'top',
    marginBottom: 10,
    fontFamily: 'Noto Sans'
  },
});
