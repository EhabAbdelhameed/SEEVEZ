import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles';

const Content = ({
    hours,
    minutes,
    seconds,
    milliseconds
}:{
    hours:number;
    minutes:number;
    seconds:number;
    milliseconds:number;
}) => {
  return (
    <View>
       {/* <Text style={styles.Timer}>{`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</Text> */}
       <Text style={styles.Timer}>{`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`}</Text>

    </View>
  )
}

export default Content