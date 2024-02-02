
import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { appColors } from '../../../../../theme/appColors';
import EditDragIcons from './EditDragIcons';

interface Props {
    drag: any;
    isActive: any;
    User: any;
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
                    >{props?.User?.birthdate}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.label}>Nationality</Text>
                    <FlatList
                        data={props.User?.user_data?.nationality}
                        renderItem={({item}) => (
                            <>
                                <Text
                                    style={styles.textContentSection}
                                >{item?.name}</Text>
                            </>
                        )}
                    />
                </View>
            </View>
            {/* <View style={styles.rowContainer}>
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
            </View> */}


        </TouchableOpacity>
    );
}

export default AdditionalData;

