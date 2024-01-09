import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { appColors } from '../../../../../theme/appColors';
import { appSizes } from '../../../../../theme/appSizes';
import EditDragIcons from './EditDragIcons';

interface Props {
    drag: any;
    isActive: any
  }

const Courses = (props: Props) => {
    return (
        <TouchableOpacity style={[styles.container2, {
            backgroundColor: appColors.siv
        }]}
        onPress={props.drag}
        disabled={props.isActive}
        >
            <EditDragIcons />
            <Text style={styles.textHeaderSection}>Training Courses</Text>
            <Text style={[styles.textHeaderSection, {
                // fontWeight: "600",
                marginTop: 7
            }]}>HR Diploma</Text>
            <Text style={[styles.textContentSection, {
            }]}>at Egycham</Text>
                 <Text style={[styles.textContentSection, {
            }]}>accredited by Ain-Shams University and HRCI</Text>
            <Text style={[styles.textContentSection, {
                opacity: .8,
                fontSize: appSizes.font_s,
                marginBottom:8
            }]}>May 2021 -2 mos - (35 Hours)   Cairo,Egypt</Text>
            <Text style={[styles.textHeaderSection, {
                // fontWeight: "600",
                marginTop: 7
            }]}>English Course</Text>
            <Text style={[styles.textContentSection, {
            }]}>at AUC University</Text>
            <Text style={[styles.textContentSection, {
                opacity: .8,
                fontSize: appSizes.font_s,
                marginBottom:8,
            }]}>May 2021 -2 mos - (35 Hours)   Cairo,Egypt</Text>
        </TouchableOpacity>
    );
}

export default Courses;

