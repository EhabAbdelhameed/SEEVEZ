import { View, Text, Alert } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import { Formik } from 'formik'
import InputView from 'components/molecules/Input'
import Button from 'components/molecules/Button'
import { ADDONTHEROPTION } from 'assets/Svgs'
import DropDown from './DropDown'

const Form = () => {
    return (
        <View style={styles.formContainer}>
            <Text style={styles.textHeaderForm}>Create a poll</Text>
            <Formik
                initialValues={{ question: '', }}
                onSubmit={values => Alert.alert(JSON.stringify(values))}>
                {(props: any) => (
                    <View>
                        <View>
                            <Text style={styles.label}>Your question</Text>
                            <InputView
                                name="question"
                                placeholder="Write here.."
                                props={props}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>Option 1</Text>
                            <InputView
                                name="option1"
                                placeholder="Write here.."
                                props={props}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>Option 2</Text>
                            <InputView
                                name="option2"
                                placeholder="Write here.."
                                props={props}
                            />
                        </View>
                        <View style={styles.AddOptionContainer}>
                            <ADDONTHEROPTION />
                            <Text style={styles.text2}>Add another option</Text>
                        </View>
                        <View>
                            <Text style={styles.label}>Pull duration</Text>
                            <DropDown />
                        </View>
                        <View style={{marginVertical:10,marginBottom:20}}>
                        <Text style={[styles.text1]}>
                            Lorem ipsum dolor sit amet consectetur. Ac orci congue a sagittis nunc nibh. Vulputate id a posuere tortor tellus dis vulputate auctor.
                        </Text>
                        </View>
                        <Button text="Log in" onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default Form