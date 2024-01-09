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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { appColors } from '../../../theme/appColors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const ForgetPassword = () => {
    const navigation=useNavigation()
    return (
        <SafeAreaView edges={['top']} style={styles.container}>
            <View style={styles.container}>
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
                        <Image source={require('../../../assets/images/Otp.png')}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.bottomSection}>
                        <View style={styles.iconsContainer}>
                            <RenderSvgIcon icon="ICON2CV" width={32} height={48} />
                            <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
                            <RenderSvgIcon
                                icon="ICONCV"
                                width={40}
                                height={48}
                            />
                        </View>
                        <RenderSvgIcon icon="LOGOWITHTITLE" width={170} height={60}
                            style={{ alignSelf: "center", marginBottom: 10, marginTop: 0 }}
                        />

                        <Text style={styles.verificationText}>Forgot password ?</Text>
                        <Text style={styles.verificationText2}>We will send you a one-time password on your email.</Text>
                        <Formik
                            initialValues={{ email: '', }}
                            onSubmit={values =>navigation.navigate("Verification")}>
                            {(props: any) => (
                                <View>
                                    <InputView
                                        name="email"
                                        placeholder="Write your email"
                                        props={props}
                                        iconName={'RIGIHTININPUT'}
                                    />
                                    <Button text="Next" onPress={props.handleSubmit} />
                                </View>
                            )}
                        </Formik>
                        <View style={{ height: 50 }} />
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </SafeAreaView>


    );
};

export default ForgetPassword;
