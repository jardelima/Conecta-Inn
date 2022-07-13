import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    buttonReturnContainer: {
        paddingTop: 24,
        paddingLeft: 20,
    },

    titleContainer: {
        paddingTop: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    title: {
        fontFamily: "montserrat-bold",
        fontSize: 24,
        color: "#33303E",
    },

    buttonHelpText: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 14,
        color: "#979797",
    },

    formContainer: {
        paddingHorizontal: 20,
        paddingTop: 24,
    },

    formField: {
        marginBottom: 20,
    },

    formLabel: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 14,
        color: "#33303E",
        paddingBottom: 8,
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
    },

    fileContainer: {
        width: "100%",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "#CED4DA80",
    },

    addFileDefault: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 40,
    },

    addFile: {
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 40,
        paddingTop: 10,
    },

    fileIcon: {
        backgroundColor: "#F5F6F8",
        color: "#E06E78",
        borderRadius: 100,
        textAlign: "center",
        fontSize: 32,
        paddingHorizontal: 14,
        marginBottom: 10,
    },

    fileText: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 16,
        color: "#33303E",
    },

    file: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 16,
        color: "#33303E",
        textAlign: "center",
        paddingTop: 40,
        marginBottom: 10,
    },

    buttonContainer: {
        paddingVertical: 14,
        paddingHorizontal: 20,
    },

    buttonCheckIn: {
        backgroundColor: "#E06E78",
        padding: 12,
        borderRadius: 100,
    },

    buttonCheckInText: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 18,
        textAlign: "center",
        color: "#fff",
    },
});

export default styles;