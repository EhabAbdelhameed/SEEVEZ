import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import { SaveCircle } from 'assets/Svgs'
import { appColors } from 'theme'

const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.footerLeftSide}>
                <SaveCircle />
                <Text style={styles.textOption}>Save</Text>
            </View>
            <TouchableOpacity style={styles.btnShare}>
                <Text style={[styles.textOption, {
                    color: appColors.white
                }]}>Share</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Footer