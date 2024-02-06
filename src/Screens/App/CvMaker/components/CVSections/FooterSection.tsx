

import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { appColors } from '../../../../../theme/appColors';
import { appSizes } from '../../../../../theme/appSizes';
import { RenderSvgIcon } from '../../../../../Components/atoms/svg';

interface Props {

}

const FooterSection = (props: Props) => {
    return (
        <View style={[styles.container2, {
            backgroundColor: appColors.transparent,
            paddingHorizontal: 10
        }]}>
            <Text style={styles.label}>. References are ready upon request</Text>
            <View style={[styles.rowContainer, {
                justifyContent: "center",
                alignItems: "flex-end",
                marginTop: 20

            }]}>
                <Text style={[styles.textHeaderSection, {
                    fontWeight: "700",
                    marginTop: 7,
                    color: appColors.darkBlue
                }]}>Powered by </Text>
                <RenderSvgIcon
                    icon='LOGOCV'
                />
                <Text style={[styles.textHeaderSection, {
                    fontWeight: "700",
                    marginTop: 7
                }]}> SEEVEZ</Text>
            </View>

            <View style={{ height: 30 }} />
        </View>
    );
}

export default FooterSection;

