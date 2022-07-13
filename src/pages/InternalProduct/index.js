import React, {useState, useEffect} from "react";
import { 
    View, 
    Text,
    TouchableOpacity,
    Image, 
    ScrollView,
} from "react-native";
import AppIntroSlider from 'react-native-app-intro-slider';

import Header from "../components/Header";
import globalStyles from "../components/globalStyle/style";
import styles from "./style";

export default function InternalProduct({ navigation, route }) {
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

    const slides = [
        {
            key: "1",
            image: imgSlideOne,
        },
        {
            key: "2",
            image: imgSlideTwo,
        },
        {
            key: "3",
            image: imgSlideThree,
        },
    ]

    const [result, setResult] = React.useState(valueProduct);
    const [qtd, setQtd] = React.useState(1);
    const [favList, setFavList] = React.useState([]);
    const [favorite, setFavorite] = React.useState(true);
    let newFavList = [];

    function valueProducts(qtd) {
        const cleanValueProduct = Number(valueProduct.replace("R$ ", "").replace(",", "."));

        setResult(`R$ ${(cleanValueProduct * qtd).toFixed(2)}`)
    }

    function renderSlides({ item }) {
        return (
            <View>
                <Image 
                    source={item.image}
                />
            </View>
        )
    }

    React.useEffect(() => {
        if(favList.includes(nameProduct)) {
            setFavorite(false);
        } else {
            setFavorite(true);
        }
    });

    React.useEffect(() => {
        if(upQtdProduct > 1) {
            setQtd(1);
        }
    }, [nameProduct]);

    return (
        <View style={styles.container}>
            <Header 
                src={require("../../assets/icons/menu.png")} 
                openDrawerMenu="true"
            />

            <View style={styles.container}>
                <ScrollView style={styles.containerItems}>
                    <TouchableOpacity 
                        style={globalStyles.buttonReturn}
                        onPress={() => {
                            setQtd(1);
                            setFavorite(true);

                            if(page == "menu") {
                                navigation.navigate("InternalMenu", {localName, localAddress, checkOut, listProducts});
                            } else {
                                navigation.navigate("InternalTour", {localName, localAddress, checkOut, listProducts}); 
                            }
                        }}
                    >
                        <Image 
                            style={globalStyles.buttonReturnImage}
                            source={require("../../assets/icons/arrow-left.png")}
                        />
                    </TouchableOpacity>  

                    <View>
                        <View style={styles.slideContainer}>
                            <AppIntroSlider 
                                renderItem={renderSlides}
                                data={slides}
                                showNextButton={false}
                                showDoneButton={false}
                                dotStyle={{
                                    backgroundColor: "#CED4DA80",
                                    width: 24,
                                    height: 6,
                                    borderRadius: 12,
                                    marginTop: 130,
                                }}
                                activeDotStyle={{
                                    backgroundColor: "#E06E78",
                                    width: 24,
                                    height: 6,
                                    borderRadius: 12,
                                    marginTop: 130,
                                }}
                            />

                            {favorite ? 
                                <TouchableOpacity 
                                    style={styles.favorite}
                                    onPress={() => {
                                        setFavorite(!favorite);

                                        if(favList.includes(nameProduct)) {
                                            return false;
                                        } else {
                                            setFavList([...favList, nameProduct]);
                                        }
                                    }}
                                >
                                    <Image source={require("../../assets/icons/heart.png")} />
                                </TouchableOpacity>  
                                : 
                                <TouchableOpacity
                                    style={styles.favorite}
                                    onPress={() => {
                                        setFavorite(!favorite);

                                        if(favList.length == 1) {
                                            setFavList([]);
                                        } else {
                                            favList.map((product) => {
                                                if(product !== nameProduct) {
                                                    newFavList = [...newFavList, product];
                                                }
                                                
                                                setFavList(newFavList)
                                            });
                                        }
                                    }}
                                >
                                    <Image source={require("../../assets/icons/heart-active.png")} />
                                </TouchableOpacity> 
                            }
                        </View>

                        <Text style={styles.nameProduct}>{nameProduct}</Text>

                        <View style={styles.infoProduct}>
                            <Text style={styles.widthProduct}>{widthProduct}</Text>

                            <View style={styles.avaliation}>
                                <Image 
                                    source={require("../../assets/icons/star.png")}
                                />
                                <Text style={styles.avaliationText}>4.0</Text>
                            </View>
                        </View>

                        <Text style={styles.descriptionProduct}>{descriptionProduct}</Text>
                    </View>
                </ScrollView>

                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonsQtd}>
                        <TouchableOpacity 
                            style={styles.buttonReduce}
                            onPress={() => {
                                if(qtd > 1) {
                                    setQtd(qtd - 1);
                                    valueProducts(qtd - 1);
                                } else {
                                    setQtd(qtd);
                                }
                            }}    
                        >
                            <Text style={styles.buttonReduceText}>-</Text>
                        </TouchableOpacity>

                        <Text style={styles.qtd}>{qtd}</Text>

                        <TouchableOpacity 
                            style={styles.buttonIncrease}
                            onPress={() => {
                                setQtd(qtd + 1);
                                valueProducts(qtd + 1);
                            }}
                        >
                            <Text style={styles.buttonIncreaseText}>+</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity 
                        style={styles.buttonResult}
                        onPress={() => {

                            navigation.navigate("Cart", 
                                {
                                    listProducts,
                                    upQtdProduct,
                                    localName,
                                    localAddress,
                                    checkOut,
                                    page: page,
                                    qtdProduct: qtd,
                                    imgProduct: imgProduct,
                                    nameProduct: nameProduct,
                                    widthProduct: widthProduct,
                                    valueProduct: valueProduct,
                                    imgSlideOne: imgSlideOne,
                                    imgSlideTwo: imgSlideTwo,
                                    imgSlideThree: imgSlideThree,
                                    deliveryProduct: deliveryProduct,
                                    descriptionProduct: descriptionProduct,
                                }
                            )
                        }}
                    >
                        <Text style={styles.buttonResultText}>Adicionar</Text>
                        <Text style={styles.buttonResultValue}>
                            {qtd === 1 ? valueProduct.replace(".", ",") : result.replace(".", ",")}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
