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

export default function RegisterStageFour({ navigation }) {
    const [password, setPassword] = React.useState("");
    const [errorPassword, setErrorPassword] = React.useState(null);
    const [isFocused, setIsFocused] = React.useState(false);
    const [showPass, setShowPass] = React.useState(true);

    useEffect(() => setErrorPassword(null), [password]);

    const verificationInputs = () => {
        if (password == "") {
            setErrorPassword("Preencha sua senha.");
        } else {
            setErrorPassword(null);
            navigation.navigate("RegisterStageFive", { currentPassword: password});
        }
    }

    return (
        <Pressable onPress={Keyboard.dismiss} style={[globalStyles.container, styles.container]}>
            <View>
                <Text style={globalStyles.title}>Qual será sua senha?</Text>

                <Text style={styles.description}>
                    Lorem ipsum is placeholder text commonly used 
                    in the graphic
                </Text>

                <View style={globalStyles.inputArea}>
                    <TextInput 
                        onChangeText={setPassword}
                        value={password}
                        style={[
                            styles.input, 
                            {borderColor: isFocused ? "#E06E78" : "#CED4DA80"},
                        ]}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        keyboardType="default"
                        underlineColorAndroid="transparent"
                        autoCorrect={false}
                        autoCapitalize="none"
                        secureTextEntry={showPass}
                    />

                    <TouchableOpacity 
                        style={globalStyles.iconPassword}
                        onPress={() => setShowPass(!showPass)}
                    >
                        <Image 
                            source={require("../../../assets/icons/eye.png")}
                        />
                    </TouchableOpacity>
                </View>
                {errorPassword && <Text style={globalStyles.errorMessage}>{errorPassword}</Text>}
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
