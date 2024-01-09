import { View, Text, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import { styles } from '../styles'
import { RecordAudio } from 'assets/Svgs'
import { appColors } from 'theme'
import { useNavigation } from '@react-navigation/native'

const Footer = ({
    Press = () => { },
    Remove = () => { },
    Done = () => { },
    isStoped,

}: {
    Press: (str?: any) => void;
    Remove: (str?: any) => void;
    Done: (str?: any) => void;
    isStoped: boolean;

}) => {
   
    return (
        <View style={styles.FooterContainer}>
            {isStoped ? <TouchableOpacity style={[styles.RemoveContainer]}
                onPress={Remove}
            >
                <Text style={[styles.skipText, {
                    color: appColors.primary
                }]}>Remove</Text>
            </TouchableOpacity> : <View />}
            <TouchableOpacity onPress={Press}>
            <RecordAudio onPress={Press} />
            </TouchableOpacity>
            {isStoped ? <TouchableOpacity style={[styles.RemoveContainer, {
                backgroundColor: appColors.primary
            }]}
                onPress={Done}
            >
                <Text style={styles.skipText}>Done</Text>
            </TouchableOpacity> : <View />}

        </View>
    )
}

export default Footer