import {
    View,
    Text,
    Image,
    Alert,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import { RenderSvgIcon } from '../../../Components/atoms/svg';
import { Formik } from 'formik';
import InputView from '../../../Components/molecules/Input';
import Button from '../../../Components/molecules/Button';
import DonotHaveAccountSection from '../../../Components/molecules/DonotHaveAccountSection';
import AuthTopSection from '../../../Components/molecules/AuthTopSection';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { appColors } from '../../../theme/appColors';
import Video from 'react-native-fast-video';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Verification = () => {
    const navigation=useNavigation()
    return (
        <SafeAreaView edges={['top']} style={styles.container}>

            {/* <View style={styles.container}> */}
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    // alignItems: "center",
                    // paddingBottom: 30,
                    backgroundColor: appColors.bg,

                }}
                enableOnAndroid={true}
                keyboardShouldPersistTaps={"handled"}
                enableResetScrollToCoords={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../../assets/images/Verification.png')}
                        style={styles.img}
                    />

                </View>
                <View style={styles.bottomSection}>
                    <RenderSvgIcon icon="CIRCLECV" width={64} height={32}
                        style={{ position: "absolute", top: -15, alignSelf: "center" }}
                    />
                    <View style={styles.loginTextContainer}>
                        <View>
                            <RenderSvgIcon icon="ICON2CV" width={32} height={48} />
                        </View>
                        <RenderSvgIcon
                            icon='LOGOWITHTITLE'
                            width={170}
                            height={90}
                        />
                        <View>
                            <RenderSvgIcon
                                icon="ICONCV"
                                width={40}
                                height={48}

                            />
                        </View>
                    </View>

                    <Text style={styles.verificationText}>Verification</Text>
                    <Text style={styles.verificationText2}>We will send you a one-time password on this  email Address : exampel@info.com</Text>
                    <Formik
                        initialValues={{ otp: '', }}
                        onSubmit={values => {
                            navigation.navigate("ResetPassword")
                        }}>
                        {(props: any) => (
                            <View>
                                <InputView
                                    name="otp"
                                    placeholder="Your OTP Code"
                                    props={props}
                                />


                                <Button text="Activate the account" onPress={props.handleSubmit} />
                            </View>
                        )}
                    </Formik>
                    <Text style={styles.resendCode}>Resend the code</Text>
                    <View style={{ height: 50 }} />
                </View>
            </KeyboardAwareScrollView>
            {/* </View> */}
        </SafeAreaView>
    );
};

export default Verification;
