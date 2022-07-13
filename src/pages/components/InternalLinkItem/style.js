import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    item: {
        width: "48%",
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#CED4DA33",
        padding: 40,
        borderRadius: 8,
    },

    itemImage: {
        resizeMode: "contain",
        marginBottom: 14,
    },

    itemText: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 17,
        textAlign: "center",
        color: "#33303E",
    }
});

export default styles;