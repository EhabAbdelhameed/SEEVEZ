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

const Experience = (props: Props) => {
    return (
        <TouchableOpacity style={[styles.container2, {
            backgroundColor: appColors.yellow
        }]}
        onLongPress={props.drag}
        disabled={props.isActive}
        >
            <EditDragIcons color={appColors.brown} />
            <Text style={styles.textHeaderSection}>Experience</Text>
            <Text style={[styles.textHeaderSection, {
                fontWeight: "700",
                marginTop: 7
            }]}>Senior ui/ux designer</Text>
            <Text style={[styles.textContentSection, {
                fontWeight: "500",
            }]}>O-Projects</Text>
            <Text style={[styles.textContentSection, {
                opacity: .8,
                fontSize: appSizes.font_s
            }]}>Sep 2023 - Present · 2 mos   Cairo, Egypt</Text>
            <Text style={[styles.textContentSection, {
                fontWeight: "700",
                marginTop: 10,
                fontSize: appSizes.font_m
            }]}>Description</Text>
            <Text style={[styles.textContentSection, {
                fontSize: appSizes.font_xs,
                marginLeft: 8,
            }]}>
                . Analyse and undrstand user requirements, behaviours, and motivations through research, feedback, usability testing, another methodologies to craft optimal UX solutions.</Text>
        </TouchableOpacity>
    );
}

export default Experience;

