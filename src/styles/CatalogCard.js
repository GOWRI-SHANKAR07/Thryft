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
        backgroundColor: 'lightgray',
        width: widthPixel(125),
        flexDirection: "row",
        padding: pixelSizeHorizontal(5),
        marginTop: pixelSizeVertical(5),
        borderRadius: 20,
        alignItems: "center"
    },

    condTxt: {
        fontSize: fontPixel(13),
        color: '#385fc3'
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
        borderColor: '#385fc3',
        margin: pixelSizeVertical(5),
        borderRadius: 20,
        padding: pixelSizeHorizontal(10),
    },

    edtBtnTxt: {
        color: '#385fc3',
        textAlign: "center"
    },


})

export { styles };