import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles'
import { RenderSvgIcon } from 'components/atoms/svg'
import { appColors } from 'theme'

const ContainerHeader = ({
    multiSelect,
    setMultiSelect,
    setTypeSelect,
    typeSelect
}: {
    multiSelect: boolean;
    setMultiSelect: (str: any) => void;
    typeSelect: "Gallery" | "Camera";
    setTypeSelect: (str: "Gallery" | "Camera") => void;
}) => {
    const [opened, setOpened] = useState(false)
    return (
        <View style={styles.containerHeader}>
            <TouchableOpacity style={[styles.leftSide, {
                borderBottomLeftRadius: opened ? 0 : 20,
                borderBottomRightRadius: opened ? 0 : 20
            }]}
                onPress={() => {
                    setOpened((prev: boolean) => !prev)
                }}
            >
                <Text style={styles.text1}>{typeSelect}</Text>
                <View style={{ transform: [{ rotate: opened ? "90deg" : "-90deg" }] }}>
                    <RenderSvgIcon
                        icon='ARROWBACK'
                        color={appColors.primary}
                    />
                </View>
                {opened && <TouchableOpacity style={styles.absItems}
                    onPress={() => {
                        setOpened((prev: boolean) => false)
                        setTypeSelect((str: any) => str == "Gallery" ? "Camera" : "Gallery")
                    }}
                >
                    <Text style={styles.text1}>{typeSelect != "Camera" ? "Camera" : "Gallery"}</Text>
                </TouchableOpacity>}
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightSide}
                onPress={() => {
                    setMultiSelect((prev: boolean) => !prev)
                }}
            >
                <RenderSvgIcon
                    icon='PIC'
                    color={appColors.primary}
                />
                <Text style={styles.text1}>Select {multiSelect ? "single" : "multiple"}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ContainerHeader