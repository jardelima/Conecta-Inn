import React from "react";

import { 
    View,
    TouchableOpacity,
    Image,
    Text, 
} from "react-native";

import globalStyles from "../components/globalStyle/style";
import styles from "../InternalMenu/style";
import InternalList from "../components/InternalList";
import Header from "../components/Header";

const typeTour = [
    {
        type: "Praias",
    },
    {
        type: "Restaurantes",
    },
    {
        type: "Bares",
    },
    {
        type: "Festas",
    },
]

const tourItems = [
    {
        page: "tour",
        img: require("../../assets/images/agua.png"),
        imgSlideOne: require("../../assets/images/coca-slide-1.png"),
        imgSlideTwo: require("../../assets/images/coca-slide-1.png"),
        imgSlideThree: require("../../assets/images/coca-slide-1.png"),
        nameProduct: "Passeio pela Orla - Beira-mar",
        widthProduct: "Transporte e Refeição",
        valueProduct: "R$ 200,00",
        deliveryProduct: "R$ 2,90",
        descriptionProduct: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        type: "Praias",
    },
    {
        page: "tour",
        img: require("../../assets/images/agua.png"),
        imgSlideOne: require("../../assets/images/coca-slide-1.png"),
        imgSlideTwo: require("../../assets/images/coca-slide-1.png"),
        imgSlideThree: require("../../assets/images/coca-slide-1.png"),
        nameProduct: "Teresa e Jorge",
        widthProduct: "Refeição e Bar",
        valueProduct: "R$ 20,00",
        deliveryProduct: "R$ 2,90",
        descriptionProduct: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        type: "Restaurantes",
    },
    {
        page: "tour",
        img: require("../../assets/images/agua.png"),
        imgSlideOne: require("../../assets/images/coca-slide-1.png"),
        imgSlideTwo: require("../../assets/images/coca-slide-1.png"),
        imgSlideThree: require("../../assets/images/coca-slide-1.png"),
        nameProduct: "Happy Bar",
        widthProduct: "Bar",
        valueProduct: "R$ 20,00",
        deliveryProduct: "R$ 2,90",
        descriptionProduct: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        type: "Bares",
    },
    {
        page: "tour",
        img: require("../../assets/images/agua.png"),
        imgSlideOne: require("../../assets/images/coca-slide-1.png"),
        imgSlideTwo: require("../../assets/images/coca-slide-1.png"),
        imgSlideThree: require("../../assets/images/coca-slide-1.png"),
        nameProduct: "Dragão do Mar",
        widthProduct: "Ponto de Turismo",
        valueProduct: "R$ 15,00",
        deliveryProduct: "R$ 2,90",
        descriptionProduct: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        type: "Festas",
    },
]

export default function InternalTour({ navigation, route }) {
    const { localName, localAddress, upQtdProduct, listProducts, checkOut } = route.params;

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
                        navigation.navigate("InternalHotel", { localName, localAddress })
                    }}
                >
                    <Image 
                        style={globalStyles.buttonReturnImage}
                        source={require("../../assets/icons/arrow-left.png")}
                    />
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Text style={[globalStyles.title, styles.title]}>Passeios</Text>  
                    <Text style={styles.titleLocal}>{localName}</Text>  
                </View>      
            </View>

            <InternalList 
                type="Praias"
                list={tourItems}
                typeMenu={typeTour}
            />
        </View>
    )
}