import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

import styles from "./style";
import Header from "../Header";
import globalStyles from "../globalStyle/style"

export default function DrawerContent({ navigation }) {

    return (
        <>
            <Header
                src={require("../../../assets/icons/exit.png")}
                openDrawerMenu="false"
            />
            <View style={styles.containerMenu}>
                <View>
                    <Text style={styles.title}>Olá, Amigo!</Text>

                    <View>
                        <TouchableOpacity>
                            <Text style={styles.item}>Meus dados</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.item}>Reservas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.item}>Hoteis</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.item}>FAQ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[styles.item, styles.lastItem]}>Ajuda</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Checkout',
                            {
                                localName: "Hotel Vila Galé Fortaleza",
                                localAddress: "Av. Dioguinho, 4189 - Praia do Futuro",
                            })}>
                            <Text style={[styles.item, styles.lastItem]}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                    style={globalStyles.buttonSecondary}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={globalStyles.buttonSecondaryText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </>

    )
}
