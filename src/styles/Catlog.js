import { StyleSheet } from "react-native";
import { heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "../Constants/Theme";


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff'
    },

    headerCont: {
        backgroundColor: '#121a14',
        height: heightPixel(110),
        flexDirection: 'row',
        justifyContent: "space-between",
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

    menu: {
        color: '#fff',
        marginRight: pixelSizeHorizontal(10),
    },

    sellCont: {
        backgroundColor: '#385fc3',
        alignSelf: "center",
        width: widthPixel(360),
        height: heightPixel(150),
        marginTop: pixelSizeVertical(25),
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },

    sellTxt: {
        color: '#fff',
        width: widthPixel(210),
        textAlign: "center",
        fontSize: 15
    },

    sellBtn: {
        backgroundColor: '#fff',
        width: widthPixel(210),
        height: heightPixel(40),
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: pixelSizeVertical(15),
    },

    lstCont: {
        width: widthPixel(360),
        alignSelf: "center"
    },

    active: {
        right: pixelSizeHorizontal(35),
        top: pixelSizeVertical(18),
    }
})

export { styles };