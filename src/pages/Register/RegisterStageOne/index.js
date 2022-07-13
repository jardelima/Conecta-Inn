import React, { useState, useEffect } from "react"
import { 
    View, 
    Text,
    TextInput,
    Pressable,
    Keyboard,
    TouchableOpacity,
} from "react-native";

import styles from "./style";
import globalStyles from "../../components/globalStyle/style";

export default function RegisterStageOne({ navigation }) {
    const [name, setName] = React.useState("");
    const [errorName, setErrorName] = React.useState(null);
    const [isFocused, setIsFocused] = React.useState(false);

    useEffect(() => setErrorName(null), [name]);

    const verificationInputs = () => {
        if (name == "") {
            setErrorName("Preencha seu primeiro nome.");
            return false;
        } else {
            setErrorName(null);
            navigation.navigate("RegisterStageTwo");
            return true;
        }
    }

    return (
        <Pressable onPress={Keyboard.dismiss} style={[globalStyles.container, styles.container]}>
            <View>
                <Text style={globalStyles.title}>Qual seu nome?</Text>

                <Text style={styles.description}>
                    Informe o seu primeiro nome.
                </Text>

                <TextInput 
                    onChangeText={setName}
                    value={name}
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
                {errorName && <Text style={globalStyles.errorMessage}>{errorName}</Text>}
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
