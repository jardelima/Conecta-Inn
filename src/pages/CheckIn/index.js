import React, { useState, useCallback, useEffect } from "react";
import DocumentPicker from 'react-native-document-picker';
import { 
    View, 
    Text,
    TouchableOpacity, 
    Image,
    TextInput,
    Button,
    ScrollView,
} from "react-native";

import globalStyles from "../components/globalStyle/style";
import Header from "../components/Header";
import styles from "./style";

export default function CheckIn({ navigation, route }) {
    const { 
        localName, 
        localAddress, 
        upQtdProduct,
        listProducts,
    } = route.params;

    const [name, setName] = React.useState("");
    const [errorName, setErrorName] = React.useState(null);
    const [isFocusedName, setIsFocusedName] = React.useState(false);
    const [lastName, setLastName] = React.useState("");
    const [errorLastName, setErrorLastName] = React.useState(null);
    const [isFocusedLastName, setIsFocusedLastName] = React.useState(false);
    const [hotel, setHotel] = React.useState(localName);
    const [fileResponse, setFileResponse] = React.useState([]);
    const [errorFile, setErrorFile] = React.useState(null);
    const [local, setLocal] = React.useState(localName);

    React.useEffect(() => setErrorName(null), [name]);
    React.useEffect(() => setErrorLastName(null), [lastName]);
    React.useEffect(() => setErrorFile(null), [fileResponse]);
    React.useEffect(() => setLocal(localName));

    const handleDocumentSelection = useCallback(async () => {
        setFileResponse([]);

        try {
          const response = await DocumentPicker.pick({
            presentationStyle: 'fullScreen',
          });
          setFileResponse(response);
        } catch (err) {
          console.warn(err);
        }
      }, []);

    const verificationInputs = () => {
        if(name == "") {
            setErrorName("Campo vazio")
        }
        
        if(lastName == "") {
            setErrorLastName("Campo vazio")
        }

        if(fileResponse.length == 0) {
            setErrorFile("Nenhum arquivo selecionado")
        }

        if(name !== "" && lastName !== "" && fileResponse.length > 0) {
            navigation.navigate("CheckOut", {
                localName, 
                localAddress, 
                upQtdProduct,
                listProducts,
            })
        }
    }

    return (
        <View style={styles.container}>
            <Header 
                src={require("../../assets/icons/menu.png")} 
                openDrawerMenu="true"
            />

            <ScrollView>
                <View style={styles.buttonReturnContainer}>
                    <TouchableOpacity 
                        style={globalStyles.buttonReturn}
                        onPress={() => {
                            navigation.navigate("InternalHotel", { 
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

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Check-in</Text>
                    
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Chat", {
                                localName, 
                                localAddress,
                                upQtdProduct,
                                listProducts,
                            });
                        }}
                    >
                        <Text style={styles.buttonHelpText}>Suporte</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.formContainer}>
                    <View style={styles.formField}>
                        <Text style={styles.formLabel}>Nome</Text>
                        <TextInput 
                            style={[
                                styles.formInput, 
                                {borderColor: isFocusedName ? "#E06E78" : "#CED4DA80"},
                            ]}
                            onChangeText={setName}
                            value={name}
                            autoCorrect={false}
                            onFocus={() => setIsFocusedName(true)}
                            onBlur={() => setIsFocusedName(false)}
                            underlineColorAndroid="transparent"
                        />
                        {errorName && <Text style={globalStyles.errorMessage}>{errorName}</Text>}
                    </View>

                    <View style={styles.formField}>
                        <Text style={styles.formLabel}>Sobrenome</Text>
                        <TextInput 
                            style={[
                                styles.formInput, 
                                {borderColor: isFocusedLastName ? "#E06E78" : "#CED4DA80"},
                            ]}
                            onChangeText={setLastName}
                            value={lastName}
                            autoCorrect={false}
                            onFocus={() => setIsFocusedLastName(true)}
                            onBlur={() => setIsFocusedLastName(false)}
                            underlineColorAndroid="transparent"
                        />
                        {errorLastName && <Text style={globalStyles.errorMessage}>{errorLastName}</Text>}
                    </View>

                    <View style={styles.formField}>
                        <Text style={styles.formLabel}>Estadia</Text>
                        <TextInput 
                            style={styles.formInput}
                            value={local}
                            editable={false}
                        />
                    </View>

                    <View style={styles.formField}>
                        <Text style={styles.formLabel}>Comprovante</Text>

                        <View style={styles.fileContainer}>
                            {fileResponse.map((file, index) => {
                                return <Text style={styles.file} key={index}>{file.name}</Text>
                            })}
                            
                            <TouchableOpacity 
                                style={fileResponse.length > 0 ? styles.addFile : styles.addFileDefault} 
                                onPress={handleDocumentSelection}
                            >
                                <Text style={styles.fileIcon}>+</Text>
                                {fileResponse.length > 0 ? <Text style={styles.fileText}>Trocar arquivo</Text> : <Text style={styles.fileText}>Anexar arquivo</Text>}
                            </TouchableOpacity>

                            {errorFile && <Text style={globalStyles.errorMessage}>{errorFile}</Text>}
                        </View>
                    </View>
                </View>
            </ScrollView>
            
            <View style={styles.buttonContainer}>
                {
                    isFocusedName || isFocusedLastName 
                    ? 
                        null
                    :
                        <TouchableOpacity
                            style={styles.buttonCheckIn}
                            onPress={() => {
                                verificationInputs()
                            }}
                        >
                            <Text style={styles.buttonCheckInText}>Check-in</Text>
                        </TouchableOpacity>
                }
            </View>
        </View>
    )
}
