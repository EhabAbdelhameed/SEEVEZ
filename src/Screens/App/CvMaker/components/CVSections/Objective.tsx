import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { appColors } from '../../../../../theme/appColors';
import EditDragIcons from './EditDragIcons';

interface Props {
  drag: any
  isActive: any
  User?: any
}

const Objective = (props: Props) => {

  return (
    <TouchableOpacity style={[styles.container2, { backgroundColor: appColors.secondary }]} onLongPress={props.drag} disabled={props.isActive}>
      <EditDragIcons />
      <Text style={styles.textHeaderSection}>Objective</Text>
      <Text style={styles.textContentSection}>{props?.User?.about}</Text>
    </TouchableOpacity>
  );
}

export default Objective;

