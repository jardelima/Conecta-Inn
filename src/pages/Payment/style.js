import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    content: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    
    buttonReturn: {
        marginTop: 14,
    },

    containerTitle: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginBottom: 30,
    },

    title: {
        fontFamily: "montserrat-bold",
        fontSize: 24,
        color: "#33303E",
    },

    support: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 14,
        color: "#979797",
    },

    cardContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 30,
    },

    cardDisabled: {
        textAlign: "center",
        paddingHorizontal: 30,
        paddingVertical: 15,
        backgroundColor: "#F5F6F8",
        borderRadius: 6,
    },

    cardText: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 16,
        color: "#33303E"
    },

    cardActive: {
        textAlign: "center",
        paddingHorizontal: 30,
        paddingVertical: 15,
        backgroundColor: "#E06E78",
        borderRadius: 6,
    },

    cardTextActive: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 16,
        color: "#fff"
    },

    formField: {
        marginBottom: 14,
    },  

    formLabel: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 14,
        color: "#33303E",
        marginBottom: 8,
    },  

    formInput: {
        borderWidth: 1,
        borderColor: "#CED4DA80",
        borderRadius: 8,
        backgroundColor: "#fff",
        color: "#33303E",
        fontFamily: "SourceSansPro-Regular",
        fontSize: 16,
        paddingHorizontal: 10,
        textTransform: "uppercase"
    },

    containerButton: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
});

export default styles;