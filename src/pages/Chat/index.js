import React, { useState, useEffect, useRef, } from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    StatusBar,
    ScrollView,
    TextInput,
    SectionList,
} from "react-native";

import styles from "./style";

const callList = [
    {
        from: 1,
        to: 2,
        createdAt: "2022-07-05",
        message: "Olá Amigo, tudo bem?",
        avatarImage: require("../../assets/images/chat-image.png"),
    },
    {
        from: 1,
        to: 2,
        createdAt: "2022-07-05",
        message: "Como posso te ajudar?",
        avatarImage: require("../../assets/images/chat-image.png"),
    },
]

export default function Chat({ navigation, route }) {
    const { 
        chatInPayment,
        chatInExtract,
        localName, 
        localAddress, 
        upQtdProduct,
        listProducts,
    } = route.params;

    const [listMessages, setListMessages] = React.useState([]);
    const [message, setMessage] = React.useState("");
    const [isFocusedMessage, setIsFocusedMessage] = React.useState(false);
    const scrollViewRef = React.useRef();

    React.useEffect(() => setListMessages(callList), [callList]);
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#7D81D2" barStyle="light-content" />

            <View style={styles.containerHeader}>
                <TouchableOpacity
                    style={styles.buttonHeader}
                    onPress={() => {
                        if(chatInExtract) {
                            navigation.navigate("Extract", {
                                localName, 
                                localAddress,
                                upQtdProduct,
                                listProducts,
                            })
                        } else if(chatInPayment) {
                            navigation.navigate("Payment", {
                                localName, 
                                localAddress,
                                upQtdProduct,
                                listProducts,
                            })
                        } else {
                            navigation.navigate("CheckIn", {
                                localName, 
                                localAddress,
                                upQtdProduct,
                                listProducts,
                            })
                        }
                    }}
                >
                    <Text style={styles.buttonTextHeader}>x</Text>
                </TouchableOpacity>

                <Text style={styles.titleHeader}>Chat com Narciso J</Text>
            </View>  

            <ScrollView 
                  ref={scrollViewRef}
                  onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: false })}
                style={styles.containerMessages}
            >
                <Text style={styles.titleMessage}>Narciso J entrou no Chat</Text>

                <View style={styles.blockMessage}>
                    {listMessages.map((itemMessage, index) => {
                        return (
                            <View 
                                key={index}
                                style={itemMessage.from == 1 ? styles.messageFromSupport : styles.messageFromClient}
                            >
                                <Text 
                                    style={itemMessage.from == 1 ? styles.textFromSupport : styles.textFromClient}
                                >
                                    {itemMessage.message}
                                </Text>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>

            <View style={styles.containerInputMessage}>
                <TextInput 
                    style={[
                        styles.formInput, 
                        {borderColor: isFocusedMessage ? "#E06E78" : "#CED4DA80"},
                    ]}
                    onChangeText={setMessage}
                    value={message}
                    autoCorrect={false}
                    onFocus={() => setIsFocusedMessage(true)}
                    onBlur={() => setIsFocusedMessage(false)}
                    underlineColorAndroid="transparent"
                    placeholder="Digite sua mensagem..."
                />
                
                <TouchableOpacity
                    style={styles.formSubmit}
                    onPress={() => {
                        const sendMessage = {
                            from: 0,
                            to: 1,
                            createdAt: new Date().toLocaleDateString(),
                            message: message,
                        }

                        setListMessages([...listMessages, sendMessage]);
                        setMessage("");
                    }}
                >
                    <Image 
                        source={require("../../assets/icons/send-message.png")}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
