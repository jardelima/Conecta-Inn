import React, { useState } from "react";
import { 
    View,
    Text, 
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
} from "react-native";

import styles from "./style";
import globalStyles from "../components/globalStyle/style";
import Header from "../components/Header";

export default function Payment({ navigation, route }) {
    const { localName, localAddress, upQtdProduct, listProducts } = route.params;
    const [cardCredit, setCardCredit] = React.useState(false);
    const [cardDebt, setCardDebt] = React.useState(true);
    const [nameCard, setNameCard] = React.useState("");
    const [numberCard, setNumberCard] = React.useState("");
    const [validateCard, setValidateCard] = React.useState("");
    const [ccv, setCcv] = React.useState("");

    const [isFocusedNameCard, setIsFocusedNameCard] = React.useState(false);
    const [isFocusedNumberCard, setIsFocusedNumberCard] = React.useState(false);
    const [isFocusedValidateCard, setIsFocusedValidateCard] = React.useState(false);
    const [isFocusedCcv, setIsFocusedCcv] = React.useState(false);

    const [errorNameCard, setErrorNameCard] = React.useState(null);
    const [errorNumberCard, setErrorNumberCard] = React.useState(null);
    const [errorValidateCard, setErrorValidateCard] = React.useState(null);
    const [errorCcvCard, setErrorCcvCard] = React.useState(null);

    React.useEffect(() => setErrorNameCard(null), [nameCard]);
    React.useEffect(() => setErrorNumberCard(null), [numberCard]);
    React.useEffect(() => setErrorValidateCard(null), [validateCard]);
    React.useEffect(() => setErrorCcvCard(null), [ccv]);

    function maskNumberCard(number){
        number = number.replace(/\D/g,""); // Permite apenas dígitos
        number = number.replace(/(\d{4})/g, "$1."); // Coloca um ponto a cada 4 caracteres
        number = number.replace(/\.$/, ""); // Remove o ponto se estiver sobrando
        number = number.substring(0, 19)// Limita o tamanho
      
        return number;
    }

    function maskValidateCard(number) {
        number = number.replace(/\D/g,"");
        number = number.replace(/\.$/, "");
        number = number.replace(/(\d{2})/g, "$1/");
        number = number.substring(0, 5);

        return number;
    }

    function maskCcv(number) {
        number = number.replace(/\D/g,"");
        number = number.substring(0, 3);

        return number;
    }

    function getCardFlag(numberCard) {
        var numberCard = numberCard.replace(/[^0-9]+/g, '');

        var cards = {
            visa      : /^4[0-9]{12}(?:[0-9]{3})/,
            mastercard : /^5[1-5][0-9]{14}/,
            diners    : /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
            amex      : /^3[47][0-9]{13}/,
            discover  : /^6(?:011|5[0-9]{2})[0-9]{12}/,
            hipercard  : /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
            elo        : /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
            jcb        : /^(?:2131|1800|35\d{3})\d{11}/,
            aura      : /^(5078\d{2})(\d{2})(\d{11})$/,
        };

        for (var flag in cards) {
            if(cards[flag].test(numberCard)) {
                return (
                    <View style={{position: "absolute", right: 10, top: 36, paddingHorizontal: 16, paddingVertical: 6, backgroundColor: "#F5F6F8", borderRadius: 6,}}>
                        <Text style={{fontFamily: "SourceSansPro-SemiBold", fontSize: 14, color: "#33303E",}}>{flag}</Text>
                    </View>
                );
            }
        }

        return false;
    }

    function validateFields() {
        if(nameCard == "") {
            setErrorNameCard("Campo vazio ou incorreto");
        }

        if(numberCard == "") {
            setErrorNumberCard("Campo vazio ou incorreto");
        }

        if(validateCard == "") {
            setErrorValidateCard("Campo vazio ou incorreto");
        }

        if(ccv == "") {
            setErrorCcvCard("Campo vazio ou incorreto");
        }

        if(nameCard !== "" || numberCard !== "" || validateCard !== "" || ccv !== "") {
            console.log("Tudo certo")
        }
    }

    return (
        <View style={styles.container}>
            <Header
                src={require("../../assets/icons/menu.png")}
                openDrawerMenu="true"
            />

            <ScrollView style={styles.content}>
                <TouchableOpacity
                    style={[globalStyles.buttonReturn, styles.buttonReturn]}
                    onPress={() => { navigation.navigate("CheckOut", {
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

                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Pagamento</Text>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Chat", {
                                chatInPayment: true,
                                localName, 
                                localAddress, 
                                upQtdProduct,
                                listProducts,
                            })
                        }}
                    >
                        <Text style={styles.support}>Suporte</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.cardContainer}>
                    <TouchableOpacity
                        style={cardDebt ? styles.cardActive : styles.cardDisabled}
                        onPress={() => {
                            setCardDebt(true);
                            setCardCredit(false);
                        }}
                    >
                        <Text style={cardDebt ? styles.cardTextActive : styles.cardText}>Cartão de Débito</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={cardCredit ? styles.cardActive : styles.cardDisabled}
                        onPress={() => {
                            setCardDebt(false);
                            setCardCredit(true);
                        }}
                    >
                        <Text style={cardCredit ? styles.cardTextActive : styles.cardText}>Cartão de Crédito</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.cardForm}>
                    <View style={styles.formField}>
                        <Text style={styles.formLabel}>Nome no cartão</Text>
                        <TextInput 
                            style={[
                                styles.formInput, 
                                {borderColor: isFocusedNameCard ? "#E06E78" : "#CED4DA80"},
                            ]}
                            onChangeText={setNameCard}
                            value={nameCard}
                            autoCorrect={false}
                            underlineColorAndroid="transparent"
                            onFocus={() => setIsFocusedNameCard(true)}
                            onBlur={() => setIsFocusedNameCard(false)}
                        />
                        {errorNameCard && <Text style={globalStyles.errorMessage}>{errorNameCard}</Text>}
                    </View>

                    <View style={styles.formField}>
                        <Text style={styles.formLabel}>Número no cartão</Text>
                        <TextInput 
                            style={[
                                styles.formInput,  
                                {borderColor: isFocusedNumberCard ? "#E06E78" : "#CED4DA80"},
                            ]}
                            onChangeText={setNumberCard}
                            value={maskNumberCard(numberCard)}
                            autoCorrect={false}
                            keyboardType="numeric"
                            underlineColorAndroid="transparent"
                            onFocus={() => {setIsFocusedNumberCard(true)}}
                            onBlur={() => {setIsFocusedNumberCard(false)}}
                        />
                        {getCardFlag(numberCard)}
                        {errorNumberCard && <Text style={globalStyles.errorMessage}>{errorNumberCard}</Text>}
                    </View>

                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <View style={[styles.formField, {width: "46%"}]}>
                            <Text style={styles.formLabel}>Validade</Text>
                            <TextInput 
                                style={[
                                    styles.formInput, 
                                    {borderColor: isFocusedValidateCard ? "#E06E78" : "#CED4DA80"},
                                ]}
                                onChangeText={setValidateCard}
                                value={maskValidateCard(validateCard)}
                                autoCorrect={false}
                                keyboardType="numeric"
                                underlineColorAndroid="transparent"
                                onFocus={() => {setIsFocusedValidateCard(true)}}
                                onBlur={() => {setIsFocusedValidateCard(false)}}
                            />
                            {errorValidateCard && <Text style={globalStyles.errorMessage}>{errorValidateCard}</Text>}
                        </View>  

                        <View style={[styles.formField, {width: "46%"}]}>
                            <Text style={styles.formLabel}>CCV</Text>
                            <TextInput 
                                style={[
                                    styles.formInput, 
                                    {borderColor: isFocusedCcv ? "#E06E78" : "#CED4DA80"},
                                ]}
                                onChangeText={setCcv}
                                value={maskCcv(ccv)}
                                autoCorrect={false}
                                keyboardType="numeric"
                                underlineColorAndroid="transparent"
                                onFocus={() => {setIsFocusedCcv(true)}}
                                onBlur={() => {setIsFocusedCcv(false)}}
                            />
                            {errorCcvCard && <Text style={globalStyles.errorMessage}>{errorCcvCard}</Text>}
                        </View>
                    </View>
                </View>
            </ScrollView>

            {isFocusedNameCard || isFocusedNumberCard || isFocusedValidateCard || isFocusedCcv ? false 
            :             
                <View style={styles.containerButton}>
                    <TouchableOpacity 
                        style={globalStyles.buttonPrimary}
                        onPress={() => {
                            validateFields();
                            
                            console.log("Funcionalidade para finalizar o pagamento do usuário.");
                        }}
                    >
                        <Text style={globalStyles.buttonPrimaryText}>Confirmar</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}
