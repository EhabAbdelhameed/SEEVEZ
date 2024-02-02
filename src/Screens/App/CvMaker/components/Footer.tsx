import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { style } from './styles'

const Footer = ({onGenerate}:any) => {
    return (
        <View style={style.footer}>
            <TouchableOpacity
             onPress={onGenerate}
            style={style.btn}
            >
            <Text style={style.textBtn}
               
            >Download as a PDF file</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Footer