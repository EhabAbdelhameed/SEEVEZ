import { View, Text } from 'react-native'
import React, { useState } from 'react'
import InputView from 'components/molecules/Input'
import { Input } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { selectLang } from 'src/redux/lang';
import { useSelector } from 'react-redux';
const AddCaption = ({
    caption,
    setCaption
}: {
    caption: string;
    setCaption: (str: string) => void;
}) => {
    const lang = useSelector(selectLang);

    const {t, i18n} = useTranslation();
    return (
        <Input
            placeholder={t('Add caption')}
            value={caption}
            placeholderTextColor={'#979797'}
            style={{
                borderBottomWidth: 0,
            }}
            inputContainerStyle={{
                borderRadius: 12,
                borderColor: '#1D5EDD',
                borderWidth: .8,
                paddingHorizontal: 15,
                paddingVertical: 4,
                borderBottomWidth: .5,
            }}
            inputStyle={{
                fontSize: 14,
                textAlign:lang=='ar'?'right':'left'
            }}
            containerStyle={{
                paddingHorizontal: 0,
                marginVertical: 1,
                height: 70,
                marginTop: 20,
            }}
            onChangeText={(text: string) => {
                console.log(text)
                setCaption(text)
            }}
        />
    )
}

export default AddCaption