import React from "react";
import { 
    View, 
    Text, 
    StatusBar,
    TouchableOpacity, 
    Image,
} from "react-native";

import globalStyles from "../../components/globalStyle/style";
import styles from "./style";

export default function ForgotPasswordSuccess({ navigation }) {
    return (
        <View>
            <StatusBar backgroundColor="#7D81D2" barStyle="light-content" />

            <View style={[globalStyles.container, styles.container]}>
                <TouchableOpacity 
                    style={styles.exit}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Image 
                        style={styles.exitImage}
                        source={require("../../../assets/icons/exit.png")}
                    />
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <View>
                        <Text style={styles.title}>Sua senha foi</Text> 
                        <Text style={styles.title}>alterada com sucesso!</Text>
                    </View>
                    
                    <Text style={styles.subtitle}>
                        Agora você já pode realizar o login em sua conta utilizando a senha que você acabou de criar. 
                    </Text>
                </View>

                <TouchableOpacity
                    style={globalStyles.buttonSecondary} 
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={globalStyles.buttonSecondaryText}>Fazer login</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
