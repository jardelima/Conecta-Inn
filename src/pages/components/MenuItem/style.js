import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    menuItemContainer: {
        width: "100%",
        alignSelf: "center",
        height: 90,
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 18,
        borderBottomWidth: 1,
        borderBottomColor: "#F5F6F8",
    },

    menuItemImage: {
        resizeMode: "contain",
        marginRight: 16,
    },

    menuItemTitle: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 18,
        marginBottom: 8,
        color: "#33303E",
    },

    menuItemDetailsContainer: {
        width: "78%",
    },  

    menuItemDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    menuItemDetail: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 14,
        color: "#979797",
    },
});

export default styles;