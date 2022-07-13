import React, { useState, useEffect } from "react"
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput, 
    Pressable, 
    Keyboard,
    Image } 
from "react-native";

//Puxando o estilo da Register Stage One
import styles from "../RegisterStageOne/style";
import globalStyles from "../../components/globalStyle/style";

export default function RegisterStageTwo({ navigation }) {
    const [lastName, setLastName] = React.useState("");
    const [errorLastName, setErrorLastName] = React.useState(null);
    const [isFocused, setIsFocused] = React.useState(false);

    useEffect(() => setErrorLastName(null), [lastName]);

    const verificationInputs = () => {
        if (lastName == "") {
            setErrorLastName("Preencha sueu sobrenome.");
        } else {
            setErrorLastName(null);
            navigation.navigate("RegisterStageThree");
        }
    }

    return (
        <Pressable onPress={Keyboard.dismiss} style={[globalStyles.container, styles.container]}>
            <View>
                <Text style={globalStyles.title}>Qual seu sobrenome?</Text>

                <Text style={styles.description}>
                    Informe o seu sobrenome.
                </Text>

                <TextInput 
                    onChangeText={setLastName}
                    value={lastName}
                    style={[
                        styles.input, 
                        {borderColor: isFocused ? "#E06E78" : "#CED4DA80"},
                    ]}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    keyboardType="default"
                    underlineColorAndroid="transparent"
                    autoCorrect={false}
                />
                {errorLastName && <Text style={globalStyles.errorMessage}>{errorLastName}</Text>}
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
