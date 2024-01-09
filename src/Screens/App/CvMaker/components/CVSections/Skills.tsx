import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { appColors } from '../../../../../theme/appColors';
import { appSizes } from '../../../../../theme/appSizes';
import { ComputerSkills, langSkills } from '../../../../../Dummy';
import EditDragIcons from './EditDragIcons';

interface Props {
    drag: any;
    isActive: any
  }

const Skills = (props: Props) => {
    return (
        <TouchableOpacity style={[styles.container2, {
            backgroundColor: appColors.sisth
        }]}
        onLongPress={props.drag}
        disabled={props.isActive}
        >
            <EditDragIcons color={appColors.green} />
            <Text style={styles.textHeaderSection}>Skills</Text>

            <View style={styles.rowContainer}>
                <View style={{ flex: 1.5 }}>

                    <Text style={[styles.textContentSection, {
                        fontWeight: "500",
                        fontSize: appSizes.font_m
                    }]}>Computer skills</Text>
                    {ComputerSkills.map((item) => <Text style={[
                        styles.textContentSection, {
                            opacity: .7
                        }]}> . {item}</Text>)}
                </View>
                <View style={{ flex: 1 }}>

                    <Text style={[styles.textContentSection, {
                        fontWeight: "500",
                        fontSize: appSizes.font_m
                    }]}>Language skills</Text>
                    {langSkills.map((item) => <Text style={[
                        styles.textContentSection, {
                            opacity: .7

                        }]}> . {item}</Text>)}
                </View>
            </View>
            <View style={styles.rowContainer}>
                <View style={{ flex: 1.5 }}>

                    <Text style={[styles.textContentSection, {
                        fontWeight: "500",
                        fontSize: appSizes.font_m
                    }]}>Computer skills</Text>
                    {ComputerSkills.map((item) => <Text style={[
                        styles.textContentSection, {
                            opacity: .7
                        }]}> . {item}</Text>)}
                </View>
                <View style={{ flex: 1 }}>

                    <Text style={[styles.textContentSection, {
                        fontWeight: "500",
                        fontSize: appSizes.font_m
                    }]}>Language skills</Text>
                    {langSkills.map((item) => <Text style={[
                        styles.textContentSection, {
                            opacity: .7

                        }]}> . {item}</Text>)}
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Skills;

