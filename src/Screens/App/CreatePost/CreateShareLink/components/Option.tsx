import { View, Text, Pressable, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import { RenderSvgIcon, TName } from 'components/atoms/svg'
import { appColors } from 'theme'
import { PrimaryParamListKeys } from 'src/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { launchImageLibrary } from 'react-native-image-picker'
import DocumentPicker from 'react-native-document-picker';

const Option = ({ onPress }: { onPress: (key: any) => void }) => {
    const navigation = useNavigation<any>()
 
    const UploadImageProfile = async () => {
        try {
          const result = await DocumentPicker.pick({
            type: [DocumentPicker.types.images],
          });
    
          // The selected media is available in the result.uri
          // dispatch(setImageURL(result[0].uri));
          console.log(result);
          onPress(result);
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
            console.log('User cancelled document picker');
          } else {
            console.error('DocumentPicker Error:', err);
          }
        }
      };
      const pick = () => {
        launchImageLibrary({ quality: 0.5, mediaType: 'photo' }).then((res: any) => {
            onPress(res?.assets);
          // console.log("sdasdas "+JSON.stringify(res))
        });
      };

    const Item = ({
        icon,
        title = '',
        title2 = '',
        navKey
    }: {

        icon: TName;
        title: string;
        title2?: string;
        navKey: PrimaryParamListKeys
    }) => {
        const _handleNav = () => {
            navigation.navigate(navKey)
        }
        return (
            <View style={styles.optionContainer}>
                <View style={styles.leftSideOption}>
                    <RenderSvgIcon
                        icon={icon}
                        color={appColors.primary}
                        width={20}
                        height={20}
                    />
                    <Text style={styles.textOption}>{title}</Text>
                </View>
                <View style={styles.leftSideOption}>
                    {title2 ? <Text style={[styles.textOption, { color: appColors.grey }]}>{title2}</Text> : null}
                    <Pressable disabled={true} style={{
                        transform: [{ rotate: "180deg" }]
                    }}
                        onPress={_handleNav}
                    >
                        <RenderSvgIcon
                            icon='ARROWBACK'
                            color={appColors.primary}
                        />
                    </Pressable>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.optionsContainer}>
            <TouchableOpacity onPress={Platform.OS=='ios'?pick:UploadImageProfile}>
            <Item icon='PIC' title='Add photo' navKey='AddPhoto' />
            </TouchableOpacity>
            
            <Item icon='TAG' title='Tag people' navKey='Camera' />
            <Item icon='ADDLOCATION' title='Add location' navKey='Camera' />
            <Item icon='SETTING' title='Advanced settings' navKey='Camera' />
        </View>
    )
}

export default Option