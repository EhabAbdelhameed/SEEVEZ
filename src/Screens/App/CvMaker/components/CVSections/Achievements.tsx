import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Linking, Image } from 'react-native';
import { styles } from './styles';
import { appColors } from '../../../../../theme/appColors';
import EditDragIcons from './EditDragIcons';
import { PDF } from 'assets/Svgs';

interface Props {
  drag: any;
  isActive: any
  User?: any;
}

const Achievements = (props: Props) => {
  return (
    <TouchableOpacity style={[styles.container2, {
      backgroundColor: appColors.lightGrey
    }]}
      onLongPress={props.drag}
      disabled={props.isActive}
    >
      <EditDragIcons />
      <Text
        style={styles.textHeaderSection}
      >Achievements</Text>
      <FlatList
        data={props.User?.user_data?.achievement}
        renderItem={({ item }) => (
          <>
            <Text style={styles.textContentSection}>- {item?.text}</Text>
            {
              item?.object_info?.extension == 'pdf' ?
                <TouchableOpacity activeOpacity={.8} onPress={() => Linking.openURL(item?.certificate)} style={styles.PDFContainer}>
                  <PDF height={70} width={70} />
                </TouchableOpacity>
                :
                <Image style={styles.Certificate} source={{ uri: item?.certificate }} />
            }
          </>
        )}
      />


    </TouchableOpacity>
  );
}

export default Achievements;

