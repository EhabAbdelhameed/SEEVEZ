import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import { SaveCircle } from 'assets/Svgs'
import { appColors } from 'theme'

const Footer = ({saveVideo, loading}:any) => {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.footerLeftSide}>
                <SaveCircle />
                <Text style={styles.textOption}>Save</Text>
            </View>
            <TouchableOpacity disabled={loading} onPress={saveVideo} style={styles.btnShare}>
                {loading?<ActivityIndicator size={'small'} color={'#FFF'}/>:
                <Text style={[styles.textOption, {
                    color: appColors.white
                }]}>Share</Text>}
            </TouchableOpacity>
        </View>
    )
}

export default Footer