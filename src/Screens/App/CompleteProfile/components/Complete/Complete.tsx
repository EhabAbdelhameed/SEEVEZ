import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import  styles  from './styles'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'
import { appColors } from '../../../../../theme/appColors'
import { useSelector } from 'react-redux'
import { selectLang } from 'src/redux/lang'
import { useTranslation } from 'react-i18next'

const Complete = ({
    pers = 0
}: {
    pers: number;
}) => {
    const lang = useSelector(selectLang);
  
    const {t, i18n} = useTranslation();
    const Slider = () => {
        return (
            <View style={styles.rowItemSlide}>
                <View style={{ width: "85%" }}>
                    <View style={[styles.slider, {
                        opacity: .4,
                    }]} />
                    <View style={[styles.slider, {
                        // backgroundColor: color,
                        position: "absolute",
                        left: 0,
                        width: `${pers}%`
                    }]} />
                    <View style={[styles.circleSlider, {
                        left: `${pers - 1}%`,
                        bottom: -5
                    }]} >
                        <RenderSvgIcon icon='RIGHTSLIDER' width={10} height={10} />
                    </View>
                </View>
                <Text style={styles.text2}>{pers}%</Text>
            </View>
        )
    }

    return (
        <>
            <View style={styles.containerCompleteProfile}>
                <View style={styles.rowContainer}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.text1}>Complete your profile</Text>
                        <Text style={styles.text2}>Lorem ipsum dolor sit amet consectetur.</Text>
                    </View>
                    <View style={{transform:lang=='en'?[{rotate: '180deg'}]:[{rotate: '0deg'}]}}>
                        <RenderSvgIcon
                            icon='ARROWBACK'
                            color={appColors.primary}
                        />
                    </View>
                </View>
                <Slider />
            </View>
        </>
    )
}

export default Complete