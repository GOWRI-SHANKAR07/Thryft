import { StyleSheet } from "react-native";
const { Colors, heightPixel, pixelSizeVertical, pixelSizeHorizontal, widthPixel, fontPixel, Fonts } = require("../Constants/Theme");

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
        fontFamily: 'Montserrat-Bold',
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
        borderRadius: 60,
        marginRight: pixelSizeHorizontal(20),
    },

    active: {
        right: pixelSizeHorizontal(18),
        top: pixelSizeVertical(20),
        borderWidth: 1,
        borderColor: '#ffffff00',
    },

    prfHeadCont: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },

    prfHeadTxt: {
        color: Colors.white,
        right: pixelSizeHorizontal(10),
        fontFamily: 'Montserrat-Bold',
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
        paddingLeft: pixelSizeHorizontal(10),
        paddingRight: pixelSizeHorizontal(10)
    },

    enableBtn: {
        justifyContent: "center",
        alignItems: "center",
    },

    switch: {
        borderWidth: 1,
        borderColor: '#ffffff00',
        top: pixelSizeVertical(3),
        paddingRight: pixelSizeHorizontal(5)
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
        fontFamily: 'Montserrat-Medium',
    },

    divLine: {
        width: widthPixel(300),
        borderTopWidth: 1,
        borderColor: Colors.greyMessage,
        alignSelf: "center"
    }
})

export { styles }