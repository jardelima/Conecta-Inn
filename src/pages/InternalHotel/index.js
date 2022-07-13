import React from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Image,
    ScrollView } 
from "react-native";
import Header from "../components/Header";
import styles from "./style";
import globalStyles from "../components/globalStyle/style";
import InternalLinkItem from "../components/InternalLinkItem";

export default function InternalHotel({ navigation, route }) {
    const { 
        localName, 
        localAddress, 
        upQtdProduct,
        listProducts,
    } = route.params;

    return (
        <View>
            <Header 
                src={require("../../assets/icons/menu.png")} 
                openDrawerMenu="true"
            />

            <View style={styles.container}>
                <ScrollView style={styles.containerScroll}>
                    <TouchableOpacity 
                        style={globalStyles.buttonReturn}
                        onPress={() => {navigation.goBack()}}
                    >
                        <Image 
                            style={globalStyles.buttonReturnImage}
                            source={require("../../assets/icons/arrow-left.png")}
                        />
                    </TouchableOpacity>

                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{localName}</Text>
                        <View style={styles.subtitleContainer}>
                            <Image 
                                style={styles.subtitleImage}
                                source={require("../../assets/icons/map-pin.png")}
                            />
                            <Text style={styles.subtitleText}>
                                {localAddress}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.linksContainer}>
                        <View style={styles.linksRow}>
                            <InternalLinkItem
                                src={require("../../assets/icons/book.png")}
                                title="Cardápio"
                                link={() => navigation.navigate("InternalMenu", {localName, localAddress, upQtdProduct})}
                            />

                            <InternalLinkItem
                                src={require("../../assets/icons/tour.png")}
                                title="Passeios"
                                link={() => navigation.navigate("InternalTour", {localName, localAddress, upQtdProduct})}
                            />
                        </View>

                        <View style={styles.linksRow}>
                            <InternalLinkItem
                                src={require("../../assets/icons/restaurants.png")}
                                title="Restaurantes"
                                link={() => console.log("colocar link para interna de restaurantes")}
                            />

                            <InternalLinkItem
                                src={require("../../assets/icons/night.png")}
                                title="Night"
                                link={() => console.log("colocar link para interna de night")}
                            />
                        </View>
                    </View>

                    <View>
                        <View style={styles.checkIn}>
                            <Text style={styles.checkInTitle}>Check-in</Text>
                            <Text style={styles.checkInText}>Sexta-feira, 25 de Fevereiro de 2022</Text>
                        </View>

                        <Image 
                            source={require("../../assets/icons/qtd-days.png")}
                        />

                        <View style={styles.checkOut}>
                            <Text style={styles.checkOutTitle}>Check-out</Text>
                            <Text style={styles.checkOutText}>Domingo, 27 de Fevereiro de 2022</Text>
                        </View>
                    </View>
                </ScrollView>
                
                <TouchableOpacity 
                    style={styles.btnCheckIn}    
                    onPress={() => {
                        navigation.navigate("CheckIn", {
                            localName, 
                            localAddress, 
                            upQtdProduct,
                            listProducts,
                        })
                    }}
                >
                    <Text style={styles.btnCheckInText}>Check-in</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
