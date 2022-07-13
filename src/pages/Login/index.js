import React, {useState, useEffect} from "react";
import { 
    View, 
    Text, 
    StatusBar, 
    TouchableOpacity,
    Pressable,
    Keyboard,  
    TextInput,
    Image,
} from "react-native";

import styles from "./style";
import globalStyles from "../components/globalStyle/style"

export default function Login({ navigation }) {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorEmail, setErrorEmail] = React.useState(null);
    const [errorPassword, setErrorPassword] = React.useState(null);
    const [isFocusedEmail, setIsFocusedEmail] = React.useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = React.useState(false);
    const [showPass, setShowPass] = React.useState(true);

    useEffect(() => setErrorEmail(null), [email]);
    useEffect(() => setErrorPassword(null), [password]);

    const verificationInputs = () => {
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

        if (email == "" || !regexEmail.test(email)) {
            setErrorEmail("Preencha um e-mail válido.");
        } else {
            setErrorEmail(null);
        } if (password == "") {
            setErrorPassword("Preencha sua senha.");
        } else {
            setErrorPassword(null);
            navigation.navigate("RoutesDrawer", { screen: "Dashboard" });
        }
    }

    return (
        <View>
            <StatusBar backgroundColor="#fff" barStyle="dark-content"/>

            <Pressable onPress={Keyboard.dismiss} style={globalStyles.container}>
                <View style={styles.form}>
                    <Text style={styles.title}>Seja bem-vindo!</Text>

                    <View style={styles.inputField}>
                        <Text style={styles.label}>E-mail</Text>

                        <TextInput 
                            onChangeText={setEmail}
                            value={email}
                            style={[
                                styles.input, 
                                {borderColor: isFocusedEmail ? "#E06E78" : "#CED4DA80"},
                            ]}
                            onFocus={() => setIsFocusedEmail(true)}
                            onBlur={() => setIsFocusedEmail(false)}
                            keyboardType="email-address"
                            underlineColorAndroid="transparent"
                            autoCorrect={false}
                            autoCapitalize="none"
                        />
                        {errorEmail && <Text style={globalStyles.errorMessage}>{errorEmail}</Text>}
                    </View>

                    <View style={styles.inputField}>
                        <Text style={styles.label}>Senha</Text>

                        <View style={globalStyles.inputArea}>
                            <TextInput 
                                onChangeText={setPassword}
                                value={password}
                                style={[
                                    styles.input, 
                                    {borderColor: isFocusedPassword ? "#E06E78" : "#CED4DA80"},
                                ]}
                                onFocus={() => setIsFocusedPassword(true)}
                                onBlur={() => setIsFocusedPassword(false)}
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
                                    source={require("../../assets/icons/eye.png")}
                                />
                            </TouchableOpacity>
                        </View>
                        {errorPassword && <Text style={globalStyles.errorMessage}>{errorPassword}</Text>}
                    </View>

                    <TouchableOpacity 
                        style={styles.forgotPassword} 
                        onPress={() => navigation.navigate("ForgotPasswordStageOne")}
                    >
                        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
                    </TouchableOpacity>

                    {isFocusedEmail || isFocusedPassword ? false 
                    : 
                        <TouchableOpacity 
                            style={globalStyles.buttonPrimary} 
                            onPress={() => verificationInputs()}
                        >
                            <Text style={globalStyles.buttonPrimaryText}>Acessar</Text>
                        </TouchableOpacity>
                    }
                </View>

                <View style={styles.register}>
                    <Text style={styles.registerMessage}>Ainda não tem uma conta?</Text>
                    
                    <TouchableOpacity 
                        style={styles.registerButton} 
                        onPress={() => navigation.navigate("RegisterStageOne")}
                    >
                        <Text style={styles.registerButtonText}>Cadastre-se agora gratuitamente!</Text>
                    </TouchableOpacity>
                </View> 
            </Pressable>
        </View>
    )
}
