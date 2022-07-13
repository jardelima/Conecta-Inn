import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    title: {
        fontFamily: "montserrat-bold",
        fontSize: 24,
        color: "#33303E",
        marginBottom: 50,
    },

    forgotPassword: {
        alignItems: "flex-end",
        alignSelf: "flex-end",
        marginBottom: 30,
        width: "100%",
        maxWidth: 130,
    },

    forgotPasswordText: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 14,
        color: "#E06E78",
    },

    register: {
        alignItems: "center",
    },

    registerMessage: {
        fontFamily: "SourceSansPro-Regular",
        color: "#ADB5BD",
        fontSize: 14,
        textAlign: "center",
        marginBottom: 10,
    },

    registerButton: {
        alignItems: "center",
    },

    registerButtonText: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 16,
        color: "#E06E78",
    },

    inputField: {
        marginBottom: 30,
    },  

    label: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 14,
        color: "#495057",
        marginBottom: 10,
    },

    input: {
        width: "100%",
        height: 48,
        color: "#343A40",
        borderColor: "#CED4DA80",
        borderRadius: 8,
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 40,
    },
});

export default styles;