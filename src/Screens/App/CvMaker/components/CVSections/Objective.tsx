import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { appColors } from '../../../../../theme/appColors';
import EditDragIcons from './EditDragIcons';

interface Props {
  drag: any
  isActive:any
}

const Objective = (props: Props) => {
  
  return (
    <TouchableOpacity style={[styles.container2, {
      backgroundColor: appColors.secondary
    }]}
      onLongPress={props.drag}
      disabled={props.isActive}
    >
      <EditDragIcons />
      <Text
        style={styles.textHeaderSection}
      >Objective</Text>
      <Text
        style={styles.textContentSection}
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus delectus reiciendis laborum? Minus quos eius nemo aliquam repudiandae hic vel, animi id provident? Deserunt iusto fugit, odio ullam atque labore.</Text>
    </TouchableOpacity>
  );
}

export default Objective;

