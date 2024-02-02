import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { appColors } from '../../../../../theme/appColors';
import EditDragIcons from './EditDragIcons';

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
      <Text
        style={styles.textContentSection}
      >- Employee of the month at O-Projects on 20/11/2023</Text>
      <Text
        style={styles.textContentSection}
      >- Getting the first place in a sport on 20</Text>
    </TouchableOpacity>
  );
}

export default Achievements;

