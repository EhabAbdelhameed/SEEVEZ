import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
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
      {console.log(props.User?.user_data?.achievement)}
      <View style={{
        height: 100,
        width: 100,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor:appColors.lightGrey3
      }}>
        <PDF height={70} width={70} style={{backgroundColor:'#f00'}} />
      </View>
      <FlatList
        data={props.User?.user_data?.achievement}
        renderItem={({ item }) => (
          <>
            <Text style={styles.textContentSection}>{item?.text}</Text>
          </>
        )}
      />


    </TouchableOpacity>
  );
}

export default Achievements;

