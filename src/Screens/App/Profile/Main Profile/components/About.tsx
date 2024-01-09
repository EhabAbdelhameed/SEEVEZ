import {StyleSheet, Text, View,TouchableOpacity,TextInput} from 'react-native';
import React,{useState} from 'react';
import {appColors} from '../../../../../theme/appColors';
import {RenderSvgIcon} from '../../../../../Components/atoms/svg';

const AboutCard = () => {
    const [aboutSection, setAboutSection] = useState('Highly experienced, creative, and multitalented Senior UI/UX Designer and Senior Graphic Designer with an extensive background in, UI & UX marketing, social media advertising, branding and print design.Exceptional collaborative and interpersonal skills; very strong team player with well-developed communication abilities. Experienced at producing high-end business-to-business and consumer-facing designs;talented at building and maintaining partnerships. Passionate and accustomed to performing in deadline-driven environments.Also excels at several tech tools, including Illustrator, Photoshop, InDesign. XD, Figmaand After Effect');
    const [editMode, setEditMode] = useState(false); // Added state to track edit mode
    const [updatedAboutSection, setUpdatedAboutSection] = useState(aboutSection); // Added state to track edited content
  
    const updateAboutSection = () => {
      setEditMode(true);
    };
  
    const saveAboutSection = () => {
      setAboutSection(updatedAboutSection);
      setEditMode(false);
    };
 return (
    <View style={styles.CardContainer}>
      <View style={styles.secContainer}>
        <View style={styles.Row}>
          <Text style={styles.Title}>About</Text>
          {!editMode ? (  
            <TouchableOpacity onPress={updateAboutSection}>
              <RenderSvgIcon icon="PEN" width={20} height={20} color={appColors.white} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={saveAboutSection}>
              <RenderSvgIcon icon="HEART" width={20} height={20} color={appColors.black} />
            </TouchableOpacity>
          )}
        </View>
        {editMode ? (
          <TextInput
            style={styles.EditDes}
            multiline
            value={updatedAboutSection}
            onChangeText={(text) => setUpdatedAboutSection(text)}
          />
        ) : (
          <Text style={styles.Des}>
            {aboutSection}
          </Text>
        )}
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
  },
  Des: {
    fontWeight: '400',
    color: appColors.black,
  },
  EditDes: {
    fontWeight: '400',
    color: appColors.black,
    textAlignVertical: 'top',
    marginBottom: 10,
  },
});
