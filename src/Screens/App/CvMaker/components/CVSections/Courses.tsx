import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { appColors } from '../../../../../theme/appColors';
import { appSizes } from '../../../../../theme/appSizes';
import EditDragIcons from './EditDragIcons';
import moment from 'moment';
import { getDateDistanceInMonthsAndYears } from 'src/Utils/HF';

interface Props {
    drag: any;
    isActive: any
    User?: any
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
            <FlatList
                data={props.User?.user_data?.training_courses}
                renderItem={({ item }) => (
                    <>
                        <Text style={[styles.textHeaderSection, {
                            // fontWeight: "600",
                            marginTop: 7
                        }]}>{item?.field_of_study}</Text>
                        <Text style={[styles.textContentSection, {
                        }]}>at {item?.institute}</Text>
                        <Text style={[styles.textContentSection, {
                        }]}>accredited by Ain-Shams University and HRCI</Text>
                        <Text style={[styles.textContentSection, {
                            opacity: .8,
                            fontSize: appSizes.font_s,
                            marginBottom: 8
                        }]}>{moment(item?.start_date).format('MM-YYYY')}  {(getDateDistanceInMonthsAndYears(item?.start_date, item?.end_date)?.years) > 0 ? `${(getDateDistanceInMonthsAndYears(item?.start_date, item?.end_date)?.years)} years` : `${(getDateDistanceInMonthsAndYears(item?.start_date, item?.end_date)?.months)} Mos `} - (35 Hours)   Cairo,Egypt</Text>

                    </>
                )}
            />

        </TouchableOpacity>
    );
}

export default Courses;

