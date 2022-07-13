import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    containerScroll: {
        paddingTop: 24,
        paddingHorizontal: 20,
    },

    titleContainer: {
        marginBottom: 15,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#F5F6F8",
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
        marginBottom: 10,
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
        backgroundColor: "#E06E78",
        borderRadius: 24,
    },

    btnCheckInText: {
        fontFamily: "SourceSansPro-SemiBold",
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
        paddingVertical: 10,
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

    buttonWifi: {
        backgroundColor: "#7D81D2",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 8,
        marginTop: 20,
    },

    buttonWifiText: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 18,
        marginLeft: 10,
        color: "#fff",
    },

    expensesContainer: {
        paddingTop: 5,
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#F5F6F8",
    },

    expensesTitle: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 18,
        color: "#495057",
        marginBottom: 8,
    },

    expensesTotal: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 14,
        color: "#979797",
    },

    extractContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },  

    extractButton: {
        backgroundColor: '#F5F6F8',
        height: 34,
        width: 106,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },

    extractText: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 14,
        color: "#979797",
    },

    modal: {
        position: "absolute",
        top: 0,
        left: 0,
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.4);"
    },

    modalContainer: {
        width: "90%",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
        padding: 20,
        borderRadius: 8,
    },

    exitButton: {
        alignSelf: "flex-end",
        marginBottom: 10,
    },

    exitText: {
        color: "#E06E78",
        fontSize: 24,
    },

    title: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 22,
        color: "#7D81D2",
        alignSelf: "flex-start",
        marginBottom: 20,
    },

    fieldWifi: {
        marginBottom: 30,
        alignSelf: "flex-start",
    },

    fieldWifiTitle: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 14,
        color: "#979797",
        marginBottom: 8,
    },

    fieldWifiName: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 16,
        color: "#33303E",
    },
});

export default styles;