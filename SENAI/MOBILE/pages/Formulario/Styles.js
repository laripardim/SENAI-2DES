import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        paddingTop: 10,
    },
    input: {
        border: "1px solid #000",
        fontFamily: "helvetica",
        borderRadius: 5,
        padding: 5,
        marginBottom: 10,
    },
    addJogador: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
    },
    image: {
        width: 30,
        height: 30,
    },
    text: {
        fontSize: 16,
        fontWeight: '900',
        marginLeft: 10,
    },
    btn: {
        padding: 5,
        backgroundColor: "#0390FC",
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBtn: {
        fontWeight: '600',
        color: '#fff'
    }
});