import React, { useState, useEffect } from "react"
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput, 
    Pressable, 
    Keyboard } 
from "react-native";

import styles from "../RegisterStageOne/style";
import globalStyles from "../../components/globalStyle/style";

export default function RegisterStageThree({ navigation }) {
    const [email, setEmail] = React.useState("");
    const [errorEmail, setErrorEmail] = React.useState(null);
    const [isFocused, setIsFocused] = React.useState(false);

    useEffect(() => setErrorEmail(null), [email]);

    const verificationInputs = () => {
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

        if (email == "" || !regexEmail.test(email)) {
            setErrorEmail("Preencha um e-mail válido.");
            return false;
        } else {
            setErrorEmail(null);
            navigation.navigate("RegisterStageFour");
            return true;
        }
    }

    return (
        <Pressable onPress={Keyboard.dismiss} style={[globalStyles.container, styles.container]}>
            <View>
                <Text style={globalStyles.title}>Qual seu E-mail?</Text>

                <Text style={styles.description}>
                    Assim conseguimos encontrar a conta 
                    que está vinculada ao E-mail informado.
                </Text>

                <TextInput 
                    onChangeText={setEmail}
                    value={email}
                    style={[
                        styles.input, 
                        {borderColor: isFocused ? "#E06E78" : "#CED4DA80"},
                    ]}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    keyboardType="email-address"
                    underlineColorAndroid="transparent"
                    autoCorrect={false}
                    autoCapitalize="none"
                />
                {errorEmail && <Text style={globalStyles.errorMessage}>{errorEmail}</Text>}
            </View>

            <TouchableOpacity 
                style={globalStyles.buttonPrimary}
                onPress={() => verificationInputs()}
            >
                <Text style={globalStyles.buttonPrimaryText}>Avançar</Text>
            </TouchableOpacity>
        </Pressable>
    )
}
