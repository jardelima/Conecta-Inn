import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        flexBasis: "90%",
    },

    containerScroll: {
        marginBottom: 25,
    },  

    titleContainer: {
        marginBottom: 30,
    },

    title: {
        fontFamily: "montserrat-bold",
        fontSize: 24,
        color: "#33303E",
        marginBottom: 10,
    },

    subtitleContainer: {
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
    },

    subtitleImage: {
        resizeMode: "contain",
    },

    subtitleText: {
        marginLeft: 10,
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 14,
        color: "#979797",
    },

    linksContainer: {
        width: "100%",
    },

    linksRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 14,
    }, 

    btnCheckIn: {
        flexBasis: "8%",
        backgroundColor: "#E06E78",
        borderRadius: 24,
        marginVertical: 15,
        alignItems: "center",
        justifyContent: "center",
    },

    btnCheckInText: {
        fontFamily: "SourceSansPro-SemiBold",
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
    },

    checkIn: {
        marginBottom: 10,
    },

    checkInTitle: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 18,
        color: "#495057",
        marginBottom: 8,
    },

    checkInText: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 14,
        color: "#979797",
    },

    checkOut: {
        marginTop: 10,
    },

    checkOutTitle: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 18,
        color: "#495057",
        marginBottom: 8,
    },

    checkOutText: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 14,
        color: "#979797",
    },
});

export default styles;