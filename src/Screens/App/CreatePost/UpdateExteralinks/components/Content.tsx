
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles'
import Form from './Form'


const Content = () => {
    return (
        <View style={styles.ContentCotainer}>
            <Form />
        </View>
    )
}

export default Content