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
            <Text style={styles.textHeaderSection}>Skills</Text>

            <View style={styles.rowContainer}>
                <View style={{ flex: 1.5 }}>
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

