import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from 'src/globalStyle'
import { useNavigation, useRoute } from '@react-navigation/native'
import Video from 'react-native-fast-video'
import { styles } from './styles'
import { videoSource } from 'screens/App/Reels/fucntions/helper'
import { appColors } from 'theme'
import { RenderSvgIcon } from 'components/atoms/svg'
import { CV, PULL } from 'assets/Svgs'
import Footer from './components/Footer'

const CreateVideo2 = () => {
    const params = useRoute()
    const { video }: any = params
    const navigation = useNavigation()
    return (
        <SafeAreaView edges={['top']} style={[globalStyles.screen, {
            backgroundColor: appColors.black
        }]}>
            <View
                style={styles.container}
            >
                <View style={styles.topContainer}>
                    <TouchableOpacity style={styles.skipContainer}
                        onPress={() => {
                            navigation.goBack()
                        }}
                    >
                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                    <View style={styles.rightContainer}>
                        <RenderSvgIcon
                            icon='WHO'
                        />
                        <Text style={styles.skipText}>Averyone</Text>
                        <View
                            style={{
                                transform: [{
                                    rotate: "-90deg"
                                }]
                            }}
                        >
                            <RenderSvgIcon
                                icon='ARROWBACK'
                            />
                        </View>
                    </View>
                </View>
                <Video
                    resizeMode="contain"
                    repeat
                    source={{ uri: video || videoSource }}
                    style={styles.video}
                    paused={true}

                />
              
                <View style={styles.bottomContainer}>
                    <View style={styles.bottomStartContainer}>
                        <TouchableOpacity style={[styles.leftBtn,{
                            backgroundColor: appColors.lightGreen3
                        }]}
                        onPress={()=>{
                            navigation.navigate("CreatePull")
                        }}
                        >
                            <PULL/>
                            <Text style={styles.text1}>Pull</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.leftBtn}>
                            <CV/>
                            <Text style={styles.text1}>CV</Text>
                        </TouchableOpacity>
                    </View>
                    <Footer/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CreateVideo2