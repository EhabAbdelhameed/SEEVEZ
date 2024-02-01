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
    User?: any;
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
            <FlatList
                data={props?.User?.user_data?.experiences}
                renderItem={({ item }) => (
                    <>
                        <Text style={[styles.textHeaderSection, {
                            fontWeight: "700",
                            marginTop: 7
                        }]}>{item?.job_title}</Text>
                        <Text style={[styles.textContentSection, {
                            fontWeight: "500",
                        }]}>{item?.company_name}</Text>
                        <Text style={[styles.textContentSection, {
                            opacity: .8,
                            marginTop: 5,
                            fontSize: appSizes.font_s
                        }]}>{moment(item?.start_date).format('YYYY-MM')} to {item?.still_work_here == 1 ? 'Present' : moment(item?.end_date).format('YYYY-MM')} · {(getDateDistanceInMonthsAndYears(item?.start_date, item?.end_date)?.years) > 0 ? `${(getDateDistanceInMonthsAndYears(item?.start_date, item?.end_date)?.years)} years` : `${(getDateDistanceInMonthsAndYears(item?.start_date, item?.end_date)?.months)} Mos `}</Text>
                        <Text style={[styles.textContentSection, {
                            fontWeight: "700",
                            marginTop: 10,
                            fontSize: appSizes.font_m
                        }]}>Description</Text>
                        <Text style={[styles.textContentSection, {
                            fontSize: appSizes.font_xs,
                            marginTop:5
                        }]}>{item?.description}.</Text>
                    </>
                )}
            />
        </TouchableOpacity>
    );
}

export default Experience;

