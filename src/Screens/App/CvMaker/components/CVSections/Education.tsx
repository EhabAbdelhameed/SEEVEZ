import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { appColors } from '../../../../../theme/appColors';
import { appSizes } from '../../../../../theme/appSizes';
import EditDragIcons from './EditDragIcons';
import { useSelector } from 'react-redux';
import { selectLang } from 'src/redux/lang';
import { useTranslation } from 'react-i18next';

interface Props {
    drag: any;
    isActive: any;
    User?: any;
}

const Education = (props: Props) => {
    const lang = useSelector(selectLang);
  
  const {t, i18n} = useTranslation();
    return (
        <TouchableOpacity style={[styles.container2, {
            backgroundColor: appColors.sisth
        }]}
            onLongPress={props.drag}
            disabled={props.isActive}
        >
            <EditDragIcons color={appColors.green} />
            <Text style={styles.textHeaderSection}>{t("education")}</Text>
            <FlatList
                data={props.User?.user_data?.educations}
                renderItem={({ item }) => (
                    <>
                        <Text style={[styles.textHeaderSection, {
                            fontWeight: "700",
                            marginTop: 7
                        }]}>{item?.university_name}</Text>
                        <Text style={[styles.textContentSection, {
                        }]}>{item?.level_id?.name} {lang=='ar'?'فى':" in "} {item?.field_of_study}</Text>
                        <Text style={[styles.textContentSection, {
                            opacity: .8,
                            fontSize: appSizes.font_s
                        }]}>{item?.start_date?.slice(0, 4)} - {item?.end_date?.slice(0, 4)}  {parseInt(item?.end_date?.slice(0, 4)) - parseInt(item?.start_date?.slice(0, 4))} years  {item?.university_name} University</Text>
                        <Text style={[styles.textContentSection, {
                            fontWeight: "700"
                        }]}>{t("grade")} : <Text style={{ fontWeight: "400" }}>{item?.grade}</Text></Text>
                    </>
                )}
            />

        </TouchableOpacity>
    );
}

export default Education;

