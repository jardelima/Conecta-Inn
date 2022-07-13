import React, {useState, useEffect} from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";

import styles from "./style";
import Header from "../components/Header";
import globalStyles from "../components/globalStyle/style";

export default function Extract({ navigation, route }) {
    const { 
        localName, 
        localAddress, 
        upQtdProduct,
        listProducts,
    } = route.params;

    const [list, setList] = React.useState([]);

    React.useEffect(() => setList(listProducts));

    const sumOfProducts = (valueProduct, qtdProduct) => {
        let cleanValueProduct = Number(valueProduct.replace("R$ ", "").replace(",", "."));
    
        return `R$ ${(cleanValueProduct * qtdProduct).toFixed(2).replace(".", ",")}`
    }

    const subtotal = () => {
        let subtotal = 0;

        list.forEach(product => {
            subtotal += Number(product.valueProduct.replace("R$", "").replace(",", ".")) * product.qtdProduct
        });

        return `R$ ${subtotal.toFixed(2).replace(".", ",")}`
    }

    const delivery = () => {
        // Deixei como function pois nao sei se vai haver algum calculo para o frete
        let subtotal = 0;
        let deliveryProduct = 0;

        list.forEach(product => {
            deliveryProduct = product.deliveryProduct;

            subtotal += Number(product.valueProduct.replace("R$", "").replace(",",".")) * product.qtdProduct;
        });
        
        if(subtotal > 0) {
            return deliveryProduct;
        } else {
            return "R$ 0,00";
        }
    }

    const total = () => {
        let subtotal = 0;
        let deliveryProduct = 0;

        list.forEach(product => {
            deliveryProduct = Number(product.deliveryProduct.replace("R$", "").replace(",", "."));
            subtotal += Number(product.valueProduct.replace("R$", "").replace(",", ".")) * product.qtdProduct
        });

        if(subtotal > 0) {
            return `R$ ${Number(subtotal + deliveryProduct).toFixed(2).replace(".", ",")}`
        } else {
            return "R$ 0,00";
        }
    }

    return (
        <View style={styles.container}>
            <Header 
                src={require("../../assets/icons/menu.png")} 
                openDrawerMenu="true"
            />

            <View style={styles.containerButton}>
                <TouchableOpacity 
                    style={globalStyles.buttonReturn}
                    onPress={() => {
                        navigation.navigate("CheckOut", {
                            localName, 
                            localAddress, 
                            upQtdProduct,
                            listProducts,
                        })
                    }}
                >
                    <Image 
                        style={globalStyles.buttonReturnImage}
                        source={require("../../assets/icons/arrow-left.png")}
                    />
                </TouchableOpacity>  
            </View>

            <View style={[styles.content, styles.titles]}>
                <Text style={styles.title}>Extrato</Text>

                <TouchableOpacity 
                    onPress={() => {
                        navigation.navigate("Chat", {
                            chatInExtract: true,
                            localName, 
                            localAddress, 
                            upQtdProduct,
                            listProducts,
                        })
                    }}
                >
                    <Text style={styles.clean}>Suporte</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.content}>
                    {list !== undefined && Object.values(list).length > 0 ?
                        list.map((product, index) => {
                            return (
                                <View key={index} style={styles.item}>
                                    <View style={styles.itemImage}>
                                        <Image 
                                            source={product.imgProduct}
                                        />
                                        <Text style={styles.itemQtd}>{product.qtdProduct}</Text>
                                    </View>
                
                                    <View style={styles.itemInfoContainer}>
                                        <Text style={styles.nameProduct}>{product.nameProduct}</Text>
                
                                        <View style={styles.itemInfo}>
                                            <Text style={styles.widthProduct}>{product.widthProduct}</Text>
                                            <Text style={styles.valueProduct}>{sumOfProducts(product.valueProduct, product.qtdProduct)}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                        : 
                        <Text style={styles.emptyBag}>Sacola vazia</Text>
                    }

            </ScrollView>

            <View style={styles.cartContainer}>
                <View style={styles.content}>
                    <View style={styles.prices}>
                        <Text style={styles.subtotalText}>Subtotal</Text>
                        <Text style={styles.subtotalText}>{list !== undefined ? subtotal() : "R$ 0,00"}</Text>
                    </View>
                    <View style={styles.prices}>
                        <Text style={styles.deliveryText}>Taxa de entrega</Text>
                        <Text style={styles.deliveryText}>{list !== undefined ? delivery() : "R$ 0,00"}</Text>
                    </View>
                    <View style={[styles.prices, styles.total]}>
                        <Text style={styles.totalText}>Total</Text>
                        <Text style={styles.totalText}>{list !== undefined ? total() : "R$ 0,00"}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.buttonCart}
                    onPress={() => {
                        navigation.navigate("CheckOut", {
                            localName, 
                            localAddress, 
                            upQtdProduct,
                            listProducts,
                        })
                    }}
                >
                    <Text style={styles.buttonCartText}>Check-out</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
