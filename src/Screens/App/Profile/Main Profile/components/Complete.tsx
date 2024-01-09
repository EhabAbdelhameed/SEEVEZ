import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appColors } from '../../../../../theme/appColors'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'
import ProgressBar from '../../../../../Components/molecules/Progress'

const Complete = () => {
    return (
        <View style={styles.CardContainer}>
            <View style={styles.RowBetween}>
                <View>
                    <Text style={styles.Title}>Complete your profile</Text>
                    <Text style={styles.Des}>Lorem ipsum dolor sit amet consectetur.</Text>
                </View>
                <RenderSvgIcon icon='ARROWBACK' style={{ transform: [{ rotate: '180deg' }] }} width={25} height={25} color={appColors.primary} />
            </View>
            <ProgressBar persentage={46} />
        </View>
    )
}

export default Complete

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: appColors.bg,
    },
    PaddingContainer: {
        paddingHorizontal: 20
    },
    CardContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: '100%',
        backgroundColor: appColors.white,
        borderRadius: 25
    },
    RowBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Title: {
        fontSize: 16,
        fontWeight: '700',
        color: appColors.black
    },
    Des: {
        fontSize: 12,
        fontWeight: '400',
        color: appColors.black
    }
})