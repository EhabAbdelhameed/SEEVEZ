import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import { useSelector } from 'react-redux'
import { selectLang } from 'src/redux/lang'
import { useTranslation } from 'react-i18next'
const colors = ['#1D5EDD', '#00CEC8', '#EDBC33', '#ED3C3C']
const Templetes = () => {
    const lang = useSelector(selectLang);

  const {t, i18n} = useTranslation();
    return (
        <View style={styles.cotainerTemalete}>
            <Text style={styles.textTemplete}>{t("changeTemplate")}</Text>
            <View style={styles.rowTemps}>
                <Image
                    source={require("assets/images/bgGrediant.png")}
                    style={styles.temp}
                    resizeMode='stretch'
                />
                {
                    colors.map((color) => (
                        <Pressable>
                            <View style={[styles.temp, { backgroundColor: color }]} />
                        </Pressable>
                    ))
                }
            </View>
        </View>
    )
}

export default Templetes