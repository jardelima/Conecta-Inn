import React from "react";
import { 
    View, 
    Text, 
    ScrollView } 
from "react-native";

import Header from "../components/Header";
import ReservationItem from "../components/ReservationItem";
import styles from "./style";

export default function Dashboard({ navigation }) {
    return (
        <View>
            <Header 
                src={require("../../assets/icons/menu.png")} 
                openDrawerMenu="true"
            />

            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.titleSmall}>Minhas</Text>
                    <Text style={styles.title}>Reservas</Text>
                </View>

                <ReservationItem 
                    image={require("../../assets/images/dashboard-local.png")}
                    firstDate="25"
                    firstMonth="Fev"
                    secondDate="27"
                    secondMonth="Fev"
                    localName="Hotel Vila Galé Fortaleza"
                    localAddress="Av. Dioguinho, 4189 - Praia do Futuro"
                    route={() => navigation.navigate("InternalHotel", 
                        {
                            localName: "Hotel Vila Galé Fortaleza", 
                            localAddress: "Av. Dioguinho, 4189 - Praia do Futuro",
                        })
                    }
                />

                <ReservationItem 
                    image={require("../../assets/images/dashboard-local2.png")}
                    firstDate="15"
                    firstMonth="Abr"
                    secondDate="20"
                    secondMonth="Abr"
                    localName="Hotel Vale das Pedras - Quixadá"
                    localAddress="Av. Jesus Maria e José, 2010 - Jardim Monolitos"
                    route={() => navigation.navigate("InternalHotel",
                        {
                            localName: "Hotel Vale das Pedras - Quixadá", 
                            localAddress: "Av. Jesus Maria e José, 2010 - Jardim Monolitos"
                        })
                    }
                />
            </ScrollView>
        </View>
    )
}
