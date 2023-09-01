import { StyleSheet, Dimensions } from "react-native";
const { Colors, heightPixel, pixelSizeVertical, pixelSizeHorizontal, widthPixel, fontPixel, Fonts } = require("../Constants/Theme");

const WINDOW_HEIGHT = Dimensions.get('window').height;
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.08);

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
    },
    cameraContainer: {
        backgroundColor: '#fff'
    },
    text: {
        color: '#fff'
    },
    bottomButtonsContainer: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: 28,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    openButton: {
        position: 'absolute',
        top: 100,
        right: 20,
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5A45FF',
        opacity: 0.7
    },
    closeButton: {
        position: 'absolute',
        top: 35,
        right: 20,
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5A45FF',
        opacity: 0.7
    },
    capture: {
        backgroundColor: '#5A45FF',
        borderRadius: 5,
        height: CAPTURE_SIZE,
        width: CAPTURE_SIZE,
        borderRadius: Math.floor(CAPTURE_SIZE / 2),
        marginBottom: 28,
        marginHorizontal: 30
    },
    closeCam: {
        position: 'absolute',
        bottom: pixelSizeVertical(700),
        right: 20,
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5A45FF',
        opacity: 0.7
    }
})

export { styles }