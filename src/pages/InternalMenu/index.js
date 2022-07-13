import React from "react";
import { 
    View,
    TouchableOpacity,
    Image,
    Text, 
} from "react-native";

import globalStyles from "../components/globalStyle/style";
import styles from "./style";
import InternalList from "../components/InternalList";
import Header from "../components/Header";

const typeMenu = [
    {
        type: "Bebidas",
    },
    {
        type: "Entradas",
    },
    {
        type: "Sanduíches",
    },
    {
        type: "Massas",
    },
]

const menu = [
    {
        page: "menu",
        img: require("../../assets/images/agua.png"),
        imgSlideOne: require("../../assets/images/coca-slide-1.png"),
        imgSlideTwo: require("../../assets/images/coca-slide-1.png"),
        imgSlideThree: require("../../assets/images/coca-slide-1.png"),
        nameProduct: "Água mineral - Cristal",
        widthProduct: "500ml",
        valueProduct: "R$ 7,00",
        deliveryProduct: "R$ 2,90",
        descriptionProduct: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        type: "Bebidas",
    },
    {
        page: "menu",
        img: require("../../assets/images/coca-lata.png"),
        imgSlideOne: require("../../assets/images/coca-slide-1.png"),
        imgSlideTwo: require("../../assets/images/coca-slide-1.png"),
        imgSlideThree: require("../../assets/images/coca-slide-1.png"),
        nameProduct: "Coca Cola",
        widthProduct: "350ml",
        valueProduct: "R$ 7,50",
        deliveryProduct: "R$ 2,90",
        descriptionProduct: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        type: "Bebidas",
    },
    {
        page: "menu",
        img: require("../../assets/images/agua.png"),
        imgSlideOne: require("../../assets/images/coca-slide-1.png"),
        imgSlideTwo: require("../../assets/images/coca-slide-1.png"),
        imgSlideThree: require("../../assets/images/coca-slide-1.png"),
        nameProduct: "Camarão",
        widthProduct: "500g",
        valueProduct: "R$ 35,00",
        deliveryProduct: "R$ 2,90",
        descriptionProduct: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        type: "Entradas",
    },
    {
        page: "menu",
        img: require("../../assets/images/agua.png"),
        imgSlideOne: require("../../assets/images/coca-slide-1.png"),
        imgSlideTwo: require("../../assets/images/coca-slide-1.png"),
        imgSlideThree: require("../../assets/images/coca-slide-1.png"),
        nameProduct: "Água com Gás",
        widthProduct: "500ml",
        valueProduct: "R$ 7,00",
        deliveryProduct: "R$ 2,90",
        descriptionProduct: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        type: "Bebidas",
    },
    {
        page: "menu",
        img: require("../../assets/images/coca-lata.png"),
        imgSlideOne: require("../../assets/images/coca-slide-1.png"),
        imgSlideTwo: require("../../assets/images/coca-slide-1.png"),
        imgSlideThree: require("../../assets/images/coca-slide-1.png"),
        nameProduct: "X-Burguer",
        widthProduct: "1 unid.",
        valueProduct: "R$ 12,00",
        deliveryProduct: "R$ 2,90",
        descriptionProduct: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        type: "Sanduíches",
    },
    {
        page: "menu",
        img: require("../../assets/images/agua.png"),
        imgSlideOne: require("../../assets/images/coca-slide-1.png"),
        imgSlideTwo: require("../../assets/images/coca-slide-1.png"),
        imgSlideThree: require("../../assets/images/coca-slide-1.png"),
        nameProduct: "Spaghetti",
        widthProduct: "1 Prato Exec.",
        valueProduct: "R$ 25,00",
        deliveryProduct: "R$ 2,90",
        descriptionProduct: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        type: "Massas",
    },
    {
        page: "menu",
        img: require("../../assets/images/coca-lata.png"),
        imgSlideOne: require("../../assets/images/coca-slide-1.png"),
        imgSlideTwo: require("../../assets/images/coca-slide-1.png"),
        imgSlideThree: require("../../assets/images/coca-slide-1.png"),
        nameProduct: "Fettutine",
        widthProduct: "1 Prato Exec.",
        valueProduct: "R$ 30,00",
        deliveryProduct: "R$ 2,90",
        descriptionProduct: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        type: "Massas",
    },
]

export default function InternalMenu({ navigation, route }) {
    const { localName, localAddress, upQtdProduct, checkOut, listProducts } = route.params;

    return (
        <View style={styles.container}>
            <Header 
                src={require("../../assets/icons/menu.png")} 
                openDrawerMenu="true"
            />

            <View style={styles.containerItems}>
                <TouchableOpacity 
                    style={globalStyles.buttonReturn}
                    onPress={() => {
                        if(checkOut) {
                            navigation.navigate("CheckOut", {
                                localName, 
                                localAddress, 
                                upQtdProduct,
                                listProducts,
                            })
                        } else {
                            navigation.navigate("InternalHotel", { 
                                localName, 
                                localAddress,
                                upQtdProduct
                            })
                        }
                    }}
                >
                    <Image 
                        style={globalStyles.buttonReturnImage}
                        source={require("../../assets/icons/arrow-left.png")}
                    />
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Text style={[globalStyles.title, styles.title]}>Cardápio</Text>  
                    <Text style={styles.titleLocal}>{localName}</Text>  
                </View>      
            </View>

            <InternalList 
                type="Bebidas"
                list={menu}
                typeMenu={typeMenu}
            />
        </View>
    )
}
