import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
const colors = ['#1D5EDD', '#00CEC8', '#EDBC33', '#ED3C3C']
const Templetes = ( setKey:any) => {
    return (
        <View style={styles.cotainerTemalete}>
            <Text style={styles.textTemplete}>Change template</Text>
            <View style={styles.rowTemps}>
                <TouchableOpacity onPress={()=>setKey('0')}>
                <Image
                    source={require("assets/images/bgGrediant.png")}
                    style={styles.temp}
                    resizeMode='stretch'
                />
                </TouchableOpacity>
                {
                    colors.map((color,index) => (
                        <TouchableOpacity onPress={()=>setKey(index+1)}>
                            <View style={[styles.temp, { backgroundColor: color }]} />
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

export default Templetes