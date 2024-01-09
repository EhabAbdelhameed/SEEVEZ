import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { globalStyles } from '../../../../../globalStyle';
import { dummyAvatar } from '../../../../../Dummy';
import { RenderSvgIcon } from '../../../../../Components/atoms/svg';
import { appColors } from '../../../../../theme/appColors';
import AvatarIcon from '../../../../../Components/molecules/Avatar';

const UserSection = () => {
    return (
        <View style={[styles.containerUserSection,
        {
            
            
        }]}>
            <View style={globalStyles.leftHeaderContainer}>
                <AvatarIcon imgUrl={dummyAvatar} style={{ height: 80 }} />
                <View style={{ rowGap: 3 }}>
                    <View style={[globalStyles.leftHeaderContainer, {
                        width: "100%",
                    }]}>
                        <View style={{
                            maxWidth: "85%",
                        }}>
                            <Text style={styles.text2} numberOfLines={1}>Hesham</Text>
                        </View>
                        <RenderSvgIcon
                            icon='RIGHTACCOUNT'
                            width={15}
                        />
                    </View>
                    <Text style={styles.text3}>Front-end</Text>
                    <View style={styles.followersContainer}>
                        <Text style={[styles.text3, {
                            color: appColors.blue2
                        }]}>12k followers</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                style={styles.folowCotainer}
            >
                <Text style={[styles.text3, {
                    color: appColors.darkGreen1
                }]}>Follow</Text>
                <RenderSvgIcon
                    icon='PLUSFOLLOW'
                    width={15}
                    height={15}
                />
            </TouchableOpacity>
        </View>
    );
}

export default UserSection;
