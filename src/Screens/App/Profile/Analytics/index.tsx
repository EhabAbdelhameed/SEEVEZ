import { Dimensions, ScrollView, View } from 'react-native'
import React from 'react'
import {
    LineChart,
} from "react-native-chart-kit";
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from 'components/molecules/Header'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

const AnalyticsScreen = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <Header Title='My analytics' onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.PaddingContainer}>
                <LineChart bezier style={{
                    alignItems:'center',
                    borderRadius:20,
                    paddingTop:20,
                    backgroundColor:'#fff',
                    
                }}
                    width={350} // from react-native
                    height={240}
                    withInnerLines={false}
                    // withVerticalLines
                    // withHorizontalLines
                    withOuterLines={true}
                    
                    // yAxisLabel="$"
                    // yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        strokeWidth:1,
                        backgroundColor: "#fff",
                        backgroundGradientFrom: "#fff",
                        backgroundGradientTo: "#fff",
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `#00CEC8`,
                        labelColor: (opacity = 1) => `#B9B9B9`,
                        style: {
                            borderRadius: 16,
                            alignSelf:'center',
                        },
                        propsForDots: {
                            r: "4",           
                            strokeWidth: "1",
                            stroke: "#B9B9B9",
                            
                        }
                    }}
                    data={{
                        labels: ["Sat", "Sun", "Mon", "Tus", "Wen", "Thr", "Fri"],
                        datasets: [
                            {
                                data: [
                                    10,
                                    20,
                                    30,
                                    20,
                                    80,
                                    10,
                                    0
                                ]
                            }
                        ]
                    }}
                />
                <View style={{ height: 20 }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default AnalyticsScreen