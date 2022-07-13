import React, {useState, useEffect} from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";
import { useIsFocused } from '@react-navigation/native';

import styles from "./style";
import globalStyles from "../components/globalStyle/style";
import Header from "../components/Header";

export default function Cart({ navigation, route }) {
    const { 
        listProducts,
        checkOut,
        imgProduct,
        upQtdProduct,
        page,
        qtdProduct,
        nameProduct, 
        widthProduct, 
        valueProduct,
        localName, 
        localAddress, 
        imgSlideOne,
        imgSlideTwo,
        imgSlideThree,
        deliveryProduct,
        descriptionProduct,
    } = route.params;

    const [list, setList] = React.useState([]);
    const [clean, setClean] = React.useState(false);
    const isFocused = useIsFocused();

    React.useEffect(() => {
        const addItemsList = navigation.addListener("focus", () => {
            for(let index = 0; index < list.length; index++) {
                if(list[index].nameProduct == nameProduct) {
                    list.splice(index, 1)
                }
            }
    
            setList(
                [{
                    imgProduct: imgProduct,
                    qtdProduct: qtdProduct,
                    nameProduct: nameProduct,
                    widthProduct: widthProduct,
                    valueProduct: valueProduct,
                    deliveryProduct: deliveryProduct,
                }, ...list]
            )
    
            setClean(false)
        });

        return addItemsList;
    }, [navigation, isFocused])

    const sumOfProducts = (valueProduct, qtdProduct) => {
        let cleanValueProduct = Number(valueProduct.replace("R$ ", "").replace(",", "."));
    
        return `R$ ${(cleanValueProduct * qtdProduct).toFixed(2).replace(".", ",")}`
    }

    const subtotal = () => {
        let subtotal = 0;

        list.forEach(product => {
            subtotal += Number(product.valueProduct.replace("R$", "").replace(",",".")) * product.qtdProduct
        });

        return `R$ ${subtotal.toFixed(2).replace(".", ",")}`
    }

    const delivery = () => {
        // Deixei como function pois nao sei se vai haver algum calculo para o frete
        let subtotal = 0;

        list.forEach(product => {
            subtotal += Number(product.valueProduct.replace("R$", "").replace(",", ".")) * product.qtdProduct
        });
        
        if(subtotal > 0) {
            return deliveryProduct;
        } else {
            return "R$ 0,00";
        }
    }

    const total = () => {
        let subtotal = 0;

        let cleanValueDelivery = Number(deliveryProduct.replace("R$", "").replace(",", "."));

        list.forEach(product => {
            subtotal += Number(product.valueProduct.replace("R$", "").replace(",", 
             ".")) * product.qtdProduct
        });

        if(subtotal > 0) {
            return `R$ ${Number(subtotal + cleanValueDelivery).toFixed(2).replace(".", ",")}`
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
                {clean ? <View></View> : 
                    <TouchableOpacity 
                        style={globalStyles.buttonReturn}
                        onPress={() => {
                            if(clean && !checkOut) {
                                navigation.navigate("InternalHotel",
                                    {
                                        imgProduct,
                                        page,
                                        qtdProduct,
                                        nameProduct,
                                        widthProduct, 
                                        valueProduct,
                                        localName, 
                                        localAddress, 
                                        imgSlideOne,
                                        imgSlideTwo,
                                        imgSlideThree,
                                        deliveryProduct,
                                        descriptionProduct,
                                    }
                                )
                            } else {
                                navigation.navigate("InternalProduct",
                                    {
                                        checkOut,
                                        listProducts,
                                        imgProduct,
                                        page,
                                        qtdProduct,
                                        nameProduct,
                                        widthProduct, 
                                        valueProduct,
                                        localName, 
                                        localAddress, 
                                        imgSlideOne,
                                        imgSlideTwo,
                                        imgSlideThree,
                                        deliveryProduct,
                                        descriptionProduct,
                                    }
                                )
                            }
                        }}
                    >
                        <Image 
                            style={globalStyles.buttonReturnImage}
                            source={require("../../assets/icons/arrow-left.png")}
                        />
                    </TouchableOpacity>
                }
                  
            </View>

            <View style={[styles.content, styles.titles]}>
                <Text style={styles.title}>Sacola</Text>

                <TouchableOpacity 
                    onPress={() => {
                        setList([]);
                        setClean(true);
                    }}
                >
                    <Text style={styles.clean}>Limpar</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.content}>
                    {
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
                    }

                <TouchableOpacity 
                    style={styles.addMoreItems}
                    onPress={() => {
                        if(page == "menu") {
                            navigation.navigate("InternalMenu", {
                                localName, 
                                localAddress,
                                upQtdProduct: 2,
                                checkOut,
                            });
                        } else {
                            navigation.navigate("InternalTour", {
                                localName, 
                                localAddress,
                                upQtdProduct: 2,
                                checkOut,
                            }); 
                        }
                    }}
                >
                    <Text style={styles.addMoreItemsText}>Adicionar mais itens</Text>
                </TouchableOpacity>
            </ScrollView>

            <View style={styles.cartContainer}>
                <View style={styles.content}>
                    <View style={styles.prices}>
                        <Text style={styles.subtotalText}>Subtotal</Text>
                        <Text style={styles.subtotalText}>{subtotal()}</Text>
                    </View>
                    <View style={styles.prices}>
                        <Text style={styles.deliveryText}>Taxa de entrega</Text>
                        <Text style={styles.deliveryText}>{delivery()}</Text>
                    </View>
                    <View style={[styles.prices, styles.total]}>
                        <Text style={styles.totalText}>Total</Text>
                        <Text style={styles.totalText}>{total()}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.buttonCart}
                    onPress={() => {
                        if(checkOut) {
                            navigation.navigate("CheckOut", {
                                listProducts: list,
                                upQtdProduct: 2,
                                imgProduct,
                                page,
                                qtdProduct,
                                nameProduct,
                                widthProduct, 
                                valueProduct,
                                localName, 
                                localAddress, 
                                imgSlideOne,
                                imgSlideTwo,
                                imgSlideThree,
                                deliveryProduct,
                                descriptionProduct,
                            })
                        } else {
                            navigation.navigate("InternalHotel",
                                {
                                    listProducts: list,
                                    upQtdProduct: 2,
                                    imgProduct,
                                    page,
                                    qtdProduct,
                                    nameProduct,
                                    widthProduct, 
                                    valueProduct,
                                    localName, 
                                    localAddress, 
                                    imgSlideOne,
                                    imgSlideTwo,
                                    imgSlideThree,
                                    deliveryProduct,
                                    descriptionProduct,
                                }
                            )
                        }
                    }}
                >
                    <Text style={styles.buttonCartText}>Solicitar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
