import React, {useState, useEffect} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView, 
    StatusBar,
}
    from "react-native";
import Header from "../components/Header";
import styles from "./style";
import globalStyles from "../components/globalStyle/style";
import InternalLinkItem from "../components/InternalLinkItem";

export default function CheckOut({ navigation, route }) {
    const { localName, localAddress, upQtdProduct, listProducts } = route.params;
    const [total, setTotal] = React.useState("");
    const [modal, setModal] = React.useState(false);

    React.useEffect(() => {
        if(listProducts !== undefined) {
            if(Object.values(listProducts).length > 0) {
                let totalProducts;
                let sumProducts = 0;
                let deliveryProduct = 0;
        
                Object.values(listProducts).forEach(product => {
                    sumProducts += Number(product.valueProduct.replace("R$", "").replace(",", ".")) * product.qtdProduct;
        
                    deliveryProduct = Number(product.deliveryProduct.replace("R$", "").replace(",", "."));
        
                    totalProducts = String((sumProducts + deliveryProduct).toFixed(2)).replace(".", ",");
                });

                setTotal(totalProducts);
            } else {
                setTotal("0,00");
            } 
        } else {
            setTotal("0,00");
        }
    });

    return (
        <View style={styles.container}>
            <Header
                src={require("../../assets/icons/menu.png")}
                openDrawerMenu="true"
            />
            <StatusBar backgroundColor={modal ? "#4b4d7e" : "#7D81D2"}/>

            <ScrollView style={styles.containerScroll}>
                <TouchableOpacity
                    style={globalStyles.buttonReturn}
                    onPress={() => { navigation.navigate("CheckIn", {
                        localName, 
                        localAddress, 
                        upQtdProduct, 
                        listProducts 
                    })}}
                >
                    <Image
                        style={globalStyles.buttonReturnImage}
                        source={require("../../assets/icons/arrow-left.png")}
                    />
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{ localName }</Text>

                    <View style={styles.subtitleContainer}>
                        <Image
                            style={styles.subtitleImage}
                            source={require("../../assets/icons/map-pin.png")}
                        />
                        <Text style={styles.subtitleText}>
                            { localAddress }
                        </Text>
                    </View>

                    <View style={styles.subtitleContainer}>
                        <Image
                            style={styles.subtitleImage}
                            source={require("../../assets/icons/room.png")}
                        />
                        <Text style={styles.subtitleText}>
                            Quarto 20 - Andar 2
                        </Text>
                    </View>

                    <TouchableOpacity 
                        style={styles.buttonWifi}
                        onPress={() => setModal(true)}
                    >
                        <Image source={require("../../assets/icons/wifi.png")}/>
                        <Text style={styles.buttonWifiText}>Wi-fi</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.expensesContainer}>
                    <View>
                        <Text style={styles.expensesTitle}>Despesas</Text>
                    </View>
                    <View style={styles.extractContainer}>
                        <Text style={styles.expensesTotal}>Total R$ {total}</Text>
                        <TouchableOpacity
                            style={styles.extractButton}
                            onPress={() => {
                                navigation.navigate("Extract", {
                                    localName, 
                                    localAddress, 
                                    upQtdProduct,
                                    listProducts,
                                })
                            }}
                        >
                            <Text style={styles.extractText}>Extrato</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.linksContainer}>
                    <View style={styles.linksRow}>
                        <InternalLinkItem
                            src={require("../../assets/icons/book.png")}
                            title="Cardápio"
                            link={() => {
                                navigation.navigate("InternalMenu", {
                                    localName, 
                                    localAddress, 
                                    upQtdProduct,
                                    listProducts,
                                    checkOut: true,
                                })
                            }}
                        />

                        <InternalLinkItem
                            src={require("../../assets/icons/tour.png")}
                            title="Passeios"
                            link={() => {
                                navigation.navigate("InternalTour", {
                                    localName, 
                                    localAddress, 
                                    upQtdProduct,
                                    listProducts,
                                    checkOut: true,
                                })
                            }}
                        />
                    </View>

                    <View style={styles.linksRow}>
                        <InternalLinkItem
                            src={require("../../assets/icons/restaurants.png")}
                            title="Restaurantes"
                        />

                        <InternalLinkItem
                            src={require("../../assets/icons/night.png")}
                            title="Night"
                        />
                    </View>
                </View>

                <View>
                    <View style={styles.checkIn}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.checkInTitle}>Check-in</Text>
                            <Image
                                source={require("../../assets/icons/check-in-ok.png")}
                                style={{ marginLeft: 5 }}
                            />
                        </View>
                        <Text style={styles.checkInText}>Sexta-feira, 25 de Fevereiro de 2022</Text>
                    </View>

                    <Image
                        source={require("../../assets/icons/qtd-days.png")}
                    />

                    <View style={[styles.checkIn, {marginBottom: 30}]}>
                        <Text style={styles.checkInTitle}>Check-out</Text>
                        <Text style={styles.checkInText}>Domingo, 27 de Fevereiro de 2022</Text>
                    </View>
                </View>
            </ScrollView>

            <View style={{padding: 20, paddingHorizontal: 20,}}>
                <TouchableOpacity
                    style={styles.btnCheckIn}
                    onPress={() => {
                        navigation.navigate("Payment", {
                            localName, 
                            localAddress, 
                            upQtdProduct,
                            listProducts,
                        })
                    }}
                >
                    <Text style={styles.btnCheckInText}>Check-out</Text>
                </TouchableOpacity>
            </View>

            {modal ? 
                <View style={styles.modal} onPress={() => setModal(false)}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity
                            style={styles.exitButton}
                            onPress={() => setModal(false)}
                        >
                            <Text style={styles.exitText}>x</Text>
                        </TouchableOpacity>

                        <Text style={styles.title}>Wi-fi</Text>

                        <View style={styles.fieldWifi}>
                            <Text style={styles.fieldWifiTitle}>Rede</Text>
                            <Text style={styles.fieldWifiName}>HotelVilaGale_Hospedes</Text>
                        </View>

                        <View style={styles.fieldWifi}>
                            <Text style={styles.fieldWifiTitle}>Login</Text>
                            <Text style={styles.fieldWifiName}>VilaGale_Hospede</Text>
                        </View>

                        <View style={[styles.fieldWifi, {marginBottom: 0}]}>
                            <Text style={styles.fieldWifiTitle}>Senha</Text>
                            <Text style={styles.fieldWifiName}>HospedeQuarto20_VG</Text>
                        </View>
                    </View>
                </View>
            :
                false
            }
        </View>
    )
}
