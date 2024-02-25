import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { appColors } from '../../../../../theme/appColors';
import EditDragIcons from './EditDragIcons';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectLang } from 'src/redux/lang';

interface Props {
  drag: any
  isActive: any
  User?: any
}

const Objective = (props: Props) => {
  const lang = useSelector(selectLang);
  
  const {t, i18n} = useTranslation();
  return (
    <TouchableOpacity style={[styles.container2, { backgroundColor: appColors.secondary }]} onLongPress={props.drag} disabled={props.isActive}>
      <EditDragIcons />
      <Text style={styles.textHeaderSection}>{t("objective")}</Text>
      <Text style={styles.textContentSection}>{props?.User?.about}</Text>
    </TouchableOpacity>
  );
}

export default Objective;

