import { StyleSheet } from "react-native";
const { Colors, heightPixel, pixelSizeVertical, pixelSizeHorizontal, widthPixel, fontPixel } = require("../Constants/Theme");

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        backgroundColor: Colors.white,
    },

    headerCont: {
        backgroundColor: '#121a14',
        height: heightPixel(170),
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: '#fff',
        padding: pixelSizeHorizontal(20)
    },

    headerTxt: {
        color: '#fff',
        paddingTop: pixelSizeVertical(50),
        paddingLeft: pixelSizeHorizontal(20),
        fontSize: 20,
    },

    headerRgtCont: {
        flexDirection: 'row',
        paddingTop: pixelSizeVertical(10),
        paddingLeft: pixelSizeHorizontal(20),
        alignItems: "center"
    },

    imgCont: {
        width: widthPixel(60),
        height: heightPixel(60),
        borderRadius: 30,
        marginRight: pixelSizeHorizontal(20),
    },

    active: {
        right: pixelSizeHorizontal(35),
        top: pixelSizeVertical(20),
    },

    prfHeadCont: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },

    prfHeadTxt: {
        color: Colors.white,
        right: pixelSizeHorizontal(10)
    },

    modeCont: {
        borderWidth: 1,
        borderColor: Colors.greyMessage,
        backgroundColor: Colors.white,
        borderRadius: 30,
        justifySelf: "center",
        alignSelf: "center",
        width: widthPixel(340),
        bottom: pixelSizeVertical(30)
    },

    mode: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        padding: pixelSizeHorizontal(10),
    },

    switch: {
        borderWidth: 1,
        borderColor: '#fff',
        paddingRight: pixelSizeHorizontal(5),
    },

    compCont: {
        borderWidth: 1,
        borderColor: Colors.greyMessage,
        borderRadius: 10,
        width: widthPixel(330),
        alignSelf: "center",
    },

    profileCont: {
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: pixelSizeVertical(10)
    },

    inner1Cont: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },

    profileTxt: {
        paddingLeft: pixelSizeHorizontal(10),
    },

    divLine: {
        width: widthPixel(300),
        borderTopWidth: 1,
        borderColor: Colors.greyMessage,
        alignSelf: "center"
    }
})

export { styles }