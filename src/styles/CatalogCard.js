import { StyleSheet } from "react-native";
import { Colors, fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "../Constants/Theme";


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        width: widthPixel(190),
        marginTop: pixelSizeVertical(10)
    },

    prdImg: {
        width: widthPixel(170),
        height: heightPixel(210),
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 20
    },

    dtsCont: {
        margin: pixelSizeVertical(5),
    },

    condCont: {
        backgroundColor: Colors.greyMessage,
        width: widthPixel(125),
        flexDirection: "row",
        padding: pixelSizeHorizontal(5),
        marginTop: pixelSizeVertical(5),
        borderRadius: 20,
        alignItems: "center"
    },

    condTxt: {
        fontSize: fontPixel(13),
        color: Colors.primary,
    },

    titleCont: {
        flexDirection: 'row',
        marginTop: pixelSizeVertical(7),
        marginBottom: pixelSizeVertical(5),
    },

    titleTxt: {
        fontWeight: '900',
        color: Colors.black
    },

    edtBtn: {
        borderWidth: 1.5,
        borderColor: Colors.primary,
        margin: pixelSizeVertical(5),
        borderRadius: 20,
        padding: pixelSizeHorizontal(10),
    },

    edtBtnTxt: {
        color: Colors.primary,
        textAlign: "center"
    },


})

export { styles };