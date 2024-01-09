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

const Education = (props: Props) => {
    return (
        <TouchableOpacity style={[styles.container2, {
            backgroundColor: appColors.sisth
        }]}
        onLongPress={props.drag}
        disabled={props.isActive}
        >
            <EditDragIcons color={appColors.green} />
            <Text style={styles.textHeaderSection}>Education</Text>
            <Text style={[styles.textHeaderSection, {
                fontWeight: "700",
                marginTop: 7
            }]}>Cairo University</Text>
            <Text style={[styles.textContentSection, {
            }]}>Bachelor's degree in computer science</Text>
            <Text style={[styles.textContentSection, {
                opacity: .8,
                fontSize: appSizes.font_s
            }]}>2014 - 2018 ·4 years  Cairo University</Text>
            <Text style={[styles.textContentSection, {
                fontWeight: "700"
            }]}>Grade : <Text style={{ fontWeight: "400" }}>Excellent</Text></Text>
        </TouchableOpacity>
    );
}

export default Education;

