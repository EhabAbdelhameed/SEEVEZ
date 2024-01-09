
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { appColors } from '../../../../../theme/appColors';
import EditDragIcons from './EditDragIcons';

interface Props {
    drag: any;
    isActive: any
  }

const AdditionalData = (props: Props) => {
    return (
        <TouchableOpacity style={[styles.container2, {
            backgroundColor: appColors.yellow
        }]}
        onLongPress={props.drag}
        disabled={props.isActive}
        >
            <EditDragIcons color={appColors.brown} />
            <Text
                style={styles.textHeaderSection}
            >Additional data</Text>
            <View style={styles.rowContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.label}>Date of birth</Text>
                    <Text
                        style={styles.textContentSection}
                    >. 09/06/1996</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.label}>Marital status</Text>
                    <Text
                        style={styles.textContentSection}
                    >. Single</Text>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.label}>Military status:</Text>
                    <Text
                        style={styles.textContentSection}
                    >. Exempted</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.label}>Car license</Text>
                    <Text
                        style={styles.textContentSection}
                    >. Own a car</Text>
                </View>
            </View>


        </TouchableOpacity>
    );
}

export default AdditionalData;

