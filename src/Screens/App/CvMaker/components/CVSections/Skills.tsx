import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { appColors } from '../../../../../theme/appColors';
import { appSizes } from '../../../../../theme/appSizes';
import { ComputerSkills, langSkills } from '../../../../../Dummy';
import EditDragIcons from './EditDragIcons';

interface Props {
    drag: any;
    isActive: any
    User?: any
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
            {/* <View style={styles.Row}>
                <Text style={styles.textHeaderSection}>Skills</Text>
                <Text style={styles.textHeaderSection}>Languages</Text>
            </View> */}

            <View style={[styles.rowContainer, { paddingRight: 10 }]}>
                <View style={{ flex: 1.5 }}>
                    <Text style={styles.textHeaderSection}>Skills</Text>
                    <FlatList
                        data={props.User?.user_data?.skills}
                        renderItem={({ item }) => (
                            <>
                                <Text style={[styles.textContentSection, { opacity: .7 }]}> . {item?.name}</Text>
                            </>
                        )}
                    />
                    {/* {ComputerSkills.map((item) => <Text style={[
                        styles.textContentSection, {
                            opacity: .7
                        }]}> . {item}</Text>)}*/}
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.textHeaderSection}>Languages</Text>
                    <FlatList
                        data={props.User?.user_data?.languages}
                        renderItem={({ item }) => (
                            <>
                                <Text style={[styles.textContentSection, { opacity: .7 }]}> . {item?.name}</Text>
                            </>
                        )}
                    />

                    {/* {langSkills.map((item) => <Text style={[
                        styles.textContentSection, {
                            opacity: .7

                        }]}> . {item}</Text>)} */}
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Skills;

