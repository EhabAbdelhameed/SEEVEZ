import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Header from './components/Header'
import Toast from 'react-native-toast-message';
import Footer from './components/Footer';
// import htmlCv from "./components/cv.html"
// const htmlCv = require('./components/cv.html')
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { source } from './components/cvSource';
import CVRN from './components/CVSections';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { selectUser } from 'src/redux/auth';
import AppThunks from 'src/redux/app/thunks';

const Cv = () => {
    const dispatch = useAppDispatch()
    const [isLoading, setIsLoading] = useState(false);
    const [count, setCount] = useState(1);
    const User = useAppSelector(selectUser)
    React.useEffect(() => {
        dispatch(AppThunks.GetProfileInfo())
    }, [])
    const onGenerate = async () => {
        try {
            // const options = {
            //     // html: source.html,
            //     fileName: `invoice_${count}`,
            //     directory: 'Invoices',
            // };
            const file = await RNHTMLtoPDF.convert({
                html: source(User),
                fileName: `invoice_${count}`,
                directory: 'Invoices',
                bgColor: "#fff",
                base64: false,
            });
            Toast.show({
                type: 'success',
                text1: 'CV downloaded successfully',
              });
            console.log('====================================');
            console.log(file.filePath);
            console.log('====================================');
            setCount(count + 1);
            setIsLoading(false);
        } catch (error: any) {
            // Alert.alert('Error', error.message);
        }
    };

    if (isLoading) {
        return <Text>Generating PDF...</Text>;
    }

    return (
        <SafeAreaView edges={['top']} style={styles.container}>
            <Header />
            <CVRN />
            {/* <RenderHtml source={source} /> */}
            <Footer onGenerate={onGenerate} />
        </SafeAreaView>
    )
}

export default Cv