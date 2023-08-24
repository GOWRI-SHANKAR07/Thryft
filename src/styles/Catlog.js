import { StyleSheet } from "react-native";
import { Colors, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "../Constants/Theme";


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        backgroundColor: Colors.white
    },

    headerCont: {
        backgroundColor: Colors.secondary,
        height: heightPixel(110),
        flexDirection: 'row',
        justifyContent: "space-between",
    },

    headerTxt: {
        color: Colors.white,
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

    menu: {
        color: Colors.white,
        marginRight: pixelSizeHorizontal(10),
    },

    sellCont: {
        backgroundColor: Colors.primary,
        alignSelf: "center",
        width: widthPixel(360),
        height: heightPixel(150),
        marginTop: pixelSizeVertical(25),
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },

    sellTxt: {
        color: Colors.white,
        width: widthPixel(210),
        textAlign: "center",
        fontSize: 15,
        fontFamily: 'Montserrat-SemiBold',
    },

    sellBtn: {
        backgroundColor: Colors.white,
        width: widthPixel(210),
        height: heightPixel(40),
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: pixelSizeVertical(15),
    },

    lstCont: {
        width: widthPixel(360),
        alignSelf: "center",
        flexDirection: 'column',
        flexWrap: 'nowrap',
    },

    active: {
        right: pixelSizeHorizontal(18),
        top: pixelSizeVertical(18),
        borderWidth: 1,
        borderColor: '#ffffff00',
    }
})

export { styles };