import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { styles } from '../styles'
const colors = ['#1D5EDD', '#00CEC8', '#EDBC33', '#ED3C3C']
const Templetes = () => {
    return (
        <View style={styles.cotainerTemalete}>
            <Text style={styles.textTemplete}>Change template</Text>
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